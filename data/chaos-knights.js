/**
 * W40K Army Builder — Chaos Knights (10th Edition)
 *
 * Datasheets from Codex: Chaos Knights. Names-only abilities/rules;
 * stats, weapons, points and keywords are factual game data.
 * Legends and Forge World datasheets are intentionally omitted.
 *
 * Self-registers into window.W40K_FACTIONS, assembled by data/factions.js.
 */
(function () {
    "use strict";

    const ck = {
        id: "chaos-knights",
        name: "Chaos Knights",
        icon: "🐲",
        allegiance: "Chaos",
        flavour: "",
        armyRules: [
            { name: "Harbingers of Dread", flavour: "Where Chaos Knights tread, the skies grow unnaturally dark and the power of the warp permeates the battlefield.", text: "If your Army Faction is CHAOS KNIGHTS, each unit from your army with this ability gains Dread abilities, depending which are active for your army (see below). The Deathly Terror ability is active for your army from the start of the battle. In addition, at the start of the first, third and fifth battle rounds, you can either select one of the other Dread abilities or randomly select two Dread abilities to apply by rolling two D6 and applying the results rolled, from those numbered 1-6.\n\nAny Dread abilities that have been selected are active until the end of the battle. You cannot select the same Dread ability more than once, and any duplicated Dread abilities (as a result of randomly selecting them) have no additional effect.\n\nDeathly Terror (Aura): While an enemy unit is within 9\" of this model, worsen the Leadership characteristic of models in that unit by 1.\n\nDespair (Aura): While an enemy unit is within 9\" of this model, worsen the Leadership characteristic of models in that unit by 1. This is cumulative with the Deathly Terror ability (see above).\n\nDoom: Each time this model makes an attack, if the target of that attack is Battle-shocked, add 1 to the Wound roll.\n\nDarkness: Each time an attack is made against this model, if the attacking unit is Battle-shocked or more than 18\" away, subtract 1 from the Hit roll.\n\nDismay (Aura): In the Battle-shock step of your opponent's Command phase, for each enemy unit that is below its Starting Strength and within 9\" of this model, that enemy unit must take a Battle-shock test.\n\nDelirium (Aura): While an enemy unit that is Below Half-strength is within 9\" of this model, each time that unit fails a Battle-shock test, it suffers D3 mortal wounds.\n\nDominion: Add 3\" to the range of this model's Aura abilities." },
            { name: "Dreadblades", flavour: "Dreadblades stalk the galaxy, carving a path of destruction alongside other forces of Chaos.", text: "If every model in your army has the CHAOS keyword, you can include either 1 TITANIC CHAOS KNIGHTS model or up to 3 WAR DOG models in your army, even if they do not have the Faction keyword you selected in the Select Army Faction step. None of these models can be your WARLORD, and they cannot be given Enhancements." },
            { name: "Super-heavy Walker", flavour: "", text: "Each time a model with this ability makes a Normal, Advance or Fall Back move, it can move through models (excluding TITANIC models) and sections of terrain features that are 4\" or less in height. When doing so:\n- It can move within Engagement Range of enemy models, but cannot end that move within Engagement Range of them.\n- It can also move through sections of terrain features that are more than 4\" in height, but if it does, after it has moved, roll one D6: on a 1, that model is Battle-shocked." }
        ],
        detachments: [
            {
                name: "Traitoris Lance",
                flavour: "To fight amidst a Traitoris Lance is to epitomise what it means to be a Chaos Knight. Here is the dark mirror of nobility wrought in adamantine and steel, an army of sinister war giants driven ever onward by hate, cruelty and the tyrannical need to crush all beneath their mighty tread. Nightmarish storm clouds spread above these Chaos Knights as they stride into battle, drowning their quailing foes in creeping shadow and filling their hearts with dread. Empyric lightning leaps through the heavens, while the grotesque avian entities known as Pterrorshades swoop above the advancing Knights like tattered rags or roost malevolently upon their baroque hulls. As the Traitoris Lance bears down upon its victims, the Fallen Nobles lengthen their steeds' strides and let fly with massive cannons, laser blasters and racks of shrieking missiles. By the time their charge thunders home, the crumbling enemy lines can do naught but shatter before the unstoppable onslaught of these diabolical engines of war.",
                rule: { name: "Paragons of Terror", flavour: "Steeped in the dark powers of the warp, bred into bloodlines who make a tradition of cruelty and a virtue of malice, these merciless warriors delight in spreading fear and dismay.", text: "At the start of the first battle round, after selecting one or more Dread abilities to be active for your army, you can select one additional Dread ability to be active for your army (this additional Dread ability cannot be randomly selected).", restrictions: "" },
                enhancements: [
                    { name: "Nightmare's Master", cost: 20, restriction: "CHAOS KNIGHTS model only.", text: "The mere sight of this warrior and their steed upon the battlefield, even the rumour of their coming, is enough to put the foe to flight.\n\nAt the start of the Fight phase, each enemy unit within Engagement Range of the bearer must take a Battle-shock test." },
                    { name: "Tyrant's Shadow", cost: 25, restriction: "CHAOS KNIGHTS model only.", text: "Once this despotic warlord lays claim to territory, their warp-infused will taints the very land itself and resists those who seek to defy them.\n\nAt the end of your Command phase, select one objective marker the bearer is within range of and that you control. That objective marker remains under your control until your opponent's Level of Control over that objective marker is greater than yours at the end of a phase. In addition, until you lose control of that objective marker, it has the Deathly Terror ability as if it were a CHAOS KNIGHTS model from your army." },
                    { name: "Malevolent Heraldry", cost: 30, restriction: "CHAOS KNIGHTS model only.", text: "Inscribed by Idolators schooled in dark arts, these unholy blazons burn themselves into the gaze of the foe and trigger nausea, disorientation and stark, unreasoning terror.\n\nEach time you roll dice to randomly select which Dread abilities are active for your army, if the bearer is on the battlefield, you can re-roll one or both results rolled." },
                    { name: "Veil of Medrengard", cost: 35, restriction: "CHAOS KNIGHTS model only.", text: "Said to have been fashioned upon Perturabo's own daemon world, this baroque device projects an energy barrier of greater power than a standard ion shield.\n\nThe bearer has a 4+ invulnerable save against ranged attacks, and a 5+ invulnerable save against melee attacks." },
                ],
                stratagems: [
                    { name: "Pterrorshades", cp: 1, type: "Wargear", when: "Any phase, just after an enemy unit fails a Battle-shock test.", target: "One CHAOS KNIGHTS unit from your army that is within 12\" of that enemy unit.", effect: "Roll six D6: for each 4+, that enemy unit suffers 1 mortal wound and one model in your unit regains up to 1 lost wound.", restrictions: "You can only use this Stratagem once per battle round." },
                    { name: "Conquerors Without Mercy", cp: 1, type: "Battle Tactic", when: "Fight phase.", target: "One CHAOS KNIGHTS model from your army that made a Charge move this turn and has not been selected to fight this phase.", effect: "Until the end of the phase, improve the Armour Penetration characteristic of melee weapons equipped by your model by 1. After your model has finished making its attacks this phase, if it destroyed one or more enemy units this phase, each enemy unit within 6\" of your model must take a Battle-shock test.", restrictions: "" },
                    { name: "Disdain for the Weak", cp: 1, type: "Strategic Ploy", when: "Fight phase, just after an enemy unit has selected its targets.", target: "One CHAOS KNIGHTS unit from your army that was selected as the target of one or more of the attacking unit's attacks.", effect: "Until the end of the phase, models in your unit have the Feel No Pain 6+ ability, and the Feel No Pain 5+ ability against attacks made by Battle-shocked models.", restrictions: "" },
                    { name: "A Long Leash", cp: 1, type: "Strategic Ploy", when: "Your Command phase.", target: "One ABHORRENT unit from your army and up to two friendly WAR DOG units.", effect: "Until the start of your next Command phase, those WAR DOG units are treated as being within range of any Aura abilities your ABHORRENT unit has.", restrictions: "" },
                    { name: "Imperious Advance", cp: 1, type: "Epic Deed", when: "Your Movement phase or your Charge phase.", target: "Up to two WAR DOG units from your army or one TITANIC CHAOS KNIGHTS unit from your army.", effect: "Until the end of the phase, each time a model in one of your units makes a Normal, Advance, Fall Back or Charge move, it can move through models and terrain features. When doing so, it can move within Engagement Range of such models but, unless it made a Charge move, cannot end that move within Engagement Range of them, and any Desperate Escape test is automatically passed (the Super-heavy Walker ability does not apply while using this Stratagem).", restrictions: "" },
                    { name: "Storm of Darkness", cp: 1, type: "Strategic Ploy", when: "Your opponent's Shooting phase, just after an enemy unit has selected its targets.", target: "One CHAOS KNIGHTS unit from your army that was selected as the target of one or more of the attacking unit's attacks.", effect: "Until the end of the phase, models in your unit have the Stealth ability, and each time an attack targets your unit, models in it have the Benefit of Cover against that attack.", restrictions: "" },
                ]
            },
            {
                name: "Infernal Lance",
                flavour: "Whether sworn to a Traitor Titan Legion, in thrall to the cyborg priests of the Dark Mechanicum, pledged to the Ruinous Powers or corrupted over millennia, the Knights of Infernal Lances are twisted by the warp and swollen with unholy technologies. Each Knight suit is a hideous blend of the mechanical and the supernatural. Some bear the blessings of a Dark God of Chaos, which renders them freakish with mutation yet enhances their might or resilience in battle. Others mount weapon systems of ancient or diabolical provenance, serve as the possessed metal body of a malevolent daemon or exhibit strange abilities conferred by the experimentations of dark magi. When such monstrous war engines stalk into battle behind the banner of one strong-willed enough to master them, the Infernal Lances they form sweep aside any foe. Those not obliterated or reduced to gruesome spawn by the Knights' warp-tainted weapons are driven mad and sent fleeing in mindless terror by the horrors they witness.",
                rule: { name: "Malefic Surge", flavour: "Calling upon heretical - often supernatural - powers, these Knights are infused with strange and terrible might.", text: "In your Command phase, one or more CHAOS KNIGHTS units from your army can make a Malefic Surge. Each one that does must first take a Leadership test; if that test is failed, that unit suffers D3 mortal wounds. Then, until the start of your next Command phase, that unit is Empowered. While a unit is Empowered it can use one of the Malefic Surge abilities below. Once that unit has used a Malefic Surge ability, it is no longer Empowered.\n- Unholy Hunger: When a model in this unit makes a Normal, Advance or Fall Back move, until the end of the phase, add 3\" to its Move characteristic.\n- Diabolic Power: When this unit is selected to shoot or fight, select either the [Lethal Hits] or [Sustained Hits 1] ability. Until the end of the phase, weapons equipped by models in this unit have the selected ability.\n- Unnatural Fortitude: When this unit is selected as the target of an attack, until the end of the phase, select one of the following: Models in this unit have a 5+ invulnerable save; or models in this unit have the Feel No Pain 6+ ability.\n\nDesigner's Note: We recommend placing a token next to Chaos Knights models that are Empowered, removing it once they have used a Malefic Surge ability, and removing all unused tokens at the start of your Command phase.", restrictions: "" },
                enhancements: [
                    { name: "Knight Diabolus", cost: 25, restriction: "CHAOS KNIGHTS model only.", text: "Whether through duelling monstrous foes or thanks to unnatural enhancements and boons, this Fallen Noble and their steed have become powerful indeed.\n\nImprove the Weapon Skill characteristic of the bearer's melee weapons by 1. While the bearer is using the Diabolic Power ability, its melee weapons have the [Lance] ability." },
                    { name: "Blasphemous Engine", cost: 35, restriction: "CHAOS KNIGHTS model only.", text: "In rituals that took centuries to conduct, Idolators and dark priests have bound a greater daemon within the reactor of this Chaos Knight, allowing the war machine to syphon the roiling power of the caged entity.\n\nAdd 2 to the bearer's Wounds characteristic. Each time the bearer's unit makes a Malefic Surge, you can re-roll the Leadership test taken to see if it suffers any mortal wounds." },
                    { name: "Fleshmetal Fusion", cost: 35, restriction: "CHAOS KNIGHTS model only.", text: "This Knight is a terrifying blend of daemonic flesh and warp-hardened machine, its pilot unable to leave their Throne until death - or something darker - takes them.\n\nAdd 1 to the bearer's Toughness characteristic. While the bearer is using the Unnatural Fortitude ability, each time an attack with a Damage characteristic of 1 is allocated to the bearer, add 1 to any armour saving throw made against that attack." },
                    { name: "Bestial Aspect", cost: 20, restriction: "CHAOS KNIGHTS model only.", text: "The machine spirit of this Knight suit has become so ferocious and blood-hungry that it now moves and hunts like a monstrous beast.\n\nThe bearer's ranged weapons have the [Assault] ability. While the bearer is using the Unholy Hunger ability, it can ignore any or all modifiers to its Move characteristic and/or to Advance rolls made for its unit." },
                ],
                stratagems: [
                    { name: "Profane Symbiosis", cp: 1, type: "Battle Tactic", when: "End of any phase.", target: "One CHAOS KNIGHTS unit from your army that is not Empowered.", effect: "Your unit makes a Malefic Surge.", restrictions: "You cannot select the same unit as the target of this Stratagem more than once per battle round." },
                    { name: "Hellforged Construction", cp: 1, type: "Battle Tactic", when: "Fight phase, just after an enemy unit has selected its targets.", target: "One CHAOS KNIGHTS unit from your army that was selected as the target of one or more of the attacking unit's attacks.", effect: "Until the attacking unit has finished making its attacks, each time an attack targets your unit, worsen the Armour Penetration characteristic of that attack by 1.", restrictions: "" },
                    { name: "Corrupting Taint", cp: 1, type: "Epic Deed", when: "Your Command phase, just after a CHAOS KNIGHTS CHARACTER unit from your army makes a Malefic Surge.", target: "That CHAOS KNIGHTS CHARACTER unit.", effect: "Select one objective marker your unit is within range of that you control. That objective marker remains under your control until your opponent's Level of Control over that objective marker is greater than yours at the end of a phase.", restrictions: "" },
                    { name: "Unleash Balefire", cp: 1, type: "Wargear", when: "Your Shooting phase.", target: "One CHAOS KNIGHTS unit from your army that has not been selected to shoot this phase.", effect: "After your unit has shot, select one enemy unit hit by one or more of those attacks. That enemy unit must take a Battle-shock test; if the test is failed, until the end of your opponent's next turn, it is aflame. While a unit is aflame, subtract 2\" from its Move characteristic and subtract 2 from Charge rolls made for it.", restrictions: "" },
                    { name: "Warp Vision", cp: 1, type: "Wargear", when: "Your Shooting phase.", target: "One CHAOS KNIGHTS unit from your army that has not been selected to shoot this phase.", effect: "Until the end of the phase, ranged weapons equipped by models in your unit have the [Ignores Cover] ability.", restrictions: "" },
                    { name: "Diabolic Bulwark", cp: 1, type: "Wargear", when: "Your opponent's Shooting phase, just after an enemy unit has selected its targets.", target: "One CHAOS KNIGHTS unit from your army that was selected as the target of one or more of the attacking unit's attacks.", effect: "Until the end of the phase, models in your unit have a 4+ invulnerable save.", restrictions: "" },
                ]
            },
            {
                name: "Lords of Dread",
                flavour: "None are safe when the long shadows of the Lords of Dread stretch across the battlefield. Some Fallen Nobles are so toweringly arrogant, so twisted in mind and soul or so enamoured of personal power and wealth that they fight only for themselves. Those not slain by jealous rivals or laid low by foes instead earn notoriety and become the dark heroes in their tales of legend. They earn supernatural boons for their mightiest deeds. They recover ancient and devastating artefacts of war or gather coteries of followers who trail in their wake and hope for reflected glory. Such lords amongst the Chaos Knights may seek one another out and fight side by side. Some do this to test their mettle and prove themselves the greatest. Others find twisted kinship in the company of other Fallen Nobles as egocentric as themselves, forming Dreadblade lances or staging a hostile takeover of a dread household before supplanting its original rulers with a new and especially tyrannical court of monsters.",
                rule: { name: "Tyrannical Court", flavour: "Every one of these egomaniacal warriors seeks to claim all the battlefield glory for themselves, at any cost.", text: "Improve the Objective Control characteristic of CHAOS KNIGHTS CHARACTER models from your army by 2. In addition, once per battle round, if your WARLORD is on the battlefield, you can use the Claimed for the Dark Gods Stratagem for 0CP.", restrictions: "" },
                enhancements: [
                    { name: "Throne Mechanicum of Skulls", cost: 25, restriction: "CHAOS KNIGHTS model only.", text: "Flowing from this brazen Throne, an all-consuming need for murder grips the pilot and never lets go.\n\nYou can re-roll Charge rolls made for the bearer's unit. In addition, once per battle, in your Charge phase, the bearer can use this Enhancement. If it does, until the end of the phase, the bearer's unit is eligible to declare a charge in a turn in which it Advanced." },
                    { name: "Blade of Celerity", cost: 35, restriction: "CHAOS KNIGHTS model only.", text: "Inlaid with esoteric circuitry, this relic sword is sheathed within the mechanisms of the pilot's Throne where it imbues the Knight suit with flowing swiftness.\n\nThe bearer's ranged weapons have the [Assault] ability. In addition, once per battle, in the Fight phase, the bearer can use this Enhancement. If it does, until the end of the phase, models in the bearer's unit have the Fights First ability." },
                    { name: "Warp-borne Stalker", cost: 25, restriction: "CHAOS KNIGHTS model only.", text: "Daemonic whispers guide this Knight's pilot through the empyric tempests, straight into battle.\n\nThe bearer has the Deep Strike ability. In addition, once per battle, at the end of your opponent's turn, if the bearer is not within Engagement Range of one or more enemy units, you can remove it from the battlefield and place it into Strategic Reserves." },
                    { name: "Putrid Carapace", cost: 30, restriction: "CHAOS KNIGHTS model only.", text: "Blessed by Nurgle, the Chaos God of plague and despair, the hide of this Knight suit is thickened with steadily regenerating layers of rust and rotting blubber.\n\nThe bearer has a Save characteristic of 2+. In addition, once per battle, at the start of either player's Command phase, the bearer can use this Enhancement. If it does, the bearer regains up to D6 lost wounds." },
                    { name: "Mirror of Fates", cost: 30, restriction: "CHAOS KNIGHTS model only.", text: "Hammered into the flesh of a Fallen Noble's forehead and allowed to take root, this warp crystal allows them to predict their enemy's plans and exploit them.\n\nOnce per battle round, you can target the bearer's unit with the Command Re-roll Stratagem for 0CP, and can do so even if another unit from your army has already been targeted by that Stratagem this phase. In addition, you gain Lord of Deceit ability:\n\nLord of Deceit (Aura): Each time your opponent targets a unit from their army with a Stratagem, if that unit is within 12\" of this model, increase the cost of that use of that Stratagem by 1CP." },
                    { name: "Blessing of the Dark Master", cost: 20, restriction: "CHAOS KNIGHTS model only.", text: "This pilot has won the favour of a sinister patron, granting them a measure of mysterious protection.\n\nThe bearer has the Stealth ability. In addition, once per battle, after you make a saving throw for the bearer, you can change the Damage characteristic of that attack to 0." },
                ],
                stratagems: [
                    { name: "Claimed for the Dark Gods", cp: 1, type: "Epic Deed", when: "Start of your Command phase.", target: "One CHAOS KNIGHTS CHARACTER unit from your army that is within range of one or more objective markers you control.", effect: "Select one of those objective markers. That objective marker remains under your control, with a Level of Control of 5 (unless it would otherwise be higher), until your opponent's Level of Control over that objective marker is greater than yours at the end of a phase.", restrictions: "" },
                    { name: "Spiteful Demise", cp: 1, type: "Epic Deed", when: "Any phase, just after a CHAOS KNIGHTS CHARACTER unit from your army is destroyed.", target: "That CHAOS KNIGHTS CHARACTER unit. You can use this Stratagem on that unit even though it was just destroyed.", effect: "When rolling to determine whether mortal wounds are inflicted by your unit's Deadly Demise ability, that model's Deadly Demise ability inflicts mortal wounds on a D6 roll of a 4+ instead of on a 6.", restrictions: "" },
                    { name: "Runes of Disdain", cp: 2, type: "Epic Deed", when: "Your opponent's Shooting phase or the Fight phase, just after an enemy unit has selected its targets.", target: "One CHAOS KNIGHTS CHARACTER unit from your army that was selected as the target of one or more of the attacking unit's attacks.", effect: "Until the end of the phase, each time an attack is allocated to a model in your unit, subtract 1 from the Damage characteristic of that attack.", restrictions: "" },
                    { name: "Titanic Duel", cp: 1, type: "Epic Deed", when: "Your Shooting phase or the Fight phase.", target: "One CHAOS KNIGHTS CHARACTER unit from your army that has not been selected to shoot or fight this phase.", effect: "Select one enemy MONSTER or VEHICLE unit. Until the end of the phase, each time a model in your unit makes an attack that targets that enemy unit, re-roll a Hit roll of 1 and re-roll a Wound roll of 1. Each time a model in your unit makes an attack that targets that enemy unit, if that enemy unit is TITANIC, you can re-roll the Hit roll and you can re-roll the Wound roll instead.", restrictions: "" },
                    { name: "Trophy Hunter", cp: 1, type: "Epic Deed", when: "Fight phase, just before a CHAOS KNIGHTS CHARACTER unit from your army consolidates.", target: "That CHAOS KNIGHTS CHARACTER unit.", effect: "Until the end of the phase, each time your unit Consolidates, models in it can move an additional 3\" as long as your unit can end that move within Engagement Range of one or more enemy units.", restrictions: "" },
                    { name: "Crushed Like Vermin", cp: 1, type: "Epic Deed", when: "Your Movement phase, just after a CHAOS KNIGHTS CHARACTER unit from your army ends a Normal move.", target: "That CHAOS KNIGHTS CHARACTER unit.", effect: "Select one enemy unit (excluding MONSTERS and VEHICLES) that your unit moved over during that move and roll six D6: for each 4+, that enemy unit suffers 1 mortal wound. If one or more models are destroyed as a result of this Stratagem, that enemy unit must take a Battle-shock test.", restrictions: "" },
                ]
            },
            {
                name: "Helhunt Lance",
                flavour: "When the Chaos Knight houses ride out on the hunt, their prey endure a living nightmare. Eye lenses blaze in the gloom. Ion shields flicker like corpselight. The howl of brazen vox-horns announces the coming of the hunt. War Dogs lead the charge, loping beasts plunging into the densest terrain to flush warriors-turned-quarry into the open. Behind them come their masters, diabolical scions in monstrous steeds. They sneer in contempt, rune-locking choice prey upon their Knights' targeters before picking them off with the clinical precision of master hunters. All the while the War Dog packs continue to harry the enemy, snarling target triangulation data to their masters through neural uplinks, redoubling their efforts with every goading lash. Soon enough, the enemy are reduced to heaped corpses and burning wrecks. Pausing only long enough to select the finest trophies to be lashed and chained to their Knight suits' hulls, the hunt then moves on in search of new prey.",
                rule: { name: "Masters of the Pack", flavour: "By bending their tyrannical will upon their War Dog underlings, the masters of the hunt goad them to provide a constant stream of sensor data. This influx of supplementary targeting, prey-seeking and omnisensory analysis enhances the scions' ability to hunt alongside their snarling ironclad hounds.", text: "If a TITANIC CHAOS KNIGHTS unit from your army has an Aura ability that affects friendly WAR DOG units, while two or more friendly WAR DOG models are within range of that TITANIC CHAOS KNIGHTS unit's Aura ability, that TITANIC CHAOS KNIGHTS unit is affected by that Aura ability as well.\n\nExample: Two friendly WAR DOG models are within 9\" of a KNIGHT DESECRATOR when it is selected to shoot. As a result, the KNIGHT DESECRATOR's Taskmaster ability also affects itself, even though it does not have the WAR DOG keyword, so each time that KNIGHT DESECRATOR makes a ranged attack, Hit rolls of 1 are re-rolled.", restrictions: "" },
                enhancements: [
                    { name: "Aspect of the Beast", cost: 30, restriction: "CHAOS KNIGHTS model only.", text: "Something predatory and monstrous from the depths of the Warp has possessed this Knight suit. Its terrifying presence spreads like a pall.\n\nAt the start of your Command phase, select one Dread ability to be active for the bearer until the start of your next Command phase, in addition to the Dread abilities active for your army." },
                    { name: "Hunter's Helm", cost: 15, restriction: "CHAOS KNIGHTS model only.", text: "This infernal faceplate was forged by the cannibalistic Dark Magi of Ghanarkh. Affixed to a Chaos Knight, it infuses the steed with a carnivore's ferocious hunger.\n\nYou can re-roll Advance and Charge rolls made for the bearer's unit." },
                    { name: "Octagram of Conjuration", cost: 40, restriction: "KNIGHT ABOMINANT model only.", text: "This Knight suit's cockpit incorporates a summoning octagram that drags warp gheists into reality and sends them screaming out to bedevil rune-marked prey.\n\nThe bearer has the following ability:\n\nOctagram of Conjuration (Aura): While a friendly WAR DOG model is within 9\" of this model, after that WAR DOG model has shot, you can select one enemy unit hit by one or more of those attacks. That enemy unit must take a Battle-shock test." },
                    { name: "Throne Tyrannicus", cost: 25, restriction: "TITANIC CHAOS KNIGHTS model only.", text: "So dominant is the psychoneural signature of this Throne Mechanicum that it dominates even other scions and their steeds as they rule over War Dogs.\n\nIn your Command phase, select one other CHAOS KNIGHTS CHARACTER model within 9\" of the bearer. If the bearer has one or more Aura abilities that affect friendly WAR DOG units, until the start of your next Command phase, the selected CHAOS KNIGHTS CHARACTER model is affected by those Aura abilities as well." },
                ],
                stratagems: [
                    { name: "Feral Arrogance", cp: 1, type: "Strategic Ploy", when: "Any phase, just after a mortal wound is allocated to a CHAOS KNIGHTS unit from your army.", target: "That CHAOS KNIGHTS unit.", effect: "Until the end of the phase, models in your unit have the Feel No Pain 5+ ability against mortal wounds.", restrictions: "" },
                    { name: "Merciless Fusillade", cp: 1, type: "Battle Tactic", when: "Start of your Shooting phase or the start of the Fight phase.", target: "One TITANIC CHAOS KNIGHTS unit from your army, and up to two friendly WAR DOG units, that have not been selected to shoot or fight this phase.", effect: "Select one enemy unit that is an eligible target for each of those CHAOS KNIGHTS units. Until the end of the phase, each time one of those Chaos Knights units is selected to shoot or fight, if that enemy unit is an eligible target, you can only select that enemy unit as the target for all of those attacks and those attacks have the [Sustained Hits 1] ability.", restrictions: "" },
                    { name: "Beasthide Manifestation", cp: 1, type: "Battle Tactic", when: "Your opponent's Shooting phase or the Fight phase, just after an enemy unit has selected its targets.", target: "One CHAOS KNIGHTS unit from your army that was selected as the target of one or more of the attacking unit's attacks.", effect: "Until the attacking unit has finished making its attacks, each time an attack targets your unit, worsen the Armour Penetration characteristic of that attack by 1.", restrictions: "" },
                    { name: "Flush the Quarry", cp: 1, type: "Battle Tactic", when: "Start of your Movement phase.", target: "One TITANIC CHAOS KNIGHTS unit from your army and up to three friendly WAR DOG units within 6\" of that Titanic Chaos Knights unit.", effect: "Until the end of the phase, each time one of those War Dog units makes a Normal, Advance or Fall Back move, its models can move through models and terrain features. When doing so, they can move within Engagement Range of such models but cannot end that move within Engagement Range of them, and any Desperate Escape test is automatically passed.", restrictions: "" },
                    { name: "Contemptuous Volleys", cp: 1, type: "Strategic Ploy", when: "Your Movement phase, just after a CHAOS KNIGHTS unit from your army Falls Back.", target: "That CHAOS KNIGHTS unit.", effect: "Until the end of the turn, your unit is eligible to shoot and declare a charge in a turn in which it Fell Back.", restrictions: "" },
                    { name: "Goaded Beast", cp: 1, type: "Strategic Ploy", when: "Your opponent's Shooting phase, just after an enemy unit has shot.", target: "One CHAOS KNIGHTS unit from your army that lost one or more wounds as a result of those attacks.", effect: "Your unit can make a Surge move. To do so, roll one D6: models in your unit move a number of inches up to the result, but your unit must end that move as close as possible to the closest enemy unit (excluding AIRCRAFT). When doing so, those models can be moved within Engagement Range of that enemy unit.", restrictions: "" },
                ]
            },
            {
                name: "Houndpack Lance",
                flavour: "Swift, comparatively numerous, yet each still a towering war engine in its own right, when War Dogs gather for the hunt they bring terrifying might to bear. Sometimes this power is leashed to the mental domination of masters piloting Abhorrent-class Knights. Such formations lope out like some feudal world hunting party, the larger Knights inhabiting the roles of bloodthirsty nobles while the War Dogs serve as their baying hounds. Other dread households prefer to give their War Dogs more freedom. They dispatch formations of these light and fast Knight suits into the wilds of the war zone to raid and cause mayhem at will, choking off supply lines and tearing apart targets of opportunity until the foe fears to leave their strongholds. Then there are the Unleashed. These masterless packs of War Dogs have broken their former masters' control and now hunt and slaughter in pursuit of their own glories. Over time, these packs become ever more feral, following the direction of their alphas and dragging down prey like murderous super-predators.",
                rule: { name: "Marked Prey", flavour: "Once War Dogs have singled out a victim, they target it relentlessly until it is dragged down and torn apart.", text: "At the start of your Command phase, select one unit from your opponent's army. Until the start of your next Command phase, each time a WAR DOG model from your army makes an attack that targets that enemy unit, if that unit is visible to the attacking model, that attack has the [Sustained Hits 1] ability.", restrictions: "While using the Houndpack Lance Detachment, the following rules apply:\n- Your army must include three or more WAR DOG units.\n- WAR DOG units from your army have the BATTLELINE keyword.\n- When mustering your army, select three WAR DOG units from your army. Until the end of the battle, those units have the CHARACTER keyword.\n\nDesigner's Note: This means that the selected units can be given Enhancements and one of them can be selected as your WARLORD." },
                enhancements: [
                    { name: "Preyslayer's Mantle", cost: 15, restriction: "WAR DOG model only.", text: "This ancient War Dog chassis is said to have been forged in warpfires and ensorcelled with the spirit of the hunt unending.\n\nThe bearer has the Super-heavy Walker ability." },
                    { name: "Final Howl (Aura)", cost: 20, restriction: "WAR DOG model only.", text: "Biomechanoid parasites lace a War Dog's vox-emitters with the infernal baying of supernatural hunting hounds. Its effects upon other nearby War Dogs are profound and alarming.\n\nWhile a friendly War Dog model is within 6\" of the bearer, each time that model makes an attack, re-roll a Wound roll of 1." },
                    { name: "Loping Predator", cost: 10, restriction: "WAR DOG model only.", text: "This swift attacker is adept at firing on the move, trusting the predatory senses of their War Dog's machine spirit to single out targets of opportunity.\n\nThe bearer's ranged weapons have the [Assault] ability." },
                    { name: "Panoply of the Cursed Knight", cost: 15, restriction: "WAR DOG model only.", text: "Borne within by an order of silent Idolators, this collection of tattered pennants, chain-strung charms and armour scraps represent the last remains of the Knight Carnivus Grymm, torn apart by his own pack of War Dogs. It is said festooning one's Knight suit with these charms instils the legendary fortitude of that doomed war engine, but also invites Carnivus Grymm's ghastly end.\n\nEach time an attack targets the bearer, worsen the Armour Penetration characteristic of that attack by 1." },
                ],
                stratagems: [
                    { name: "Vox-howl", cp: 2, type: "Battle Tactic", when: "Start of the Shooting phase or the start of the Fight phase.", target: "One WAR DOG unit from your army.", effect: "Each enemy unit within 6\" of your unit must take a Battle-shock test. Each friendly WAR DOG unit that is within 6\" of your unit and is Battle-shocked must take a Leadership test; if that test is passed, that unit is no longer Battle-shocked.", restrictions: "You can only use this Stratagem once per turn." },
                    { name: "Hungry for Combat", cp: 1, type: "Battle Tactic", when: "Start of the Fight phase.", target: "Two or more WAR DOG units from your army within Engagement Range of the same enemy unit.", effect: "Select one enemy unit within Engagement Range of those WAR DOG units. Until the end of the phase, models in those WAR DOG units can only target that enemy unit, but each time a model in one of those WAR DOG units makes an attack, an unmodified Hit roll of 5+ scores a Critical Hit.", restrictions: "" },
                    { name: "Cunning Hunter", cp: 1, type: "Strategic Ploy", when: "Your Movement phase, just after a WAR DOG unit from your army Falls Back.", target: "That WAR DOG unit.", effect: "Until the end of the turn, your unit is eligible to shoot and declare a charge in a turn in which it Fell Back.", restrictions: "" },
                    { name: "Animalistic Rage", cp: 1, type: "Battle Tactic", when: "Your opponent's Shooting phase or the Fight phase, just after a WAR DOG unit from your army that has not yet fought is destroyed.", target: "That WAR DOG unit. You can use this Stratagem on that unit even though it was just destroyed.", effect: "Before resolving your unit's Deadly Demise ability, it can either shoot or fight. When doing so, it must target only the enemy unit that just destroyed it, and can only do so if that enemy unit is an eligible target. After it has done so and after any Consolidation moves have been made, resolve your unit's Deadly Demise ability as normal.", restrictions: "" },
                    { name: "Harrying Hounds", cp: 1, type: "Strategic Ploy", when: "Your opponent's Movement phase, just after an enemy unit ends a Normal, Advance or Fall Back move.", target: "One WAR DOG unit from your army that is within 9\" of that enemy unit.", effect: "Your unit can make a Normal move of up to 6\".", restrictions: "" },
                    { name: "Encircling Pack", cp: 1, type: "Strategic Ploy", when: "End of your opponent's Fight phase.", target: "One WAR DOG unit from your army that is wholly within 12\" of one or more battlefield edges and not within Engagement Range of one or more enemy units.", effect: "Remove your unit from the battlefield and place it into Strategic Reserves.", restrictions: "" },
                ]
            },
            {
                name: "Iconoclast Fiefdom",
                flavour: "When the Fallen Nobles of Iconoclast houses go to war, they are often followed by teeming masses of mutants, cultists, and heretic soldiers. These awed mortals offer chanted prayers to these towering beacons of corruption, worshipping them as mechanical idols to the Dark Gods. Rushing forward around the clawed feet of these gigantic Knight suits, the cursed hordes scream battle cries and sing of their devotion as they hurl themselves into the foe. As the death count beneath them escalates, the Fallen Nobles rejoice in the bloodshed, the Warp-twisted mechanisms of their Thrones Mechanicum feeding vampirically upon the sacrifice of their thralls and infusing pilot and steed with ever-greater infernal might.",
                rule: { name: "Dreaded Masters", flavour: "Mortal thralls and foes alike are sacrificed to empower the fallen nobility.", text: "TITANIC CHAOS KNIGHTS units from your army have the following abilities:\n\nDread Tyrants (Aura): While a friendly DAMNED unit is within 9\" of this unit, each time a model in that unit makes an attack, re-roll a Hit roll of 1 and re-roll a Wound roll of 1.\n\nCHAOS KNIGHTS units from your army have the following abilities:\n\nDark Sacrifice: Each time a CHAOS KNIGHTS unit with this ability is selected to shoot or fight, it can make a Dark Sacrifice. If it does, select one friendly DAMNED unit within 6\". That DAMNED unit must take a Leadership test: if passed, destroy D3 models in that DAMNED unit; if failed, destroy D3+3 models in that DAMNED unit. In either case, then select one of the following abilities for your CHAOS KNIGHTS unit's weapons to have until the end of the phase: [Lethal Hits]; [Sustained Hits 1].", restrictions: "WRETCHED THRALLS: You can include DAMNED units in your army (see Codex: Chaos Space Marines). The combined points cost of such units depends on your battle size:\n- Incursion: Up to 250 pts\n- Strike Force: Up to 500 pts\n- Onslaught: Up to 750 pts\nNo DAMNED models from your army can be your WARLORD." },
                enhancements: [
                    { name: "Profane Altar", cost: 20, restriction: "CHAOS KNIGHTS model only.", text: "This ancient and thoroughly corrupted Knight suit is a walking idol of the Dark Gods and a conduit for their malign powers. As servile thralls bleed and die, so do its weapons seethe with unholy power.\n\nEach time the bearer makes a Dark Sacrifice, the maximum number of models are destroyed in the selected DAMNED unit (i.e. 3 if the unit's Leadership test is passed, or 6 if it is failed) but, until the end of the phase, the bearer's weapons have both [Lethal Hits] and [Sustained Hits 1]." },
                    { name: "Pave the Way", cost: 15, restriction: "CHAOS KNIGHTS model only.", text: "This callous Noble dispatches teeming hordes of mutants and mortal devotees to map the path ahead and scout the battlefield for prey.\n\nAt the start of the Declare Battle Formations step, you can select up to three DAMNED units from your army. The selected units have the Scouts 6\" ability." },
                    { name: "Tyrant's Banner", cost: 5, restriction: "CHAOS KNIGHTS model only.", text: "A tyrannical butcher, this Noble's Knight suit bears their corrupted house's tattered and gore-flecked banner. This icon of depravity flutters overhead, inspiring mortal devotees to acts of sickening violence.\n\nEach time the bearer makes a Dark Sacrifice, select one visible friendly DAMNED unit to take a Leadership test instead of a friendly DAMNED unit within 6\"." },
                    { name: "Diabolical Resilience", cost: 35, restriction: "CHAOS KNIGHTS model only.", text: "With its pilot consumed by imperious arrogance and its systems clotted with malefic corruption, this venerable war suit refuses to yield, contemptuously shrugging off the incoming fire.\n\nThe bearer has the Feel No Pain 6+ ability and you can ignore any or all modifiers to its Move characteristic and/or to any Advance or Charge rolls made for it." },
                ],
                stratagems: [
                    { name: "Avenge the Masters!", cp: 1, type: "Strategic Ploy", when: "Any phase.", target: "One CHAOS KNIGHTS unit from your army that was just destroyed. You can use this Stratagem on that unit even though it was just destroyed.", effect: "Until the end of the battle, the enemy unit that destroyed your unit is Marked. Each time a DAMNED model from your army makes an attack that targets a Marked unit, that attack has the [Lethal Hits] ability.", restrictions: "" },
                    { name: "Wretched Masses", cp: 2, type: "Battle Tactic", when: "Any phase.", target: "One DAMNED unit (excluding ACCURSED CULTISTS) from your army that was just destroyed. You can use this Stratagem on that unit even though it was just destroyed.", effect: "Add a new unit to your army identical to your destroyed unit, in Strategic Reserves, at its Starting Strength and with all of its wounds remaining.", restrictions: "You can only use this Stratagem once per battle. This Stratagem cannot be used to return destroyed CHARACTER units to Attached units." },
                    { name: "Soul Hunger", cp: 1, type: "Battle Tactic", when: "Fight phase, just after a CHAOS KNIGHTS unit from your army has fought.", target: "That CHAOS KNIGHTS unit.", effect: "If one or more models were destroyed as a result of those attacks, your unit regains up to D3 lost wounds. If one or more models from Battle-shocked units were destroyed as a result of those attacks, your unit regains up to D3+2 lost wounds instead.", restrictions: "" },
                    { name: "Unrestrained Rage", cp: 1, type: "Strategic Ploy", when: "Your Movement phase, just after a CHAOS KNIGHTS unit from your army Advances or Falls Back.", target: "That CHAOS KNIGHTS unit.", effect: "Until the end of the turn, your unit is eligible to shoot and declare a charge in a turn in which it Advanced or Fell Back.", restrictions: "" },
                    { name: "Worthless Chattel", cp: 1, type: "Strategic Ploy", when: "Your Shooting phase.", target: "One DAMNED unit from your army.", effect: "Until the end of the phase, enemy units are not considered to be within Engagement Range of your unit for the purposes of selecting targets of ranged weapons. Until the end of the phase, each time an enemy model loses a wound, while that model's unit is within Engagement Range of your unit, roll one D6: on a 4+, one model from your unit is destroyed after the attacking unit has finished making its attacks.", restrictions: "" },
                    { name: "Preserve the Idols", cp: 1, type: "Strategic Ploy", when: "Your opponent's Movement phase, just after an enemy unit ends a Normal, Advance or Fall Back move.", target: "One CHAOS KNIGHTS unit from your army that is within 9\" of that enemy unit.", effect: "Select one DAMNED unit from your army that is not Battle-shocked, not within Engagement Range of one or more enemy units and is within 6\" of your unit. That DAMNED unit can make a Normal move of up to 6\", but it must end this move closer to that enemy unit than when it started the move.", restrictions: "" },
                ]
            }
        ],
        units: [
                {
                        "id": "ck-knight-abominant",
                        "name": "Knight Abominant",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 355
                                }
                        ],
                        "stats": {
                                "m": "10\"",
                                "t": 11,
                                "sv": "3+",
                                "w": 26,
                                "ld": "6+",
                                "oc": 10
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Diabolus heavy stubber",
                                                "range": "36\"",
                                                "a": 3,
                                                "bs": "3+",
                                                "s": 5,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Rapid Fire 3"
                                                ]
                                        },
                                        {
                                                "name": "Volkite combustor",
                                                "range": "30\"",
                                                "a": 12,
                                                "bs": "3+",
                                                "s": 12,
                                                "ap": 0,
                                                "d": 3,
                                                "keywords": [
                                                        "Devastating Wounds"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Balemace",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "3+",
                                                "s": 8,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Extra Attacks"
                                                ]
                                        },
                                        {
                                                "name": "Electroscourge",
                                                "range": "Melee",
                                                "a": 9,
                                                "ws": "3+",
                                                "s": 10,
                                                "ap": -2,
                                                "d": 3,
                                                "keywords": [
                                                        "Sustained Hits 1"
                                                ]
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Deadly Demise D6"
                                ],
                                "faction": [
                                        "Harbingers of Dread",
                                        "Super-heavy Walker"
                                ],
                                "wargear": [],
                                "other": [
                                        "Vortex Terrors",
                                        "Warp Storms"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Walker",
                                "Titanic",
                                "Towering",
                                "Abhorrent",
                                "Psyker",
                                "Character",
                                "Chaos",
                                "Knight Abominant"
                        ],
                        "factionKeywords": [
                                "Chaos Knights"
                        ],
                        "compositionText": "1 Knight Abominant This model is equipped with: diabolus heavy stubber; volkite combustor; balemace; electroscourge. DAMAGED: 1-9 WOUNDS REMAINING While this model has 1-9 wounds remaining, subtract 5 from this model’s Objective Control characteristic and each time this model makes an attack, subtract 1 from the Hit roll."
                },
                {
                        "id": "ck-knight-desecrator",
                        "name": "Knight Desecrator",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 355
                                }
                        ],
                        "stats": {
                                "m": "10\"",
                                "t": 11,
                                "sv": "3+",
                                "w": 26,
                                "ld": "6+",
                                "oc": 10
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Desecrator laser destructor",
                                                "range": "72\"",
                                                "a": 3,
                                                "bs": "2+",
                                                "s": 18,
                                                "ap": -4,
                                                "d": "D6+3",
                                                "keywords": []
                                        },
                                        {
                                                "name": "Diabolus heavy stubber",
                                                "range": "36\"",
                                                "a": 3,
                                                "bs": "2+",
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
                                                "name": "Reaper chainsword – strike",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "3+",
                                                "s": 14,
                                                "ap": -4,
                                                "d": 6,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Reaper chainsword – sweep",
                                                "range": "Melee",
                                                "a": 12,
                                                "ws": "3+",
                                                "s": 9,
                                                "ap": -3,
                                                "d": 2,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Warpstrike claw – strike",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "3+",
                                                "s": 20,
                                                "ap": -3,
                                                "d": 8,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Warpstrike claw – sweep",
                                                "range": "Melee",
                                                "a": 8,
                                                "ws": "3+",
                                                "s": 10,
                                                "ap": -2,
                                                "d": 3,
                                                "keywords": []
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Deadly Demise D6"
                                ],
                                "faction": [
                                        "Harbingers of Dread",
                                        "Super-heavy Walker"
                                ],
                                "wargear": [],
                                "other": [
                                        "Obsessive Ruthlessness",
                                        "Taskmaster"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Walker",
                                "Titanic",
                                "Towering",
                                "Abhorrent",
                                "Character",
                                "Chaos",
                                "Knight Desecrator"
                        ],
                        "factionKeywords": [
                                "Chaos Knights"
                        ],
                        "compositionText": "1 Knight Desecrator This model is equipped with: desecrator laser destructor; diabolus heavy stubber; reaper chainsword. DAMAGED: 1-9 WOUNDS REMAINING While this model has 1-9 wounds remaining, subtract 5 from this model’s Objective Control characteristic and each time this model makes an attack, subtract 1 from the Hit roll."
                },
                {
                        "id": "ck-knight-despoiler",
                        "name": "Knight Despoiler",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 390
                                }
                        ],
                        "stats": {
                                "m": "10\"",
                                "t": 11,
                                "sv": "3+",
                                "w": 26,
                                "ld": "6+",
                                "oc": 10
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Daemonbreath meltagun",
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
                                                "name": "Daemonbreath thermal cannon",
                                                "range": "24\"",
                                                "a": "2D3",
                                                "bs": "3+",
                                                "s": 12,
                                                "ap": -4,
                                                "d": "D6",
                                                "keywords": [
                                                        "Blast",
                                                        "Melta 6"
                                                ]
                                        },
                                        {
                                                "name": "Despoiler battle cannon",
                                                "range": "72\"",
                                                "a": "D6+3",
                                                "bs": "3+",
                                                "s": 10,
                                                "ap": -1,
                                                "d": 3,
                                                "keywords": [
                                                        "Blast",
                                                        "Rapid Fire D6+3"
                                                ]
                                        },
                                        {
                                                "name": "Despoiler gatling cannon",
                                                "range": "36\"",
                                                "a": 18,
                                                "bs": "3+",
                                                "s": 6,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Diabolus heavy stubber",
                                                "range": "36\"",
                                                "a": 3,
                                                "bs": "3+",
                                                "s": 5,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Rapid Fire 3"
                                                ]
                                        },
                                        {
                                                "name": "Havoc missile pod",
                                                "range": "48\"",
                                                "a": "D6+1",
                                                "bs": "3+",
                                                "s": 5,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Blast",
                                                        "Indirect Fire"
                                                ]
                                        },
                                        {
                                                "name": "Heavy darkflamer",
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
                                                "name": "Hellstorm autocannons",
                                                "range": "48\"",
                                                "a": 3,
                                                "bs": "3+",
                                                "s": 7,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Anti-Fly 2+",
                                                        "Twin-Linked"
                                                ]
                                        },
                                        {
                                                "name": "Ruinspear rocket pod",
                                                "range": "48\"",
                                                "a": 3,
                                                "bs": "3+",
                                                "s": 8,
                                                "ap": -2,
                                                "d": "D6",
                                                "keywords": []
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Reaper chainsword – strike",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "3+",
                                                "s": 14,
                                                "ap": -4,
                                                "d": 6,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Reaper chainsword – sweep",
                                                "range": "Melee",
                                                "a": 12,
                                                "ws": "3+",
                                                "s": 9,
                                                "ap": -3,
                                                "d": 2,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Titanic feet",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "4+",
                                                "s": 8,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Warpstrike claw – strike",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "3+",
                                                "s": 20,
                                                "ap": -3,
                                                "d": 8,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Warpstrike claw – sweep",
                                                "range": "Melee",
                                                "a": 8,
                                                "ws": "3+",
                                                "s": 10,
                                                "ap": -2,
                                                "d": 3,
                                                "keywords": []
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Deadly Demise D6"
                                ],
                                "faction": [
                                        "Harbingers of Dread",
                                        "Super-heavy Walker"
                                ],
                                "wargear": [],
                                "other": [
                                        "Dread Dominion",
                                        "Seething Hatred"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Walker",
                                "Titanic",
                                "Towering",
                                "Abhorrent",
                                "Character",
                                "Chaos",
                                "Knight Despoiler"
                        ],
                        "factionKeywords": [
                                "Chaos Knights"
                        ],
                        "compositionText": "1 Knight Despoiler This model is equipped with: daemonbreath meltagun; reaper chainsword; titanic feet; warpstrike claw. DAMAGED: 1-9 WOUNDS REMAINING While this model has 1-9 wounds remaining, subtract 5 from this model’s Objective Control characteristic and each time this model makes an attack, subtract 1 from the Hit roll."
                },
                {
                        "id": "ck-knight-rampager",
                        "name": "Knight Rampager",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 365
                                }
                        ],
                        "stats": {
                                "m": "12\"",
                                "t": 11,
                                "sv": "3+",
                                "w": 26,
                                "ld": "6+",
                                "oc": 10
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Diabolus heavy stubber",
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
                                                "name": "Reaper chainsword – strike",
                                                "range": "Melee",
                                                "a": 6,
                                                "ws": "2+",
                                                "s": 14,
                                                "ap": -4,
                                                "d": 6,
                                                "keywords": [
                                                        "Sustained Hits 1"
                                                ]
                                        },
                                        {
                                                "name": "Reaper chainsword – sweep",
                                                "range": "Melee",
                                                "a": 18,
                                                "ws": "2+",
                                                "s": 9,
                                                "ap": -3,
                                                "d": 2,
                                                "keywords": [
                                                        "Sustained Hits 1"
                                                ]
                                        },
                                        {
                                                "name": "Warpstrike claw – strike",
                                                "range": "Melee",
                                                "a": 6,
                                                "ws": "2+",
                                                "s": 20,
                                                "ap": -3,
                                                "d": 8,
                                                "keywords": [
                                                        "Sustained Hits 1"
                                                ]
                                        },
                                        {
                                                "name": "Warpstrike claw – sweep",
                                                "range": "Melee",
                                                "a": 12,
                                                "ws": "2+",
                                                "s": 10,
                                                "ap": -2,
                                                "d": 3,
                                                "keywords": [
                                                        "Sustained Hits 1"
                                                ]
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Deadly Demise D6"
                                ],
                                "faction": [
                                        "Harbingers of Dread",
                                        "Super-heavy Walker"
                                ],
                                "wargear": [],
                                "other": [
                                        "Bloodlust",
                                        "Frenzied Rampage"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Walker",
                                "Titanic",
                                "Towering",
                                "Abhorrent",
                                "Character",
                                "Chaos",
                                "Knight Rampager"
                        ],
                        "factionKeywords": [
                                "Chaos Knights"
                        ],
                        "compositionText": "1 Knight Rampager This model is equipped with: diabolus heavy stubber; reaper chainsword; warpstrike claw. DAMAGED: 1-7 WOUNDS REMAINING While this model has 1-7 wounds remaining, subtract 5 from this model’s Objective Control characteristic and each time this model makes an attack, subtract 1 from the Hit roll."
                },
                {
                        "id": "ck-knight-ruinator",
                        "name": "Knight Ruinator",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 355
                                }
                        ],
                        "stats": {
                                "m": "10\"",
                                "t": 11,
                                "sv": "3+",
                                "w": 26,
                                "ld": "6+",
                                "oc": 10
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Darkflame lance",
                                                "range": "18\"",
                                                "a": "2D6",
                                                "bs": "N/A",
                                                "s": 8,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Ignores Cover",
                                                        "Torrent"
                                                ]
                                        },
                                        {
                                                "name": "Terrorpulse missiles",
                                                "range": "36\"",
                                                "a": "2D6",
                                                "bs": "3+",
                                                "s": 8,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Blast"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Fellbore – strike",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "3+",
                                                "s": 14,
                                                "ap": -3,
                                                "d": 6,
                                                "keywords": [
                                                        "Anti-Monster 2+",
                                                        "Anti-Vehicle 2+"
                                                ]
                                        },
                                        {
                                                "name": "Fellbore – sweep",
                                                "range": "Melee",
                                                "a": 10,
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
                                        "Deadly Demise D6"
                                ],
                                "faction": [
                                        "Harbingers of Dread",
                                        "Super-heavy Walker"
                                ],
                                "wargear": [],
                                "other": [
                                        "Methodical Destruction",
                                        "Close-range Killers"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Walker",
                                "Titanic",
                                "Towering",
                                "Abhorrent",
                                "Character",
                                "Chaos",
                                "Knight Ruinator"
                        ],
                        "factionKeywords": [
                                "Chaos Knights"
                        ],
                        "compositionText": "1 Knight Ruinator This model is equipped with: darkflame lance; terrorpulse missiles; fellbore. DAMAGED: 1-9 WOUNDS REMAINING While this model has 1-9 wounds remaining, subtract 5 from this model’s Objective Control characteristic and each time this model makes an attack, subtract 1 from the Hit roll."
                },
                {
                        "id": "ck-knight-tyrant",
                        "name": "Knight Tyrant",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 410
                                }
                        ],
                        "stats": {
                                "m": "8\"",
                                "t": 12,
                                "sv": "3+",
                                "w": 28,
                                "ld": "6+",
                                "oc": 10
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Brimstone volcano lance",
                                                "range": "60\"",
                                                "a": "D3",
                                                "bs": "3+",
                                                "s": 20,
                                                "ap": -5,
                                                "d": "D6+8",
                                                "keywords": [
                                                        "Blast"
                                                ]
                                        },
                                        {
                                                "name": "Darkflame cannon",
                                                "range": "18\"",
                                                "a": "3D6",
                                                "bs": "N/A",
                                                "s": 8,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Ignores Cover",
                                                        "Torrent"
                                                ]
                                        },
                                        {
                                                "name": "Ectoplasma decimator – standard",
                                                "range": "36\"",
                                                "a": "D6+3",
                                                "bs": "3+",
                                                "s": 8,
                                                "ap": -3,
                                                "d": 2,
                                                "keywords": [
                                                        "Blast"
                                                ]
                                        },
                                        {
                                                "name": "Ectoplasma decimator – supercharge",
                                                "range": "36\"",
                                                "a": "D6+3",
                                                "bs": "3+",
                                                "s": 9,
                                                "ap": -4,
                                                "d": 3,
                                                "keywords": [
                                                        "Blast",
                                                        "Hazardous"
                                                ]
                                        },
                                        {
                                                "name": "Gheiststrike missile launcher",
                                                "range": "72\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 12,
                                                "ap": -6,
                                                "d": "D6+1",
                                                "keywords": [
                                                        "Anti-Titanic 4+",
                                                        "Devastating Wounds"
                                                ]
                                        },
                                        {
                                                "name": "Twin daemonbreath meltagun",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 9,
                                                "ap": -4,
                                                "d": "D6",
                                                "keywords": [
                                                        "Melta 2",
                                                        "Twin-Linked"
                                                ]
                                        },
                                        {
                                                "name": "Twin Desecrator cannon",
                                                "range": "36\"",
                                                "a": "D6",
                                                "bs": "3+",
                                                "s": 6,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Blast",
                                                        "Twin-Linked"
                                                ]
                                        },
                                        {
                                                "name": "Warpshock harpoon",
                                                "range": "12\"",
                                                "a": "D3",
                                                "bs": "3+",
                                                "s": 24,
                                                "ap": -6,
                                                "d": 12,
                                                "keywords": [
                                                        "Blast",
                                                        "Devastating Wounds"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Titanic feet",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "4+",
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
                                        "Harbingers of Dread",
                                        "Super-heavy Walker"
                                ],
                                "wargear": [],
                                "other": [
                                        "Infernal Aegis",
                                        "Bastion of Corruption"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Walker",
                                "Titanic",
                                "Towering",
                                "Character",
                                "Chaos",
                                "Knight Tyrant"
                        ],
                        "factionKeywords": [
                                "Chaos Knights"
                        ],
                        "compositionText": "1 Knight Tyrant This model is equipped with: brimstone volcano lance; ectoplasma decimator; 2 gheiststrike missile launchers; 2 twin daemonbreath meltaguns; twin Desecrator cannon; titanic feet. DAMAGED: 1-10 WOUNDS REMAINING While this model has 1-10 wounds remaining, subtract 5 from this model’s Objective Control characteristic and each time this model makes an attack, subtract 1 from the Hit roll."
                },
                {
                        "id": "ck-war-dog-brigand",
                        "name": "War Dog Brigand",
                        "role": "vehicle",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 140
                                }
                        ],
                        "stats": {
                                "m": "12\"",
                                "t": 9,
                                "sv": "3+",
                                "w": 14,
                                "ld": "7+",
                                "oc": 6
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Avenger chaincannon",
                                                "range": "24\"",
                                                "a": 12,
                                                "bs": "3+",
                                                "s": 6,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Daemonbreath spear",
                                                "range": "18\"",
                                                "a": 2,
                                                "bs": "3+",
                                                "s": 12,
                                                "ap": -4,
                                                "d": "D6",
                                                "keywords": [
                                                        "Melta 4"
                                                ]
                                        },
                                        {
                                                "name": "Diabolus heavy stubber",
                                                "range": "36\"",
                                                "a": 3,
                                                "bs": "3+",
                                                "s": 5,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Rapid Fire 3"
                                                ]
                                        },
                                        {
                                                "name": "Havoc multi-launcher",
                                                "range": "48\"",
                                                "a": "D6",
                                                "bs": "3+",
                                                "s": 5,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Blast",
                                                        "Indirect Fire"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Armoured feet",
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
                                        "Deadly Demise D3"
                                ],
                                "faction": [
                                        "Harbingers of Dread"
                                ],
                                "wargear": [],
                                "other": [
                                        "Brigand"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Walker",
                                "Chaos",
                                "War Dog",
                                "Brigand"
                        ],
                        "factionKeywords": [
                                "Chaos Knights"
                        ],
                        "compositionText": "1 War Dog Brigand This model is equipped with: avenger chaincannon; daemonbreath spear; diabolus heavy stubber; armoured feet. DAMAGED: 1-5 WOUNDS REMAINING While this model has 1-5 wounds remaining, subtract 3 from this model’s Objective Control characteristic and each time this model makes an attack, subtract 1 from the Hit roll."
                },
                {
                        "id": "ck-war-dog-executioner",
                        "name": "War Dog Executioner",
                        "role": "vehicle",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 130
                                }
                        ],
                        "stats": {
                                "m": "12\"",
                                "t": 9,
                                "sv": "3+",
                                "w": 14,
                                "ld": "7+",
                                "oc": 6
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Daemonbreath meltagun",
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
                                                "name": "Diabolus heavy stubber",
                                                "range": "36\"",
                                                "a": 3,
                                                "bs": "3+",
                                                "s": 5,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Rapid Fire 3"
                                                ]
                                        },
                                        {
                                                "name": "War Dog autocannon",
                                                "range": "48\"",
                                                "a": 4,
                                                "bs": "3+",
                                                "s": 9,
                                                "ap": -1,
                                                "d": 3,
                                                "keywords": []
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Armoured feet",
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
                                        "Deadly Demise D3"
                                ],
                                "faction": [
                                        "Harbingers of Dread"
                                ],
                                "wargear": [],
                                "other": [
                                        "Executioner"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Walker",
                                "Chaos",
                                "War Dog",
                                "Executioner"
                        ],
                        "factionKeywords": [
                                "Chaos Knights"
                        ],
                        "compositionText": "1 War Dog Executioner This model is equipped with: diabolus heavy stubber; 2 War Dog autocannons; armoured feet. DAMAGED: 1-5 WOUNDS REMAINING While this model has 1-5 wounds remaining, subtract 3 from this model’s Objective Control characteristic and each time this model makes an attack, subtract 1 from the Hit roll."
                },
                {
                        "id": "ck-war-dog-huntsman",
                        "name": "War Dog Huntsman",
                        "role": "vehicle",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 140
                                }
                        ],
                        "stats": {
                                "m": "12\"",
                                "t": 9,
                                "sv": "3+",
                                "w": 14,
                                "ld": "7+",
                                "oc": 6
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Daemonbreath meltagun",
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
                                                "name": "Daemonbreath spear",
                                                "range": "18\"",
                                                "a": 2,
                                                "bs": "3+",
                                                "s": 12,
                                                "ap": -4,
                                                "d": "D6",
                                                "keywords": [
                                                        "Melta 4"
                                                ]
                                        },
                                        {
                                                "name": "Diabolus heavy stubber",
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
                                                "name": "Reaper chaintalon – strike",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "3+",
                                                "s": 10,
                                                "ap": -3,
                                                "d": 3,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Reaper chaintalon – sweep",
                                                "range": "Melee",
                                                "a": 8,
                                                "ws": "3+",
                                                "s": 8,
                                                "ap": -2,
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
                                        "Harbingers of Dread"
                                ],
                                "wargear": [],
                                "other": [
                                        "Huntsman"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Walker",
                                "Chaos",
                                "War Dog",
                                "Huntsman"
                        ],
                        "factionKeywords": [
                                "Chaos Knights"
                        ],
                        "compositionText": "1 War Dog Huntsman This model is equipped with: daemonbreath spear; diabolus heavy stubber; reaper chaintalon. DAMAGED: 1-5 WOUNDS REMAINING While this model has 1-5 wounds remaining, subtract 3 from this model’s Objective Control characteristic and each time this model makes an attack, subtract 1 from the Hit roll."
                },
                {
                        "id": "ck-war-dog-karnivore",
                        "name": "War Dog Karnivore",
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
                                "w": 14,
                                "ld": "7+",
                                "oc": 6
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Diabolus heavy stubber",
                                                "range": "36\"",
                                                "a": 3,
                                                "bs": "3+",
                                                "s": 5,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Rapid Fire 3"
                                                ]
                                        },
                                        {
                                                "name": "Havoc multi-launcher",
                                                "range": "48\"",
                                                "a": "D6",
                                                "bs": "3+",
                                                "s": 5,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Blast",
                                                        "Indirect Fire"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Reaper chaintalon",
                                                "range": "Melee",
                                                "a": 12,
                                                "ws": "3+",
                                                "s": 8,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": [
                                                        "Sustained Hits 1"
                                                ]
                                        },
                                        {
                                                "name": "Slaughterclaw",
                                                "range": "Melee",
                                                "a": 6,
                                                "ws": "3+",
                                                "s": 12,
                                                "ap": -3,
                                                "d": "D6+2",
                                                "keywords": [
                                                        "Sustained Hits 1"
                                                ]
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Deadly Demise D3"
                                ],
                                "faction": [
                                        "Harbingers of Dread"
                                ],
                                "wargear": [],
                                "other": [
                                        "Karnivore"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Walker",
                                "Chaos",
                                "War Dog",
                                "Karnivore"
                        ],
                        "factionKeywords": [
                                "Chaos Knights"
                        ],
                        "compositionText": "1 War Dog Karnivore This model is equipped with: diabolus heavy stubber; reaper chaintalon; slaughterclaw. DAMAGED: 1-5 WOUNDS REMAINING While this model has 1-5 wounds remaining, subtract 3 from this model’s Objective Control characteristic and each time this model makes an attack, subtract 1 from the Hit roll."
                },
                {
                        "id": "ck-war-dog-stalker",
                        "name": "War Dog Stalker",
                        "role": "vehicle",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 140
                                }
                        ],
                        "stats": {
                                "m": "12\"",
                                "t": 9,
                                "sv": "3+",
                                "w": 14,
                                "ld": "7+",
                                "oc": 6
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Avenger chaincannon",
                                                "range": "24\"",
                                                "a": 12,
                                                "bs": "3+",
                                                "s": 6,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Daemonbreath spear",
                                                "range": "18\"",
                                                "a": 2,
                                                "bs": "3+",
                                                "s": 12,
                                                "ap": -4,
                                                "d": "D6",
                                                "keywords": [
                                                        "Melta 4"
                                                ]
                                        },
                                        {
                                                "name": "Diabolus heavy stubber",
                                                "range": "36\"",
                                                "a": 3,
                                                "bs": "3+",
                                                "s": 5,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Rapid Fire 3"
                                                ]
                                        },
                                        {
                                                "name": "Havoc multi-launcher",
                                                "range": "48\"",
                                                "a": "D6",
                                                "bs": "3+",
                                                "s": 5,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Blast",
                                                        "Indirect Fire"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Reaper chaintalon – strike",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "3+",
                                                "s": 10,
                                                "ap": -3,
                                                "d": 3,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Reaper chaintalon – sweep",
                                                "range": "Melee",
                                                "a": 8,
                                                "ws": "3+",
                                                "s": 8,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Slaughterclaw",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "3+",
                                                "s": 12,
                                                "ap": -3,
                                                "d": "D6+2",
                                                "keywords": []
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Deadly Demise D3",
                                        "Scouts 6\""
                                ],
                                "faction": [
                                        "Harbingers of Dread"
                                ],
                                "wargear": [],
                                "other": [
                                        "Stalker"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Walker",
                                "Chaos",
                                "War Dog",
                                "Stalker"
                        ],
                        "factionKeywords": [
                                "Chaos Knights"
                        ],
                        "compositionText": "1 War Dog Stalker This model is equipped with: avenger chaincannon; diabolus heavy stubber; slaughterclaw. DAMAGED: 1-5 WOUNDS REMAINING While this model has 1-5 wounds remaining, subtract 3 from this model’s Objective Control characteristic and each time this model makes an attack, subtract 1 from the Hit roll."
                }
        ]
    };

    window.W40K_FACTIONS = window.W40K_FACTIONS || { "10th": [], "11th": [] };
    window.W40K_FACTIONS["10th"].push(ck);
})();
