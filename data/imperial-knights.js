/**
 * W40K Army Builder — Imperial Knights (10th Edition)
 *
 * Datasheets from Codex: Imperial Knights. Names-only abilities/rules;
 * stats, weapons, points and keywords are factual game data.
 * Legends and Forge World datasheets are intentionally omitted.
 *
 * Self-registers into window.W40K_FACTIONS, assembled by data/factions.js.
 */
(function () {
    "use strict";

    const ik = {
        id: "imperial-knights",
        name: "Imperial Knights",
        icon: "🏰",
        allegiance: "Imperium",
        flavour: "",
        armyRules: [
            { name: "Code Chivalric", flavour: "Imperial Knights fight by a stringent set of codes. In addition to defeating the foe, honour must always be upheld.", text: "If your Army Faction is IMPERIAL KNIGHTS, at the end of the Read Mission Objectives step, you must determine your army's Oath for the coming battle. An Oath consists of two parts - one Deed and one Quality. There are three options for each part, shown below.\n\nTo determine your army's Deed, you can either select one Deed or you can randomly select one Deed by rolling a D6 and consulting the relevant table below. The selected Deed will describe what needs to be achieved in order to complete that Deed.\n\nTo determine your army's Quality, you can either select one Quality or you can randomly select one Quality by rolling a D6 and consulting the relevant table below. Until the end of the battle, the ability described in the Quality selected applies to all models in your army with this ability.\n\nThe first time your selected Deed is completed your Oath is fulfilled and, until the end of the battle, your army becomes Honoured and you gain 2CP, or 3CP if you randomly selected your Deed and/or Quality (CP gained in this way are an exemption to the Core Rules that limit the maximum number of CP you can gain per battle round to 1).\n\nDEED:\n- (1-2) We vow to lay low the tyrant...: At the start of the battle, select one CHARACTER model in your opponent's army. This Deed is completed at the end of a turn if that CHARACTER is destroyed.\n- (3-4) We swear to reclaim the realm...: This deed is completed at the end of your opponent's turn if you control more objective markers than your opponent.\n- (5-6) We pledge to reap a great tally...: This deed is completed at the end of the battle round if the number of enemy units destroyed this battle round is greater than the battle round number even if those units are subsequently returned to the battlefield (for example, two destroyed enemy units in the first battle round).\n\nQUALITY:\n- (1-2) ...with our martial valour risen over all.: Each time this model is selected to shoot or fight, you can re-roll one Hit roll and you can re-roll one Wound roll.\n- (3-4) ...and we are eager for the challenge.: Add 2\" to this model's Move characteristic and add 1 to Advance and Charge rolls made for this model.\n- (5-6) ...yet shall our legacy be unsullied.: Improve this model's Objective Control characteristic by 2 and its Leadership characteristic by 1." },
            { name: "Bondsman", flavour: "Those honoured to serve a great hero do so unto death.", text: "Some IMPERIAL KNIGHTS models have a Bondsman ability, tagged with the word 'Bondsman'. In your Command phase, one or more models from your army with a Bondsman ability can use that ability. For each one that does, select one friendly ARMIGER model within 12\" of that model (you cannot select an ARMIGER model that is already being affected by a Bondsman ability). Until the start of your next Command phase, that ARMIGER model is affected by that Bondsman ability." },
            { name: "Super-heavy Walker", flavour: "Imperial Knights tower over the battlefield, striding over lesser warriors to eagerly engage the foe.", text: "Each time a model with this ability makes a Normal, Advance or Fall Back move, it can move through models (excluding TITANIC models) and sections of terrain features that are 4\" or less in height. When doing so:\n- It can move within Engagement Range of enemy models, but cannot end that move within Engagement Range of them.\n- It can also move through sections of terrain features that are more than 4\" in height, but if it does, after it has moved, roll one D6: on a 1, that model is Battle-shocked." },
            { name: "Freeblades", flavour: "Freeblades often wander the galaxy, aiding the armies of the Imperium against the xenos and heretics who threaten the Emperor's realm.", text: "If every model in your army has the IMPERIUM keyword, you can include either one TITANIC IMPERIAL KNIGHTS model or up to three ARMIGER models in your army, even if they do not have the Faction keyword you selected in the Select Army Faction step. None of these models can be your WARLORD, and they cannot be given Enhancements." }
        ],
        detachments: [
            {
                name: "Valourstrike Lance",
                flavour: "To crusade as part of a lance of Knightly companions is to be inspired to heights of noble heroism and feel the surge of honour that flows through the Throne Mechanicum. Valourstrike Lances epitomise the bold gallantry of Imperial Knights and the unbreakable fellowship that binds them. Their Noble warriors and loyal squires thunder into battle like an iron-shod storm. Barrages of unremitting firepower herald their assault, bolts of energy and clusters of heavy ordnance lancing out to punish the dishonourable foe. The Knights do not slow for a moment; their enemy deserves no such sufferance. The speed of their long strides carries the Noble companions into the foes' holdouts. With the monumental power at their command, valorous groups of Knights lay waste to one swathe of enemies after another. Theirs is a selfless strength that shields and inspires their fellow Knights. It is a thunderous power that sees them punch through defensive lines, artillery emplacements and desperate counterstrikes by the foe until nothing but ruin is left in their wake.",
                rule: { name: "Bold Gallantry", flavour: "With their companions beside them - kin of their blood, allies in honour - Knightly Nobles are inspired to near-reckless heroism. Their fervour spreads through neural interfaces to reach the machine spirits of their towering Knight suits. The Knights' power cores flare with motive energy. Target stabilisers sputter into life, glaring balefully at the foe. Servo-motors and fibre bundles thrum, powering the Nobles' steeds to a thunderous speed, such that the ground trembles.", text: "Each time an IMPERIAL KNIGHTS unit from your army Advances, until the end of the turn, ranged weapons equipped by IMPERIAL KNIGHTS models from your army have the [Assault] ability.", restrictions: "" },
                enhancements: [
                    { name: "Bearer of the Iron Chalice", cost: 20, restriction: "IMPERIAL KNIGHTS model only.", text: "Deep within the Knight's chassis is an ancient STC artefact. The device communes with its weakened machine spirit kin, bolstering their resolve to endure.\n\nAt the end of your Movement phase, select one other IMPERIAL KNIGHTS model from your army that is within 12\" of and visible to the bearer. That selected model regains up to D3 lost wounds, or up to 3 lost wounds if your army is Honoured." },
                    { name: "Bearer of the Evanescent Ion", cost: 15, restriction: "IMPERIAL KNIGHTS model only.", text: "This Knight's ion shield projects a stream of nictitating particles that can obscure fellow Nobles from sight.\n\nAt the end of your Movement phase, select one other IMPERIAL KNIGHTS model from your army that is within 12\" of and visible to the bearer. Until the start of your next Movement phase, that selected model has the Stealth ability." },
                    { name: "Bearer of the Judicant's Helm", cost: 25, restriction: "IMPERIAL KNIGHTS model only.", text: "A courtly counsellor against deception and a visionary hunter of lurking prey, this Noble's sage advice unmasks the contemptible before their companions.\n\nAt the start of your Shooting phase, select one other IMPERIAL KNIGHTS model from your army that is within 12\" of and visible to the bearer. Until the end of the phase, ranged weapons equipped by that selected model have the [Ignores Cover] ability." },
                    { name: "Bearer of the Lancer's Sigil", cost: 25, restriction: "IMPERIAL KNIGHTS model only.", text: "Honoured with a vivid heraldic insignia, this Noble is a wise mentor in the deadly art of battlefield intercession.\n\nAt the start of your Charge phase, select one other IMPERIAL KNIGHTS model from your army that is within 12\" of and visible to the bearer. Until the end of the phase, you can re-roll Charge rolls made for that selected model." },
                ],
                stratagems: [
                    { name: "Run Them Through!", cp: 1, type: "Strategic Ploy", when: "Fight phase.", target: "One IMPERIAL KNIGHTS unit from your army that has not been selected to fight this phase.", effect: "Until the end of the phase, melee weapons equipped by your models have the [Lance] ability.", restrictions: "" },
                    { name: "Thunderstomp", cp: 1, type: "Battle Tactic", when: "Fight phase.", target: "One IMPERIAL KNIGHTS model from your army that has not been selected to fight this phase.", effect: "Until the end of the phase, the Attacks characteristic of any armoured Feet melee weapons equipped by your model is 8, the Attacks characteristic of any titanic Feet melee weapons equipped by your model is 12, and improve the Armour Penetration characteristic of those weapons by 1.", restrictions: "" },
                    { name: "Full Tilt", cp: 2, type: "Battle Tactic", when: "Your Movement phase.", target: "One IMPERIAL KNIGHTS unit from your army that has not been selected to move this phase.", effect: "Until the end of the phase, add 2\" to the Move characteristic of your models and add 2 to Advance rolls made for those model's units.", restrictions: "" },
                    { name: "Vow of Retribution", cp: 1, type: "Strategic Ploy", when: "Your Shooting phase.", target: "One IMPERIAL KNIGHTS unit from your army that has not been selected to shoot this phase.", effect: "Until the end of the phase, ranged weapons equipped by your models have the [Lethal Hits] ability.", restrictions: "" },
                    { name: "Tactical Foil", cp: 1, type: "Strategic Ploy", when: "Your opponent's Movement phase, just after an enemy unit ends a Normal, Advance or Fall Back move.", target: "One IMPERIAL KNIGHTS model from your army that is within 9\" of that unit.", effect: "Your model can make a Normal move of up to D6\".", restrictions: "" },
                    { name: "Rotate Ion Shields", cp: 1, type: "Wargear", when: "Your opponent's Shooting phase, just after an enemy unit has selected its targets.", target: "One IMPERIAL KNIGHTS unit from your army that was selected as the target of one or more of the attacking unit's attacks.", effect: "Until the end of the phase, models in your unit have a 4+ invulnerable save.", restrictions: "" },
                ]
            },
            {
                name: "Gate Warden Lance",
                flavour: "The forebears of Knightly Nobles secured their sprawling citadels through Old Night and whispered advice from those times still haunts the oldest Thrones Mechanicum. For generations since, Gate Warden Lances of Knights have thrown back xenos, heretics and mutants not only from their own walls but from those on worlds across the galaxy. Whether a physical revetment exists to guard or not, the Nobles know their duty. They treat the battlefield as their walled realm, with themselves as its bastions. Gigantic Dominus-class Knights anchor defensive positions, hurling murderous salvoes at encroaching enemies. Bondsmen piloting swift Armigers stand ready to lope forwards and stem encirclements of the Knights' lines. Knights Crusader scythe down infantry besieging their chosen embrasures while Knights Defender stride into line to bolster positions with thrumming void shields. Should the enemy attempt to breach the Knights' lines, the Nobles sally forth in a thunderous countercharge, challenges blaring from war horns as they dam the tide.",
                rule: { name: "Dauntless Defenders", flavour: "With a rigid, strategic intuition born of the unyielding fortifications defended by their ancestors, the Nobles of a Gate Warden Lance hold their ground with an arrogant superiority. While even one defends the marches of their claimed realm, they will fight to the ends of their honour to hurl back the besiegers.", text: "At the start of the first battle round, select two objective markers on the battlefield to be your foundations. When you draw a line from any part of one of your foundations to the other, if any part of a model's base (or any part of a model's hull, for a model without a base) crosses that line, that model's unit is said to be on your defensive line.\n\nWhile an IMPERIAL KNIGHTS unit from your army is on your defensive line, that unit has the following ability:\n\nAgainst the Horde: Each time a model in this unit makes an attack that targets a visible enemy unit, you can ignore any or all modifiers to the Hit roll, and weapons equipped by models in this unit have the [Sustained Hits 1] ability.\n\nEach time one of your foundations is removed from the battlefield (e.g. by a Primary Mission rule), just after it is removed, select a new objective marker on the battlefield to be one of your foundations.", restrictions: "" },
                enhancements: [
                    { name: "Acquisitor-at-Arms", cost: 15, restriction: "IMPERIAL KNIGHTS model only.", text: "This stern Noble serves their household by seizing territories and domains deemed the property of their lord. They are a grim and fearsome agent who inspires their charges with an unwillingness to relent.\n\nWhile the bearer is on your defensive line and there are no enemy units on your defensive line, add the bearer's Objective Control characteristic to that of each model affected by the bearer's Bondsman ability." },
                    { name: "Purgation's Hand", cost: 20, restriction: "IMPERIAL KNIGHTS model only.", text: "The Noble dubbed with this honourable title has sworn to purge the frontiers of their realm, scouring it clean of the stain of everything foul and inimical to the Code.\n\nEach time the bearer makes a melee attack, if the bearer is on your defensive line, re-roll a Hit roll of 1 and re-roll a Wound roll of 1." },
                    { name: "Augury Halo", cost: 20, restriction: "IMPERIAL KNIGHTS model only.", text: "This web of neuro-couplings has been worked into a richly ornamented helmet. Through it, the Noble pilot can access nearby hidden augur nodes deployed by servitor clades of the Sacristans, inloading targeting data to pick out the locations of shrouded besiegers.\n\nEach time the bearer makes a ranged attack, while the bearer is on your defensive line, weapons equipped by the bearer have the [Ignores Cover] ability." },
                    { name: "Vengeful Tread", cost: 15, restriction: "IMPERIAL KNIGHTS model only.", text: "The punitive anger of this pilot towards those who dare defile their realm is terrifying to behold. War horns blaring, they barge and trample forward, crushing their lessers in a terminal lesson of humility.\n\nOnce per turn, you can target the bearer with the Tank Shock Stratagem for 0CP." },
                ],
                stratagems: [
                    { name: "Drive Them Out!", cp: 1, type: "Battle Tactic", when: "Your Shooting phase or the Fight phase.", target: "One IMPERIAL KNIGHTS unit from your army that has not been selected to shoot or fight this phase.", effect: "Until the end of the phase, each time a model in your unit makes an attack that targets an enemy unit on your defensive line, an unmodified Hit roll of 5+ scores a Critical Hit.", restrictions: "" },
                    { name: "Lancebreaker", cp: 1, type: "Strategic Ploy", when: "Fight phase, just after an enemy unit has selected its targets.", target: "One IMPERIAL KNIGHTS unit from your army that was selected as the target of one or more of the attacking unit's attacks and is on your defensive line.", effect: "Until the end of the phase, each time an attack targets your unit, if the Strength characteristic of that attack is greater than the Toughness characteristic of your unit, subtract 1 from the Wound roll.", restrictions: "" },
                    { name: "Steadfast Superiority", cp: 1, type: "Battle Tactic", when: "Fight phase.", target: "One IMPERIAL KNIGHTS unit from your army that is within Engagement Range of one or more enemy units, that is on your defensive line and that has not already been selected to fight this phase.", effect: "Until the end of the phase, each time a model in your unit makes an attack, you can re-roll the Hit roll.", restrictions: "" },
                    { name: "Marshal the Defence", cp: 1, type: "Battle Tactic", when: "Your Movement phase.", target: "Up to two IMPERIAL KNIGHTS units from your army that have not been selected to move this phase.", effect: "Until the end of the phase, add 3\" to the Move characteristic of models in your units.", restrictions: "" },
                    { name: "Titanic Bombardment", cp: 1, type: "Battle Tactic", when: "Your Shooting phase.", target: "One IMPERIAL KNIGHTS TITANIC unit from your army that Remained Stationary this turn, that is on your defensive line and that has not been selected to shoot this phase.", effect: "Until the end of the phase, ranged weapons equipped by models in your unit have the [Sustained Hits 2] ability.", restrictions: "" },
                    { name: "Fortress of Intimidation", cp: 1, type: "Epic Deed", when: "Start of your opponent's Charge phase.", target: "One IMPERIAL KNIGHTS TITANIC unit from your army that is on your defensive line.", effect: "Until the end of the phase, each time an enemy unit selects your unit as a target of a charge, that unit must take a Battle-shock test, subtracting 1 from the result.", restrictions: "" },
                ]
            },
            {
                name: "Questoris Companions",
                flavour: "The legendary deeds of groups of Knightly champions are known across the Imperium. Epic lays have been inspired by crusading lances of a household's greatest warriors, isolated bands of Knights who have fought their way to victory and honoured fellowships of Freeblades oathed to fight in chivalrous companionship until death claims them. Bonded by vows of honour, these Questoris Companions marshal their strength, their courage and the incredible power of their titanic Knight suits to undertake heroic feats of epic gallantry to achieve their quest. Individual Knights hold back armoured columns in glorious acts of selflessness to guard their companions' flanks. Others wade alone into overwhelming odds, slamming enemy battle tanks through the air and crushing infantry underfoot. The most threatening of the foe are singled out for thunderous duels, and their humbling is a terrifying blow to enemy morale. With a rigid notion of their quest's righteousness, the companions drive onwards in a ferocious display of titanic might.",
                rule: { name: "Heroes of Legend", flavour: "To those who quest for honour - in service to their liege, to avenge atrocities, to wipe clean the stain of disfavour - there can be no end. The Imperium's foes are legion, an endless horde from which more arise. As one quest ends, another always begins.", text: "At the start of your turn, if your current Oath is fulfilled, determine an additional Oath as described here, with the exception that you cannot select a Deed or Quality you have already selected (if you are randomly selecting the Deed and/or Quality and roll any result that you have already selected, select a Deed or Quality you have not already selected instead). If you cannot determine an additional Oath because you have already selected each Deed and each Quality, do not determine an additional Oath.\n\nThe Qualities from Oaths you have fulfilled continue to apply to all models in your army with the Code Chivalric ability. When the Deed for an additional Oath is completed, you instead gain 1CP, regardless of how you selected the Deed or Quality.\n\nValour's Reward: With every deed sealed with honour, every clarion call heralding a duty met, a champion's spirit is strengthened and their ardour restored.\nThe Enhancements shown below can become expended. You cannot use such Enhancements while they are expended. Each time you fulfil your Oath, each expended Enhancement is no longer expended.", restrictions: "" },
                enhancements: [
                    { name: "Herald of Triumph", cost: 15, restriction: "IMPERIAL KNIGHTS model only.", text: "This Noble's arrogant challenges herald a feat of victory, a promise of death that blares from their suit's emitters.\n\nWhen the bearer ends a Charge move, it can use this Enhancement. If it does, this Enhancement is expended, then each enemy unit within Engagement Range of the bearer must take a Battle-shock test, subtracting 1 from the result." },
                    { name: "Wyrmslayer Divination", cost: 10, restriction: "IMPERIAL KNIGHTS model only.", text: "Whispered to a Knight's machine spirit before battle, this techno-omen prophesies doom for airborne foes.\n\nIn your Shooting phase, when the bearer is selected to shoot, it can use this Enhancement. If it does, this Enhancement is expended, then until the end of the phase, each time it makes an attack that targets a unit that can FLY, you can re-roll the Hit roll." },
                    { name: "Pennant of Silvered Fury", cost: 15, restriction: "IMPERIAL KNIGHTS model only.", text: "This circuit-etched pennant marks a slayer of hordes and is linked to a glowing electoo beneath the pilot's skin.\n\nWhen the bearer is selected to fight, it can use this Enhancement. If it does, this Enhancement is expended, then until the end of the phase, melee weapons equipped by the bearer have the [Sustained Hits 2] ability." },
                    { name: "Crushing Condemnation", cost: 10, restriction: "IMPERIAL KNIGHTS model only.", text: "With the sweep of an armoured limb, the Noble can cast wreckage and ruin towards yet another foe.\n\nWhen the bearer is selected to fight, after resolving its attacks, if one or more enemy units were destroyed by those attacks, the bearer can use this Enhancement. If it does, this Enhancement is expended, then select one enemy unit that is not within Engagement Range of any units from your army and is within 12\" of and visible to the bearer. Roll six D6: for each 4+, that enemy unit suffers 1 mortal wound." },
                ],
                stratagems: [
                    { name: "Courageous Stand", cp: 1, type: "Epic Deed", when: "Your opponent's Shooting phase or the Fight phase, just after an enemy unit has selected its targets.", target: "One IMPERIAL KNIGHTS TITANIC unit from your army that was selected as the target of one or more of the attacking unit's attacks.", effect: "Until the end of the phase, models in your unit have the Feel No Pain 6+ ability.", restrictions: "" },
                    { name: "Titanic Duel", cp: 1, type: "Epic Deed", when: "Your Shooting phase or the Fight phase.", target: "One IMPERIAL KNIGHTS TITANIC model from your army that has not been selected to shoot or fight this phase.", effect: "Until the end of the phase, each time your model makes an attack that targets a MONSTER, TITANIC or WALKER unit, add 1 to the Hit roll and add 1 to the Wound roll.", restrictions: "" },
                    { name: "Moment of Glory", cp: 1, type: "Epic Deed", when: "Fight phase, just before an IMPERIAL KNIGHTS TITANIC unit from your army Consolidates.", target: "That IMPERIAL KNIGHTS TITANIC unit.", effect: "Until the end of the phase, each time your unit Consolidates, models in it can move an additional 3\" provided your unit can end that move within Engagement Range of one or more enemy units.", restrictions: "" },
                    { name: "Hero's Tread", cp: 1, type: "Epic Deed", when: "End of your Command phase.", target: "One IMPERIAL KNIGHTS TITANIC model from your army that is within range of an objective marker you control.", effect: "Your Level of Control over that objective marker is 5 (unless it would otherwise be higher), until your opponent's Level of Control over that objective marker is greater than yours at the end of a phase.", restrictions: "" },
                    { name: "Unstoppable Warrior", cp: 2, type: "Epic Deed", when: "Your Movement phase, just after an IMPERIAL KNIGHTS TITANIC unit from your army Falls Back.", target: "That IMPERIAL KNIGHTS TITANIC unit.", effect: "Until the end of the turn, your unit is eligible to shoot and declare a charge in a turn in which it Fell Back.", restrictions: "" },
                    { name: "Driven by the Past", cp: 1, type: "Epic Deed", when: "Your Charge phase.", target: "One IMPERIAL KNIGHTS TITANIC unit from your army.", effect: "Until the end of the turn, your unit is eligible to declare a charge in a turn in which it Advanced.", restrictions: "" },
                ]
            },
            {
                name: "Spearhead-at-arms",
                flavour: "When deployed in large numbers, the swift and agile Armiger-class Knight suits can outmanoeuvre most foes. They strike and withdraw on simultaneous fronts to cut apart more unwieldy armies. Deployed as a Spearhead-at-Arms, meanwhile, and leashed to their Noble masters' stern wisdom, their loyal conditioning and rapid adoption of complex strategies enable them to eviscerate any enemy. With loping strides, the lead Armigers fan out as a swift vanguard. They devastate enemy scouts and flush war engines into the sights of their lords and ladies. Banners of Armiger Helverins stalk into firing positions like towering assassins, spitting death into assigned targets of heavy infantry or snatching grav-tanks from the sky in blazing fireballs. Armiger Warglaives pounce on enemy fire points or ambush enemy assault formations, their reaper chain-cleavers howling as they chew through armour. They are their masters' hounds, shield-bearers and heavily armed retainers in one, galvanised into deadly coordination through honoured service.",
                rule: { name: "Knightly Teachings", flavour: "Knightly Nobles are exalted paragons of honour who uphold the tenets of the Code Chivalric and the glorious histories of their household. Through stern teachings and heroic tales, and no less their own deeds, they exemplify the virtues which Bondsmen aspire to emulate. It is not only in courtly life, upon the practice fields and during thrilling hunts that a Noble's squires and retainers cleave to their duty, but also in the fiery heart of every battle. There such teachings are tested as never before, and also find their most lauded expressions.", text: "Each time a model from your army uses its Bondsman ability, if no other model from your army has used that Bondsman ability that turn, you can select up to three friendly ARMIGER models (instead of one) within 12\" of that model, or within 15\" of that model while your army is Honoured (you still cannot select a model that is already being affected by a Bondsman ability). Until the start of your next Command phase, those models are affected by that Bondsman ability.", restrictions: "KEYWORDS: ARMIGER models from your army gain the BATTLELINE keyword." },
                enhancements: [
                    { name: "Mentor's Pride", cost: 20, restriction: "IMPERIAL KNIGHTS model only.", text: "A draconian enforcer of stringent standards, when this stern Noble does acknowledge pride in their servants, their Bondsmen zealously strive to retain it.\n\nWhile two or more ARMIGER models are under the effects of the bearer's Bondsman ability, each time each of those ARMIGER models makes an attack, you can re-roll a Hit roll of 1." },
                    { name: "Fables of Nightmare", cost: 10, restriction: "IMPERIAL KNIGHTS model only.", text: "Many are the fiends and unnamed dooms that lead hosts of darkness in the oldest tales. Their retelling spurs this Noble's Bondsmen to seek out the lurking commanders of the foe and cut them down, so that they may end the spread of their evil.\n\nWhile two or more ARMIGER models are under the effects of the bearer's Bondsman ability, melee weapons equipped by those ARMIGER models have the [Precision] ability." },
                    { name: "Tales of Heroism", cost: 10, restriction: "IMPERIAL KNIGHTS model only.", text: "Recounting the valorous feats of legendary Nobles, this champion inspires their squires to deride and denounce the foe's every attempt at evading a just execution.\n\nWhile two or more ARMIGER models are under the effects of the bearer's Bondsman ability, each time one of those ARMIGER models makes a melee attack, you can ignore any or all modifiers to the Hit roll and/or the Wound roll." },
                    { name: "Martial Tuition", cost: 15, restriction: "IMPERIAL KNIGHTS model only.", text: "Long has this Noble trained their Bondsmen in hunting the deadliest prey, instilling in them the skills to honourably exploit any opening in an enemy's defence.\n\nWhile two or more ARMIGER models are under the effects of the bearer's Bondsman ability, once per turn, you can target one of those ARMIGER models with the Counter-offensive Stratagem for 0CP." },
                ],
                stratagems: [
                    { name: "Virtue of Courage", cp: 1, type: "Battle Tactic", when: "Start of the Fight phase.", target: "One ARMIGER model from your army, or one IMPERIAL KNIGHTS TITANIC model from your army, and one or more friendly ARMIGER models affected by that model's Bondsman ability.", effect: "Select one enemy unit. Until the end of the phase, each time one of your ARMIGER models makes an attack that targets that enemy unit, add 1 to the Hit roll.", restrictions: "" },
                    { name: "Exemplar's Wisdom", cp: 1, type: "Battle Tactic", when: "Your Shooting phase, just after an IMPERIAL KNIGHTS TITANIC model from your army has shot.", target: "That IMPERIAL KNIGHTS TITANIC model, and one or more friendly ARMIGER models affected by that model's Bondsman ability.", effect: "Select one enemy unit hit by one or more of those attacks. Until the end of the phase, each time one of your ARMIGER models makes an attack that targets that enemy unit, improve the Armour Penetration characteristic of that attack by 1.", restrictions: "" },
                    { name: "Mantle of the Mentor", cp: 1, type: "Strategic Ploy", when: "Start of your Shooting phase.", target: "One ARMIGER model from your army, or one IMPERIAL KNIGHTS TITANIC model from your army, and one or more friendly ARMIGER models affected by that model's Bondsman ability.", effect: "Until the end of the phase, your ARMIGER models are eligible to shoot in a turn in which they Fell Back.", restrictions: "" },
                    { name: "Thin Their Ranks", cp: 1, type: "Battle Tactic", when: "Start of your Shooting phase.", target: "One ARMIGER model from your army, or one IMPERIAL KNIGHTS TITANIC model from your army, and one or more friendly ARMIGER models affected by that model's Bondsman ability.", effect: "Until the end of the phase, ranged weapons equipped by your ARMIGER models have the [Rapid Fire 1] ability.", restrictions: "" },
                    { name: "Let Duty Be Your Shield", cp: 1, type: "Epic Deed", when: "Your opponent's Shooting phase, just after an enemy unit has selected its targets.", target: "One ARMIGER unit from your army that was selected as the target of one or more of the attacking unit's attacks.", effect: "Until the attacking unit has finished making its attacks, each time an attack targets your unit, worsen the Armour Penetration characteristic of that attack by 1.", restrictions: "" },
                    { name: "Squires of the Hunt", cp: 1, type: "Strategic Ploy", when: "End of your opponent's Fight phase.", target: "One ARMIGER model from your army, or one IMPERIAL KNIGHTS TITANIC model from your army, and one or more friendly ARMIGER models affected by that model's Bondsman ability.", effect: "For each of your ARMIGER models that is within 9\" of one or more battlefield edges and not within Engagement Range of one or more enemy units, remove that ARMIGER model from the battlefield and place it into Strategic Reserves.", restrictions: "" },
                ]
            },
            {
                name: "Freeblade Company",
                flavour: "Many Freeblades become figures of legend, whether for their mighty deeds or thanks to their strange and supernatural natures. Often they fight alone. However, when fate brings several such wanderers together they are capable of defeating entire armies, and of carving out names for themselves that echo through the ages. Each brings unique skills and experiences to the muster. Some wield ancient relic weapons from the Dark Age of Technology. Others are masters of battling a particular foe, exemplars of an unusual way of war, or have been turned fey and dangerous by the touch of sorcery or strange cosmic phenomena. Combining such unusual abilities and tactics, Freeblades can surprise their enemies at every turn by attacking in unorthodox ways and unleashing unexpected weapons and powers. Each scion amongst them is a storied veteran who knows just where to place their shots and land their blows to inflict maximum devastation. Against such titanic and canny foes, few enemies can stand for long.",
                rule: { name: "Knights of Legend", flavour: "Warriors such as these are truly indomitable. Driven on by deadly oaths, bolstered by ancient technology or shimmering with supernatural energies, they stride through the most punishing firestorms to emerge victorious on the other side.", text: "IMPERIAL KNIGHTS models from your army have the Feel No Pain 6+ ability. In addition, at the start of your Command phase, each IMPERIAL KNIGHTS model from your army regains 1 lost wound.", restrictions: "" },
                enhancements: [
                    { name: "Bringer of Justice", cost: 30, restriction: "IMPERIAL KNIGHTS model only.", text: "It is said that whenever this famed weapon is brought to life, it shall not fall silent until it has slaked its thirst for justice.\n\nImprove the Attacks characteristic of melee weapons equipped by the bearer by 2, and each time the bearer makes a melee attack, add 1 to the Hit roll." },
                    { name: "Hunter's Eye", cost: 25, restriction: "IMPERIAL KNIGHTS model only.", text: "This remarkable data-manifold surrounds a scion with holo-projected bioscans and engine-signature readouts, whose gaze penetrates the densest terrain as though it was not there.\n\nRanged weapons equipped by the bearer have the [Ignores Cover] ability." },
                    { name: "Mysterious Guardian", cost: 35, restriction: "IMPERIAL KNIGHTS model only.", text: "Manifesting as though from nowhere, this Knight is an elemental force of vengeance against the Emperor of Mankind's foes. At battle's end, it disappears as mysteriously as it arrived.\n\nThe bearer has the Deep Strike ability. Once per battle, at the end of your opponent's turn, if the bearer is not within Engagement Range of one or more enemy units, it can use this Enhancement. If it does, remove the bearer from the battlefield. In the Reinforcements step of your subsequent Movement phase, set the bearer up anywhere on the battlefield that is more than 9\" horizontally away from all enemy units. If the battle ends and the bearer is not on the battlefield, it is destroyed." },
                    { name: "Sanctuary", cost: 20, restriction: "IMPERIAL KNIGHTS model only.", text: "Through the projection of rapidly modulating ion fields, this unique generator's effects wreathe the suit in an all encompassing fog of protective energies that defend it from close-quarters attacks.\n\nThe bearer has a 5+ invulnerable save." },
                ],
                stratagems: [
                    { name: "Noble Sacrifice", cp: 1, type: "Epic Deed", when: "Any phase.", target: "One IMPERIAL KNIGHTS unit from your army that was just destroyed. You can target that unit with this Stratagem even though it was just destroyed.", effect: "Your unit's Deadly Demise ability inflicts mortal wounds on a D6 roll of 4+, adding 1 to the result if it is an ARMIGER unit, instead of only a 6.", restrictions: "" },
                    { name: "Strength from Exile", cp: 1, type: "Battle Tactic", when: "Your Shooting phase or the Fight phase.", target: "One IMPERIAL KNIGHTS unit from your army that has not been selected to shoot or fight this phase.", effect: "Until the end of the phase, each time a model in your unit makes an attack, if there are no other friendly units within 9\" of your unit, re-roll a Hit roll of 1 and re-roll a Wound roll of 1.", restrictions: "" },
                    { name: "Full Tilt", cp: 1, type: "Wargear", when: "Your Movement phase.", target: "One IMPERIAL KNIGHTS unit from your army.", effect: "Until the end of the phase, if your unit Advances, do not make an Advance roll for it. Instead, until the end of the phase, add 6\" to the Move characteristic of models in your unit, or 9\" instead if your unit is an ARMIGER unit.", restrictions: "" },
                    { name: "Point-blank Barrage", cp: 1, type: "Strategic Ploy", when: "Your Shooting phase.", target: "One IMPERIAL KNIGHTS unit from your army that has not been selected to shoot this phase.", effect: "Until the end of the phase, when making ranged attacks with Blast weapons, models in your unit can target enemy units within Engagement Range of your unit (provided no other friendly units are also within Engagement Range of that enemy unit). In addition, until the end of the phase, your unit does not suffer the penalty to its Hit rolls for being within Engagement Range of one or more enemy units, but each time a model in your unit makes an attack with a Blast weapon that targets a unit within Engagement Range of your unit, on an unmodified Hit roll of 1, your unit suffers 1 mortal wound after all of its attacks have been resolved.", restrictions: "" },
                    { name: "Survivor of Strife", cp: 1, type: "Epic Deed", when: "Your opponent's Shooting phase, just after an enemy unit has selected its targets.", target: "One IMPERIAL KNIGHTS unit from your army that was selected as the target of one or more of the attacking unit's attacks.", effect: "Until the end of the phase, each time an attack targets your unit, if the Strength characteristic of that attack is greater than the Toughness characteristic of your unit, subtract 1 from the Wound roll.", restrictions: "" },
                    { name: "Flanking Manoeuvres", cp: 1, type: "Strategic Ploy", when: "End of your opponent's Fight phase.", target: "One ARMIGER unit from your army that is within 9\" of one or more battlefield edges and not within Engagement Range of one or more enemy units.", effect: "Remove your unit from the battlefield and place it into Strategic Reserves.", restrictions: "" },
                ]
            },
            {
                name: "Questor Forgepact",
                flavour: "Bound by oaths of fealty or not, many Knightly houses enjoy close relations with the priesthood of the Adeptus Mechanicus. Whether answering the Martian priesthood's calls to arms or prosecuting their own wars of liberation against the Emperor's foes, Noble families regularly pilot their war suits to battle alongside their Tech-Priest allies. The Skitarii soldiery are inspired by the presence of these ancient engines of destruction, uttering awestruck psalms of veneration as they advance fearlessly towards the foe. In turn, the Noble champions are blessed and inspired by the chanted prayers of the Machine Cult and their war suits empowered by the skill of Tech-Priests and artificers of incomparable talent.",
                rule: { name: "Cogbound Alliance", flavour: "The Nobles of Questor Mechanicus houses commonly fight alongside the armies of forge worlds. They are bound together by their shared devotion to the Machine Cult.", text: "IMPERIAL KNIGHTS units from your army have the following ability:\n\nSacristan Pledge: In your Command phase, one model in this unit regains 1 lost wound. If this unit is within 3\" of one or more friendly TECH-PRIEST models, one model in this unit regains up to D3 lost wounds instead.\n\nADEPTUS MECHANICUS units from your army have the following ability:\n\nDivine Inspiration: Each time a model in this unit makes a ranged attack, re-roll a Hit roll of 1. If this unit is within 6\" of one or more friendly IMPERIAL KNIGHTS units, re-roll a Wound roll of 1 as well.", restrictions: "FORGE WORLD ALLIES: You can include the following ADEPTUS MECHANICUS units in your army: TECH-PRIEST DOMINUS; TECH-PRIEST MANIPULUS; SKITARII MARSHAL; SKITARII RANGERS; SKITARII VANGUARD. The combined points cost of such units depends on your battle size:\n- Incursion: Up to 250 pts\n- Strike Force: Up to 500 pts\n- Onslaught: Up to 750 pts\nNo ADEPTUS MECHANICUS models from your army can be your WARLORD." },
                enhancements: [
                    { name: "Omnissian Champion", cost: 30, restriction: "IMPERIAL KNIGHTS model only.", text: "The Omnissian priesthood has thrice blessed this champion of the Machine God and their Knight suit's core; it burns with a zeal that cannot be quenched.\n\nAdd 4 to the bearer's Wounds characteristic." },
                    { name: "Knight of the Opus Machina", cost: 20, restriction: "IMPERIAL KNIGHTS model only.", text: "A devotee of the Omnissian creed, this Noble is inspired by the presence of the Adeptus Mechanicus, fighting with greater zeal and vigour in their holy presence.\n\nEach time the bearer makes a ranged attack, if the bearer is within 6\" of one or more friendly ADEPTUS MECHANICUS units, re-roll a Hit roll of 1." },
                    { name: "Magos Questoris", cost: 35, restriction: "TECH-PRIEST model only.", text: "An expert in the intricate mechanisms and weapons systems of Imperial Knights, this Tech-Priest taught Sacristans their craft. They now walk in the shadow of these war machines and make field repairs in the midst of battle.\n\nWhile the bearer is within 3\" of one or more friendly IMPERIAL KNIGHTS units, it has the Lone Operative ability. In your Command phase, select one friendly IMPERIAL KNIGHTS model within 3\" of the bearer. That model regains up to 2 lost wounds." },
                    { name: "Vocifer Magnificat (Aura)", cost: 15, restriction: "IMPERIAL KNIGHTS model only.", text: "This titanic war machine's carapace bristles with vox-grilles and laud hailers that project binharic prayers to the Machine God; these static chants serve both to unnerve the foe and fill the faithful of the Omnissiah with holy fervour.\n\nWhile an enemy unit is within 6\" of the bearer, worsen the Leadership characteristic of models in that unit by 1. While a friendly ADEPTUS MECHANICUS unit is within 6\" of the bearer, improve the Leadership characteristic of models in that ADEPTUS MECHANICUS unit by 1." },
                ],
                stratagems: [
                    { name: "Omnissiah's Grace", cp: 1, type: "Strategic Ploy", when: "Any phase, just after a mortal wound is allocated to an IMPERIAL KNIGHTS or ADEPTUS MECHANICUS unit from your army.", target: "That IMPERIAL KNIGHTS or ADEPTUS MECHANICUS unit.", effect: "Until the end of the phase, models in your unit have the Feel No Pain 5+ ability against mortal wounds.", restrictions: "" },
                    { name: "Vengeance of the Machine Cult", cp: 1, type: "Strategic Ploy", when: "Any phase.", target: "One IMPERIAL KNIGHTS unit from your army that was just destroyed. You can use this Stratagem on that unit even though it was just destroyed.", effect: "Until the end of the battle, the enemy unit that destroyed your unit is Marked. Each time an ADEPTUS MECHANICUS model from your army makes an attack that targets a Marked unit, that attack has the [Lethal Hits] ability.", restrictions: "" },
                    { name: "Bonded Imperative", cp: 1, type: "Epic Deed", when: "Your Command phase, just before an IMPERIAL KNIGHTS CHARACTER unit from your army uses a Bondsman ability.", target: "That IMPERIAL KNIGHTS CHARACTER unit.", effect: "When selecting targets for that use of that Bondsman ability, you can select one friendly ADEPTUS MECHANICUS unit within 12\" of your unit in addition, or instead of selecting one ARMIGER model. Until the start of your next Command phase, every model in that ADEPTUS MECHANICUS unit is affected by that Bondsman ability.", restrictions: "You cannot target a KNIGHT PRECEPTOR with this Stratagem." },
                    { name: "Machine Focus", cp: 1, type: "Strategic Ploy", when: "Your Command phase.", target: "One IMPERIAL KNIGHTS unit from your army.", effect: "Until the start of your next turn, your unit can ignore any or all modifiers to the following: the Weapon Skill or Ballistic Skill characteristics of weapons equipped by its models; any Hit roll or Wound roll made for it.", restrictions: "" },
                    { name: "Aggression Begets Aggression", cp: 1, type: "Strategic Ploy", when: "Your Shooting phase.", target: "One IMPERIAL KNIGHTS unit from your army or one IMPERIAL KNIGHTS CHARACTER unit from your army and one friendly ADEPTUS MECHANICUS unit that is within 6\" of that unit.", effect: "Until the end of the phase, ranged weapons equipped by models in your units have the [Assault] ability.", restrictions: "" },
                    { name: "Thronegheist Fury", cp: 1, type: "Strategic Ploy", when: "Your opponent's Movement phase, just after an enemy unit is set up or ends a Normal, Advance, or Fall Back move.", target: "One IMPERIAL KNIGHTS TITANIC unit from your army that is within 24\" of and visible to that enemy unit.", effect: "Select one ranged weapon equipped by a model in your unit. That model can shoot at that enemy unit (and only if it is an eligible target). When doing so, that model can only make attacks with that weapon and each time it makes a ranged attack, an unmodified Hit roll of 6 is required to score a hit, irrespective of the attacking weapon's Ballistic Skill or any modifiers.", restrictions: "" },
                ]
            }
        ],
        units: [
                {
                        "id": "ik-knight-destrier",
                        "name": "Knight Destrier",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 250
                                }
                        ],
                        "stats": {
                                "m": "12\"",
                                "t": 10,
                                "sv": "3+",
                                "w": 18,
                                "ld": "6+",
                                "oc": 8
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Chastiser gatling cannon",
                                                "range": "24\"",
                                                "a": 12,
                                                "bs": "3+",
                                                "s": 6,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Assault"
                                                ]
                                        },
                                        {
                                                "name": "Frag bombard",
                                                "range": "24\"",
                                                "a": "D6+3",
                                                "bs": "3+",
                                                "s": 7,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Assault",
                                                        "Blast",
                                                        "Rapid Fire D6+3"
                                                ]
                                        },
                                        {
                                                "name": "Questoris heavy stubber",
                                                "range": "36\"",
                                                "a": 6,
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Assault",
                                                        "Rapid Fire 3"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Bellatus reaper chainsword – strike",
                                                "range": "Melee",
                                                "a": 5,
                                                "ws": "3+",
                                                "s": 12,
                                                "ap": -3,
                                                "d": "D3+3",
                                                "keywords": []
                                        },
                                        {
                                                "name": "Bellatus reaper chainsword – sweep",
                                                "range": "Melee",
                                                "a": 10,
                                                "ws": "3+",
                                                "s": 8,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Thundershock spear – strike",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "3+",
                                                "s": 12,
                                                "ap": -3,
                                                "d": "D3+3",
                                                "keywords": [
                                                        "Lance"
                                                ]
                                        },
                                        {
                                                "name": "Thundershock spear – sweep",
                                                "range": "Melee",
                                                "a": 8,
                                                "ws": "3+",
                                                "s": 6,
                                                "ap": -3,
                                                "d": 2,
                                                "keywords": [
                                                        "Lance"
                                                ]
                                        },
                                        {
                                                "name": "Titanic feet",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "4+",
                                                "s": 7,
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
                                        "Code Chivalric",
                                        "Super-heavy Walker"
                                ],
                                "wargear": [],
                                "other": [
                                        "Ram Jets",
                                        "Thundercharge",
                                        "Saturation Fire"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Walker",
                                "Titanic",
                                "Towering",
                                "Bellatus",
                                "Character",
                                "Imperium",
                                "Knight Destrier"
                        ],
                        "factionKeywords": [
                                "Imperial Knights"
                        ],
                        "compositionText": "1 Knight Defender This model is equipped with: 1 chastiser gatling cannon; 1 frag bombard; 1 Questoris heavy stubber; 1 titanic feet. DAMAGED: 1-6 WOUNDS REMAINING While this model has 1-6 wounds remaining, subtract 4 from this model’s Objective Control characteristic and each time this model makes an attack, subtract 1 from the Hit roll."
                },
                {
                        "id": "ik-canis-rex",
                        "name": "Canis Rex",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 415
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
                                                "name": "Las-impulsor – high intensity",
                                                "range": "24\"",
                                                "a": "D6",
                                                "bs": "2+",
                                                "s": 14,
                                                "ap": -3,
                                                "d": 4,
                                                "keywords": [
                                                        "Blast",
                                                        "Sustained Hits 1"
                                                ]
                                        },
                                        {
                                                "name": "Las-impulsor – low intensity",
                                                "range": "36\"",
                                                "a": "2D6",
                                                "bs": "2+",
                                                "s": 7,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Blast",
                                                        "Sustained Hits 1"
                                                ]
                                        },
                                        {
                                                "name": "Questoris multi-laser",
                                                "range": "36\"",
                                                "a": 4,
                                                "bs": "2+",
                                                "s": 6,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Sustained Hits 1"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Freedom’s Hand – strike",
                                                "range": "Melee",
                                                "a": 5,
                                                "ws": "2+",
                                                "s": 20,
                                                "ap": -3,
                                                "d": 9,
                                                "keywords": [
                                                        "Sustained Hits 1"
                                                ]
                                        },
                                        {
                                                "name": "Freedom’s Hand – sweep",
                                                "range": "Melee",
                                                "a": 10,
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
                                        "Code Chivalric",
                                        "Super-heavy Walker"
                                ],
                                "wargear": [],
                                "other": [
                                        "Legendary Freeblade",
                                        "Chainbreaker"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Walker",
                                "Titanic",
                                "Towering",
                                "Questoris",
                                "Character",
                                "Epic Hero",
                                "Imperium",
                                "Canis Rex"
                        ],
                        "factionKeywords": [
                                "Imperial Knights"
                        ],
                        "compositionText": "1 Canis Rex – EPIC HERO Canis Rex is equipped with: las-impulsor; Questoris multi-laser; Freedom’s Hand. DAMAGED: 1-9 WOUNDS REMAINING While this model has 1‑9 wounds remaining, subtract 5 from this model’s Objective Control characteristic and each time this model makes an attack, subtract 1 from the Hit roll."
                },
                {
                        "id": "ik-knight-castellan",
                        "name": "Knight Castellan",
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
                                                "name": "Plasma decimator – standard",
                                                "range": "48\"",
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
                                                "name": "Plasma decimator – supercharge",
                                                "range": "48\"",
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
                                                "name": "Shieldbreaker missile launcher",
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
                                                "name": "Twin meltagun",
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
                                                "name": "Twin siegebreaker cannon",
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
                                                "name": "Volcano lance",
                                                "range": "72\"",
                                                "a": "D3",
                                                "bs": "3+",
                                                "s": 18,
                                                "ap": -5,
                                                "d": "D6+8",
                                                "keywords": [
                                                        "Blast"
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
                                        "Code Chivalric",
                                        "Super-heavy Walker"
                                ],
                                "wargear": [],
                                "other": [
                                        "Ion Aegis",
                                        "Titan Hunter"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Walker",
                                "Titanic",
                                "Towering",
                                "Dominus",
                                "Character",
                                "Imperium",
                                "Knight Castellan"
                        ],
                        "factionKeywords": [
                                "Imperial Knights"
                        ],
                        "compositionText": "1 Knight Castellan This model is equipped with: plasma decimator; 2 shieldbreaker missile launchers; 2 twin meltaguns; twin siegebreaker cannon; volcano lance; titanic feet. DAMAGED: 1-10 WOUNDS REMAINING While this model has 1‑10 wounds remaining, subtract 5 from this model’s Objective Control characteristic and each time this model makes an attack, subtract 1 from the Hit roll."
                },
                {
                        "id": "ik-knight-crusader",
                        "name": "Knight Crusader",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 385
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
                                                "name": "Avenger gatling cannon",
                                                "range": "36\"",
                                                "a": 18,
                                                "bs": "3+",
                                                "s": 6,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": []
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
                                                "name": "Ironstorm missile pod",
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
                                                "name": "Questoris heavy stubber",
                                                "range": "36\"",
                                                "a": 3,
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Rapid Fire 3"
                                                ]
                                        },
                                        {
                                                "name": "Rapid-fire battle cannon",
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
                                                "name": "Stormspear rocket pod",
                                                "range": "48\"",
                                                "a": 3,
                                                "bs": "3+",
                                                "s": 8,
                                                "ap": -2,
                                                "d": "D6",
                                                "keywords": []
                                        },
                                        {
                                                "name": "Thermal cannon",
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
                                                "name": "Twin Icarus autocannon",
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
                                        "Deadly Demise D6"
                                ],
                                "faction": [
                                        "Code Chivalric",
                                        "Super-heavy Walker"
                                ],
                                "wargear": [],
                                "other": [
                                        "Crusader’s Duty",
                                        "Punishing Salvoes"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Walker",
                                "Titanic",
                                "Towering",
                                "Questoris",
                                "Character",
                                "Imperium",
                                "Knight Crusader"
                        ],
                        "factionKeywords": [
                                "Imperial Knights"
                        ],
                        "compositionText": "1 Knight Crusader This model is equipped with: avenger gatling cannon; heavy flamer; meltagun; thermal cannon; titanic feet. DAMAGED: 1-9 WOUNDS REMAINING While this model has 1‑9 wounds remaining, subtract 5 from this model’s Objective Control characteristic and each time this model makes an attack, subtract 1 from the Hit roll."
                },
                {
                        "id": "ik-knight-defender",
                        "name": "Knight Defender",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 415
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
                                                "name": "Conversion beam obliterator",
                                                "range": "36\"",
                                                "a": 3,
                                                "bs": "3+",
                                                "s": 12,
                                                "ap": -2,
                                                "d": 4,
                                                "keywords": [
                                                        "Conversion",
                                                        "Sustained Hits D3"
                                                ]
                                        },
                                        {
                                                "name": "Plasma executor – standard",
                                                "range": "36\"",
                                                "a": "D6+3",
                                                "bs": "3+",
                                                "s": 8,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Blast"
                                                ]
                                        },
                                        {
                                                "name": "Plasma executor – supercharge",
                                                "range": "36\"",
                                                "a": "D6+3",
                                                "bs": "3+",
                                                "s": 9,
                                                "ap": -3,
                                                "d": 3,
                                                "keywords": [
                                                        "Blast",
                                                        "Hazardous"
                                                ]
                                        },
                                        {
                                                "name": "Phosphor blaster",
                                                "range": "24\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 5,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Ignores Cover",
                                                        "Rapid Fire 1"
                                                ]
                                        },
                                        {
                                                "name": "Twin incendine combustor",
                                                "range": "12\"",
                                                "a": "D6",
                                                "bs": "N/A",
                                                "s": 6,
                                                "ap": -1,
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
                                        "Deadly Demise D6"
                                ],
                                "faction": [
                                        "Code Chivalric",
                                        "Super-heavy Walker"
                                ],
                                "wargear": [],
                                "other": [
                                        "Defender’s Duty",
                                        "Selfless Protector"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Walker",
                                "Titanic",
                                "Towering",
                                "Questoris",
                                "Character",
                                "Imperium",
                                "Knight Defender"
                        ],
                        "factionKeywords": [
                                "Imperial Knights"
                        ],
                        "compositionText": "1 Knight Defender This model is equipped with: conversion beam obliterator; plasma executor; twin incendine combustor; phosphor blaster; titanic feet. DAMAGED: 1-9 WOUNDS REMAINING While this model has 1‑9 wounds remaining, subtract 5 from this model’s Objective Control characteristic and each time this model makes an attack, subtract 1 from the Hit roll."
                },
                {
                        "id": "ik-knight-errant",
                        "name": "Knight Errant",
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
                                                "name": "Ironstorm missile pod",
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
                                                "name": "Questoris heavy stubber",
                                                "range": "36\"",
                                                "a": 3,
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Rapid Fire 3"
                                                ]
                                        },
                                        {
                                                "name": "Stormspear rocket pod",
                                                "range": "48\"",
                                                "a": 3,
                                                "bs": "3+",
                                                "s": 8,
                                                "ap": -2,
                                                "d": "D6",
                                                "keywords": []
                                        },
                                        {
                                                "name": "Thermal cannon",
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
                                                "name": "Twin Icarus autocannon",
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
                                                "name": "Thunderstrike gauntlet – strike",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "3+",
                                                "s": 20,
                                                "ap": -3,
                                                "d": 8,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Thunderstrike gauntlet – sweep",
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
                                        "Code Chivalric",
                                        "Super-heavy Walker"
                                ],
                                "wargear": [],
                                "other": [
                                        "Errant’s Duty",
                                        "Aggressive Assault"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Walker",
                                "Titanic",
                                "Towering",
                                "Questoris",
                                "Character",
                                "Imperium",
                                "Knight Errant"
                        ],
                        "factionKeywords": [
                                "Imperial Knights"
                        ],
                        "compositionText": "1 Knight Errant This model is equipped with: meltagun; thermal cannon; reaper chainsword. DAMAGED: 1-9 WOUNDS REMAINING While this model has 1‑9 wounds remaining, subtract 5 from this model’s Objective Control characteristic and each time this model makes an attack, subtract 1 from the Hit roll."
                },
                {
                        "id": "ik-knight-gallant",
                        "name": "Knight Gallant",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 355
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
                                                "name": "Ironstorm missile pod",
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
                                                "name": "Questoris heavy stubber",
                                                "range": "36\"",
                                                "a": 3,
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Rapid Fire 3"
                                                ]
                                        },
                                        {
                                                "name": "Stormspear rocket pod",
                                                "range": "48\"",
                                                "a": 3,
                                                "bs": "3+",
                                                "s": 8,
                                                "ap": -2,
                                                "d": "D6",
                                                "keywords": []
                                        },
                                        {
                                                "name": "Twin Icarus autocannon",
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
                                                        "Devastating Wounds"
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
                                                        "Lethal Hits"
                                                ]
                                        },
                                        {
                                                "name": "Thunderstrike gauntlet – strike",
                                                "range": "Melee",
                                                "a": 6,
                                                "ws": "2+",
                                                "s": 20,
                                                "ap": -3,
                                                "d": 8,
                                                "keywords": [
                                                        "Devastating Wounds"
                                                ]
                                        },
                                        {
                                                "name": "Thunderstrike gauntlet – sweep",
                                                "range": "Melee",
                                                "a": 12,
                                                "ws": "2+",
                                                "s": 10,
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
                                        "Deadly Demise D6"
                                ],
                                "faction": [
                                        "Code Chivalric",
                                        "Super-heavy Walker"
                                ],
                                "wargear": [],
                                "other": [
                                        "Gallant’s Duty",
                                        "Martial Pride"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Walker",
                                "Titanic",
                                "Towering",
                                "Questoris",
                                "Character",
                                "Imperium",
                                "Knight Gallant"
                        ],
                        "factionKeywords": [
                                "Imperial Knights"
                        ],
                        "compositionText": "1 Knight Gallant This model is equipped with: meltagun; thunderstrike gauntlet; reaper chainsword. DAMAGED: 1-9 WOUNDS REMAINING While this model has 1‑9 wounds remaining, subtract 5 from this model’s Objective Control characteristic and each time this model makes an attack, subtract 1 from the Hit roll."
                },
                {
                        "id": "ik-knight-paladin",
                        "name": "Knight Paladin",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 375
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
                                                "name": "Ironstorm missile pod",
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
                                                "name": "Questoris heavy stubber",
                                                "range": "36\"",
                                                "a": 3,
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Rapid Fire 3"
                                                ]
                                        },
                                        {
                                                "name": "Rapid-fire battle cannon",
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
                                                "name": "Stormspear rocket pod",
                                                "range": "48\"",
                                                "a": 3,
                                                "bs": "3+",
                                                "s": 8,
                                                "ap": -2,
                                                "d": "D6",
                                                "keywords": []
                                        },
                                        {
                                                "name": "Twin Icarus autocannon",
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
                                                "name": "Thunderstrike gauntlet – strike",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "3+",
                                                "s": 20,
                                                "ap": -3,
                                                "d": 8,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Thunderstrike gauntlet – sweep",
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
                                        "Code Chivalric",
                                        "Super-heavy Walker"
                                ],
                                "wargear": [],
                                "other": [
                                        "Paladin’s Duty",
                                        "Seasoned Noble"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Walker",
                                "Titanic",
                                "Towering",
                                "Questoris",
                                "Character",
                                "Imperium",
                                "Knight Paladin"
                        ],
                        "factionKeywords": [
                                "Imperial Knights"
                        ],
                        "compositionText": "1 Knight Paladin This model is equipped with: meltagun; Questoris heavy stubber; rapid-fire battlecannon; reaper chainsword. DAMAGED: 1-9 WOUNDS REMAINING While this model has 1‑9 wounds remaining, subtract 5 from this model’s Objective Control characteristic and each time this model makes an attack, subtract 1 from the Hit roll."
                },
                {
                        "id": "ik-knight-preceptor",
                        "name": "Knight Preceptor",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 365
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
                                                "name": "Ironstorm missile pod",
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
                                                "name": "Las-impulsor – high intensity",
                                                "range": "24\"",
                                                "a": "D6",
                                                "bs": "3+",
                                                "s": 14,
                                                "ap": -3,
                                                "d": 4,
                                                "keywords": [
                                                        "Blast"
                                                ]
                                        },
                                        {
                                                "name": "Las-impulsor – low intensity",
                                                "range": "36\"",
                                                "a": "2D6",
                                                "bs": "3+",
                                                "s": 7,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Blast"
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
                                                "name": "Questoris multi-laser",
                                                "range": "36\"",
                                                "a": 4,
                                                "bs": "3+",
                                                "s": 6,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Questoris heavy stubber",
                                                "range": "36\"",
                                                "a": 3,
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Rapid Fire 3"
                                                ]
                                        },
                                        {
                                                "name": "Stormspear rocket pod",
                                                "range": "48\"",
                                                "a": 3,
                                                "bs": "3+",
                                                "s": 8,
                                                "ap": -2,
                                                "d": "D6",
                                                "keywords": []
                                        },
                                        {
                                                "name": "Twin Icarus autocannon",
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
                                                "name": "Thunderstrike gauntlet – strike",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "3+",
                                                "s": 20,
                                                "ap": -3,
                                                "d": 8,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Thunderstrike gauntlet – sweep",
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
                                        "Code Chivalric",
                                        "Super-heavy Walker"
                                ],
                                "wargear": [],
                                "other": [
                                        "Mentor",
                                        "Exemplar of the Code"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Walker",
                                "Titanic",
                                "Towering",
                                "Questoris",
                                "Character",
                                "Imperium",
                                "Knight Preceptor"
                        ],
                        "factionKeywords": [
                                "Imperial Knights"
                        ],
                        "compositionText": "1 Knight Preceptor This model is equipped with: las-impulsor; Preceptor multi-laser; reaper chainsword. DAMAGED: 1-9 WOUNDS REMAINING While this model has 1‑9 wounds remaining, subtract 5 from this model’s Objective Control characteristic and each time this model makes an attack, subtract 1 from the Hit roll."
                },
                {
                        "id": "ik-knight-valiant",
                        "name": "Knight Valiant",
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
                                                "name": "Conflagration cannon",
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
                                                "name": "Shieldbreaker missile launcher",
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
                                                "name": "Thundercoil harpoon",
                                                "range": "12\"",
                                                "a": "D3",
                                                "bs": "3+",
                                                "s": 24,
                                                "ap": -6,
                                                "d": 10,
                                                "keywords": [
                                                        "Blast",
                                                        "Devastating Wounds"
                                                ]
                                        },
                                        {
                                                "name": "Twin meltagun",
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
                                                "name": "Twin siegebreaker cannon",
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
                                        "Code Chivalric",
                                        "Super-heavy Walker"
                                ],
                                "wargear": [],
                                "other": [
                                        "Ion Aegis",
                                        "Thundershock"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Walker",
                                "Titanic",
                                "Towering",
                                "Dominus",
                                "Character",
                                "Imperium",
                                "Knight Valiant"
                        ],
                        "factionKeywords": [
                                "Imperial Knights"
                        ],
                        "compositionText": "1 Knight Valiant This model is equipped with: conflagration cannon; 2 shieldbreaker missile launchers; thundercoil harpoon; 2 twin meltaguns; twin siegebreaker cannon; titanic feet. DAMAGED: 1-10 WOUNDS REMAINING While this model has 1‑10 wounds remaining, subtract 5 from this model’s Objective Control characteristic and each time this model makes an attack, subtract 1 from the Hit roll."
                },
                {
                        "id": "ik-knight-warden",
                        "name": "Knight Warden",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 375
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
                                                "name": "Avenger gatling cannon",
                                                "range": "36\"",
                                                "a": 18,
                                                "bs": "3+",
                                                "s": 6,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": []
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
                                                "name": "Ironstorm missile pod",
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
                                                "name": "Questoris heavy stubber",
                                                "range": "36\"",
                                                "a": 3,
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Rapid Fire 3"
                                                ]
                                        },
                                        {
                                                "name": "Stormspear rocket pod",
                                                "range": "48\"",
                                                "a": 3,
                                                "bs": "3+",
                                                "s": 8,
                                                "ap": -2,
                                                "d": "D6",
                                                "keywords": []
                                        },
                                        {
                                                "name": "Twin Icarus autocannon",
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
                                                "name": "Thunderstrike gauntlet – strike",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "3+",
                                                "s": 20,
                                                "ap": -3,
                                                "d": 8,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Thunderstrike gauntlet – sweep",
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
                                        "Code Chivalric",
                                        "Super-heavy Walker"
                                ],
                                "wargear": [],
                                "other": [
                                        "Warden’s Duty",
                                        "Thin Their Ranks"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Walker",
                                "Titanic",
                                "Towering",
                                "Questoris",
                                "Character",
                                "Imperium",
                                "Knight Warden"
                        ],
                        "factionKeywords": [
                                "Imperial Knights"
                        ],
                        "compositionText": "1 Knight Warden This model is equipped with: avenger gatling cannon; heavy flamer; meltagun; reaper chainsword. DAMAGED: 1-9 WOUNDS REMAINING While this model has 1‑9 wounds remaining, subtract 5 from this model’s Objective Control characteristic and each time this model makes an attack, subtract 1 from the Hit roll."
                },
                {
                        "id": "ik-sir-hekhtur",
                        "name": "Sir Hekhtur",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 0
                                }
                        ],
                        "stats": {
                                "m": "6\"",
                                "t": 3,
                                "sv": "4+",
                                "w": 3,
                                "ld": "5+",
                                "oc": 1
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Hekhtur’s pistol",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "2+",
                                                "s": 5,
                                                "ap": -1,
                                                "d": 2,
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
                                                "ws": "2+",
                                                "s": 3,
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
                                "faction": [],
                                "wargear": [],
                                "other": []
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Epic Hero",
                                "Imperium",
                                "Sir Hekhtur"
                        ],
                        "factionKeywords": [
                                "Imperial Knights"
                        ],
                        "compositionText": "1 Sir Hekhtur – EPIC HERO Sir Hekhtur is equipped with: Hekhtur’s pistol; close combat weapon."
                },
                {
                        "id": "ik-armiger-helverin",
                        "name": "Armiger Helverin",
                        "role": "vehicle",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 135
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
                                                "name": "Armiger autocannon",
                                                "range": "48\"",
                                                "a": 4,
                                                "bs": "3+",
                                                "s": 9,
                                                "ap": -1,
                                                "d": 3,
                                                "keywords": []
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
                                                "name": "Questoris heavy stubber",
                                                "range": "36\"",
                                                "a": 3,
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Rapid Fire 3"
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
                                        "Code Chivalric"
                                ],
                                "wargear": [],
                                "other": [
                                        "Suppression Protocols"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Walker",
                                "Imperium",
                                "Armiger",
                                "Helverin"
                        ],
                        "factionKeywords": [
                                "Imperial Knights"
                        ],
                        "compositionText": "1 Armiger Helverin This model is equipped with: 2 Armiger autocannons; Questoris heavy stubber; armoured feet. DAMAGED: 1-5 WOUNDS REMAINING While this model has 1-5 wounds remaining, subtract 3 from this model’s Objective Control characteristic and each time this model makes an attack, subtract 1 from the Hit roll."
                },
                {
                        "id": "ik-armiger-warglaive",
                        "name": "Armiger Warglaive",
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
                                                "name": "Questoris heavy stubber",
                                                "range": "36\"",
                                                "a": 3,
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Rapid Fire 3"
                                                ]
                                        },
                                        {
                                                "name": "Thermal spear",
                                                "range": "18\"",
                                                "a": 2,
                                                "bs": "3+",
                                                "s": 12,
                                                "ap": -4,
                                                "d": "D6",
                                                "keywords": [
                                                        "Melta 4"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Reaper chain-cleaver – strike",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "3+",
                                                "s": 10,
                                                "ap": -3,
                                                "d": 3,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Reaper chain-cleaver – sweep",
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
                                        "Code Chivalric"
                                ],
                                "wargear": [],
                                "other": [
                                        "Impetuous Glory"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Walker",
                                "Imperium",
                                "Armiger",
                                "Warglaive"
                        ],
                        "factionKeywords": [
                                "Imperial Knights"
                        ],
                        "compositionText": "1 Armiger Warglaive This model is equipped with: Questoris heavy stubber; thermal spear; reaper chain-cleaver. DAMAGED: 1-5 WOUNDS REMAINING While this model has 1-5 wounds remaining, subtract 3 from this model’s Objective Control characteristic and each time this model makes an attack, subtract 1 from the Hit roll."
                }
        ]
    };

    window.W40K_FACTIONS = window.W40K_FACTIONS || { "10th": [], "11th": [] };
    window.W40K_FACTIONS["10th"].push(ik);
})();
