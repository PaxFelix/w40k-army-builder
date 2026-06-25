/**
 * W40K Army Builder — Imperial Agents (10th Edition)
 *
 * Datasheets from Codex: Imperial Agents. Names-only abilities/rules;
 * stats, weapons, points and keywords are factual game data.
 * Legends and Forge World datasheets are intentionally omitted.
 *
 * Self-registers into window.W40K_FACTIONS, assembled by data/factions.js.
 */
(function () {
    "use strict";

    const ia = {
        id: "imperial-agents",
        name: "Imperial Agents",
        icon: "🕵️",
        allegiance: "Imperium",
        flavour: "",
        armyRules: [
            { name: "Assigned Agents", flavour: "Throughout the Imperium there exist numerous martial organisations and shadowy institutions. Bodies of armed warriors or solitary agents from these groups possess specialist skills, unusual equipment and vested interests that lead them to be attached to larger Imperial armies. Some are requisitioned by the army's commander for their particular abilities, others are assigned by their hidden masters to achieve singular agendas. The most powerful have the authority and reputation to enforce their presence on the field of battle.", text: "If your Army Faction is AGENTS OF THE IMPERIUM, then in the Select Detachment Rules step, you can select one of the available Detachments from this book as normal.\n\nIf your Army Faction is not AGENTS OF THE IMPERIUM, but every model in your army has the IMPERIUM keyword, you can include AGENTS OF THE IMPERIUM units in your army even if they do not have the Faction keyword you selected in the Select Army Faction step. In this case, the maximum number of AGENTS OF THE IMPERIUM units you can include in your army depends on the battle size, as shown below (Retinue Units / Character Units / Requisitioned Units):\n- Incursion: 1 / 1 / 1\n- Strike Force: 2 / 2 / 1\n- Onslaught: 3 / 3 / 2\nNote that you can include AGENTS OF THE IMPERIUM DEDICATED TRANSPORT units in such an army as normal, but each unit must start the battle with one or more units embarked within it, or it cannot be deployed for that battle and will count as having been destroyed during the first battle round." },
            { name: "Kill Team", flavour: "", text: "Each time an attack targets this unit, if it contains models with different Toughness characteristics, until the attacking unit has finished making its attacks, use the Toughness characteristic of the majority of the models in that unit when determining what roll is required for that attack to successfully wound. If two or more Toughness characteristics are tied for majority, use the highest value.\n\nFor the purposes of determining which models in this unit can embark within a TRANSPORT, Kill Team Terminator models, Kill Team Outrider models, Kill Team Biker models and models equipped with a jump pack each take up the space of 2 models, but can otherwise embark within any TRANSPORT their unit can embark within, even though similar models in other units have the TERMINATOR, MOUNTED or JUMP PACK keywords.\n\nFor the purposes of interacting with terrain features, all models in units with this ability are considered INFANTRY models, even though similar models in other units may have the MOUNTED or JUMP PACK keywords." }
        ],
        detachments: [
            {
                name: "Ordo Xenos Alien Hunters",
                flavour: "",
                rule: { name: "Deathwatch Mission Tactics", flavour: "Thousands of years of collated strategic data and hard-won combat experience have provided the Deathwatch with the ultimate battlefield tactics to combat almost any foe.", text: "At the start of your Command phase, you can select one of the Mission Tactics listed below. Until the start of your next Command phase, that Mission Tactic is active and its effects apply to all DEATHWATCH units from your army. Each Mission Tactic can only be selected once per battle.\n\nFuror Tactics: The warriors of the Deathwatch are often sorely outnumbered by swarming foes, yet by striking for maximum indiscriminate carnage they soon even the odds. While this Mission Tactic is active, weapons equipped by DEATHWATCH units from your army have the [Sustained Hits 1] ability.\n\nMalleus Tactics: Even the largest behemoth has a weak point, and the Deathwatch find them all. While this Mission Tactic is active, weapons equipped by DEATHWATCH units from your army have the [Lethal Hits] ability.\n\nPurgatus Tactics: Adopting Purgatus tactics, the Deathwatch focus their ire upon the commanders of the enemy host. While this Mission Tactic is active, each time a DEATHWATCH model from your army makes an attack, on a Critical Wound, that attack has the [Precision] ability.", restrictions: "" },
                enhancements: [
                    { name: "Amulet of Auto-Chastisement", cost: 25, restriction: "WATCH MASTER model only.", text: "This talisman houses a hate-filled machine spirit that despises alien artifice. Its influence can be focused against the war engines of aliens and traitors alike to disrupt or even paralyse them altogether.\n\nAt the start of your opponent's Shooting phase, select one enemy VEHICLE unit (excluding TITANIC units) within 12\" of and visible to the bearer. That unit must take a Leadership test. If that test is passed, until the end of the phase, each time a model in that unit makes an attack, subtract 1 from the Hit roll; if that test is failed, that unit is not eligible to shoot this phase." },
                    { name: "Beacon Angelis", cost: 30, restriction: "WATCH MASTER model only.", text: "The Beacon Angelis was devised to guide the Deathwatch to the threshold of the alien adversary. Housed within a reliquary, it calls out to the warriors' augur arrays with the voices of a hundred electric cherubim, its summons so strong that it draws the righteous unto its locale regardless of what darkness may surround it.\n\nModels in the bearer's unit have the Deep Strike ability. In addition, you can target the bearer's unit with the Rapid Ingress Stratagem for 0CP." },
                    { name: "Blackweave Shroud", cost: 15, restriction: "AGENTS OF THE IMPERIUM model only.", text: "This hypermorphic bodyglove of uncertain origin is worn beneath a warrior's armour. It forms a fibrous medium that shields the warrior's most vital systems.\n\nThe bearer has the Feel No Pain 4+ ability." },
                    { name: "Universal Anathema", cost: 10, restriction: "AGENTS OF THE IMPERIUM model only.", text: "A fragment of STC technology, this device tastes the spoor of its owner's foes, then fashions tailored toxins not even the most resilient victim can long endure.\n\nMelee weapons equipped by the bearer have the [Anti-Infantry 2+] and [Anti-Monster 4+] abilities." },
                ],
                stratagems: [
                    { name: "Armour of Contempt", cp: 1, type: "Battle Tactic", when: "Your opponent's Shooting phase or the Fight phase, just after an enemy unit has selected its targets.", target: "One DEATHWATCH unit from your army that was selected as the target of one or more of the attacking unit's attacks.", effect: "Until the attacking unit has finished making its attacks, each time an attack targets your unit, worsen the Armour Penetration characteristic of that attack by 1.", restrictions: "" },
                    { name: "Adaptive Tactics", cp: 1, type: "Strategic Ploy", when: "Your Command phase.", target: "One DEATHWATCH unit from your army.", effect: "Select the Furor Tactics, Malleus Tactics or Purgatus Tactics. Until the start of your next Command phase, that Deathwatch Mission Tactic is active for your unit instead of any other Deathwatch Mission Tactic that is active for your army, even if you have already selected that Deathwatch Mission Tactic this battle.", restrictions: "" },
                    { name: "Hellfire Rounds", cp: 1, type: "Wargear", when: "Your Shooting phase.", target: "One DEATHWATCH INFANTRY unit from your army that has not been selected to shoot this phase.", effect: "Until the end of the phase, ranged weapons (excluding Devastating Wounds weapons) equipped by models in your unit have the [Anti-Infantry 2+] and [Anti-Monster 5+] abilities.", restrictions: "You cannot select any units that have already been targeted with either the Kraken Rounds or Dragonfire Rounds Stratagems this phase." },
                    { name: "Dragonfire Rounds", cp: 1, type: "Wargear", when: "Your Shooting phase.", target: "One DEATHWATCH INFANTRY unit from your army that has not been selected to shoot this phase.", effect: "Until the end of the phase, ranged weapons equipped by models in your unit have the [Assault] and [Ignores Cover] abilities.", restrictions: "You cannot select any units that have already been targeted with either the Kraken Rounds or Hellfire Rounds Stratagems this phase." },
                    { name: "Kraken Rounds", cp: 1, type: "Wargear", when: "Your Shooting phase.", target: "One DEATHWATCH INFANTRY unit from your army that has not been selected to shoot this phase.", effect: "Until the end of the phase, improve the Armour Penetration characteristic of ranged weapons equipped by models in your unit by 1 and improve the Range characteristic of those weapons by 6\".", restrictions: "You cannot select any units that have already been targeted with either the Dragonfire Rounds or Hellfire Rounds Stratagems this phase." },
                    { name: "Rapid Tactical Relocation", cp: 1, type: "Strategic Ploy", when: "End of your opponent's Fight phase.", target: "One INQUISITOR or DEATHWATCH INFANTRY unit from your army.", effect: "Remove your unit from the battlefield. In the Reinforcements step of your next Movement phase, set your unit up anywhere on the battlefield that is more than 9\" horizontally away from all enemy models.", restrictions: "You cannot select a unit that is within Engagement Range of one or more enemy units." },
                ]
            },
            {
                name: "Ordo Hereticus Purgation Force",
                flavour: "",
                rule: { name: "Root Out Heresy", flavour: "No matter how cunningly their heretical prey hides, they cannot escape the zealous retribution of the Ordo Hereticus.", text: "Ranged weapons equipped by ADEPTUS ARBITES, INQUISITOR, INQUISITORIAL AGENTS and ORDO HERETICUS models from your army have the [Ignores Cover] ability.\n\nEach time an ADEPTUS ARBITES, INQUISITOR, INQUISITORIAL AGENTS or ORDO HERETICUS model from your army makes an attack that targets a CHAOS unit containing 5 or more models, that attack has the [Sustained Hits 1] ability.", restrictions: "" },
                enhancements: [
                    { name: "Ignis Judicium", cost: 10, restriction: "INQUISITOR or MINISTORUM PRIEST model only.", text: "An artificer-crafted flame projector of focused and terrible vehemence, this weapon has been the bane of countless heretics across the ages.\n\nThe bearer's ranged weapons have the [Devastating Wounds], [Melta 1] and [Precision] abilities." },
                    { name: "Liber Heresius", cost: 10, restriction: "INQUISITOR or MINISTORUM PRIEST model only.", text: "This ancient grimoire contains the collected accounts of many Inquisitorial purges, and is a trove of lore for those seeking to ambush and entrap heretics.\n\nAfter both players have deployed their armies, select up to three AGENTS OF THE IMPERIUM units from your army and redeploy them. When doing so, you can set those units up in Strategic Reserves if you wish, regardless of how many units are already in Strategic Reserves." },
                    { name: "No Escape (Aura)", cost: 25, restriction: "INQUISITOR model only.", text: "None but the most diabolical or desperate stand any chance of slipping through this Inquisitor's grasp.\n\nWhile an enemy unit is within 6\" of the bearer, each time it is selected to Fall Back it must first take a Leadership test. If that test is failed, that unit must Remain Stationary this phase instead." },
                    { name: "Witch Hunter", cost: 15, restriction: "INQUISITOR or MINISTORUM PRIEST model only.", text: "This merciless Imperial agent is monomaniacally focused upon hunting and slaying psykers.\n\nWhile the bearer is leading a unit, each time a model in that unit makes an attack that targets a PSYKER unit, you can re-roll the Hit roll." },
                ],
                stratagems: [
                    { name: "Stun Grenades", cp: 1, type: "Wargear", when: "Start of any phase (excluding the Command phase).", target: "One ADEPTUS ARBITES, INQUISITORIAL AGENTS or ORDO HERETICUS GRENADES unit from your army that is not within Engagement Range of one or more enemy units.", effect: "Select one enemy unit (excluding MONSTERS or VEHICLES) within 8\" of and visible to your unit. That enemy unit must take a Battle-shock test and, until the end of the phase, each time a model in that unit makes an attack, subtract 1 from the Hit roll.", restrictions: "" },
                    { name: "Dispense Justice", cp: 1, type: "Battle Tactic", when: "Your Shooting phase or the Fight phase.", target: "One ADEPTUS ARBITES, INQUISITORIAL AGENTS or ORDO HERETICUS unit from your army that has not been selected to shoot or fight this phase.", effect: "Until the end of the phase, weapons equipped by models in your unit have the [Lethal Hits] ability.", restrictions: "" },
                    { name: "Inviolate Jurisdiction", cp: 1, type: "Strategic Ploy", when: "Your opponent's Shooting phase or the Fight phase, just after an enemy unit has selected its targets.", target: "One ADEPTUS ARBITES, INQUISITORIAL AGENTS or ORDO HERETICUS INFANTRY unit from your army within range of an objective marker and that was selected as the target of one or more of the attacking unit's attacks.", effect: "Until the end of the phase, models in your unit have the Feel No Pain 5+ ability.", restrictions: "" },
                    { name: "Execution Order", cp: 2, type: "Epic Deed", when: "Your Command phase.", target: "One ADEPTUS ARBITES, INQUISITORIAL AGENTS or ORDO HERETICUS INFANTRY unit from your army.", effect: "Select one enemy CHARACTER unit on the battlefield. Until the start of your next Command phase, each time a model in your unit targets that CHARACTER unit, its weapons have the [Precision] ability.", restrictions: "" },
                    { name: "Line of Fire", cp: 1, type: "Strategic Ploy", when: "Your Shooting phase.", target: "One ADEPTUS ARBITES, INQUISITORIAL AGENTS or ORDO HERETICUS unit from your army that has not been selected to shoot this phase.", effect: "Until the end of the phase, models in your unit can target enemy units that are within Engagement Range of one or more friendly units with ranged weapons (excluding Blast weapons), provided the target is within 12\".", restrictions: "" },
                    { name: "Exact Punishment", cp: 1, type: "Strategic Ploy", when: "Your opponent's Shooting phase, just after an AGENTS OF THE IMPERIUM unit from your army is destroyed as the result of an enemy unit's attacks.", target: "One ADEPTUS ARBITES, INQUISITORIAL AGENTS or ORDO HERETICUS unit from your army that was within 6\" of the destroyed unit (you cannot target the destroyed unit with the Stratagem).", effect: "After the attacking unit has shot, your unit can shoot as if it were your Shooting phase, but when resolving those attacks it can only target that enemy unit (and only if it is an eligible target).", restrictions: "" },
                ]
            },
            {
                name: "Ordo Malleus Daemon Hunters",
                flavour: "",
                rule: { name: "Destroy the Daemonic", flavour: "Knowing the vital nature of their mission, the servants of the Ordo Malleus fight all the harder to lay their enemies low.", text: "Each time an INQUISITOR, INQUISITORIAL AGENTS or ORDO MALLEUS model from your army makes an attack, re-roll a Hit roll of 1 and, if the target of that attack is a DAEMON unit, re-roll a Wound roll of 1 as well.", restrictions: "" },
                enhancements: [
                    { name: "Daemon Slayer", cost: 10, restriction: "INQUISITOR model only.", text: "Some whisper this weapon of banishment is in fact host to a hostile warp entity in its own right.\n\nAdd 1 to the Attacks characteristic of the bearer's melee weapons, and those weapons have the [Anti-Daemon 3+] ability." },
                    { name: "Formidable Resolve", cost: 5, restriction: "INQUISITOR model only.", text: "Inquisitors of the Ordo Malleus are amongst the hardiest and most bombastic of their kind. They must be to survive their duties.\n\nImprove the bearer's Leadership and Wounds characteristics by 1. Once per battle, at the start of any phase, you can select one friendly Battle-shocked unit within 12\" of the bearer. That unit is no longer Battle-shocked." },
                    { name: "Gift of the Prescient", cost: 20, restriction: "INQUISITOR model only.", text: "Guided by the scryings of their Prognosticars, the Grey Knights strike with deadly precision and timing.\n\nOnce per battle, if the bearer is on the battlefield, you can use the Rapid Ingress Stratagem for 0CP. When doing so, you must target a GREY KNIGHTS TERMINATOR SQUAD unit from your army, and when using that Stratagem, that unit can be set up anywhere on the battlefield that is more than 3\" away from all enemy units." },
                    { name: "Grimoire of True Names (Aura)", cost: 10, restriction: "INQUISITOR model only.", text: "To wield the true name of a daemon is to control its supernatural power, though whether in the name of banishment or to be unleashed as a weapon of terror falls to the discretion of the grimoire's keeper.\n\nWhile an enemy unit is within 9\" of the bearer, worsen the Leadership characteristic of models in that unit by 1. In addition, while an enemy DAEMON unit is within 9\" of the bearer, each time a model in that DAEMON unit makes an attack, subtract 1 from the Hit roll and subtract 1 from the Wound roll." },
                ],
                stratagems: [
                    { name: "Ritual of Warding", cp: 1, type: "Strategic Ploy", when: "Start of any Command phase.", target: "One INQUISITOR, INQUISITORIAL AGENTS or ORDO MALLEUS unit from your army that is within range of an objective marker you control.", effect: "That objective marker is said to be Warded and remains under your control, even if you have no models within range of it, until your opponent controls it at the start or end of any turn. While an objective marker is Warded and under your control, enemy DAEMON units cannot be set up on the battlefield within 6\" of it.", restrictions: "" },
                    { name: "Rites of Exorcism", cp: 1, type: "Strategic Ploy", when: "Your Shooting phase or the Fight phase.", target: "One INQUISITOR, INQUISITORIAL AGENTS or ORDO MALLEUS unit from your army.", effect: "Select one enemy DAEMON unit within 12\" and visible to your unit. That unit must take a Battle-shock test. If that test is failed, then until the end of the phase, each time a friendly AGENTS OF THE IMPERIUM unit makes an attack that targets that DAEMON unit, that attack has the [Devastating Wounds] ability.", restrictions: "" },
                    { name: "Steel Heart", cp: 1, type: "Strategic Ploy", when: "Your Movement phase, just after a GREY KNIGHTS TERMINATOR SQUAD unit from your army Falls Back.", target: "That GREY KNIGHTS TERMINATOR SQUAD unit.", effect: "Until the end of the turn, your unit is eligible to shoot and declare a charge in a turn in which it Fell Back.", restrictions: "" },
                    { name: "Truesilver Armour", cp: 1, type: "Wargear", when: "Your opponent's Shooting phase or the Fight phase, just after an enemy unit has selected its targets.", target: "One GREY KNIGHTS TERMINATOR SQUAD unit from your army that was selected as the target of one or more of the attacking unit's attacks.", effect: "Until the attacking unit has finished making its attacks, each time an attack targets your unit, worsen the Armour Penetration characteristic of that attack by 1.", restrictions: "" },
                    { name: "Hexagrammic Wards", cp: 1, type: "Wargear", when: "Your opponent's Shooting phase or the Fight phase, just after an enemy unit has selected its targets.", target: "One ORDO MALLEUS unit from your army that was selected as the target of one or more of the attacking unit's attacks.", effect: "Until the end of the phase, all Psychic weapons equipped by models in the attacking unit have the [Hazardous] ability.", restrictions: "" },
                    { name: "Psybolt Ammunition", cp: 1, type: "Wargear", when: "Your Shooting phase.", target: "One GREY KNIGHTS TERMINATOR SQUAD unit from your army that has not been selected to shoot this phase.", effect: "Until the end of the phase, ranged weapons equipped by models in your unit have the [Lethal Hits] and [Psychic] abilities.", restrictions: "" },
                ]
            },
            {
                name: "Imperialis Fleet",
                flavour: "",
                rule: { name: "At All Costs", flavour: "While the nature of the missions undertaken by Imperial agents is as varied as they are, the vital importance of these tasks rarely changes. The enemies they face are the most unholy. The prizes they seek are as priceless as they are nightmarishly dangerous. Thus, when such warriors of the Imperium identify a priority target for elimination or acquisition, no effort is too great nor price too high to see their aims achieved.", text: "At the start of your Command phase, you can select one of the following to apply:\n\nEliminate At All Costs: Select one enemy unit on the battlefield. Until the start of your next Command phase, each time an AGENTS OF THE IMPERIUM model from your army makes an attack that targets that enemy unit, add 1 to the Hit roll.\n\nAcquire At All Costs: Select one objective marker on the battlefield. Until the start of your next Command phase, while an AGENTS OF THE IMPERIUM unit from your army is within range of that objective marker, improve the Leadership and Objective Control characteristics of models in that unit by 1 and models in that unit have a 5+ invulnerable save.", restrictions: "" },
                enhancements: [
                    { name: "Clandestine Operation", cost: 15, restriction: "AGENTS OF THE IMPERIUM model only.", text: "This war leader prefers to strike with subtlety and precision, working their forces into advanced positions before commencing hostilities.\n\nAt the start of the Declare Battle Formations step, you can select up to three AGENTS OF THE IMPERIUM INFANTRY units from your army (excluding GREY KNIGHTS TERMINATOR SQUAD units) - those units gain the Infiltrators ability." },
                    { name: "Combat Landers", cost: 10, restriction: "VOIDFARERS model only.", text: "This commander has access to swift drop craft that can bear portions of their forces directly into the heart of the most ferocious battles.\n\nAt the start of the Declare Battle Formations step, you can select up to three VOIDFARERS units from your army - those units gain the Deep Strike ability." },
                    { name: "Digital Weapons", cost: 10, restriction: "AGENTS OF THE IMPERIUM model only.", text: "These potent, short-ranged energy weapons are concealed in precious items of jewellery, the better to lethally surprise the foe.\n\nEach time the bearer is selected to fight, roll three D6: for each 4+, one enemy unit within Engagement Range of the bearer suffers 1 mortal wound. Mortal wounds inflicted by this Enhancement are allocated as if they had the [Precision] ability." },
                    { name: "Fleetmaster", cost: 20, restriction: "VOIDFARERS model only.", text: "Be they a Rogue Trader or some agent of the Imperial Navy, this warrior draws upon a wealth of shrewd voidfarer strategies to aid them in battle.\n\nOnce per battle round, you can target the bearer's unit with the Violent Acquisition, Masters of the Void or Close-quarters Barrage Stratagems for 0CP." },
                ],
                stratagems: [
                    { name: "Violent Acquisition", cp: 2, type: "Strategic Ploy", when: "Your Shooting phase or the Fight phase.", target: "One AGENTS OF THE IMPERIUM unit from your army.", effect: "Until the end of the phase, each time a model in your unit makes an attack that targets an enemy unit within range of an objective marker, that attack has the [Sustained Hits 1], [Lance] and [Ignores Cover] abilities.", restrictions: "" },
                    { name: "Masters of the Void", cp: 1, type: "Epic Deed", when: "Your Movement phase.", target: "One VOIDFARERS CHARACTER unit from your army.", effect: "Until the end of the phase, each AGENTS OF THE IMPERIUM unit from your army that is arriving from Strategic Reserves this turn can be set up within your opponent's deployment zone (all other restrictions still apply).", restrictions: "" },
                    { name: "Close-quarters Barrage", cp: 1, type: "Battle Tactic", when: "Your Shooting phase.", target: "One VOIDFARERS unit from your army.", effect: "Until the end of the phase, each time a model in your unit makes a ranged attack that targets a unit within 12\", improve the Strength and Armour Penetration characteristics of that attack by 1.", restrictions: "" },
                    { name: "Emperor's Will", cp: 1, type: "Strategic Ploy", when: "Your Movement phase.", target: "One AGENTS OF THE IMPERIUM unit from your army.", effect: "Until the end of the phase, your unit is eligible to shoot in a turn in which it Advanced or Fell Back.", restrictions: "" },
                    { name: "Displacer Field", cp: 1, type: "Wargear", when: "Your opponent's Shooting phase, just after an enemy unit has selected its targets.", target: "One AGENTS OF THE IMPERIUM CHARACTER unit from your army (excluding OFFICIO ASSASSINORUM units) that was selected as the target of one or more of the attacking unit's attacks.", effect: "Until the end of the phase, models in your unit have a 4+ invulnerable save and, after the attacking unit has resolved its attacks, unless your unit is within Engagement Range of one or more enemy units, it can make a Normal move of up to 6\" (when doing so, models in this unit move as if they have the Fly keyword).", restrictions: "" },
                    { name: "Selfless Bodyguard", cp: 1, type: "Epic Deed", when: "Your opponent's Shooting phase or the Fight phase, just after an enemy unit has selected its targets.", target: "One AGENTS OF THE IMPERIUM Attached unit that was selected as the target of one or more of the attacking unit's attacks.", effect: "Until the end of the phase, each time an attack with the [Precision] ability is allocated to a CHARACTER model in your unit, if there are one or more Bodyguard models in your unit, roll one D6: on a 2+, that attack is allocated to a Bodyguard model of your choice in your unit instead.", restrictions: "" },
                ]
            },
            {
                name: "Veiled Blade Elimination Force",
                flavour: "The lethally efficient agents of the Officio Assassinorum ordinarily operate alone when stalking their prey. However, when assigned a particularly well-protected or formidable target, assassins from various temples may be brought together alongside other assets drawn from the military, Ecclesiarchal or judicial wings of the Imperium. These bespoke formations possess enough firepower to break through the target's defences and ensure the killing blow is landed.",
                rule: { name: "Extremis Sanction", flavour: "When pursuing an extremis-level target, the agents of the Officio Assassinorum are expected to push their altered minds and bodies beyond the limits of endurance. Additional equipment, augmentation and ammunition may be provided to complete the task.", text: "OFFICIO ASSASSINORUM units from your army can use the Overkill, Soulless Horror and Shieldbreaker abilities twice per battle, instead of once per battle (but cannot use such an ability more than once in the same battle round).\n\nWhen mustering your army, each OFFICIO ASSASSINORUM unit from your army has the relevant Extremis ability shown below (see the enhancements), and you must increase the points cost of each of those units by the amount shown. If this causes your army to exceed the points limit for the battle you are playing, you cannot include that unit in your army.", restrictions: "" },
                enhancements: [
                    { name: "Decoy Targets", cost: 40, restriction: "CALLIDUS ASSASSIN models only.", text: "The agents of the Callidus Temple are known to utilise vat-grown doubles to confound their foes.\n\nTwice per battle, in your Movement phase, you can select one other friendly INFANTRY model that is on the battlefield and not within Engagement Range of one or more enemy units. The selected model is destroyed (ignoring any rules that are triggered when a model is destroyed) and this model is removed from the battlefield and set up again as close as possible to where that destroyed model was and not within Engagement Range of one or more enemy units. This ability cannot be used more than once in the same battle round." },
                    { name: "Esoteric Explosives", cost: 40, restriction: "CULEXUS ASSASSIN models only.", text: "This Culexus operative has been outfitted with various grenades tailored to destroy their assigned targets.\n\nEach time this model is targeted with the Grenades Stratagem, 1 mortal wound is inflicted for each D6 roll of 3+ instead of for each 4+." },
                    { name: "Intraneural Biotech", cost: 35, restriction: "EVERSOR ASSASSIN models only.", text: "This Eversor agent's neurons have been surgically spliced to enhance awareness and speed of thought.\n\nOnce per battle round, you can target this model with the Heroic Intervention or Counter-offensive Stratagem for 0CP, and can do so even if you have already used that Stratagem on a different unit this phase." },
                    { name: "Micromelta Rounds", cost: 45, restriction: "VINDICARE ASSASSIN models only.", text: "These projectiles are tipped with miniaturised melta charges that detonate on impact.\n\nThis model's exitus rifle has the [Anti-Monster 4+] and [Anti-Vehicle 4+] abilities." },
                ],
                stratagems: [
                    { name: "Prime Target", cp: 1, type: "Battle Tactic", when: "Your Shooting phase or the Fight phase.", target: "One AGENTS OF THE IMPERIUM unit from your army that has not been selected to shoot or fight this phase.", effect: "Until the end of the phase, each time a model in your unit makes an attack that targets a CHARACTER unit, re-roll a Wound roll of 1. If that attack is made by an OFFICIO ASSASSINORUM model and it targets the enemy WARLORD, you can re-roll the Wound roll instead.", restrictions: "" },
                    { name: "Hyperstimms", cp: 2, type: "Battle Tactic", when: "Your opponent's Shooting phase or the Fight phase, just after an enemy unit has selected its targets.", target: "One AGENTS OF THE IMPERIUM CHARACTER unit from your army that was selected as the target of one or more of the attacking unit's attacks.", effect: "Until the end of the phase, add 1 to the Toughness characteristic of models in your unit. In addition, if it is an EVERSOR ASSASSIN unit, until the end of the phase, it has the Feel No Pain 4+ ability.", restrictions: "" },
                    { name: "Will-sapping Salvo", cp: 1, type: "Strategic Ploy", when: "Your Shooting phase.", target: "One AGENTS OF THE IMPERIUM INFANTRY unit from your army that has not been selected to shoot this phase.", effect: "Until the end of the phase, ranged weapons equipped by models in your unit have the [Sustained Hits 1] ability. In addition, if it is a CULEXUS ASSASSIN unit, until the end of the phase, change the Damage characteristic of ranged weapons equipped by models in your unit to 3.", restrictions: "" },
                    { name: "Orbital Oversight", cp: 1, type: "Strategic Ploy", when: "Your opponent's Shooting phase, just after an enemy unit has selected its targets.", target: "One AGENTS OF THE IMPERIUM INFANTRY unit from your army that was selected as the target of one or more of the attacking unit's attacks.", effect: "Until the end of the phase, your unit can only be selected as the target of a ranged attack if the attacking model is within 18\", or, if your unit has the Lone Operative ability, if the attacking model is within 6\".", restrictions: "" },
                    { name: "Blind Grenades", cp: 1, type: "Strategic Ploy", when: "Your opponent's Charge phase, just after an enemy unit has declared a charge.", target: "One AGENTS OF THE IMPERIUM GRENADES or VINDICARE ASSASSIN unit from your army that was selected as one of the targets of that charge and is not within Engagement Range of one or more enemy units.", effect: "Until the end of the phase, subtract 1 from Charge rolls made for that enemy unit, or, if your unit is a VINDICARE ASSASSIN, subtract 2 from Charge rolls made for that enemy unit instead.", restrictions: "" },
                    { name: "Ensnaring Trap", cp: 1, type: "Strategic Ploy", when: "End of your opponent's Charge phase.", target: "One AGENTS OF THE IMPERIUM INFANTRY unit from your army that is within 6\" of one or more enemy units and would be eligible to declare a charge against one or more of those enemy units.", effect: "Your unit can declare a charge. When doing so, you must select one or more of those enemy units as the targets of that charge, and your unit does not receive a Charge bonus this turn. In addition, if it is a CALLIDUS ASSASSIN unit and it makes a Charge move as a result of this Stratagem, until the end of the turn, each time a model in your unit makes a melee attack, add 1 to the Wound roll.", restrictions: "" },
                ]
            }
        ],
        units: [
                {
                        "id": "ia-callidus-assassin",
                        "name": "Callidus Assassin",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 100
                                }
                        ],
                        "stats": {
                                "m": "7\"",
                                "t": 4,
                                "sv": "6+",
                                "w": 4,
                                "ld": "6+",
                                "oc": 1
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Neural shredder",
                                                "range": "12\"",
                                                "a": "D6",
                                                "bs": "N/A",
                                                "s": 5,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": [
                                                        "Anti-Infantry 2+",
                                                        "Precision",
                                                        "Torrent"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Phase sword and poison blades",
                                                "range": "Melee",
                                                "a": 5,
                                                "ws": "2+",
                                                "s": 5,
                                                "ap": -4,
                                                "d": 2,
                                                "keywords": [
                                                        "Lethal Hits",
                                                        "Precision"
                                                ]
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Deep Strike",
                                        "Fights First",
                                        "Infiltrators",
                                        "Lone Operative"
                                ],
                                "faction": [
                                        "Assigned Agents"
                                ],
                                "wargear": [],
                                "other": [
                                        "Acrobatic Escape",
                                        "Lord of Deceit"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Epic Hero",
                                "Imperium",
                                "Officio Assassinorum",
                                "Callidus Assassin"
                        ],
                        "factionKeywords": [
                                "Agents Of The Imperium"
                        ],
                        "compositionText": "1 Callidus Assassin – EPIC HERO This model is equipped with: neural shredder; phase sword and poison blades. SHADOW ASSIGNMENT This model cannot be selected to be your WARLORD. If your army faction is AGENTS OF THE IMPERIUM, then during the Declare Battle Formations step, you can replace this model with a different OFFICIO ASSASSINORUM model, provided the total points value of the new model does not exceed the points value of the model it replaced. Your army cannot include duplicates of the same model (i.e. after replacing a model with this rule, your army cannot have more than 1 VINDICARE ASSASSIN, it cannot have more than 1 CULEXUS ASSASSIN, it cannot have more than 1 EVERSOR ASSASSIN and it cannot have more than 1 CALLIDUS ASSASSIN)."
                },
                {
                        "id": "ia-culexus-assassin",
                        "name": "Culexus Assassin",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 85
                                }
                        ],
                        "stats": {
                                "m": "7\"",
                                "t": 4,
                                "sv": "6+",
                                "w": 4,
                                "ld": "6+",
                                "oc": 1
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Animus speculum",
                                                "range": "24\"",
                                                "a": 3,
                                                "bs": "2+",
                                                "s": 5,
                                                "ap": -2,
                                                "d": "D3",
                                                "keywords": [
                                                        "Anti-Psyker 2+",
                                                        "Assault",
                                                        "Precision",
                                                        "Psychic Assassin"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Life-draining touch",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "2+",
                                                "s": 4,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Anti-Psyker 2+",
                                                        "Devastating Wounds",
                                                        "Precision"
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
                                        "Assigned Agents"
                                ],
                                "wargear": [],
                                "other": [
                                        "Etheric Emergence",
                                        "Abomination",
                                        "Soulless Horror"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Epic Hero",
                                "Grenades",
                                "Imperium",
                                "Officio Assassinorum",
                                "Culexus Assassin"
                        ],
                        "factionKeywords": [
                                "Agents Of The Imperium"
                        ],
                        "compositionText": "1 Culexus Assassin – EPIC HERO This model is equipped with: animus speculum; life-draining touch. SHADOW ASSIGNMENT This model cannot be selected to be your WARLORD. If your army faction is AGENTS OF THE IMPERIUM, then during the Declare Battle Formations step, you can replace this model with a different OFFICIO ASSASSINORUM model, provided the total points value of the new model does not exceed the points value of the model it replaced. Your army cannot include duplicates of the same model (i.e. after replacing a model with this rule, your army cannot have more than 1 VINDICARE ASSASSIN, it cannot have more than 1 CULEXUS ASSASSIN, it cannot have more than 1 EVERSOR ASSASSIN and it cannot have more than 1 CALLIDUS ASSASSIN)."
                },
                {
                        "id": "ia-eversor-assassin",
                        "name": "Eversor Assassin",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 110
                                }
                        ],
                        "stats": {
                                "m": "9\"",
                                "t": 4,
                                "sv": "6+",
                                "w": 4,
                                "ld": "6+",
                                "oc": 1
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Executioner pistol",
                                                "range": "12\"",
                                                "a": 4,
                                                "bs": "2+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Anti-Infantry 3+",
                                                        "Pistol",
                                                        "Precision",
                                                        "Sustained Hits 3"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Power sword and neuro gauntlet",
                                                "range": "Melee",
                                                "a": 6,
                                                "ws": "2+",
                                                "s": 5,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Anti-Infantry 3+",
                                                        "Precision",
                                                        "Sustained Hits 3"
                                                ]
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Deadly Demise D3",
                                        "Lone Operative",
                                        "Scouts 9\""
                                ],
                                "faction": [
                                        "Assigned Agents"
                                ],
                                "wargear": [],
                                "other": [
                                        "Frenzon",
                                        "Overkill"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Epic Hero",
                                "Grenades",
                                "Imperium",
                                "Officio Assassinorum",
                                "Eversor Assassin"
                        ],
                        "factionKeywords": [
                                "Agents Of The Imperium"
                        ],
                        "compositionText": "1 Eversor Assassin – EPIC HERO This model is equipped with: executioner pistol; power sword and neuro gauntlet. 1 model (AGENTS OF THE IMPERIUM Detachment) 1 model (Assigned Agent) SHADOW ASSIGNMENT This model cannot be selected to be your WARLORD. If your army faction is AGENTS OF THE IMPERIUM, then during the Declare Battle Formations step, you can replace this model with a different OFFICIO ASSASSINORUM model, provided the total points value of the new model does not exceed the points value of the model it replaced. Your army cannot include duplicates of the same model (i.e. after replacing a model with this rule, your army cannot have more than 1 VINDICARE ASSASSIN, it cannot have more than 1 CULEXUS ASSASSIN, it cannot have more than 1 EVERSOR ASSASSIN and it cannot have more than 1 CALLIDUS ASSASSIN)."
                },
                {
                        "id": "ia-inquisitor",
                        "name": "Inquisitor",
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
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Pistol"
                                                ]
                                        },
                                        {
                                                "name": "Combi-weapon",
                                                "range": "24\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": [
                                                        "Anti-Infantry 4+",
                                                        "Devastating Wounds",
                                                        "Rapid Fire 1"
                                                ]
                                        },
                                        {
                                                "name": "Psychic Shock Wave",
                                                "range": "18\"",
                                                "a": "2D6",
                                                "bs": "N/A",
                                                "s": 3,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": [
                                                        "Devastating Wounds",
                                                        "Psychic",
                                                        "Torrent"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Inquisitorial melee weapon",
                                                "range": "Melee",
                                                "a": 5,
                                                "ws": "3+",
                                                "s": 4,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Force weapon",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "3+",
                                                "s": 5,
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
                                        "Assigned Agents"
                                ],
                                "wargear": [],
                                "other": [
                                        "Authority of the Inquisition",
                                        "Power of the Rosette",
                                        "Blessed Wardings",
                                        "Psychic Gifts"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Grenades",
                                "Imperium",
                                "Inquisitor"
                        ],
                        "factionKeywords": [
                                "Agents Of The Imperium"
                        ],
                        "leaderText": "This model can be attached to the following units: Exaction Squad; Grey Knights Terminator Squad; Imperial Navy Breachers; Inquisitorial Agents; Sanctifiers; Sisters of Battle Squad; Subductor Squad; Vigilant Squad.",
                        "compositionText": "1 Inquisitor This model is equipped with: bolt pistol; Inquisitorial melee weapon; blessed wardings. 1 model (AGENTS OF THE IMPERIUM Detachment) 1 model (Assigned Agent)"
                },
                {
                        "id": "ia-inquisitor-coteaz",
                        "name": "Inquisitor Coteaz",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 75
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
                                        },
                                        {
                                                "name": "Psychic Blast",
                                                "range": "18\"",
                                                "a": "D6",
                                                "bs": "3+",
                                                "s": 3,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Anti-Daemon 4+",
                                                        "Anti-Infantry 5+",
                                                        "Devastating Wounds",
                                                        "Psychic"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Nemesis daemon hammer",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "3+",
                                                "s": 9,
                                                "ap": -3,
                                                "d": 3,
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
                                        "Assigned Agents"
                                ],
                                "wargear": [],
                                "other": [
                                        "Authority of the Inquisition",
                                        "Malefic Wardings",
                                        "Spy Network",
                                        "Glovodan Psyber-eagle",
                                        "Designer’s Note"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Epic Hero",
                                "Psyker",
                                "Imperium",
                                "Ordo Malleus",
                                "Inquisitor",
                                "Coteaz"
                        ],
                        "factionKeywords": [
                                "Agents Of The Imperium"
                        ],
                        "leaderText": "This model can be attached to the following units: Exaction Squad; Grey Knights Terminator Squad; Imperial Navy Breachers; Inquisitorial Agents; Subductor Squad; Vigilant Squad.",
                        "compositionText": "1 Inquisitor Coteaz – EPIC HERO This model is equipped with: bolt pistol; Psychic Blast; Nemesis daemon hammer; Glovodan psyber-eagle. 1 model (AGENTS OF THE IMPERIUM Detachment) 1 model (Assigned Agent)"
                },
                {
                        "id": "ia-inquisitor-draxus",
                        "name": "Inquisitor Draxus",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 75
                                }
                        ],
                        "stats": {
                                "m": "6\"",
                                "t": 3,
                                "sv": "3+",
                                "w": 4,
                                "ld": "6+",
                                "oc": 1
                        },
                        "invuln": "5+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Dirgesinger",
                                                "range": "18\"",
                                                "a": 4,
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 2,
                                                "keywords": [
                                                        "Anti-Infantry 4+",
                                                        "Assault",
                                                        "Devastating Wounds"
                                                ]
                                        },
                                        {
                                                "name": "Psychic Tempest",
                                                "range": "18\"",
                                                "a": 6,
                                                "bs": "3+",
                                                "s": 6,
                                                "ap": 0,
                                                "d": 2,
                                                "keywords": [
                                                        "Psychic",
                                                        "Sustained Hits 2"
                                                ]
                                        }
                                ],
                                "melee": [
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
                                        "Assigned Agents"
                                ],
                                "wargear": [],
                                "other": [
                                        "Authority of the Inquisition",
                                        "Xenos Hunter",
                                        "Psychic Veil"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Epic Hero",
                                "Psyker",
                                "Grenades",
                                "Imperium",
                                "Ordo Xenos",
                                "Inquisitor",
                                "Draxus"
                        ],
                        "factionKeywords": [
                                "Agents Of The Imperium"
                        ],
                        "leaderText": "This model can be attached to the following units: Exaction Squad; Imperial Navy Breachers; Inquisitorial Agents; Subductor Squad; Vigilant Squad.",
                        "compositionText": "1 Inquisitor Draxus – EPIC HERO This model is equipped with: Dirgesinger; Psychic Tempest; power fist. 1 model (AGENTS OF THE IMPERIUM Detachment) 1 model (Assigned Agent)"
                },
                {
                        "id": "ia-inquisitor-greyfax",
                        "name": "Inquisitor Greyfax",
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
                                "w": 4,
                                "ld": "6+",
                                "oc": 1
                        },
                        "invuln": "5+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Castigation",
                                                "range": "18\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 8,
                                                "ap": -2,
                                                "d": 3,
                                                "keywords": [
                                                        "Anti-Character 4+",
                                                        "Devastating Wounds",
                                                        "Precision",
                                                        "Psychic"
                                                ]
                                        },
                                        {
                                                "name": "Condemnor stake",
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
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Master-crafted power sword",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "3+",
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
                                        "Assigned Agents"
                                ],
                                "wargear": [],
                                "other": [
                                        "Authority of the Inquisition",
                                        "Psyoculum",
                                        "No Mercy"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Epic Hero",
                                "Psyker",
                                "Grenades",
                                "Imperium",
                                "Ordo Hereticus",
                                "Inquisitor",
                                "Greyfax"
                        ],
                        "factionKeywords": [
                                "Agents Of The Imperium"
                        ],
                        "leaderText": "This model can be attached to the following units: Exaction Squad; Imperial Navy Breachers; Inquisitorial Agents; Sanctifiers; Sisters of Battle Squad; Subductor Squad; Vigilant Squad.",
                        "compositionText": "1 Inquisitor Greyfax – EPIC HERO This model is equipped with: Castigation; condemnor stake; master-crafter power sword."
                },
                {
                        "id": "ia-inquisitor-kroyle",
                        "name": "Inquisitor Kroyle",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 100
                                }
                        ],
                        "stats": {
                                "m": "12\"",
                                "t": 4,
                                "sv": "3+",
                                "w": 6,
                                "ld": "6+",
                                "oc": 2
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Jindarii tox-cycler",
                                                "range": "36\"",
                                                "a": 1,
                                                "bs": "2+",
                                                "s": 6,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Anti-Monster 2+",
                                                        "Heavy",
                                                        "Precision"
                                                ]
                                        },
                                        {
                                                "name": "Stubcarbine",
                                                "range": "12\"",
                                                "a": 2,
                                                "bs": "2+",
                                                "s": 5,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Pistol"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Butcher blade",
                                                "range": "Melee",
                                                "a": 5,
                                                "ws": "3+",
                                                "s": 4,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Garralisk's claws and teeth",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "4+",
                                                "s": 5,
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
                                        "Lone Operative",
                                        "Scouts 6\""
                                ],
                                "faction": [
                                        "Assigned Agents"
                                ],
                                "wargear": [],
                                "other": [
                                        "On My Signal, Fire!",
                                        "Tox-cycler"
                                ]
                        },
                        "keywords": [
                                "Mounted",
                                "Character",
                                "Epic Hero",
                                "Imperium",
                                "Grenades",
                                "Ordo Xenos",
                                "Inquisitor",
                                "Kroyle"
                        ],
                        "factionKeywords": [
                                "Agents Of The Imperium"
                        ],
                        "compositionText": "1 Inquisitor Kroyle – EPIC HERO This model is equipped with: Jindarii tox-cycler; stubcarbine; butcher blade; Garralisk’s claws and teeth. 1 model (AGENTS OF THE IMPERIUM Detachment) 1 model (Assigned Agent)"
                },
                {
                        "id": "ia-ministorum-priest",
                        "name": "Ministorum Priest",
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
                                                "ws": "4+",
                                                "s": 4,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Zealot's vindictor",
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
                                        "Assigned Agents"
                                ],
                                "wargear": [],
                                "other": [
                                        "Holy Hatred",
                                        "Zealot"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Imperium",
                                "Ordo Hereticus",
                                "Ministorum Priest"
                        ],
                        "factionKeywords": [
                                "Agents Of The Imperium"
                        ],
                        "leaderText": "This model can be attached to the following units: Exaction Squad; Imperial Navy Breachers; Inquisitorial Agents; Sanctifiers; Sisters of Battle Squad; Subductor Squad; Vigilant Squad.",
                        "compositionText": "1 Ministorum Priest This model is equipped with: zealot’s vindictor."
                },
                {
                        "id": "ia-navigator",
                        "name": "Navigator",
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
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [
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
                                                "name": "Force-orb cane",
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
                                "faction": [
                                        "Assigned Agents"
                                ],
                                "wargear": [],
                                "other": [
                                        "Gaze into the Empyrean",
                                        "Third Eye"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Psyker",
                                "Imperium",
                                "Voidfarers",
                                "Navigator"
                        ],
                        "factionKeywords": [
                                "Agents Of The Imperium"
                        ],
                        "leaderText": "This model can be attached to the following units: Imperial Navy Breachers; Voidsmen-at-arms.",
                        "compositionText": "1 Navigator This model is equipped with: laspistol; force-orb cane. 1 model (AGENTS OF THE IMPERIUM Detachment) 1 model (Assigned Agent)"
                },
                {
                        "id": "ia-rogue-trader-entourage",
                        "name": "Rogue Trader Entourage",
                        "role": "infantry",
                        "points": [
                                {
                                        "models": 4,
                                        "cost": 75
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
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Dartmask",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "4+",
                                                "s": 2,
                                                "ap": -1,
                                                "d": "D3",
                                                "keywords": [
                                                        "Anti-Infantry 2+",
                                                        "Pistol",
                                                        "Precision"
                                                ]
                                        },
                                        {
                                                "name": "Household pistol",
                                                "range": "12\"",
                                                "a": 2,
                                                "bs": "3+",
                                                "s": 5,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Pistol",
                                                        "Devastating Wounds"
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
                                                "name": "Voltaic pistol",
                                                "range": "12\"",
                                                "a": 3,
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": [
                                                        "Pistol",
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
                                                "name": "Death Cult power blade",
                                                "range": "Melee",
                                                "a": 5,
                                                "ws": "2+",
                                                "s": 4,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": [
                                                        "Precision"
                                                ]
                                        },
                                        {
                                                "name": "Monomolecular cane-rapier",
                                                "range": "Melee",
                                                "a": 4,
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
                                        "Leader"
                                ],
                                "faction": [
                                        "Assigned Agents"
                                ],
                                "wargear": [],
                                "other": [
                                        "Backroom Deals",
                                        "Warrant of Trade",
                                        "Healing Serum"
                                ]
                        },
                        "keywords": [
                                "Agents Of The Imperium"
                        ],
                        "factionKeywords": [
                                "Agents Of The Imperium"
                        ],
                        "leaderText": "This model can be attached to the following units: Imperial Navy Breachers; Voidsmen-at-arms.",
                        "compositionText": "1 Rogue Trader 1 Death Cult Assassin 1 Lectro-Maester 1 Rejuvenat Adept The Rogue Trader is equipped with: household pistol; monomolecular cane-rapier. The Death Cult Assassin is equipped with: dartmask; Death Cult power blade. The Lectro-Maester is equipped with: voltaic pistol; close combat weapon. The Rejuvenat Adept is equipped with: laspistol; close combat weapon; healing serum. 4 models (AGENTS OF THE IMPERIUM Detachment) 4 models (Assigned Agent)"
                },
                {
                        "id": "ia-vindicare-assassin",
                        "name": "Vindicare Assassin",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 110
                                }
                        ],
                        "stats": {
                                "m": "7\"",
                                "t": 4,
                                "sv": "6+",
                                "w": 4,
                                "ld": "6+",
                                "oc": 1
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Exitus pistol",
                                                "range": "12\"",
                                                "a": 3,
                                                "bs": "2+",
                                                "s": 6,
                                                "ap": -2,
                                                "d": 3,
                                                "keywords": [
                                                        "Devastating Wounds",
                                                        "Ignores Cover",
                                                        "Pistol",
                                                        "Precision"
                                                ]
                                        },
                                        {
                                                "name": "Exitus rifle",
                                                "range": "48\"",
                                                "a": 1,
                                                "bs": "2+",
                                                "s": 8,
                                                "ap": -3,
                                                "d": "D3+3",
                                                "keywords": [
                                                        "Devastating Wounds",
                                                        "Heavy",
                                                        "Ignores Cover",
                                                        "Precision"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Vindicare combat knife",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "2+",
                                                "s": 4,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": []
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Infiltrators",
                                        "Lone Operative",
                                        "Stealth"
                                ],
                                "faction": [
                                        "Assigned Agents"
                                ],
                                "wargear": [],
                                "other": [
                                        "Deadshot",
                                        "Shieldbreaker"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Epic Hero",
                                "Smoke",
                                "Imperium",
                                "Officio Assassinorum",
                                "Vindicare Assassin"
                        ],
                        "factionKeywords": [
                                "Agents Of The Imperium"
                        ],
                        "compositionText": "1 Vindicare Assassin – EPIC HERO This model is equipped with: exitus pistol; exitus rifle; Vindicare combat knife. 1 model (AGENTS OF THE IMPERIUM Detachment) 1 model (Assigned Agent) SHADOW ASSIGNMENT This model cannot be selected to be your WARLORD. If your army faction is AGENTS OF THE IMPERIUM, then during the Declare Battle Formations step, you can replace this model with a different OFFICIO ASSASSINORUM model, provided the total points value of the new model does not exceed the points value of the model it replaced. Your army cannot include duplicates of the same model (i.e. after replacing a model with this rule, your army cannot have more than 1 VINDICARE ASSASSIN, it cannot have more than 1 CULEXUS ASSASSIN, it cannot have more than 1 EVERSOR ASSASSIN and it cannot have more than 1 CALLIDUS ASSASSIN)."
                },
                {
                        "id": "ia-watch-captain-artemis",
                        "name": "Watch Captain Artemis",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 65
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
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Hellfire Extremis",
                                                "range": "12\"",
                                                "a": "D6",
                                                "bs": "N/A",
                                                "s": 4,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Anti-Infantry 4+",
                                                        "Devastating Wounds",
                                                        "Ignores Cover",
                                                        "Torrent"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Master-crafted power weapon",
                                                "range": "Melee",
                                                "a": 6,
                                                "ws": "2+",
                                                "s": 5,
                                                "ap": -2,
                                                "d": 2,
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
                                        "Assigned Agents"
                                ],
                                "wargear": [],
                                "other": [
                                        "Tactical Instinct",
                                        "Unstoppable Champion"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Epic Hero",
                                "Grenades",
                                "Imperium",
                                "Ordo Xenos",
                                "Deathwatch",
                                "Watch Captain Artemis"
                        ],
                        "factionKeywords": [
                                "Agents Of The Imperium"
                        ],
                        "leaderText": "This model can be attached to the following units: Aquila Kill Team; Deathwatch Kill Team.",
                        "compositionText": "1 Watch Captain Artemis This model is equipped with: Hellfire Extremis; master-crafted power weapon."
                },
                {
                        "id": "ia-watch-master",
                        "name": "Watch Master",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 95
                                }
                        ],
                        "stats": {
                                "m": "6\"",
                                "t": 4,
                                "sv": "2+",
                                "w": 5,
                                "ld": "6+",
                                "oc": 1
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Vigil spear",
                                                "range": "24\"",
                                                "a": 2,
                                                "bs": "2+",
                                                "s": 4,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": []
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Vigil spear",
                                                "range": "Melee",
                                                "a": 6,
                                                "ws": "2+",
                                                "s": 6,
                                                "ap": -2,
                                                "d": "D3",
                                                "keywords": [
                                                        "Lance"
                                                ]
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Leader"
                                ],
                                "faction": [
                                        "Assigned Agents"
                                ],
                                "wargear": [],
                                "other": [
                                        "Strategic Knowledge",
                                        "Rites of Battle"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Grenades",
                                "Imperium",
                                "Ordo Xenos",
                                "Deathwatch",
                                "Watch Master"
                        ],
                        "factionKeywords": [
                                "Agents Of The Imperium"
                        ],
                        "leaderText": "This model can be attached to the following units: Aquila Kill Team; Deathwatch Kill Team.",
                        "compositionText": "1 Watch Master This model is equipped with: vigil spear. 1 model (AGENTS OF THE IMPERIUM Detachment) 1 model (Assigned Agent)"
                },
                {
                        "id": "ia-aquila-kill-team",
                        "name": "Aquila Kill Team",
                        "role": "infantry",
                        "points": [
                                {
                                        "models": 5,
                                        "cost": 100
                                },
                                {
                                        "models": 10,
                                        "cost": 200
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
                                                "name": "Astartes grenade launcher – frag",
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
                                                "name": "Astartes grenade launcher – krak",
                                                "range": "24\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 9,
                                                "ap": -2,
                                                "d": "D3",
                                                "keywords": []
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
                                                        "Pistol",
                                                        "Lethal Hits"
                                                ]
                                        },
                                        {
                                                "name": "Deathwatch marksman bolt carbine",
                                                "range": "24\"",
                                                "a": 2,
                                                "bs": "3+",
                                                "s": 5,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Heavy",
                                                        "Lethal Hits"
                                                ]
                                        },
                                        {
                                                "name": "Frag cannon",
                                                "range": "18\"",
                                                "a": "D3",
                                                "bs": "3+",
                                                "s": 7,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Blast",
                                                        "Heavy",
                                                        "Lethal Hits",
                                                        "Rapid Fire D3"
                                                ]
                                        },
                                        {
                                                "name": "Hellstorm bolt rifle",
                                                "range": "30\"",
                                                "a": 2,
                                                "bs": "3+",
                                                "s": 5,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Assault",
                                                        "Heavy",
                                                        "Lethal Hits"
                                                ]
                                        },
                                        {
                                                "name": "Infernus heavy bolter – heavy bolter",
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
                                                "name": "Infernus heavy bolter – heavy flamer",
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
                                                "name": "Plasma incinerator – standard",
                                                "range": "24\"",
                                                "a": 2,
                                                "bs": "3+",
                                                "s": 7,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": [
                                                        "Assault",
                                                        "Heavy"
                                                ]
                                        },
                                        {
                                                "name": "Plasma incinerator – supercharge",
                                                "range": "24\"",
                                                "a": 2,
                                                "bs": "3+",
                                                "s": 8,
                                                "ap": -3,
                                                "d": 2,
                                                "keywords": [
                                                        "Assault",
                                                        "Hazardous",
                                                        "Heavy"
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
                                                "name": "Special-issue bolt pistol",
                                                "range": "18\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Pistol",
                                                        "Precision",
                                                        "Lethal Hits"
                                                ]
                                        },
                                        {
                                                "name": "Stalker bolt rifle",
                                                "range": "30\"",
                                                "a": 2,
                                                "bs": "3+",
                                                "s": 5,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Heavy",
                                                        "Lethal Hits",
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
                                                "name": "Combat knife",
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
                                                "name": "Heavy thunder hammer",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "4+",
                                                "s": 10,
                                                "ap": -2,
                                                "d": 3,
                                                "keywords": [
                                                        "Devastating Wounds"
                                                ]
                                        },
                                        {
                                                "name": "Power weapon",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "3+",
                                                "s": 5,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Sustained Hits 1"
                                                ]
                                        },
                                        {
                                                "name": "Xenophase blade",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "3+",
                                                "s": 5,
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
                                        "Assigned Agents"
                                ],
                                "wargear": [],
                                "other": [
                                        "Death to the Alien",
                                        "Kill Team",
                                        "Designer’s Note",
                                        "Astartes Shield"
                                ]
                        },
                        "keywords": [
                                "Agents Of The Imperium"
                        ],
                        "factionKeywords": [
                                "Agents Of The Imperium"
                        ],
                        "compositionText": "1 Kill Team Sergeant 1 Gravis Veteran 3 Deathwatch Veterans OR 1 Kill Team Sergeant 2 Gravis Veterans 7 Deathwatch Veterans The Kill Team Sergeant is equipped with: plasma pistol; power weapon. Each Gravis Veteran is equipped with: infernus heavy bolter; bolt pistol; close combat weapon. For every 5 models in the unit, 1 Deathwatch Veteran is equipped with: stalker bolt rifle; bolt pistol; close combat weapon. For every 5 models in the unit, 1 Deathwatch Veteran is equipped with: bolt pistol; heavy thunder hammer. For every 5 models in the unit, 1 Deathwatch Veteran is equipped with: Deathwatch marksman bolt carbine; special-issue bolt pistol; close combat weapon. If the unit contains 10 models, 1 Deathwatch Veteran is equipped with: special-issue bolt pistol; xenophase blade. KEYWORDS – ALL MODELS: INFANTRY, BATTLELINE, GRENADES, IMPERIUM, ORDO XENOS, RETINUE, DEATHWATCH, AQUILA KILL TEAMKILL TEAM SERGEANT AND DEATHWATCH VETERANS: TACTICUSGRAVIS VETERANS: GRAVIS FACTION"
                },
                {
                        "id": "ia-deathwatch-kill-team",
                        "name": "Deathwatch Kill Team",
                        "role": "battleline",
                        "points": [
                                {
                                        "models": 5,
                                        "cost": 100
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
                                                "name": "Frag cannon",
                                                "range": "18\"",
                                                "a": "D3",
                                                "bs": "4+",
                                                "s": 7,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Blast",
                                                        "Heavy",
                                                        "Rapid Fire D3"
                                                ]
                                        },
                                        {
                                                "name": "Infernus heavy bolter – heavy bolter",
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
                                                "name": "Infernus heavy bolter – heavy flamer",
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
                                                "name": "Stalker-pattern boltgun",
                                                "range": "24\"",
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
                                                "name": "Deathwatch shotgun",
                                                "range": "18\"",
                                                "a": 2,
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 2,
                                                "keywords": [
                                                        "Assault"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Black Shield blades",
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
                                                "name": "Deathwatch thunder hammer",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "4+",
                                                "s": 10,
                                                "ap": -2,
                                                "d": 3,
                                                "keywords": [
                                                        "Devastating Wounds"
                                                ]
                                        },
                                        {
                                                "name": "Power weapon",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "3+",
                                                "s": 5,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Xenophase blade",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "3+",
                                                "s": 5,
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
                                        "Assigned Agents"
                                ],
                                "wargear": [],
                                "other": [
                                        "Death to the Alien",
                                        "Astartes Shield"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Battleline",
                                "Grenades",
                                "Imperium",
                                "Ordo Xenos",
                                "Retinue",
                                "Deathwatch",
                                "Kill Team"
                        ],
                        "factionKeywords": [
                                "Agents Of The Imperium"
                        ],
                        "compositionText": "1 Watch Sergeant 4-9 Deathwatch Veterans Every model is equipped with: boltgun; power weapon. 10 models (AGENTS OF THE IMPERIUM Detachment) 10 models (Assigned Agent)"
                },
                {
                        "id": "ia-imperial-navy-breachers",
                        "name": "Imperial Navy Breachers",
                        "role": "battleline",
                        "points": [
                                {
                                        "models": 10,
                                        "cost": 90
                                }
                        ],
                        "stats": {
                                "m": "6\"",
                                "t": 3,
                                "sv": "4+",
                                "w": 1,
                                "ld": "7+",
                                "oc": 2
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
                                                "name": "Demolition charge",
                                                "range": "6\"",
                                                "a": "D6",
                                                "bs": "5+",
                                                "s": 9,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Assault",
                                                        "Blast",
                                                        "Hazardous",
                                                        "One Shot"
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
                                                "name": "Navis heavy shotgun",
                                                "range": "12\"",
                                                "a": 4,
                                                "bs": "4+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Assault"
                                                ]
                                        },
                                        {
                                                "name": "Navis las-volley",
                                                "range": "18\"",
                                                "a": 4,
                                                "bs": "4+",
                                                "s": 6,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Navis shotgun",
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
                                                "name": "Plasma gun – standard",
                                                "range": "24\"",
                                                "a": 1,
                                                "bs": "4+",
                                                "s": 7,
                                                "ap": -1,
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
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Hazardous",
                                                        "Rapid Fire 1"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Chainfist",
                                                "range": "Melee",
                                                "a": 1,
                                                "ws": "5+",
                                                "s": 6,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Anti-Vehicle 3+"
                                                ]
                                        },
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
                                        "Assigned Agents"
                                ],
                                "wargear": [],
                                "other": [
                                        "Breaching Team",
                                        "Gheistskull",
                                        "CAT Unit",
                                        "Designer’s Note",
                                        "Endurant Shield"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Battleline",
                                "Grenades",
                                "Smoke",
                                "Imperium",
                                "Voidfarers",
                                "Retinue",
                                "Imperial Navy Breachers"
                        ],
                        "factionKeywords": [
                                "Agents Of The Imperium"
                        ],
                        "compositionText": "1 Navis Sergeant-at-Arms 9 Navis Armsmen The Navis Sergeant-at-Arms is equipped with: Navis shotgun; close combat weapon. One Navis Armsman is equipped with: Navis las-volley; close combat weapon. One other Navis Armsman is equipped with: Navis heavy shotgun; close combat weapon; endurant shield. Every other model is equipped with: Navis shotgun; close combat weapon."
                },
                {
                        "id": "ia-vigilant-squad",
                        "name": "Vigilant Squad",
                        "role": "battleline",
                        "points": [
                                {
                                        "models": 11,
                                        "cost": 85
                                }
                        ],
                        "stats": {
                                "m": "6\"",
                                "t": 3,
                                "sv": "4+",
                                "w": 1,
                                "ld": "7+",
                                "oc": 2
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Arbites combat shotgun",
                                                "range": "18\"",
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
                                                "name": "Arbites grenade launcher – frag",
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
                                                "name": "Arbites grenade launcher – krak",
                                                "range": "24\"",
                                                "a": 1,
                                                "bs": "4+",
                                                "s": 9,
                                                "ap": -2,
                                                "d": "D3",
                                                "keywords": []
                                        },
                                        {
                                                "name": "Arbites shotpistol",
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
                                                "name": "Executioner shotgun",
                                                "range": "24\"",
                                                "a": 1,
                                                "bs": "4+",
                                                "s": 5,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Ignores Cover",
                                                        "Precision"
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
                                                "name": "Webber",
                                                "range": "12\"",
                                                "a": "D6",
                                                "bs": "N/A",
                                                "s": 2,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Assault",
                                                        "Devastating Wounds",
                                                        "Torrent"
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
                                                "name": "Mechanical bite",
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
                                "core": [],
                                "faction": [
                                        "Assigned Agents"
                                ],
                                "wargear": [],
                                "other": [
                                        "Merciless Judgement",
                                        "Nuncio Aquila",
                                        "Designer’s Note"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Battleline",
                                "Grenades",
                                "Imperium",
                                "Retinue",
                                "Adeptus Arbites",
                                "Vigilant Squad"
                        ],
                        "factionKeywords": [
                                "Agents Of The Imperium"
                        ],
                        "compositionText": "1 Proctor-Vigilant 9 Vigilants 1 Cyber-mastiff Every Proctor-Vigilant and Vigilant is equipped with: Arbites combat shotgun; Arbites shotpistol; close combat weapon. The Cyber-mastiff is equipped with: mechanical bite."
                },
                {
                        "id": "ia-imperial-rhino",
                        "name": "Imperial Rhino",
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
                                        "Assigned Agents"
                                ],
                                "wargear": [],
                                "other": [
                                        "Self Repair"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Smoke",
                                "Transport",
                                "Dedicated Transport",
                                "Imperium",
                                "Imperial Rhino"
                        ],
                        "factionKeywords": [
                                "Agents Of The Imperium"
                        ],
                        "compositionText": "1 Imperial Rhino This model is equipped with: storm bolter; armoured tracks. TRANSPORT This model has a transport capacity of 12 AGENTS OF THE IMPERIUM INFANTRY models. It cannot transport TERMINATOR or OFFICIO ASSASSINORUM models."
                },
                {
                        "id": "ia-inquisitorial-chimera",
                        "name": "Inquisitorial Chimera",
                        "role": "vehicle",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 70
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
                                "faction": [
                                        "Assigned Agents"
                                ],
                                "wargear": [],
                                "other": [
                                        "Rapid Deployment"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Smoke",
                                "Transport",
                                "Dedicated Transport",
                                "Imperium",
                                "Inquisitorial Chimera"
                        ],
                        "factionKeywords": [
                                "Agents Of The Imperium"
                        ],
                        "compositionText": "1 Inquisitorial Chimera This model is equipped with: multi-laser; heavy bolter; lasgun array; armoured tracks. TRANSPORT This model has a transport capacity of 13 INQUISITOR INFANTRY and INQUISITORIAL AGENT models. It cannot transport TERMINATOR models."
                },
                {
                        "id": "ia-sisters-of-battle-immolator",
                        "name": "Sisters of Battle Immolator",
                        "role": "vehicle",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 100
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
                                        "Assigned Agents"
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
                                "Ordo Hereticus",
                                "Immolator"
                        ],
                        "factionKeywords": [
                                "Agents Of The Imperium"
                        ],
                        "compositionText": "1 Immolator This model is equipped with: heavy bolter; immolation flamers; armoured tracks. 1 model (AGENTS OF THE IMPERIUM Detachment) 1 model (Assigned Agent) TRANSPORT This model has a transport capacity of 6 ORDO HERETICUS INFANTRY models. At the start of the Declare Battle Formations step, you can select one SISTERS OF BATTLE SQUAD from your army. If you do, that unit is split into two units, each containing as equal a number of models as possible (when splitting a unit in this way, make a note of which models form each of the two new units). One of these units must start the battle embarked within this TRANSPORT; the other can start the battle embarked within another TRANSPORT, or it can be deployed as a separate unit."
                },
                {
                        "id": "ia-corvus-blackstar",
                        "name": "Corvus Blackstar",
                        "role": "vehicle",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 180
                                }
                        ],
                        "stats": {
                                "m": "20+\"",
                                "t": 10,
                                "sv": "3+",
                                "w": 14,
                                "ld": "6+",
                                "oc": 0
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Blackstar rocket launcher",
                                                "range": "30\"",
                                                "a": "D6+1",
                                                "bs": "3+",
                                                "s": 5,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Blast"
                                                ]
                                        },
                                        {
                                                "name": "Hurricane bolter",
                                                "range": "24\"",
                                                "a": 6,
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Rapid Fire 6",
                                                        "Twin-Linked"
                                                ]
                                        },
                                        {
                                                "name": "Stormstrike missile launcher",
                                                "range": "48\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 10,
                                                "ap": -2,
                                                "d": 3,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Twin assault cannon",
                                                "range": "24\"",
                                                "a": 6,
                                                "bs": "3+",
                                                "s": 6,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Devastating Wounds",
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
                                        "Hover",
                                        "Stealth"
                                ],
                                "faction": [
                                        "Assigned Agents"
                                ],
                                "wargear": [],
                                "other": [
                                        "Blackstar Cluster Launcher",
                                        "Auspex Array",
                                        "Infernum Halo-launcher"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Aircraft",
                                "Fly",
                                "Transport",
                                "Imperium",
                                "Ordo Xenos",
                                "Retinue",
                                "Deathwatch",
                                "Corvus Blackstar"
                        ],
                        "factionKeywords": [
                                "Agents Of The Imperium"
                        ],
                        "compositionText": "1 Corvus Blackstar This model is equipped with: 2 Blackstar rocket launchers; twin assault cannon; armoured hull. DAMAGED: 1-5 WOUNDS REMAINING While this model has 1-5 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll. TRANSPORT This model has a transport capacity of 12 DEATHWATCH INFANTRY models."
                },
                {
                        "id": "ia-exaction-squad",
                        "name": "Exaction Squad",
                        "role": "infantry",
                        "points": [
                                {
                                        "models": 11,
                                        "cost": 90
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
                                                "name": "Arbites combat shotgun",
                                                "range": "18\"",
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
                                                "name": "Arbites grenade launcher – krak",
                                                "range": "24\"",
                                                "a": 1,
                                                "bs": "4+",
                                                "s": 9,
                                                "ap": -2,
                                                "d": "D3",
                                                "keywords": []
                                        },
                                        {
                                                "name": "Arbites grenade launcher – frag",
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
                                                "name": "Arbites shotpistol",
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
                                                "name": "Executioner shotgun",
                                                "range": "24\"",
                                                "a": 1,
                                                "bs": "4+",
                                                "s": 5,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Ignores Cover",
                                                        "Precision"
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
                                                "name": "Webber",
                                                "range": "12\"",
                                                "a": "D6",
                                                "bs": "N/A",
                                                "s": 2,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Assault",
                                                        "Devastating Wounds",
                                                        "Torrent"
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
                                                "name": "Excruciator maul",
                                                "range": "Melee",
                                                "a": 2,
                                                "ws": "3+",
                                                "s": 4,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Mechanical bite",
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
                                "core": [],
                                "faction": [
                                        "Assigned Agents"
                                ],
                                "wargear": [],
                                "other": [
                                        "Imperial Law",
                                        "Arbites Medi-kit",
                                        "Nuncio Aquila",
                                        "Designer’s Note",
                                        "Soulguilt Scanner"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Grenades",
                                "Imperium",
                                "Retinue",
                                "Adeptus Arbites",
                                "Exaction Squad"
                        ],
                        "factionKeywords": [
                                "Agents Of The Imperium"
                        ],
                        "compositionText": "1 Proctor-Exactant 9 Exaction Vigilants 1 Cyber-mastiff Every Proctor-Exactant and Exaction Vigilant is equipped with: Arbites combat shotgun; Arbites shotpistol; close combat weapon. The Cyber-mastiff is equipped with: mechanical bite."
                },
                {
                        "id": "ia-grey-knights-terminator-squad",
                        "name": "Grey Knights Terminator Squad",
                        "role": "infantry",
                        "points": [
                                {
                                        "models": 5,
                                        "cost": 190
                                }
                        ],
                        "stats": {
                                "m": "5\"",
                                "t": 5,
                                "sv": "2+",
                                "w": 3,
                                "ld": "6+",
                                "oc": 2
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Incinerator",
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
                                                "name": "Psilencer",
                                                "range": "24\"",
                                                "a": 6,
                                                "bs": "3+",
                                                "s": 5,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Psychic",
                                                        "Sustained Hits 1"
                                                ]
                                        },
                                        {
                                                "name": "Psycannon",
                                                "range": "24\"",
                                                "a": 3,
                                                "bs": "3+",
                                                "s": 8,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Psychic"
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
                                                "name": "Nemesis force weapon",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "3+",
                                                "s": 6,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Psychic"
                                                ]
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Deep Strike"
                                ],
                                "faction": [
                                        "Assigned Agents"
                                ],
                                "wargear": [],
                                "other": [
                                        "Hammerhand",
                                        "Ancient’s Banner",
                                        "Narthecium"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Psyker",
                                "Terminator",
                                "Grenades",
                                "Imperium",
                                "Ordo Malleus",
                                "Requisitioned",
                                "Grey Knights Terminator Squad"
                        ],
                        "factionKeywords": [
                                "Agents Of The Imperium"
                        ],
                        "compositionText": "1 Terminator Justicar 4 Grey Knights Terminators Every model is equipped with: storm bolter; Nemesis force weapon. 5 models (AGENTS OF THE IMPERIUM Detachment) 5 models (Assigned Agent) Rites of Teleportation If one or more INQUISITOR units are attached to this unit during the Declare Battle formations step, models in those units have the Deep Strike ability."
                },
                {
                        "id": "ia-inquisitorial-agents",
                        "name": "Inquisitorial Agents",
                        "role": "infantry",
                        "points": [
                                {
                                        "models": 6,
                                        "cost": 50
                                },
                                {
                                        "models": 12,
                                        "cost": 100
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
                                                "name": "Agent firearm",
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
                                                "name": "Plasma cannon – standard",
                                                "range": "36\"",
                                                "a": "D3",
                                                "bs": "4+",
                                                "s": 7,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Blast",
                                                        "Heavy"
                                                ]
                                        },
                                        {
                                                "name": "Plasma cannon – supercharge",
                                                "range": "36\"",
                                                "a": "D3",
                                                "bs": "4+",
                                                "s": 8,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Blast",
                                                        "Hazardous",
                                                        "Heavy"
                                                ]
                                        },
                                        {
                                                "name": "Plasma pistol – standard",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 7,
                                                "ap": -1,
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
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Hazardous",
                                                        "Pistol"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Agent melee weapon",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "3+",
                                                "s": 3,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Eviscerator",
                                                "range": "Melee",
                                                "a": 2,
                                                "ws": "3+",
                                                "s": 6,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Devastating Wounds"
                                                ]
                                        },
                                        {
                                                "name": "Mystic stave",
                                                "range": "Melee",
                                                "a": 2,
                                                "ws": "3+",
                                                "s": 5,
                                                "ap": -1,
                                                "d": "D3",
                                                "keywords": [
                                                        "Anti-Infantry 4+",
                                                        "Psychic"
                                                ]
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [],
                                "faction": [
                                        "Assigned Agents"
                                ],
                                "wargear": [],
                                "other": [
                                        "Loyal Henchmen",
                                        "Tome-skull",
                                        "Designer’s Note"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Grenades",
                                "Imperium",
                                "Retinue",
                                "Inquisitorial Agents"
                        ],
                        "factionKeywords": [
                                "Agents Of The Imperium"
                        ],
                        "compositionText": "5-10 Inquisitorial Agents 1-2 Gun Servitors* *This unit can only contain 2 Gun Servitors if it also contains 10 Inquisitorial Agents. Every Inquisitorial Agent is equipped with: agent firearm; agent melee weapon. Every Gun Servitor is equipped with: heavy bolter; agent melee weapon. 6 models (AGENTS OF THE IMPERIUM Detachment) 12 models (AGENTS OF THE IMPERIUM Detachment) 6 models (Assigned Agent) 12 models (Assigned Agent) INQUISITORIAL HENCHMEN If your Army Faction is not AGENTS OF THE IMPERIUM, then for each INQUISITOR unit you include in your army, you can include one INQUISITORIAL AGENTS unit in your army that does not count towards the number of RETINUE units your army can include (see Assigned Agents)."
                },
                {
                        "id": "ia-sanctifiers",
                        "name": "Sanctifiers",
                        "role": "infantry",
                        "points": [
                                {
                                        "models": 9,
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
                                        "Assigned Agents"
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
                                "Retinue",
                                "Sanctifiers"
                        ],
                        "factionKeywords": [
                                "Agents Of The Imperium"
                        ],
                        "compositionText": "1 Miraculist 1 Salvationist 1 Death Cult Assassin 2 Missionaries 4 Sanctifiers The Miraculist is equipped with: holy fire; burning hands. The Salvationist is equipped with: close combat weapon; Salvationist medikit. The Death Cult Assassin is equipped with: Death Cult blades. 1 Missionary is equipped with: plasma gun; Sanctifier melee weapon. 1 Missionary is equipped with: Ministorum flamer; Sanctifier melee weapon. Every Sanctifier is equipped with: Ministorum hand flamer; Sanctifier melee weapon."
                },
                {
                        "id": "ia-sisters-of-battle-squad",
                        "name": "Sisters of Battle Squad",
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
                                                        "Pistol",
                                                        "Hazardous"
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
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Close combat weapon",
                                                "range": "Melee",
                                                "a": 1,
                                                "ws": "4+",
                                                "s": 3,
                                                "ap": -1,
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
                                        "Assigned Agents"
                                ],
                                "wargear": [],
                                "other": [
                                        "Defenders of the Faith",
                                        "Incensor Cherub",
                                        "Designer’s Note",
                                        "Simulacrum Imperials"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Grenades",
                                "Imperium",
                                "Ordo Hereticus",
                                "Requisitioned",
                                "Sisters Of Battle Squad"
                        ],
                        "factionKeywords": [
                                "Agents Of The Imperium"
                        ],
                        "compositionText": "1 Sister Superior 9 Battle Sisters Every model is equipped with: bolt pistol; boltgun; close combat weapon. 10 models (AGENTS OF THE IMPERIUM Detachment) 10 models (Assigned Agent)"
                },
                {
                        "id": "ia-subductor-squad",
                        "name": "Subductor Squad",
                        "role": "infantry",
                        "points": [
                                {
                                        "models": 11,
                                        "cost": 85
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
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Arbites shotpistol",
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
                                                "name": "Mechanical bite",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "4+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Shock maul",
                                                "range": "Melee",
                                                "a": 2,
                                                "ws": "4+",
                                                "s": 4,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": []
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [],
                                "faction": [
                                        "Assigned Agents"
                                ],
                                "wargear": [],
                                "other": [
                                        "Dedication to Duty",
                                        "Nuncio Aquila",
                                        "Designer’s Note"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Grenades",
                                "Imperium",
                                "Retinue",
                                "Adeptus Arbites",
                                "Subductor Squad"
                        ],
                        "factionKeywords": [
                                "Agents Of The Imperium"
                        ],
                        "compositionText": "1 Proctor-Subductor 9 Subductors 1 Cyber-mastiff Every Proctor-Subductor and Subductor is equipped with: Arbites shotpistol; shock maul. The Cyber-mastiff is equipped with: mechanical bite. 11 models (AGENTS OF THE IMPERIUM Detachment) 11 models (Assigned Agent)"
                },
                {
                        "id": "ia-voidsmen-at-arms",
                        "name": "Voidsmen-at-arms",
                        "role": "infantry",
                        "points": [
                                {
                                        "models": 6,
                                        "cost": 50
                                }
                        ],
                        "stats": {
                                "m": "6\"",
                                "t": 3,
                                "sv": "4+",
                                "w": 1,
                                "ld": "7+",
                                "oc": 2
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Artificer shotgun",
                                                "range": "12\"",
                                                "a": 2,
                                                "bs": "4+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 2,
                                                "keywords": [
                                                        "Assault"
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
                                                "name": "Voidsman rotor cannon",
                                                "range": "24\"",
                                                "a": 6,
                                                "bs": "5+",
                                                "s": 6,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Heavy",
                                                        "Sustained Hits 1"
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
                                                "name": "Vicious bite",
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
                                "core": [],
                                "faction": [
                                        "Assigned Agents"
                                ],
                                "wargear": [],
                                "other": [
                                        "Masters of Close Confines"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Grenades",
                                "Imperium",
                                "Voidfarers",
                                "Retinue",
                                "Voidsmen-At-Arms"
                        ],
                        "factionKeywords": [
                                "Agents Of The Imperium"
                        ],
                        "compositionText": "1 Voidmaster 4 Voidsmen 1 Canid The Voidmaster is equipped with: artificer shotgun; laspistol; close combat weapon. One Voidsman is equipped with: laspistol; Voidsman rotor cannon; close combat weapon. Every other Voidsman is equipped with: lasgun; laspistol; close combat weapon. The Canid is equipped with: vicious bite. 6 models (AGENTS OF THE IMPERIUM Detachment) 6 models (Assigned Agent) NAVY BODYGUARD If your Army Faction is not AGENTS OF THE IMPERIUM, then for each VOIDFARERS CHARACTER unit you include in your army, you can include one VOIDSMEN-AT-ARMS unit in your army that does not count towards the number of RETINUE units your army can include (see Assigned Agents)"
                }
        ]
    };

    window.W40K_FACTIONS = window.W40K_FACTIONS || { "10th": [], "11th": [] };
    window.W40K_FACTIONS["10th"].push(ia);
})();
