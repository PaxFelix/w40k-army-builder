/**
 * W40K Army Builder — T'au Empire (10th Edition)
 *
 * Datasheets from Codex: T'au Empire. Names-only abilities/rules;
 * stats, weapons, points and keywords are factual game data.
 * Legends and Forge World datasheets are intentionally omitted.
 *
 * Self-registers into window.W40K_FACTIONS, assembled by data/factions.js.
 */
(function () {
    "use strict";

    const tau = {
        id: "tau-empire",
        name: "T'au Empire",
        icon: "🎯",
        allegiance: "Xenos",
        flavour: "",
        armyRules: [
            { name: "For the Greater Good", flavour: "The Hunter Cadres battle for the betterment of the T'au Empire, not for personal gain or egotistic accomplishments. This burning commitment allows for prodigiously effective covering fire. Enemies are pinned in place by deadly bursts of pulse blasts, or the infamous T'au markerlight is used to expose even well-fortified enemy positions, allowing other T'au warriors to fall on the vulnerable enemies with murderous force.", text: "If your Army Faction is T'AU EMPIRE, at the start of your Shooting phase you can select units from your army with this ability to become Observer units.\nDuring your Shooting phase, for each Observer unit from your army that has not been selected to shoot this phase and is eligible to shoot (excluding FORTIFICATION and Battle-shocked units) select one enemy unit that is visible to be marked as their Spotted unit until the end of the phase. Each enemy unit can only be marked as a Spotted unit once per phase.\nUnits from your army with the For the Greater Good ability (excluding Observer units) are Guided units while targeting one or more Spotted units.\nUntil the end of the phase, each time a model from your army in a Guided unit makes an attack that targets a Spotted unit, improve the Ballistic Skill characteristic of that attack by 1 and, if the Spotted unit was marked by an Observer unit that has the MARKERLIGHT keyword, that attack has the [Ignores Cover] ability." }
        ],
        detachments: [
            {
                name: "Kauyon",
                flavour: "",
                rule: { name: "Patient Hunter", flavour: "The tactical philosophy known as the Kauyon allows for T'au commanders to draw the enemy into a deadly trap, springing it at the perfect moment to deliver a storm of fatal strikes against which none can escape.", text: "During the third, fourth and fifth battle rounds, ranged weapons equipped by T'AU EMPIRE models from your army have the [Sustained Hits 1] ability. During the third, fourth and fifth battle rounds, while a unit is a Guided unit (see For the Greater Good), each time a ranged attack is made by a model in that unit that targets a Spotted unit, you can ignore any or all modifiers to that attack's Ballistic Skill characteristic and/or all modifiers to the Hit roll.", restrictions: "" },
                enhancements: [
                    { name: "Exemplar of the Kauyon", cost: 20, restriction: "T'AU EMPIRE model only (excluding KROOT SHAPER models).", text: "Long meditation upon the tenets of the Patient Hunter has seen this warrior master the application of this cunning ambush strategy. When they take to the battlefield, they embody the teachings of the Kauyon, much to the dismay of their luckless prey.\n\nWhile the bearer is leading a unit, the Patient Hunter Detachment rule applies to that unit from the second battle round onwards instead of from the third." },
                    { name: "Precision of the Patient Hunter", cost: 15, restriction: "T'AU EMPIRE model only.", text: "This warrior prowls the battlefield like a high-tech predator, stalking and assessing their quarry before they strike. When they do launch their assault, their every shot and blow is informed by careful observations, perfectly aimed where they will do the greatest harm.\n\nEach time the bearer makes a ranged attack, add 1 to the Hit roll. From the third battle round onwards, add 1 to the Wound roll as well." },
                    { name: "Solid-image Projection Unit", cost: 30, restriction: "T'AU EMPIRE model only.", text: "This holowave-emitter drone projects beams of so-called heavy light, forming convincing illusory images while simultaneously masking the true locations of its allies with advanced refraction fields.\n\nAfter both players have deployed their armies, select up to three T'AU EMPIRE units from your army and redeploy them. When doing so, you can set those units up in Strategic Reserves if you wish, regardless of how many units are already in Strategic Reserves." },
                    { name: "Through Unity, Devastation", cost: 40, restriction: "T'AU EMPIRE model only (excluding KROOT SHAPER models).", text: "Under the calm tutelage of this leader, warriors of the Fire caste maximise every shot they fire, creating a blizzard of deadly energy.\n\nWhile the bearer is leading a unit, each time that unit is an Observer unit, until the end of the phase, ranged weapons equipped by models in a Guided unit have the [Lethal Hits] ability while targeting their Spotted unit." },
                ],
                stratagems: [
                    { name: "A Tempting Trap", cp: 1, type: "Battle Tactic", when: "Your Shooting phase.", target: "One T'AU EMPIRE unit from your army that has not been selected to shoot this phase. The first time you use this Stratagem, you must also select one objective marker that is not in your opponent's deployment zone; until the end of the battle, this becomes your Trap objective marker.", effect: "Until the end of the phase, each time a model in your unit makes a ranged attack that targets an enemy unit within range of your Trap objective marker, add 1 to the Wound roll.", restrictions: "You cannot use this Stratagem during the first or second battle rounds." },
                    { name: "Point-blank Ambush", cp: 1, type: "Battle Tactic", when: "Your Shooting phase.", target: "One T'AU EMPIRE unit from your army that has not been selected to shoot this phase.", effect: "Until the end of the phase, each time a model in your unit makes a ranged attack that targets an enemy unit within 9\", improve the Armour Penetration characteristic of that attack by 1.", restrictions: "You cannot use this Stratagem during the first or second battle rounds." },
                    { name: "Coordinate to Engage", cp: 1, type: "Battle Tactic", when: "Your Shooting phase.", target: "One T'AU EMPIRE unit from your army that has just been selected as an Observer unit (see For the Greater Good).", effect: "Until the end of the phase, each time a model in your unit makes an attack that targets their Spotted unit, improve the Ballistic Skill characteristic of that attack by 1 and, if your unit has the MARKERLIGHT keyword, that attack has the [Ignores Cover] ability.", restrictions: "" },
                    { name: "Combat Embarkation", cp: 1, type: "Wargear", when: "Your opponent's Charge phase, just after an enemy unit has declared a charge.", target: "One T'AU EMPIRE INFANTRY unit from your army that was selected as one of the targets of that charge, and one friendly TRANSPORT.", effect: "Your unit can embark within that TRANSPORT. If it does, your opponent can select new targets for that charge.", restrictions: "Every model in your T'AU EMPIRE INFANTRY unit must be within 3\" of that TRANSPORT and there must be sufficient transport capacity to embark the entire unit." },
                    { name: "Photon Grenades", cp: 1, type: "Wargear", when: "Your opponent's Charge phase, just after an enemy unit has declared a charge.", target: "One T'AU EMPIRE GRENADES unit from your army that was selected as one of the targets of that charge.", effect: "That enemy unit must immediately take a Battle-shock test, and until the end of the phase, subtract 2 from Charge rolls made for that enemy unit.", restrictions: "" },
                    { name: "Wall of Mirrors", cp: 1, type: "Battle Tactic", when: "End of your opponent's Fight phase.", target: "One STEALTH, GHOSTKEEL or COMMANDER SHADOWSUN unit from your army.", effect: "Remove your unit from the battlefield and place it into Strategic Reserves.", restrictions: "You cannot target a unit that is within Engagement Range of one or more enemy units." },
                ]
            },
            {
                name: "Mont'ka",
                flavour: "",
                rule: { name: "Killing Blow", flavour: "Mont'ka is the most aggressive style of T'au warfare. Its singular focus is the art of identifying a target of opportunity and attacking it swiftly with an overwhelming application of force.", text: "During the first, second and third battle rounds, ranged weapons equipped by T'AU EMPIRE models from your army have the [Assault] ability. During the first, second and third battle rounds, while a unit is a Guided unit, its ranged weapons have the [Lethal Hits] ability.", restrictions: "" },
                enhancements: [
                    { name: "Coordinated Exploitation", cost: 40, restriction: "T'AU EMPIRE model only (excluding KROOT SHAPER models).", text: "This leader eschews their own martial glory in favour of seeking out an advanced vantage point then exploiting it to guide in the firepower of their fellows.\n\nWhile the bearer is leading a unit, each time that unit is an Observer unit, until the end of the phase, ranged weapons equipped by models in a Guided unit have the [Sustained Hits 1] ability while targeting their Spotted unit." },
                    { name: "Exemplar of the Mont'ka", cost: 10, restriction: "T'AU EMPIRE model only (excluding KROOT SHAPER models).", text: "This warrior has perfected the art of the Killing Blow, formulating swift and decisive battle plans and leading their cadres from the front in aggressive strikes.\n\nWhile the bearer is leading a unit, the Killing Blow Detachment rule applies to that unit during the fourth battle round as well." },
                    { name: "Strategic Conqueror", cost: 15, restriction: "T'AU EMPIRE model only.", text: "A wise commander appreciates the strategic value of seizing a vital battlefield asset swiftly to establish a foothold, employing it as a jumping off point for further assaults or a rallying post for a swift retreat.\n\nAt the start of the first battle round, before the first turn begins, select one objective marker on the battlefield. While a friendly T'AU EMPIRE model is within range of that objective marker and the bearer is on the battlefield, add 1 to that friendly model's Objective Control characteristic." },
                    { name: "Strike Swiftly", cost: 25, restriction: "T'AU EMPIRE model only.", text: "This commander knows victory is best assured by taking the fight to the enemy as soon as battle is joined.\n\nAt the start of the battle, before any moves are made using the Scouts ability, you can select up to two friendly T'AU EMPIRE units within 6\" of the bearer that do not have the Scouts ability. Until the end of the battle, all models in the selected units have the Scouts 6\" ability." },
                ],
                stratagems: [
                    { name: "Pinpoint Counter-offensive", cp: 1, type: "Battle Tactic", when: "Any phase.", target: "One T'AU EMPIRE unit (excluding KROOT units) from your army that was just destroyed. You can use this Stratagem on that unit even though it was just destroyed.", effect: "Until the end of the battle, each time a T'AU EMPIRE unit (excluding KROOT units) from your army makes an attack that targets the enemy unit that just destroyed your unit, you can re-roll the Hit roll.", restrictions: "" },
                    { name: "Aggressive Mobility", cp: 1, type: "Battle Tactic", when: "Your Movement phase.", target: "One T'AU EMPIRE unit from your army that has not been selected to move this phase.", effect: "Until the end of the phase, if your unit Advances, do not make an Advance roll for it. Instead, until the end of the phase, add 6\" to the Move characteristic of models in your unit.", restrictions: "" },
                    { name: "Focused Fire", cp: 1, type: "Battle Tactic", when: "Start of your Shooting phase.", target: "Two T'AU EMPIRE units from your army that have not been selected to shoot this phase, and one enemy unit.", effect: "Until the end of the phase, each time a model in either of your units makes an attack, it can only target that enemy unit (and only if it is an eligible target for that attack), and when resolving that attack, improve the Armour Penetration characteristic by 1.", restrictions: "You cannot use this Stratagem during the fourth or fifth battle rounds." },
                    { name: "Combat Debarkation", cp: 1, type: "Battle Tactic", when: "Your Shooting phase.", target: "One T'AU EMPIRE INFANTRY unit from your army that disembarked from a TRANSPORT this turn.", effect: "Until the end of the phase, each time a model in your unit makes an attack that targets the closest enemy unit, you can re-roll the Wound roll.", restrictions: "" },
                    { name: "Pulse Onslaught", cp: 2, type: "Strategic Ploy", when: "Your Shooting phase.", target: "One T'AU EMPIRE INFANTRY unit (excluding KROOT units) from your army that has just shot, and one enemy unit (excluding MONSTERS and VEHICLES) hit by one or more of those attacks.", effect: "Until the end of your opponent's next turn, that enemy unit is shaken. While a unit is shaken, subtract 2 from its Move characteristic and subtract 2 from Advance and Charge rolls made for it.", restrictions: "" },
                    { name: "Counterfire Defence Systems", cp: 2, type: "Wargear", when: "Your opponent's Shooting phase, just after an enemy unit has selected its targets.", target: "One T'AU EMPIRE unit from your army that was selected as the target of one or more of the attacking unit's attacks.", effect: "Until the end of the phase, each time an attack is allocated to your unit, subtract 1 from the Damage characteristic of that attack.", restrictions: "" },
                ]
            },
            {
                name: "Retaliation Cadre",
                flavour: "",
                rule: { name: "Bonded Heroes", flavour: "Cadres of T'au Battlesuit pilots fight in a manner inspired by the dynamism and determination of famous and beloved war leaders. Indeed, some of the specialist piloting manoeuvres they employ are named after such icons, in a few rare - and sometimes unofficial - cases even after those who have since fallen far from favour with the Ethereal Council. Either way, these bonded veterans are experts in the deadly art of engaging the enemy in close confines. They plunge into the heart of the enemy army where the fighting is fiercest, and prevail in the name of the Greater Good.", text: "Each time a T'AU EMPIRE BATTLESUIT model from your army makes a ranged attack that targets a unit within 12\", improve the Strength characteristic of that attack by 1. If that attack targets a unit within 9\", improve the Armour Penetration characteristic of that attack by 1 as well.", restrictions: "" },
                enhancements: [
                    { name: "Internal Grenade Racks", cost: 20, restriction: "T'AU EMPIRE BATTLESUIT model only.", text: "These thigh plates house deployment rails of high-explosive bomblets. As the pilot jets over the foe, the racks can be triggered to dispense a rain of death.\n\nThe bearer has the Grenades keyword, and each time the bearer ends a Normal move, you can select one enemy unit that it moved over during that move. If you do, roll six D6: for each 4+, that enemy unit suffers 1 mortal wound." },
                    { name: "Prototype Weapon System", cost: 15, restriction: "T'AU EMPIRE BATTLESUIT model only.", text: "Famed battlesuit pilots are often more than willing to assist Earth caste scientists in field-testing the latest in experimental weapons technology.\n\nEach time the bearer is selected to shoot, select either the [Lethal Hits] or [Sustained Hits 1] ability. Until those attacks are resolved, ranged weapons equipped by the bearer have the selected ability." },
                    { name: "Puretide Engram Neurochip", cost: 25, restriction: "T'AU EMPIRE BATTLESUIT model only.", text: "Commander Puretide was the most gifted T'au war leader of all time. Upon his death, his memories were stored in a neurochip. When implanted into the brain, the bearer can access much of this wisdom.\n\nEach time you target the bearer's unit with a Stratagem, roll one D6: on a 4+, you gain 1CP." },
                    { name: "Starflare Ignition System", cost: 20, restriction: "T'AU EMPIRE BATTLESUIT model only.", text: "The ignition thrusters on selected battlesuits are augmented with optional feed-selectors, allowing the pilot to release a jet of enriched accelerant upon take-off and sending the pilots streaking skywards.\n\nAt the end of your opponent's turn, if the bearer's unit is not within Engagement Range of one or more enemy units, you can remove that unit from the battlefield and place it into Strategic Reserves." },
                ],
                stratagems: [
                    { name: "Fail-safe Detonator", cp: 2, type: "Epic Deed", when: "Any phase, just after a T'AU EMPIRE BATTLESUIT model from your army is destroyed.", target: "That destroyed model's unit. You can use this Stratagem on that unit even if that unit was just destroyed.", effect: "Before removing your model from play, if it has the Deadly Demise ability, do not roll for that ability; instead, you can choose whether the result of that roll is a 1 or a 6. If your model does not have the Deadly Demise ability, roll one D6 for each unit within 6\" of it: on a 4+, that unit suffers D3 mortal wounds.", restrictions: "" },
                    { name: "Stimm Injectors", cp: 1, type: "Wargear", when: "Your opponent's Shooting phase or the Fight phase, just after an enemy unit has selected its targets.", target: "One T'AU EMPIRE BATTLESUIT unit from your army that was selected as the target of one or more of the attacking unit's attacks.", effect: "Until the end of the phase, models in your unit have the Feel No Pain 6+ ability.", restrictions: "" },
                    { name: "The Shortened Blade", cp: 2, type: "Strategic Ploy", when: "Your Movement phase.", target: "One T'AU EMPIRE BATTLESUIT unit from your army that is arriving using the Deep Strike ability this phase.", effect: "Your unit can be set up anywhere on the battlefield that is more than 6\" horizontally away from all enemy models.", restrictions: "A unit targeted with this Stratagem is not eligible to declare a charge in the same turn." },
                    { name: "The Arro'kon Protocol", cp: 1, type: "Battle Tactic", when: "Your Shooting phase.", target: "One T'AU EMPIRE BATTLESUIT unit from your army that has not been selected to shoot this phase.", effect: "Until the end of the phase, each time a model in your unit makes an attack that targets an enemy unit that contains 6 or more models, that attack has the [Sustained Hits 1] ability. If that attack targets an enemy unit that contains 11 or more models, it has the [Sustained Hits 2] ability instead.", restrictions: "" },
                    { name: "The Torchstar Gambit", cp: 1, type: "Strategic Ploy", when: "Your Shooting phase.", target: "One T'AU EMPIRE BATTLESUIT unit from your army that can FLY whose attacks have been resolved this phase.", effect: "If your unit is not within Engagement Range of one or more enemy units, it can make a Normal move. If it does, your unit cannot declare a charge this turn.", restrictions: "" },
                    { name: "Grav-inhibitor Field", cp: 1, type: "Strategic Ploy", when: "Your opponent's Charge phase, just after an enemy unit has declared a charge.", target: "One T'AU EMPIRE BATTLESUIT unit from your army that was selected as a target of that charge.", effect: "That enemy unit must immediately take a Battle-shock test and you must roll one D6 for each model in that enemy unit: for each 6, that enemy unit suffers 1 mortal wound.", restrictions: "" },
                ]
            },
            {
                name: "Kroot Hunting Pack",
                flavour: "",
                rule: { name: "Hunter's Instincts", flavour: "The Kroot naturally predate upon weakened foes, drawn by the scent of spilled blood and viscera.", text: "Each time a KROOT model from your army makes an attack, add 1 to the Hit roll if the target of that attack is below its Starting Strength, and add 1 to the Wound roll as well if the target of that attack is Below Half-strength.\nSkirmish Fighters: Though ill-suited to protracted warfare, the Kroot are experts at light, swift skirmishing. Here their fieldcraft and wiry natural agility help them to evade the hostile attentions of their foes.\nKROOT models from your army have a 6+ invulnerable save against melee attacks and a 5+ invulnerable save against ranged attacks.", restrictions: "KEYWORDS: If you select this Detachment, KROOT CARNIVORE units from your army have the BATTLELINE keyword." },
                enhancements: [
                    { name: "Borthrod Gland", cost: 15, restriction: "KROOT FLESH SHAPER only.", text: "The Kroot found the flesh of the Borthrod so irresistible they hunted them to extinction. This preserved gland still exudes pheromones that drive nearby Kroot into a ravenous frenzy.\n\nWhile the bearer is leading a unit, each time a model in that unit makes a melee attack, an unmodified Hit roll of 5+ scores a Critical Hit." },
                    { name: "Kroothawk Flock", cost: 10, restriction: "KROOT model only.", text: "This leader has painstakingly established a deep-seated bond with a small flock of Kroothawks. The avian creatures circle on high, spying out and revealing the hiding places of the prey or warning of ambushing enemies with wing-dips, diving stoops and harsh shrieks.\n\nRanged weapons equipped by models in the bearer's unit have the [Ignores Cover] ability, and enemy units that are set up on the battlefield as Reinforcements cannot be set up within 12\" horizontally of the bearer." },
                    { name: "Nomadic Hunter", cost: 20, restriction: "KROOT TRAIL SHAPER model only.", text: "This Shaper's followers have become adept at the loping pursuit, snapping off harassing fire as they tirelessly and mercilessly run their victims to ground.\n\nWhile the bearer is leading a unit, add 3\" to the Move characteristic of models in that unit and ranged weapons equipped by models in that unit have the [Assault] ability." },
                    { name: "Root-carved Weapons", cost: 10, restriction: "KROOT WAR SHAPER model only.", text: "Just as the Kroot venerate the so-called Roots from which their culture derives, so they prize the traditional forms of Root-carved weapons and must perform exceptional deeds to be permitted to wield them in war.\n\nAll weapons equipped by the bearer have the [Precision] and [Devastating Wounds] abilities." },
                ],
                stratagems: [
                    { name: "Join the Hunt", cp: 2, type: "Battle Tactic", when: "Any phase.", target: "One KROOT INFANTRY or KROOT HOUNDS unit from your army that was just destroyed. You can use this Stratagem on that unit even though it was just destroyed.", effect: "Add a new unit to your army identical to your destroyed unit, in Strategic Reserves, at its Starting Strength.", restrictions: "This Stratagem cannot be used to return destroyed CHARACTER units to Attached units. You can only use this Stratagem once per battle." },
                    { name: "A Trap Well Laid", cp: 1, type: "Battle Tactic", when: "Your Shooting phase or the Fight phase.", target: "One KROOT unit from your army that has not been selected to shoot or fight this phase.", effect: "After your unit has resolved its attacks this phase, select one enemy unit that was hit by one or more of those attacks. Until the end of the phase, each time a KROOT model from your army makes an attack that targets that enemy unit, unless the attacking unit is Battle-shocked, improve the Armour Penetration characteristic of that attack by 1.", restrictions: "" },
                    { name: "Emp Grenades", cp: 1, type: "Wargear", when: "Your opponent's Shooting phase or the Fight phase, just after an enemy VEHICLE unit is selected to shoot or fight.", target: "One KROOT GRENADES unit from your army within 8\" of that enemy VEHICLE unit.", effect: "Until the end of the phase, worsen the Weapon Skill and Ballistic Skill characteristics of that enemy VEHICLE unit's weapons by 1.", restrictions: "" },
                    { name: "The Grisly Feast", cp: 1, type: "Strategic Ploy", when: "Fight phase.", target: "One KROOT unit from your army that destroyed one or more enemy units this phase.", effect: "In your opponent's next Command phase, each enemy unit within 6\" of your unit must take a Battle-shock test. If the unit taking that test is Below Half-strength, subtract 1 from that test. Enemy units affected by this Stratagem do not need to take any other Battle-shock tests in the same phase.", restrictions: "" },
                    { name: "Guerrilla Warriors", cp: 1, type: "Strategic Ploy", when: "Your Movement phase, just after a KROOT unit from your army Falls Back.", target: "That KROOT unit.", effect: "Until the end of the turn, your unit is eligible to shoot and declare a charge.", restrictions: "" },
                    { name: "Hidden Hunters", cp: 1, type: "Strategic Ploy", when: "Your opponent's Shooting phase, just after an enemy unit has selected its targets.", target: "One KROOT unit from your army that was selected as the target of one or more of the attacking unit's attacks.", effect: "Until the end of the phase, your unit can only be selected as the target of a ranged attack if the attacking model is within 18\".", restrictions: "" },
                ]
            },
            {
                name: "Auxiliary Cadre",
                flavour: "The T'au'va emphasises the integration of alien auxiliaries into Fire caste military operations wherever they are of greatest value. Typically, this sees units of Kroot, Vespid, or other aliens fighting as specialists alongside predominately T'au formations or deployed in dedicated warbands, such as the Kroot hunting packs. In the case of Auxiliary Cadres, however, the doctrine of unity is realised on a grand scale. These forces comprise a majority of alien auxiliaries, fighting alongside limited numbers of T'au specialists and heavy combat assets and provided with overall T'au strategic command. Such integrated cadres provide versatile response forces to plug gaps in Fire caste lines of battle, blunt enemy aggression in dense terrain, and selflessly act as lures in grand Kauyon ambushes to spare valuable T'au lives.",
                rule: { name: "Integrated Command Structure", flavour: "T'au officers given charge of auxiliary cadres receive additional training in optimised doctrinal and strategic alien amalgamation; this - coupled with specialised translation drones and endless integrated combat drills - allows them to get the best out of their alien subordinates.", text: "KROOT and VESPID STINGWINGS units from your army have the following ability:\nTargeting Triangulation (Aura): While an enemy unit is within 9\" of and visible to this unit, each time a ranged attack made by a friendly T'AU EMPIRE model (excluding KROOT, VESPID STINGWINGS and TITANIC models) targets that enemy unit, improve the Armour Penetration characteristic of that attack by 1.\nT'AU EMPIRE units (excluding KROOT and VESPID STINGWINGS units) from your army have the following ability:\nLocalised Stealth Projectors (Aura): While a friendly KROOT or VESPID STINGWINGS unit is wholly within 6\" of and visible to this unit, that KROOT or VESPID STINGWINGS unit can only be selected as the target of a ranged attack if the attacking model is within 18\".", restrictions: "" },
                enhancements: [
                    { name: "Student of Kauyon", cost: 15, restriction: "KROOT SHAPER model only.", text: "This Shaper has not only studied the Code of Fire but has also adapted it to best suit their people's skills.\n\nIn the Declare Battle Formations step, you can select up to three KROOT CARNIVORES or KROOT FARSTALKERS units from your army. Models in those units have the Deep Strike ability." },
                    { name: "Admired Leader", cost: 20, restriction: "T'AU EMPIRE model (excluding KROOT models) only.", text: "Having proven themselves to their alien charges, this T'au has won their fierce loyalty and become an iconic folk hero to them.\n\nIn your Command phase, you can select one KROOT or VESPID STINGWINGS unit within 12\" of the bearer. If you do, until the start of your next Command phase, improve the Leadership characteristic of models in that unit by 1, and while such a unit is not Battle-shocked, add 1 to the Objective Control characteristic of models in that unit." },
                    { name: "Fanatical Convert", cost: 10, restriction: "KROOT model only.", text: "This true believer strives to embody the T'au'va even more entirely than the T'au themselves.\n\nThe bearer's unit has the For the Greater Good ability." },
                    { name: "Transponder Lock Module", cost: 25, restriction: "T'AU EMPIRE WALKER model with the Deep Strike ability only.", text: "This system detects transponders borne deep into the field by alien auxiliaries and guides its user unerringly in on their positions.\n\nThe bearer's unit can be set up using the Deep Strike ability in the Reinforcements step of your first, second or third Movement phase, regardless of any mission rules. During your first Movement phase, when you set up the bearer's unit, it must be set up within 12\" of one or more friendly KROOT or VESPID STINGWINGS units and not within 9\" horizontally of one or more enemy units." },
                ],
                stratagems: [
                    { name: "Experimental Modifications", cp: 1, type: "Strategic Ploy", when: "Your Shooting phase or the Fight phase.", target: "One KROOT or VESPID STINGWINGS unit from your army that has not been selected to shoot or fight this phase.", effect: "Until the end of the phase, improve the Armour Penetration characteristic of weapons equipped by models in your unit by 1.", restrictions: "" },
                    { name: "Multisensory Scanning", cp: 1, type: "Battle Tactic", when: "Your Shooting phase or the Fight phase.", target: "One T'AU EMPIRE unit from your army that has not been selected to shoot or fight this phase.", effect: "Until the end of the phase, each time a model in your unit makes an attack, re-roll a Wound roll of 1. If it is a KROOT or VESPID STINGWINGS unit, you can re-roll the Wound roll instead.", restrictions: "" },
                    { name: "Interlocking Manouevres", cp: 1, type: "Strategic Ploy", when: "End of the Fight phase.", target: "One T'AU EMPIRE unit from your army that was eligible to fight this phase.", effect: "If your unit is not within Engagement Range of one or more enemy units, it can make a Normal move of up to 6\". Otherwise, your unit can make a Fall Back move. It cannot embark within a TRANSPORT at the end of this move if it disembarked from a TRANSPORT this turn.", restrictions: "" },
                    { name: "Pheromone Waypoints", cp: 1, type: "Strategic Ploy", when: "Your Movement phase.", target: "One KROOT or VESPID STINGWINGS unit from your army that has not been selected to move this phase.", effect: "Until the end of the phase, each time your unit Advances, do not make an Advance roll for it. Instead, until the end of the phase, add 6\" to the Move characteristic of models in your unit.", restrictions: "" },
                    { name: "Alien Expertise", cp: 1, type: "Battle Tactic", when: "Your Movement phase.", target: "One T'AU EMPIRE unit from your army.", effect: "Until the end of the turn, your unit is eligible to shoot in a turn in which it Advanced. If it is a KROOT or VESPID STINGWINGS unit, until the end of the turn, your unit is eligible to declare a charge in a turn in which it Advanced as well.", restrictions: "" },
                    { name: "Guided Fire", cp: 1, type: "Battle Tactic", when: "Your Shooting phase.", target: "One T'AU EMPIRE unit from your army (excluding KROOT and VESPID STINGWINGS units) that has not been selected to shoot this phase.", effect: "Until the end of the phase, add 1 to the Strength characteristic of ranged weapons equipped by models in your unit. If your unit is wholly within 9\" of one or more KROOT or VESPID STINGWINGS units from your army, add 2 to the Strength characteristic of ranged weapons equipped by models in your unit instead.", restrictions: "" },
                ]
            },
            {
                name: "Experimental Prototype Cadre",
                flavour: "A handful of elite cadres are equipped with prototype technology from the most renowned applied science divisions of the T'au Empire. It is the honour of these Fire caste warriors to field test the newest of these advanced and ingenious weapon systems under true battlefield conditions.",
                rule: { name: "Superior Craftsmanship", flavour: "The applied science divisions of the Earth caste labour endlessly to provide front-line units with expertly crafted instruments of destruction.", text: "Add 6\" to the Range characteristic of ranged weapons equipped by T'AU EMPIRE models from your army.", restrictions: "" },
                enhancements: [
                    { name: "Supernova Launcher", cost: 15, restriction: "T'AU EMPIRE model only.", text: "Adapted from standard-issue fragmentation projectors, this weapon enables the bearer to fire explosive plasma charges on parabolic trajectories. These projectiles drop amongst the enemy and explode in a coruscating fireball that evaporates metal and flesh alike.\n\nSelect one airbursting fragmentation projector equipped by the bearer. Improve the Strength characteristic of that weapon by 3, and improve the Armour Penetration and Damage characteristics of that weapon by 1." },
                    { name: "Thermoneutronic Projector", cost: 20, restriction: "T'AU EMPIRE model only.", text: "The thermoneutronic projector uses volatile gases siphoned from the coronae of neutron stars to expel a flame capable of searing through the armour plating of a battle tank.\n\nSelect one T'au flamer equipped by the bearer. Improve the Strength characteristic of that weapon by 2, and improve the Armour Penetration and Damage characteristics of that weapon by 1." },
                    { name: "Plasma Accelerator Rifle", cost: 10, restriction: "T'AU EMPIRE model only.", text: "The plasma accelerator rifle blends pulse-induction technology with a high-yield plasma generator, rendering it highly effective against both infantry and light vehicles.\n\nSelect one plasma rifle equipped by the bearer. Improve the Strength characteristic of that weapon by 2, and improve the Attacks, Armour Penetration and Damage characteristics of that weapon by 1." },
                    { name: "Fusion Blades", cost: 25, restriction: "T'AU EMPIRE model only.", text: "Fusion blades resemble modified versions of the T'au fusion blaster. However, when fired, each weapon unleashes a continuous beam of volatile energy that extends from the muzzle of the weapon.\n\nSelect one fusion blaster equipped by the bearer. Improve the Attacks characteristic of that weapon by 1, improve the Strength characteristic of that weapon by 3, and that weapon has the [Melta 4] ability." },
                ],
                stratagems: [
                    { name: "Automated Repair Drones", cp: 1, type: "Strategic Ploy", when: "Command phase.", target: "One T'AU EMPIRE BATTLESUIT unit from your army.", effect: "Select one BATTLESUIT model in your unit: that model regains up to D3+1 lost wounds.", restrictions: "" },
                    { name: "Reactive Impact Dampeners", cp: 1, type: "Battle Tactic", when: "Your opponent's Shooting phase or the Fight phase, just after an enemy unit has selected its targets.", target: "One T'AU EMPIRE BATTLESUIT unit from your army that was selected as the target of one or more of the attacking unit's attacks.", effect: "Until the end of the phase, each time an attack targets your unit, if the Strength characteristic of that attack is greater than the Toughness characteristic of your unit, subtract 1 from the Wound roll.", restrictions: "" },
                    { name: "Experimental Weaponry", cp: 1, type: "Battle Tactic", when: "Your Shooting phase.", target: "One T'AU EMPIRE unit from your army that has not been selected to shoot this phase.", effect: "Until the end of the phase, each time you roll one or more dice to determine the number of attacks made with a weapon equipped by a model in your unit, you can re-roll the result.", restrictions: "" },
                    { name: "Experimental Ammunition", cp: 1, type: "Wargear", when: "Your Shooting phase.", target: "One T'AU EMPIRE unit from your army that has not been selected to shoot this phase.", effect: "Select one of the following to apply to your unit until the end of the phase:\n- Improve the Strength characteristic of ranged weapons equipped by models in your unit by 1.\n- Improve the Strength and Armour Penetration characteristics of ranged weapons equipped by models in your unit by 1, and those weapons have the [Hazardous] ability.", restrictions: "You cannot target the same unit with the Experimental Ammunition and Threat Assessment Analyser Stratagems in the same phase." },
                    { name: "Threat Assessment Analyser", cp: 1, type: "Wargear", when: "Your Shooting phase.", target: "One T'AU EMPIRE unit from your army that has not been selected to shoot this phase.", effect: "Select the [Sustained Hits 1] or [Lethal Hits] ability. Until the end of the phase, ranged weapons equipped by models in your unit have the selected ability. You can instead select the [Sustained Hits 1], [Lethal Hits] and [Hazardous] abilities to apply to those weapons until the end of the phase.", restrictions: "You cannot target the same unit with the Experimental Ammunition and Threat Assessment Analyser Stratagems in the same phase." },
                    { name: "Neuroweb System Jammer", cp: 1, type: "Wargear", when: "Your opponent's Shooting phase, just after an enemy unit has selected its targets.", target: "One T'AU EMPIRE CRISIS unit from your army that was selected as the target of one or more of the attacking unit's attacks.", effect: "Until the end of the phase, your unit can only be selected as the target of a ranged attack if the attacking model is within 18\".", restrictions: "" },
                ]
            }
        ],
        units: [
                {
                        "id": "tau-cadre-fireblade",
                        "name": "Cadre Fireblade",
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
                                "sv": "4+",
                                "w": 3,
                                "ld": "7+",
                                "oc": 1
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Fireblade pulse rifle",
                                                "range": "30\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 5,
                                                "ap": 0,
                                                "d": 2,
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
                                        "For the Greater Good"
                                ],
                                "wargear": [],
                                "other": [
                                        "Volley Fire",
                                        "Crack Shot"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Grenades",
                                "Cadre Fireblade"
                        ],
                        "factionKeywords": [
                                "T’au Empire"
                        ],
                        "leaderText": "This model can be attached to the following units: Breacher Team; Strike Team.",
                        "compositionText": "1 Cadre Fireblade This model is equipped with: Fireblade pulse rifle; close combat weapon."
                },
                {
                        "id": "tau-commander-farsight",
                        "name": "Commander Farsight",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 85
                                }
                        ],
                        "stats": {
                                "m": "10\"",
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
                                                "name": "High-intensity plasma rifle",
                                                "range": "24\"",
                                                "a": 2,
                                                "bs": "2+",
                                                "s": 8,
                                                "ap": -3,
                                                "d": 3,
                                                "keywords": []
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Dawn Blade – strike",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "2+",
                                                "s": 10,
                                                "ap": -2,
                                                "d": 3,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Dawn Blade – sweep",
                                                "range": "Melee",
                                                "a": 8,
                                                "ws": "2+",
                                                "s": 6,
                                                "ap": -1,
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
                                        "For the Greater Good"
                                ],
                                "wargear": [],
                                "other": [
                                        "Way of the Short Blade",
                                        "Puretide's Teachings"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Walker",
                                "Fly",
                                "Character",
                                "Epic Hero",
                                "Battlesuit",
                                "Commander Farsight"
                        ],
                        "factionKeywords": [
                                "T’au Empire"
                        ],
                        "leaderText": "This model can be attached to the following units: Crisis Fireknife Battlesuits; Crisis Starscythe Battlesuits; Crisis Sunforge Battlesuits.",
                        "compositionText": "1 Commander Farsight – EPIC HERO This model is equipped with: high-intensity plasma rifle; Dawn Blade."
                },
                {
                        "id": "tau-commander-in-coldstar-battlesuit",
                        "name": "Commander in Coldstar Battlesuit",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 95
                                }
                        ],
                        "stats": {
                                "m": "12\"",
                                "t": 5,
                                "sv": "3+",
                                "w": 6,
                                "ld": "7+",
                                "oc": 2
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Airbursting fragmentation projector",
                                                "range": "24\"",
                                                "a": "D6",
                                                "bs": "3+",
                                                "s": 3,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Blast",
                                                        "Indirect Fire"
                                                ]
                                        },
                                        {
                                                "name": "Burst cannon",
                                                "range": "18\"",
                                                "a": 4,
                                                "bs": "3+",
                                                "s": 5,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Cyclic ion blaster – standard",
                                                "range": "18\"",
                                                "a": 3,
                                                "bs": "3+",
                                                "s": 7,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Cyclic ion blaster – overcharge",
                                                "range": "18\"",
                                                "a": 3,
                                                "bs": "3+",
                                                "s": 8,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Hazardous"
                                                ]
                                        },
                                        {
                                                "name": "Fusion blaster",
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
                                                "name": "High-output burst cannon",
                                                "range": "18\"",
                                                "a": 8,
                                                "bs": "3+",
                                                "s": 5,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Missile pod",
                                                "range": "30\"",
                                                "a": 2,
                                                "bs": "3+",
                                                "s": 7,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Plasma rifle",
                                                "range": "18\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 8,
                                                "ap": -3,
                                                "d": 3,
                                                "keywords": []
                                        },
                                        {
                                                "name": "T’au flamer",
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
                                                "name": "Battlesuit fists",
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
                                        "Deep Strike",
                                        "Leader"
                                ],
                                "faction": [
                                        "For the Greater Good"
                                ],
                                "wargear": [],
                                "other": [
                                        "Coldstar Commander",
                                        "Battlesuit Support System",
                                        "Shield Generator",
                                        "Weapon Support System"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Walker",
                                "Fly",
                                "Character",
                                "Battlesuit",
                                "Commander In Coldstar Battlesuit"
                        ],
                        "factionKeywords": [
                                "T’au Empire"
                        ],
                        "leaderText": "This model can be attached to the following units: Crisis Fireknife Battlesuits; Crisis Starscythe Battlesuits; Crisis Sunforge Battlesuits.",
                        "compositionText": "1 Commander in Coldstar Battlesuit This model is equipped with: high-output burst cannon; battlesuit fists."
                },
                {
                        "id": "tau-commander-in-enforcer-battlesuit",
                        "name": "Commander in Enforcer Battlesuit",
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
                                "w": 6,
                                "ld": "7+",
                                "oc": 2
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Airbursting fragmentation projector",
                                                "range": "24\"",
                                                "a": "D6",
                                                "bs": "3+",
                                                "s": 3,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Blast",
                                                        "Indirect Fire"
                                                ]
                                        },
                                        {
                                                "name": "Burst cannon",
                                                "range": "18\"",
                                                "a": 4,
                                                "bs": "3+",
                                                "s": 5,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Cyclic ion blaster – standard",
                                                "range": "18\"",
                                                "a": 3,
                                                "bs": "3+",
                                                "s": 7,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Cyclic ion blaster – overcharge",
                                                "range": "18\"",
                                                "a": 3,
                                                "bs": "3+",
                                                "s": 8,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Hazardous"
                                                ]
                                        },
                                        {
                                                "name": "Fusion blaster",
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
                                                "name": "Missile pod",
                                                "range": "30\"",
                                                "a": 2,
                                                "bs": "3+",
                                                "s": 7,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Plasma rifle",
                                                "range": "18\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 8,
                                                "ap": -3,
                                                "d": 3,
                                                "keywords": []
                                        },
                                        {
                                                "name": "T’au flamer",
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
                                                "name": "Battlesuit fists",
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
                                        "Deep Strike",
                                        "Leader"
                                ],
                                "faction": [
                                        "For the Greater Good"
                                ],
                                "wargear": [],
                                "other": [
                                        "Enforcer Commander",
                                        "Battlesuit Support System",
                                        "Shield Generator",
                                        "Weapon Support System"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Walker",
                                "Fly",
                                "Character",
                                "Battlesuit",
                                "Commander In Enforcer Battlesuit"
                        ],
                        "factionKeywords": [
                                "T’au Empire"
                        ],
                        "leaderText": "This model can be attached to the following units: Crisis Fireknife Battlesuits; Crisis Starscythe Battlesuits; Crisis Sunforge Battlesuits.",
                        "compositionText": "1 Commander in Enforcer Battlesuit This model is equipped with: burst cannon; battlesuit fists."
                },
                {
                        "id": "tau-commander-shadowsun",
                        "name": "Commander Shadowsun",
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
                                "sv": "3+",
                                "w": 6,
                                "ld": "6+",
                                "oc": 1
                        },
                        "invuln": "5+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Flechette launcher",
                                                "range": "18\"",
                                                "a": 5,
                                                "bs": "2+",
                                                "s": 3,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "High-energy fusion blaster",
                                                "range": "18\"",
                                                "a": 1,
                                                "bs": "2+",
                                                "s": 10,
                                                "ap": -4,
                                                "d": "D6",
                                                "keywords": [
                                                        "Melta 2"
                                                ]
                                        },
                                        {
                                                "name": "Light missile pod",
                                                "range": "24\"",
                                                "a": 2,
                                                "bs": "2+",
                                                "s": 7,
                                                "ap": 0,
                                                "d": 2,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Pulse pistol",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 5,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Pistol"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Battlesuit fists",
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
                                        "Infiltrators",
                                        "Lone Operative",
                                        "Stealth"
                                ],
                                "faction": [
                                        "For the Greater Good"
                                ],
                                "wargear": [],
                                "other": [
                                        "Agile Combatant",
                                        "Hero of the Empire",
                                        "Advanced Guardian Drone",
                                        "Command-link Drone"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Fly",
                                "Character",
                                "Epic Hero",
                                "Battlesuit",
                                "Commander Shadowsun"
                        ],
                        "factionKeywords": [
                                "T’au Empire"
                        ],
                        "compositionText": "1 Commander Shadowsun – EPIC HERO This model is equipped with: flechette launcher; 2 high-energy fusion blasters; light missile pod; pulse pistol; battlesuit fists; advanced guardian drone; command-link drone. SUPREME COMMANDER If this model is in your army, it must be your Warlord."
                },
                {
                        "id": "tau-darkstrider",
                        "name": "Darkstrider",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 60
                                }
                        ],
                        "stats": {
                                "m": "7\"",
                                "t": 3,
                                "sv": "4+",
                                "w": 3,
                                "ld": "7+",
                                "oc": 1
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Shade",
                                                "range": "18\"",
                                                "a": 2,
                                                "bs": "2+",
                                                "s": 5,
                                                "ap": 0,
                                                "d": 2,
                                                "keywords": [
                                                        "Assault"
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
                                        "Infiltrators",
                                        "Leader",
                                        "Scouts 7\""
                                ],
                                "faction": [
                                        "For the Greater Good"
                                ],
                                "wargear": [],
                                "other": [
                                        "Structural Analyser",
                                        "Jammer Array"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Epic Hero",
                                "Markerlight",
                                "Darkstrider"
                        ],
                        "factionKeywords": [
                                "T’au Empire"
                        ],
                        "leaderText": "This model can be attached to the following unit: Pathfinder Team.",
                        "compositionText": "1 Darkstrider – EPIC HERO This model is equipped with: Shade; close combat weapon."
                },
                {
                        "id": "tau-ethereal",
                        "name": "Ethereal",
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
                                "sv": "5+",
                                "w": 3,
                                "ld": "6+",
                                "oc": 1
                        },
                        "invuln": "5+",
                        "weapons": {
                                "ranged": [],
                                "melee": [
                                        {
                                                "name": "Honour stave",
                                                "range": "Melee",
                                                "a": 2,
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
                                        "Leader"
                                ],
                                "faction": [
                                        "For the Greater Good"
                                ],
                                "wargear": [],
                                "other": [
                                        "Failure Is Not an Option",
                                        "Coordinated Leadership",
                                        "Hover Drone"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Ethereal"
                        ],
                        "factionKeywords": [
                                "T’au Empire"
                        ],
                        "leaderText": "This model can be attached to the following units: Breacher Team; Strike Team.",
                        "compositionText": "1 Ethereal This model is equipped with: honour stave."
                },
                {
                        "id": "tau-firesight-team",
                        "name": "Firesight Team",
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
                                "sv": "4+",
                                "w": 4,
                                "ld": "7+",
                                "oc": 3
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Longshot pulse rifles",
                                                "range": "36\"",
                                                "a": 3,
                                                "bs": "4+",
                                                "s": 5,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Heavy",
                                                        "Precision"
                                                ]
                                        },
                                        {
                                                "name": "Pulse pistol",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 5,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Pistol"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Close combat weapons",
                                                "range": "Melee",
                                                "a": 4,
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
                                        "Infiltrators",
                                        "Lone Operative",
                                        "Stealth"
                                ],
                                "faction": [
                                        "For the Greater Good"
                                ],
                                "wargear": [],
                                "other": [
                                        "Precise Targeting"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Markerlight",
                                "Firesight Team"
                        ],
                        "factionKeywords": [
                                "T’au Empire"
                        ],
                        "compositionText": "1 Firesight Marksman This model is equipped with: longshot pulse rifles; pulse pistol; close combat weapons. Designer’s Note: The Firesight Marksman model and sniper drone models are treated as a single model for all rules purposes. All distances are measured to and from the Farsight Marksman model. The sniper drone models do not count as models for any rules purposes."
                },
                {
                        "id": "tau-kroot-flesh-shaper",
                        "name": "Kroot Flesh Shaper",
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
                                "w": 3,
                                "ld": "7+",
                                "oc": 1
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Kroot scattergun",
                                                "range": "12\"",
                                                "a": 2,
                                                "bs": "4+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Assault"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Twin ritualistic blades",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "2+",
                                                "s": 5,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Twin-Linked"
                                                ]
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Infiltrators",
                                        "Leader",
                                        "Scouts 7\"",
                                        "Stealth"
                                ],
                                "faction": [],
                                "wargear": [],
                                "other": [
                                        "Ritual Butchery",
                                        "Rites of Feasting"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Kroot",
                                "Shaper",
                                "Flesh Shaper"
                        ],
                        "factionKeywords": [
                                "T’au Empire"
                        ],
                        "leaderText": "This model can be attached to the following units: Kroot Carnivores; Kroot Farstalkers.",
                        "compositionText": "1 Kroot Flesh Shaper This model is equipped with: Kroot scattergun; twin ritualistic blades."
                },
                {
                        "id": "tau-kroot-lone-spear",
                        "name": "Kroot Lone-Spear",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 80
                                }
                        ],
                        "stats": {
                                "m": "12\"",
                                "t": 5,
                                "sv": "5+",
                                "w": 6,
                                "ld": "7+",
                                "oc": 2
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Blast javelin",
                                                "range": "18\"",
                                                "a": "D6",
                                                "bs": "4+",
                                                "s": 10,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Assault",
                                                        "Blast"
                                                ]
                                        },
                                        {
                                                "name": "Kroot long gun",
                                                "range": "36\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 6,
                                                "ap": -2,
                                                "d": 3,
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
                                                "a": 3,
                                                "ws": "3+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Hunting javelin",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "3+",
                                                "s": 4,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Lance"
                                                ]
                                        },
                                        {
                                                "name": "Kalamandra’s bite",
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
                                        "Scouts 7\"",
                                        "Stealth"
                                ],
                                "faction": [],
                                "wargear": [],
                                "other": [
                                        "Advanced Scouting",
                                        "Fire and Fade"
                                ]
                        },
                        "keywords": [
                                "Mounted",
                                "Character",
                                "Kroot",
                                "Lone-Spear"
                        ],
                        "factionKeywords": [
                                "T’au Empire"
                        ],
                        "compositionText": "1 Kroot Lone-Spear This model is equipped with: Kroot long gun; close combat weapon; Kalamandra’s bite."
                },
                {
                        "id": "tau-kroot-trail-shaper",
                        "name": "Kroot Trail Shaper",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 55
                                }
                        ],
                        "stats": {
                                "m": "7\"",
                                "t": 3,
                                "sv": "6+",
                                "w": 3,
                                "ld": "7+",
                                "oc": 1
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Kroot rifle",
                                                "range": "24\"",
                                                "a": 1,
                                                "bs": "4+",
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
                                                "name": "Shaper’s blade",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "2+",
                                                "s": 5,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": []
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Infiltrators",
                                        "Leader",
                                        "Scouts 7\"",
                                        "Stealth"
                                ],
                                "faction": [],
                                "wargear": [],
                                "other": [
                                        "Trail Finding",
                                        "Kroot Ambush"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Kroot",
                                "Shaper",
                                "Trail Shaper"
                        ],
                        "factionKeywords": [
                                "T’au Empire"
                        ],
                        "leaderText": "This model can be attached to the following units: Kroot Carnivores; Kroot Farstalkers.",
                        "compositionText": "1 Kroot Trail Shaper This model is equipped with: Kroot rifle; Shaper’s blade."
                },
                {
                        "id": "tau-kroot-war-shaper",
                        "name": "Kroot War Shaper",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 50
                                }
                        ],
                        "stats": {
                                "m": "7\"",
                                "t": 3,
                                "sv": "6+",
                                "w": 3,
                                "ld": "7+",
                                "oc": 1
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Dart-bow and tri-blade",
                                                "range": "24\"",
                                                "a": "D3+1",
                                                "bs": "4+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 2,
                                                "keywords": [
                                                        "Anti-Infantry 3+",
                                                        "Assault",
                                                        "Heavy"
                                                ]
                                        },
                                        {
                                                "name": "Kroot pistol",
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
                                                "name": "Bladestave and prey-hook",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "2+",
                                                "s": 5,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Lethal Hits"
                                                ]
                                        },
                                        {
                                                "name": "Shaper’s blade",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "2+",
                                                "s": 5,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": []
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Infiltrators",
                                        "Leader",
                                        "Scouts 7\"",
                                        "Stealth"
                                ],
                                "faction": [],
                                "wargear": [],
                                "other": [
                                        "War Leader",
                                        "Root of Honour"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Kroot",
                                "Shaper",
                                "War Shaper"
                        ],
                        "factionKeywords": [
                                "T’au Empire"
                        ],
                        "leaderText": "This model can be attached to the following units: Kroot Carnivores; Kroot Farstalkers.",
                        "compositionText": "1 Kroot War Shaper This model is equipped with: dart-bow and tri-blade; Kroot pistol; Shaper’s blade."
                },
                {
                        "id": "tau-the-twin-lance",
                        "name": "The Twin Lance",
                        "role": "character",
                        "points": [
                                {
                                        "models": 2,
                                        "cost": 185
                                }
                        ],
                        "stats": {
                                "m": "10\"",
                                "t": 6,
                                "sv": "2+",
                                "w": 8,
                                "ld": "6+",
                                "oc": 2
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Fusion eliminator",
                                                "range": "18\"",
                                                "a": 2,
                                                "bs": "2+",
                                                "s": 10,
                                                "ap": -4,
                                                "d": "D6",
                                                "keywords": [
                                                        "Melta 2"
                                                ]
                                        },
                                        {
                                                "name": "Ion scattercannon – standard",
                                                "range": "18\"",
                                                "a": 4,
                                                "bs": "2+",
                                                "s": 7,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Rapid Fire 2"
                                                ]
                                        },
                                        {
                                                "name": "Ion scattercannon – overcharge",
                                                "range": "18\"",
                                                "a": 4,
                                                "bs": "2+",
                                                "s": 8,
                                                "ap": -3,
                                                "d": 3,
                                                "keywords": [
                                                        "Hazardous",
                                                        "Rapid Fire 2"
                                                ]
                                        },
                                        {
                                                "name": "Shardstorm burst system",
                                                "range": "18\"",
                                                "a": "D6",
                                                "bs": "2+",
                                                "s": 5,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Pistol"
                                                ]
                                        },
                                        {
                                                "name": "Twin pulse blaster",
                                                "range": "10\"",
                                                "a": 2,
                                                "bs": "5+",
                                                "s": 6,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Assault",
                                                        "Twin-Linked"
                                                ]
                                        },
                                        {
                                                "name": "XV pulse pistol",
                                                "range": "12\"",
                                                "a": 2,
                                                "bs": "2+",
                                                "s": 6,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Rapid Fire 2"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Fusion eliminator",
                                                "range": "Melee",
                                                "a": 1,
                                                "ws": "4+",
                                                "s": 10,
                                                "ap": -4,
                                                "d": "D6+2",
                                                "keywords": [
                                                        "Extra Attacks"
                                                ]
                                        },
                                        {
                                                "name": "Ion scattercannon",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "4+",
                                                "s": 7,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Extra Attacks"
                                                ]
                                        },
                                        {
                                                "name": "XV pulse pistol",
                                                "range": "Melee",
                                                "a": 4,
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
                                        "Deep Strike",
                                        "Scouts 8\""
                                ],
                                "faction": [
                                        "For the Greater Good"
                                ],
                                "wargear": [],
                                "other": [
                                        "Exemplars of Mont’ka",
                                        "Neocapacitor Shields",
                                        "Retro-thrusters",
                                        "MV15 Gun Drone"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Walker",
                                "Fly",
                                "Character",
                                "Epic Hero",
                                "Battlesuit",
                                "The Twin Lance"
                        ],
                        "factionKeywords": [
                                "T’au Empire"
                        ],
                        "compositionText": "1 Ri’Lantar – EPIC HERO 1 Ri’Locai – EPIC HERO Ri’Lantar is equipped with: 1 fusion eliminator; 1 XV pulse pistol; 1 shardstorm burst system; 1 MV15 gun drone. Ri’Locai is equipped with: 1 ion scattercannon; 1 XV pulse pistol; 1 shardstorm burst system; 1 MV15 gun drone."
                },
                {
                        "id": "tau-breacher-team",
                        "name": "Breacher Team",
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
                                                "name": "Pulse blaster",
                                                "range": "10\"",
                                                "a": 2,
                                                "bs": "3+",
                                                "s": 6,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Assault"
                                                ]
                                        },
                                        {
                                                "name": "Pulse pistol",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "4+",
                                                "s": 5,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Pistol"
                                                ]
                                        },
                                        {
                                                "name": "Support turret",
                                                "range": "30\"",
                                                "a": 2,
                                                "bs": "5+",
                                                "s": 5,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Indirect Fire",
                                                        "Twin-Linked"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Close combat weapon",
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
                                "core": [],
                                "faction": [
                                        "For the Greater Good"
                                ],
                                "wargear": [],
                                "other": [
                                        "Breach and Clear",
                                        "DS8 Support Turret",
                                        "Designer’s Note"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Battleline",
                                "Grenades",
                                "Markerlight",
                                "Fire Warrior",
                                "Breacher Team"
                        ],
                        "factionKeywords": [
                                "T’au Empire"
                        ],
                        "compositionText": "1 Breacher Fire Warrior Shas’ui 9 Breacher Fire Warriors Every model is equipped with: pulse blaster; pulse pistol; close combat weapon."
                },
                {
                        "id": "tau-strike-team",
                        "name": "Strike Team",
                        "role": "battleline",
                        "points": [
                                {
                                        "models": 10,
                                        "cost": 70
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
                                                "name": "Pulse carbine",
                                                "range": "20\"",
                                                "a": 2,
                                                "bs": "4+",
                                                "s": 5,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Pulse pistol",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "4+",
                                                "s": 5,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Pistol"
                                                ]
                                        },
                                        {
                                                "name": "Pulse rifle",
                                                "range": "30\"",
                                                "a": 1,
                                                "bs": "4+",
                                                "s": 5,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Rapid Fire 1"
                                                ]
                                        },
                                        {
                                                "name": "Support turret",
                                                "range": "30\"",
                                                "a": 2,
                                                "bs": "5+",
                                                "s": 5,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Indirect Fire",
                                                        "Twin-Linked"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Close combat weapon",
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
                                "core": [],
                                "faction": [
                                        "For the Greater Good"
                                ],
                                "wargear": [],
                                "other": [
                                        "Suppression Volley",
                                        "DS8 Support Turret",
                                        "Designer’s Note"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Battleline",
                                "Grenades",
                                "Markerlight",
                                "Fire Warrior",
                                "Strike Team"
                        ],
                        "factionKeywords": [
                                "T’au Empire"
                        ],
                        "compositionText": "1 Fire Warrior Shas’ui 9 Fire Warriors Every model is equipped with: pulse pistol; pulse rifle; close combat weapon."
                },
                {
                        "id": "tau-devilfish",
                        "name": "Devilfish",
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
                                "w": 13,
                                "ld": "7+",
                                "oc": 2
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Accelerator burst cannon",
                                                "range": "18\"",
                                                "a": 4,
                                                "bs": "4+",
                                                "s": 6,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Seeker missile",
                                                "range": "48\"",
                                                "a": 1,
                                                "bs": "4+",
                                                "s": 14,
                                                "ap": -3,
                                                "d": "D6+1",
                                                "keywords": [
                                                        "One Shot"
                                                ]
                                        },
                                        {
                                                "name": "Twin pulse carbine",
                                                "range": "20\"",
                                                "a": 2,
                                                "bs": "4+",
                                                "s": 5,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Assault",
                                                        "Twin-Linked"
                                                ]
                                        },
                                        {
                                                "name": "Smart missile system",
                                                "range": "30\"",
                                                "a": 3,
                                                "bs": "4+",
                                                "s": 5,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Indirect Fire"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Armoured hull",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "5+",
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
                                        "For the Greater Good"
                                ],
                                "wargear": [],
                                "other": [
                                        "Rapid Deployment"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Fly",
                                "Transport",
                                "Dedicated Transport",
                                "Devilfish"
                        ],
                        "factionKeywords": [
                                "T’au Empire"
                        ],
                        "compositionText": "1 Devilfish This model is equipped with: accelerator burst cannon; 2 twin pulse carbines; armoured hull. TRANSPORT This model has a transport capacity of 12 T’AU EMPIRE INFANTRY models. It cannot transport BATTLESUIT, KROOT or VESPID STINGWINGS models."
                },
                {
                        "id": "tau-tidewall-droneport",
                        "name": "Tidewall Droneport",
                        "role": "vehicle",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 85
                                }
                        ],
                        "stats": {
                                "m": "4\"",
                                "t": 8,
                                "sv": "3+",
                                "w": 10,
                                "ld": "7+",
                                "oc": 0
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Drone defenders",
                                                "range": "20\"",
                                                "a": 8,
                                                "bs": "5+",
                                                "s": 5,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Assault",
                                                        "Twin-Linked"
                                                ]
                                        }
                                ],
                                "melee": []
                        },
                        "abilities": {
                                "core": [
                                        "Deadly Demise D3",
                                        "Firing Deck 11"
                                ],
                                "faction": [],
                                "wargear": [],
                                "other": [
                                        "Droneport",
                                        "Fortification",
                                        "Tidewall Cover"
                                ]
                        },
                        "keywords": [
                                "Fortification",
                                "Vehicle",
                                "Transport",
                                "Fly",
                                "Tidewall Droneport"
                        ],
                        "factionKeywords": [
                                "T’au Empire"
                        ],
                        "compositionText": "1 Tidewall Droneport This model is equipped with: drone defenders. TRANSPORT This model has a transport capacity of 11 T’AU EMPIRE INFANTRY models. It cannot transport BATTLESUIT, KROOT or VESPID STINGWINGS models."
                },
                {
                        "id": "tau-tidewall-gunrig",
                        "name": "Tidewall Gunrig",
                        "role": "vehicle",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 90
                                }
                        ],
                        "stats": {
                                "m": "4\"",
                                "t": 8,
                                "sv": "3+",
                                "w": 14,
                                "ld": "7+",
                                "oc": 0
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Supremacy railgun",
                                                "range": "72\"",
                                                "a": 1,
                                                "bs": "5+",
                                                "s": 20,
                                                "ap": -5,
                                                "d": "D6+6",
                                                "keywords": [
                                                        "Devastating Wounds",
                                                        "Twin-Linked"
                                                ]
                                        }
                                ],
                                "melee": []
                        },
                        "abilities": {
                                "core": [
                                        "Deadly Demise D3",
                                        "Firing Deck 11"
                                ],
                                "faction": [],
                                "wargear": [],
                                "other": [
                                        "Fortification",
                                        "Tidewall Cover"
                                ]
                        },
                        "keywords": [
                                "Fortification",
                                "Vehicle",
                                "Transport",
                                "Fly",
                                "Tidewall Gunrig"
                        ],
                        "factionKeywords": [
                                "T’au Empire"
                        ],
                        "compositionText": "1 Tidewall Gunrig This model is equipped with: supremacy railgun. TRANSPORT This model has a transport capacity of 11 T’AU EMPIRE INFANTRY models. It cannot transport BATTLESUIT, KROOT or VESPID STINGWINGS models."
                },
                {
                        "id": "tau-tidewall-shieldline",
                        "name": "Tidewall Shieldline",
                        "role": "vehicle",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 85
                                }
                        ],
                        "stats": {
                                "m": "4\"",
                                "t": 8,
                                "sv": "3+",
                                "w": 10,
                                "ld": "7+",
                                "oc": 0
                        },
                        "invuln": "5+",
                        "weapons": {
                                "ranged": [],
                                "melee": []
                        },
                        "abilities": {
                                "core": [
                                        "Deadly Demise D3",
                                        "Firing Deck 20"
                                ],
                                "faction": [],
                                "wargear": [],
                                "other": [
                                        "Fortification",
                                        "Tidewall Cover",
                                        "Tidewall Defence Platform"
                                ]
                        },
                        "keywords": [
                                "Fortification",
                                "Vehicle",
                                "Transport",
                                "Fly",
                                "Tidewall Shieldline"
                        ],
                        "factionKeywords": [
                                "T’au Empire"
                        ],
                        "compositionText": "1 Tidewall Shieldline This model can be equipped with 1 Tidewall defence platform Tidewall Defence Platform +20 TRANSPORT This model has a transport capacity of 11 T’AU EMPIRE INFANTRY models. It cannot transport BATTLESUIT, KROOT or VESPID STINGWINGS models. If this model is equipped with a Tidewall defence platform, it has a transport capacity of 22 T’au Infantry models instead."
                },
                {
                        "id": "tau-broadside-battlesuits",
                        "name": "Broadside Battlesuits",
                        "role": "vehicle",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 80
                                },
                                {
                                        "models": 2,
                                        "cost": 170
                                },
                                {
                                        "models": 3,
                                        "cost": 270
                                }
                        ],
                        "stats": {
                                "m": "5\"",
                                "t": 6,
                                "sv": "2+",
                                "w": 8,
                                "ld": "7+",
                                "oc": 2
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Heavy rail rifle",
                                                "range": "60\"",
                                                "a": 2,
                                                "bs": "4+",
                                                "s": 12,
                                                "ap": -4,
                                                "d": "D6+1",
                                                "keywords": [
                                                        "Heavy",
                                                        "Devastating Wounds"
                                                ]
                                        },
                                        {
                                                "name": "High-yield missile pods",
                                                "range": "30\"",
                                                "a": 6,
                                                "bs": "4+",
                                                "s": 7,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Twin-Linked"
                                                ]
                                        },
                                        {
                                                "name": "Seeker missile",
                                                "range": "48\"",
                                                "a": 1,
                                                "bs": "4+",
                                                "s": 14,
                                                "ap": -3,
                                                "d": "D6+1",
                                                "keywords": [
                                                        "One Shot"
                                                ]
                                        },
                                        {
                                                "name": "Twin plasma rifle",
                                                "range": "18\"",
                                                "a": 1,
                                                "bs": "4+",
                                                "s": 8,
                                                "ap": -3,
                                                "d": 3,
                                                "keywords": [
                                                        "Twin-Linked"
                                                ]
                                        },
                                        {
                                                "name": "Twin smart missile system",
                                                "range": "30\"",
                                                "a": 4,
                                                "bs": "4+",
                                                "s": 5,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Indirect Fire",
                                                        "Twin-Linked"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Crushing bulk",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "5+",
                                                "s": 6,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": []
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [],
                                "faction": [
                                        "For the Greater Good"
                                ],
                                "wargear": [],
                                "other": [
                                        "Advanced Armour",
                                        "Weapon Support System"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Walker",
                                "Battlesuit",
                                "Broadside"
                        ],
                        "factionKeywords": [
                                "T’au Empire"
                        ],
                        "compositionText": "1 Broadside Shas’vre 0-2 Broadside Shas’ui Every model is equipped with: heavy rail rifle; crushing bulk."
                },
                {
                        "id": "tau-crisis-fireknife-battlesuits",
                        "name": "Crisis Fireknife Battlesuits",
                        "role": "vehicle",
                        "points": [
                                {
                                        "models": 3,
                                        "cost": 120
                                }
                        ],
                        "stats": {
                                "m": "10\"",
                                "t": 5,
                                "sv": "3+",
                                "w": 4,
                                "ld": "7+",
                                "oc": 2
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Missile pod",
                                                "range": "30\"",
                                                "a": 2,
                                                "bs": "4+",
                                                "s": 7,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Plasma rifle",
                                                "range": "18\"",
                                                "a": 1,
                                                "bs": "4+",
                                                "s": 8,
                                                "ap": -3,
                                                "d": 3,
                                                "keywords": []
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Battlesuit fists",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "5+",
                                                "s": 5,
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
                                        "For the Greater Good"
                                ],
                                "wargear": [],
                                "other": [
                                        "Fireknife",
                                        "Weapon Support System"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Walker",
                                "Fly",
                                "Battlesuit",
                                "Crisis",
                                "Fireknife"
                        ],
                        "factionKeywords": [
                                "T’au Empire"
                        ],
                        "compositionText": "1 Crisis Fireknife Shas’vre 2 Crisis Fireknife Shas’ui Every model is equipped with: plasma rifle; missile pod; battlesuit fists."
                },
                {
                        "id": "tau-crisis-starscythe-battlesuits",
                        "name": "Crisis Starscythe Battlesuits",
                        "role": "vehicle",
                        "points": [
                                {
                                        "models": 3,
                                        "cost": 110
                                }
                        ],
                        "stats": {
                                "m": "10\"",
                                "t": 5,
                                "sv": "3+",
                                "w": 4,
                                "ld": "7+",
                                "oc": 2
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Burst cannon",
                                                "range": "18\"",
                                                "a": 4,
                                                "bs": "4+",
                                                "s": 5,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "T’au flamer",
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
                                                "name": "Battlesuit fists",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "5+",
                                                "s": 5,
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
                                        "For the Greater Good"
                                ],
                                "wargear": [],
                                "other": [
                                        "Starscythe",
                                        "Battlesuit Support System"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Walker",
                                "Fly",
                                "Battlesuit",
                                "Crisis",
                                "Starscythe"
                        ],
                        "factionKeywords": [
                                "T’au Empire"
                        ],
                        "compositionText": "1 Crisis Starscythe Shas’vre 2 Crisis Starscythe Shas’ui Every model is equipped with: burst cannon; T’au flamer; battlesuit fists."
                },
                {
                        "id": "tau-crisis-sunforge-battlesuits",
                        "name": "Crisis Sunforge Battlesuits",
                        "role": "vehicle",
                        "points": [
                                {
                                        "models": 3,
                                        "cost": 140
                                }
                        ],
                        "stats": {
                                "m": "10\"",
                                "t": 5,
                                "sv": "3+",
                                "w": 4,
                                "ld": "7+",
                                "oc": 2
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Fusion blaster",
                                                "range": "12\"",
                                                "a": 1,
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
                                                "name": "Battlesuit fists",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "5+",
                                                "s": 5,
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
                                        "For the Greater Good"
                                ],
                                "wargear": [],
                                "other": [
                                        "Sunforge"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Walker",
                                "Fly",
                                "Battlesuit",
                                "Crisis",
                                "Sunforge"
                        ],
                        "factionKeywords": [
                                "T’au Empire"
                        ],
                        "compositionText": "1 Crisis Sunforge Shas’vre 2 Crisis Sunforge Shas’ui Every model is equipped with: 2 fusion blasters; battlesuit fists."
                },
                {
                        "id": "tau-ghostkeel-battlesuit",
                        "name": "Ghostkeel Battlesuit",
                        "role": "vehicle",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 160
                                }
                        ],
                        "stats": {
                                "m": "10\"",
                                "t": 8,
                                "sv": "2+",
                                "w": 12,
                                "ld": "7+",
                                "oc": 3
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Cyclic ion raker – standard",
                                                "range": "36\"",
                                                "a": 6,
                                                "bs": "4+",
                                                "s": 7,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Cyclic ion raker – overcharge",
                                                "range": "36\"",
                                                "a": 6,
                                                "bs": "4+",
                                                "s": 8,
                                                "ap": -2,
                                                "d": 3,
                                                "keywords": [
                                                        "Hazardous"
                                                ]
                                        },
                                        {
                                                "name": "Fusion collider",
                                                "range": "18\"",
                                                "a": 2,
                                                "bs": "4+",
                                                "s": 12,
                                                "ap": -4,
                                                "d": "D6",
                                                "keywords": [
                                                        "Melta 2"
                                                ]
                                        },
                                        {
                                                "name": "Twin burst cannon",
                                                "range": "18\"",
                                                "a": 4,
                                                "bs": "4+",
                                                "s": 5,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Twin-Linked"
                                                ]
                                        },
                                        {
                                                "name": "Twin fusion blaster",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "4+",
                                                "s": 9,
                                                "ap": -4,
                                                "d": "D6",
                                                "keywords": [
                                                        "Melta 2",
                                                        "Twin-Linked"
                                                ]
                                        },
                                        {
                                                "name": "Twin T’au flamer",
                                                "range": "12\"",
                                                "a": "D6",
                                                "bs": "N/A",
                                                "s": 4,
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
                                                "name": "Ghostkeel fists",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "5+",
                                                "s": 6,
                                                "ap": 0,
                                                "d": 2,
                                                "keywords": []
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Deadly Demise D3",
                                        "Infiltrators",
                                        "Lone Operative",
                                        "Stealth"
                                ],
                                "faction": [
                                        "For the Greater Good"
                                ],
                                "wargear": [],
                                "other": [
                                        "Stealth Drones",
                                        "Designer’s Note",
                                        "Battlesuit Support System"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Walker",
                                "Fly",
                                "Smoke",
                                "Battlesuit",
                                "Ghostkeel"
                        ],
                        "factionKeywords": [
                                "T’au Empire"
                        ],
                        "compositionText": "1 Ghostkeel Battlesuit This model is equipped with: fusion collider; twin T’au flamer; Ghostkeel fists. DAMAGED: 1-4 WOUNDS REMAINING While this model has 1-4 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
                },
                {
                        "id": "tau-hammerhead-gunship",
                        "name": "Hammerhead Gunship",
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
                                "w": 14,
                                "ld": "7+",
                                "oc": 3
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Accelerator burst cannon",
                                                "range": "18\"",
                                                "a": 4,
                                                "bs": "4+",
                                                "s": 6,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Ion cannon – standard",
                                                "range": "60\"",
                                                "a": "D6+3",
                                                "bs": "4+",
                                                "s": 7,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Blast"
                                                ]
                                        },
                                        {
                                                "name": "Ion cannon – overcharge",
                                                "range": "60\"",
                                                "a": "D6+3",
                                                "bs": "4+",
                                                "s": 8,
                                                "ap": -2,
                                                "d": 3,
                                                "keywords": [
                                                        "Blast",
                                                        "Hazardous"
                                                ]
                                        },
                                        {
                                                "name": "Railgun",
                                                "range": "72\"",
                                                "a": 1,
                                                "bs": "4+",
                                                "s": 20,
                                                "ap": -5,
                                                "d": "D6+6",
                                                "keywords": [
                                                        "Heavy",
                                                        "Devastating Wounds"
                                                ]
                                        },
                                        {
                                                "name": "Seeker missile",
                                                "range": "48\"",
                                                "a": 1,
                                                "bs": "4+",
                                                "s": 14,
                                                "ap": -3,
                                                "d": "D6+1",
                                                "keywords": [
                                                        "One Shot"
                                                ]
                                        },
                                        {
                                                "name": "Twin pulse carbine",
                                                "range": "20\"",
                                                "a": 2,
                                                "bs": "4+",
                                                "s": 5,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Twin-Linked"
                                                ]
                                        },
                                        {
                                                "name": "Smart missile system",
                                                "range": "30\"",
                                                "a": 3,
                                                "bs": "4+",
                                                "s": 5,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Indirect Fire"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Armoured hull",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "5+",
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
                                        "For the Greater Good"
                                ],
                                "wargear": [],
                                "other": [
                                        "Armour Hunter",
                                        "Targeting Array"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Fly",
                                "Hammerhead Gunship"
                        ],
                        "factionKeywords": [
                                "T’au Empire"
                        ],
                        "compositionText": "1 Hammerhead Gunship This model is equipped with: 1 railgun; 2 twin pulse carbines; armoured hull. DAMAGED: 1-5 WOUNDS REMAINING While this model has 1-5 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
                },
                {
                        "id": "tau-kroot-carnivores",
                        "name": "Kroot Carnivores",
                        "role": "infantry",
                        "points": [
                                {
                                        "models": 10,
                                        "cost": 65
                                },
                                {
                                        "models": 20,
                                        "cost": 140
                                }
                        ],
                        "stats": {
                                "m": "7\"",
                                "t": 3,
                                "sv": "6+",
                                "w": 1,
                                "ld": "7+",
                                "oc": 2
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Tanglebomb launcher",
                                                "range": "24\"",
                                                "a": "D3",
                                                "bs": "4+",
                                                "s": 5,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Blast"
                                                ]
                                        },
                                        {
                                                "name": "Kroot pistol",
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
                                                "name": "Kroot rifle",
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
                                                "name": "Kroot carbine",
                                                "range": "18\"",
                                                "a": 1,
                                                "bs": "4+",
                                                "s": 4,
                                                "ap": 0,
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
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": []
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Scouts 7\"",
                                        "Stealth"
                                ],
                                "faction": [],
                                "wargear": [],
                                "other": [
                                        "Fieldcraft"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Grenades",
                                "Kroot",
                                "Carnivores"
                        ],
                        "factionKeywords": [
                                "T’au Empire"
                        ],
                        "compositionText": "1 Long-quill 9-19 Kroot Carnivores The 1 Long-quill is equipped with: Kroot pistol; Kroot rifle; close combat weapon. Every Kroot Carnivore is equipped with: Kroot rifle; close combat weapon. BODYGUARD If this unit has a Starting Strength of 20, you can attach up to two Leader units to it instead of one, provided those Leaders are not duplicates (e.g. you cannot attach two WAR SHAPERS to this unit). If you do, and this unit is destroyed, the Leader units attached to it become separate units with their original Starting Strengths."
                },
                {
                        "id": "tau-kroot-farstalkers",
                        "name": "Kroot Farstalkers",
                        "role": "infantry",
                        "points": [
                                {
                                        "models": 12,
                                        "cost": 85
                                }
                        ],
                        "stats": {
                                "m": "7\"",
                                "t": 3,
                                "sv": "6+",
                                "w": 1,
                                "ld": "7+",
                                "oc": 1
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Dvorgite skinner",
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
                                                "name": "Farstalker firearm",
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
                                                "name": "Kroot pistol",
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
                                                "name": "Londaxi tribalest",
                                                "range": "18\"",
                                                "a": 3,
                                                "bs": "5+",
                                                "s": 7,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Anti-Vehicle 4+",
                                                        "Devastating Wounds",
                                                        "Heavy"
                                                ]
                                        },
                                        {
                                                "name": "T’au-tech rifle",
                                                "range": "30\"",
                                                "a": 1,
                                                "bs": "4+",
                                                "s": 5,
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
                                                "a": 2,
                                                "ws": "3+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Ripping fangs",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "3+",
                                                "s": 3,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Ritual blade",
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
                                        "Infiltrators",
                                        "Stealth"
                                ],
                                "faction": [],
                                "wargear": [],
                                "other": [
                                        "Bounty Hunters",
                                        "Pech’ra"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Kroot",
                                "Grenades",
                                "Farstalkers"
                        ],
                        "factionKeywords": [
                                "T’au Empire"
                        ],
                        "compositionText": "1 Kroot Kill-broker 9 Kroot Farstalkers 2 Kroot Hounds The Kroot Kill-broker is equipped with: Farstalker firearm; Kroot pistol; ritual blade. Every Kroot Farstalker is equipped with: Farstalker firearm; Kroot pistol; close combat weapon. Every Kroot Hound is equipped with: ripping fangs."
                },
                {
                        "id": "tau-kroot-hounds",
                        "name": "Kroot Hounds",
                        "role": "infantry",
                        "points": [
                                {
                                        "models": 5,
                                        "cost": 40
                                },
                                {
                                        "models": 10,
                                        "cost": 80
                                }
                        ],
                        "stats": {
                                "m": "12\"",
                                "t": 3,
                                "sv": "6+",
                                "w": 1,
                                "ld": "8+",
                                "oc": 0
                        },
                        "weapons": {
                                "ranged": [],
                                "melee": [
                                        {
                                                "name": "Ripping fangs",
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
                                        "Scouts 7\"",
                                        "Stealth"
                                ],
                                "faction": [],
                                "wargear": [],
                                "other": [
                                        "Loping Pounce",
                                        "Hunting Hounds"
                                ]
                        },
                        "keywords": [
                                "Beasts",
                                "Kroot",
                                "Hounds"
                        ],
                        "factionKeywords": [
                                "T’au Empire"
                        ],
                        "compositionText": "5-10 Kroot Hounds Every model is equipped with: ripping fangs."
                },
                {
                        "id": "tau-krootox-rampagers",
                        "name": "Krootox Rampagers",
                        "role": "mounted",
                        "points": [
                                {
                                        "models": 3,
                                        "cost": 85
                                },
                                {
                                        "models": 6,
                                        "cost": 170
                                }
                        ],
                        "stats": {
                                "m": "7\"",
                                "t": 6,
                                "sv": "5+",
                                "w": 5,
                                "ld": "7+",
                                "oc": 2
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Kroot pistol and hunting javelins",
                                                "range": "12\"",
                                                "a": 2,
                                                "bs": "4+",
                                                "s": 4,
                                                "ap": 0,
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
                                                "a": 3,
                                                "ws": "3+",
                                                "s": 4,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Lance"
                                                ]
                                        },
                                        {
                                                "name": "Krootox fists",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "3+",
                                                "s": 6,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Extra Attacks",
                                                        "Sustained Hits 1"
                                                ]
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Scouts 7\""
                                ],
                                "faction": [],
                                "wargear": [],
                                "other": [
                                        "Kroot Linebreakers"
                                ]
                        },
                        "keywords": [
                                "Mounted",
                                "Grenades",
                                "Kroot",
                                "Krootox Rampagers"
                        ],
                        "factionKeywords": [
                                "T’au Empire"
                        ],
                        "compositionText": "3-6 Krootox Rampagers Every model is equipped with: Kroot pistol and hunting javelins; hunting blades; Rampager fists."
                },
                {
                        "id": "tau-krootox-riders",
                        "name": "Krootox Riders",
                        "role": "mounted",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 40
                                },
                                {
                                        "models": 2,
                                        "cost": 60
                                },
                                {
                                        "models": 3,
                                        "cost": 90
                                }
                        ],
                        "stats": {
                                "m": "7\"",
                                "t": 6,
                                "sv": "5+",
                                "w": 5,
                                "ld": "7+",
                                "oc": 2
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Repeater cannon",
                                                "range": "36\"",
                                                "a": 2,
                                                "bs": "4+",
                                                "s": 7,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Rapid Fire 2"
                                                ]
                                        },
                                        {
                                                "name": "Tanglecannon",
                                                "range": "36\"",
                                                "a": "D6+1",
                                                "bs": "4+",
                                                "s": 6,
                                                "ap": 0,
                                                "d": 1,
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
                                                "a": 2,
                                                "ws": "3+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Krootox fists",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "3+",
                                                "s": 6,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Extra Attacks"
                                                ]
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Scouts 7\""
                                ],
                                "faction": [],
                                "wargear": [],
                                "other": [
                                        "Kroot Packmates"
                                ]
                        },
                        "keywords": [
                                "Mounted",
                                "Grenades",
                                "Kroot",
                                "Krootox Riders"
                        ],
                        "factionKeywords": [
                                "T’au Empire"
                        ],
                        "compositionText": "1-3 Krootox Riders Every model is equipped with: repeater cannon; close combat weapon; Krootox fists."
                },
                {
                        "id": "tau-pathfinder-team",
                        "name": "Pathfinder Team",
                        "role": "infantry",
                        "points": [
                                {
                                        "models": 10,
                                        "cost": 90
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
                                                "name": "Drone burst cannon",
                                                "range": "18\"",
                                                "a": 4,
                                                "bs": "5+",
                                                "s": 5,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Ion rifle – standard",
                                                "range": "30\"",
                                                "a": 3,
                                                "bs": "5+",
                                                "s": 7,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Heavy"
                                                ]
                                        },
                                        {
                                                "name": "Ion rifle – overcharge",
                                                "range": "30\"",
                                                "a": 3,
                                                "bs": "5+",
                                                "s": 8,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Hazardous",
                                                        "Heavy"
                                                ]
                                        },
                                        {
                                                "name": "Pulse carbine",
                                                "range": "20\"",
                                                "a": 2,
                                                "bs": "4+",
                                                "s": 5,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Pulse pistol",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "4+",
                                                "s": 5,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Pistol"
                                                ]
                                        },
                                        {
                                                "name": "Rail rifle",
                                                "range": "30\"",
                                                "a": 1,
                                                "bs": "5+",
                                                "s": 10,
                                                "ap": -4,
                                                "d": 3,
                                                "keywords": [
                                                        "Devastating Wounds",
                                                        "Heavy"
                                                ]
                                        },
                                        {
                                                "name": "Semi-automatic grenade launcher – EMP",
                                                "range": "18\"",
                                                "a": 1,
                                                "bs": "4+",
                                                "s": 3,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Anti-Vehicle 4+",
                                                        "Devastating Wounds"
                                                ]
                                        },
                                        {
                                                "name": "Semi-automatic grenade launcher – fusion",
                                                "range": "18\"",
                                                "a": 1,
                                                "bs": "4+",
                                                "s": 6,
                                                "ap": -1,
                                                "d": 3,
                                                "keywords": []
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Close combat weapon",
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
                                        "Scouts 7\""
                                ],
                                "faction": [
                                        "For the Greater Good"
                                ],
                                "wargear": [],
                                "other": [
                                        "Target Uploaded",
                                        "Grav-inhibitor Drone",
                                        "Pulse Accelerator Drone",
                                        "Recon Drone"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Grenades",
                                "Markerlight",
                                "Pathfinder Team"
                        ],
                        "factionKeywords": [
                                "T’au Empire"
                        ],
                        "compositionText": "1 Pathfinder Shas’ui 9 Pathfinders Every model is equipped with: pulse carbine; pulse pistol; close combat weapon."
                },
                {
                        "id": "tau-piranhas",
                        "name": "Piranhas",
                        "role": "vehicle",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 60
                                },
                                {
                                        "models": 2,
                                        "cost": 120
                                },
                                {
                                        "models": 3,
                                        "cost": 180
                                }
                        ],
                        "stats": {
                                "m": "14\"",
                                "t": 7,
                                "sv": "4+",
                                "w": 7,
                                "ld": "7+",
                                "oc": 2
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Piranha burst cannon",
                                                "range": "18\"",
                                                "a": 4,
                                                "bs": "4+",
                                                "s": 6,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Piranha fusion blaster",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "4+",
                                                "s": 9,
                                                "ap": -4,
                                                "d": "D6",
                                                "keywords": [
                                                        "Melta 4"
                                                ]
                                        },
                                        {
                                                "name": "Seeker missile",
                                                "range": "48\"",
                                                "a": 1,
                                                "bs": "4+",
                                                "s": 14,
                                                "ap": -3,
                                                "d": "D6+1",
                                                "keywords": [
                                                        "One Shot"
                                                ]
                                        },
                                        {
                                                "name": "Twin pulse carbine",
                                                "range": "20\"",
                                                "a": 2,
                                                "bs": "4+",
                                                "s": 5,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Twin-Linked",
                                                        "Assault"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Armoured hull",
                                                "range": "Melee",
                                                "a": 2,
                                                "ws": "5+",
                                                "s": 4,
                                                "ap": 0,
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
                                "faction": [
                                        "For the Greater Good"
                                ],
                                "wargear": [],
                                "other": [
                                        "Drone Harassment Tactics"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Fly",
                                "Piranhas"
                        ],
                        "factionKeywords": [
                                "T’au Empire"
                        ],
                        "compositionText": "1-3 Piranhas Every model is equipped with: Piranha burst cannon; 2 twin pulse carbines; armoured hull."
                },
                {
                        "id": "tau-razorshark-strike-fighter",
                        "name": "Razorshark Strike Fighter",
                        "role": "vehicle",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 170
                                }
                        ],
                        "stats": {
                                "m": "20+\"",
                                "t": 10,
                                "sv": "3+",
                                "w": 12,
                                "ld": "7+",
                                "oc": 0
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Accelerator burst cannon",
                                                "range": "18\"",
                                                "a": 4,
                                                "bs": "4+",
                                                "s": 6,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Missile pod",
                                                "range": "30\"",
                                                "a": 2,
                                                "bs": "4+",
                                                "s": 7,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Quad ion turret – standard",
                                                "range": "30\"",
                                                "a": 8,
                                                "bs": "4+",
                                                "s": 7,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Twin-Linked"
                                                ]
                                        },
                                        {
                                                "name": "Quad ion turret – overcharge",
                                                "range": "30\"",
                                                "a": 8,
                                                "bs": "4+",
                                                "s": 8,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Hazardous",
                                                        "Twin-Linked"
                                                ]
                                        },
                                        {
                                                "name": "Seeker missile",
                                                "range": "48\"",
                                                "a": 1,
                                                "bs": "4+",
                                                "s": 14,
                                                "ap": -3,
                                                "d": "D6+1",
                                                "keywords": [
                                                        "One Shot"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Armoured hull",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "5+",
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
                                        "For the Greater Good"
                                ],
                                "wargear": [],
                                "other": [
                                        "Ground Strike Fighter"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Aircraft",
                                "Fly",
                                "Razorshark Strike Fighter"
                        ],
                        "factionKeywords": [
                                "T’au Empire"
                        ],
                        "compositionText": "1 Razorshark Strike Fighter This model is equipped with: accelerator burst cannon; quad ion turret; 2 seeker missiles; armoured hull. DAMAGED: 1-4 WOUNDS REMAINING While this model has 1-4 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
                },
                {
                        "id": "tau-riptide-battlesuit",
                        "name": "Riptide Battlesuit",
                        "role": "vehicle",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 200
                                }
                        ],
                        "stats": {
                                "m": "10\"",
                                "t": 9,
                                "sv": "2+",
                                "w": 14,
                                "ld": "7+",
                                "oc": 4
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Heavy burst cannon",
                                                "range": "36\"",
                                                "a": 12,
                                                "bs": "4+",
                                                "s": 6,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Ion accelerator – standard",
                                                "range": "72\"",
                                                "a": 6,
                                                "bs": "4+",
                                                "s": 9,
                                                "ap": -2,
                                                "d": 3,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Ion accelerator – supercharge",
                                                "range": "72\"",
                                                "a": 6,
                                                "bs": "4+",
                                                "s": 10,
                                                "ap": -3,
                                                "d": 4,
                                                "keywords": [
                                                        "Hazardous"
                                                ]
                                        },
                                        {
                                                "name": "Twin fusion blaster",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "4+",
                                                "s": 9,
                                                "ap": -4,
                                                "d": "D6",
                                                "keywords": [
                                                        "Melta 2",
                                                        "Twin-Linked"
                                                ]
                                        },
                                        {
                                                "name": "Twin plasma rifle",
                                                "range": "18\"",
                                                "a": 1,
                                                "bs": "4+",
                                                "s": 8,
                                                "ap": -3,
                                                "d": 3,
                                                "keywords": [
                                                        "Twin-Linked"
                                                ]
                                        },
                                        {
                                                "name": "Twin smart missile system",
                                                "range": "30\"",
                                                "a": 3,
                                                "bs": "4+",
                                                "s": 5,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Indirect Fire",
                                                        "Twin-Linked"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Riptide fists",
                                                "range": "Melee",
                                                "a": 6,
                                                "ws": "5+",
                                                "s": 6,
                                                "ap": 0,
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
                                        "For the Greater Good"
                                ],
                                "wargear": [],
                                "other": [
                                        "Battlesuit Support System",
                                        "Nova Charge",
                                        "Weapon Support System"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Walker",
                                "Fly",
                                "Battlesuit",
                                "Riptide"
                        ],
                        "factionKeywords": [
                                "T’au Empire"
                        ],
                        "compositionText": "1 Riptide Battlesuit This model is equipped with: heavy burst cannon; twin plasma rifle; Riptide fists. DAMAGED: 1-4 WOUNDS REMAINING While this model has 1-4 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
                },
                {
                        "id": "tau-sky-ray-gunship",
                        "name": "Sky Ray Gunship",
                        "role": "vehicle",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 150
                                }
                        ],
                        "stats": {
                                "m": "10\"",
                                "t": 10,
                                "sv": "3+",
                                "w": 14,
                                "ld": "7+",
                                "oc": 3
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Accelerator burst cannon",
                                                "range": "18\"",
                                                "a": 4,
                                                "bs": "4+",
                                                "s": 6,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Seeker missile rack",
                                                "range": "48\"",
                                                "a": 3,
                                                "bs": "4+",
                                                "s": 14,
                                                "ap": -3,
                                                "d": "D6+1",
                                                "keywords": [
                                                        "Twin-Linked"
                                                ]
                                        },
                                        {
                                                "name": "Twin pulse carbine",
                                                "range": "20\"",
                                                "a": 2,
                                                "bs": "4+",
                                                "s": 5,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Assault",
                                                        "Twin-Linked"
                                                ]
                                        },
                                        {
                                                "name": "Smart missile system",
                                                "range": "30\"",
                                                "a": 3,
                                                "bs": "4+",
                                                "s": 5,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Indirect Fire"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Armoured hull",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "5+",
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
                                        "For the Greater Good"
                                ],
                                "wargear": [],
                                "other": [
                                        "Velocity Tracker",
                                        "Targeting Array"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Fly",
                                "Markerlight",
                                "Sky Ray Gunship"
                        ],
                        "factionKeywords": [
                                "T’au Empire"
                        ],
                        "compositionText": "1 Sky Ray Gunship This model is equipped with: 1 seeker missile rack; 2 twin pulse carbines; armoured hull. DAMAGED: 1-5 WOUNDS REMAINING While this model has 1-5 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
                },
                {
                        "id": "tau-stealth-battlesuits",
                        "name": "Stealth Battlesuits",
                        "role": "infantry",
                        "points": [
                                {
                                        "models": 5,
                                        "cost": 100
                                }
                        ],
                        "stats": {
                                "m": "8\"",
                                "t": 4,
                                "sv": "3+",
                                "w": 2,
                                "ld": "7+",
                                "oc": 1
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Burst cannon",
                                                "range": "18\"",
                                                "a": 4,
                                                "bs": "4+",
                                                "s": 5,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Fusion blaster",
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
                                                "name": "Pulse pistol",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "4+",
                                                "s": 5,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Pistol"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Battlesuit fists",
                                                "range": "Melee",
                                                "a": 2,
                                                "ws": "5+",
                                                "s": 4,
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
                                        "For the Greater Good"
                                ],
                                "wargear": [],
                                "other": [
                                        "Forward Observers",
                                        "Homing Beacon",
                                        "Designer’s Note"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Fly",
                                "Battlesuit",
                                "Grenades",
                                "Markerlight",
                                "Stealth"
                        ],
                        "factionKeywords": [
                                "T’au Empire"
                        ],
                        "compositionText": "1 Stealth Shas’vre 4 Stealth Shas’ui Every model is equipped with: burst cannon; battlesuit fists."
                },
                {
                        "id": "tau-stormsurge",
                        "name": "Stormsurge",
                        "role": "vehicle",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 360
                                }
                        ],
                        "stats": {
                                "m": "8\"",
                                "t": 11,
                                "sv": "2+",
                                "w": 20,
                                "ld": "7+",
                                "oc": 6
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Cluster rocket system",
                                                "range": "48\"",
                                                "a": "4D6",
                                                "bs": "4+",
                                                "s": 5,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Blast",
                                                        "Heavy"
                                                ]
                                        },
                                        {
                                                "name": "Destroyer missiles",
                                                "range": "72\"",
                                                "a": 1,
                                                "bs": "4+",
                                                "s": 16,
                                                "ap": -4,
                                                "d": "D6+2",
                                                "keywords": [
                                                        "Heavy"
                                                ]
                                        },
                                        {
                                                "name": "Pulse blast cannon – focused",
                                                "range": "24\"",
                                                "a": 2,
                                                "bs": "4+",
                                                "s": 24,
                                                "ap": -6,
                                                "d": 12,
                                                "keywords": [
                                                        "Heavy"
                                                ]
                                        },
                                        {
                                                "name": "Pulse blast cannon – dispersed",
                                                "range": "48\"",
                                                "a": 6,
                                                "bs": "4+",
                                                "s": 10,
                                                "ap": -2,
                                                "d": 4,
                                                "keywords": [
                                                        "Heavy"
                                                ]
                                        },
                                        {
                                                "name": "Pulse driver cannon",
                                                "range": "72\"",
                                                "a": "D6+3",
                                                "bs": "4+",
                                                "s": 12,
                                                "ap": -3,
                                                "d": 3,
                                                "keywords": [
                                                        "Blast",
                                                        "Heavy"
                                                ]
                                        },
                                        {
                                                "name": "Twin airbursting fragmentation projector",
                                                "range": "24\"",
                                                "a": "D6",
                                                "bs": "4+",
                                                "s": 3,
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
                                                "name": "Twin burst cannon",
                                                "range": "18\"",
                                                "a": 4,
                                                "bs": "4+",
                                                "s": 5,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Heavy",
                                                        "Twin-Linked"
                                                ]
                                        },
                                        {
                                                "name": "Twin smart missile system",
                                                "range": "30\"",
                                                "a": 3,
                                                "bs": "4+",
                                                "s": 5,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Heavy",
                                                        "Indirect Fire",
                                                        "Twin-Linked"
                                                ]
                                        },
                                        {
                                                "name": "Twin T’au flamer",
                                                "range": "12\"",
                                                "a": "D6",
                                                "bs": "N/A",
                                                "s": 4,
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
                                                "name": "Thunderous footfalls",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "5+",
                                                "s": 8,
                                                "ap": -1,
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
                                        "For the Greater Good"
                                ],
                                "wargear": [],
                                "other": [
                                        "Heavy Walker",
                                        "Support System",
                                        "Titan-killer"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Walker",
                                "Titanic",
                                "Towering",
                                "Stormsurge"
                        ],
                        "factionKeywords": [
                                "T’au Empire"
                        ],
                        "compositionText": "1 Stormsurge This model is equipped with: cluster rocket system; destroyer missiles; pulse driver cannon; 2 twin smart missile system; twin T’au flamer; thunderous footfalls. DAMAGED: 1-5 WOUNDS REMAINING While this model has 1-5 wounds remaining, subtract 3 from this model’s Objective Control characteristic, and each time this model makes an attack, subtract 1 from the Hit roll."
                },
                {
                        "id": "tau-sun-shark-bomber",
                        "name": "Sun Shark Bomber",
                        "role": "vehicle",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 160
                                }
                        ],
                        "stats": {
                                "m": "20+\"",
                                "t": 9,
                                "sv": "3+",
                                "w": 12,
                                "ld": "7+",
                                "oc": 0
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Missile pod",
                                                "range": "30\"",
                                                "a": 2,
                                                "bs": "4+",
                                                "s": 7,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Twin missile pod",
                                                "range": "30\"",
                                                "a": 2,
                                                "bs": "4+",
                                                "s": 7,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Twin-Linked"
                                                ]
                                        },
                                        {
                                                "name": "Seeker missile",
                                                "range": "48\"",
                                                "a": 1,
                                                "bs": "4+",
                                                "s": 14,
                                                "ap": -3,
                                                "d": "D6+1",
                                                "keywords": [
                                                        "One Shot"
                                                ]
                                        },
                                        {
                                                "name": "Twin ion rifle – standard",
                                                "range": "30\"",
                                                "a": 3,
                                                "bs": "4+",
                                                "s": 7,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Twin-Linked"
                                                ]
                                        },
                                        {
                                                "name": "Twin ion rifle – overcharge",
                                                "range": "30\"",
                                                "a": 3,
                                                "bs": "4+",
                                                "s": 8,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Hazardous",
                                                        "Twin-Linked"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Armoured hull",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "5+",
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
                                        "For the Greater Good"
                                ],
                                "wargear": [],
                                "other": [
                                        "Pulse Bombs"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Aircraft",
                                "Fly",
                                "Sun Shark Bomber"
                        ],
                        "factionKeywords": [
                                "T’au Empire"
                        ],
                        "compositionText": "1 Sun Shark Bomber This model is equipped with: missile pod; 2 seeker missiles; 2 twin ion rifles; armoured hull. DAMAGED: 1-4 WOUNDS REMAINING While this model has 1-4 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
                },
                {
                        "id": "tau-vespid-stingwings",
                        "name": "Vespid Stingwings",
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
                                "t": 4,
                                "sv": "4+",
                                "w": 1,
                                "ld": "7+",
                                "oc": 1
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Neutron blaster",
                                                "range": "18\"",
                                                "a": 2,
                                                "bs": "4+",
                                                "s": 5,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Assault"
                                                ]
                                        },
                                        {
                                                "name": "Neutron grenade launcher",
                                                "range": "18\"",
                                                "a": "D6",
                                                "bs": "4+",
                                                "s": 4,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Anti-Infantry 3+",
                                                        "Blast"
                                                ]
                                        },
                                        {
                                                "name": "Neutron rail rifle",
                                                "range": "30\"",
                                                "a": 1,
                                                "bs": "4+",
                                                "s": 10,
                                                "ap": -4,
                                                "d": 3,
                                                "keywords": [
                                                        "Devastating Wounds"
                                                ]
                                        },
                                        {
                                                "name": "T’au flamer",
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
                                                "name": "Stingwing claws",
                                                "range": "Melee",
                                                "a": 1,
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
                                        "Deep Strike"
                                ],
                                "faction": [],
                                "wargear": [],
                                "other": [
                                        "Airborne Agility",
                                        "Oversight Drone",
                                        "Designer’s Note"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Fly",
                                "Vespid Stingwings"
                        ],
                        "factionKeywords": [
                                "T’au Empire"
                        ],
                        "compositionText": "1 Vespid Strain Leader 4-9 Vespid Stingwings Every model is equipped with: neutron blaster; stingwing claws."
                }
        ]
    };

    window.W40K_FACTIONS = window.W40K_FACTIONS || { "10th": [], "11th": [] };
    window.W40K_FACTIONS["10th"].push(tau);
})();
