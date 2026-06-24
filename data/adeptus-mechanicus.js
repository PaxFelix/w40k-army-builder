/**
 * W40K Army Builder — Adeptus Mechanicus (10th Edition)
 *
 * Datasheets from Codex: Adeptus Mechanicus. Names-only abilities/rules;
 * stats, weapons, points and keywords are factual game data.
 * Legends and Forge World datasheets are intentionally omitted.
 *
 * Self-registers into window.W40K_FACTIONS, assembled by data/factions.js.
 */
(function () {
    "use strict";

    const admech = {
        id: "adeptus-mechanicus",
        name: "Adeptus Mechanicus",
        icon: "⚙️",
        allegiance: "Imperium",
        flavour: "",
        armyRules: [
            { name: "Doctrina Imperatives", flavour: "An Adeptus Mechanicus army marching to war is a sight both terrifying and glorious, each holy warrior a disturbing fusion of Human and machine. While the ruling Tech-Priests and their fanatical followers raise modified voices in praise of the Machine God, their Skitarii soldiery and Servitor creations are controlled by doctrina imperatives loaded by their masters to augment and adapt the warriors' abilities.", text: "At the start of the battle round, you can select one of the Doctrina Imperatives below. Until the end of the battle round, that Doctrina Imperative is active for your army, and all units from your army that have the Doctrina Imperatives ability gain the relevant abilities shown below.\n\nProtector Imperative:\n- Ranged weapons equipped by models in this unit have the [Heavy] ability.\n- Improve the Ballistic Skill characteristic of ranged weapons equipped by models in this unit by 1.\n- Each time a melee attack targets this unit, if this unit has the BATTLELINE keyword and/or it is within 6\" of one or more friendly ADEPTUS MECHANICUS BATTLELINE units, subtract 1 from the Hit roll.\n\nConqueror Imperative:\n- Ranged weapons equipped by models in this unit have the [Assault] ability.\n- Improve the Weapon Skill characteristic of melee weapons equipped by models in this unit by 1.\n- Each time a model in this unit makes an attack, if this unit has the BATTLELINE keyword and/or it is within 6\" of one or more friendly ADEPTUS MECHANICUS BATTLELINE units, improve the Armour Penetration characteristic of that attack by 1." }
        ],
        detachments: [
            {
                name: "Rad-zone Corps",
                flavour: "",
                rule: { name: "Rad-bombardment", flavour: "Whether as a result of natural phenomena, apocalyptic internecine strife or calamitous accidents, many forge worlds are heavily irradiated. When holy wars of requisition are unleashed, the Tech-Priests think nothing of turning this invisible curse upon their foes, bombarding the battlefield with deadly radiation prior to an assault.", text: "BATTLE ROUND 1 - BOMBARDMENT: At the start of the first battle round, for each enemy unit within your opponent's deployment zone, your opponent must decide whether that unit will take cover or stand firm. You then roll one D6 for each of those enemy units and apply the relevant result below:\n- Unit Standing Firm: On a 3+, that unit suffers D3 mortal wounds.\n- Unit Taking Cover: Until the end of the battle round, that unit is Battle-shocked and, on a 5+, that unit suffers D3 mortal wounds.\n\nBATTLE ROUND 2 ONWARDS - FALLOUT: At the start of your Command phase during the second, third, fourth and fifth battle rounds, roll one D6 for each enemy unit within your opponent's deployment zone. On a 3+, that unit suffers 1 mortal wound and must take a Battle-shock test.", restrictions: "" },
                enhancements: [
                    { name: "Radial Suffusion", cost: 25, restriction: "ADEPTUS MECHANICUS model only.", flavour: "By transmitting their precision battlefield observations, this servant of the Omnissiah ensures the saturation of the enemy position is a creeping curse, spreading a hazardous suffusion towards those foes seeking to outrun the vengeance of the Machine God.", text: "From the second battle round onwards, when resolving the Fallout effect of the Rad-bombardment Detachment rule, if the bearer is on the battlefield, roll one D6 for each enemy unit within 6\" of your opponent's deployment zone, in addition to those that are within your opponent's deployment zone." },
                    { name: "Malphonic Susurrus", cost: 20, restriction: "ADEPTUS MECHANICUS model only.", flavour: "This master of splintered choruses leads their followers in a projection of clashing frequencies. Scanners and sensoriums trained in their direction are befouled by the disruptive input.", text: "While the bearer is leading a unit, models in that unit have the Stealth ability." },
                    { name: "Peerless Eradicator", cost: 20, restriction: "ADEPTUS MECHANICUS model only.", flavour: "This perfectionist zealot directs their minions in the rapid and single-minded termination of all enemies of the Omnissiah.", text: "While the bearer is leading a unit, ranged weapons equipped by models in that unit have the [Sustained Hits 1] ability." },
                    { name: "Autoclavic Denunciation", cost: 15, restriction: "ADEPTUS MECHANICUS model only.", flavour: "This devotee harbours a fanatical hatred of the biological. They have learned the secret weaknesses inherent in all flesh and do not hesitate to exploit them.", text: "Ranged weapons equipped by the bearer have the [Anti-Infantry 2+] and [Anti-Monster 4+] abilities." },
                ],
                stratagems: [
                    { name: "Baleful Halo", cp: 2, type: "Battle Tactic", flavour: "By briefly unshielding the most corrosive or irradiated components of their being, the warriors of a Rad-Zone Corps can exhale on isotopic fog, sapping the strength of those not inured to its effects.", when: "Fight phase, just after an enemy unit has selected its targets.", target: "One ADEPTUS MECHANICUS unit from your army (excluding VEHICLE units) that was selected as the target of one or more of that enemy unit's attacks. If that unit is BATTLELINE, you can also target one friendly SKITARII unit (excluding BATTLELINE units) within 6\" of it.", effect: "Until the end of the turn, each time an attack is made that targets your unit, subtract 1 from the Wound roll.", restrictions: "" },
                    { name: "Extinction Order", cp: 1, type: "Strategic Ploy", flavour: "As Tech-Priests order the purge of an area of the battlefield, rad-bombardments are redoubled in the hopes of turning it into a wasteland.", when: "Your Command phase.", target: "One TECH-PRIEST model from your army and one objective marker within 24\" of that model.", effect: "Roll one D6 for each enemy unit within range of that objective marker. On a 4+, that unit suffers 1 mortal wound and it must take a Battle-shock test.", restrictions: "" },
                    { name: "Aggressor Imperative", cp: 1, type: "Battle Tactic", flavour: "The Skitarii feel the press of an invisible hand upon their minds as the Machine God drives them forward. Servos are pushed to their structural limits as fibre bundles fill with the boundless energy of the Motive Force and propel the faithful on an unstoppable crusade.", when: "Your Movement phase.", target: "One SKITARII unit from your army that has not been selected to move this phase. If that unit is BATTLELINE, you can also target one friendly SKITARII unit (excluding BATTLELINE units) within 6\" of it.", effect: "Until the end of the phase, each time one of those units Advances, do not make an Advance roll for it. Instead, until the end of the phase, add 6\" to the Move characteristic of models in that unit.", restrictions: "" },
                    { name: "Pre-calibrated Purge Solution", cp: 1, type: "Battle Tactic", flavour: "Employing targeting data collated by a swarm of servo-skulls released over the enemy's battle lines, the Machine God's faithful purge the foe stumbling amidst rad-scourged positions.", when: "Your Shooting phase.", target: "One ADEPTUS MECHANICUS unit from your army that has not been selected to shoot this phase. If that unit is BATTLELINE, you can also target one friendly SKITARII unit (excluding BATTLELINE units) within 6\" of it.", effect: "Until the end of the phase, each time a model in one of those units makes a ranged attack, if the target of that attack is within your opponent's deployment zone, you can re-roll the Hit roll.", restrictions: "" },
                    { name: "Lethal Dosage", cp: 1, type: "Wargear", flavour: "Tri-fold sanctified power cells, fuel canisters and solid slugs have spent a decade in the most irradiated forge temple to certify their lethality.", when: "Your Shooting phase.", target: "One ADEPTUS MECHANICUS unit from your army that has not been selected to shoot this phase.", effect: "Until the end of the phase, ranged weapons equipped by models in your unit have the [Lethal Hits] ability.", restrictions: "" },
                    { name: "Bulwark Imperative", cp: 2, type: "Battle Tactic", flavour: "With a pulse of force-loaded wisdom, microactuators lock into bracing positions, reserve power cells are brought online and the Omnissiah's holy crusaders are bestowed with a sensation of sacred invulnerability.", when: "Your opponent's Shooting phase, just after an enemy unit has selected its targets.", target: "One SKITARII unit from your army that was selected as the target of one or more of the attacking unit's attacks. If that unit is BATTLELINE, you can also target one friendly SKITARII unit (excluding BATTLELINE units) within 6\" of it.", effect: "Until the end of the phase, models in those units from your army have a 4+ invulnerable save.", restrictions: "" },
                ]
            },
            {
                name: "Skitarii Hunter Cohort",
                flavour: "",
                rule: { name: "Stealth Optimisation", flavour: "Hunter Cohorts combine a mastery of stealth warfare and cogitational analysis with stealth screen projectors and target-fouling apparatuses. They are elusive foes to face, and especially sinister to those they have designated as prey.", text: "SKITARII INFANTRY, SKITARII MOUNTED and IRONSTRIDER BALLISTARII units from your army have the Stealth ability, and each time a ranged attack targets a SICARIAN unit from your army, unless the attacking model is within 12\", the target has the Benefit of Cover against that attack.", restrictions: "" },
                enhancements: [
                    { name: "Cantic Thrallnet", cost: 25, restriction: "SKITARII MARSHAL model only.", flavour: "Proclaimed to be a direct data-link to the will of the Omnissiah himself, this neuro-entanglement matrix allows for hyper-optimised combat cogitation.", text: "At the start of the battle round, you can select one friendly SKITARII unit within 12\" of the bearer. Until the start of the next battle round, the Protector Imperative and the Conqueror Imperative are both active for that unit." },
                    { name: "Clandestine Infiltrator", cost: 20, restriction: "SKITARII model only.", flavour: "Under cover of auspex scramblers, this holy soldier leads their fellows in a stealthy advance.", text: "The bearer, and models in any unit they are leading, have the Infiltrators and Scouts 6\" abilities." },
                    { name: "Veiled Hunter", cost: 10, restriction: "SKITARII MARSHAL model only.", flavour: "In silent supplication, a concentrated burst of noospheric negation manifests as a heavy band of shadow. Under this shroud, this commander's warriors obfuscate the foe's sensors and confuse their strategy.", text: "After both players have deployed their armies, you can select up to three SKITARII INFANTRY units from your army and redeploy all of those units. When doing so, any of those units can be placed into Strategic Reserves, regardless of how many units are already in Strategic Reserves." },
                    { name: "Battle-sphere Uplink", cost: 30, restriction: "SKITARII model only.", flavour: "Tapping into infostacks of data emanating from across the wider battle-sphere, this experienced Skitarius synchronises with the flow of wisdom, drawing upon data that enables near-prophetic reactions.", text: "In your Shooting phase, after the bearer's unit has shot, if it is not within Engagement Range of one or more enemy units, that unit can make a Normal move of up to 6\". If it does, until the end of the turn, that unit is not eligible to declare a charge." },
                ],
                stratagems: [
                    { name: "Bionic Endurance", cp: 1, type: "Strategic Ploy", flavour: "Between their multi-layered bionics and their fanatical faith in the indomitability of these machine-blessings, the most augmented of Skitarii are nigh-impossible to lay low.", when: "Your opponent's Shooting phase or the Fight phase, just after an enemy unit has selected its targets.", target: "One SICARIAN, PTERAXII or SYDONIAN unit from your army that was selected as the target of one or more of the attacking unit's attacks.", effect: "Until the end of the phase, models in your unit have the Feel No Pain 5+ ability.", restrictions: "" },
                    { name: "Binharic Offence", cp: 2, type: "Strategic Ploy", flavour: "Employing directed binharic entanglement to coordinate their motions, paired squads of Skitarii attack with eerie and lethal synchronicity.", when: "The start of your Shooting phase or the start of the Fight phase.", target: "Two SKITARII units from your army that have not been selected to shoot or fight this phase, and one enemy unit.", effect: "Until the end of the phase, improve the Armour Penetration characteristic of weapons equipped by models in both of your units by 1.", restrictions: "Until the end of the phase, each time a model in either of your units makes an attack, it can only target that enemy unit (and only if it is an eligible target)." },
                    { name: "Expedited Purge Protocol", cp: 1, type: "Strategic Ploy", flavour: "Binharic imperatives flash through neural architecture, driving augmetic muscle-bundles and auto-actuators into overdrive to propel the Skitarii more swiftly into the fray.", when: "Your Charge phase.", target: "One SKITARII unit from your army.", effect: "Until the end of the phase, your unit is eligible to declare a charge in a turn in which it Advanced.", restrictions: "" },
                    { name: "Isolate and Destroy", cp: 1, type: "Strategic Ploy", flavour: "The swiftest hunters seek to engage foes with the equations of war in their favour, isolating their quarry and dispatching it with ruthless efficiency.", when: "Your Shooting phase.", target: "One SICARIAN, PTERAXII, SYDONIAN, IRONSTRIDER BALLISTARII or SKITARII MOUNTED unit from your army that has not been selected to shoot this phase.", effect: "Until the end of the phase, each time a model in your unit makes an attack, if there are no other enemy units within 6\" of the unit targeted by that attack, add 1 to the Wound roll.", restrictions: "" },
                    { name: "Shroud Protocols", cp: 1, type: "Strategic Ploy", flavour: "When Skitarii Hunter Cohorts march to war, they do so beneath a shrouding squall of cyber-static and filament-heavy banks of sacred incense.", when: "Your opponent's Shooting phase, just after an enemy unit has selected its targets.", target: "One SKITARII INFANTRY unit from your army that was selected as the target of one or more of the attacking unit's attacks.", effect: "Until the end of the phase, your unit can only be selected as the target of a ranged attack if the attacking model is within 18\".", restrictions: "" },
                    { name: "Programmed Withdrawal", cp: 1, type: "Strategic Ploy", flavour: "Taking direct control of their cybernetic soldiers' manoeuvres, the cohort's commander sees their withdrawal carried out with such precision that they can be pressed back into service from the most efficacious of attack vectors.", when: "End of your opponent's Fight phase.", target: "Up to two SICARIAN units from your army, or one SKITARII INFANTRY or SKITARII MOUNTED unit from your army.", effect: "Remove those units from the battlefield and place them into Strategic Reserves.", restrictions: "Each unit targeted with this Stratagem must be more than 3\" away from all enemy units." },
                ]
            },
            {
                name: "Data-psalm Conclave",
                flavour: "",
                rule: { name: "Benedictions of the Omnissiah", flavour: "The Tech-Priests of the Omnissiah lead their disciples in a cortege of war. The buzz of static psalms chanted in synchronicity unites all in the stately eradication of the heretic and blasphemer.", text: "At the start of the first battle round, select one of the following Benedictions of the Omnissiah to be active for CULT MECHANICUS units from your army until the end of the battle:\n\nPanegyric Procession: Each time a CULT MECHANICUS model from your army makes a ranged attack that targets a unit within half range, improve the Armour Penetration characteristic of that attack by 1.\n\nCitation in Savagery: Each time a CULT MECHANICUS unit from your army is selected to fight, if that unit made a Charge move this turn, until the end of the phase, add 1 to the Strength and Attacks characteristics of melee weapons equipped by models in that unit.", restrictions: "" },
                enhancements: [
                    { name: "Mechanicus Locum", cost: 10, restriction: "TECH-PRIEST model only.", flavour: "Amongst every congregation of Tech-Priests are masters of arcane knowledge - inspirational leaders of the cybernetic and the mechanical.", text: "The bearer has a Leadership characteristic of 6+ and, once per battle, at the start of any phase, you can select one friendly CULT MECHANICUS unit that is Battle-shocked and within 12\" of the bearer. That unit is no longer Battle-shocked." },
                    { name: "Mantle of the Gnosticarch", cost: 15, restriction: "TECH-PRIEST model only.", flavour: "The toughened weave of this hooded robe includes hypo-ceramic threads, thermoplastics and terranic polymers that create a holy shroud capable of resisting the infernos of plasma reactors.", text: "Each time an attack is allocated to the bearer, change the Damage characteristic of that attack to 1." },
                    { name: "Data-blessed Autosermon", cost: 20, restriction: "TECH-PRIEST model only.", flavour: "Struck with an infoload of revelation, truly blessed Tech-Priests will override the sacred canticles to deliver the Machine God's adaptive wisdom.", text: "Once per battle, at the start of your Command phase, you can select the Benediction of the Omnissiah you did not select at the start of the first battle round. Until the start of your next Command phase, that Benediction of the Omnissiah is active for the bearer's unit in addition to the one that is currently active for your army." },
                    { name: "Temporcopia", cost: 25, restriction: "TECH-PRIEST model only.", flavour: "The Temporcopia is a relic from the Dark Age of Technology that releases a swarm of nano-engineered machines. These invisible devices seek out nearby prey, briefly draining electro-chemical potential before their power expires. Enemy warriors slow and stumble, at the mercy of the Tech-Priest's bodyguard.", text: "The bearer's unit has the Fights First ability." },
                ],
                stratagems: [
                    { name: "Incantation of the Iron Soul", cp: 1, type: "Battle Tactic", flavour: "Raising their voices in binharic praise, the Machine God's disciples bolster their spirits - as well as those that inhabit their augmentations - with iron surety.", when: "Any phase, just after you allocate a mortal wound to a CULT MECHANICUS model from your army.", target: "That CULT MECHANICUS model's unit.", effect: "Until the end of the phase, CULT MECHANICUS models in your unit have the Feel No Pain 4+ ability against mortal wounds.", restrictions: "" },
                    { name: "Chant of the Remorseless Fist", cp: 1, type: "Battle Tactic", flavour: "In spitting out a staccato chant to the Motive Force, the faithful warriors of the Cult Mechanicus are filled with merciless surety as well as intent.", when: "Fight phase.", target: "One CULT MECHANICUS unit from your army that has not been selected to fight this phase.", effect: "Until the end of the phase, each time a CULT MECHANICUS model in your unit makes a melee attack, add 1 to the Wound roll.", restrictions: "" },
                    { name: "Verse of Vengeance", cp: 1, type: "Strategic Ploy", flavour: "Rousing code in binharic duometer incites fury for the lost fragments of technological lore. In the grip of vengeance, the devoted extend their remaining functions for one last act of retribution.", when: "Fight phase, just after an enemy unit has selected its targets.", target: "One CULT MECHANICUS unit from your army that was selected as the target of one or more of the attacking unit's attacks.", effect: "Until the end of the phase, each time a CULT MECHANICUS model in your unit is destroyed, if that model has not fought this phase, roll one D6: on a 4+, do not remove it from play. The destroyed model can fight after the attacking model's unit has finished making its attacks, and is then removed from play.", restrictions: "" },
                    { name: "Tribute of Emphatic Veneration", cp: 1, type: "Strategic Ploy", flavour: "A cacophonous chorale pours from the emitters and augmented throats of the Cult Mechanicus' faithful, venerating the Omnissiah in deafening and disconcerting frequencies of praise.", when: "Start of your Movement phase.", target: "One CULT MECHANICUS unit from your army and one enemy unit within 18\" of it.", effect: "That enemy unit must take a Battle-shock test. If that test is failed, until the start of your next Command phase, each time a model in that enemy unit makes an attack, subtract 1 from the Hit roll.", restrictions: "" },
                    { name: "Litany of the Electromancer", cp: 1, type: "Strategic Ploy", flavour: "Summoning the spark of the Machine God's divinity that burns within them, the Omnissiah's faithful manifest blazing auras of energy that lay low the unbeliever.", when: "Your Shooting phase.", target: "One CULT MECHANICUS unit from your army.", effect: "Roll one D6 for each enemy unit within 6\" of one or more CULT MECHANICUS models in your unit, adding 1 to the result if that model is an ELECTRO-PRIEST. On a 5+, that enemy unit suffers D3 mortal wounds.", restrictions: "" },
                    { name: "Luminescent Blessing", cp: 1, type: "Battle Tactic", flavour: "As the cohorts of the Omnissiah recite their dazzling consecration, energy is redirected to infuse masterwork bionics and even the lambent glow of protective fields ignites in a halo of divine defence.", when: "Your opponent's Shooting phase, just after an enemy unit has selected its targets.", target: "One CULT MECHANICUS unit from your army that was selected as the target of one or more of the attacking unit's attacks.", effect: "Until the end of the phase, CULT MECHANICUS models in your unit have a 4+ invulnerable save.", restrictions: "" },
                ]
            },
            {
                name: "Explorator Maniple",
                flavour: "",
                rule: { name: "Acquisition at Any Cost", flavour: "In their eternal quest for the acquisition of knowledge and technology, Tech-Priests require superhuman efforts from the troops under their command.", text: "At the start of your Command phase, select one objective marker. Until the start of your next Command phase, that objective marker is your Acquisition objective marker. Each time an ADEPTUS MECHANICUS model from your army makes an attack, if that model's unit is within range of your Acquisition objective marker, or if the target of that attack is within range of your Acquisition objective marker, re-roll a Wound roll of 1.", restrictions: "" },
                enhancements: [
                    { name: "Magos", cost: 15, restriction: "TECH-PRIEST model only.", flavour: "Magi are masters of fiercely guarded knowledge, pursuing esoteric agendas at all costs. No risk is too great and no gambit too unwise in their ceaseless and predatory acquisition of ancient lore.", text: "At the end of your Command phase, if the bearer is within range of your Acquisition objective marker, roll one D6: on a 4+, you gain 1CP." },
                    { name: "Genetor", cost: 25, restriction: "TECH-PRIEST model only.", flavour: "Cyborg interfaces, genetic manipulation and alchemical behavioural modification are all avenues of interest to Genetors, and their enhanced creations are formidable in protecting their master's divine work.", text: "While the bearer is leading a unit that is within range of your Acquisition objective marker, models in that unit have a 4+ invulnerable save." },
                    { name: "Logis", cost: 20, restriction: "TECH-PRIEST model only.", flavour: "Data-vores and biocogitators, logi amass huge stores of information. They analyse data from thousands of sources, rationalising every weak point the foe has. It is a fool indeed that stands before a logi and their prize.", text: "While the bearer is leading a unit, each time a model in that unit makes an attack that targets a unit within range of your Acquisition objective marker, add 1 to the Hit roll." },
                    { name: "Artisan", cost: 15, restriction: "TECH-PRIEST model only.", flavour: "Artisans create wondrous artefacts of war. They install circuits of such beauty, and capacitor-nodes of such fine calibration, that their machine spirits respond with divine gratitude.", text: "While the bearer is leading a unit that is within range of your Acquisition objective marker, once per phase, you can change the result of one Hit roll, one Wound roll or one saving throw made for that unit to an unmodified 6." },
                ],
                stratagems: [
                    { name: "Cached Acquisition", cp: 1, type: "Epic Deed", flavour: "Death is irrelevant compared to the hallowed duty of securing the Omnissiah's knowledge for future retrieval.", when: "Any phase.", target: "One ADEPTUS MECHANICUS unit from your army that was just destroyed while it was within range of an objective marker you controlled. You can use this Stratagem on that unit even though it was just destroyed.", effect: "That objective marker remains under your control, even if you have no models within range of it, until your opponent controls it at the start or end of any turn.", restrictions: "" },
                    { name: "Priority Reclamation", cp: 1, type: "Battle Tactic", flavour: "Retrieval of the most sacred and ancient fragments of technology is embedded in loops of alpha-logic.", when: "Fight phase, just before an ADEPTUS MECHANICUS unit from your army Consolidates.", target: "That ADEPTUS MECHANICUS unit.", effect: "Until the end of the phase, each time a model in your unit makes a Consolidation move, it can move up to 6\" instead of up to 3\", provided your unit ends that Consolidation move within range of your Acquisition objective marker.", restrictions: "You cannot target a unit with this Stratagem if it is within 3\" of one or more enemy units." },
                    { name: "Infoslave Skull", cp: 1, type: "Wargear", flavour: "Mono-task infoslave skulls range ahead to assess potential sites that must be investigated.", when: "Your Command phase.", target: "One TECH-PRIEST model from your army and one objective marker within 24\" of that model (excluding your Acquisition objective marker).", effect: "Until the start of your next Command phase, that objective marker is also considered to be one of your Acquisition objective markers for all rules purposes.", restrictions: "" },
                    { name: "Auto-oracular Retrieval", cp: 2, type: "Battle Tactic", flavour: "With a surge of targeting data from the war engine as its hatches slam open, the warriors inside pour out with weapons already trained unerringly on the foe.", when: "Your Shooting phase.", target: "One ADEPTUS MECHANICUS unit from your army that disembarked from a TRANSPORT this turn.", effect: "Until the end of the phase, each time a model in your unit makes a ranged attack that targets an enemy unit within range of your Acquisition objective marker, add 1 to the Wound roll.", restrictions: "" },
                    { name: "Incense Exhausts", cp: 1, type: "Wargear", flavour: "The machine spirits of sanctified war engines can be entreated to release clouds of incense laced with radioactive particles, veiling the faithful from the foe.", when: "Your opponent's Shooting phase, just after an enemy unit has selected its targets.", target: "One ADEPTUS MECHANICUS INFANTRY unit from your army that was selected as the target of one or more of the attacking unit's attacks, and one friendly ADEPTUS MECHANICUS SMOKE unit within 6\" of it.", effect: "Until the end of the phase, both of those units have the Stealth ability and the Benefit of Cover.", restrictions: "" },
                    { name: "Reactive Safeguard", cp: 1, type: "Strategic Ploy", flavour: "Holy data must be hoarded at all costs, and thickly armoured war engines offer swift and secure vaults.", when: "Your opponent's Charge phase, just after an enemy unit has declared a charge.", target: "One ADEPTUS MECHANICUS INFANTRY unit from your army within range of your Acquisition objective marker that was selected as a target of that charge, and one friendly ADEPTUS MECHANICUS TRANSPORT.", effect: "Your unit can embark within that TRANSPORT.", restrictions: "Every model in your unit must be within 3\" of that TRANSPORT and there must be sufficient transport capacity to embark the entire unit." },
                ]
            },
            {
                name: "Cohort Cybernetica",
                flavour: "",
                rule: { name: "Cyber-Psalm Programming", flavour: "In advance of a Cohort Cybernetica's battles, the Legio's most talented Datasmiths will feed dogmatic auto-scripture into the programming cores of their robotic charges, as well as oracular schematics and tactical hymnals that delineate the strategy to come. So blessed, the Cohort's robots add their own grinding chants of static to a systematic chorus of praise in the Omnissiah's name.", text: "Add 2\" to the Move characteristic of models in LEGIO CYBERNETICA units from your army. In addition, unless that unit is Battle-shocked, add 1 to the Objective Control characteristic of models in that unit.", restrictions: "" },
                enhancements: [
                    { name: "Necromechanic", cost: 25, restriction: "TECH-PRIEST model only.", flavour: "The blessed healing of machinery is the sign of a true shepherd of the Omnissiah's flock.", text: "Once per battle round, when a saving throw made for a friendly LEGIO CYBERNETICA or ADEPTUS MECHANICUS VEHICLE model within 12\" of the bearer is failed, the bearer can use this Enhancement. If they do, change the Damage characteristic of that attack to 0." },
                    { name: "Lord of Machines", cost: 20, restriction: "TECH-PRIEST model only.", flavour: "An intense burst of viral static can overload those machine spirits yoked to the service of the enemy.", text: "Once per turn, at the start of your opponent's Shooting phase, select one enemy VEHICLE unit within 12\" of and visible to the bearer. That unit must take a Leadership test: if that test is passed, until the end of the phase, each time a model in that unit makes an attack, subtract 1 from the Hit roll; if that test is failed, that unit is not eligible to shoot this phase." },
                    { name: "Emotionless Clarity", cost: 15, restriction: "TECH-PRIEST model only.", flavour: "With a mind unsullied by the passions common to the flesh, a Tech-Priest can entreat the machine spirit of a dying war engine to enact one final triumph.", text: "Once per turn, when a friendly LEGIO CYBERNETICA or ADEPTUS MECHANICUS VEHICLE model with the Deadly Demise ability that is within 12\" of the bearer is destroyed, the bearer can use this Enhancement. If it does, do not roll to determine whether any mortal wounds are inflicted as a result of that model's Deadly Demise ability. Instead, mortal wounds are automatically inflicted." },
                    { name: "Arch-negator", cost: 10, restriction: "TECH-PRIEST model only.", flavour: "Feeding magneto-voltaic arcs and deadly frequencies into their weapons, the Tech-Priest is death incarnate to blasphemies against the Machine God.", text: "Ranged weapons equipped by the bearer have the [Anti-Vehicle 4+] ability." },
                ],
                stratagems: [
                    { name: "Motive Imperative", cp: 1, type: "Battle Tactic", flavour: "Intensifying the locomotive protocols of a war engine - while not dishonouring its machine spirit - is a millennia-proven method to hasten the foe's demise.", when: "Your Command phase.", target: "One ADEPTUS MECHANICUS VEHICLE unit from your army.", effect: "Until the start of your next Command phase, add 3\" to the Move characteristic of models in your unit and add 1 to Advance and Charge rolls made for it.", restrictions: "" },
                    { name: "Auto-divinatory Targeting", cp: 1, type: "Battle Tactic", flavour: "Encoded with the schemata of the enemy's fortified battle lines and auto-codified vectors of attack, the Cohort's war engines are perfectly aligned to deliver the Machine God's wrath.", when: "Your Command phase.", target: "One LEGIO CYBERNETICA or ADEPTUS MECHANICUS VEHICLE unit from your army, and one objective marker.", effect: "Until the start of your next Command phase, ranged weapons equipped by models in your unit have a Ballistic Skill characteristic of 3+ and the [Ignores Cover] ability, but they can only target units within range of the selected objective marker.", restrictions: "" },
                    { name: "Machine Spirit Resurgent", cp: 1, type: "Epic Deed", flavour: "To invigorate the failing machine spirit of a damaged vehicle is a sacred task, greatly aided by certain data-hymns transmitted in the correct sequence.", when: "Your Command phase.", target: "One LEGIO CYBERNETICA or ADEPTUS MECHANICUS VEHICLE unit from your army that is below its Starting Strength.", effect: "Until the start of your next Command phase, each time a model in your unit makes an attack, you can re-roll the Hit roll. If your unit is Below Half-strength, you can re-roll the Wound roll as well.", restrictions: "" },
                    { name: "Machine Superiority", cp: 1, type: "Epic Deed", flavour: "Let the unenlightened be cast down! Let all feel the fire of the Motive Force, and may the sacred engines crunch over their weak bones without impediment!", when: "Your Command phase.", target: "One LEGIO CYBERNETICA or ADEPTUS MECHANICUS VEHICLE unit from your army.", effect: "Until the end of the turn, your unit is eligible to shoot in a turn in which it Fell Back and you can ignore any or all modifiers to its characteristics and/or to any roll or test made for it (excluding modifiers to saving throws).", restrictions: "" },
                    { name: "Transcendent Cogitation", cp: 1, type: "Strategic Ploy", flavour: "Enhanced static chants can briefly raise a war engine's machine spirits to exultant heights of cogitation and multi-tactical capacity.", when: "Your Command phase.", target: "One LEGIO CYBERNETICA or ADEPTUS MECHANICUS VEHICLE unit from your army.", effect: "Until the start of your next Command phase, the Conqueror Imperative and Protector Imperative are both active for your unit.", restrictions: "" },
                    { name: "Benevolence of the Omnissiah", cp: 1, type: "Battle Tactic", flavour: "A protective blessing chanted in pentakairic Novabyte moves machine spirits to defy the most esoteric of assaults.", when: "Your Command phase.", target: "One LEGIO CYBERNETICA or ADEPTUS MECHANICUS VEHICLE unit from your army.", effect: "Until the start of your next Command phase, models in your unit have the Feel No Pain 6+ ability, which is improved to Feel No Pain 5+ against mortal wounds.", restrictions: "" },
                ]
            },
            {
                name: "Eradication Cohort",
                flavour: "",
                rule: { name: "Murderous Imperative", flavour: "The Skitarii fighting in a focused clade all but vibrate with the inloaded need to kill. This manifests not as wild rage, however, but rather as a coldly efficient drive to acquire the next target, bring it down with pinpoint fire or neatly placed thrusts, then find a new victim and repeat in an infinite loop.", text: "Each time a model in a SKITARII unit from your army makes an attack:\n- If the Protector Imperative is active for that unit, re-roll a Hit roll of 1.\n- If the Conqueror Imperative is active for that unit, re-roll a Wound roll of 1.", restrictions: "" },
                enhancements: [
                    { name: "Omnicogitator", cost: 25, restriction: "SKITARII MARSHAL model only.", flavour: "This unique tactical-cogitation augmetic provides its bearer with a wealth of situation-appropriate responses in even the most intense battle.", text: "The Conqueror Imperative and Protector Imperative are both active for the bearer's unit." },
                    { name: "Martial Signatum Amplificator", cost: 15, restriction: "TECH-PRIEST model only.", flavour: "This strange device taps into the data-tethers that carry Skitarii command imperatives and disseminates them to other, less soldierly servants of the Omnissiah.", text: "Models in the bearer's unit have the SKITARII keyword." },
                    { name: "Belicosa-Class Capacitor Vanes", cost: 30, restriction: "ADEPTUS MECHANICUS model only.", flavour: "These slender conductor vanes channel esoteric energies into nearby weapon systems, rendering their machine spirits rapacious and bellicose.", text: "Add 6\" to the Range characteristic of ranged weapons equipped by models in the bearer's unit, and add 1 to the Strength characteristic of those weapons." },
                    { name: "Omnissiah's Fury", cost: 10, restriction: "SKITARII MARSHAL model only.", flavour: "A Skitarii Marshal implanted with this thoracic augmetic feels the Machine God's molten fury flowing through their veins and out into the weapons they wield in battle.", text: "Add 2 to the Attacks characteristic of melee weapons equipped by the bearer, and improve the Armour Penetration and Damage characteristics of those weapons by 1." },
                ],
                stratagems: [
                    { name: "Servo-Driven Charge", cp: 1, type: "Wargear", flavour: "Sending reckless surges of motive force through their units, these warriors charge headlong into combat with punishing impact.", when: "Fight phase.", target: "One ADEPTUS MECHANICUS unit from your army that has not been selected to fight this phase.", effect: "Until the end of the phase, melee weapons equipped by models in your unit have the [Lance] ability.", restrictions: "" },
                    { name: "Unrelenting Aggression", cp: 1, type: "Strategic Ploy", flavour: "Even when retreating temporarily in the face of staunch resistance, the warriors of the Omnissiah keep up their storm of fire and violent blows.", when: "Your Movement phase, just after an ADEPTUS MECHANICUS unit from your army Falls Back.", target: "That ADEPTUS MECHANICUS unit.", effect: "Until the end of the turn, your unit is eligible to shoot in a turn in which it Fell Back. If your unit has the SKITARII keyword, your unit is eligible to shoot and declare a charge in a turn in which it Fell Back instead.", restrictions: "" },
                    { name: "Unshackled Wrath", cp: 1, type: "Wargear", flavour: "With Binharic prayers of disengagement, these warriors release the saviour protocols of their weapon spirits to release the guns' full wrath.", when: "Your Shooting phase.", target: "One SKITARII unit from your army that has not been selected to shoot this phase.", effect: "Select the [Sustained Hits 1] or [Lethal Hits] ability. Until the end of the phase, ranged weapons equipped by models in your unit have the selected ability. You can instead select the [Sustained Hits 1], [Lethal Hits] and [Hazardous] abilities to apply to those weapons until the end of the phase.", restrictions: "" },
                    { name: "Threat-Cogitation Targeters", cp: 1, type: "Wargear", flavour: "Supplementary analytic cogitation routines identify targets of primary importance and assist in their rapid elimination.", when: "Your Shooting phase.", target: "One SKITARII VEHICLE unit from your army that has not been selected to shoot this phase.", effect: "Until the end of the phase, each time a ranged attack made by a model in your unit is allocated to a MONSTER or VEHICLE model, you can re-roll the Damage roll.", restrictions: "" },
                    { name: "Precision Onslaught", cp: 1, type: "Battle Tactic", flavour: "Leading the charge like a keen bayonet locked to a rifle's barrel, maniples of Sicarians scythe into the enemy amidst a welter of blood and severed limbs.", when: "Your Charge phase, just after a SICARIAN unit from your army declares a charge.", target: "That SICARIAN unit.", effect: "Until the end of the phase, when your unit ends a Charge move, select one enemy unit within Engagement Range of it, then roll one D6 for each model in your unit that is within Engagement Range of that enemy unit: for each 4+, that enemy unit suffers 1 mortal wound.", restrictions: "" },
                    { name: "Analytic Reprisals", cp: 1, type: "Strategic Ploy", flavour: "Rapid threat analysis triggers the Skitarii to return fire against foes deemed immediate threats, surprising the enemy and thinning their lines.", when: "Your opponent's Shooting phase, just after an enemy unit has shot.", target: "One SKITARII INFANTRY unit from your army that lost one or more models as a result of the attacking unit's attacks.", effect: "Your unit can shoot as if it were your Shooting phase, but must target only that enemy unit when doing so, and can only do so if that enemy unit is an eligible target.", restrictions: "" },
                ]
            },
            {
                name: "Haloscreed Battle Clade",
                flavour: "Tech-Priests often monitor their forces remotely, but those who lead battle clades take this intervention to an extreme, exerting even finer control over their thralls. Projecting fragments of their consciousness through the noospheric battle-sphere, they override the autonomy of their soldiery and inload tactical information, target coordinates and vector directives into cybernetic minds. Such assistance is gratefully received by the Machine God's faithful, who feel blessed by the rush of divine wisdom and implanted knowledge.",
                rule: { name: "Noospheric Transference", flavour: "Tech-Priests can override the will of their thralls and project martial data inloads into the minds of their warriors, blessing the soldiery with endless streams of precisely tailored binharic code.", text: "In your Command phase, select one or more ADEPTUS MECHANICUS units from your army (including units that are embarked within TRANSPORTS). The maximum number of units you can select depends on the battle size, as follows:\n- Incursion: 1 unit\n- Strike Force: 2 units\n- Onslaught: 3 units\n\nUntil the start of your next Command phase, those units gain the HALO OVERRIDE keyword. Then, select one of the Override abilities below. Until the start of your next Command phase, units from your army with the HALO OVERRIDE keyword have the selected Override ability:\n\nElectromotive Energisation: Add 2\" to the Move characteristic of models in this unit.\n\nMicroactuator Bracing: Add 1 to the Toughness characteristic of models in this unit.\n\nPredation Protocols: This unit is eligible to declare a charge in a turn in which it Advanced.\n\nMuted Servomotors: Models in this unit have the Stealth ability.", restrictions: "" },
                enhancements: [
                    { name: "Transoracular Dyad Wafers", cost: 15, restriction: "CYBERNETICA DATASMITH model only.", flavour: "Inloaded with advanced combat protocols, tactical hymnals and holy autoscripture, these doctrina wafers grant greater autonomy and destructive might to the constructs of the Legio Cybernetica.", text: "When the bearer is attached to a KASTELAN ROBOTS unit, until the end of the battle, models in that unit gain the HALO OVERRIDE keyword. That unit cannot be selected when selecting units as part of the Noospheric Transference Detachment rule." },
                    { name: "Cognitive Reinforcement", cost: 35, restriction: "ADEPTUS MECHANICUS model only (excluding CYBERNETICA DATASMITH models).", flavour: "From afar, the guiding hand of the Omnissian priesthood allows this warrior to process streams of sensory input and encoded imperatives simultaneously.", text: "The Conqueror Imperative and Protector Imperative are both active for the bearer's unit." },
                    { name: "Sanctified Ordnance", cost: 10, restriction: "ADEPTUS MECHANICUS model only.", flavour: "The ammunition borne to battle by this disciple of the Machine God and those at their command has been subjected to ritual anointings and autosermonic blessings, lending it far greater stability.", text: "Add 6\" to the range characteristic of ranged weapons equipped by models in the bearer's unit and, each time a Hazardous test is taken for that unit, you can re-roll the result." },
                    { name: "Inloaded Lethality", cost: 15, restriction: "TECH-PRIEST DOMINUS or TECH-PRIEST MANIPULUS model only.", flavour: "The ancient noospheric receptors implanted into this field commander enable them to receive constant streams of binharic kill code and static prayer chants, lending them greater strength and martial prowess.", text: "Add 3 to the Attacks characteristic of the bearer's melee weapons and add 1 to the Damage characteristic of the bearer's melee weapons." },
                ],
                stratagems: [
                    { name: "Eradication Protocols", cp: 1, type: "Battle Tactic", flavour: "Fresh imperatives flow down from on high. The orders are simple: eliminate the foe.", when: "Your Shooting phase or the Fight phase.", target: "One ADEPTUS MECHANICUS unit from your army that has not been selected to shoot or fight this phase.", effect: "Until the end of the phase, each time a model in your unit makes an attack, re-roll a Wound roll of 1, and, if it is a HALO OVERRIDE unit, re-roll a Hit roll of 1.", restrictions: "" },
                    { name: "Targeting Override", cp: 1, type: "Battle Tactic", flavour: "Experienced Tech-Priests rapidly analyse the foe's weaknesses and feed the resultant data to their soldiers, who exploit these flaws to destroy their targets.", when: "Your Shooting phase or the Fight phase.", target: "One ADEPTUS MECHANICUS unit from your army that has not been selected to shoot or fight this phase.", effect: "Until the end of the phase, each time a model in your unit makes an attack, an unmodified Hit roll of 5+ scores a Critical Hit.", restrictions: "" },
                    { name: "Neural Overload", cp: 1, type: "Strategic Ploy", flavour: "By projecting their consciousness into the minds of tech thralls, a Tech-Priest may significantly enhance their warriors' lethality. However, doing so risks overloading their combat units' more limited neural networks. Such hazards are seen as an opportunity to give one's life in the name of the Omnissiah.", when: "Your Movement phase.", target: "One ADEPTUS MECHANICUS unit from your army.", effect: "If your unit is a HALO OVERRIDE unit, it suffers D3 mortal wounds. Select one Override ability. Until the start of your next Command phase, that ability is active for your unit.\n\nDesigner's Note: This means that if the targeted unit already has the HALO OVERRIDE keyword, it can be affected by multiple Override abilities at the same time, but suffers mortal wounds to do so. Alternatively, if your unit does not have the HALO OVERRIDE keyword, it instead has the chosen Override ability until the start of your next Command phase, but does not benefit from any other Override abilities that are active.", restrictions: "" },
                    { name: "Aggressive Impulse", cp: 1, type: "Strategic Ploy", flavour: "Urgent imperatives flood into the crew thralls of Skitarius transport units, urging them to deploy their cargo of cybernetic soldiers into the heart of the fight.", when: "Your Movement phase.", target: "One SKORPIUS DUNERIDER model from your army that has not been selected to move this phase.", effect: "Until the end of the turn, each time an ADEPTUS MECHANICUS unit disembarks from that model after it has made a Normal move, that unit is still eligible to declare a charge this turn.", restrictions: "" },
                    { name: "Guided Retreat", cp: 1, type: "Strategic Ploy", flavour: "From their distant strategium pulpit, the Tech-Priest commander's guiding hand descends, seizing control of allied minds, steering their troops carefully away from harm whilst maintaining a hail of killing fire.", when: "Your Movement phase, just after an ADEPTUS MECHANICUS unit from your army makes a Fall Back move.", target: "That ADEPTUS MECHANICUS unit.", effect: "Until the end of the turn, your unit is eligible to shoot and declare a charge in a turn in which it Fell Back, and, if it is a HALO OVERRIDE unit, you can re-roll Desperate Escape tests taken for it.", restrictions: "" },
                    { name: "Analytical Divination", cp: 1, type: "Strategic Ploy", flavour: "Tech-Priest commanders process an overwhelming influx of data screeds, analysing this information to read the flow of battle and coordinate the movements of their thralls.", when: "Your opponent's Movement phase, just after an enemy unit ends a Normal, Advance or Fall Back move.", target: "One ADEPTUS MECHANICUS INFANTRY unit (excluding KATAPHRON units) from your army that is within 9\" of that enemy unit and not within Engagement Range of one or more enemy units.", effect: "Your unit can make a Normal move of up to D6\", or up to 6\" instead if it is a HALO OVERRIDE unit.", restrictions: "" },
                ]
            }
        ],
        units: [
                {
                        "id": "admech-thulia-ghuld",
                        "name": "Thulia Ghuld",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 210
                                }
                        ],
                        "stats": {
                                "m": "8\"",
                                "t": 8,
                                "sv": "2+",
                                "w": 10,
                                "ld": "6+",
                                "oc": 3
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Jericho-class conversion resonator – titanic impact",
                                                "range": "24\"",
                                                "a": 2,
                                                "bs": "2+",
                                                "s": 12,
                                                "ap": -3,
                                                "d": "D6+2",
                                                "keywords": [
                                                        "Devastating Wounds"
                                                ]
                                        },
                                        {
                                                "name": "Jericho-class conversion resonator – shockwave",
                                                "range": "24\"",
                                                "a": "D6+2",
                                                "bs": "2+",
                                                "s": 6,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": [
                                                        "Blast",
                                                        "Sustained Hits 1"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Rod of the War Forge – strike",
                                                "range": "Melee",
                                                "a": 6,
                                                "ws": "2+",
                                                "s": 10,
                                                "ap": -2,
                                                "d": 3,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Rod of the War Forge – sweep",
                                                "range": "Melee",
                                                "a": 12,
                                                "ws": "2+",
                                                "s": 6,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": []
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [],
                                "faction": [
                                        "Doctrina Imperatives"
                                ],
                                "wargear": [],
                                "other": [
                                        "Rod of the War Forge",
                                        "Mechanicus Bodyguard",
                                        "Cybernetic Augmentation",
                                        "Secutor of Olympus"
                                ]
                        },
                        "keywords": [
                                "Monster",
                                "Character",
                                "Epic Hero",
                                "Imperium",
                                "Cult Mechanicus",
                                "Tech-Priest",
                                "Thulia Ghuld"
                        ],
                        "factionKeywords": [
                                "Adeptus Mechanicus"
                        ],
                        "compositionText": "1 Archmagos Terminus Thulia Ghuld – EPIC HERO This model is equipped with: Jericho-class conversion resonator; Rod of the War Forge. SUPREME COMMANDER If this model is in your army, it must be your Warlord."
                },
                {
                        "id": "admech-belisarius-cawl",
                        "name": "Belisarius Cawl",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 210
                                }
                        ],
                        "stats": {
                                "m": "8\"",
                                "t": 8,
                                "sv": "2+",
                                "w": 10,
                                "ld": "6+",
                                "oc": 3
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Solar atomiser",
                                                "range": "18\"",
                                                "a": 3,
                                                "bs": "2+",
                                                "s": 14,
                                                "ap": -4,
                                                "d": "D6",
                                                "keywords": [
                                                        "Melta 3"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Arc scourge",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "2+",
                                                "s": 5,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Anti-Vehicle 4+",
                                                        "Devastating Wounds",
                                                        "Extra Attacks"
                                                ]
                                        },
                                        {
                                                "name": "Cawl’s Omnissian axe",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "2+",
                                                "s": 8,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Mechadendrite hive",
                                                "range": "Melee",
                                                "a": "2D6",
                                                "ws": "3+",
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
                                "faction": [
                                        "Doctrina Imperatives"
                                ],
                                "wargear": [],
                                "other": [
                                        "Canticles of the Omnissiah",
                                        "Mechanicus Bodyguard",
                                        "Self-repair Mechanisms"
                                ]
                        },
                        "keywords": [
                                "Monster",
                                "Character",
                                "Epic Hero",
                                "Imperium",
                                "Tech-Priest",
                                "Cult Mechanicus",
                                "Belisarius Cawl"
                        ],
                        "factionKeywords": [
                                "Adeptus Mechanicus"
                        ],
                        "compositionText": "1 Belisarius Cawl – EPIC HERO This model is equipped with: solar atomiser; arc scourge; Cawl’s Omnissian axe; mechadendrite hive. SUPREME COMMANDER If this model is in your army, it must be your Warlord."
                },
                {
                        "id": "admech-cybernetica-datasmith",
                        "name": "Cybernetica Datasmith",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 35
                                }
                        ],
                        "stats": {
                                "m": "6\"",
                                "t": 4,
                                "sv": "2+",
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
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Devastating Wounds",
                                                        "Pistol"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Power fist",
                                                "range": "Melee",
                                                "a": 2,
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
                                        "Leader"
                                ],
                                "faction": [
                                        "Doctrina Imperatives"
                                ],
                                "wargear": [],
                                "other": [
                                        "Battle Protocols",
                                        "Protector Protocol",
                                        "Conqueror Protocol",
                                        "Aegis Protocol"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Imperium",
                                "Legio Cybernetica",
                                "Tech-Priest",
                                "Cybernetica Datasmith"
                        ],
                        "factionKeywords": [
                                "Adeptus Mechanicus"
                        ],
                        "leaderText": "This model can be attached to the following unit: Kastelan Robots.",
                        "compositionText": "1 Cybernetica Datasmith This model is equipped with: Mechanicus pistol; power fist."
                },
                {
                        "id": "admech-skitarii-marshal",
                        "name": "Skitarii Marshal",
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
                                "sv": "4+",
                                "w": 3,
                                "ld": "6+",
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
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Devastating Wounds",
                                                        "Pistol"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Control stave",
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
                                        "Leader"
                                ],
                                "faction": [
                                        "Doctrina Imperatives"
                                ],
                                "wargear": [],
                                "other": [
                                        "Control Edict",
                                        "Servo-skull Uplink"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Imperium",
                                "Skitarii",
                                "Marshal"
                        ],
                        "factionKeywords": [
                                "Adeptus Mechanicus"
                        ],
                        "leaderText": "This model can be attached to the following units: Hastarii Exterminators; Hastarii Fusiliers; Skitarii Rangers; Skitarii Vanguard.",
                        "compositionText": "1 Skitarii Marshal This model is equipped with: Mechanicus pistol; control stave."
                },
                {
                        "id": "admech-sydonian-skatros",
                        "name": "Sydonian Skatros",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 50
                                }
                        ],
                        "stats": {
                                "m": "8\"",
                                "t": 4,
                                "sv": "4+",
                                "w": 4,
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
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Devastating Wounds",
                                                        "Pistol"
                                                ]
                                        },
                                        {
                                                "name": "Radium jezzail",
                                                "range": "36\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 5,
                                                "ap": -2,
                                                "d": 3,
                                                "keywords": [
                                                        "Anti-Infantry 3+",
                                                        "Heavy",
                                                        "Precision"
                                                ]
                                        },
                                        {
                                                "name": "Skatros transuranic arquebus",
                                                "range": "36\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 7,
                                                "ap": -2,
                                                "d": "D3",
                                                "keywords": [
                                                        "Anti-Monster 4+",
                                                        "Anti-Vehicle 4+",
                                                        "Heavy",
                                                        "Precision"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Sydonian feet",
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
                                        "Lone Operative",
                                        "Stealth"
                                ],
                                "faction": [
                                        "Doctrina Imperatives"
                                ],
                                "wargear": [],
                                "other": [
                                        "Dread Snipers",
                                        "Achillan Eye"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Imperium",
                                "Skitarii",
                                "Sydonian",
                                "Skatros"
                        ],
                        "factionKeywords": [
                                "Adeptus Mechanicus"
                        ],
                        "compositionText": "1 Sydonian Skatros This model is equipped with: Mechanicus pistol; radium jezzail; Sydonian feet. SYDONIAN SENTINEL This model cannot be your WARLORD"
                },
                {
                        "id": "admech-tech-priest-dominus",
                        "name": "Tech-priest Dominus",
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
                                "sv": "2+",
                                "w": 4,
                                "ld": "7+",
                                "oc": 1
                        },
                        "invuln": "5+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Eradication ray – dissipated",
                                                "range": "24\"",
                                                "a": "D3",
                                                "bs": "3+",
                                                "s": 6,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Eradication ray – focused",
                                                "range": "12\"",
                                                "a": "D3",
                                                "bs": "3+",
                                                "s": 6,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Macrostubber",
                                                "range": "12\"",
                                                "a": 5,
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Pistol"
                                                ]
                                        },
                                        {
                                                "name": "Phosphor serpenta",
                                                "range": "18\"",
                                                "a": 1,
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
                                                "name": "Volkite blaster",
                                                "range": "24\"",
                                                "a": 3,
                                                "bs": "3+",
                                                "s": 5,
                                                "ap": 0,
                                                "d": 2,
                                                "keywords": [
                                                        "Devastating Wounds"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Omnissian axe",
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
                                "core": [
                                        "Leader"
                                ],
                                "faction": [
                                        "Doctrina Imperatives"
                                ],
                                "wargear": [],
                                "other": [
                                        "Lord of the Machine Cult",
                                        "Data-spike"
                                ]
                        },
                        "keywords": [
                                "Imperium",
                                "Infantry",
                                "Character",
                                "Cult Mechanicus",
                                "Tech-Priest",
                                "Dominus"
                        ],
                        "factionKeywords": [
                                "Adeptus Mechanicus"
                        ],
                        "leaderText": "This model can be attached to the following units: Hastarii Exterminators; Hastarii Fusiliers; Corpuscarii Electro-priests; Fulgurite Electro-priests; Kataphron Breachers; Kataphron Destroyers; Servitor Battleclade; Skitarii Rangers; Skitarii Vanguard.",
                        "compositionText": "1 Tech-Priest Dominus This model is equipped with: macrostubber; volkite blaster; Omnissian axe."
                },
                {
                        "id": "admech-tech-priest-enginseer",
                        "name": "Tech-priest Enginseer",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 55
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
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Devastating Wounds",
                                                        "Pistol"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Omnissian axe",
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
                                "faction": [
                                        "Doctrina Imperatives"
                                ],
                                "wargear": [],
                                "other": [
                                        "Enginseer",
                                        "Omnissiah’s Blessing",
                                        "Vengeance for the Omnissiah"
                                ]
                        },
                        "keywords": [
                                "Imperium",
                                "Infantry",
                                "Character",
                                "Cult Mechanicus",
                                "Tech-Priest",
                                "Enginseer"
                        ],
                        "factionKeywords": [
                                "Adeptus Mechanicus"
                        ],
                        "leaderText": "This model can be attached to the following units: Hastarii Exterminators; Hastarii Fusiliers; Corpuscarii Electro-priests; Fulgurite Electro-priests; Kataphron Breachers; Kataphron Destroyers; Servitor Battleclade; Skitarii Rangers; Skitarii Vanguard.",
                        "compositionText": "1 Tech-Priest Enginseer This model is equipped with: Mechanicus pistol; Omnissian axe; servo-arm."
                },
                {
                        "id": "admech-tech-priest-manipulus",
                        "name": "Tech-priest Manipulus",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 60
                                }
                        ],
                        "stats": {
                                "m": "6\"",
                                "t": 4,
                                "sv": "2+",
                                "w": 4,
                                "ld": "7+",
                                "oc": 1
                        },
                        "invuln": "5+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Magnarail lance",
                                                "range": "36\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 7,
                                                "ap": -2,
                                                "d": 3,
                                                "keywords": [
                                                        "Heavy"
                                                ]
                                        },
                                        {
                                                "name": "Transonic cannon",
                                                "range": "12\"",
                                                "a": "D6",
                                                "bs": "N/A",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 2,
                                                "keywords": [
                                                        "Devastating Wounds",
                                                        "Torrent"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Omnissian staff",
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
                                        "Leader"
                                ],
                                "faction": [
                                        "Doctrina Imperatives"
                                ],
                                "wargear": [],
                                "other": [
                                        "Galvanic Field",
                                        "Defend the Divine Work"
                                ]
                        },
                        "keywords": [
                                "Imperium",
                                "Infantry",
                                "Character",
                                "Cult Mechanicus",
                                "Tech-Priest",
                                "Manipulus"
                        ],
                        "factionKeywords": [
                                "Adeptus Mechanicus"
                        ],
                        "leaderText": "This model can be attached to the following units: Hastarii Exterminators; Hastarii Fusiliers; Corpuscarii Electro-priests; Fulgurite Electro-priests; Kataphron Breachers; Kataphron Destroyers; Servitor Battleclade; Skitarii Rangers; Skitarii Vanguard.",
                        "compositionText": "1 Tech-Priest Manipulus This model is equipped with: magnarail lance; Omnissian staff."
                },
                {
                        "id": "admech-technoarcheologist",
                        "name": "Technoarcheologist",
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
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Devastating Wounds",
                                                        "Pistol"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Servo-arc claw",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "4+",
                                                "s": 8,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Anti-Vehicle 4+",
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
                                        "Doctrina Imperatives"
                                ],
                                "wargear": [],
                                "other": [
                                        "Seekers of Divine Arcana",
                                        "Cogitative Instincts"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Imperium",
                                "Cult Mechanicus",
                                "Tech-Priest",
                                "Technoarcheologist"
                        ],
                        "factionKeywords": [
                                "Adeptus Mechanicus"
                        ],
                        "leaderText": "This model can be attached to the following units: Hastarii Exterminators; Hastarii Fusiliers; Corpuscarii Electro-priests; Fulgurite Electro-priests; Kataphron Breachers; Kataphron Destroyers; Servitor Battleclade; Skitarii Rangers; Skitarii Vanguard.",
                        "compositionText": "1 Technoarcheologist This model is equipped with: Mechanicus pistol; servo-arc claw."
                },
                {
                        "id": "admech-skitarii-rangers",
                        "name": "Skitarii Rangers",
                        "role": "battleline",
                        "points": [
                                {
                                        "models": 10,
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
                        "invuln": "5+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Mechanicus pistol",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "4+",
                                                "s": 6,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Devastating Wounds",
                                                        "Pistol"
                                                ]
                                        },
                                        {
                                                "name": "Arc rifle",
                                                "range": "30\"",
                                                "a": 1,
                                                "bs": "4+",
                                                "s": 8,
                                                "ap": -1,
                                                "d": "D3",
                                                "keywords": [
                                                        "Anti-Vehicle 4+",
                                                        "Devastating Wounds",
                                                        "Rapid Fire 1"
                                                ]
                                        },
                                        {
                                                "name": "Galvanic rifle",
                                                "range": "30\"",
                                                "a": 2,
                                                "bs": "4+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Plasma caliver – standard",
                                                "range": "30\"",
                                                "a": 2,
                                                "bs": "4+",
                                                "s": 7,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Plasma caliver – supercharge",
                                                "range": "30\"",
                                                "a": 2,
                                                "bs": "4+",
                                                "s": 8,
                                                "ap": -3,
                                                "d": 2,
                                                "keywords": [
                                                        "Hazardous"
                                                ]
                                        },
                                        {
                                                "name": "Transuranic arquebus",
                                                "range": "36\"",
                                                "a": 1,
                                                "bs": "4+",
                                                "s": 7,
                                                "ap": -2,
                                                "d": "D3",
                                                "keywords": [
                                                        "Heavy",
                                                        "Precision"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Alpha combat weapon",
                                                "range": "Melee",
                                                "a": 2,
                                                "ws": "4+",
                                                "s": 5,
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
                                        "Doctrina Imperatives"
                                ],
                                "wargear": [],
                                "other": [
                                        "Objective Scouted",
                                        "Enhanced data-tether",
                                        "Omnispex"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Battleline",
                                "Imperium",
                                "Skitarii",
                                "Rangers"
                        ],
                        "factionKeywords": [
                                "Adeptus Mechanicus"
                        ],
                        "compositionText": "1 Skitarii Ranger Alpha 9 Skitarii Rangers Every model is equipped with: galvanic rifle; close combat weapon."
                },
                {
                        "id": "admech-skitarii-vanguard",
                        "name": "Skitarii Vanguard",
                        "role": "battleline",
                        "points": [
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
                                "oc": 2
                        },
                        "invuln": "5+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Mechanicus pistol",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "4+",
                                                "s": 6,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Devastating Wounds",
                                                        "Pistol"
                                                ]
                                        },
                                        {
                                                "name": "Arc rifle",
                                                "range": "30\"",
                                                "a": 1,
                                                "bs": "4+",
                                                "s": 8,
                                                "ap": -1,
                                                "d": "D3",
                                                "keywords": [
                                                        "Anti-Vehicle 4+",
                                                        "Devastating Wounds",
                                                        "Rapid Fire 1"
                                                ]
                                        },
                                        {
                                                "name": "Plasma caliver – standard",
                                                "range": "30\"",
                                                "a": 2,
                                                "bs": "4+",
                                                "s": 7,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Plasma caliver – supercharge",
                                                "range": "30\"",
                                                "a": 2,
                                                "bs": "4+",
                                                "s": 8,
                                                "ap": -3,
                                                "d": 2,
                                                "keywords": [
                                                        "Hazardous"
                                                ]
                                        },
                                        {
                                                "name": "Radium carbine",
                                                "range": "18\"",
                                                "a": 3,
                                                "bs": "4+",
                                                "s": 3,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Anti-Infantry 4+"
                                                ]
                                        },
                                        {
                                                "name": "Transuranic arquebus",
                                                "range": "36\"",
                                                "a": 1,
                                                "bs": "4+",
                                                "s": 7,
                                                "ap": -2,
                                                "d": "D3",
                                                "keywords": [
                                                        "Heavy",
                                                        "Precision"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Alpha combat weapon",
                                                "range": "Melee",
                                                "a": 2,
                                                "ws": "4+",
                                                "s": 5,
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
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": []
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [],
                                "faction": [
                                        "Doctrina Imperatives"
                                ],
                                "wargear": [],
                                "other": [
                                        "Rad-saturation",
                                        "Enhanced data-tether",
                                        "Omnispex"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Battleline",
                                "Imperium",
                                "Skitarii",
                                "Vanguard"
                        ],
                        "factionKeywords": [
                                "Adeptus Mechanicus"
                        ],
                        "compositionText": "1 Skitarii Vanguard Alpha 9 Skitarii Vanguard Every model is equipped with: radium carbine; close combat weapon."
                },
                {
                        "id": "admech-skorpius-dunerider",
                        "name": "Skorpius Dunerider",
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
                                "w": 11,
                                "ld": "7+",
                                "oc": 2
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Cognis heavy stubber array",
                                                "range": "36\"",
                                                "a": 9,
                                                "bs": "4+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Rapid Fire 9",
                                                        "Sustained Hits 1",
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
                                        "Firing Deck 2"
                                ],
                                "faction": [
                                        "Doctrina Imperatives"
                                ],
                                "wargear": [],
                                "other": [
                                        "Broad Spectrum Data-tether",
                                        "Fire Support"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Transport",
                                "Dedicated Transport",
                                "Imperium",
                                "Skitarii",
                                "Smoke",
                                "Skorpius Dunerider"
                        ],
                        "factionKeywords": [
                                "Adeptus Mechanicus"
                        ],
                        "compositionText": "1 Skorpius Dunerider This model is equipped with: cognis heavy stubber array; armoured hull. TRANSPORT This model has a transport capacity of 12 ADEPTUS MECHANICUS INFANTRY models. It cannot transport JUMP PACK, KATAPHRON or SYDONIAN SKATROS models."
                },
                {
                        "id": "admech-hastarii-exterminators",
                        "name": "Hastarii Exterminators",
                        "role": "infantry",
                        "points": [
                                {
                                        "models": 5,
                                        "cost": 135
                                }
                        ],
                        "stats": {
                                "m": "5\"",
                                "t": 4,
                                "sv": "3+",
                                "w": 2,
                                "ld": "7+",
                                "oc": 1
                        },
                        "invuln": "5+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Hastarii arc blaster",
                                                "range": "18\"",
                                                "a": 1,
                                                "bs": "4+",
                                                "s": 6,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Anti-Vehicle 4+",
                                                        "Devastating Wounds"
                                                ]
                                        },
                                        {
                                                "name": "Eradication caster – dissipated",
                                                "range": "30\"",
                                                "a": 2,
                                                "bs": "4+",
                                                "s": 5,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Anti-Infantry 4+"
                                                ]
                                        },
                                        {
                                                "name": "Eradication caster – focused",
                                                "range": "15\"",
                                                "a": 2,
                                                "bs": "4+",
                                                "s": 5,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Anti-Infantry 4+"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Close-combat weapon",
                                                "range": "Melee",
                                                "a": 1,
                                                "ws": "4+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Power weapon",
                                                "range": "Melee",
                                                "a": 2,
                                                "ws": "4+",
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
                                        "Doctrina Imperatives"
                                ],
                                "wargear": [],
                                "other": [
                                        "Broad-spectrum Targeting Augurs"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Imperium",
                                "Skitarii",
                                "Hastarii",
                                "Exterminators"
                        ],
                        "factionKeywords": [
                                "Adeptus Mechanicus"
                        ],
                        "compositionText": "1 Hastarii Exterminator Alpha 4 Hastarii Exterminators The Hastarii Exterminator Alpha is equipped with: Hastarii arc blaster; eradication caster; power weapon. Every Hastarii Exterminator is equipped with: Hastarii arc blaster; eradication caster; close combat weapon."
                },
                {
                        "id": "admech-hastarii-fusiliers",
                        "name": "Hastarii Fusiliers",
                        "role": "infantry",
                        "points": [
                                {
                                        "models": 5,
                                        "cost": 145
                                }
                        ],
                        "stats": {
                                "m": "5\"",
                                "t": 4,
                                "sv": "3+",
                                "w": 2,
                                "ld": "7+",
                                "oc": 1
                        },
                        "invuln": "5+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Neutron fusil",
                                                "range": "24\"",
                                                "a": 1,
                                                "bs": "4+",
                                                "s": 12,
                                                "ap": -3,
                                                "d": "D6+1",
                                                "keywords": []
                                        },
                                        {
                                                "name": "Hastarii phosphor blaster",
                                                "range": "18\"",
                                                "a": 2,
                                                "bs": "4+",
                                                "s": 5,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Ignores Cover"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Close-combat weapon",
                                                "range": "Melee",
                                                "a": 1,
                                                "ws": "4+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Power weapon",
                                                "range": "Melee",
                                                "a": 2,
                                                "ws": "4+",
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
                                        "Doctrina Imperatives"
                                ],
                                "wargear": [],
                                "other": [
                                        "Monocular Targeting Helms"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Imperium",
                                "Skitarii",
                                "Hastarii",
                                "Fusiliers"
                        ],
                        "factionKeywords": [
                                "Adeptus Mechanicus"
                        ],
                        "compositionText": "1 Hastarii Fusilier Alpha 4 Hastarii Fusiliers The Hastarii Fusilier Alpha is equipped with: neutron fusil; Hastarii phosphor blaster; power weapon. Every Hastarii Fusiller is equipped with: neutron fusil; Hastarii phosphor blaster; close combat weapon."
                },
                {
                        "id": "admech-archaeopter-fusilave",
                        "name": "Archaeopter Fusilave",
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
                                "w": 10,
                                "ld": "7+",
                                "oc": 0
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Cognis heavy stubber array",
                                                "range": "36\"",
                                                "a": 9,
                                                "bs": "4+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Rapid Fire 9",
                                                        "Sustained Hits 1",
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
                                        "Hover"
                                ],
                                "faction": [
                                        "Doctrina Imperatives"
                                ],
                                "wargear": [],
                                "other": [
                                        "Bomb Rack",
                                        "Chaff Launcher",
                                        "Command Uplink"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Aircraft",
                                "Fly",
                                "Imperium",
                                "Skitarii",
                                "Archaeopter Fusilave"
                        ],
                        "factionKeywords": [
                                "Adeptus Mechanicus"
                        ],
                        "compositionText": "1 Archaeopter Fusilave This model is equipped with: cognis heavy stubber array; armoured hull; command uplink."
                },
                {
                        "id": "admech-archaeopter-stratoraptor",
                        "name": "Archaeopter Stratoraptor",
                        "role": "vehicle",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 185
                                }
                        ],
                        "stats": {
                                "m": "20+\"",
                                "t": 9,
                                "sv": "3+",
                                "w": 10,
                                "ld": "7+",
                                "oc": 0
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Cognis heavy stubber",
                                                "range": "36\"",
                                                "a": 3,
                                                "bs": "4+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Rapid Fire 3",
                                                        "Sustained Hits 1"
                                                ]
                                        },
                                        {
                                                "name": "Heavy phosphor blaster",
                                                "range": "36\"",
                                                "a": 3,
                                                "bs": "4+",
                                                "s": 6,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Ignores Cover"
                                                ]
                                        },
                                        {
                                                "name": "Twin cognis lascannon",
                                                "range": "48\"",
                                                "a": 1,
                                                "bs": "4+",
                                                "s": 12,
                                                "ap": -3,
                                                "d": "D6+1",
                                                "keywords": [
                                                        "Sustained Hits 1",
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
                                        "Hover"
                                ],
                                "faction": [
                                        "Doctrina Imperatives"
                                ],
                                "wargear": [],
                                "other": [
                                        "Strafing Run",
                                        "Chaff Launcher",
                                        "Command Uplink"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Aircraft",
                                "Fly",
                                "Imperium",
                                "Skitarii",
                                "Archaeopter Stratoraptor"
                        ],
                        "factionKeywords": [
                                "Adeptus Mechanicus"
                        ],
                        "compositionText": "1 Archaeopter Stratoraptor This model is equipped with: 2 cognis heavy stubbers; 2 heavy phosphor blasters; twin cognis lascannon; armoured hull; command uplink."
                },
                {
                        "id": "admech-archaeopter-transvector",
                        "name": "Archaeopter Transvector",
                        "role": "vehicle",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 150
                                }
                        ],
                        "stats": {
                                "m": "20+\"",
                                "t": 9,
                                "sv": "3+",
                                "w": 10,
                                "ld": "7+",
                                "oc": 0
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Cognis heavy stubber array",
                                                "range": "36\"",
                                                "a": 9,
                                                "bs": "4+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Rapid Fire 9",
                                                        "Sustained Hits 1",
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
                                        "Deep Strike",
                                        "Hover"
                                ],
                                "faction": [
                                        "Doctrina Imperatives"
                                ],
                                "wargear": [],
                                "other": [
                                        "Aerial Deployment",
                                        "Chaff Launcher",
                                        "Command Uplink"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Aircraft",
                                "Transport",
                                "Fly",
                                "Imperium",
                                "Skitarii",
                                "Archaeopter Transvector"
                        ],
                        "factionKeywords": [
                                "Adeptus Mechanicus"
                        ],
                        "compositionText": "1 Archaeopter Transvector This model is equipped with: cognis heavy stubber array; armoured hull; command uplink. TRANSPORT This model has a transport capacity of 11 SKITARII INFANTRY or TECH-PRIEST INFANTRY models. It cannot transport JUMP PACK or KATAPHRON models."
                },
                {
                        "id": "admech-corpuscarii-electro-priests",
                        "name": "Corpuscarii Electro-priests",
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
                                "m": "6\"",
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
                                                "name": "Electrostatic gauntlets",
                                                "range": "12\"",
                                                "a": 3,
                                                "bs": "3+",
                                                "s": 5,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Pistol",
                                                        "Sustained Hits 2"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Electrostatic gauntlets",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "4+",
                                                "s": 5,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Sustained Hits 2"
                                                ]
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Feel No Pain 5+"
                                ],
                                "faction": [
                                        "Doctrina Imperatives"
                                ],
                                "wargear": [],
                                "other": [
                                        "Electro-shock"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Imperium",
                                "Cult Mechanicus",
                                "Corpuscarii",
                                "Electro-Priests"
                        ],
                        "factionKeywords": [
                                "Adeptus Mechanicus"
                        ],
                        "compositionText": "5-10 Corpuscarii Electro-Priests Every model is equipped with: electrostatic gauntlets."
                },
                {
                        "id": "admech-fulgurite-electro-priests",
                        "name": "Fulgurite Electro-priests",
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
                                                "name": "Electroleech stave",
                                                "range": "Melee",
                                                "a": 2,
                                                "ws": "3+",
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
                                        "Feel No Pain 5+"
                                ],
                                "faction": [
                                        "Doctrina Imperatives"
                                ],
                                "wargear": [],
                                "other": [
                                        "Electro-infusion"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Imperium",
                                "Cult Mechanicus",
                                "Electro-Priests",
                                "Fulgurite"
                        ],
                        "factionKeywords": [
                                "Adeptus Mechanicus"
                        ],
                        "compositionText": "5-10 Fulgurite Electro-Priests Every model is equipped with: electroleech stave."
                },
                {
                        "id": "admech-ironstrider-ballistarii",
                        "name": "Ironstrider Ballistarii",
                        "role": "vehicle",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 85
                                },
                                {
                                        "models": 2,
                                        "cost": 170
                                },
                                {
                                        "models": 3,
                                        "cost": 255
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
                        "invuln": "5+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Twin cognis autocannon",
                                                "range": "48\"",
                                                "a": 4,
                                                "bs": "4+",
                                                "s": 9,
                                                "ap": -1,
                                                "d": 3,
                                                "keywords": [
                                                        "Sustained Hits 1",
                                                        "Twin-Linked"
                                                ]
                                        },
                                        {
                                                "name": "Twin cognis lascannon",
                                                "range": "48\"",
                                                "a": 2,
                                                "bs": "4+",
                                                "s": 12,
                                                "ap": -3,
                                                "d": "D6+1",
                                                "keywords": [
                                                        "Sustained Hits 1",
                                                        "Twin-Linked"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Ironstrider feet",
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
                                "faction": [
                                        "Doctrina Imperatives"
                                ],
                                "wargear": [],
                                "other": [
                                        "Elevated Strider",
                                        "Broad Spectrum Data-tether"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Walker",
                                "Smoke",
                                "Imperium",
                                "Skitarii",
                                "Ironstrider Ballistarii"
                        ],
                        "factionKeywords": [
                                "Adeptus Mechanicus"
                        ],
                        "compositionText": "1-3 Ironstrider Ballistarii Every model is equipped with: twin cognis autocannon; Ironstrider feet."
                },
                {
                        "id": "admech-kastelan-robots",
                        "name": "Kastelan Robots",
                        "role": "vehicle",
                        "points": [
                                {
                                        "models": 2,
                                        "cost": 180
                                },
                                {
                                        "models": 4,
                                        "cost": 360
                                }
                        ],
                        "stats": {
                                "m": "6\"",
                                "t": 9,
                                "sv": "2+",
                                "w": 7,
                                "ld": "7+",
                                "oc": 2
                        },
                        "invuln": "5+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Heavy phosphor blaster",
                                                "range": "36\"",
                                                "a": 3,
                                                "bs": "4+",
                                                "s": 6,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Ignores Cover"
                                                ]
                                        },
                                        {
                                                "name": "Incendine combustor",
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
                                                "name": "Kastelan phosphor blaster",
                                                "range": "24\"",
                                                "a": 3,
                                                "bs": "4+",
                                                "s": 6,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Ignores Cover"
                                                ]
                                        },
                                        {
                                                "name": "Twin Kastelan phosphor blaster",
                                                "range": "24\"",
                                                "a": 3,
                                                "bs": "4+",
                                                "s": 6,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Ignores Cover",
                                                        "Twin-Linked"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Close combat weapon",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "4+",
                                                "s": 6,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Kastelan fist",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "4+",
                                                "s": 12,
                                                "ap": -2,
                                                "d": 3,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Twin Kastelan fist",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "4+",
                                                "s": 12,
                                                "ap": -2,
                                                "d": 3,
                                                "keywords": [
                                                        "Twin-Linked"
                                                ]
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Deadly Demise 1"
                                ],
                                "faction": [
                                        "Doctrina Imperatives"
                                ],
                                "wargear": [],
                                "other": [
                                        "Robotic Bodyguard",
                                        "Repulsor Grid"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Walker",
                                "Imperium",
                                "Legio Cybernetica",
                                "Kastelan Robots"
                        ],
                        "factionKeywords": [
                                "Adeptus Mechanicus"
                        ],
                        "compositionText": "2-4 Kastelan Robots Every model is equipped with: incendine combustor; twin Kastelan fist."
                },
                {
                        "id": "admech-kataphron-breachers",
                        "name": "Kataphron Breachers",
                        "role": "infantry",
                        "points": [
                                {
                                        "models": 3,
                                        "cost": 160
                                },
                                {
                                        "models": 6,
                                        "cost": 320
                                }
                        ],
                        "stats": {
                                "m": "5\"",
                                "t": 7,
                                "sv": "3+",
                                "w": 3,
                                "ld": "7+",
                                "oc": 1
                        },
                        "invuln": "6+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Heavy arc rifle",
                                                "range": "30\"",
                                                "a": 2,
                                                "bs": "4+",
                                                "s": 8,
                                                "ap": -2,
                                                "d": 3,
                                                "keywords": [
                                                        "Anti-Vehicle 4+",
                                                        "Rapid Fire 2"
                                                ]
                                        },
                                        {
                                                "name": "Torsion cannon",
                                                "range": "36\"",
                                                "a": "D3",
                                                "bs": "4+",
                                                "s": 6,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Anti-Infantry 2+",
                                                        "Blast"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Arc claw",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "4+",
                                                "s": 5,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Anti-Vehicle 4+"
                                                ]
                                        },
                                        {
                                                "name": "Hydraulic claw",
                                                "range": "Melee",
                                                "a": 2,
                                                "ws": "4+",
                                                "s": 8,
                                                "ap": -2,
                                                "d": 3,
                                                "keywords": []
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [],
                                "faction": [
                                        "Doctrina Imperatives"
                                ],
                                "wargear": [],
                                "other": [
                                        "Breaching Command"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Imperium",
                                "Cult Mechanicus",
                                "Kataphron",
                                "Breachers"
                        ],
                        "factionKeywords": [
                                "Adeptus Mechanicus"
                        ],
                        "compositionText": "3-6 Kataphron Breachers Every model is equipped with: heavy arc rifle; arc claw."
                },
                {
                        "id": "admech-kataphron-destroyers",
                        "name": "Kataphron Destroyers",
                        "role": "infantry",
                        "points": [
                                {
                                        "models": 3,
                                        "cost": 105
                                },
                                {
                                        "models": 6,
                                        "cost": 210
                                }
                        ],
                        "stats": {
                                "m": "5\"",
                                "t": 6,
                                "sv": "3+",
                                "w": 3,
                                "ld": "7+",
                                "oc": 1
                        },
                        "invuln": "6+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Cognis flamer",
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
                                                "name": "Heavy grav-cannon",
                                                "range": "30\"",
                                                "a": 4,
                                                "bs": "4+",
                                                "s": 6,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Anti-Vehicle 2+"
                                                ]
                                        },
                                        {
                                                "name": "Kataphron plasma culverin – standard",
                                                "range": "36\"",
                                                "a": 4,
                                                "bs": "4+",
                                                "s": 7,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Kataphron plasma culverin – supercharge",
                                                "range": "36\"",
                                                "a": 4,
                                                "bs": "4+",
                                                "s": 8,
                                                "ap": -3,
                                                "d": 2,
                                                "keywords": [
                                                        "Hazardous"
                                                ]
                                        },
                                        {
                                                "name": "Phosphor blaster",
                                                "range": "24\"",
                                                "a": 1,
                                                "bs": "4+",
                                                "s": 5,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Ignores Cover",
                                                        "Rapid Fire 1"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Close combat weapon",
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
                                "core": [],
                                "faction": [
                                        "Doctrina Imperatives"
                                ],
                                "wargear": [],
                                "other": [
                                        "Sentinel Directives"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Imperium",
                                "Cult Mechanicus",
                                "Kataphron",
                                "Destroyers"
                        ],
                        "factionKeywords": [
                                "Adeptus Mechanicus"
                        ],
                        "compositionText": "3-6 Kataphron Destroyers Every model is equipped with: heavy grav-cannon; phosphor blaster; close combat weapon."
                },
                {
                        "id": "admech-onager-dunecrawler",
                        "name": "Onager Dunecrawler",
                        "role": "vehicle",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 155
                                }
                        ],
                        "stats": {
                                "m": "8\"",
                                "t": 10,
                                "sv": "2+",
                                "w": 11,
                                "ld": "7+",
                                "oc": 3
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Cognis heavy stubber",
                                                "range": "36\"",
                                                "a": 3,
                                                "bs": "4+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Rapid Fire 3",
                                                        "Sustained Hits 1"
                                                ]
                                        },
                                        {
                                                "name": "Daedalus missile launcher",
                                                "range": "48\"",
                                                "a": 2,
                                                "bs": "4+",
                                                "s": 10,
                                                "ap": -2,
                                                "d": "D6+1",
                                                "keywords": [
                                                        "Anti-Fly 2+"
                                                ]
                                        },
                                        {
                                                "name": "Eradication beamer – dissipated",
                                                "range": "36\"",
                                                "a": "3D3",
                                                "bs": "4+",
                                                "s": 9,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Blast",
                                                        "Sustained Hits 1"
                                                ]
                                        },
                                        {
                                                "name": "Eradication beamer – focused",
                                                "range": "18\"",
                                                "a": "3D3",
                                                "bs": "4+",
                                                "s": 10,
                                                "ap": -3,
                                                "d": 3,
                                                "keywords": [
                                                        "Blast",
                                                        "Sustained Hits 1"
                                                ]
                                        },
                                        {
                                                "name": "Neutron laser",
                                                "range": "48\"",
                                                "a": 3,
                                                "bs": "4+",
                                                "s": 16,
                                                "ap": -4,
                                                "d": "D6+2",
                                                "keywords": [
                                                        "Heavy"
                                                ]
                                        },
                                        {
                                                "name": "Icarus array",
                                                "range": "48\"",
                                                "a": 6,
                                                "bs": "4+",
                                                "s": 8,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Anti-Fly 4+",
                                                        "Twin-Linked"
                                                ]
                                        },
                                        {
                                                "name": "Twin Onager heavy phosphor blaster",
                                                "range": "36\"",
                                                "a": 12,
                                                "bs": "4+",
                                                "s": 6,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Ignores Cover",
                                                        "Twin-Linked"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Dunecrawler legs",
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
                                        "Doctrina Imperatives"
                                ],
                                "wargear": [],
                                "other": [
                                        "Emanatus Force Field",
                                        "Scuttling Walker",
                                        "Broad spectrum data-tether"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Walker",
                                "Imperium",
                                "Skitarii",
                                "Smoke",
                                "Onager Dunecrawler"
                        ],
                        "factionKeywords": [
                                "Adeptus Mechanicus"
                        ],
                        "compositionText": "1 Onager Dunecrawler This model is equipped with: eradication beamer; Dunecrawler legs. DAMAGED: 1-4 WOUNDS REMAINING While this model has 1-4 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
                },
                {
                        "id": "admech-pteraxii-skystalkers",
                        "name": "Pteraxii Skystalkers",
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
                                "sv": "4+",
                                "w": 2,
                                "ld": "7+",
                                "oc": 1
                        },
                        "invuln": "5+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Flechette blaster",
                                                "range": "12\"",
                                                "a": 5,
                                                "bs": "4+",
                                                "s": 3,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Pistol"
                                                ]
                                        },
                                        {
                                                "name": "Flechette carbine",
                                                "range": "18\"",
                                                "a": 6,
                                                "bs": "4+",
                                                "s": 3,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": []
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
                                                "name": "Taser goad",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "4+",
                                                "s": 6,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Sustained Hits 2"
                                                ]
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Deep Strike"
                                ],
                                "faction": [
                                        "Doctrina Imperatives"
                                ],
                                "wargear": [],
                                "other": [
                                        "Ride the Thermals"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Fly",
                                "Jump Pack",
                                "Grenades",
                                "Imperium",
                                "Skitarii",
                                "Pteraxii",
                                "Skystalkers"
                        ],
                        "factionKeywords": [
                                "Adeptus Mechanicus"
                        ],
                        "compositionText": "1 Pteraxii Skystalker Alpha 4-9 Pteraxii Skystalkers The Pteraxii Skystalker Alpha model is equipped with: flechette blaster; taser goad. Every Pteraxii Skystalker model is equipped with: flechette carbine; close combat weapon."
                },
                {
                        "id": "admech-pteraxii-sterylizors",
                        "name": "Pteraxii Sterylizors",
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
                                "m": "12\"",
                                "t": 4,
                                "sv": "4+",
                                "w": 2,
                                "ld": "7+",
                                "oc": 1
                        },
                        "invuln": "5+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Flechette blaster",
                                                "range": "12\"",
                                                "a": 5,
                                                "bs": "4+",
                                                "s": 3,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Pistol"
                                                ]
                                        },
                                        {
                                                "name": "Phosphor torch",
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
                                                "name": "Pteraxii talons",
                                                "range": "Melee",
                                                "a": 2,
                                                "ws": "4+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Taser goad",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "4+",
                                                "s": 6,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Sustained Hits 2"
                                                ]
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Deep Strike"
                                ],
                                "faction": [
                                        "Doctrina Imperatives"
                                ],
                                "wargear": [],
                                "other": [
                                        "Searing Conflagration"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Fly",
                                "Jump Pack",
                                "Imperium",
                                "Skitarii",
                                "Pteraxii",
                                "Sterylizors"
                        ],
                        "factionKeywords": [
                                "Adeptus Mechanicus"
                        ],
                        "compositionText": "1 Pteraxii Sterylizor Alpha 4-9 Pteraxii Sterylizors The Pteraxii Sterylizor Alpha model is equipped with: flechette blaster; Pteraxii talons; taser goad. Every Pteraxii Sterylizor model is equipped with: phosphor torch; Pteraxii talons."
                },
                {
                        "id": "admech-serberys-raiders",
                        "name": "Serberys Raiders",
                        "role": "mounted",
                        "points": [
                                {
                                        "models": 3,
                                        "cost": 60
                                },
                                {
                                        "models": 6,
                                        "cost": 120
                                }
                        ],
                        "stats": {
                                "m": "12\"",
                                "t": 4,
                                "sv": "4+",
                                "w": 2,
                                "ld": "7+",
                                "oc": 2
                        },
                        "invuln": "5+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Mechanicus pistol",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "4+",
                                                "s": 6,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Devastating Wounds",
                                                        "Pistol"
                                                ]
                                        },
                                        {
                                                "name": "Galvanic carbine",
                                                "range": "18\"",
                                                "a": 3,
                                                "bs": "4+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Devastating Wounds"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Cavalry sabre and clawed limbs",
                                                "range": "Melee",
                                                "a": 4,
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
                                        "Scouts 9\""
                                ],
                                "faction": [
                                        "Doctrina Imperatives"
                                ],
                                "wargear": [],
                                "other": [
                                        "Tactica Obliqua",
                                        "Enhanced data-tether"
                                ]
                        },
                        "keywords": [
                                "Mounted",
                                "Imperium",
                                "Skitarii",
                                "Serberys Raiders"
                        ],
                        "factionKeywords": [
                                "Adeptus Mechanicus"
                        ],
                        "compositionText": "1 Serberys Raider Alpha 2-5 Serberys Raiders The Serberys Raider Alpha model is equipped with: Mechanicus pistol; galvanic carbine; cavalry sabre and clawed limbs. Every Serberys Raider model is equipped with: galvanic carbine; cavalry sabre and clawed limbs."
                },
                {
                        "id": "admech-serberys-sulphurhounds",
                        "name": "Serberys Sulphurhounds",
                        "role": "mounted",
                        "points": [
                                {
                                        "models": 3,
                                        "cost": 55
                                },
                                {
                                        "models": 6,
                                        "cost": 110
                                }
                        ],
                        "stats": {
                                "m": "12\"",
                                "t": 4,
                                "sv": "4+",
                                "w": 2,
                                "ld": "7+",
                                "oc": 2
                        },
                        "invuln": "5+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Mechanicus pistol",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "4+",
                                                "s": 6,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Pistol",
                                                        "Devastating Wounds"
                                                ]
                                        },
                                        {
                                                "name": "Phosphor blast carbine",
                                                "range": "18\"",
                                                "a": "D6",
                                                "bs": "4+",
                                                "s": 6,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Blast",
                                                        "Ignores Cover"
                                                ]
                                        },
                                        {
                                                "name": "Phosphor pistol",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "4+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Ignores Cover",
                                                        "Pistol"
                                                ]
                                        },
                                        {
                                                "name": "Sulphur breath",
                                                "range": "9\"",
                                                "a": "D6",
                                                "bs": "N/A",
                                                "s": 3,
                                                "ap": -1,
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
                                                "name": "Cavalry arc maul",
                                                "range": "Melee",
                                                "a": 1,
                                                "ws": "4+",
                                                "s": 5,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Anti-Vehicle 4+",
                                                        "Devastating Wounds",
                                                        "Extra Attacks"
                                                ]
                                        },
                                        {
                                                "name": "Clawed limbs",
                                                "range": "Melee",
                                                "a": 4,
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
                                        "Doctrina Imperatives"
                                ],
                                "wargear": [],
                                "other": [
                                        "Line-breakers"
                                ]
                        },
                        "keywords": [
                                "Mounted",
                                "Imperium",
                                "Skitarii",
                                "Serberys Sulphurhounds"
                        ],
                        "factionKeywords": [
                                "Adeptus Mechanicus"
                        ],
                        "compositionText": "1 Serberys Sulphurhound Alpha 2-5 Serberys Sulphurhounds The Serberys Sulphurhound Alpha model is equipped with: Mechanicus pistol; sulphur breath; cavalry arc maul; clawed limbs. Every Serberys Sulphurhound model is equipped with: 2 phosphor pistols; sulphur breath; clawed limbs."
                },
                {
                        "id": "admech-servitor-battleclade",
                        "name": "Servitor Battleclade",
                        "role": "infantry",
                        "points": [
                                {
                                        "models": 9,
                                        "cost": 60
                                }
                        ],
                        "stats": {
                                "m": "6\"",
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
                                                "name": "Heavy arc rifle",
                                                "range": "30\"",
                                                "a": 1,
                                                "bs": "4+",
                                                "s": 8,
                                                "ap": -2,
                                                "d": 3,
                                                "keywords": [
                                                        "Anti-Vehicle 4+",
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
                                                "name": "Incendine igniter",
                                                "range": "12\"",
                                                "a": "D6",
                                                "bs": "N/A",
                                                "s": 3,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Ignores Cover",
                                                        "Torrent"
                                                ]
                                        },
                                        {
                                                "name": "Mechanicus pistol",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "4+",
                                                "s": 6,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Devastating Wounds",
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
                                                "name": "Phosphor blaster",
                                                "range": "24\"",
                                                "a": 1,
                                                "bs": "4+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Ignores Cover",
                                                        "Rapid Fire 1"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Dataspikes",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "4+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Servo-claw",
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
                                "core": [],
                                "faction": [
                                        "Doctrina Imperatives"
                                ],
                                "wargear": [],
                                "other": [
                                        "Network Override"
                                ]
                        },
                        "keywords": [
                                "Adeptus Mechanicus"
                        ],
                        "factionKeywords": [
                                "Adeptus Mechanicus"
                        ],
                        "compositionText": "1 Servitor Underseer 2 Gun Servitors 6 Combat Servitors The Servitor Underseer is equipped with: Mechanicus pistol; dataspikes. 1 Gun Servitor is equipped with: heavy arc rifle; servo-claw. 1 Gun Servitor is equipped with: heavy bolter; servo-claw. Every Combat Servitor is equipped with: phosphor blaster; servo-claw. KEYWORDS – ALL MODELS: INFANTRY, IMPERIUM, CULT MECHANICUS, SERVITOR BATTLECLADEUNDERSEER: TECH-PRIEST FACTION"
                },
                {
                        "id": "admech-sicarian-infiltrators",
                        "name": "Sicarian Infiltrators",
                        "role": "infantry",
                        "points": [
                                {
                                        "models": 5,
                                        "cost": 75
                                },
                                {
                                        "models": 10,
                                        "cost": 155
                                }
                        ],
                        "stats": {
                                "m": "8\"",
                                "t": 4,
                                "sv": "4+",
                                "w": 2,
                                "ld": "7+",
                                "oc": 1
                        },
                        "invuln": "5+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Flechette blaster",
                                                "range": "12\"",
                                                "a": 5,
                                                "bs": "4+",
                                                "s": 3,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Pistol"
                                                ]
                                        },
                                        {
                                                "name": "Stubcarbine",
                                                "range": "12\"",
                                                "a": 3,
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
                                                "name": "Power weapon",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "4+",
                                                "s": 4,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Taser goad",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "4+",
                                                "s": 6,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Sustained Hits 2"
                                                ]
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Infiltrators",
                                        "Stealth"
                                ],
                                "faction": [
                                        "Doctrina Imperatives"
                                ],
                                "wargear": [],
                                "other": [
                                        "Voices in the Code",
                                        "Neurostatic Interference"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Imperium",
                                "Skitarii",
                                "Sicarian",
                                "Infiltrators"
                        ],
                        "factionKeywords": [
                                "Adeptus Mechanicus"
                        ],
                        "compositionText": "1 Sicarian Infiltrator Princeps 4-9 Sicarian Infiltrators Every model is equipped with: stubcarbine; power weapon."
                },
                {
                        "id": "admech-sicarian-ruststalkers",
                        "name": "Sicarian Ruststalkers",
                        "role": "infantry",
                        "points": [
                                {
                                        "models": 5,
                                        "cost": 80
                                },
                                {
                                        "models": 10,
                                        "cost": 165
                                }
                        ],
                        "stats": {
                                "m": "8\"",
                                "t": 4,
                                "sv": "4+",
                                "w": 2,
                                "ld": "7+",
                                "oc": 1
                        },
                        "invuln": "5+",
                        "weapons": {
                                "ranged": [],
                                "melee": [
                                        {
                                                "name": "Transonic blades",
                                                "range": "Melee",
                                                "a": 5,
                                                "ws": "4+",
                                                "s": 5,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Devastating Wounds",
                                                        "Precision"
                                                ]
                                        },
                                        {
                                                "name": "Transonic blades and chordclaw",
                                                "range": "Melee",
                                                "a": 5,
                                                "ws": "4+",
                                                "s": 5,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": [
                                                        "Anti-Infantry 3+",
                                                        "Devastating Wounds",
                                                        "Precision"
                                                ]
                                        },
                                        {
                                                "name": "Transonic razor and chordclaw",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "4+",
                                                "s": 5,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Anti-Infantry 3+",
                                                        "Precision"
                                                ]
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Stealth"
                                ],
                                "faction": [
                                        "Doctrina Imperatives"
                                ],
                                "wargear": [],
                                "other": [
                                        "Optimised Gait"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Imperium",
                                "Skitarii",
                                "Sicarian",
                                "Ruststalkers"
                        ],
                        "factionKeywords": [
                                "Adeptus Mechanicus"
                        ],
                        "compositionText": "1 Sicarian Ruststalker Princeps 4-9 Sicarian Ruststalkers Every model is equipped with: transonic razor and chordclaw."
                },
                {
                        "id": "admech-skorpius-disintegrator",
                        "name": "Skorpius Disintegrator",
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
                                "sv": "2+",
                                "w": 12,
                                "ld": "7+",
                                "oc": 3
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Belleros energy cannon",
                                                "range": "36\"",
                                                "a": "2D6",
                                                "bs": "4+",
                                                "s": 7,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": [
                                                        "Blast",
                                                        "Indirect Fire"
                                                ]
                                        },
                                        {
                                                "name": "Cognis heavy stubber",
                                                "range": "36\"",
                                                "a": 3,
                                                "bs": "4+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Rapid Fire 3",
                                                        "Sustained Hits 1"
                                                ]
                                        },
                                        {
                                                "name": "Disruptor missile launcher",
                                                "range": "36\"",
                                                "a": 3,
                                                "bs": "4+",
                                                "s": 9,
                                                "ap": -2,
                                                "d": "D6",
                                                "keywords": [
                                                        "Twin-Linked"
                                                ]
                                        },
                                        {
                                                "name": "Ferrumite cannon",
                                                "range": "48\"",
                                                "a": 3,
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
                                        "Doctrina Imperatives"
                                ],
                                "wargear": [],
                                "other": [
                                        "Broad Spectrum Data-tether",
                                        "Blistering Salvoes"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Imperium",
                                "Skitarii",
                                "Smoke",
                                "Skorpius Disintegrator"
                        ],
                        "factionKeywords": [
                                "Adeptus Mechanicus"
                        ],
                        "compositionText": "1 Skorpius Disintegrator This model is equipped with: belleros energy cannon; 3 cognis heavy stubbers; disruptor missile launcher; armoured hull. DAMAGED: 1-4 WOUNDS REMAINING While this model has 1-4 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
                },
                {
                        "id": "admech-sydonian-dragoons-with-radium-jezzails",
                        "name": "Sydonian Dragoons with Radium Jezzails",
                        "role": "vehicle",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 55
                                },
                                {
                                        "models": 2,
                                        "cost": 100
                                },
                                {
                                        "models": 3,
                                        "cost": 150
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
                        "invuln": "5+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Phosphor serpenta",
                                                "range": "18\"",
                                                "a": 1,
                                                "bs": "4+",
                                                "s": 5,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Ignores Cover",
                                                        "Pistol"
                                                ]
                                        },
                                        {
                                                "name": "Radium jezzail",
                                                "range": "36\"",
                                                "a": 1,
                                                "bs": "4+",
                                                "s": 5,
                                                "ap": -2,
                                                "d": 3,
                                                "keywords": [
                                                        "Anti-Infantry 3+",
                                                        "Heavy",
                                                        "Precision"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Ironstrider feet",
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
                                        "Stealth"
                                ],
                                "faction": [
                                        "Doctrina Imperatives"
                                ],
                                "wargear": [],
                                "other": [
                                        "Focused Hunters",
                                        "Broad Spectrum Data-tether"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Walker",
                                "Smoke",
                                "Imperium",
                                "Skitarii",
                                "Sydonian",
                                "Dragoons With Radium Jezzails"
                        ],
                        "factionKeywords": [
                                "Adeptus Mechanicus"
                        ],
                        "compositionText": "1-3 Sydonian Dragoons Every model is equipped with: phosphor serpenta; radium jezzail; Ironstrider feet."
                },
                {
                        "id": "admech-sydonian-dragoons-with-taser-lances",
                        "name": "Sydonian Dragoons with Taser Lances",
                        "role": "vehicle",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 65
                                },
                                {
                                        "models": 2,
                                        "cost": 130
                                },
                                {
                                        "models": 3,
                                        "cost": 195
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
                        "invuln": "5+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Phosphor serpenta",
                                                "range": "18\"",
                                                "a": 1,
                                                "bs": "4+",
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
                                                "name": "Taser lance",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "4+",
                                                "s": 7,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Anti-Walker 2+",
                                                        "Lance",
                                                        "Sustained Hits 2"
                                                ]
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Deadly Demise 1",
                                        "Stealth"
                                ],
                                "faction": [
                                        "Doctrina Imperatives"
                                ],
                                "wargear": [],
                                "other": [
                                        "Dynamic Efficiency",
                                        "Broad Spectrum Data-tether"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Walker",
                                "Smoke",
                                "Imperium",
                                "Skitarii",
                                "Sydonian",
                                "Dragoons With Taser Lances"
                        ],
                        "factionKeywords": [
                                "Adeptus Mechanicus"
                        ],
                        "compositionText": "1-3 Sydonian Dragoons Every model is equipped with: phosphor serpenta; taser lance."
                }
        ]
    };

    window.W40K_FACTIONS = window.W40K_FACTIONS || { "10th": [], "11th": [] };
    window.W40K_FACTIONS["10th"].push(admech);
})();
