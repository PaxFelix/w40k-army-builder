/**
 * W40K Army Builder — Genestealer Cults (10th Edition)
 *
 * Datasheets from Codex: Genestealer Cults. Names-only abilities/rules;
 * stats, weapons, points and keywords are factual game data.
 * Legends and Forge World datasheets are intentionally omitted.
 *
 * Self-registers into window.W40K_FACTIONS, assembled by data/factions.js.
 */
(function () {
    "use strict";

    const gsc = {
        id: "genestealer-cults",
        name: "Genestealer Cults",
        icon: "🐛",
        allegiance: "Xenos",
        flavour: "",
        armyRules: [
            { name: "Cult Ambush", flavour: "Genestealer Cults keep their fighting strength carefully hidden from their oppressors until the glorious Day of Ascension arrives. When they finally emerge to fight, it is after long years of meticulous planning, and with an intimate knowledge of the battlefield that grants them a tactical advantage. Even as battle rages, reinforcements slip from the shadows or spill up from the dark places below, called to war by the Broodmind.", text: "If your Army Faction is GENESTEALER CULTS, you start the battle with a number of Resurgence points, depending on the battle size, as shown below:\n- Incursion: 6 Resurgence points\n- Strike Force: 10 Resurgence points\n- Onslaught: 14 Resurgence points\n\nEach time a unit from your army is destroyed, if every model in that unit has this ability, you can spend the relevant number of Resurgence points shown below based on that unit's Starting Strength:\n- Aberrants: 5 models 4 Resurgence points / 10 models 8 Resurgence points\n- Acolyte Hybrids with Autopistols, Acolyte Hybrids with Hand Flamers, Hybrid Metamorphs: 5 models 2 Resurgence points / 10 models 4 Resurgence points\n- Atalan Jackals: 5 models 2 Resurgence points / 10 models 6 Resurgence points\n- Neophyte Hybrids: 10 models 3 Resurgence points / 20 models 6 Resurgence points\n- Purestrain Genestealers: 5 models 2 Resurgence points / 10 models 6 Resurgence points\n\nIf you do:\n- Add a new unit to your army identical to your destroyed unit, in Cult Ambush, at its Starting Strength, with all of its wounds remaining and any [One Shot] weapons those models are equipped with considered as not having been shot.\n- Place one Cult Ambush marker (see below) anywhere on the battlefield that is more than 9\" horizontally away from all enemy units (if this is not possible, no marker is placed).\n\nUnits in Cult Ambush: Cult Ambush is a type of Strategic Reserves. Units in Cult Ambush cannot be targeted with the Rapid Ingress Stratagem, but can be set up on the battlefield using a Cult Ambush marker as described below, or by following the rules for Strategic Reserves in a subsequent turn.\n\nCult Ambush Markers: Use a circular 32mm diameter marker for Cult Ambush markers. If an enemy model (excluding AIRCRAFT) ends any kind of move within 9\" of a Cult Ambush marker you placed, that Cult Ambush marker is removed from the battlefield. At the end of the Reinforcements step of your opponent's next Movement phase, for each of your Cult Ambush markers still on the battlefield, you can select one unit from your army that is in Cult Ambush and set up that unit using that Cult Ambush marker. To do so, set that unit up on the battlefield more than 9\" horizontally away from all enemy units, with at least one model in that unit touching that Cult Ambush marker and all other models placed wholly within 3\" of that Cult Ambush marker (that Cult Ambush marker is then removed from the battlefield)." }
        ],
        detachments: [
            {
                name: "Host of Ascension",
                flavour: "",
                rule: { name: "A Perfect Ambush", flavour: "The insidious broodkin of the cult lurk hidden within the shadows, tirelessly tracking their enemies as predatory beasts stalk their prey. Only when their position is perfect do they strike. Worming into the fight from hidden tunnels, ducts and sewers, they rise to engulf their victims in a hail of unexpected firepower and a flurry of stabbing blades and raking talons.", text: "Each time a GENESTEALER CULTS unit from your army is set up on the battlefield as Reinforcements, until the end of your next Fight phase, weapons equipped by models in that unit have the [Sustained Hits 1] and [Ignores Cover] abilities.", restrictions: "" },
                enhancements: [
                    { name: "Prowling Agitant", cost: 15, restriction: "GENESTEALER CULTS model only.", text: "No matter how often the oppressors seek to trap or silence this leader, they always find themselves left empty-handed and foolish, their elusive quarry long gone.\n\nOnce per turn, when an enemy unit ends a Normal, Advance or Fall Back move within 9\" of the bearer's unit, if the bearer's unit is not within Engagement Range of any enemy units, it can make a Normal move of up to D6\"." },
                    { name: "A Chink in Their Armour", cost: 20, restriction: "GENESTEALER CULTS model only.", text: "Every oppressor has a weak spot. This savant of tactical analysis pinpoints fractured armour plates, exposed cabling or unshielded flesh with a glance and directs the cult's fire to shatter the enemy's greatest assets.\n\nEach time the bearer is set up on the battlefield as Reinforcements, until the end of your next Fight phase, ranged weapons equipped by models in the bearer's unit have the [Lethal Hits] ability." },
                    { name: "Our Time Is Nigh", cost: 20, restriction: "GENESTEALER CULTS model only.", text: "Infused with transcendent zeal, this insurrectionist and their chosen cultists are assured by telepathic whispers that they are the Star Children's avatars and that now is the moment to strike.\n\nOnce per battle, when the bearer's unit declares a charge, the bearer can use this Enhancement. If it does, until the end of the phase, add 2 to Charge rolls made for the bearer's unit." },
                    { name: "Assassination Edict", cost: 15, restriction: "GENESTEALER CULTS model only.", text: "With an impulse of the Broodmind pulsing in their brain, this holy avenger stalks the battlefield, seeking to slay generals, preachers and all those the foe looks to for salvation and inspiration.\n\nEach time a model in the bearer's unit makes an attack that targets a CHARACTER unit, add 1 to the Hit roll." },
                ],
                stratagems: [
                    { name: "Coordinated Trap", cp: 2, type: "Battle Tactic", when: "The start of your Shooting phase or the start of the Fight phase.", target: "Two GENESTEALER CULTS units from your army that have not been selected to shoot or fight this phase.", effect: "Select one enemy unit (if this Stratagem is used in the Fight phase, that enemy unit must be within Engagement Range of both of your units). Until the end of the phase, each time a model in either of your units makes an attack, it can only target that enemy unit (and only if it is an eligible target for that attack), and when resolving that attack, add 1 to the Wound roll.", restrictions: "" },
                    { name: "Primed and Readied", cp: 2, type: "Battle Tactic", when: "Your Shooting phase or the Fight phase.", target: "One GENESTEALER CULTS unit from your army that has not been selected to shoot or fight this phase.", effect: "Until the end of the phase, each time a model in your unit makes an attack, a Critical Hit is scored on an unmodified Hit roll of 5+, instead of only a 6.", restrictions: "" },
                    { name: "Tunnel Crawlers", cp: 1, type: "Strategic Ploy", when: "Your Movement phase.", target: "One GENESTEALER CULTS unit from your army that is arriving using the Deep Strike ability this phase.", effect: "Your unit can be set up anywhere on the battlefield that is more than 6\" horizontally away from all enemy units.", restrictions: "A unit targeted by this Stratagem is not eligible to declare a charge in the same turn." },
                    { name: "Lying in Wait", cp: 1, type: "Strategic Ploy", when: "Your opponent's Movement phase.", target: "One GENESTEALER CULTS BATTLELINE unit from your army in Cult Ambush.", effect: "Until the end of the phase, when setting your unit up using a Cult Ambush marker, set your unit up anywhere on the battlefield wholly within 6\" of that Cult Ambush marker and not within Engagement Range of one or more enemy units.", restrictions: "" },
                    { name: "Return to the Shadows", cp: 1, type: "Strategic Ploy", when: "End of your opponent's Fight phase.", target: "One GENESTEALER CULTS INFANTRY unit from your army that is not within Engagement Range of one or more enemy units.", effect: "Remove your unit from the battlefield and place it into Strategic Reserves.", restrictions: "" },
                    { name: "A Deadly Snare", cp: 1, type: "Strategic Ploy", when: "Your opponent's Charge phase, just after an enemy unit declares a charge.", target: "One GENESTEALER CULTS INFANTRY unit from your army that was selected as a target of that charge.", effect: "Roll one D6: on a 2-4, that enemy unit suffers D3 mortal wounds; on a 5+, that enemy unit suffers 3 mortal wounds.", restrictions: "" },
                ]
            },
            {
                name: "Xenocreed Congregation",
                flavour: "",
                rule: { name: "Unquestioning Fanaticism", flavour: "Downtrodden by the oppressors for so long, a cult's lowly broodkin are fanatically devoted to their leaders, for those hallowed individuals serve the Patriarch's will more directly. The masses draw upon energy reserves in their desire to heed their masters' wishes, surging selflessly into the fray, ready to hurl themselves in harm's way for the Patriarch's chosen.", text: "For each ACOLYTE HYBRIDS, HYBRID METAMORPHS and NEOPHYTE HYBRIDS unit from your army, while one or more CHARACTER models are leading that unit, you can re-roll Advance and Charge rolls made for it. If that CHARACTER model is a MAGUS, PRIMUS or ACOLYTE ICONWARD, that model has the Feel No Pain 3+ ability while leading that unit.", restrictions: "" },
                enhancements: [
                    { name: "Gene-sire's Reliquant", cost: 5, restriction: "MAGUS, PRIMUS or ACOLYTE ICONWARD model only.", text: "This war leader carries a gift from their Patriarch: a talismanic shard of a chitinous claw, a vial of the liquid that seeps into the genesis pools or a psionic growth within the chosen one's brain. Its form matters less than its effect, for it radiates an inspirational wave of the Broodmind that focuses the minds of the faithful on their duties to the cult above all else.\n\nYou can re-roll Battle-shock tests taken for the bearer's unit." },
                    { name: "Denunciator of Tyrants", cost: 25, restriction: "MAGUS, PRIMUS or ACOLYTE ICONWARD model only.", text: "With vitriol and passion do the cult's leaders castigate the foe's champions, casting them as the most hated architects of oppression and inciting their comrades to murderous intent.\n\nEach time a model in the bearer's unit makes an attack that targets a CHARACTER unit, add 1 to the Hit roll and add 1 to the Wound roll." },
                    { name: "Deeds That Speak to the Masses", cost: 25, restriction: "MAGUS, PRIMUS or ACOLYTE ICONWARD model only.", text: "This agent of the Star Children is a living legend known amongst the entire cult. Their reputation as a spiritual orator, undefeated liberator or sanctified warden is mythic, and their very presence draws the faithful to their side for a chance to fight alongside them.\n\nYou start the battle with 2 additional Resurgence points." },
                    { name: "Incendiary Inspiration", cost: 15, restriction: "MAGUS, PRIMUS or ACOLYTE ICONWARD model only.", text: "This insurgent is a font of aggressive encouragement. As some supernatural vitality their broodkin feel in their souls, the leader's words and deeds rouse them with fresh energy and stir them to charge forth in blind fury.\n\nThe bearer's unit is eligible to declare a charge in a turn in which it Advanced." },
                ],
                stratagems: [
                    { name: "Vengeance for the Martyr!", cp: 1, type: "Epic Deed", when: "Your opponent's Shooting phase or the Fight phase, just after an enemy unit destroys a GENESTEALER CULTS CHARACTER model from your army.", target: "One other GENESTEALER CULTS CHARACTER model from your army.", effect: "Until the end of the battle, each time a friendly ACOLYTE HYBRIDS, HYBRID METAMORPHS or NEOPHYTE HYBRIDS model makes an attack that targets that enemy unit, re-roll a Hit roll of 1. If the destroyed model was a MAGUS, PRIMUS or ACOLYTE ICONWARD, you can re-roll the Hit roll instead.", restrictions: "" },
                    { name: "Frenzied Devotion", cp: 1, type: "Battle Tactic", when: "Fight phase.", target: "One ACOLYTE HYBRIDS, HYBRID METAMORPHS or NEOPHYTE HYBRIDS unit from your army that has not been selected to fight this phase.", effect: "Until the end of the phase, improve the Attacks and Weapon Skill characteristics of melee weapons equipped by models (excluding CHARACTERS) in your unit by 1 and those weapons have the [Hazardous] ability.", restrictions: "" },
                    { name: "Tireless Fervour", cp: 1, type: "Strategic Ploy", when: "Your Charge phase.", target: "One ACOLYTE HYBRIDS, HYBRID METAMORPHS or NEOPHYTE HYBRIDS unit from your army that has not declared a charge this phase.", effect: "Until the end of the phase, your unit is eligible to declare a charge in a turn in which it Advanced or Fell Back. When doing so, if it targets an enemy unit within Engagement Range of one or more friendly CHARACTER units, you can re-roll the Charge roll.", restrictions: "" },
                    { name: "Transcendent Celerity", cp: 1, type: "Strategic Ploy", when: "Your Shooting phase.", target: "One ACOLYTE HYBRIDS, HYBRID METAMORPHS or NEOPHYTE HYBRIDS unit from your army that has not been selected to shoot this phase.", effect: "Until the end of the phase, ranged weapons equipped by models in your unit have the [Assault] ability.", restrictions: "" },
                    { name: "The Downtrodden Rise", cp: 2, type: "Strategic Ploy", when: "End of the Reinforcements step of your opponent's Movement phase.", target: "One ACOLYTE HYBRIDS, HYBRID METAMORPHS or NEOPHYTE HYBRIDS unit from your army in Cult Ambush.", effect: "Until the end of the phase, you can set up your unit on the battlefield without using a Cult Ambush marker. When doing so, set up your unit anywhere on the battlefield that is more than 6\" horizontally away from all enemy units.", restrictions: "" },
                    { name: "The Path of Anguish", cp: 1, type: "Strategic Ploy", when: "Your opponent's Shooting phase, just after an enemy unit has shot.", target: "One ACOLYTE HYBRIDS or NEOPHYTE HYBRIDS unit from your army that had one or more of its models destroyed as a result of the attacking unit's attacks.", effect: "Your unit can make a move of up to D6\", but it must end that move as close as possible to the closest enemy unit (excluding AIRCRAFT). When doing so, models in your unit can be moved within Engagement Range of that enemy unit.", restrictions: "" },
                ]
            },
            {
                name: "Biosanctic Broodsurge",
                flavour: "",
                rule: { name: "Hypermorphic Fury", flavour: "Little can assuage a Genestealer Cult's least Human instincts, behaviours made even more ferocious under provocation. Stimulated by psionic pulses of the Broodmind or fuelled by alchemical concoctions delivered from alien grafts, impulses drive the blessed to acts of increased savagery.", text: "Add 1 to Charge rolls made for ABERRANTS, BIOPHAGUS and PURESTRAIN GENESTEALERS units from your army. In addition, each time such a unit is selected to fight, if it made a Charge move this turn, until the end of the phase, add 1 to the Attacks characteristic of melee weapons equipped by models in that unit.", restrictions: "" },
                enhancements: [
                    { name: "Predatory Instincts", cost: 20, restriction: "ABOMINANT, BIOPHAGUS or PATRIARCH model only.", text: "With alien senses and instincts augmented with hyper-adaptive gene-strands, this chosen of the cult leads the way deep into enemy lines, like a toxic barb working its way to the heart.\n\nModels in the bearer's unit have the Infiltrators ability and, once per battle round, you can target the bearer's unit with the Heroic Intervention Stratagem for 0CP, and can do so even if you have already targeted a different unit with that Stratagem this phase." },
                    { name: "Biomorph Adaptation", cost: 25, restriction: "ABOMINANT or PATRIARCH model only.", text: "The power of the Star Children flows through this creature's veins, their physiology showing unnatural gifts and lethal enhancements.\n\nImprove the Armour Penetration and Damage characteristics of melee weapons equipped by the bearer by 1." },
                    { name: "Mutagenic Regeneration", cost: 10, restriction: "ABOMINANT, BIOPHAGUS or PATRIARCH model only.", text: "Though the truth may lie with cocktails of alchemical enzymes or xenos hormones triggering ferocious metabolic renewal, the cult's masses see this nigh-immortal leader as a vessel of divine favour.\n\nIn each Command phase, one model in the bearer's unit regains 1 lost wound." },
                    { name: "Alien Majesty", cost: 15, restriction: "ABOMINANT, BIOPHAGUS or PATRIARCH model only.", text: "An aura of palpable grandeur surrounds this individual, their mere presence a powerful stimulant to the nerve of their followers and a cowing nimbus to subjugate tyrannical foes.\n\nWhile an enemy unit is within Engagement Range of the bearer's unit, subtract 1 from the Objective Control characteristic of models in that enemy unit (to a minimum of 1)." },
                ],
                stratagems: [
                    { name: "Evasive Vanguard", cp: 1, type: "Strategic Ploy", when: "Any phase, just after an enemy unit ends a move within 9\" of one or more of your Cult Ambush markers, before removing those markers from the battlefield.", target: "Select one of those Cult Ambush markers.", effect: "You can set up that Cult Ambush marker anywhere on the battlefield that is more than 9\" horizontally away from all enemy units.", restrictions: "" },
                    { name: "Saintly Paroxysm", cp: 1, type: "Epic Deed", when: "Fight phase, just after an enemy unit destroys a GENESTEALER CULTS CHARACTER model from your army.", target: "That destroyed CHARACTER model. You can use this Stratagem on that model even though it was just destroyed.", effect: "Roll one D6: on a 2+, that enemy unit suffers D3 mortal wounds. If that CHARACTER model is an ABOMINANT or PATRIARCH, that enemy unit suffers 2D3 mortal wounds instead.", restrictions: "" },
                    { name: "Gene-twisted Muscle", cp: 1, type: "Battle Tactic", when: "Fight phase.", target: "One ABERRANTS, BIOPHAGUS or PURESTRAIN GENESTEALERS unit from your army that has not been selected to fight this phase.", effect: "Until the end of the phase, each time a model in your unit makes an attack that targets a MONSTER or VEHICLE, add 1 to the Wound roll.", restrictions: "" },
                    { name: "Hyper-metabolic Vigour", cp: 1, type: "Battle Tactic", when: "Fight phase.", target: "One ABERRANTS, BIOPHAGUS or PURESTRAIN GENESTEALERS unit from your army that has not been selected to fight this phase.", effect: "Until the end of the phase, each time a model in your unit makes a Pile-in or Consolidation move, it can move up to 6\" instead of up to 3\". In addition, it does not need to end that move closer to the closest enemy model, provided it ends it as close as possible to the closest enemy unit.", restrictions: "" },
                    { name: "Stimulated Bio-surge", cp: 1, type: "Battle Tactic", when: "Your Charge phase.", target: "One ABERRANTS, BIOPHAGUS or PURESTRAIN GENESTEALERS unit from your army that has not declared a charge this phase.", effect: "Until the end of the phase, each time your unit declares a charge, if the closest eligible enemy unit is selected as one of the targets of that charge, add 1 to the Charge roll for each selected target of that charge (including the closest eligible enemy unit), to a maximum of +3.", restrictions: "" },
                    { name: "Bio-horror Revelation", cp: 1, type: "Strategic Ploy", when: "Start of your opponent's Shooting phase.", target: "One ABERRANTS, BIOPHAGUS or PURESTRAIN GENESTEALERS unit from your army.", effect: "Until the end of the phase, each time an enemy unit within 9\" of your unit is selected to shoot, it must take a Leadership test, subtracting 1 from the result. If that test is failed, until the end of the phase, each time a model in that enemy unit makes an attack that targets your unit, subtract 1 from the Hit roll.", restrictions: "" },
                ]
            },
            {
                name: "Outlander Claw",
                flavour: "",
                rule: { name: "Rapid Takeover", flavour: "Whether forming loose clans of wandering nomads or militarised rapid-reaction corps, the cultists of Outlander Claws use their experience to launch assaults on prominent targets. Swiftly exploiting or rigging them with proximity charges, they can deny resources to the enemy without yoking themselves to a static defence.", text: "While a GENESTEALER CULTS MOUNTED or GENESTEALER CULTS VEHICLE model from your army is not Battle-shocked, add 1 to its Objective Control characteristic. In addition, at the end of your Command phase, if one or more ATALAN JACKALS units from your army are within range of an objective marker you control, that objective marker remains under your control until your opponent's Level of Control over that objective marker is greater than yours at the end of a phase.", restrictions: "" },
                enhancements: [
                    { name: "Serpentine Tactics", cost: 10, restriction: "GENESTEALER CULTS MOUNTED model only.", text: "With a chilling focus enabling them to identify ideal firing positions at a glance, this frontier assassin leads their brood in a coiling evasion from their enemies that suddenly changes into a lunging strike back.\n\nThe bearer's unit is eligible to shoot in a turn in which it Fell Back." },
                    { name: "Cartographic Data-leech", cost: 10, restriction: "GENESTEALER CULTS model only.", text: "This parasitic, cybernetic implant allows its host to tap into the survey augurs and proximity detectors of the cult's industrial transports. They use this leeched data to guide their comrades' fire from vision slits and hatches, even at high speed.\n\nWhile the bearer is embarked within a TRANSPORT, each time that TRANSPORT is selected to shoot, until the end of the phase, improve the Ballistic Skill characteristic of ranged weapons equipped by that TRANSPORT as a result of the Firing Deck ability by 1." },
                    { name: "Starfall Shells", cost: 10, restriction: "GENESTEALER CULTS MOUNTED model only.", text: "When they hit, these hand-crafted sniper bullets radiate with a supernatural aura redolent of the void's numbing chill. Muscles seize, fingers cramp and thought slows as the sinister saturation takes effect.\n\nIn your Shooting phase, after the bearer has shot, select one enemy unit hit by one or more of those attacks made with a cult sniper rifle. Until the start of your next Shooting phase, each time a model in that enemy unit makes an attack, subtract 1 from the Hit roll." },
                    { name: "Assault Commando", cost: 15, restriction: "GENESTEALER CULTS model only.", text: "An expert in rapid attacks from speeding vehicles, this veteran has drilled their insurrectionist cell, readying them to leap into the fray with stolen weapons blazing.\n\nEach time a model in the bearer's unit makes a ranged attack, if it disembarked from a TRANSPORT this turn, you can re-roll the Hit roll." },
                ],
                stratagems: [
                    { name: "Along Shadowed Trails", cp: 1, type: "Strategic Ploy", when: "Any phase, just after an enemy unit ends a move within 9\" of one or more of your Cult Ambush markers.", target: "Select one of those Cult Ambush markers.", effect: "You can set up that Cult Ambush marker anywhere on the battlefield that is more than 9\" horizontally away from all enemy units.", restrictions: "" },
                    { name: "Devoted Crew", cp: 1, type: "Battle Tactic", when: "Your opponent's Shooting phase or the Fight phase, just after an enemy unit has selected its targets.", target: "One GOLIATH ROCKGRINDER or GOLIATH TRUCK unit from your army that was selected as the target of one or more of the attacking unit's attacks.", effect: "Until the end of the phase, each time an attack targets your unit, subtract 1 from the Damage characteristic of that attack.", restrictions: "" },
                    { name: "Close-range Shoot-out", cp: 1, type: "Battle Tactic", when: "Your Shooting phase.", target: "One GENESTEALER CULTS MOUNTED or GENESTEALER CULTS VEHICLE unit from your army that has not been selected to shoot this phase.", effect: "Until the end of the phase, ranged weapons equipped by models in your unit have the [Lethal Hits] ability while targeting an enemy unit within 18\".", restrictions: "" },
                    { name: "Rapid Feint", cp: 1, type: "Strategic Ploy", when: "Your opponent's Movement phase, just after an enemy unit ends a Normal, Advance or Fall Back move.", target: "One ACHILLES RIDGERUNNERS or ATALAN JACKALS unit from your army that is within 9\" of that enemy unit.", effect: "Your unit can make a Normal move of up to 6\".", restrictions: "" },
                    { name: "Deft Manoeuvring", cp: 1, type: "Battle Tactic", when: "Your opponent's Shooting phase, just after an enemy unit has selected its targets.", target: "One ACHILLES RIDGERUNNERS or ATALAN JACKALS unit from your army that was selected as the target of one or more of the attacking unit's attacks.", effect: "Until the end of the phase, models in your unit have a 4+ invulnerable save.", restrictions: "" },
                    { name: "Encircling the Prey", cp: 1, type: "Strategic Ploy", when: "End of your opponent's Fight phase.", target: "One GENESTEALER CULTS MOUNTED or GENESTEALER CULTS VEHICLE unit from your army that is not within Engagement Range of one or more enemy units and is wholly within 9\" of one or more battlefield edges.", effect: "Remove your unit from the battlefield and place it into Strategic Reserves.", restrictions: "" },
                ]
            },
            {
                name: "Brood Brother Auxilia",
                flavour: "",
                rule: { name: "Integrated Tactics", flavour: "Coordinating with their militant allies via stolen vox equipment or signalling with cult icons, the insidious broodkin engulfs the hated foe in overlapping fields of fire.", text: "Each time an ASTRA MILITARUM unit from your army (see below) is selected to shoot, you can select one enemy unit within 18\" of and visible to that unit. If you do, until the end of the phase, models in that ASTRA MILITARUM unit can only target that enemy unit (and only if it is an eligible target) and that enemy unit is caught in overlapping fire. While an enemy unit is caught in overlapping fire, each time a GENESTEALER CULTS model from your army targets that enemy unit with a ranged attack, add 1 to the Hit roll.", restrictions: "BROOD BROTHERS: You can include ASTRA MILITARUM units in your army, even though they do not have the GENESTEALER CULTS Faction keyword. The combined points cost of such units you can include in your army is:\n- Incursion: Up to 500 pts\n- Strike Force: Up to 1000 pts\n- Onslaught: Up to 1500 pts\nA GENESTEALER CULTS model must be your WARLORD, and ASTRA MILITARUM models from your army lose the Voice of Command ability if they have it. You cannot include units with any of the following keywords in your army using this rule: AIRCRAFT; COMMISSAR; EPIC HERO; MILITARUM TEMPESTUS; OGRYN; RATLING; TECH-PRIEST ENGINSEER; MINISTORUM PRIEST." },
                enhancements: [
                    { name: "Martial Espionage", cost: 25, restriction: "GENESTEALER CULTS INFANTRY model only.", text: "With access to Imperial data-logs and servo-scry records, this cult leader feeds the stolen information to their professional allies, enabling them to immediately exploit weak points in the enemy.\n\nOnce per turn, when a friendly ASTRA MILITARUM INFANTRY or ASTRA MILITARUM MOUNTED unit within 9\" of the bearer is selected to shoot, the bearer can use this Enhancement. If it does, until the end of the phase, improve the Armour Penetration characteristic of ranged weapons equipped by models in that unit by 1." },
                    { name: "Adaptive Reprisal", cost: 15, restriction: "GENESTEALER CULTS INFANTRY model only.", text: "Whether through intensive cross-training with tainted officers or some symbiotic neuro-mimicry, this insurrectionist is adept in daring tactical manoeuvres.\n\nOnce per turn, you can target a friendly GENESTEALER CULTS unit within 9\" of the bearer with the Heroic Intervention Stratagem for 0CP." },
                    { name: "The Hero Returned", cost: 20, restriction: "GENESTEALER CULTS INFANTRY model only.", text: "Hidden for years within a xeno-tainted regiment, this feted commander has returned to lead their guerrillas, donning once more the garb of the insurgent. Respected with reverent awe, they instil a disciplined professionalism and focus in their cult comrades.\n\nImprove the Leadership and Objective Control characteristics of models in the bearer's unit by 1." },
                    { name: "Firepoint Commander", cost: 10, restriction: "GENESTEALER CULTS INFANTRY model only.", text: "Taking a righteous vindication in turning the oppressor's tactics against them, this war leader coordinates their broodkin's last-second fire into effective volleys to drive back the foe.\n\nEach time you target the bearer's unit with the Fire Overwatch Stratagem, while resolving that Stratagem, hits are scored on unmodified Hit rolls of 5+." },
                ],
                stratagems: [
                    { name: "In the Shadow of Iron", cp: 1, type: "Strategic Ploy", when: "Any phase, just after an enemy unit ends a move within 9\" of one or more of your Cult Ambush markers.", target: "One ASTRA MILITARUM VEHICLE unit from your army.", effect: "Select one of those Cult Ambush markers. You can set up that Cult Ambush marker anywhere on the battlefield that is more than 9\" horizontally away from all enemy units and wholly within 6\" of your unit.", restrictions: "" },
                    { name: "Regimental Reinforcements", cp: 1, type: "Strategic Ploy", when: "Your opponent's Shooting phase or the Fight phase, just after an ASTRA MILITARUM INFANTRY REGIMENT unit from your army (excluding ARTILLERY and CHARACTER units) is destroyed.", target: "That INFANTRY unit. You can use this Stratagem on that unit even though it was just destroyed.", effect: "Roll one D6: on a 3+, place one Cult Ambush marker anywhere on the battlefield that is more than 9\" horizontally away from all enemy units (if this is not possible, no marker is placed) and add a new unit to your army identical to your destroyed unit, in Cult Ambush, at its Starting Strength, with all of its wounds remaining and any [One Shot] weapons those models are equipped with considered as not having been shot.", restrictions: "You can only use this Stratagem once per battle." },
                    { name: "Suppress and Overwhelm", cp: 1, type: "Strategic Ploy", when: "Your Shooting phase, just after an ASTRA MILITARUM unit from your army has shot.", target: "That ASTRA MILITARUM unit.", effect: "Select one enemy unit hit by one or more of those attacks. Until the end of the turn, that enemy unit cannot be targeted with the Fire Overwatch Stratagem and each time a GENESTEALER CULTS unit from your army selects that enemy unit as a target of a charge, you can re-roll the Charge roll.", restrictions: "" },
                    { name: "Acceptable Losses", cp: 2, type: "Strategic Ploy", when: "Your Shooting phase.", target: "One ASTRA MILITARUM unit from your army.", effect: "Select one enemy unit within Engagement Range of one or more GENESTEALER CULTS units from your army. Until the end of the phase, your unit can make ranged attacks that target that enemy unit. If it does, after it has resolved those attacks, roll one D6 for each of those GENESTEALER CULTS units: on a 5+, the unit being rolled for suffers D3+1 mortal wounds.", restrictions: "" },
                    { name: "Symbiotic Destruction", cp: 1, type: "Battle Tactic", when: "Your Shooting phase.", target: "One ASTRA MILITARUM and one GENESTEALER CULTS unit from your army that have not been selected to shoot this phase.", effect: "Select one enemy unit that is visible to both of those selected units and within range of at least one ranged weapon from each of those units. Until the end of the phase, models in those units can only make attacks that target that enemy unit (and only if it is an eligible target). When doing so, each time such a model makes an attack, re-roll a Wound roll of 1.", restrictions: "" },
                    { name: "A Dark Network", cp: 1, type: "Strategic Ploy", when: "Reinforcements step of your opponent's Movement phase, just after an enemy unit is set up on the battlefield from Reserves.", target: "One ASTRA MILITARUM or GENESTEALER CULTS unit from your army (excluding MONSTERS and VEHICLES) within 12\" of that enemy unit.", effect: "Your unit can make a Normal move of up to 6\".", restrictions: "" },
                ]
            },
            {
                name: "Final Day",
                flavour: "Every Genestealer Cultist wishes to witness the Star Children's arrival and ascend to join them in blessed oneness. They believe this will be a transcendent experience, a sublime reward for their devotion. The reality is altogether more hideous. As the Tyranids approach through the void, the utterly alien Hive Mind assimilates the more nuanced Broodmind of the cult. Many faithful die from psionic shock. Others are freed from Tyranid mind control only to go mad with horror as the truth is revealed. The rest become short-lived puppets for the first waves of Tyranid vanguard organisms descending on their world. Exerting its will to make them fight harder and move faster, the Hive Mind swiftly burns out these surviving faithful, harvesting each flicker of bioenergy to reinvigorate its more valuable Tyranid organisms.",
                rule: { name: "Psionic Parasitism", flavour: "With each tug on the synaptic leash, the Hive Mind drains more of its hapless worshippers.", text: "At the end of your Movement phase, for each TYRANIDS SYNAPSE unit from your army, you can select one friendly GENESTEALER CULTS unit (excluding PURESTRAIN GENESTEALER and PATRIARCH units) and one friendly TYRANIDS unit each within 9\" of and visible to that SYNAPSE unit. If you do, that GENESTEALER CULTS unit from your army suffers D3+1 mortal wounds and one model in the selected TYRANIDS unit regains up to that many lost wounds and until the start of your next Movement phase, each time a model in the selected TYRANIDS unit makes an attack, add 1 to the Hit roll.\n\nTYRANIDS units from your army have the following ability:\nCatalyst (Aura): While an enemy unit is within 6\" of this unit, each time a friendly GENESTEALER CULTS unit makes an attack that targets that enemy unit, add 1 to the Hit roll.", restrictions: "The Star Children's Blessings: You can include TYRANIDS VANGUARD INVADER units (excluding AIRCRAFT, BROODLORD and GENESTEALERS units) in your army. The combined points cost of such units depends on your battle size:\n- Incursion: Up to 500 pts\n- Strike Force: Up to 1000 pts\n- Onslaught: Up to 1500 pts\nNo TYRANIDS models from your army can be your WARLORD." },
                enhancements: [
                    { name: "Synaptic Auger", cost: 15, restriction: "TYRANIDS model only.", text: "Invisible psionic tendrils drift around this bioform's cranium, stabbing out to force alien demands into fragmenting hybrid minds and suck the bioenergy from them in merciless draughts.\n\nEach time the bearer would regain one or more lost wounds from the Psionic Parasitism Detachment rule, it regains up to twice that number of lost wounds instead." },
                    { name: "Enraptured Damnation", cost: 10, restriction: "GENESTEALER CULTS model only.", text: "Though hollowing them out like acid, the insidious power of the Hive Mind blazes from this delirious fanatic and forces their enemies to recoil.\n\nEnemy units cannot use the Fire Overwatch Stratagem to shoot at the bearer's unit." },
                    { name: "Vanguard Tyrant", cost: 25, restriction: "WINGED HIVE TYRANT model only.", text: "Adapted by the Hive Mind to lead the first invasion swarms, this leader organism's bioweapons emphasise vicious shock assault and maximum bloodshed.\n\nImprove the Strength and Armour Penetration characteristics of melee weapons equipped by the bearer by 1." },
                    { name: "Inhuman Integration", cost: 20, restriction: "GENESTEALER CULTS model only.", text: "This cult leader's powerful psyche has withstood Hive Mind integration better than most, at least for now. It even relays a crude approximation of synaptic signals to their underlings. Of course, this only makes them and their followers more selflessly obedient drones.\n\nWeapons equipped by models in the bearer's unit have the [Sustained Hits 1] ability while targeting an enemy unit within 6\" of one or more friendly TYRANIDS units." },
                ],
                stratagems: [
                    { name: "Hyperferocity", cp: 1, type: "Battle Tactic", when: "Fight phase.", target: "One GENESTEALER CULTS unit from your army that has not been selected to fight this phase.", effect: "Until the end of the phase, each time a model in your unit makes an attack that targets an enemy unit, re-roll a Wound roll of 1. If one or more friendly TYRANIDS units are within 6\" of that enemy unit, you can re-roll the Wound roll instead.", restrictions: "" },
                    { name: "Psi Surge", cp: 1, type: "Strategic Ploy", when: "Start of any phase.", target: "One TYRANIDS unit from your army.", effect: "Until the start of your next Command phase, increase the range of your unit's Catalyst ability by 3\".", restrictions: "Each time you use this Stratagem, until the end of your next Command phase, you cannot use this Stratagem again." },
                    { name: "Avenge the Star Children", cp: 1, type: "Battle Tactic", when: "Your opponent's Shooting phase or the Fight phase, just after an enemy unit has shot or fought.", target: "One TYRANIDS CHARACTER unit from your army that was destroyed by that enemy unit this phase. You can use this Stratagem on that unit even though it was just destroyed.", effect: "Until the end of the battle, each time a GENESTEALER CULTS model from your army makes an attack that targets that enemy unit, add 1 to the Hit roll and add 1 to the Wound roll.", restrictions: "" },
                    { name: "Divine Imperative", cp: 1, type: "Battle Tactic", when: "Your Charge phase.", target: "One GENESTEALER CULTS unit from your army that has not declared a charge this phase.", effect: "Select one enemy unit within Engagement Range of one or more TYRANIDS units from your army. Until the end of the phase, each time your GENESTEALER CULTS unit declares a charge, if that enemy unit is one of the targets of that charge, add 1 to Charge rolls made for your unit and you can re-roll the Charge roll.", restrictions: "" },
                    { name: "Darting Attacks", cp: 1, type: "Strategic Ploy", when: "Your Shooting phase or your Charge phase.", target: "One TYRANIDS unit from your army.", effect: "Until the end of the phase, your unit is eligible to shoot and declare a charge in a turn in which it Fell Back.", restrictions: "" },
                    { name: "Resistance Tunnels", cp: 1, type: "Strategic Ploy", when: "End of your opponent's Fight phase.", target: "One GENESTEALER CULTS or TYRANIDS unit from your army that is not within Engagement Range of one or more enemy units.", effect: "Remove your unit from the battlefield and place it into Strategic Reserves.", restrictions: "" },
                ]
            }
        ],
        units: [
                {
                        "id": "gsc-abominant",
                        "name": "Abominant",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 85
                                }
                        ],
                        "stats": {
                                "m": "6\"",
                                "t": 6,
                                "sv": "5+",
                                "w": 5,
                                "ld": "7+",
                                "oc": 1
                        },
                        "weapons": {
                                "ranged": [],
                                "melee": [
                                        {
                                                "name": "Power sledgehammer",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "3+",
                                                "s": 12,
                                                "ap": -2,
                                                "d": "D6+1",
                                                "keywords": []
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Deep Strike",
                                        "Feel No Pain 5+",
                                        "Leader"
                                ],
                                "faction": [],
                                "wargear": [],
                                "other": [
                                        "The Chosen One",
                                        "Regenerating Gene-mass"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Great Devourer",
                                "Abominant"
                        ],
                        "factionKeywords": [
                                "Genestealer Cults"
                        ],
                        "leaderText": "This model can be attached to the following unit: Aberrants.",
                        "compositionText": "1 Abominant This model is equipped with: power sledgehammer."
                },
                {
                        "id": "gsc-acolyte-iconward",
                        "name": "Acolyte Iconward",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 50
                                }
                        ],
                        "stats": {
                                "m": "6\"",
                                "t": 4,
                                "sv": "5+",
                                "w": 3,
                                "ld": "6+",
                                "oc": 1
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Autopistol",
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
                                                "name": "Cult claws",
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
                                        "Deep Strike",
                                        "Leader",
                                        "Scouts 6\""
                                ],
                                "faction": [],
                                "wargear": [],
                                "other": [
                                        "Nexus of Devotion",
                                        "Summon the Cult"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Grenades",
                                "Great Devourer",
                                "Acolyte Iconward"
                        ],
                        "factionKeywords": [
                                "Genestealer Cults"
                        ],
                        "leaderText": "This model can be attached to the following units: Acolyte Hybrids with Autopistols; Acolyte Hybrids with Hand Flamers; Hybrid Metamorphs; Neophyte Hybrids.",
                        "compositionText": "1 Acolyte Iconward This model is equipped with: autopistol; cult claws."
                },
                {
                        "id": "gsc-benefictus",
                        "name": "Benefictus",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 70
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
                        "invuln": "5+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Psionic Cascade - witchfire",
                                                "range": "18\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 12,
                                                "ap": -3,
                                                "d": "D6+1",
                                                "keywords": [
                                                        "Ignores Cover",
                                                        "Psychic"
                                                ]
                                        },
                                        {
                                                "name": "Psionic Cascade - focused witchfire",
                                                "range": "18\"",
                                                "a": 2,
                                                "bs": "3+",
                                                "s": 12,
                                                "ap": -3,
                                                "d": "D6+1",
                                                "keywords": [
                                                        "Hazardous",
                                                        "Ignores Cover",
                                                        "Psychic"
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
                                "core": [
                                        "Deep Strike",
                                        "Leader"
                                ],
                                "faction": [],
                                "wargear": [],
                                "other": [
                                        "Bio-horror Disruption",
                                        "Psionic Shield"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Psyker",
                                "Great Devourer",
                                "Benefictus"
                        ],
                        "factionKeywords": [
                                "Genestealer Cults"
                        ],
                        "leaderText": "This model can be attached to the following units: Acolyte Hybrids with Autopistols; Acolyte Hybrids with Hand Flamers; Hybrid Metamorphs; Neophyte Hybrids.",
                        "compositionText": "1 Benefictus This model is equipped with: Psionic Cascade; close combat weapon."
                },
                {
                        "id": "gsc-biophagus",
                        "name": "Biophagus",
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
                                "ld": "7+",
                                "oc": 1
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Autopistol",
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
                                                "name": "Chemical vials",
                                                "range": "6\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 1,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Anti-Infantry 2+"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Injector goad",
                                                "range": "Melee",
                                                "a": 1,
                                                "ws": "3+",
                                                "s": 2,
                                                "ap": 0,
                                                "d": "D3",
                                                "keywords": [
                                                        "Anti-Infantry 2+"
                                                ]
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Deep Strike",
                                        "Leader"
                                ],
                                "faction": [],
                                "wargear": [],
                                "other": [
                                        "Twisted Science",
                                        "Biological Warfare",
                                        "Alchemicus Familiar",
                                        "Designer’s Note"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Great Devourer",
                                "Biophagus"
                        ],
                        "factionKeywords": [
                                "Genestealer Cults"
                        ],
                        "leaderText": "This model can be attached to the following units: Aberrants; Acolyte Hybrids with Autopistols; Acolyte Hybrids with Hand Flamers; Hybrid Metamorphs; Neophyte Hybrids.",
                        "compositionText": "1 Biophagus This model is equipped with: autopistol; chemical vials; injector goad, alchemicus familiar."
                },
                {
                        "id": "gsc-clamavus",
                        "name": "Clamavus",
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
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Autopistol",
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
                                "core": [
                                        "Deep Strike",
                                        "Leader"
                                ],
                                "faction": [],
                                "wargear": [],
                                "other": [
                                        "Voice of New Truths",
                                        "Scrambler Array"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Great Devourer",
                                "Clamavus"
                        ],
                        "factionKeywords": [
                                "Genestealer Cults"
                        ],
                        "leaderText": "This model can be attached to the following units: Acolyte Hybrids with Autopistols; Acolyte Hybrids with Hand Flamers; Hybrid Metamorphs; Neophyte Hybrids.",
                        "compositionText": "1 Clamavus This model is equipped with: autopistol; close combat weapon."
                },
                {
                        "id": "gsc-jackal-alphus",
                        "name": "Jackal Alphus",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 55
                                }
                        ],
                        "stats": {
                                "m": "12\"",
                                "t": 4,
                                "sv": "5+",
                                "w": 4,
                                "ld": "7+",
                                "oc": 1
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Autopistol",
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
                                                "name": "Cult sniper rifle",
                                                "range": "36\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 5,
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
                                                "s": 3,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": []
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Leader",
                                        "Scouts 9\"",
                                        "Stealth"
                                ],
                                "faction": [],
                                "wargear": [],
                                "other": [
                                        "Priority Target",
                                        "Master Outrider"
                                ]
                        },
                        "keywords": [
                                "Mounted",
                                "Character",
                                "Grenades",
                                "Great Devourer",
                                "Jackal Alphus"
                        ],
                        "factionKeywords": [
                                "Genestealer Cults"
                        ],
                        "leaderText": "This model can be attached to the following unit: Atalan Jackals.",
                        "compositionText": "1 Jackal Alphus This model is equipped with: autopistol; cult sniper rifle; close combat weapon."
                },
                {
                        "id": "gsc-kelermorph",
                        "name": "Kelermorph",
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
                        "invuln": "5+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Liberator autostubs",
                                                "range": "12\"",
                                                "a": 6,
                                                "bs": "2+",
                                                "s": 6,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": [
                                                        "Devastating Wounds",
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
                                        "Lone Operative"
                                ],
                                "faction": [],
                                "wargear": [],
                                "other": [
                                        "Heroic Fusillade",
                                        "Hypersensory Abilities"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Great Devourer",
                                "Kelermorph"
                        ],
                        "factionKeywords": [
                                "Genestealer Cults"
                        ],
                        "compositionText": "1 Kelermorph This model is equipped with: liberator autostubs; close combat weapon."
                },
                {
                        "id": "gsc-locus",
                        "name": "Locus",
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
                                "sv": "5+",
                                "w": 3,
                                "ld": "7+",
                                "oc": 1
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [],
                                "melee": [
                                        {
                                                "name": "Locus blades",
                                                "range": "Melee",
                                                "a": 5,
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
                                        "Deep Strike",
                                        "Fights First",
                                        "Leader"
                                ],
                                "faction": [],
                                "wargear": [],
                                "other": [
                                        "Sudden Assault",
                                        "Bodyguard"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Great Devourer",
                                "Locus"
                        ],
                        "factionKeywords": [
                                "Genestealer Cults"
                        ],
                        "leaderText": "This model can be attached to the following units: Acolyte Hybrids with Autopistols; Acolyte Hybrids with Hand Flamers; Hybrid Metamorphs; Neophyte Hybrids.",
                        "compositionText": "1 Locus This model is equipped with: Locus blades."
                },
                {
                        "id": "gsc-magus",
                        "name": "Magus",
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
                                "w": 4,
                                "ld": "6+",
                                "oc": 1
                        },
                        "invuln": "5+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Autopistol",
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
                                                "name": "Magus stave",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "3+",
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
                                        "Deep Strike",
                                        "Leader"
                                ],
                                "faction": [],
                                "wargear": [],
                                "other": [
                                        "Spiritual Leader",
                                        "Mind Control",
                                        "Psychic Familiar",
                                        "Designer’s Note"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Psyker",
                                "Great Devourer",
                                "Magus"
                        ],
                        "factionKeywords": [
                                "Genestealer Cults"
                        ],
                        "leaderText": "This model can be attached to the following units: Acolyte Hybrids with Autopistols; Acolyte Hybrids with Hand Flamers; Hybrid Metamorphs; Neophyte Hybrids.",
                        "compositionText": "1 Magus This model is equipped with: autopistol; Magus stave."
                },
                {
                        "id": "gsc-nexos",
                        "name": "Nexos",
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
                                                "name": "Autopistol",
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
                                "core": [
                                        "Deep Strike",
                                        "Leader"
                                ],
                                "faction": [],
                                "wargear": [],
                                "other": [
                                        "Battlefield Analysis",
                                        "Cult Infiltration"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Great Devourer",
                                "Nexos"
                        ],
                        "factionKeywords": [
                                "Genestealer Cults"
                        ],
                        "leaderText": "This model can be attached to the following units: Acolyte Hybrids with Autopistols; Acolyte Hybrids with Hand Flamers; Hybrid Metamorphs; Neophyte Hybrids.",
                        "compositionText": "1 Nexos This model is equipped with: autopistol; close combat weapon."
                },
                {
                        "id": "gsc-patriarch",
                        "name": "Patriarch",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 75
                                }
                        ],
                        "stats": {
                                "m": "8\"",
                                "t": 5,
                                "sv": "4+",
                                "w": 6,
                                "ld": "6+",
                                "oc": 1
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [],
                                "melee": [
                                        {
                                                "name": "Patriarch’s claws",
                                                "range": "Melee",
                                                "a": 5,
                                                "ws": "2+",
                                                "s": 6,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Devastating Wounds",
                                                        "Twin-Linked"
                                                ]
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Deep Strike",
                                        "Infiltrators",
                                        "Leader"
                                ],
                                "faction": [],
                                "wargear": [],
                                "other": [
                                        "Might From Beyond",
                                        "Cosmic Horror",
                                        "Psychic Familiar",
                                        "Designer’s Note"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Psyker",
                                "Great Devourer",
                                "Patriarch"
                        ],
                        "factionKeywords": [
                                "Genestealer Cults"
                        ],
                        "leaderText": "This model can be attached to the following unit: Purestrain Genestealers.",
                        "compositionText": "1 Patriarch This model is equipped with: Patriarch’s claws."
                },
                {
                        "id": "gsc-primus",
                        "name": "Primus",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 70
                                }
                        ],
                        "stats": {
                                "m": "6\"",
                                "t": 3,
                                "sv": "5+",
                                "w": 4,
                                "ld": "6+",
                                "oc": 1
                        },
                        "invuln": "5+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Scoped needle pistol",
                                                "range": "18\"",
                                                "a": 1,
                                                "bs": "2+",
                                                "s": 1,
                                                "ap": 0,
                                                "d": "D3",
                                                "keywords": [
                                                        "Anti-Infantry 2+",
                                                        "Ignores Cover",
                                                        "Pistol"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Cult bonesword",
                                                "range": "Melee",
                                                "a": 5,
                                                "ws": "2+",
                                                "s": 5,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Toxin injector claw",
                                                "range": "Melee",
                                                "a": 2,
                                                "ws": "2+",
                                                "s": 2,
                                                "ap": 0,
                                                "d": "D3",
                                                "keywords": [
                                                        "Anti-Infantry 2+",
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
                                "faction": [],
                                "wargear": [],
                                "other": [
                                        "Cult Demagogue",
                                        "Decoys and Misdirection"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Great Devourer",
                                "Primus"
                        ],
                        "factionKeywords": [
                                "Genestealer Cults"
                        ],
                        "leaderText": "This model can be attached to the following units: Acolyte Hybrids with Autopistols; Acolyte Hybrids with Hand Flamers; Hybrid Metamorphs; Neophyte Hybrids.",
                        "compositionText": "1 Primus This model is equipped with: scoped needle pistol; cult bonesword; toxin injector claw."
                },
                {
                        "id": "gsc-reductus-saboteur",
                        "name": "Reductus Saboteur",
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
                                "sv": "5+",
                                "w": 3,
                                "ld": "7+",
                                "oc": 1
                        },
                        "invuln": "5+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Autopistol",
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
                                                "name": "Demolition charges",
                                                "range": "8\"",
                                                "a": "D6",
                                                "bs": "3+",
                                                "s": 9,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Assault",
                                                        "Blast",
                                                        "One Shot"
                                                ]
                                        },
                                        {
                                                "name": "Remote explosives",
                                                "range": "24\"",
                                                "a": "D6+3",
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
                                "core": [
                                        "Deep Strike",
                                        "Infiltrators",
                                        "Lone Operative",
                                        "Stealth"
                                ],
                                "faction": [],
                                "wargear": [],
                                "other": [
                                        "Primed and Ready",
                                        "Planted Explosives",
                                        "Designer’s Note"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Grenades",
                                "Great Devourer",
                                "Reductus Saboteur"
                        ],
                        "factionKeywords": [
                                "Genestealer Cults"
                        ],
                        "compositionText": "1 Reductus Saboteur This model is equipped with: autopistol; demolition charges; remote explosives; close combat weapon."
                },
                {
                        "id": "gsc-sanctus",
                        "name": "Sanctus",
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
                                "ld": "7+",
                                "oc": 1
                        },
                        "invuln": "5+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Cult sniper rifle",
                                                "range": "36\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 7,
                                                "ap": -2,
                                                "d": 3,
                                                "keywords": [
                                                        "Anti-Psyker 2+",
                                                        "Heavy",
                                                        "Precision"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Sanctus bio-dagger",
                                                "range": "Melee",
                                                "a": 6,
                                                "ws": "2+",
                                                "s": 3,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Anti-Infantry 3+",
                                                        "Precision"
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
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Deep Strike",
                                        "Infiltrators",
                                        "Lone Operative",
                                        "Stealth"
                                ],
                                "faction": [],
                                "wargear": [],
                                "other": [
                                        "Creeping Shadow",
                                        "Cloaked Assassin",
                                        "Psychic Spoor"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Great Devourer",
                                "Sanctus"
                        ],
                        "factionKeywords": [
                                "Genestealer Cults"
                        ],
                        "compositionText": "1 Sanctus This model is equipped with: Sanctus bio-dagger."
                },
                {
                        "id": "gsc-acolyte-hybrids-with-autopistols",
                        "name": "Acolyte Hybrids with Autopistols",
                        "role": "battleline",
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
                                "m": "6\"",
                                "t": 4,
                                "sv": "5+",
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
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Cult claws and knife",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "3+",
                                                "s": 4,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Heavy mining tool",
                                                "range": "Melee",
                                                "a": 2,
                                                "ws": "3+",
                                                "s": 5,
                                                "ap": -2,
                                                "d": 3,
                                                "keywords": [
                                                        "Anti-Vehicle 4+"
                                                ]
                                        },
                                        {
                                                "name": "Leader’s bio-weapons",
                                                "range": "Melee",
                                                "a": 5,
                                                "ws": "3+",
                                                "s": 5,
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
                                        "Cult Ambush"
                                ],
                                "wargear": [],
                                "other": [
                                        "Claimed for the Cult",
                                        "Cult Icon"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Battleline",
                                "Grenades",
                                "Great Devourer",
                                "Acolyte Hybrids",
                                "Acolyte Hybrids With Autopistols"
                        ],
                        "factionKeywords": [
                                "Genestealer Cults"
                        ],
                        "compositionText": "1 Acolyte Leader 4-9 Acolyte Hybrids Every model is equipped with: autopistol; cult claws and knife."
                },
                {
                        "id": "gsc-acolyte-hybrids-with-hand-flamers",
                        "name": "Acolyte Hybrids with Hand Flamers",
                        "role": "battleline",
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
                                "t": 4,
                                "sv": "5+",
                                "w": 1,
                                "ld": "7+",
                                "oc": 2
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Demolition charges",
                                                "range": "8\"",
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
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Cult claws and knife",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "3+",
                                                "s": 4,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Leader’s bio-weapons",
                                                "range": "Melee",
                                                "a": 5,
                                                "ws": "3+",
                                                "s": 5,
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
                                        "Cult Ambush"
                                ],
                                "wargear": [],
                                "other": [
                                        "Industrialised Destruction",
                                        "Cult Icon"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Battleline",
                                "Grenades",
                                "Great Devourer",
                                "Acolyte Hybrids",
                                "Acolyte Hybrids With Hand Flamers"
                        ],
                        "factionKeywords": [
                                "Genestealer Cults"
                        ],
                        "compositionText": "1 Acolyte Leader 4-9 Acolyte Hybrids Every model is equipped with: hand flamer; cult claws and knife."
                },
                {
                        "id": "gsc-neophyte-hybrids",
                        "name": "Neophyte Hybrids",
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
                                                "name": "Anointed pistol",
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
                                                "name": "Hybrid firearm",
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
                                                "name": "Mining laser",
                                                "range": "24\"",
                                                "a": 1,
                                                "bs": "5+",
                                                "s": 10,
                                                "ap": -3,
                                                "d": "D6+1",
                                                "keywords": [
                                                        "Heavy"
                                                ]
                                        },
                                        {
                                                "name": "Seismic cannon",
                                                "range": "24\"",
                                                "a": 2,
                                                "bs": "5+",
                                                "s": 6,
                                                "ap": -1,
                                                "d": "D3",
                                                "keywords": [
                                                        "Heavy",
                                                        "Rapid Fire 2"
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
                                                        "Devastating Wounds",
                                                        "Torrent"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Chainsword",
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
                                                "a": 1,
                                                "ws": "4+",
                                                "s": 4,
                                                "ap": -2,
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
                                "core": [
                                        "Deep Strike"
                                ],
                                "faction": [
                                        "Cult Ambush"
                                ],
                                "wargear": [],
                                "other": [
                                        "A Plan Generations in the Making",
                                        "Cult Icon"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Battleline",
                                "Grenades",
                                "Great Devourer",
                                "Neophyte Hybrids"
                        ],
                        "factionKeywords": [
                                "Genestealer Cults"
                        ],
                        "compositionText": "1 Neophyte Leader 9-19 Neophyte Hybrids Every model is equipped with: autopistol; Hybrid firearm; close combat weapon."
                },
                {
                        "id": "gsc-goliath-truck",
                        "name": "Goliath Truck",
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
                                "ld": "7+",
                                "oc": 2
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Demolition charge cache",
                                                "range": "8\"",
                                                "a": "D6",
                                                "bs": "5+",
                                                "s": 9,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Assault",
                                                        "Blast",
                                                        "Hazardous"
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
                                        "Firing Deck 6"
                                ],
                                "faction": [],
                                "wargear": [],
                                "other": [
                                        "Fire Support"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Transport",
                                "Dedicated Transport",
                                "Great Devourer",
                                "Goliath Truck"
                        ],
                        "factionKeywords": [
                                "Genestealer Cults"
                        ],
                        "compositionText": "1 Goliath Truck This model is equipped with: heavy stubber; twin autocannon; demolition charge cache; armoured hull. TRANSPORT This model has a transport capacity of 12 GENESTEALER CULTS INFANTRY models."
                },
                {
                        "id": "gsc-aberrants",
                        "name": "Aberrants",
                        "role": "infantry",
                        "points": [
                                {
                                        "models": 5,
                                        "cost": 135
                                },
                                {
                                        "models": 10,
                                        "cost": 300
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
                                "ranged": [],
                                "melee": [
                                        {
                                                "name": "Aberrant weapons",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "3+",
                                                "s": 7,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": []
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Deep Strike",
                                        "Feel No Pain 5+"
                                ],
                                "faction": [
                                        "Cult Ambush"
                                ],
                                "wargear": [],
                                "other": [
                                        "Hulking Bodyguards"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Great Devourer",
                                "Aberrants"
                        ],
                        "factionKeywords": [
                                "Genestealer Cults"
                        ],
                        "compositionText": "1 Aberrant Hypermorph 4-9 Aberrants Every Aberrant is equipped with: Aberrant weapons."
                },
                {
                        "id": "gsc-achilles-ridgerunners",
                        "name": "Achilles Ridgerunners",
                        "role": "vehicle",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 95
                                },
                                {
                                        "models": 2,
                                        "cost": 170
                                }
                        ],
                        "stats": {
                                "m": "12\"",
                                "t": 7,
                                "sv": "3+",
                                "w": 8,
                                "ld": "7+",
                                "oc": 3
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Achilles missile launcher",
                                                "range": "36\"",
                                                "a": 3,
                                                "bs": "4+",
                                                "s": 9,
                                                "ap": -2,
                                                "d": 3,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Heavy mining laser",
                                                "range": "36\"",
                                                "a": "D3",
                                                "bs": "4+",
                                                "s": 12,
                                                "ap": -3,
                                                "d": "D6+1",
                                                "keywords": [
                                                        "Blast"
                                                ]
                                        },
                                        {
                                                "name": "Heavy mortar",
                                                "range": "48\"",
                                                "a": "D6+3",
                                                "bs": "4+",
                                                "s": 6,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Blast",
                                                        "Indirect Fire"
                                                ]
                                        },
                                        {
                                                "name": "Twin heavy stubber",
                                                "range": "36\"",
                                                "a": 3,
                                                "bs": "4+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Twin-Linked",
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
                                        "Scouts 9\""
                                ],
                                "faction": [],
                                "wargear": [],
                                "other": [
                                        "Crossfire",
                                        "Flare Launcher",
                                        "Spotter",
                                        "Survey Augur"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Great Devourer",
                                "Achilles Ridgerunners"
                        ],
                        "factionKeywords": [
                                "Genestealer Cults"
                        ],
                        "compositionText": "1-2 Achilles Ridgerunners Every model is equipped with: heavy mining laser; twin heavy stubbers; armoured hull; flare launcher."
                },
                {
                        "id": "gsc-atalan-jackals",
                        "name": "Atalan Jackals",
                        "role": "mounted",
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
                                "m": "12\"",
                                "t": 4,
                                "sv": "5+",
                                "w": 2,
                                "ld": "7+",
                                "oc": 1
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Atalan incinerator",
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
                                                "name": "Atalan small arms",
                                                "range": "12\"",
                                                "a": 2,
                                                "bs": "4+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Pistol"
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
                                                "name": "Mining laser",
                                                "range": "24\"",
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
                                                "name": "Atalan power weapon",
                                                "range": "Melee",
                                                "a": 2,
                                                "ws": "4+",
                                                "s": 4,
                                                "ap": -2,
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
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Scouts 9\"",
                                        "Stealth"
                                ],
                                "faction": [
                                        "Cult Ambush"
                                ],
                                "wargear": [],
                                "other": [
                                        "Outrider Gangs",
                                        "Demolition Run"
                                ]
                        },
                        "keywords": [
                                "Mounted",
                                "Grenades",
                                "Great Devourer",
                                "Atalan Jackals"
                        ],
                        "factionKeywords": [
                                "Genestealer Cults"
                        ],
                        "compositionText": "4-8 Atalan Jackals 1-2 Atalan Wolfquads* * This unit can only contain 2 Atalan Wolfquads if it also contains 8 Atalan Jackals. Every Atalan Jackal is equipped with: Atalan small arms; close combat weapon. Every Atalan Wolfquad is equipped with: Atalan small arms; heavy stubber; close combat weapon."
                },
                {
                        "id": "gsc-goliath-rockgrinder",
                        "name": "Goliath Rockgrinder",
                        "role": "vehicle",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 120
                                }
                        ],
                        "stats": {
                                "m": "12\"",
                                "t": 10,
                                "sv": "3+",
                                "w": 10,
                                "ld": "7+",
                                "oc": 3
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Clearance incinerator",
                                                "range": "12\"",
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
                                                "name": "Demolition charge cache",
                                                "range": "8\"",
                                                "a": "D6",
                                                "bs": "5+",
                                                "s": 9,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Assault",
                                                        "Blast",
                                                        "Hazardous"
                                                ]
                                        },
                                        {
                                                "name": "Heavy mining laser",
                                                "range": "36\"",
                                                "a": "D3",
                                                "bs": "4+",
                                                "s": 12,
                                                "ap": -3,
                                                "d": "D6+1",
                                                "keywords": [
                                                        "Blast"
                                                ]
                                        },
                                        {
                                                "name": "Heavy seismic cannon",
                                                "range": "24\"",
                                                "a": 4,
                                                "bs": "4+",
                                                "s": 8,
                                                "ap": -2,
                                                "d": "D3",
                                                "keywords": [
                                                        "Rapid Fire 2"
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
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Drilldozer blade",
                                                "range": "Melee",
                                                "a": 8,
                                                "ws": "3+",
                                                "s": 10,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": []
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Deadly Demise D3",
                                        "Firing Deck 6"
                                ],
                                "faction": [],
                                "wargear": [],
                                "other": [
                                        "Grinding Clearance"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Transport",
                                "Great Devourer",
                                "Goliath Rockgrinder"
                        ],
                        "factionKeywords": [
                                "Genestealer Cults"
                        ],
                        "compositionText": "1 Goliath Rockgrinder This model is equipped with: heavy mining laser; heavy stubber; drilldozer blade; demolition charge cache. DAMAGED: 1-3 WOUNDS REMAINING While this model has 1-3 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll. TRANSPORT This model has a transport capacity of 6 GENESTEALER CULTS INFANTRY models."
                },
                {
                        "id": "gsc-hybrid-metamorphs",
                        "name": "Hybrid Metamorphs",
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
                                "t": 4,
                                "sv": "5+",
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
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Leader’s bio-weapons",
                                                "range": "Melee",
                                                "a": 5,
                                                "ws": "3+",
                                                "s": 5,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Metamorph mutations – strike",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "3+",
                                                "s": 5,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Metamorph mutations – sweep",
                                                "range": "Melee",
                                                "a": 5,
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
                                        "Deep Strike",
                                        "Feel No Pain 5+",
                                        "Scouts 6\""
                                ],
                                "faction": [
                                        "Cult Ambush"
                                ],
                                "wargear": [],
                                "other": [
                                        "Brood Surge",
                                        "Cult Icon"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Grenades",
                                "Great Devourer",
                                "Hybrid Metamorphs"
                        ],
                        "factionKeywords": [
                                "Genestealer Cults"
                        ],
                        "compositionText": "1 Metamorph Leader 4-9 Hybrid Metamorphs The Metamorph Leader is equipped with: autopistol; Leader’s bio-weapons. Every Hybrid Metamorph is equipped with: autopistol; Metamorph mutations."
                },
                {
                        "id": "gsc-purestrain-genestealers",
                        "name": "Purestrain Genestealers",
                        "role": "infantry",
                        "points": [
                                {
                                        "models": 5,
                                        "cost": 75
                                },
                                {
                                        "models": 10,
                                        "cost": 140
                                }
                        ],
                        "stats": {
                                "m": "8\"",
                                "t": 4,
                                "sv": "5+",
                                "w": 2,
                                "ld": "7+",
                                "oc": 1
                        },
                        "invuln": "5+",
                        "weapons": {
                                "ranged": [],
                                "melee": [
                                        {
                                                "name": "Cult claws and talons",
                                                "range": "Melee",
                                                "a": 4,
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
                                        "Deep Strike",
                                        "Infiltrators"
                                ],
                                "faction": [
                                        "Cult Ambush"
                                ],
                                "wargear": [],
                                "other": [
                                        "Swift and Deadly"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Great Devourer",
                                "Purestrain Genestealers"
                        ],
                        "factionKeywords": [
                                "Genestealer Cults"
                        ],
                        "compositionText": "5-10 Purestrain Genestealers Every model is equipped with: cult claws and talons."
                }
        ]
    };

    window.W40K_FACTIONS = window.W40K_FACTIONS || { "10th": [], "11th": [] };
    window.W40K_FACTIONS["10th"].push(gsc);
})();
