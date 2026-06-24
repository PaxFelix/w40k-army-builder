/**
 * W40K Army Builder — Adeptus Custodes (10th Edition)
 *
 * DATA SCOPE: This module contains only short factual game data — points,
 * model counts, statlines (M/T/Sv/W/Ld/OC), weapon profiles (range, attacks,
 * skill, strength, AP, damage) and keyword labels. Ability, detachment,
 * stratagem and enhancement entries are stored as NAMES ONLY; their rules text
 * is intentionally left for the army owner to fill in from their own codex.
 *
 * This module self-registers into the global W40K_FACTIONS registry, which
 * data/factions.js assembles into the final DATA object.
 */
(function () {
    "use strict";

    const custodes = {
        id: "custodes",
        name: "Adeptus Custodes",
        icon: "\uD83D\uDC51",
        allegiance: "Imperium",
        flavour: "",

        // ─── ARMY RULES (names only — fill in text from your codex) ──────────
        armyRules: [
            {
                name: "Martial Ka\u2019tah",
                flavour: "",
                text: ""
            }
        ],

        // ─── DETACHMENTS (names only — fill in rule/strat/enhancement text) ──
        detachments: [
            {
                name: "Talons of the Emperor",
                flavour: "",
                rule: { name: "Revered Companions", flavour: "The Custodians and the Silent Sisters often fought as one during the earliest days of the Imperium. Ten thousand years on, they have lost none of the unity of doctrine and purpose that makes them such a deadly combination.", text: "ANATHEMA PSYKANA units from your army gain the following ability:\nNull Aegis (Aura): While an ADEPTUS CUSTODES unit is within 6\" of this unit, models in that unit have the Feel No Pain 5+ ability against Psychic Attacks and mortal wounds.\nAll other ADEPTUS CUSTODES units from your army gain the following ability:\nDeadly Unity (Aura): While an ANATHEMA PSYKANA unit is within 6\" of this unit, each time a model in that ANATHEMA PSYKANA unit makes an attack, add 1 to the Hit roll.", restrictions: "" },
                enhancements: [
                    { name: "Aegis Projector", cost: 20, restriction: "ADEPTUS CUSTODES model only.", flavour: "This archeotech field projector triggers in response to autopremonitory danger input. It pulse-casts a temporary force field that can stave off even the most powerful attacks, before charging ready for another use.", text: "Once per turn, the first time a saving throw is failed for the bearer's unit, change the Damage characteristic of that attack to 0." },
                    { name: "Champion of the Imperium", cost: 25, restriction: "ADEPTUS CUSTODES model only.", flavour: "This leader is amongst the finest martial champions in all the Emperor's realm, and their mere presence inspires their followers to remarkable efforts.", text: "The range of the bearer's Null Aegis or Deadly Unity ability is increased to 9\"." },
                    { name: "Gift of Terran Artifice", cost: 15, restriction: "ADEPTUS CUSTODES model only.", flavour: "This warrior wields a close-quarters weapon crafted by the finest noble artisans of Terra, the workmanship of which is magnificent in its lethality.", text: "Each time the bearer makes a melee attack, add 1 to the Wound roll." },
                    { name: "Radiant Mantle", cost: 30, restriction: "ADEPTUS CUSTODES model only.", flavour: "The golden glory of the Emperor himself glows around this magnificent warrior like Sol's own fire. Enemies are blinded by its light, forced to recoil in pain and terror.", text: "Each time an attack targets the bearer's unit, if the attacking model is within 12\", subtract 1 from the Hit roll." },
                ],
                stratagems: [
                    { name: "Hunt As One", cp: 1, type: "Strategic Ploy", flavour: "Custodians and Null Maidens cover one another seamlessly as they manoeuvre to corner their prey.", when: "Start of your Movement phase.", target: "Up to two ADEPTUS CUSTODES units from your army.", effect: "Until the end of the turn, your units are eligible to shoot and/or declare a charge in a turn in which they Fell Back.", restrictions: "You can only select two units if one (and only one) of them is an ANATHEMA PSYKANA unit and both are within 6\" of each other." },
                    { name: "Talons Interlocked", cp: 1, type: "Battle Tactic", flavour: "With practiced ease, the Talons of the Emperor establish vicious crossfires to cut the foe apart.", when: "Your Shooting phase.", target: "Up to two ADEPTUS CUSTODES INFANTRY units from your army, and one enemy unit that is an eligible target for all of those units.", effect: "Until the end of the phase, your units can only target that enemy unit, but each time a model in one of your units makes a ranged attack, improve the Strength and Armour Penetration characteristics of that attack by 1.", restrictions: "You can only select two units if one (and only one) of them is an ANATHEMA PSYKANA unit and both are within 6\" of each other." },
                    { name: "Empyric Severance", cp: 1, type: "Battle Tactic", flavour: "Null Maidens quash the manifestations of witches.", when: "Your opponent's Shooting phase or the Fight phase, just after an enemy unit has selected its targets.", target: "One ADEPTUS CUSTODES unit from your army that was selected as the target of one or more of the attacking unit's attacks, and one friendly ANATHEMA PSYKANA unit within 6\" of that ADEPTUS CUSTODES unit.", effect: "Until the end of the phase, your unit has the Feel No Pain 4+ ability against Psychic attacks and mortal wounds.", restrictions: "" },
                    { name: "Emperor's Executioners", cp: 2, type: "Battle Tactic", flavour: "The Talons of the Emperor tear apart their prey.", when: "Start of the Fight phase.", target: "Up to two ADEPTUS CUSTODES units from your army.", effect: "Until the end of the phase, each time a model in one of your units targets an enemy unit that is below its Starting Strength, add 1 to the Wound roll.", restrictions: "You can only select two units if one (and only one) of them is an ANATHEMA PSYKANA unit and both are within 6\" of each other." },
                    { name: "Taloned Pincer", cp: 1, type: "Battle Tactic", flavour: "Every move the enemy makes only sees them fall.", when: "Your opponent's Movement phase, just after an enemy unit ends a Normal, Advance or Fall Back move.", target: "Up to two ADEPTUS CUSTODES units from your army that are within 9\" of that enemy unit.", effect: "Your units can make a Normal move of up to 6\".", restrictions: "You cannot select units that are within Engagement Range of one or more enemy units. You can only select two units if one (and only one) of them is an ANATHEMA PSYKANA unit and both are within 6\" of each other." },
                    { name: "Shield of Honour", cp: 1, type: "Epic Deed", flavour: "It is second nature for Custodes to place themselves between their comrades and potential peril.", when: "Your opponent's Shooting phase, just after an enemy unit has selected its targets.", target: "One ANATHEMA PSYKANA INFANTRY unit from your army that was selected as the target of one or more of the attacking unit's attacks, and one other friendly ADEPTUS CUSTODES INFANTRY unit (excluding ANATHEMA PSYKANA units) within 6\" of that ANATHEMA PSYKANA INFANTRY unit.", effect: "Until the end of the phase, any attack that targets your ANATHEMA PSYKANA unit must instead target your other ADEPTUS CUSTODES unit (unless it is not an eligible target).", restrictions: "" },
                ]
            },
            {
                name: "Shield Host",
                flavour: "",
                rule: { name: "Martial Mastery", flavour: "The Custodians have perfected countless ways of making war, be it on a personal, tactical or strategic scale.", text: "At the start of the battle round, you can select one of the bullet points below. If you do, until the start of the next battle round, that bullet point's effects apply.\n- Each time an ADEPTUS CUSTODES model from your army with the Martial Ka'tah ability makes a melee attack, a successful unmodified Hit roll of 5+ scores a Critical Hit.\n- Improve the Armour Penetration characteristic of melee weapons equipped by ADEPTUS CUSTODES models from your army with the Martial Ka'tah ability by 1.", restrictions: "" },
                enhancements: [
                    { name: "Auric Mantle", cost: 15, restriction: "SHIELD-CAPTAIN or BLADE CHAMPION model only.", flavour: "This auramite weave garment is draped about its wearers shoulders before they don their battle armour. It forms a final, incredibly resilient layer of protection for them should all their other defences fail.", text: "Add 2 to the bearer's Wounds characteristic." },
                    { name: "Castellan's Mark", cost: 20, restriction: "SHIELD-CAPTAIN model only.", flavour: "This finely worked pauldron is awarded to whichever living Custodian currently holds the greatest tally of victories in the Blood Games. The one who bears the Castellan's Mark is guaranteed to be a superlative strategic genius.", text: "After both players have deployed their armies, you can select up to two ADEPTUS CUSTODES units from your army (excluding ANATHEMA PSYKANA units) and redeploy all of those units. When doing so, any of those units can be placed into Strategic Reserves, regardless of how many units are already in Strategic Reserves." },
                    { name: "From the Hall of Armouries", cost: 25, restriction: "SHIELD-CAPTAIN model only.", flavour: "The racks of the Adeptus Custodes' armouries yield up some of the most finely crafted close-quarters weaponry borne by any soldiers of the Imperium.", text: "Add 1 to the Strength and Damage characteristics of the bearer's melee weapons." },
                    { name: "Panoptispex", cost: 5, restriction: "SHIELD-CAPTAIN or BLADE CHAMPION model only.", flavour: "This incredibly advanced precursor to Imperial auspicators is able to see through solid objects and into esoteric spectra, meaning no malcontent against the Throne can ever hide from its bearer's gaze.", text: "While the bearer is leading a unit, ranged weapons equipped by models in that unit have the [Ignores Cover] ability." },
                ],
                stratagems: [
                    { name: "Arcane Genetic Alchemy", cp: 1, type: "Battle Tactic", flavour: "The Adeptus Custodes are individually engineered on a molecular level using secrets of genetic alchemy that render them virtual demigods in battle.", when: "Any phase, just after a mortal wound has been allocated to an ADEPTUS CUSTODES model from your army (excluding ANATHEMA PSYKANA models).", target: "That ADEPTUS CUSTODES model's unit.", effect: "Until the end of the phase, models in your unit have the Feel No Pain 4+ ability against mortal wounds.", restrictions: "" },
                    { name: "Avenge the Fallen", cp: 1, type: "Strategic Ploy", flavour: "The loss of a single Talon of the Emperor is commemorated by the tolling of the Bell of Lost Souls on Terra, and by their comrades' bloody vengeance on the battlefield.", when: "Start of the Fight phase.", target: "One ADEPTUS CUSTODES unit from your army (excluding ANATHEMA PSYKANA units) that is below its Starting Strength.", effect: "Until the end of the phase, add 1 to the Attacks characteristic of melee weapons equipped by models in that unit. If your unit is Below Half-strength, until the end of the phase, add 2 to the Attacks characteristic of those melee weapons instead.", restrictions: "" },
                    { name: "Unwavering Sentinels", cp: 1, type: "Strategic Ploy", flavour: "Once the Custodians have laid claim to a location, they defend it with incredible tenacity and skill.", when: "Fight phase, just after an enemy unit has selected its targets.", target: "One ADEPTUS CUSTODES INFANTRY unit from your army (excluding ANATHEMA PSYKANA units) that is within range of an objective marker you control and that was selected as the target of one or more of the attacking unit's attacks.", effect: "Until the end of the phase, each time a melee attack targets your unit, subtract 1 from the Hit roll.", restrictions: "" },
                    { name: "Multipotentiality", cp: 1, type: "Strategic Ploy", flavour: "So widely skilled and studied are the Custodians that, whatever situation they find themselves in, they have the martial wisdom to prevail.", when: "Your Movement phase.", target: "One ADEPTUS CUSTODES unit from your army that Fell Back this phase.", effect: "Until the end of your turn, that unit is eligible to shoot and declare a charge in a turn in which it Fell Back.", restrictions: "" },
                    { name: "Vigilance Eternal", cp: 1, type: "Strategic Ploy", flavour: "Simply because the Adeptus Custodes do not stand sentinel over a strategic location or asset, does not mean that it - or any who would threaten it - escapes their gaze.", when: "Your Movement phase.", target: "One ADEPTUS CUSTODES BATTLELINE unit from your army (excluding ANATHEMA PSYKANA units) within range of an objective marker you control.", effect: "That objective marker remains under your control even if you have no models within range of it, until your opponent controls it at the start or end of any turn.", restrictions: "" },
                    { name: "Archeotech Munitions", cp: 1, type: "Wargear", flavour: "The Shield Hosts have access to stockpiles of ancient and incredibly rare weaponry and ammunition.", when: "Your Shooting phase.", target: "One ADEPTUS CUSTODES unit from your army (excluding ANATHEMA PSYKANA units) that has not been selected to shoot this phase.", effect: "Select either the [Lethal Hits] or [Sustained Hits 1] ability. Until the end of the phase ranged weapons equipped by models in your unit have the selected ability.", restrictions: "" },
                ]
            },
            {
                name: "Null Maiden Vigil",
                flavour: "",
                rule: { name: "Creeping Dread (Aura)", flavour: "The instinctive fear caused by the Pariah gene spreads like a terrible pall before the cadres of the Silent Sisterhood.", text: "In the Battle-shock step of your opponent's Command phase, if an enemy unit that is either a PSYKER unit or below its Starting Strength is within 12\" of one or more ANATHEMA PSYKANA models from your army, that enemy unit must take a Battle-shock test. If that unit is Below Half-strength, it must subtract 1 from its Battle-shock test this phase instead.\nDesigner's Note: This means that all enemy PSYKER units within range of this Aura ability and all enemy units within range of this Aura ability that have lost one or more models must take a Battle-shock test in your opponent's Command phase, not just those that are Below Half-strength.\nKEYWORDS: If you select this Detachment, PROSECUTORS units from your army have the BATTLELINE keyword.", restrictions: "" },
                enhancements: [
                    { name: "Enhanced Voidsheen Cloak", cost: 10, restriction: "ANATHEMA PSYKANA model only.", flavour: "Now rare, enhanced voidsheen cloaks were worn by commanders of the Sisters of Silence during the Great Crusade. They are made from micro-vitrious mesh designed to diffract and absorb attacks, and include inbuilt refractor fields.", text: "Each time an attack is allocated to the bearer, subtract 1 from the Damage characteristic of that attack. If that attack was made by a PSYKER or Battle-shocked model, change the Damage characteristic of that attack to 1 instead." },
                    { name: "Huntress' Eye", cost: 15, restriction: "ANATHEMA PSYKANA model only.", flavour: "This ancient bionic acts like a miniature animus speculum, focusing the bearer's null abilities into a stare that can literally terrify foes to death.", text: "In your Command phase, select one enemy unit within 12\" of the bearer. That unit must take a Battle-shock test." },
                    { name: "Oblivion Knight", cost: 25, restriction: "ANATHEMA PSYKANA model only.", flavour: "Oblivion Knights are among the most powerful and experienced of the Sisters of Silence. When one leads their sisters in the field, witches must truly beware.", text: "While the bearer is leading a unit, each time a model in that unit makes an attack, add 1 to the Hit roll. If that attack targeted an enemy PSYKER unit, add 1 to the Wound roll as well." },
                    { name: "Raptor Blade", cost: 5, restriction: "ANATHEMA PSYKANA model only.", flavour: "The Raptor Blade is an ancient relic of the Null Maidens, as razor sharp now as it was on the day of its forging and ever the bane of witches.", text: "Add 1 to the Attacks, Strength and Damage characteristics of the bearer's melee weapons. While the bearer is within Engagement Range of one or more enemy PSYKER units that are Battle-shocked, add 2 to the Attacks, Strength and Damage characteristics of the bearer's melee weapons instead." },
                ],
                stratagems: [
                    { name: "Desperation's Price", cp: 1, type: "Strategic Ploy", flavour: "To overcome the Null Maidens' aura, enemy psykers overstretch themselves with horrible consequences.", when: "Any phase, just after an enemy PSYKER unit has either finished using a Psychic ability that targets a unit, or finished making Psychic Attacks.", target: "One ANATHEMA PSYKANA unit from your army within 18\" of that enemy PSYKER unit.", effect: "That enemy PSYKER unit must take a Leadership test. If the test is passed, that PSYKER unit is Battle-shocked; if the test is failed that PSYKER unit suffers 3 mortal wounds and is Battle-shocked.", restrictions: "" },
                    { name: "Witch Hunters", cp: 1, type: "Battle Tactic", flavour: "Null Maidens train to slay psykers with swift martial efficiency, for they know their prey have many weapons beyond just their powers and must not be allowed time or opportunity to employ them.", when: "Your Shooting phase or the Fight phase.", target: "One ANATHEMA PSYKANA unit from your army that has not been selected to shoot or fight this phase.", effect: "Select either the [Lethal Hits] or [Sustained Hits 1] ability. Until the end of the phase, weapons equipped by models in your unit have the selected ability, but models in your unit can only target PSYKER units with their attacks.", restrictions: "" },
                    { name: "Anathema Blademastery", cp: 1, type: "Battle Tactic", flavour: "The Vigilators train tirelessly in the art of the swift, beheading strike, with a particular emphasis on the swift elimination of enemy witches.", when: "Fight phase.", target: "One VIGILATORS unit from your army that has not been selected to fight this phase.", effect: "Until the end of the phase, each time a model in your unit makes a melee attack, you can re-roll the Hit roll. If the target of that attack is Battle-shocked or a PSYKER, you can re-roll the Wound roll as well.", restrictions: "" },
                    { name: "Psy-chaff Volley", cp: 1, type: "Strategic Ploy", flavour: "Prosecutors can fire psy-chaff bolts whose esoteric emissions weaken those targets not slain outright.", when: "Your Shooting phase.", target: "One PROSECUTORS unit from your army that has just shot.", effect: "Select one enemy unit hit by one or more of those attacks. Until the start of your next turn, while your unit is on the battlefield, that enemy unit is prosecuted. While a unit is prosecuted, each time an ANATHEMA PSYKANA model makes an attack against that unit, improve the Armour Penetration characteristic of that attack by 1. While a PSYKER or Battle-shocked unit is prosecuted, each time a model in that unit makes an attack, subtract 1 from the Hit roll.", restrictions: "" },
                    { name: "Purgation Sweep", cp: 1, type: "Battle Tactic", flavour: "Witchseekers know their role in combat is to spread indiscriminate carnage through the foe's ranks.", when: "Your Shooting phase.", target: "One WITCHSEEKERS unit from your army that has not been selected to shoot this phase.", effect: "Until the end of the phase, add 1 to the Attacks characteristic of Torrent weapons equipped by models in your unit. If such a weapon targets a PSYKER or Battle-shocked unit this phase, add 2 to its Attacks characteristic instead.", restrictions: "" },
                    { name: "Psychic Abominations", cp: 1, type: "Strategic Ploy", flavour: "Enemies must overcome disorienting waves of revulsion in order to even focus upon Null Maidens.", when: "Your opponent's Shooting phase, just after an enemy unit has selected its targets.", target: "One ANATHEMA PSYKANA INFANTRY unit from your army that was selected as the target of one or more of the attacking unit's attacks.", effect: "Until the end of the phase, your unit has the Stealth ability, and Battle-shocked and PSYKER models can only select your unit as a target of a ranged attack if they are within 12\".", restrictions: "" },
                ]
            },
            {
                name: "Auric Champions",
                flavour: "",
                rule: { name: "Assemblage of Might", flavour: "When such exceptional warriors as these gather to quest in the Emperor's name, even the most dreadful foes of Humanity are right to fear for their lives.", text: "At the start of your Command phase, select one unit from your opponent's army. Until the start of your next Command phase, each time a model in an ADEPTUS CUSTODES CHARACTER unit from your army makes an attack that targets that enemy unit, add 1 to the Wound roll.", restrictions: "" },
                enhancements: [
                    { name: "Blade Imperator", cost: 25, restriction: "ADEPTUS CUSTODES model only.", flavour: "This warrior is the Emperor's own wrath made manifest, the living weapon of the Master of Mankind.", text: "Each time the bearer's unit ends a Charge move, select one enemy unit within Engagement Range of the bearer and roll one D6: on a 4+, that enemy unit suffers D3 mortal wounds. Once per battle, after the bearer's unit ends a Charge move, all enemy units within 6\" of the bearer must take a Battle-shock test." },
                    { name: "Inspirational Exemplar", cost: 10, restriction: "ADEPTUS CUSTODES model only.", flavour: "Here is a singular being even the mighty Custodians can look up to and be inspired by.", text: "The bearer has a Leadership characteristic of 5+. Once per battle, at the start of any phase, you can select one friendly ADEPTUS CUSTODES unit that is Battle-shocked and within 12\" of the bearer; that unit is no longer Battle-shocked." },
                    { name: "Martial Philosopher", cost: 30, restriction: "ADEPTUS CUSTODES model only.", flavour: "Few in the history of the Imperium have been so skilled in reading - and directing - the ebb and flow of battle.", text: "The bearer's unit is eligible to shoot and/or declare a charge in a turn in which it Fell Back. Once per battle, when an enemy unit ends a Normal, Advance or Fall Back move within 9\" of the bearer, if the bearer's unit is not within Engagement Range of one or more enemy units, it can make a Normal move of up to 6\"." },
                    { name: "Veiled Blade", cost: 25, restriction: "ADEPTUS CUSTODES model only.", flavour: "Said to have been fashioned for dark deeds during the Horus Heresy, this blade is an icon of vengeance.", text: "Add 2 to the Attacks characteristic of the bearer's melee weapons. Once per battle, at the start of any Command phase, triple the bearer's Objective Control characteristic until the end of the turn." },
                ],
                stratagems: [
                    { name: "Slayer of Champions", cp: 1, type: "Epic Deed", flavour: "What foe can withstand a warrior who has so tested the defences of the Throneworld itself?", when: "Any phase.", target: "One ADEPTUS CUSTODES CHARACTER unit from your army that has just destroyed the unit you selected at the start of your Command phase as the target of your Assemblage of Might ability.", effect: "Select one enemy unit on the battlefield. Until the start of your next Command phase, each time an ADEPTUS CUSTODES CHARACTER model from your army makes an attack that targets that enemy unit, add 1 to the Wound roll. In addition, if the destroyed unit was a CHARACTER unit, gain 1CP.", restrictions: "" },
                    { name: "Superhuman Reserves", cp: 2, type: "Epic Deed", flavour: "", when: "Any phase, just after an ADEPTUS CUSTODES WARLORD model from your army has used an ability on its datasheet or from an Enhancement that says it can only be used Once per battle.", target: "That ADEPTUS CUSTODES WARLORD model.", effect: "Your model can use its 'Once per battle' ability one additional time during this battle (but not in the same phase).", restrictions: "You cannot use this Stratagem more than once per battle." },
                    { name: "The Emperor's Auspice", cp: 1, type: "Epic Deed", flavour: "In an age plagued by monsters, when primordial horrors from the darkest void circle Humanity's dying light, still the Adeptus Custodes stand strong.", when: "Your opponent's Shooting phase or the Fight phase, just after an enemy unit has selected its targets.", target: "One ADEPTUS CUSTODES CHARACTER unit from your army that was selected as the target of one or more of the attacking unit's attacks.", effect: "Until the end of the phase, CHARACTER models in your unit have the Feel No Pain 4+ ability.", restrictions: "" },
                    { name: "Earning of a Name", cp: 1, type: "Epic Deed", flavour: "To lay low the greatest and most terrible monsters and heretics is to earn new names for a Custodian's mighty tally.", when: "Fight phase.", target: "Up to two ADEPTUS CUSTODES CHARACTER units from your army that have not been selected to fight this phase.", effect: "Until the end of the phase, each time a CHARACTER model in either of your units makes an attack that targets a MONSTER or VEHICLE unit, you can re-roll the Hit roll and you can re-roll the Wound roll.", restrictions: "" },
                    { name: "Vigil Unending", cp: 2, type: "Epic Deed", flavour: "The Custodes do not yield while their duty remains unfulfilled.", when: "Fight phase.", target: "One ADEPTUS CUSTODES CHARACTER model from your army that was just destroyed and has not fought this phase. You can use this Stratagem on that unit even though it was just destroyed.", effect: "Do not remove your destroyed model from play. The destroyed model can fight after the attacking unit has finished making attacks, and is then removed from play.", restrictions: "" },
                    { name: "Shoulder the Mantle", cp: 1, type: "Epic Deed", flavour: "The greatest Custodians know when it is both their duty and their right to command their comrades.", when: "Your Movement phase, before the Reinforcements step.", target: "One ADEPTUS CUSTODES CHARACTER model from your army that is not leading a unit.", effect: "Select one friendly unit (excluding Battle-shocked and Attached units) within 2\" horizontally and 5\" vertically of your model that it could lead (as described in the Leader section of its datasheet). Your model attaches to that unit as a Leader. Change that unit's Starting Strength accordingly.", restrictions: "" },
                ]
            },
            {
                name: "Solar Spearhead",
                flavour: "Within the deepest engine vaults of the Imperial Palace, the ancient and mighty vehicles of the Custodians reside. Auramite-clad combat walkers bristling with arcane weapons are roused from stasis, ready to be unleashed upon the galaxy's battlefields. Venerable Land Raiders as old as the Imperium are awoken by complex rituals and prepared for war. When battle dawns, these dread engines of destruction stride or rumble towards the cowering foe, their guns emitting furious torrents of destruction. Those brave or foolish enough to stand before this armoured spearhead are crushed beneath the tread of auric battle tanks or smashed to a bloody pulp by wrathful interred champions.",
                rule: { name: "Auric Armour", flavour: "The venerable war engines of the Adeptus Custodes possess aggressive machine spirits.", text: "- While an ADEPTUS CUSTODES VEHICLE unit from your army is at Starting Strength, unless that unit is an AIRCRAFT or it is Battle-shocked, add 2 to the Objective Control characteristic of models in that unit.\n- While an ADEPTUS CUSTODES VEHICLE unit from your army is below Starting Strength, each time a model in that unit makes an attack, re-roll a Hit roll of 1.\n- While an ADEPTUS CUSTODES VEHICLE unit from your army is Below Half-strength, each time a model in that unit makes an attack, re-roll a Hit roll of 1 and re-roll a Wound roll of 1.\nMORITOI ANCIENTS\nThe Adeptus Custodes' honoured fallen are ever eager for battle.\nAdd 2\" to the Move characteristic of models in ADEPTUS CUSTODES WALKER units from your army and add 1 to Advance and Charge rolls made for such units.\nKEYWORDS\nIn the Muster Armies step, you can select up to 2 ADEPTUS CUSTODES WALKER models from your army. The selected units gain the CHARACTER keyword.\nDesigner's Note: This means that the selected models can be given Enhancements and one of them can be selected as your WARLORD.", restrictions: "" },
                enhancements: [
                    { name: "Adamantine Talisman", cost: 25, restriction: "ADEPTUS CUSTODES model only.", flavour: "This amulet contains a reservoir of promethium harvested from the wreckage of one of the Adeptus Custodes' most ancient Land Raiders. The fluid is said to possess the last lingering traces of that ancient vehicle's bellicose machine spirit, inspiring greater might and ferocity within its bearer.", text: "Improve the Attacks, Strength and Damage characteristics of melee weapons equipped by the bearer by 1." },
                    { name: "Augury Uplink", cost: 35, restriction: "ADEPTUS CUSTODES model only.", flavour: "The war engines of the Adeptus Custodes possess an array of augury equipment that combines to build an intricate picture of the unfolding conflict, enabling the bearer to tap into this accumulated data stream, detect incoming threats and angle their armour to repel the worst of enemy attacks.", text: "The bearer has the Feel No Pain 5+ ability." },
                    { name: "Honoured Fallen (Aura)", cost: 15, restriction: "ADEPTUS CUSTODES VEHICLE model only.", flavour: "The eldest warriors of the Moritoi are revered champions with centuries of battle experience, and their presence on the battlefield is inspirational.", text: "While a friendly ADEPTUS CUSTODES INFANTRY or ADEPTUS CUSTODES MOUNTED unit is within 6\" of the bearer, each time a model in that unit makes an attack, re-roll a Hit roll of 1." },
                    { name: "Veteran of the Kataphraktoi", cost: 10, restriction: "ADEPTUS CUSTODES INFANTRY or ADEPTUS CUSTODES MOUNTED model only.", flavour: "This champion has served amongst the Kataphraktoi and is a master at coordinating swift armoured assaults.", text: "In your Command phase, select one ADEPTUS CUSTODES VEHICLE or ADEPTUS CUSTODES MOUNTED unit within 6\" of the bearer. Until the start of your next Command phase, that unit is eligible to shoot in a turn in which it Fell Back." },
                ],
                stratagems: [
                    { name: "Flawless Construction", cp: 1, type: "Battle Tactic", flavour: "The vehicles of the Adeptus Custodes are the finest examples of their kind. Their expertly wrought armoured forms contain ancient and esoteric technology, including auto-repair subroutines and reactive field generators.", when: "Your opponent's Shooting phase or the Fight phase, just after an enemy unit has selected its targets.", target: "One ADEPTUS CUSTODES VEHICLE unit from your army that was selected as the target of one or more of the attacking unit's attacks.", effect: "Until the end of the phase, each time an attack targets a model in your unit, if the Strength characteristic of that attack is greater than the Toughness characteristic of your unit, subtract 1 from the Wound roll.", restrictions: "" },
                    { name: "Emperor's Vengeance", cp: 1, type: "Battle Tactic", flavour: "Even as death's cold embrace falls upon them, Custodians vent the last of their wrath upon the foe.", when: "Fight phase, just after an enemy unit has selected its targets.", target: "One ADEPTUS CUSTODES unit from your army that was selected as the target of one or more of the attacking unit's attacks.", effect: "Until the end of the phase, each time a model in your unit is destroyed, if that model has not fought this phase, roll one D6, adding 1 to the result if your unit has the WALKER keyword. On a 4+, do not remove it from play; the destroyed model can fight after the attacking unit has finished making its attacks (when doing so, it is assumed to have 1 wound remaining), and is then removed from play.", restrictions: "" },
                    { name: "Wrathful Advance", cp: 1, type: "Battle Tactic", flavour: "The golden-armoured onslaught smashes through the enemy line, trapping the foe and preventing their escape.", when: "Fight phase, just before an ADEPTUS CUSTODES unit from your army Piles In.", target: "That ADEPTUS CUSTODES unit.", effect: "Until the end of the phase, each time a model in your unit makes a Pile-in move, it can move up to D3+3\" instead of up to 3\".", restrictions: "" },
                    { name: "Unstoppable", cp: 1, type: "Strategic Ploy", flavour: "Armoured in adamantine and possessed of furious machine spirits, the vehicles of the Adeptus Custodes are almost impossible to stop in their tracks.", when: "Your Movement phase or your Charge phase.", target: "One ADEPTUS CUSTODES VEHICLE or ADEPTUS CUSTODES MOUNTED unit from your army.", effect: "Until the end of the phase, each time a model in your unit makes a move, it can move through terrain features.", restrictions: "" },
                    { name: "Relentless Persecution", cp: 1, type: "Strategic Ploy", flavour: "Custodians coax wrathful fury from their war engines' machine spirits to hunt down and eliminate their foes at speed.", when: "Your Movement phase, just after an ADEPTUS CUSTODES VEHICLE unit from your army Advances.", target: "That ADEPTUS CUSTODES VEHICLE unit.", effect: "Until the end of the turn, your unit is eligible to shoot in a turn in which it Advanced. If your unit has the WALKER keyword, until the end of the turn, your unit is eligible to shoot and declare a charge in a turn in which it Advanced instead.", restrictions: "" },
                    { name: "Punishment Inescapable", cp: 1, type: "Strategic Ploy", flavour: "The Ten Thousand are relentless in pursuing the Emperor's foes and thorough in their annihilation. No armour, sorcery or hiding place can shield an enemy from their wrath.", when: "Your Shooting phase.", target: "One ADEPTUS CUSTODES unit from your army that has not been selected to shoot this phase.", effect: "Until the end of the phase, ranged weapons equipped by models in your unit have the [Ignores Cover] ability, and until the end of the phase, each time a model in your unit makes an attack, you can ignore any or all modifiers to that attack's Ballistic Skill characteristic and/or any or all modifiers to the Hit roll.", restrictions: "" },
                ]
            },
            {
                name: "Lions of the Emperor",
                flavour: "Many of the galaxy's warrior cultures accept the time-honoured truth that there is greater strength in numbers. Not so for the champions of the Adeptus Custodes, the Lions of the Emperor. Each of them is an army unto themselves, a warrior of legend gifted with terrifying strength, armoured in nigh-impenetrable golden plate and possessing limitless resolve. When the greatest Custodians take to the field at once, those auric-armoured champions have no need to pool their resources in order to smite their foes. Relying instead upon their superhuman strength and mastery of martial ka'tahs, they hurl themselves into the midst of the enemy, sweeping aside gunlines, eviscerating rampaging monsters and obliterating enemy war machines with terrifying ease.",
                rule: { name: "Against All Odds", flavour: "The Adeptus Custodes are outnumbered on every battlefield upon which they fight, yet no matter the foe, and no matter their number, the Lions of the Emperor will prevail.", text: "Each time a model in an ADEPTUS CUSTODES unit from your army (excluding VEHICLES) makes an attack, if there are no other friendly units within 6\" of that unit, add 1 to the Hit roll and add 1 to the Wound roll.", restrictions: "" },
                enhancements: [
                    { name: "Superior Creation", cost: 25, restriction: "ADEPTUS CUSTODES INFANTRY model only.", flavour: "The cellular alchemy by which this heroic warrior was forged has rendered them breathtakingly resilient.", text: "The first time the bearer is destroyed, roll one D6 at the end of the phase. On a 2+, set the bearer back up on the battlefield, as close as possible to where it was destroyed and not within Engagement Range of one or more enemy units, with its full wounds remaining." },
                    { name: "Praesidius", cost: 25, restriction: "ADEPTUS CUSTODES model only.", flavour: "Fashioned by the Terran armourer Annah Tsvochakin in the latter years of the 32nd millennium, the stunningly worked Praesidius is a singular artefact. Nestled within its golden form are a series of microshield generators and stealth emitters. Employing a modification of displacer technology, the shield generates small localised displacement bubbles at the point of impact, literally beaming bolts, bullets and the tips of blades harmlessly away from its bearer.", text: "The bearer has the Lone Operative and Stealth abilities." },
                    { name: "Fierce Conqueror", cost: 15, restriction: "SHIELD-CAPTAIN model only.", flavour: "This Captain-Commander has trained extensively to face multiple foes at once, knowing that the Custodes will always be outnumbered.", text: "At the start of the Fight phase, until the end of the phase, add 2 to the Attacks characteristic of melee weapons equipped by the bearer for every 5 enemy models within 6\" of the bearer (rounding down)." },
                    { name: "Admonimortis", cost: 10, restriction: "SHIELD-CAPTAIN model only.", flavour: "A relic of the Dread Host, this towering blade was wrought to make a bloody example of those who dare to set themselves against the might of Terra.", text: "Improve the Strength characteristic of melee weapons equipped by the bearer by 3, and improve the Armour Penetration and Damage characteristics of those weapons by 1." },
                ],
                stratagems: [
                    { name: "Gilded Champion", cp: 1, type: "Strategic Ploy", flavour: "The shining champions of the Adeptus Custodes are looked upon in awe by all who witness their grim arts. Their judgement is without flaw, and their tactical acumen utterly impeccable.", when: "Any phase, just after an ADEPTUS CUSTODES CHARACTER model from your army has used an ability on its datasheet that states it can only be used 'once per battle'.", target: "That ADEPTUS CUSTODES CHARACTER model.", effect: "Your model can use that 'once per battle' ability one additional time during the battle (but not in the same phase).", restrictions: "You cannot use this Stratagem on the same ADEPTUS CUSTODES CHARACTER model more than once per battle." },
                    { name: "Defiant to the Last", cp: 1, type: "Strategic Ploy", flavour: "The harder the battle, and the heavier their losses, the more resolute the Lions of the Emperor become.", when: "Fight phase, just after an enemy unit has selected its targets.", target: "One ADEPTUS CUSTODES unit from your army that was selected as the target of one or more of the attacking unit's attacks.", effect: "Until the end of the phase, each time a model in your unit is destroyed, if that model has not fought this phase, roll one D6, adding 2 to the result if that model has the CHARACTER keyword. On a 4+, do not remove it from play; the destroyed model can fight after the attacking unit has finished making its attacks (when doing so, it is treated as having 1 wound remaining), and is then removed from play.", restrictions: "" },
                    { name: "Peerless Warrior", cp: 1, type: "Battle Tactic", flavour: "With every strike, the Lions of the Emperor prove themselves the masters of single combat, even when engaging the mightiest foes.", when: "Fight phase.", target: "One ADEPTUS CUSTODES unit from your army that has not been selected to fight this phase.", effect: "Until the end of the phase, melee weapons equipped by models in your unit have the [Precision] ability.", restrictions: "" },
                    { name: "Unleash the Lions", cp: 1, type: "Strategic Ploy", flavour: "Heroic bands of Terminator-armoured Custodians engage entire armies in unrelenting battle.", when: "Your Command phase.", target: "One ALLARUS CUSTODIANS or AQUILON CUSTODIANS unit from your army that is on the battlefield.", effect: "That unit is split into separate units, each containing one model. These new units each have a Starting Strength of 1.", restrictions: "" },
                    { name: "Manoeuvre and Fire", cp: 1, type: "Strategic Ploy", flavour: "The Adeptus Custodes are unrelenting in their advance, laying down punishing fire even as they manoeuvre to new positions.", when: "Your Movement phase, just after an ADEPTUS CUSTODES unit from your army Falls Back.", target: "That ADEPTUS CUSTODES unit.", effect: "Until the end of the turn, your unit is eligible to shoot and declare a charge in a turn in which it Fell Back.", restrictions: "" },
                    { name: "Swift As the Eagle", cp: 1, type: "Strategic Ploy", flavour: "Although every Custodian is devastatingly fast on the battlefield, with preternatural reactions to match, the Lions of the Emperor are outstanding even among their peers.", when: "Your opponent's Shooting phase, just after an enemy unit has shot.", target: "One ADEPTUS CUSTODES unit from your army (excluding VEHICLE units) that was selected as the target of one or more of the attacking unit's attacks.", effect: "Your unit can make a Normal move of up to D6\".", restrictions: "" },
                ]
            }
        ],

        // ─── UNITS ───────────────────────────────────────────────────────────
        units: [
            {
                id: "custodes-aleya",
                name: "Aleya",
                role: "character",
                points: [{ models: 1, cost: 65 }],
                stats: { m: "6\"", t: "3", sv: "3+", w: "4", ld: "6+", oc: "1" },
                invuln: "5+",
                baseSize: "32mm",
                weapons: {
                    melee: [
                        { name: "Somnus", range: "Melee", a: "4", ws: "2+", s: "6", ap: "-3", d: "3", keywords: ["Anti-Psyker 5+", "Devastating Wounds"] }
                    ]
                },
                abilities: {
                    core: ["Feel No Pain 5+", "Leader", "Scouts 6\""],
                    faction: ["Martial Ka\u2019tah"],
                    other: ["Tactical Perception", "Tenacious Spirit", "Daughter of the Abyss"]
                },
                composition: { min: 1, max: 1 },
                compositionText: "1 Aleya (Epic Hero)",
                leaderText: "Can be attached to Prosecutors, Vigilators or Witchseekers.",
                keywords: ["Infantry", "Character", "Epic Hero", "Imperium", "Anathema Psykana", "Aleya"],
                factionKeywords: ["Adeptus Custodes"]
            },
            {
                id: "custodes-blade-champion",
                name: "Blade Champion",
                role: "character",
                points: [{ models: 1, cost: 120 }],
                stats: { m: "6\"", t: "6", sv: "2+", w: "6", ld: "6+", oc: "2" },
                invuln: "4+",
                baseSize: "40mm",
                weapons: {
                    melee: [
                        { name: "Vaultswords \u2013 Behemor", range: "Melee", a: "6", ws: "2+", s: "7", ap: "-2", d: "2", keywords: ["Precision"] },
                        { name: "Vaultswords \u2013 Hurricanus", range: "Melee", a: "9", ws: "2+", s: "5", ap: "-1", d: "1", keywords: ["Sustained Hits 1"] },
                        { name: "Vaultswords \u2013 Victus", range: "Melee", a: "5", ws: "2+", s: "6", ap: "-3", d: "3", keywords: ["Devastating Wounds"] }
                    ]
                },
                abilities: {
                    core: ["Deep Strike", "Leader"],
                    faction: ["Martial Ka\u2019tah"],
                    other: ["Swift Onslaught", "Martial Inspiration"]
                },
                composition: { min: 1, max: 1 },
                compositionText: "1 Blade Champion",
                leaderText: "Can be attached to Custodian Guard or Custodian Wardens.",
                keywords: ["Infantry", "Character", "Imperium", "Blade Champion"],
                factionKeywords: ["Adeptus Custodes"]
            },
            {
                id: "custodes-knight-centura",
                name: "Knight-Centura",
                role: "character",
                points: [{ models: 1, cost: 55 }],
                stats: { m: "6\"", t: "3", sv: "3+", w: "4", ld: "6+", oc: "1" },
                invuln: "5+",
                baseSize: "32mm",
                weapons: {
                    ranged: [
                        { name: "Master-crafted boltgun", range: "24\"", a: "1", bs: "2+", s: "4", ap: "0", d: "2", keywords: ["Rapid Fire 1"] },
                        { name: "Witchseeker flamer", range: "12\"", a: "D6", bs: "N/A", s: "4", ap: "0", d: "1", keywords: ["Ignores Cover", "Torrent"] }
                    ],
                    melee: [
                        { name: "Close combat weapon", range: "Melee", a: "3", ws: "2+", s: "3", ap: "0", d: "1", keywords: [] },
                        { name: "Executioner greatblade", range: "Melee", a: "3", ws: "2+", s: "5", ap: "-2", d: "2", keywords: ["Anti-Psyker 5+", "Devastating Wounds"] }
                    ]
                },
                abilities: {
                    core: ["Leader", "Scouts 6\""],
                    faction: ["Martial Ka\u2019tah"],
                    other: ["Seeker\u2019s Instincts", "Daughter of the Abyss", "Corner the Quarry"]
                },
                wargearOptions: [
                    "The executioner greatblade can be replaced with one of the following: 1 master-crafted boltgun and 1 close combat weapon; or 1 Witchseeker flamer and 1 close combat weapon."
                ],
                composition: { min: 1, max: 1 },
                compositionText: "1 Knight-Centura",
                leaderText: "Can be attached to Prosecutors, Vigilators or Witchseekers.",
                keywords: ["Infantry", "Character", "Imperium", "Anathema Psykana", "Knight-Centura"],
                factionKeywords: ["Adeptus Custodes"]
            },
            {
                id: "custodes-shield-captain",
                name: "Shield-Captain",
                role: "character",
                points: [{ models: 1, cost: 120 }],
                stats: { m: "6\"", t: "6", sv: "2+", w: "6", ld: "6+", oc: "2" },
                invuln: "4+",
                baseSize: "40mm",
                weapons: {
                    ranged: [
                        { name: "Castellan axe", range: "24\"", a: "2", bs: "2+", s: "4", ap: "-1", d: "2", keywords: ["Assault"] },
                        { name: "Guardian spear", range: "24\"", a: "2", bs: "2+", s: "4", ap: "-1", d: "2", keywords: ["Assault"] },
                        { name: "Pyrithite spear", range: "12\"", a: "1", bs: "2+", s: "9", ap: "-4", d: "D6", keywords: ["Melta 2"] },
                        { name: "Sentinel blade", range: "12\"", a: "2", bs: "2+", s: "4", ap: "-1", d: "2", keywords: ["Assault", "Pistol"] }
                    ],
                    melee: [
                        { name: "Castellan axe", range: "Melee", a: "6", ws: "2+", s: "9", ap: "-1", d: "3", keywords: [] },
                        { name: "Guardian spear", range: "Melee", a: "7", ws: "2+", s: "7", ap: "-2", d: "2", keywords: [] },
                        { name: "Pyrithite spear", range: "Melee", a: "7", ws: "2+", s: "7", ap: "-2", d: "2", keywords: [] },
                        { name: "Sentinel blade", range: "Melee", a: "7", ws: "2+", s: "6", ap: "-2", d: "1", keywords: [] }
                    ]
                },
                abilities: {
                    core: ["Deep Strike", "Leader"],
                    faction: ["Martial Ka\u2019tah"],
                    wargear: ["Praesidium Shield"],
                    other: ["Master of the Stances", "Strategic Mastery"]
                },
                wargearOptions: [
                    "The guardian spear can be replaced with one of the following: 1 castellan axe; 1 sentinel blade; 1 sentinel blade and 1 praesidium shield; or 1 pyrithite spear and 1 praesidium shield."
                ],
                composition: { min: 1, max: 1 },
                compositionText: "1 Shield-Captain",
                leaderText: "Can be attached to Custodian Guard or Custodian Wardens.",
                keywords: ["Infantry", "Character", "Imperium", "Shield-Captain"],
                factionKeywords: ["Adeptus Custodes"]
            },
            {
                id: "custodes-shield-captain-allarus",
                name: "Shield-Captain in Allarus Terminator Armour",
                role: "character",
                points: [{ models: 1, cost: 130 }],
                stats: { m: "5\"", t: "7", sv: "2+", w: "7", ld: "6+", oc: "2" },
                invuln: "4+",
                baseSize: "40mm",
                weapons: {
                    ranged: [
                        { name: "Balistus grenade launcher", range: "18\"", a: "D6", bs: "2+", s: "4", ap: "-1", d: "1", keywords: ["Blast"] },
                        { name: "Castellan axe", range: "24\"", a: "2", bs: "2+", s: "4", ap: "-1", d: "2", keywords: ["Assault"] },
                        { name: "Guardian spear", range: "24\"", a: "2", bs: "2+", s: "4", ap: "-1", d: "2", keywords: ["Assault"] }
                    ],
                    melee: [
                        { name: "Castellan axe", range: "Melee", a: "6", ws: "2+", s: "9", ap: "-1", d: "3", keywords: [] },
                        { name: "Guardian spear", range: "Melee", a: "7", ws: "2+", s: "7", ap: "-2", d: "2", keywords: [] }
                    ]
                },
                abilities: {
                    core: ["Deep Strike", "Leader"],
                    faction: ["Martial Ka\u2019tah"],
                    other: ["Auramite and Adamantine", "Strategic Mastery"]
                },
                wargearOptions: [
                    "The guardian spear can be replaced with 1 castellan axe."
                ],
                composition: { min: 1, max: 1 },
                compositionText: "1 Shield-Captain in Allarus Terminator Armour",
                leaderText: "Can be attached to Allarus Custodians.",
                keywords: ["Infantry", "Character", "Terminator", "Imperium", "Shield-Captain"],
                factionKeywords: ["Adeptus Custodes"]
            },
            {
                id: "custodes-shield-captain-dawneagle",
                name: "Shield-Captain on Dawneagle Jetbike",
                role: "character",
                points: [{ models: 1, cost: 150 }],
                stats: { m: "12\"", t: "7", sv: "2+", w: "8", ld: "6+", oc: "2" },
                invuln: "4+",
                baseSize: "75 x 42mm",
                weapons: {
                    ranged: [
                        { name: "Vertus hurricane bolter", range: "18\"", a: "3", bs: "2+", s: "4", ap: "-1", d: "2", keywords: ["Rapid Fire 3", "Twin-linked"] },
                        { name: "Salvo launcher", range: "24\"", a: "1", bs: "2+", s: "10", ap: "-3", d: "D6+1", keywords: ["Twin-linked"] }
                    ],
                    melee: [
                        { name: "Interceptor lance", range: "Melee", a: "6", ws: "2+", s: "7", ap: "-2", d: "2", keywords: ["Lance"] }
                    ]
                },
                abilities: {
                    core: ["Leader"],
                    faction: ["Martial Ka\u2019tah"],
                    other: ["Sweeping Advance", "Strategic Mastery"]
                },
                wargearOptions: [
                    "The salvo launcher can be replaced with 1 Vertus hurricane bolter."
                ],
                composition: { min: 1, max: 1 },
                compositionText: "1 Shield-Captain on Dawneagle Jetbike",
                leaderText: "Can be attached to Vertus Praetors.",
                keywords: ["Mounted", "Character", "Fly", "Imperium", "Dawneagle Jetbike", "Shield-Captain"],
                factionKeywords: ["Adeptus Custodes"]
            },
            {
                id: "custodes-trajann-valoris",
                name: "Trajann Valoris",
                role: "character",
                points: [{ models: 1, cost: 140 }],
                stats: { m: "6\"", t: "6", sv: "2+", w: "7", ld: "5+", oc: "2" },
                invuln: "4+",
                baseSize: "40mm",
                weapons: {
                    ranged: [
                        { name: "Eagle\u2019s Scream", range: "24\"", a: "2", bs: "2+", s: "5", ap: "-2", d: "3", keywords: ["Assault"] }
                    ],
                    melee: [
                        { name: "Watcher\u2019s Axe", range: "Melee", a: "6", ws: "2+", s: "10", ap: "-2", d: "3", keywords: [] }
                    ]
                },
                abilities: {
                    core: ["Deep Strike", "Feel No Pain 5+", "Leader"],
                    faction: ["Martial Ka\u2019tah"],
                    other: ["Captain-General", "Moment Shackle", "Supreme Commander"]
                },
                composition: { min: 1, max: 1 },
                compositionText: "1 Trajann Valoris (Epic Hero)",
                leaderText: "Can be attached to Custodian Guard or Custodian Wardens.",
                keywords: ["Infantry", "Character", "Epic Hero", "Imperium", "Trajann Valoris"],
                factionKeywords: ["Adeptus Custodes"]
            },
            {
                id: "custodes-valerian",
                name: "Valerian",
                role: "character",
                points: [{ models: 1, cost: 110 }],
                stats: { m: "6\"", t: "6", sv: "2+", w: "6", ld: "6+", oc: "2" },
                invuln: "4+",
                baseSize: "40mm",
                weapons: {
                    ranged: [
                        { name: "Gnosis", range: "24\"", a: "3", bs: "2+", s: "4", ap: "-1", d: "2", keywords: ["Assault"] }
                    ],
                    melee: [
                        { name: "Gnosis", range: "Melee", a: "7", ws: "2+", s: "8", ap: "-3", d: "2", keywords: [] }
                    ]
                },
                abilities: {
                    core: ["Deep Strike", "Feel No Pain 6+", "Leader"],
                    faction: ["Martial Ka\u2019tah"],
                    other: ["Golden Laurels", "Hero of Lion\u2019s Gate"]
                },
                composition: { min: 1, max: 1 },
                compositionText: "1 Valerian (Epic Hero)",
                leaderText: "Can be attached to Custodian Guard or Custodian Wardens.",
                keywords: ["Infantry", "Character", "Epic Hero", "Imperium", "Shield-Captain", "Valerian"],
                factionKeywords: ["Adeptus Custodes"]
            },
            {
                id: "custodes-custodian-guard",
                name: "Custodian Guard",
                role: "battleline",
                points: [{ models: 4, cost: 160 }, { models: 5, cost: 200 }],
                stats: { m: "6\"", t: "6", sv: "2+", w: "3", ld: "6+", oc: "2" },
                invuln: "4+",
                baseSize: "40mm",
                weapons: {
                    ranged: [
                        { name: "Guardian spear", range: "24\"", a: "2", bs: "2+", s: "4", ap: "-1", d: "2", keywords: ["Assault"] },
                        { name: "Sentinel blade", range: "12\"", a: "2", bs: "2+", s: "4", ap: "-1", d: "2", keywords: ["Assault", "Pistol"] }
                    ],
                    melee: [
                        { name: "Guardian spear", range: "Melee", a: "5", ws: "2+", s: "7", ap: "-2", d: "2", keywords: [] },
                        { name: "Misericordia", range: "Melee", a: "5", ws: "2+", s: "5", ap: "-2", d: "1", keywords: [] },
                        { name: "Sentinel blade", range: "Melee", a: "5", ws: "2+", s: "6", ap: "-2", d: "1", keywords: [] }
                    ]
                },
                abilities: {
                    core: ["Deep Strike"],
                    faction: ["Martial Ka\u2019tah"],
                    wargear: ["Praesidium Shield", "Vexilla"],
                    other: ["Stand Vigil", "Sentinel Storm"]
                },
                wargearOptions: [
                    "Any number of models can each have their guardian spear replaced with 1 sentinel blade and 1 praesidium shield.",
                    "1 model\u2019s guardian spear can be replaced with 1 vexilla and 1 misericordia, or 1 vexilla, 1 misericordia and 1 praesidium shield."
                ],
                composition: { min: 4, max: 5 },
                compositionText: "4-5 Custodian Guard",
                keywords: ["Infantry", "Battleline", "Imperium", "Custodian Guard"],
                factionKeywords: ["Adeptus Custodes"]
            },
            {
                id: "custodes-allarus-custodians",
                name: "Allarus Custodians",
                role: "infantry",
                points: [{ models: 2, cost: 110 }, { models: 3, cost: 165 }, { models: 5, cost: 275 }, { models: 6, cost: 330 }],
                stats: { m: "5\"", t: "7", sv: "2+", w: "4", ld: "6+", oc: "2" },
                invuln: "4+",
                baseSize: "40mm",
                weapons: {
                    ranged: [
                        { name: "Balistus grenade launcher", range: "18\"", a: "D6", bs: "2+", s: "4", ap: "-1", d: "1", keywords: ["Blast"] },
                        { name: "Castellan axe", range: "24\"", a: "2", bs: "2+", s: "4", ap: "-1", d: "2", keywords: ["Assault"] },
                        { name: "Guardian spear", range: "24\"", a: "2", bs: "2+", s: "4", ap: "-1", d: "2", keywords: ["Assault"] }
                    ],
                    melee: [
                        { name: "Castellan axe", range: "Melee", a: "4", ws: "2+", s: "9", ap: "-1", d: "3", keywords: [] },
                        { name: "Guardian spear", range: "Melee", a: "5", ws: "2+", s: "7", ap: "-2", d: "2", keywords: [] },
                        { name: "Misericordia", range: "Melee", a: "5", ws: "2+", s: "5", ap: "-2", d: "1", keywords: [] }
                    ]
                },
                abilities: {
                    core: ["Deep Strike"],
                    faction: ["Martial Ka\u2019tah"],
                    wargear: ["Vexilla"],
                    other: ["Slayers of Tyrants", "From Golden Light"]
                },
                wargearOptions: [
                    "Any number of models can each have their guardian spear replaced with 1 castellan axe.",
                    "1 model\u2019s guardian spear can be replaced with 1 vexilla and 1 misericordia."
                ],
                composition: { min: 2, max: 6 },
                compositionText: "2-6 Allarus Custodians",
                keywords: ["Infantry", "Terminator", "Imperium", "Allarus Custodians"],
                factionKeywords: ["Adeptus Custodes"]
            },
            {
                id: "custodes-custodian-wardens",
                name: "Custodian Wardens",
                role: "infantry",
                points: [{ models: 4, cost: 210 }, { models: 5, cost: 260 }],
                stats: { m: "6\"", t: "6", sv: "2+", w: "3", ld: "6+", oc: "2" },
                invuln: "4+",
                baseSize: "40mm",
                weapons: {
                    ranged: [
                        { name: "Castellan axe", range: "24\"", a: "2", bs: "2+", s: "4", ap: "-1", d: "2", keywords: ["Assault"] },
                        { name: "Guardian spear", range: "24\"", a: "2", bs: "2+", s: "4", ap: "-1", d: "2", keywords: ["Assault"] }
                    ],
                    melee: [
                        { name: "Castellan axe", range: "Melee", a: "4", ws: "2+", s: "9", ap: "-1", d: "3", keywords: [] },
                        { name: "Guardian spear", range: "Melee", a: "5", ws: "2+", s: "7", ap: "-2", d: "2", keywords: [] }
                    ]
                },
                abilities: {
                    core: ["Deep Strike"],
                    faction: ["Martial Ka\u2019tah"],
                    wargear: ["Vexilla"],
                    other: ["Resolute Will", "Living Fortress"]
                },
                wargearOptions: [
                    "Any number of models can each have their guardian spear replaced with 1 castellan axe.",
                    "1 model can be equipped with 1 vexilla."
                ],
                composition: { min: 4, max: 5 },
                compositionText: "4-5 Custodian Wardens",
                keywords: ["Infantry", "Imperium", "Custodian Wardens"],
                factionKeywords: ["Adeptus Custodes"]
            },
            {
                id: "custodes-prosecutors",
                name: "Prosecutors",
                role: "infantry",
                points: [{ models: 4, cost: 40 }, { models: 5, cost: 50 }, { models: 9, cost: 75 }, { models: 10, cost: 85 }],
                stats: { m: "6\"", t: "3", sv: "3+", w: "1", ld: "6+", oc: "2" },
                baseSize: "32mm",
                weapons: {
                    ranged: [
                        { name: "Boltgun", range: "24\"", a: "1", bs: "3+", s: "4", ap: "0", d: "1", keywords: ["Rapid Fire 1"] }
                    ],
                    melee: [
                        { name: "Close combat weapon", range: "Melee", a: "2", ws: "3+", s: "3", ap: "0", d: "1", keywords: [] }
                    ]
                },
                abilities: {
                    faction: ["Martial Ka\u2019tah"],
                    other: ["Daughters of the Abyss", "Purity of Execution"]
                },
                composition: { min: 4, max: 10 },
                compositionText: "1 Prosecutor Sister Superior and 3-9 Prosecutors",
                leaderText: "Can be led by Aleya or Knight-Centura.",
                keywords: ["Infantry", "Imperium", "Anathema Psykana", "Prosecutors"],
                factionKeywords: ["Adeptus Custodes"]
            },
            {
                id: "custodes-vigilators",
                name: "Vigilators",
                role: "infantry",
                points: [{ models: 4, cost: 45 }, { models: 5, cost: 55 }, { models: 9, cost: 90 }, { models: 10, cost: 100 }],
                stats: { m: "6\"", t: "3", sv: "3+", w: "1", ld: "6+", oc: "1" },
                baseSize: "32mm",
                weapons: {
                    melee: [
                        { name: "Executioner greatblade", range: "Melee", a: "2", ws: "3+", s: "5", ap: "-2", d: "2", keywords: ["Anti-Psyker 5+", "Devastating Wounds"] }
                    ]
                },
                abilities: {
                    faction: ["Martial Ka\u2019tah"],
                    other: ["Daughters of the Abyss", "Deft Parry"]
                },
                composition: { min: 4, max: 10 },
                compositionText: "1 Vigilator Sister Superior and 3-9 Vigilators",
                leaderText: "Can be led by Aleya or Knight-Centura.",
                keywords: ["Infantry", "Imperium", "Anathema Psykana", "Vigilators"],
                factionKeywords: ["Adeptus Custodes"]
            },
            {
                id: "custodes-witchseekers",
                name: "Witchseekers",
                role: "infantry",
                points: [{ models: 4, cost: 45 }, { models: 5, cost: 55 }, { models: 9, cost: 90 }, { models: 10, cost: 100 }],
                stats: { m: "6\"", t: "3", sv: "3+", w: "1", ld: "6+", oc: "1" },
                baseSize: "32mm",
                weapons: {
                    ranged: [
                        { name: "Witchseeker flamer", range: "12\"", a: "D6", bs: "N/A", s: "4", ap: "0", d: "1", keywords: ["Ignores Cover", "Torrent"] }
                    ],
                    melee: [
                        { name: "Close combat weapon", range: "Melee", a: "2", ws: "3+", s: "3", ap: "0", d: "1", keywords: [] }
                    ]
                },
                abilities: {
                    core: ["Scouts 6\""],
                    faction: ["Martial Ka\u2019tah"],
                    other: ["Daughters of the Abyss", "Sanctified Flames"]
                },
                composition: { min: 4, max: 10 },
                compositionText: "1 Witchseeker Sister Superior and 3-9 Witchseekers",
                leaderText: "Can be led by Aleya or Knight-Centura.",
                keywords: ["Infantry", "Imperium", "Anathema Psykana", "Witchseekers"],
                factionKeywords: ["Adeptus Custodes"]
            },
            {
                id: "custodes-sagittarum-custodians",
                name: "Sagittarum Custodians",
                role: "infantry",
                points: [{ models: 5, cost: 225 }],
                stats: { m: "6\"", t: "6", sv: "2+", w: "3", ld: "6+", oc: "2" },
                invuln: "4+",
                baseSize: "40mm",
                weapons: {
                    ranged: [
                        { name: "Adrastus bolt caliver", range: "36\"", a: "3", bs: "2+", s: "5", ap: "-1", d: "2", keywords: ["Sustained Hits 1"] }
                    ],
                    melee: [
                        { name: "Misericordia", range: "Melee", a: "4", ws: "2+", s: "5", ap: "-2", d: "1", keywords: [] }
                    ]
                },
                abilities: {
                    core: ["Deep Strike"],
                    faction: ["Martial Ka\u2019tah"],
                    other: ["Saturation Volleys", "Disintegration Beams"]
                },
                composition: { min: 5, max: 5 },
                compositionText: "5 Sagittarum Custodians",
                keywords: ["Infantry", "Imperium", "Sagittarum Custodians"],
                factionKeywords: ["Adeptus Custodes"]
            },
            {
                id: "custodes-custodian-guard-adrasite-pyrithite",
                name: "Custodian Guard with Adrasite and Pyrithite Spears",
                role: "infantry",
                points: [{ models: 5, cost: 250 }],
                stats: { m: "6\"", t: "6", sv: "2+", w: "3", ld: "6+", oc: "2" },
                invuln: "4+",
                baseSize: "40mm",
                weapons: {
                    ranged: [
                        { name: "Adrasite spear", range: "18\"", a: "1", bs: "2+", s: "5", ap: "-2", d: "3", keywords: [] },
                        { name: "Pyrithite spear", range: "12\"", a: "1", bs: "2+", s: "9", ap: "-4", d: "D6", keywords: ["Melta 2"] }
                    ],
                    melee: [
                        { name: "Adrasite spear", range: "Melee", a: "5", ws: "2+", s: "7", ap: "-2", d: "2", keywords: [] },
                        { name: "Pyrithite spear", range: "Melee", a: "5", ws: "2+", s: "7", ap: "-2", d: "2", keywords: [] }
                    ]
                },
                abilities: {
                    core: ["Deep Strike"],
                    faction: ["Martial Ka\u2019tah"],
                    other: ["Stand Vigil", "No Foe Shall Stand"]
                },
                wargearOptions: [
                    "Any number of models can each have their adrasite spear replaced with 1 pyrithite spear."
                ],
                composition: { min: 5, max: 5 },
                compositionText: "5 Custodian Guard with Adrasite and Pyrithite Spears",
                keywords: ["Infantry", "Imperium", "Custodian Guard with Adrasite and Pyrithite Spears"],
                factionKeywords: ["Adeptus Custodes"]
            },
            {
                id: "custodes-venatari-custodians",
                name: "Venatari Custodians",
                role: "infantry",
                points: [{ models: 3, cost: 165 }, { models: 6, cost: 330 }],
                stats: { m: "10\"", t: "6", sv: "2+", w: "3", ld: "6+", oc: "2" },
                invuln: "4+",
                baseSize: "40mm",
                weapons: {
                    ranged: [
                        { name: "Kinetic destroyer", range: "12\"", a: "2", bs: "2+", s: "6", ap: "-1", d: "1", keywords: ["Pistol", "Sustained Hits 1"] },
                        { name: "Venatari lance", range: "24\"", a: "2", bs: "2+", s: "4", ap: "-1", d: "2", keywords: ["Assault"] }
                    ],
                    melee: [
                        { name: "Tarsis buckler", range: "Melee", a: "5", ws: "2+", s: "5", ap: "-2", d: "1", keywords: [] },
                        { name: "Venatari lance", range: "Melee", a: "5", ws: "2+", s: "7", ap: "-2", d: "2", keywords: ["Lance"] }
                    ]
                },
                abilities: {
                    core: ["Deep Strike"],
                    faction: ["Martial Ka\u2019tah"],
                    wargear: ["Tarsis Buckler"],
                    other: ["Strike from the Skies", "Swooping Dive"]
                },
                wargearOptions: [
                    "Any number of models can each have their Venatari lance replaced with 1 kinetic destroyer and 1 tarsis buckler."
                ],
                composition: { min: 3, max: 6 },
                compositionText: "3-6 Venatari Custodians",
                keywords: ["Infantry", "Fly", "Jump Pack", "Imperium", "Venatari Custodians"],
                factionKeywords: ["Adeptus Custodes"]
            },
            {
                id: "custodes-aquilon-custodians",
                name: "Aquilon Custodians",
                role: "infantry",
                points: [{ models: 3, cost: 195 }, { models: 6, cost: 390 }],
                stats: { m: "5\"", t: "7", sv: "2+", w: "4", ld: "6+", oc: "2" },
                invuln: "4+",
                baseSize: "50mm",
                weapons: {
                    ranged: [
                        { name: "Infernus firepike", range: "12\"", a: "D6", bs: "N/A", s: "6", ap: "-1", d: "1", keywords: ["Ignores Cover", "Torrent"] },
                        { name: "Lastrum storm bolter", range: "24\"", a: "2", bs: "2+", s: "5", ap: "-1", d: "1", keywords: ["Rapid Fire 2"] },
                        { name: "Twin adrathic destructor", range: "18\"", a: "1", bs: "2+", s: "6", ap: "-2", d: "3", keywords: ["Twin-linked"] }
                    ],
                    melee: [
                        { name: "Solerite power gauntlet", range: "Melee", a: "5", ws: "2+", s: "8", ap: "-2", d: "2", keywords: [] },
                        { name: "Solerite power talon", range: "Melee", a: "7", ws: "2+", s: "7", ap: "-2", d: "1", keywords: [] }
                    ]
                },
                abilities: {
                    core: ["Deep Strike"],
                    faction: ["Martial Ka\u2019tah"],
                    other: ["Heavy Assault Infantry", "From Golden Light"]
                },
                wargearOptions: [
                    "Any number of models can each have their lastrum storm bolter replaced with 1 infernus firepike or 1 twin adrathic destructor.",
                    "Any number of models can each have their solerite power gauntlet replaced with 1 solerite power talon."
                ],
                composition: { min: 3, max: 6 },
                compositionText: "3-6 Aquilon Custodians",
                keywords: ["Infantry", "Terminator", "Imperium", "Aquilon Custodians"],
                factionKeywords: ["Adeptus Custodes"]
            },
            {
                id: "custodes-vertus-praetors",
                name: "Vertus Praetors",
                role: "mounted",
                points: [{ models: 2, cost: 150 }, { models: 3, cost: 225 }],
                stats: { m: "12\"", t: "7", sv: "2+", w: "5", ld: "6+", oc: "2" },
                invuln: "4+",
                baseSize: "75 x 42mm",
                weapons: {
                    ranged: [
                        { name: "Salvo launcher", range: "24\"", a: "1", bs: "2+", s: "10", ap: "-3", d: "D6+1", keywords: ["Twin-linked"] },
                        { name: "Vertus hurricane bolter", range: "18\"", a: "3", bs: "2+", s: "4", ap: "-1", d: "2", keywords: ["Rapid Fire 3", "Twin-linked"] }
                    ],
                    melee: [
                        { name: "Interceptor lance", range: "Melee", a: "5", ws: "2+", s: "7", ap: "-2", d: "2", keywords: ["Lance"] }
                    ]
                },
                abilities: {
                    faction: ["Martial Ka\u2019tah"],
                    other: ["Turbo-boost", "Quicksilver Execution"]
                },
                wargearOptions: [
                    "Any number of models can each have their salvo launcher replaced with 1 Vertus hurricane bolter."
                ],
                composition: { min: 2, max: 3 },
                compositionText: "2-3 Vertus Praetors",
                leaderText: "Can be led by Shield-Captain on Dawneagle Jetbike.",
                keywords: ["Mounted", "Fly", "Imperium", "Vertus Praetors"],
                factionKeywords: ["Adeptus Custodes"]
            },
            {
                id: "custodes-agamatus-custodians",
                name: "Agamatus Custodians",
                role: "mounted",
                points: [{ models: 3, cost: 225 }, { models: 6, cost: 450 }],
                stats: { m: "12\"", t: "6", sv: "2+", w: "4", ld: "6+", oc: "2" },
                invuln: "4+",
                baseSize: "60mm",
                weapons: {
                    ranged: [
                        { name: "Adrathic devastator", range: "18\"", a: "1", bs: "2+", s: "7", ap: "-2", d: "3", keywords: [] },
                        { name: "Lastrum bolt cannon", range: "36\"", a: "3", bs: "2+", s: "6", ap: "-1", d: "1", keywords: ["Sustained Hits 1"] },
                        { name: "Twin las-pulsar", range: "24\"", a: "2", bs: "2+", s: "9", ap: "-1", d: "2", keywords: ["Twin-linked"] }
                    ],
                    melee: [
                        { name: "Interceptor lance", range: "Melee", a: "5", ws: "2+", s: "7", ap: "-2", d: "2", keywords: ["Lance"] }
                    ]
                },
                abilities: {
                    faction: ["Martial Ka\u2019tah"],
                    other: ["Turbo-boost", "Implacable Vanguard"]
                },
                wargearOptions: [
                    "Any number of models can each have their lastrum bolt cannon replaced with 1 adrathic devastator or 1 twin las-pulsar."
                ],
                composition: { min: 3, max: 6 },
                compositionText: "3-6 Agamatus Custodians",
                keywords: ["Mounted", "Fly", "Imperium", "Agamatus Custodians"],
                factionKeywords: ["Adeptus Custodes"]
            },
            {
                id: "custodes-anathema-psykana-rhino",
                name: "Anathema Psykana Rhino",
                role: "transport",
                points: [{ models: 1, cost: 75 }],
                stats: { m: "12\"", t: "9", sv: "3+", w: "10", ld: "6+", oc: "2" },
                baseSize: "Use model",
                weapons: {
                    ranged: [
                        { name: "Hunter-killer missile", range: "48\"", a: "1", bs: "2+", s: "14", ap: "-3", d: "D6", keywords: ["One Shot"] },
                        { name: "Storm bolter", range: "24\"", a: "2", bs: "3+", s: "4", ap: "0", d: "1", keywords: ["Rapid Fire 2"] }
                    ],
                    melee: [
                        { name: "Armoured tracks", range: "Melee", a: "3", ws: "4+", s: "6", ap: "0", d: "1", keywords: [] }
                    ]
                },
                abilities: {
                    core: ["Deadly Demise D3", "Firing Deck 2"],
                    faction: ["Martial Ka\u2019tah"],
                    other: ["Daughters of the Abyss", "Self Repair", "Transport: 12 Anathema Psykana Infantry models"]
                },
                wargearOptions: [
                    "This model can be equipped with 1 hunter-killer missile."
                ],
                composition: { min: 1, max: 1 },
                compositionText: "1 Anathema Psykana Rhino",
                keywords: ["Vehicle", "Transport", "Dedicated Transport", "Smoke", "Imperium", "Anathema Psykana", "Rhino"],
                factionKeywords: ["Adeptus Custodes"]
            },
            {
                id: "custodes-venerable-contemptor-dreadnought",
                name: "Venerable Contemptor Dreadnought",
                role: "vehicle",
                points: [{ models: 1, cost: 170 }],
                stats: { m: "6\"", t: "9", sv: "2+", w: "10", ld: "6+", oc: "3" },
                invuln: "5+",
                baseSize: "60mm",
                weapons: {
                    ranged: [
                        { name: "Combi-bolter", range: "24\"", a: "2", bs: "2+", s: "4", ap: "0", d: "1", keywords: ["Rapid Fire 2"] },
                        { name: "Kheres-pattern assault cannon", range: "24\"", a: "6", bs: "2+", s: "7", ap: "-1", d: "1", keywords: ["Devastating Wounds"] },
                        { name: "Multi-melta", range: "18\"", a: "2", bs: "2+", s: "9", ap: "-4", d: "D6", keywords: ["Melta 2"] }
                    ],
                    melee: [
                        { name: "Contemptor combat weapon", range: "Melee", a: "5", ws: "2+", s: "12", ap: "-2", d: "3", keywords: [] }
                    ]
                },
                abilities: {
                    core: ["Deadly Demise 1"],
                    faction: ["Martial Ka\u2019tah"],
                    other: ["Unyielding Ancient"]
                },
                wargearOptions: [
                    "This model\u2019s multi-melta can be replaced with 1 Kheres-pattern assault cannon."
                ],
                composition: { min: 1, max: 1 },
                compositionText: "1 Venerable Contemptor Dreadnought",
                keywords: ["Vehicle", "Walker", "Imperium", "Venerable Contemptor Dreadnought"],
                factionKeywords: ["Adeptus Custodes"]
            },
            {
                id: "custodes-venerable-land-raider",
                name: "Venerable Land Raider",
                role: "vehicle",
                points: [{ models: 1, cost: 220 }],
                stats: { m: "10\"", t: "12", sv: "2+", w: "16", ld: "6+", oc: "5" },
                baseSize: "Use model",
                weapons: {
                    ranged: [
                        { name: "Godhammer lascannon", range: "48\"", a: "2", bs: "2+", s: "12", ap: "-3", d: "D6+1", keywords: [] },
                        { name: "Hunter-killer missile", range: "48\"", a: "1", bs: "2+", s: "14", ap: "-3", d: "D6", keywords: ["One Shot"] },
                        { name: "Storm bolter", range: "24\"", a: "2", bs: "2+", s: "4", ap: "0", d: "1", keywords: ["Rapid Fire 2"] },
                        { name: "Twin heavy bolter", range: "36\"", a: "3", bs: "2+", s: "5", ap: "-1", d: "2", keywords: ["Sustained Hits 1", "Twin-linked"] }
                    ],
                    melee: [
                        { name: "Armoured tracks", range: "Melee", a: "6", ws: "4+", s: "8", ap: "0", d: "1", keywords: [] }
                    ]
                },
                abilities: {
                    core: ["Deadly Demise D6"],
                    faction: ["Martial Ka\u2019tah"],
                    other: ["Assault Ramp", "Damaged: 1-5 wounds remaining", "Transport: 6 Adeptus Custodes Infantry models"]
                },
                wargearOptions: [
                    "This model can be equipped with 1 hunter-killer missile.",
                    "This model can be equipped with 1 storm bolter."
                ],
                composition: { min: 1, max: 1 },
                compositionText: "1 Venerable Land Raider",
                keywords: ["Vehicle", "Transport", "Smoke", "Imperium", "Venerable Land Raider"],
                factionKeywords: ["Adeptus Custodes"]
            },
            {
                id: "custodes-ares-gunship",
                name: "Ares Gunship",
                role: "vehicle",
                points: [{ models: 1, cost: 580 }],
                stats: { m: "20+\"", t: "12", sv: "2+", w: "22", ld: "6+", oc: "0" },
                invuln: "5+",
                baseSize: "160mm",
                weapons: {
                    ranged: [
                        { name: "Arachnus heavy blaze cannon", range: "36\"", a: "4", bs: "2+", s: "12", ap: "-3", d: "D6+1", keywords: [] },
                        { name: "Arachnus magna-blaze cannon", range: "48\"", a: "3", bs: "2+", s: "18", ap: "-4", d: "D6+6", keywords: [] }
                    ],
                    melee: [
                        { name: "Armoured hull", range: "Melee", a: "9", ws: "4+", s: "9", ap: "0", d: "1", keywords: [] }
                    ]
                },
                abilities: {
                    core: ["Deadly Demise D6", "Hover"],
                    faction: ["Martial Ka\u2019tah"],
                    other: ["Infernus Firebombs", "Damaged: 1-7 wounds remaining"]
                },
                composition: { min: 1, max: 1 },
                compositionText: "1 Ares Gunship",
                keywords: ["Vehicle", "Aircraft", "Fly", "Imperium", "Ares Gunship"],
                factionKeywords: ["Adeptus Custodes"]
            },
            {
                id: "custodes-caladius-grav-tank",
                name: "Caladius Grav-tank",
                role: "vehicle",
                points: [{ models: 1, cost: 215 }],
                stats: { m: "10\"", t: "11", sv: "2+", w: "14", ld: "6+", oc: "4" },
                invuln: "5+",
                baseSize: "170 x 109mm",
                weapons: {
                    ranged: [
                        { name: "Twin arachnus heavy blaze cannon", range: "48\"", a: "4", bs: "2+", s: "12", ap: "-3", d: "D6+2", keywords: ["Twin-linked"] },
                        { name: "Twin iliastus accelerator cannon", range: "48\"", a: "4", bs: "2+", s: "10", ap: "-1", d: "3", keywords: ["Rapid Fire 4", "Twin-linked"] },
                        { name: "Twin lastrum bolt cannon", range: "36\"", a: "3", bs: "2+", s: "6", ap: "-1", d: "1", keywords: ["Sustained Hits 1"] }
                    ],
                    melee: [
                        { name: "Armoured hull", range: "Melee", a: "4", ws: "4+", s: "6", ap: "0", d: "1", keywords: [] }
                    ]
                },
                abilities: {
                    core: ["Deadly Demise D3"],
                    faction: ["Martial Ka\u2019tah"],
                    other: ["Advanced Firepower", "Damaged: 1-5 wounds remaining"]
                },
                wargearOptions: [
                    "This model\u2019s twin iliastus accelerator cannon can be replaced with 1 twin arachnus heavy blaze cannon."
                ],
                composition: { min: 1, max: 1 },
                compositionText: "1 Caladius Grav-tank",
                keywords: ["Vehicle", "Fly", "Imperium", "Caladius Grav-tank"],
                factionKeywords: ["Adeptus Custodes"]
            },
            {
                id: "custodes-contemptor-achillus-dreadnought",
                name: "Contemptor-Achillus Dreadnought",
                role: "vehicle",
                points: [{ models: 1, cost: 155 }],
                stats: { m: "6\"", t: "9", sv: "2+", w: "10", ld: "6+", oc: "3" },
                invuln: "5+",
                baseSize: "60mm",
                weapons: {
                    ranged: [
                        { name: "Achillus dreadspear", range: "12\"", a: "1", bs: "2+", s: "9", ap: "-2", d: "3", keywords: [] },
                        { name: "Infernus incinerator", range: "12\"", a: "D6", bs: "N/A", s: "6", ap: "-1", d: "1", keywords: ["Torrent", "Ignores Cover"] },
                        { name: "Lastrum storm bolter", range: "24\"", a: "2", bs: "2+", s: "5", ap: "-1", d: "1", keywords: ["Rapid Fire 2"] },
                        { name: "Twin adrathic destructor", range: "18\"", a: "1", bs: "2+", s: "6", ap: "-2", d: "3", keywords: ["Twin-linked"] }
                    ],
                    melee: [
                        { name: "Achillus dreadspear", range: "Melee", a: "5", ws: "2+", s: "12", ap: "-2", d: "D6+1", keywords: ["Lance"] }
                    ]
                },
                abilities: {
                    core: ["Deadly Demise 1"],
                    faction: ["Martial Ka\u2019tah"],
                    other: ["Dread Foe"]
                },
                wargearOptions: [
                    "This model\u2019s 2 lastrum storm bolters can be replaced with combinations of infernus incinerators and/or twin adrathic destructors."
                ],
                composition: { min: 1, max: 1 },
                compositionText: "1 Contemptor-Achillus Dreadnought",
                keywords: ["Vehicle", "Walker", "Imperium", "Contemptor-Achillus Dreadnought"],
                factionKeywords: ["Adeptus Custodes"]
            },
            {
                id: "custodes-contemptor-galatus-dreadnought",
                name: "Contemptor-Galatus Dreadnought",
                role: "vehicle",
                points: [{ models: 1, cost: 165 }],
                stats: { m: "6\"", t: "9", sv: "2+", w: "10", ld: "6+", oc: "3" },
                invuln: "4+",
                baseSize: "60mm",
                weapons: {
                    ranged: [
                        { name: "Galatus warblade", range: "12\"", a: "D6", bs: "N/A", s: "6", ap: "-1", d: "1", keywords: ["Ignores Cover", "Torrent", "Twin-linked"] }
                    ],
                    melee: [
                        { name: "Galatus warblade", range: "Melee", a: "8", ws: "2+", s: "8", ap: "-2", d: "3", keywords: [] }
                    ]
                },
                abilities: {
                    core: ["Deadly Demise 1"],
                    faction: ["Martial Ka\u2019tah"],
                    other: ["Galatus Shield"]
                },
                composition: { min: 1, max: 1 },
                compositionText: "1 Contemptor-Galatus Dreadnought",
                keywords: ["Vehicle", "Walker", "Imperium", "Contemptor-Galatus Dreadnought"],
                factionKeywords: ["Adeptus Custodes"]
            },
            {
                id: "custodes-coronus-grav-carrier",
                name: "Coronus Grav-carrier",
                role: "vehicle",
                points: [{ models: 1, cost: 200 }],
                stats: { m: "12\"", t: "12", sv: "2+", w: "16", ld: "6+", oc: "5" },
                invuln: "5+",
                baseSize: "Use model",
                weapons: {
                    ranged: [
                        { name: "Twin arachnus blaze cannon", range: "24\"", a: "8", bs: "2+", s: "5", ap: "-1", d: "1", keywords: ["Devastating Wounds", "Twin-linked"] },
                        { name: "Twin lastrum bolt cannon", range: "36\"", a: "3", bs: "2+", s: "6", ap: "-1", d: "1", keywords: ["Sustained Hits 1"] }
                    ],
                    melee: [
                        { name: "Armoured hull", range: "Melee", a: "6", ws: "4+", s: "8", ap: "0", d: "1", keywords: [] }
                    ]
                },
                abilities: {
                    core: ["Deadly Demise D6"],
                    faction: ["Martial Ka\u2019tah"],
                    other: ["Fire Support", "Damaged: 1-5 wounds remaining", "Transport: 8 Adeptus Custodes Infantry models"]
                },
                composition: { min: 1, max: 1 },
                compositionText: "1 Coronus Grav-carrier",
                keywords: ["Vehicle", "Transport", "Fly", "Imperium", "Coronus Grav-carrier"],
                factionKeywords: ["Adeptus Custodes"]
            },
            {
                id: "custodes-orion-assault-dropship",
                name: "Orion Assault Dropship",
                role: "vehicle",
                points: [{ models: 1, cost: 690 }],
                stats: { m: "20+\"", t: "12", sv: "2+", w: "22", ld: "6+", oc: "0" },
                invuln: "5+",
                baseSize: "160mm",
                weapons: {
                    ranged: [
                        { name: "Arachnus heavy blaze cannon", range: "36\"", a: "4", bs: "2+", s: "12", ap: "-3", d: "D6+1", keywords: [] },
                        { name: "Spiculus heavy bolt launcher", range: "36\"", a: "D6+6", bs: "2+", s: "7", ap: "-1", d: "2", keywords: ["Blast"] },
                        { name: "Twin lastrum bolt cannon", range: "36\"", a: "3", bs: "2+", s: "6", ap: "-1", d: "1", keywords: ["Sustained Hits 1"] }
                    ],
                    melee: [
                        { name: "Armoured hull", range: "Melee", a: "9", ws: "4+", s: "9", ap: "0", d: "1", keywords: [] }
                    ]
                },
                abilities: {
                    core: ["Deadly Demise D6", "Hover"],
                    faction: ["Martial Ka\u2019tah"],
                    other: ["Assault Dropship", "Damaged: 1-7 wounds remaining", "Transport: 12 Adeptus Custodes Infantry models (or 1 Dreadnought, reducing capacity to 6)"]
                },
                composition: { min: 1, max: 1 },
                compositionText: "1 Orion Assault Dropship",
                keywords: ["Vehicle", "Transport", "Aircraft", "Fly", "Imperium", "Orion Assault Dropship"],
                factionKeywords: ["Adeptus Custodes"]
            },
            {
                id: "custodes-pallas-grav-attack",
                name: "Pallas Grav-attack",
                role: "vehicle",
                points: [{ models: 1, cost: 105 }],
                stats: { m: "12\"", t: "8", sv: "2+", w: "9", ld: "6+", oc: "2" },
                invuln: "5+",
                baseSize: "105 x 70mm",
                weapons: {
                    ranged: [
                        { name: "Twin arachnus blaze cannon", range: "24\"", a: "8", bs: "2+", s: "5", ap: "-1", d: "1", keywords: ["Devastating Wounds", "Twin-linked"] }
                    ],
                    melee: [
                        { name: "Armoured hull", range: "Melee", a: "3", ws: "4+", s: "6", ap: "0", d: "1", keywords: [] }
                    ]
                },
                abilities: {
                    core: ["Deadly Demise D3"],
                    faction: ["Martial Ka\u2019tah"],
                    other: ["Merciless Hunter"]
                },
                composition: { min: 1, max: 1 },
                compositionText: "1 Pallas Grav-attack",
                keywords: ["Vehicle", "Fly", "Imperium", "Pallas Grav-attack"],
                factionKeywords: ["Adeptus Custodes"]
            },
            {
                id: "custodes-telemon-heavy-dreadnought",
                name: "Telemon Heavy Dreadnought",
                role: "vehicle",
                points: [{ models: 1, cost: 225 }],
                stats: { m: "8\"", t: "10", sv: "2+", w: "12", ld: "6+", oc: "4" },
                invuln: "4+",
                baseSize: "100mm",
                weapons: {
                    ranged: [
                        { name: "Arachnus storm cannon", range: "24\"", a: "12", bs: "2+", s: "6", ap: "-1", d: "1", keywords: ["Devastating Wounds"] },
                        { name: "Iliastus accelerator culverin", range: "48\"", a: "4", bs: "2+", s: "9", ap: "-1", d: "3", keywords: [] },
                        { name: "Spiculus bolt launcher", range: "36\"", a: "D6+3", bs: "2+", s: "5", ap: "0", d: "1", keywords: ["Blast"] },
                        { name: "Twin plasma projector", range: "12\"", a: "D3", bs: "N/A", s: "7", ap: "-2", d: "1", keywords: ["Torrent", "Twin-linked"] }
                    ],
                    melee: [
                        { name: "Armoured feet", range: "Melee", a: "5", ws: "2+", s: "7", ap: "0", d: "1", keywords: [] },
                        { name: "Telemon caestus", range: "Melee", a: "5", ws: "2+", s: "12", ap: "-2", d: "3", keywords: [] }
                    ]
                },
                abilities: {
                    core: ["Deadly Demise D3"],
                    faction: ["Martial Ka\u2019tah"],
                    other: ["Guardian Eternal", "Devoted to Destruction", "Damaged: 1-4 wounds remaining"]
                },
                wargearOptions: [
                    "This model\u2019s 2 iliastus accelerator culverins can be replaced with combinations of arachnus storm cannons and/or Telemon caestus and twin plasma projectors."
                ],
                composition: { min: 1, max: 1 },
                compositionText: "1 Telemon Heavy Dreadnought",
                keywords: ["Vehicle", "Walker", "Imperium", "Telemon Heavy Dreadnought"],
                factionKeywords: ["Adeptus Custodes"]
            }
        ]
    };

    window.W40K_FACTIONS = window.W40K_FACTIONS || { "10th": [], "11th": [] };
    window.W40K_FACTIONS["10th"].push(custodes);
})();
