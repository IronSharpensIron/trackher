import { useState, useEffect, useRef } from "react";

const PRO_HEADERS = ["avoid", "body", "sex", "game"];
const FREE_ARTICLES = ["code", "chemicals"];
const ROLLO_URL = "https://therationalmale.com/2014/03/26/preventative-medicine-part-ii/";
const ROLLO_TERMS = ["Party Years", "Late Party Years", "Epiphany Phase", "Transitionary Phase", "Post-Transition", "Preventative Medicine"];

const ARTICLES = [
  { id: "triangle", emoji: "🔺", title: "How This App Works", subtitle: "Start here.", content: "Most relationship advice is generic. It doesn't know who she is, how old she is, what dynamic you're in, or what YOU actually want. TrackHer triangulates four variables simultaneously.

VARIABLE ONE: HER CYCLE PHASE

Her menstrual cycle is the engine. It runs on a 28-day loop and drives everything. A woman in her Menstrual phase needs warmth and zero demands. A woman in Ovulation is at peak confidence and receptivity. A woman in Late Luteal is running on depleted serotonin. This is the foundation.

VARIABLE TWO: HER AGE AND LIFE PHASE

This is where most men go blind. The framework comes from Rollo Tomassi's Preventative Medicine series. In her Party Years (18-25) she's selecting on raw attraction. In her Epiphany Phase (28-30) provider traits suddenly matter. In her Transitionary Phase (31-35) urgency intensifies. Post-Transition (35+) she is running a depth strategy.

VARIABLE THREE: YOUR RELATIONSHIP TYPE

With a FWB you are one option. The game is attraction maintenance. With a girlfriend she is in selection mode. Every interaction is data. With a wife the game is depth and long-term leadership.

VARIABLE FOUR: YOUR GOAL

If your goal is to minimize friction the cycle becomes a conflict-avoidance map. If your goal is to improve your sex life you need to understand her desire arc. The goal changes everything.

THE TRIANGULATION

A 24-year-old FWB ovulating with your goal being the sex life: Party Years, peak desire, peak selectivity. Be present, confident, unbothered. Do not chase. A 32-year-old girlfriend in Late Luteal with your goal being to minimize friction: Transitionary Phase, low serotonin, PMS amplified. Be the wall. A 38-year-old wife in Ovulation with your goal being deep connection: Post-Transition, peak desire. Tell her she is beautiful. Lead.

Same app. Four completely different instructions. All from data points you already entered." },
  { id: "code", emoji: "🔑", title: "How Important is Tracking Her Cycle?", subtitle: "Read this first.", content: "How many arguments have you had that you still don't fully understand?\n\nYOU'VE BEEN RUNNING BLIND\n\nYou run on a 24 hour hormone cycle. She runs on a 28 day cycle. Four completely different versions of herself every month. You've been trying to read her like she's running your operating system. She's not.\n\nHERE'S THE PART THAT WILL BLOW YOUR MIND\n\nHuman females hide fertility status. They are one of the only species on the planet that conceals ovulation. No obvious external signs. Scientists think this evolved to keep men invested. It worked. But it means you've been flying blind your entire life.\n\nTHE CODE IS THE CYCLE\n\nHer energy? Cycle. Her mood? Cycle. Her desire for sex? Cycle. Her patience, confidence, social battery? Cycle. Cycle. Cycle.\n\nTry it for 30 days. Track where she is. Watch what happens around day 6. Watch day 14. Watch day 23. It maps. Every time.\n\nWHY YOU NEED TO BE TRACKING\n\nWhen you know she's on day 23 you don't take the short temper personally. When you know she's on day 14 you show up differently. You stop reacting and start leading. That's love. That's being the kind of man a woman feels genuinely lucky to have." },
  { id: "chemicals", emoji: "⚗️", title: "She Can't Even See You. She Only Sees How You Make Her FEEL.", subtitle: "The chemical framework that changes everything.", content: "She is not responding to you. She's responding to what you make her feel. And what she feels is chemistry. Literally.\n\nThree chemicals run her emotional world: Oxytocin. Serotonin. Dopamine. You are the trigger. The question is which chemical are you driving right now.\n\nOXYTOCIN\n\nThis hits when she feels warm, close and held. No agenda. No performance. Just presence. When you hold her hand for no reason. When there's skin to skin contact with zero expectation. That's Oxytocin. When she's in it she feels bonded to you.\n\nDOPAMINE\n\nThis hits when there's novelty. Anticipation. Spark. When you book something without her asking. When you show up differently. When Dopamine is flowing she associates you with excitement and possibility.\n\nSEROTONIN\n\nThis is the one most men completely miss. Serotonin is stability. Calm. The feeling that things are under control. When the house is clean and she didn't ask. When you're calm in a moment where she's spiraling. That's Serotonin. And when her Serotonin is low during PMS she cannot manufacture it on her own. Your steadiness is literally the chemical her brain is missing.\n\nYOUR HOMEWORK\n\nThink about her specifically. What makes her soften? What makes her laugh from the gut? You already know. You've seen it. Now do it on purpose. Every week. Based on where she is." },
  { id: "tests", emoji: "🧪", title: "Understanding Female TESTS", subtitle: "Four tests. Every man gets all four. Most fail without knowing.", content: "She's not doing it on purpose. Not always. But she's doing it constantly.\n\nTHE SHIT TEST\n\nA shit test is when she says or does something designed to provoke or destabilize you. She's checking your frame. Do you crumble under pressure? Passing means not taking the bait. Light humor, calm indifference, or simply not reacting all pass. Explaining yourself or getting emotional all fail.\n\nTHE COMFORT TEST\n\nA comfort test is when she needs reassurance that you actually care. It shows up as clinginess, vulnerability, needing more warmth. Most men mistake this for manipulation and pull away. Wrong move. She needs to know that underneath the strength there's a man who gives a damn about her specifically.\n\nTHE COMPLIANCE TEST\n\nA compliance test is when she asks you to do something and she's watching whether you'll just fold. It's not about whether you do the thing. It's about why and how. She doesn't want a man she can program. She wants a man who chooses her.\n\nTHE CONGRUENCE TEST\n\nShe's checking whether who you are in the good moments matches who you are under pressure. The only way to pass is to actually be who you say you are. If your identity only holds up when things are easy she will feel it and lose respect slowly.\n\nWHAT THIS MEANS FOR YOU\n\nPass the tests not by learning to game them but by becoming the kind of man who passes them naturally." },
  { id: "rk-selection", emoji: "🧬", title: "Understanding Just How DIFFERENT You Are", subtitle: "r/K selection theory — the most important framework nobody told you about.", content: "You are not designed for monogamy. Neither is she exactly but for entirely different reasons.\n\nTHE BIOLOGY FIRST\n\nReproductive strategies fall on a spectrum. r-selection: produce as many offspring as possible, invest little in each. K-selection: produce fewer offspring, invest heavily in each. Men and women aren't sitting in the same spot on that spectrum.\n\nHOW MEN ARE WIRED\n\nA man can theoretically father hundreds of children in a lifetime. From a pure genetic survival standpoint the male r-strategy makes sense: the more women you impregnate the more copies of your genes survive. This is why men are wired for variety. This isn't an excuse. It's a map.\n\nHOW WOMEN ARE WIRED\n\nA woman can only reproduce a limited number of times. Her investment is enormous. She cannot afford to bet on the wrong man. So her programming is K-selected to the extreme. One high-quality mate is worth infinitely more than a hundred mediocre options. This is why women test you. She's running the most sophisticated quality-control process in nature.\n\nTHE UPGRADE\n\nThe man who understands this recognizes the wiring and makes a conscious choice about what kind of man he wants to be. Discipline is about directing desire not suppressing it. And the woman who chose him made the highest-stakes bet her biology knows how to make. That's everything." },
  { id: "triangle", emoji: "🔺", title: "The Triangle. Why This App Knows More Than You Think.", subtitle: "Four variables. One precise picture of exactly how to show up.", content: "Most relationship advice is generic. It doesn't know who she is, how old she is, what dynamic you're in, or what YOU actually want. TrackHer triangulates four variables simultaneously.\n\nVARIABLE ONE: HER CYCLE PHASE\n\nHer menstrual cycle is the engine. It runs on a 28-day loop and drives everything. A woman in her Menstrual phase needs warmth and zero demands. A woman in Ovulation is at peak confidence and receptivity. A woman in Late Luteal is running on depleted serotonin. This is the foundation.\n\nVARIABLE TWO: HER AGE AND LIFE PHASE\n\nThis is where most men go blind. The framework comes from Rollo Tomassi's Preventative Medicine series. In her Party Years (18-25) she's selecting on raw attraction. In her Epiphany Phase (28-30) provider traits suddenly matter. In her Transitionary Phase (31-35) urgency intensifies. Post-Transition (35+) she is running a depth strategy.\n\nVARIABLE THREE: YOUR RELATIONSHIP TYPE\n\nWith a FWB you are one option. The game is attraction maintenance. With a girlfriend she is in selection mode. Every interaction is data. With a wife the game is depth and long-term leadership.\n\nVARIABLE FOUR: YOUR GOAL\n\nIf your goal is to minimize friction the cycle becomes a conflict-avoidance map. If your goal is to improve your sex life you need to understand her desire arc. The goal changes everything.\n\nTHE TRIANGULATION\n\nA 24-year-old FWB ovulating with your goal being the sex life: Party Years, peak desire, peak selectivity. Be present, confident, unbothered. Do not chase. A 32-year-old girlfriend in Late Luteal with your goal being to minimize friction: Transitionary Phase, low serotonin, PMS amplified. Be the wall. A 38-year-old wife in Ovulation with your goal being deep connection: Post-Transition, peak desire. Tell her she is beautiful. Lead.\n\nSame app. Four completely different instructions. All from data points you already entered." },
];

const BOOKS = [
  { id: "superior-man", title: "The Way of the Superior Man", author: "David Deida", emoji: "📘", description: "A spiritual guide to mastering the challenges of women, work, and sexual desire. One of the most important books a man can read.", url: "https://www.amazon.com/Way-Superior-Man-Spiritual-Challenges/dp/1591792576", type: "book" },
  { id: "what-women-want", title: "What Women Want When They Test Men", author: "Bruce Bryans", emoji: "📗", description: "A practical breakdown of why women test men and exactly how to respond in a way that builds attraction and respect.", url: "https://www.amazon.com/What-Women-Want-When-Test/dp/1482370107", type: "book" },
  { id: "preventative-medicine", title: "Preventative Medicine — Part II", author: "Rollo Tomassi", emoji: "💊", description: "The SMV timeline framework every man needs to understand. Maps the phases women move through and what each means for how she relates to you.", url: "https://therationalmale.com/2014/03/26/preventative-medicine-part-ii/", type: "article" },
  { id: "triangle-ref", title: "The Triangle. Why This App Knows More Than You Think.", author: "TrackHer", emoji: "🔺", description: "Four variables triangulated into one precise picture of exactly how to show up.", url: null, inApp: "triangle", type: "article" },
];

const FURTHER_READING = [
  { id: "menstrual",   emoji: "🌑", phase: "Menstrual",    title: "The Reset: What's Really Happening This Week" },
  { id: "follicular",  emoji: "🌒", phase: "Follicular",   title: "The Rise: How To Ride This Wave With Her" },
  { id: "ovulation",   emoji: "🌕", phase: "Ovulation",    title: "The Peak: Three Days That Change Everything" },
  { id: "earlyLuteal", emoji: "🌖", phase: "Early Luteal", title: "The Shift: When Steady Wins" },
  { id: "lateLuteal",  emoji: "🌘", phase: "Late Luteal",  title: "The Storm: How To Be The Wall She Leans On" },
];

const LIBRARY = [
  { id: "understanding", title: "Understanding Her", emoji: "🧠", items: [{ title: "Why she may not want you to track", content: "Content coming soon." }, { title: "The emotional world of a woman", content: "Content coming soon." }] },
  { id: "conflict", title: "Conflict and Tension", emoji: "⚡", items: [{ title: "Handling shit tests", content: "Content coming soon." }, { title: "When to hold firm vs when to fold", content: "Content coming soon." }] },
  { id: "connection", title: "Deep Connection", emoji: "🔗", items: [{ title: "The Oxytocin playbook", content: "Content coming soon." }, { title: "How to make her feel truly seen", content: "Content coming soon." }] },
  { id: "sex", title: "Sex and Desire", emoji: "🔥", items: [{ title: "How her desire actually works", content: "Content coming soon." }, { title: "Timing intimacy to her cycle", content: "Content coming soon." }] },
  { id: "advanced", title: "Advanced Game", emoji: "♚", items: [{ title: "The chemical triggers explained", content: "Content coming soon." }, { title: "Dopamine Oxytocin Serotonin deep dive", content: "Content coming soon." }] },
];

const PHASES = {
  menstrual: {
    name: "Menstrual", days: [1,5], color: "#e05c6b", emoji: "🌑",
    tagline: "The reset phase", chemical: "Oxytocin",
    chemicalNote: "She needs warmth, closeness and safety — no agenda",
    mood: ["She's low energy and her body is doing real physical work right now","Hormones are at their lowest — don't expect her to be her usual self","She may be crampy, bloated and just want to be left alone","Emotionally she may feel raw or fragile without fully knowing why","Comfort and rest are all she really wants right now"],
    tips: ["Focus on her comfort — think about what makes her feel cozy and make it happen","Stock her favorite comfort food — chocolate, soup, whatever she loves","Take something off her plate today — dishes, errands, dinner plans","Don't push her to socialize or go out; a night in is the move","Just sit with her. You don't need to fix anything, just be present","If she eats meat, suggest red meat — iron drops during her period. But she may not want you telling her what to eat"],
    avoid: ["Don't minimize her pain or tell her to push through it","Don't make demands on her time or energy","Don't take her low mood personally — it's hormonal not personal","Don't pressure her to go out or be social","Don't make her feel bad for canceling plans"],
    body: ["The uterine lining is shedding as estrogen and progesterone hit their lowest point","The body releases prostaglandins — chemicals that cause the uterus to contract and create cramps","Blood flow and fatigue are real physical symptoms, not exaggeration","Iron levels can dip during heavy flow days, adding to exhaustion","Think of it as a full system reset — she's clearing out to start fresh"],
    sex: ["Many women actually want sex during their period — don't assume she doesn't","If she's open to it, heat and intimacy can genuinely relieve cramps","Ask rather than assume — a simple question goes a long way","If she's not interested, don't sulk — just be warm and physically present","Breast sensitivity is heightened right now — be extra gentle and check in"],
    game: [{ text: "Common tests in the Menstrual Phase: The Comfort Test", link: { sectionId: "conflict", title: "Handling shit tests" } }, { text: "Oxytocin: The Chemical She Needs From You", link: { sectionId: "connection", title: "The Oxytocin playbook" } }, "Align your expectations: Most drama here comes from YOU expecting something unrealistic", "You are not trying to fix anything or get anything — you are just being a warm presence", "The man who shows up here without an agenda is the man she remembers"],
    gameNote: "Put your phone down, queue up her favorite show, and just be a warm body next to her tonight. No agenda. That's the whole game.",
  },
  follicular: {
    name: "Follicular", days: [6,13], color: "#f4a24b", emoji: "🌒",
    tagline: "The rising phase", chemical: "Dopamine + Serotonin",
    chemicalNote: "Both rising — she feels genuinely happy AND craves novelty",
    mood: ["Energy is rising and she's feeling more like herself again","She's optimistic, curious and more open to conversation","Social energy is coming back — she may want to make plans","Her confidence is building day by day through this phase","This is genuinely one of her best weeks of the month"],
    tips: ["Great time to plan a date, an adventure or try something new together","She'll be more social and energetic this week — match that energy","This is the best phase for important conversations — she's open and optimistic","Suggest something she's been wanting to do and actually book it","Be spontaneous — she'll respond well to surprises this week"],
    avoid: ["Don't be withdrawn or glued to your phone — she wants to connect","Don't cancel plans or be flaky — she's in the mood to do things","Don't bring up old arguments — her good mood isn't an invitation to rehash drama","Don't take her energy for granted — match it","Don't waste this week on autopilot"],
    body: ["Estrogen is climbing steadily as the ovaries prepare to release an egg","The brain gets a measurable boost — memory, focus and mood all sharpen","She may feel almost unusually good during this phase and that's completely normal","Serotonin levels rise alongside estrogen, which is why she seems happier","This is the phase where she's most likely to want to try new things"],
    sex: ["Her interest is returning and building — good time to reconnect physically","She's more adventurous during this phase, open to trying new things","Flirt more, build tension slowly — she'll respond well to the chase","Emotional connection still matters — don't skip straight to physical","Great phase to introduce something new you've both been curious about"],
    game: ["Dopamine and Serotonin are both rising — she feels genuinely good AND craves novelty. Feed both", "Think about what makes her genuinely light up — new places, spontaneous plans, unexpected moves", "Book something. Suggest something. Show up differently this week", "The man who makes her feel alive during this phase becomes associated with that feeling permanently", "Her attraction is quietly building — don't waste this window on autopilot"],
    gameNote: "Don't wait for her to suggest something. You make the plan this week. Watch how she responds.",
  },
  ovulation: {
    name: "Ovulation", days: [14,16], color: "#5bbf8a", emoji: "🌕",
    tagline: "The peak phase", chemical: "Oxytocin + Dopamine + Serotonin",
    chemicalNote: "The only window where all three chemicals peak simultaneously",
    mood: ["This is her peak — she feels confident, attractive and fully alive","She's at her most warm, affectionate and communicative","She wants to be seen, appreciated and pursued right now","Her social energy is at maximum","If there was ever a time to make her feel special, it's these 3 days"],
    tips: ["She's at her peak — plan your best date of the month right now","Tell her she looks good — she wants to feel seen and desired","This is the best time for deep meaningful conversations","Be fully present and attentive — she will notice everything this week","Plan something special — she is up for anything and will remember it"],
    avoid: ["Don't pick fights or bring up heavy topics — you're burning the best days","Don't be emotionally unavailable when she's this open","Don't ignore her or be distracted — she'll notice more than usual","Don't take her good mood for granted and coast","Don't forget to actually tell her she looks good"],
    body: ["A luteinizing hormone surge triggers the release of a mature egg from the ovary","Estrogen peaks and testosterone spikes briefly — a rare and powerful combination","This is why she feels her most confident, communicative and attractive right now","Her voice, skin and energy all subtly shift during ovulation","It's the shortest phase but the most hormonally dramatic"],
    sex: ["Her libido is at its absolute peak — biologically she is most drawn to intimacy","She wants to feel desired — be direct, confident and intentional","Plan a proper date that ends well, not a casual night in","She'll be more physically responsive than at any other point in the cycle","Don't waste these 3 days — be present, attentive and bring your A game"],
    game: ["All three chemicals are peaking — the only window where Oxytocin, Dopamine and Serotonin all align", "Her desire crept up on her out of a cocktail of feeling safe, excited and alive", "You triggered that. Now be intentional about it", "This is not the week for autopilot — she is fully awake and will notice everything", "The man who shows up completely during ovulation is the man she compares everyone else to"],
    gameNote: "Three days. That's all you get. Don't waste them being the same guy you are every other week.",
  },
  earlyLuteal: {
    name: "Early Luteal", days: [17,22], color: "#7a9ebf", emoji: "🌖",
    tagline: "The settling phase", chemical: "Serotonin",
    chemicalNote: "She needs stability, calm and quiet consistency",
    mood: ["Still relatively stable but starting to wind down from her peak","She may be a little more tired or inward than the week before","She's more reflective and less interested in big social plans","Small irritabilities may start to surface — nothing major yet","She needs a bit more reassurance than during the first half of her cycle"],
    tips: ["Check in more — ask how she's doing and actually listen","Reduce her mental load: handle something without being asked","Keep plans low key — she's winding down","Be steady and calm — your consistency matters more than excitement right now","Small gestures of care land big during this phase"],
    avoid: ["Don't assume everything is fine just because she seems okay","Don't overschedule her or make too many plans without asking","Don't be less attentive just because she's not at her peak","Don't dismiss early mood shifts as nothing — they're signals worth noticing","Don't wait for her to ask for help — just do things"],
    body: ["Progesterone rises sharply after ovulation and takes the lead hormonally","This hormone has a calming but sedating effect — hence the lower energy","Estrogen dips briefly then rises again before eventually falling","The body is waiting to find out if pregnancy occurred","If it didn't, both hormones will begin their descent"],
    sex: ["Her libido is tapering down from its peak but she's still receptive","Slow down and focus on connection over performance right now","She may prefer intimacy that feels more emotional than physical","Don't pressure or initiate aggressively — read the room carefully","Cuddling, closeness and non-sexual touch matter more than you'd think"],
    game: ["She's shifting from Dopamine to Serotonin — she needs stability more than excitement now", "Stop performing and start being steady — calm, reliable, consistent", "Think about what makes her visibly relax — a clean space, a plan, handling something without being asked", "Her attraction is quietly deepening based on whether you feel like a safe place to land", "The man who transitions smoothly from exciting to steady is the man she trusts completely"],
    gameNote: "This week isn't about grand gestures. It's about being the guy who just handles things. Quietly.",
  },
  lateLuteal: {
    name: "Late Luteal", days: [23,28], color: "#8e7abf", emoji: "🌘",
    tagline: "The storm before the reset", chemical: "Serotonin (crashing)",
    chemicalNote: "Her Serotonin is crashing — your calm is literally what her brain is missing",
    mood: ["Emotionally sensitive — small things can feel much bigger than they are","She may be irritable, anxious, tearful or all three in the same afternoon","Her patience is thinner and her nervous system is genuinely more reactive","She may feel unlike herself and not fully understand why","This is the hardest phase — for her more than anyone"],
    tips: ["Be her calm — your steadiness is the chemical her brain is running low on","Do not add a single unnecessary stressor to her week","Handle the small things before she has to ask","Check in with warmth, not logic","Just being present and unbothered is one of the most powerful things you can do"],
    avoid: ["Don't say are you PMSing — ever, under any circumstances","Don't make big plans or create big demands right now","Don't interpret her emotions as personal attacks","Don't disappear or go cold when she needs steadiness most","Don't add stress to her life in any form this week"],
    body: ["Estrogen and progesterone both crash toward the end of this phase","This hormonal drop triggers classic PMS symptoms — bloating, mood swings, fatigue, cravings","Serotonin also dips, which directly affects mood and emotional regulation","Her nervous system is genuinely more sensitive right now — she's not being dramatic","The closer to day 28, the more intense it gets — then her period starts and the cycle resets"],
    sex: ["Her libido is at its lowest and she may have zero interest — don't take it personally","If she is in the mood, keep it gentle, intimate and low pressure","Physical touch that isn't sexual may mean more right now","Never push or guilt trip during this phase","Your best move is to be so steady and supportive that she actually wants to come to you"],
    game: ["Her Serotonin is crashing and she cannot manufacture it on her own right now", "You are not dealing with her mood — you are literally providing the chemical her brain is missing", "Do not be a source of chaos, friction or unpredictability this week", "Think about what makes her feel like everything is going to be okay — and go do that thing", "The man who holds it together when she can't is the man she feels safest with for the long haul"],
    gameNote: "Don't try to fix it. Don't try to cheer her up. Don't make it about you. Just be a wall she can lean on.",
  },
};

const FERTILITY = {
  menstrual:   { emoji: "🟢", tier: "Very Low",     color: "#5bbf8a", note: "The uterine lining is shedding — conception is extremely unlikely right now." },
  follicular:  { emoji: "🟡", tier: "Low to Medium",color: "#f4a24b", note: "Estrogen is rising and the body is preparing to ovulate — fertility builds toward the end of this phase." },
  ovulation:   { emoji: "🔴", tier: "Peak",          color: "#e05c6b", note: "The egg is released and viable for 12-24 hours — this is the highest fertility window of the entire cycle." },
  earlyLuteal: { emoji: "🟡", tier: "Medium Low",    color: "#f4a24b", note: "The fertile window has passed — conception is unlikely but not impossible if ovulation was late." },
  lateLuteal:  { emoji: "🟢", tier: "Very Low",      color: "#5bbf8a", note: "The body is preparing to shed the lining — the fertile window is long closed for this cycle." },
};

const FERTILITY_TIERS = ["Very Low", "Low to Medium", "Medium Low", "Medium", "High", "Peak"];
const FERTILITY_COLORS = ["#5bbf8a", "#8bbf5a", "#f4c14b", "#f4a24b", "#e08a3c", "#e05c6b"];

const REL_TYPES = [
  { id: "girlfriend", emoji: "🌹", label: "Girlfriend", pro: false },
  { id: "wife",       emoji: "💍", label: "Wife",       pro: false },
  { id: "fwb",        emoji: "🔥", label: "FWB",        pro: true  },
  { id: "friend",     emoji: "🤝", label: "Friend",     pro: true  },
  { id: "boss",       emoji: "👔", label: "Boss",       pro: true  },
  { id: "daughter",   emoji: "👧", label: "Daughter",   pro: true  },
  { id: "coworker",   emoji: "💼", label: "Coworker",   pro: true  },
  { id: "other",      emoji: "🌀", label: "Other",      pro: true  },
];

const GOALS = [
  { id: "friction",   emoji: "🧘", label: "Minimize friction",    sub: "Stop the unnecessary conflict" },
  { id: "connect",    emoji: "🔗", label: "Connect more deeply",   sub: "Build a real bond" },
  { id: "better",     emoji: "⬆️", label: "Be a better partner",   sub: "Show up the right way" },
  { id: "sex",        emoji: "🔥", label: "Improve our sex life",  sub: "Understand her desire" },
  { id: "understand", emoji: "🧠", label: "Understand her better", sub: "Finally make sense of it" },
  { id: "all",        emoji: "💯", label: "All of the above",      sub: "The full picture" },
];

const HEADERS = {
  tips:  { label: "Tips",          emoji: "💡" },
  mood:  { label: "Her Mood",      emoji: "💜" },
  avoid: { label: "Avoid",         emoji: "⚠️" },
  body:  { label: "Body Science",  emoji: "🔬" },
  sex:   { label: "Sex",           emoji: "🔥" },
  game:  { label: "Advanced Game", emoji: "♚" },
};

const PHASE_ORDER = ["menstrual","follicular","ovulation","earlyLuteal","lateLuteal"];
const AVATARS = ["💜","💙","💚","🧡","❤️","🤍","💛","🩷"];

function getPhaseKey(d) {
  if (d <= 5)  return "menstrual";
  if (d <= 13) return "follicular";
  if (d <= 16) return "ovulation";
  if (d <= 22) return "earlyLuteal";
  return "lateLuteal";
}
function getDayOfCycle(lp, cl) {
  const diff = Math.floor((Date.now() - new Date(lp)) / 86400000);
  return ((diff % cl) + 1);
}
function todayStr() { return new Date().toISOString().split("T")[0]; }

function ArticleBody({ content }) {
  const paras = content.split("\n\n");
  return (
    <div>
      {paras.map(function(para, i) {
        var isH = para === para.toUpperCase() && para.length < 80 && para.indexOf(".") === -1;
        var parts = para.split(new RegExp("(" + ROLLO_TERMS.join("|") + ")", "g"));
        return (
          <div key={i} style={{ fontSize: isH ? "11px" : "15px", color: isH ? "#6b4fa0" : "#c8b8e0", lineHeight: isH ? "1.4" : "1.85", marginBottom: isH ? "8px" : "18px", letterSpacing: isH ? "2px" : "0", fontWeight: isH ? "bold" : "normal" }}>
            {parts.map(function(part, j) {
              if (ROLLO_TERMS.indexOf(part) !== -1) {
                return <a key={j} href={ROLLO_URL} target="_blank" rel="noreferrer" style={{ color: "#9b6fca", textDecoration: "underline" }}>{part}</a>;
              }
              return part;
            })}
          </div>
        );
      })}
    </div>
  );
}

function LibraryItem({ item }) {
  var expanded = useState(false);
  var setExpanded = expanded[1];
  expanded = expanded[0];
  var playing = useState(false);
  var setPlaying = playing[1];
  playing = playing[0];
  var progress = useState(0);
  var setProgress = progress[1];
  progress = progress[0];
  var activeWord = useState(-1);
  var setActiveWord = activeWord[1];
  activeWord = activeWord[0];
  var intervalRef = useRef(null);
  var words = item.content ? item.content.split(" ") : [];

  function togglePlay() {
    if (playing) { clearInterval(intervalRef.current); setPlaying(false); return; }
    setPlaying(true); setActiveWord(0); setProgress(0);
    var start = Date.now();
    var dur = words.length * 350;
    intervalRef.current = setInterval(function() {
      var p = Math.min((Date.now() - start) / dur, 1);
      setProgress(p * 100);
      setActiveWord(Math.floor(p * words.length));
      if (p >= 1) { clearInterval(intervalRef.current); setPlaying(false); setActiveWord(-1); setProgress(0); }
    }, 100);
  }

  var isComingSoon = !item.content || item.content === "Content coming soon.";
  return (
    <div style={{ marginBottom: "8px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "12px", padding: "12px", borderRadius: "10px", background: "#1a1525", border: "1px solid #2a2035" }}>
        <div style={{ flex: 1, fontSize: "14px", color: "#d4c8e8" }}>{item.title}</div>
        {isComingSoon ? (
          <span style={{ fontSize: "11px", color: "#3a2a50", fontStyle: "italic" }}>coming soon</span>
        ) : (
          <button onClick={function() { setExpanded(function(v) { return !v; }); }} style={{ background: "none", border: "1px solid #2a2035", borderRadius: "8px", padding: "4px 10px", color: "#6b4fa0", fontSize: "11px", cursor: "pointer", fontFamily: "inherit" }}>{expanded ? "close" : "open"}</button>
        )}
      </div>
      {expanded && (
        <div style={{ background: "#130f1e", border: "1px solid #1e1830", borderRadius: "0 0 12px 12px", padding: "16px", marginTop: "-4px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "14px", background: "#1a1525", borderRadius: "10px", padding: "10px 14px" }}>
            <button onClick={togglePlay} style={{ background: "linear-gradient(135deg,#4a2f70,#6b4fa0)", border: "none", borderRadius: "50%", width: "36px", height: "36px", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", fontSize: "14px" }}>{playing ? "⏸" : "▶"}</button>
            <div style={{ flex: 1 }}>
              <div style={{ background: "#2a2035", borderRadius: "4px", height: "4px", overflow: "hidden" }}>
                <div style={{ height: "100%", width: progress + "%", background: "linear-gradient(90deg,#6b4fa0,#c084fc)", transition: "width 0.1s linear" }} />
              </div>
              <div style={{ fontSize: "10px", color: "#5a4a6a", marginTop: "4px" }}>🎧 AI audio — coming soon</div>
            </div>
          </div>
          <div style={{ fontSize: "15px", lineHeight: "1.9", color: "#9888b0" }}>
            {words.map(function(word, i) {
              return <span key={i} style={{ color: activeWord === -1 ? "#c8b8e0" : i <= activeWord ? "#f0eaf8" : "#4a3a5a", background: i === activeWord ? "#6b4fa030" : "transparent", borderRadius: "3px", padding: "1px 2px", fontWeight: i === activeWord ? "bold" : "normal" }}>{word} </span>;
            })}
          </div>
        </div>
      )}
    </div>
  );
}

function Setup({ onComplete, isPro, triggerUpgrade }) {
  var screenState = useState(1);
  var screen = screenState[0]; var setScreen = screenState[1];
  var nameState = useState(""); var name = nameState[0]; var setName = nameState[1];
  var ageState = useState(""); var age = ageState[0]; var setAge = ageState[1];
  var goalState = useState(null); var goal = goalState[0]; var setGoal = goalState[1];
  var relState = useState(null); var rel = relState[0]; var setRel = relState[1];
  var dateState = useState(""); var date = dateState[0]; var setDate = dateState[1];
  var fadeState = useState(true); var fade = fadeState[0]; var setFade = fadeState[1];

  function next() { setFade(false); setTimeout(function() { setScreen(function(s) { return s + 1; }); setFade(true); }, 180); }
  function finish(skip) { onComplete({ name: name.trim(), age: age.trim(), goal: goal, relType: rel, lastPeriod: skip ? todayStr() : (date || todayStr()), skipped: skip }); }

  var pct = (screen / 5) * 100;
  var inp = { width: "100%", background: "#1a1525", border: "1px solid #3a2a50", borderRadius: "14px", padding: "16px 18px", color: "#f0eaf8", fontFamily: "inherit", fontSize: "18px", boxSizing: "border-box", outline: "none" };
  function ctaStyle(on) { return { background: on ? "linear-gradient(135deg,#6b4fa0,#9b6fca)" : "#2a2035", border: "none", borderRadius: "14px", padding: "16px", color: on ? "white" : "#4a3a5a", fontSize: "16px", fontWeight: "bold", cursor: on ? "pointer" : "default", fontFamily: "inherit", width: "100%", marginTop: "12px" }; }

  return (
    <div style={{ minHeight: "100vh", background: "#0a0812", fontFamily: "Georgia, serif", color: "#f0eaf8", display: "flex", flexDirection: "column", opacity: fade ? 1 : 0, transition: "opacity 0.18s" }}>
      <div style={{ height: "3px", background: "#1a1525", position: "fixed", top: 0, left: 0, right: 0, zIndex: 10 }}>
        <div style={{ height: "100%", width: pct + "%", background: "linear-gradient(90deg,#6b4fa0,#c084fc)", transition: "width 0.4s ease" }} />
      </div>
      <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", padding: "70px 28px 48px", maxWidth: "440px", margin: "0 auto", width: "100%", boxSizing: "border-box" }}>

        {screen === 1 && (
          <div>
            <div style={{ fontSize: "28px", fontWeight: "bold", marginBottom: "28px" }}>What's her name?</div>
            <input value={name} onChange={function(e) { setName(e.target.value); }} placeholder="e.g. Sarah" autoFocus style={inp} />
            <button onClick={next} style={ctaStyle(!!name.trim())} disabled={!name.trim()}>Continue</button>
          </div>
        )}

        {screen === 2 && (
          <div>
            <div style={{ fontSize: "28px", fontWeight: "bold", marginBottom: "28px" }}>How old is {name}?</div>
            <input value={age} onChange={function(e) { setAge(e.target.value.replace(/\D/g, "")); }} placeholder="e.g. 28" type="number" autoFocus style={inp} />
            <button onClick={next} style={ctaStyle(!!age)} disabled={!age}>Continue</button>
          </div>
        )}

        {screen === 3 && (
          <div>
            <div style={{ fontSize: "28px", fontWeight: "bold", marginBottom: "28px" }}>Why are you tracking?</div>
            <div style={{ display: "flex", flexDirection: "column", gap: "9px", marginBottom: "8px" }}>
              {GOALS.map(function(g) {
                return (
                  <button key={g.id} onClick={function() { setGoal(g.id); }} style={{ background: goal === g.id ? "linear-gradient(135deg,#2e1f45,#3d2860)" : "#1a1525", border: goal === g.id ? "1px solid #8b6fca" : "1px solid #2a2035", borderRadius: "14px", padding: "13px 16px", display: "flex", alignItems: "center", gap: "13px", cursor: "pointer", fontFamily: "inherit", textAlign: "left" }}>
                    <span style={{ fontSize: "22px" }}>{g.emoji}</span>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: "15px", color: goal === g.id ? "#d4b8f0" : "#c8b8e0", fontWeight: "bold" }}>{g.label}</div>
                      <div style={{ fontSize: "12px", color: "#6a5a7a", marginTop: "2px" }}>{g.sub}</div>
                    </div>
                    {goal === g.id && <span style={{ color: "#8b6fca" }}>✓</span>}
                  </button>
                );
              })}
            </div>
            <button onClick={next} style={ctaStyle(!!goal)} disabled={!goal}>Continue</button>
          </div>
        )}

        {screen === 4 && (
          <div>
            <div style={{ fontSize: "28px", fontWeight: "bold", marginBottom: "28px" }}>{name} is my...</div>
            <div style={{ display: "flex", flexDirection: "column", gap: "9px", marginBottom: "8px" }}>
              {REL_TYPES.map(function(r) {
                return (
                  <button key={r.id} onClick={function() { if (r.pro && !isPro) { triggerUpgrade("Unlock " + r.label + " with Pro"); return; } setRel(r.id); }} style={{ background: rel === r.id ? "linear-gradient(135deg,#2e1f45,#3d2860)" : "#1a1525", border: rel === r.id ? "1px solid #8b6fca" : "1px solid #2a2035", borderRadius: "14px", padding: "13px 16px", display: "flex", alignItems: "center", gap: "13px", cursor: "pointer", fontFamily: "inherit", textAlign: "left", opacity: r.pro && !isPro ? 0.6 : 1 }}>
                    <span style={{ fontSize: "24px" }}>{r.emoji}</span>
                    <span style={{ fontSize: "17px", color: rel === r.id ? "#d4b8f0" : "#c8b8e0", fontWeight: "bold", flex: 1 }}>{r.label}</span>
                    {r.pro && !isPro ? <span style={{ fontSize: "11px", color: "#8b6fca", background: "#2a1f3d", borderRadius: "8px", padding: "2px 8px" }}>Pro</span> : rel === r.id ? <span style={{ color: "#8b6fca" }}>✓</span> : null}
                  </button>
                );
              })}
            </div>
            <button onClick={next} style={ctaStyle(!!rel)} disabled={!rel}>Continue</button>
          </div>
        )}

        {screen === 5 && (
          <div>
            <div style={{ fontSize: "28px", fontWeight: "bold", marginBottom: "8px" }}>When did {name}'s last period start?</div>
            <div style={{ fontSize: "15px", color: "#6a5a7a", marginBottom: "28px" }}>First day of her last period</div>
            <input type="date" value={date} onChange={function(e) { setDate(e.target.value); }} style={{ ...inp, colorScheme: "dark", fontSize: "16px" }} />
            <button onClick={function() { finish(false); }} style={ctaStyle(true)}>Start tracking</button>
            <button onClick={function() { finish(true); }} style={{ background: "none", border: "none", color: "#8b6fca", fontSize: "14px", cursor: "pointer", fontFamily: "inherit", marginTop: "16px", textAlign: "center", width: "100%", fontStyle: "italic" }}>Skip for now</button>
          </div>
        )}

        <div style={{ display: "flex", justifyContent: "center", gap: "6px", marginTop: "32px" }}>
          {[1,2,3,4,5].map(function(i) {
            return <div key={i} style={{ width: i === screen ? "20px" : "6px", height: "6px", borderRadius: "3px", background: i === screen ? "#8b6fca" : i < screen ? "#4a3a6a" : "#2a2035", transition: "all 0.3s" }} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default function TrackHer() {
  var s1 = useState(function() { try { return JSON.parse(localStorage.getItem("th_p")) || []; } catch(e) { return []; } });
  var partners = s1[0]; var setPartners = s1[1];
  var s2 = useState(null); var activeId = s2[0]; var setActiveId = s2[1];
  var s3 = useState(function() { try { return !localStorage.getItem("th_ready"); } catch(e) { return true; } });
  var isFirst = s3[0]; var setIsFirst = s3[1];
  var s4 = useState(false); var showSetup = s4[0]; var setShowSetup = s4[1];
  var s5 = useState(function() { try { return !!localStorage.getItem("th_pro"); } catch(e) { return false; } });
  var isPro = s5[0]; var setIsPro = s5[1];
  var s6 = useState(false); var showUpgrade = s6[0]; var setShowUpgrade = s6[1];
  var s7 = useState(""); var upgradeReason = s7[0]; var setUpgradeReason = s7[1];
  var s8 = useState("tips"); var activeHeader = s8[0]; var setActiveHeader = s8[1];
  var s9 = useState(0); var bullet = s9[0]; var setBullet = s9[1];
  var s10 = useState("tracker"); var appView = s10[0]; var setAppView = s10[1];
  var s11 = useState(null); var activeArticle = s11[0]; var setActiveArticle = s11[1];
  var s12 = useState(false); var showBooks = s12[0]; var setShowBooks = s12[1];
  var s13 = useState(null); var linkedItem = s13[0]; var setLinkedItem = s13[1];
  var s14 = useState(null); var furtherArticle = s14[0]; var setFurtherArticle = s14[1];
  var s15 = useState(""); var updateDate = s15[0]; var setUpdateDate = s15[1];
  var s16 = useState(false); var pickAvatar = s16[0]; var setPickAvatar = s16[1];
  var s17 = useState(false); var showStatus = s17[0]; var setShowStatus = s17[1];
  var s18 = useState(false); var showGoal = s18[0]; var setShowGoal = s18[1];
  var s19 = useState(false); var showFontSlider = s19[0]; var setShowFontSlider = s19[1];
  var s20 = useState(function() { try { return parseFloat(localStorage.getItem("th_fs")) || 1; } catch(e) { return 1; } });
  var fontSize = s20[0]; var setFontSize = s20[1];
  var s21 = useState(function() { try { return JSON.parse(localStorage.getItem("th_read")) || []; } catch(e) { return []; } });
  var readArticles = s21[0]; var setReadArticles = s21[1];
  var s22 = useState(null); var librarySection = s22[0]; var setLibrarySection = s22[1];
  var s23 = useState(""); var forecastDate = s23[0]; var setForecastDate = s23[1];
  var s24 = useState(null); var forecastPhase = s24[0]; var setForecastPhase = s24[1];
  var s25 = useState(false); var showNextPhase = s25[0]; var setShowNextPhase = s25[1];
  var s26 = useState(false); var showFeedback = s26[0]; var setShowFeedback = s26[1];
  var s27 = useState(""); var feedbackText = s27[0]; var setFeedbackText = s27[1];
  var s28 = useState(false); var feedbackSent = s28[0]; var setFeedbackSent = s28[1];
  var s29 = useState(false); var confirmDelete = s29[0]; var setConfirmDelete = s29[1];
  var s30 = useState(false); var showSavePrompt = s30[0]; var setShowSavePrompt = s30[1];

  useEffect(function() { if (partners.length > 0 && !activeId) setActiveId(partners[0].id); }, [partners]);
  useEffect(function() { try { localStorage.setItem("th_p", JSON.stringify(partners)); } catch(e) {} }, [partners]);
  useEffect(function() { setBullet(0); }, [activeHeader, activeId]);
  useEffect(function() { var p = partners.find(function(p) { return p.id === activeId; }); setUpdateDate(p ? p.lastPeriod || "" : ""); }, [activeId, partners]);
  useEffect(function() { try { localStorage.setItem("th_fs", fontSize); } catch(e) {} }, [fontSize]);
  useEffect(function() { try { localStorage.setItem("th_read", JSON.stringify(readArticles)); } catch(e) {} }, [readArticles]);
  useEffect(function() { try { if (isPro) localStorage.setItem("th_pro", "1"); } catch(e) {} }, [isPro]);

  function triggerUpgrade(reason) { setUpgradeReason(reason); setShowUpgrade(true); }

  function completeSetup(data) {
    var em = { girlfriend: "🌹", wife: "💍", fwb: "🔥", friend: "🤝", other: "🌀", boss: "👔", daughter: "👧", coworker: "💼" };
    var p = { id: Date.now(), name: data.name, age: data.age, relType: data.relType, goal: data.goal, lastPeriod: data.lastPeriod, cycleLength: 28, avatar: em[data.relType] || "💜", skipped: data.skipped || false };
    var first = partners.length === 0;
    setPartners(function(prev) { return prev.concat([p]); });
    setActiveId(p.id);
    setIsFirst(false);
    setShowSetup(false);
    if (first) setShowSavePrompt(true);
    try { localStorage.setItem("th_ready", "1"); } catch(e) {}
  }

  function removePartner(id) {
    var r = partners.filter(function(p) { return p.id !== id; });
    setPartners(r);
    setActiveId(r.length > 0 ? r[0].id : null);
    setConfirmDelete(false);
  }

  function doUpdate() {
    if (updateDate) setPartners(function(prev) { return prev.map(function(p) { return p.id === activeId ? Object.assign({}, p, { lastPeriod: updateDate, skipped: false }) : p; }); });
  }

  if (isFirst || showSetup) {
    return <Setup onComplete={completeSetup} isPro={isPro} triggerUpgrade={triggerUpgrade} />;
  }

  var active = partners.find(function(p) { return p.id === activeId; });
  var day = active && active.lastPeriod ? getDayOfCycle(active.lastPeriod, active.cycleLength) : null;
  var pk = day ? getPhaseKey(day) : null;
  var phase = pk ? PHASES[pk] : null;
  var daysLeft = day ? active.cycleLength - day + 1 : null;
  var cyclePct = day ? (day / active.cycleLength) * 100 : 0;
  var bullets = phase ? phase[activeHeader] : [];
  var relLabel = "";
  for (var ri = 0; ri < REL_TYPES.length; ri++) { if (REL_TYPES[ri].id === (active && active.relType)) { relLabel = REL_TYPES[ri].label; break; } }
  var goalLabel = "";
  for (var gi = 0; gi < GOALS.length; gi++) { if (GOALS[gi].id === (active && active.goal)) { goalLabel = GOALS[gi].label; break; } }

  var BG = "#0f0d14";
  var CARD = "#1a1525";
  var BORDER = "#2a2035";

  if (linkedItem) {
    var lsec = null; var litm = null;
    for (var li = 0; li < LIBRARY.length; li++) { if (LIBRARY[li].id === linkedItem.sectionId) { lsec = LIBRARY[li]; break; } }
    if (lsec) { for (var lj = 0; lj < lsec.items.length; lj++) { if (lsec.items[lj].title === linkedItem.title) { litm = lsec.items[lj]; break; } } }
    return (
      <div style={{ minHeight: "100vh", background: BG, color: "#f0eaf8", fontFamily: "Georgia, serif" }}>
        <div style={{ background: CARD, borderBottom: "1px solid " + BORDER, padding: "16px 20px", display: "flex", alignItems: "center", gap: "12px" }}>
          <button onClick={function() { setLinkedItem(null); }} style={{ background: "none", border: "none", color: "#7a6b8a", fontSize: "22px", cursor: "pointer" }}>←</button>
          <div style={{ fontSize: "14px", color: "#d4b8f0", fontWeight: "bold" }}>{litm ? litm.title : ""}</div>
        </div>
        <div style={{ padding: "24px 20px" }}>
          <div style={{ fontSize: "15px", color: "#c8b8e0", lineHeight: "1.85" }}>{litm ? litm.content : "Content coming soon."}</div>
        </div>
      </div>
    );
  }

  if (showBooks) {
    return (
      <div style={{ minHeight: "100vh", background: BG, color: "#f0eaf8", fontFamily: "Georgia, serif" }}>
        <div style={{ background: CARD, borderBottom: "1px solid " + BORDER, padding: "16px 20px", display: "flex", alignItems: "center", gap: "12px" }}>
          <button onClick={function() { setShowBooks(false); }} style={{ background: "none", border: "none", color: "#7a6b8a", fontSize: "22px", cursor: "pointer" }}>←</button>
          <div style={{ fontSize: "16px", color: "#d4b8f0", fontWeight: "bold" }}>📚 Recommended Content</div>
        </div>
        <div style={{ padding: "20px", maxWidth: "480px", margin: "0 auto" }}>
          {BOOKS.map(function(book) {
            return (
              <div key={book.id} style={{ background: CARD, border: "1px solid " + BORDER, borderRadius: "16px", padding: "20px", marginBottom: "14px" }}>
                <div style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
                  <div style={{ fontSize: "40px" }}>{book.emoji}</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: "11px", color: "#6b4fa0", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "4px" }}>{book.type}</div>
                    <div style={{ fontSize: "16px", color: "#d4b8f0", fontWeight: "bold", marginBottom: "4px" }}>{book.title}</div>
                    <div style={{ fontSize: "12px", color: "#5a4a6a", marginBottom: "10px" }}>by {book.author}</div>
                    <div style={{ fontSize: "13px", color: "#7a6b8a", lineHeight: "1.6", marginBottom: "14px" }}>{book.description}</div>
                    {book.inApp ? (
                      <button onClick={function() { setActiveArticle(book.inApp); setShowBooks(false); setAppView("article"); }} style={{ background: "linear-gradient(135deg,#4a2f70,#6b4fa0)", border: "none", borderRadius: "10px", padding: "8px 16px", color: "white", fontSize: "13px", cursor: "pointer", fontFamily: "inherit" }}>Read in app →</button>
                    ) : book.url ? (
                      <a href={book.url} target="_blank" rel="noreferrer" style={{ display: "inline-block", background: "linear-gradient(135deg,#4a2f70,#6b4fa0)", borderRadius: "10px", padding: "8px 16px", color: "white", fontSize: "13px", textDecoration: "none" }}>{book.type === "book" ? "View on Amazon" : "Read the post"} →</a>
                    ) : null}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  if (appView === "library") {
    var FILTERS = [
      { id: "all", label: "All", emoji: "📖" },
      { id: "foundational", label: "Foundational", emoji: "📚" },
      { id: "understanding", label: "Understanding", emoji: "🧠" },
      { id: "conflict", label: "Conflict", emoji: "⚡" },
      { id: "connection", label: "Connection", emoji: "🔗" },
      { id: "sex", label: "Sex and Desire", emoji: "🔥" },
      { id: "advanced", label: "Advanced Game", emoji: "♚" },
    ];
    var af = librarySection || "all";
    var foundItems = ARTICLES.map(function(a) { return Object.assign({}, a, { category: "foundational", isArticle: true }); });
    var libItems = [];
    for (var si = 0; si < LIBRARY.length; si++) {
      for (var ii = 0; ii < LIBRARY[si].items.length; ii++) {
        libItems.push(Object.assign({}, LIBRARY[si].items[ii], { sectionId: LIBRARY[si].id, sectionTitle: LIBRARY[si].title, sectionEmoji: LIBRARY[si].emoji, category: LIBRARY[si].id, isArticle: false }));
      }
    }
    var allItems = foundItems.concat(libItems);
    var filtered = af === "all" ? allItems : allItems.filter(function(i) { return i.category === af; });
    return (
      <div style={{ minHeight: "100vh", background: BG, color: "#f0eaf8", fontFamily: "Georgia, serif" }}>
        <div style={{ background: CARD, borderBottom: "1px solid " + BORDER, padding: "16px 20px", display: "flex", alignItems: "center", gap: "12px" }}>
          <button onClick={function() { setAppView("tracker"); }} style={{ background: "none", border: "none", color: "#7a6b8a", fontSize: "22px", cursor: "pointer" }}>←</button>
          <div style={{ fontSize: "16px", color: "#d4b8f0", fontWeight: "bold" }}>📖 Required Reading</div>
        </div>
        <div style={{ display: "flex", gap: "8px", padding: "12px 20px", overflowX: "auto", background: "#130f1e", borderBottom: "1px solid #1e1830" }}>
          {FILTERS.map(function(f) {
            return <button key={f.id} onClick={function() { setLibrarySection(f.id === "all" ? null : f.id); }} style={{ background: af === f.id ? "linear-gradient(135deg,#2e1f45,#3d2860)" : CARD, border: af === f.id ? "1px solid #6b4fa0" : "1px solid " + BORDER, borderRadius: "20px", padding: "6px 14px", color: af === f.id ? "#d4b8f0" : "#7a6b8a", fontSize: "12px", cursor: "pointer", fontFamily: "inherit", whiteSpace: "nowrap" }}>{f.emoji} {f.label}</button>;
          })}
        </div>
        <div style={{ padding: "16px 20px", maxWidth: "480px", margin: "0 auto" }}>
          <div style={{ fontSize: "14px", color: "white", lineHeight: "1.7", marginBottom: "20px", padding: "16px", background: "#1a1525", borderRadius: "12px", border: "1px solid #2a2035" }}>
            What follows is REQUIRED reading if you want to understand what's actually happening with the woman you're tracking, and get what you want out of the relationship. These are in order. Some are locked for members only.
          </div>
          {filtered.map(function(item, idx) {
            var itemNumber = idx + 1;
            var gated = item.isArticle && FREE_ARTICLES.indexOf(item.id) === -1 && !isPro;
            return (
              <button key={idx} onClick={function() {
                if (!item.isArticle) return;
                if (gated) { triggerUpgrade("Unlock all articles with Pro"); return; }
                setActiveArticle(item.id);
                setAppView("article");
                if (readArticles.indexOf(item.id) === -1) setReadArticles(function(prev) { return prev.concat([item.id]); });
              }} style={{ width: "100%", background: CARD, border: "1px solid " + BORDER, borderRadius: "14px", padding: "16px", marginBottom: "10px", cursor: item.isArticle ? "pointer" : "default", textAlign: "left", fontFamily: "inherit", display: "block", opacity: item.isArticle ? 1 : 0.5 }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", minWidth: "32px" }}>
                    <span style={{ fontSize: "11px", color: "#6b4fa0", fontWeight: "bold", marginBottom: "2px" }}>{itemNumber}</span>
                    <span style={{ fontSize: "24px" }}>{item.emoji || item.sectionEmoji}</span>
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "4px" }}>
                      <div style={{ fontSize: "11px", color: "#5a4a6a", letterSpacing: "1px", textTransform: "uppercase" }}>{item.isArticle ? "Foundational" : item.sectionTitle}</div>
                      {item.isArticle && <span style={{ fontSize: "10px", background: gated ? "#2a1f3d" : readArticles.indexOf(item.id) !== -1 ? "#2a3a2a" : BORDER, color: gated ? "#8b6fca" : readArticles.indexOf(item.id) !== -1 ? "#5bbf8a" : "#5a4a6a", borderRadius: "8px", padding: "2px 8px" }}>{gated ? "🔒 Pro" : readArticles.indexOf(item.id) !== -1 ? "✓ Read" : "Unread"}</span>}
                    </div>
                    <div style={{ fontSize: "15px", color: "#d4b8f0", fontWeight: "bold", marginBottom: "3px" }}>{item.title}</div>
                    {item.subtitle && <div style={{ fontSize: "12px", color: "#7a6b8a", fontStyle: "italic" }}>{item.subtitle}</div>}
                    {!item.isArticle && <div style={{ fontSize: "11px", color: "#3a2a50", fontStyle: "italic", marginTop: "4px" }}>coming soon</div>}
                  </div>
                  {item.isArticle && <span style={{ color: "#6b4fa0", fontSize: "16px" }}>{gated ? "🔒" : "→"}</span>}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  if (furtherArticle) {
    var fart = null;
    for (var fi = 0; fi < FURTHER_READING.length; fi++) { if (FURTHER_READING[fi].id === furtherArticle) { fart = FURTHER_READING[fi]; break; } }
    return (
      <div style={{ minHeight: "100vh", background: BG, color: "#f0eaf8", fontFamily: "Georgia, serif" }}>
        <div style={{ background: CARD, borderBottom: "1px solid " + BORDER, padding: "16px 20px", display: "flex", alignItems: "center", gap: "12px" }}>
          <button onClick={function() { setFurtherArticle(null); }} style={{ background: "none", border: "none", color: "#7a6b8a", fontSize: "22px", cursor: "pointer" }}>←</button>
          <div style={{ fontSize: "14px", color: "#d4b8f0", fontWeight: "bold" }}>{fart ? fart.emoji + " " + fart.title : ""}</div>
        </div>
        <div style={{ padding: "24px 20px" }}>
          <div style={{ fontSize: "15px", color: "#c8b8e0", lineHeight: "1.85" }}>Content coming soon.</div>
        </div>
      </div>
    );
  }

  if (appView === "article" && activeArticle) {
    var art = null;
    for (var ai2 = 0; ai2 < ARTICLES.length; ai2++) { if (ARTICLES[ai2].id === activeArticle) { art = ARTICLES[ai2]; break; } }
    if (!art) return null;
    return (
      <div style={{ minHeight: "100vh", background: BG, color: "#f0eaf8", fontFamily: "Georgia, serif" }}>
        <div style={{ background: CARD, borderBottom: "1px solid " + BORDER, padding: "16px 20px", display: "flex", alignItems: "center", gap: "12px" }}>
          <button onClick={function() { setAppView("library"); }} style={{ background: "none", border: "none", color: "#7a6b8a", fontSize: "22px", cursor: "pointer" }}>←</button>
          <div style={{ fontSize: "14px", color: "#d4b8f0", fontWeight: "bold" }}>{art.emoji + " " + art.title}</div>
        </div>
        <div style={{ padding: "24px 20px", maxWidth: "480px", margin: "0 auto" }}>
          <div style={{ fontSize: "13px", color: "#7a6b8a", fontStyle: "italic", marginBottom: "24px" }}>{art.subtitle}</div>
          <ArticleBody content={art.content} />
          <div style={{ height: "40px" }} />
        </div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: "100vh", background: BG, fontFamily: "Georgia, serif", color: "#f0eaf8", zoom: fontSize }}>

      <div style={{ background: "linear-gradient(135deg,#1a1525,#0f0d14)", borderBottom: "1px solid #2a2035", padding: "18px 20px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div>
          <div style={{ fontSize: "24px", fontWeight: "bold", letterSpacing: "-0.5px" }}>TrackHer</div>
          <div style={{ fontSize: "11px", color: "#7a6b8a", marginTop: "2px", fontStyle: "italic" }}>read the defense</div>
        </div>
        <div style={{ display: "flex", gap: "6px" }}>
          <button onClick={function() { setAppView("library"); }} style={{ background: CARD, border: "1px solid " + BORDER, borderRadius: "20px", padding: "8px 12px", color: "#7a6b8a", fontSize: "13px", cursor: "pointer", fontFamily: "inherit" }}>📖</button>
          <button onClick={function() { setShowBooks(true); }} style={{ background: CARD, border: "1px solid " + BORDER, borderRadius: "20px", padding: "8px 12px", color: "#7a6b8a", fontSize: "13px", cursor: "pointer", fontFamily: "inherit" }}>📚</button>
          <button onClick={function() { setShowSetup(true); }} style={{ background: "linear-gradient(135deg,#6b4fa0,#9b6fca)", border: "none", borderRadius: "20px", padding: "8px 14px", color: "white", fontSize: "13px", cursor: "pointer", fontFamily: "inherit" }}>+ Add</button>
          <button onClick={function() { setShowFontSlider(function(v) { return !v; }); }} style={{ background: showFontSlider ? "linear-gradient(135deg,#2e1f45,#3d2860)" : CARD, border: showFontSlider ? "1px solid #6b4fa0" : "1px solid " + BORDER, borderRadius: "20px", padding: "8px 12px", color: showFontSlider ? "#d4b8f0" : "#7a6b8a", fontSize: "15px", cursor: "pointer", fontFamily: "inherit" }}>Aa</button>
          {isPro ? (
            <button style={{ background: CARD, border: "1px solid " + BORDER, borderRadius: "20px", padding: "8px 12px", color: "#7a6b8a", fontSize: "15px", cursor: "pointer", fontFamily: "inherit" }}>🔔</button>
          ) : (
            <button onClick={function() { triggerUpgrade("Unlock the full TrackHer experience"); }} style={{ background: "linear-gradient(135deg,#3d2060,#6b4fa0)", border: "none", borderRadius: "20px", padding: "8px 12px", color: "#d4b8f0", fontSize: "12px", cursor: "pointer", fontFamily: "inherit", fontWeight: "bold" }}>👑 Pro</button>
          )}
        </div>
      </div>

      {showFontSlider && (
        <div style={{ background: CARD, borderBottom: "1px solid " + BORDER, padding: "14px 20px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", maxWidth: "480px", margin: "0 auto" }}>
            <span style={{ fontSize: "11px", color: "#7a6b8a" }}>A</span>
            <input type="range" min="85" max="130" step="5" value={Math.round(fontSize * 100)} onChange={function(e) { setFontSize(parseInt(e.target.value) / 100); }} style={{ flex: 1, accentColor: "#6b4fa0", cursor: "pointer" }} />
            <span style={{ fontSize: "19px", color: "#d4b8f0" }}>A</span>
            <span style={{ fontSize: "11px", color: "#6b4fa0", minWidth: "32px" }}>{Math.round(fontSize * 100)}%</span>
            <button onClick={function() { setFontSize(1); }} style={{ background: "none", border: "1px solid " + BORDER, borderRadius: "8px", padding: "3px 8px", color: "#5a4a6a", fontSize: "11px", cursor: "pointer", fontFamily: "inherit" }}>Reset</button>
          </div>
        </div>
      )}

      {partners.length > 0 && (
        <div style={{ display: "flex", gap: "8px", padding: "12px 20px", overflowX: "auto", background: "#130f1e", borderBottom: "1px solid #1e1830" }} onDragOver={function(e) { e.preventDefault(); }}>
          {partners.map(function(p, idx) {
            return (
              <button key={p.id} draggable
                onDragStart={function(e) { e.dataTransfer.setData("di", idx); }}
                onDrop={function(e) { var f = parseInt(e.dataTransfer.getData("di")); if (f === idx) return; var r = partners.slice(); var m = r.splice(f, 1)[0]; r.splice(idx, 0, m); setPartners(r); }}
                onClick={function() { setActiveId(p.id); }}
                style={{ background: activeId === p.id ? "linear-gradient(135deg,#2e1f45,#3d2860)" : CARD, border: activeId === p.id ? "1px solid #6b4fa0" : "1px solid " + BORDER, borderRadius: "24px", padding: "6px 14px", color: activeId === p.id ? "#d4b8f0" : "#7a6b8a", fontSize: "14px", cursor: "grab", fontFamily: "inherit", whiteSpace: "nowrap" }}>
                {p.avatar} {p.name}
              </button>
            );
          })}
        </div>
      )}

      {!active && (
        <div style={{ textAlign: "center", padding: "60px 24px", color: "#4a3a5a" }}>
          <div style={{ fontSize: "48px", marginBottom: "16px" }}>🌙</div>
          <div style={{ fontSize: "18px", marginBottom: "8px", color: "#7a6b8a" }}>No one added yet</div>
          <div style={{ fontSize: "13px", marginBottom: "28px" }}>Tap + Add to get started</div>
          <button onClick={function() { setShowSetup(true); }} style={{ background: "linear-gradient(135deg,#4a2f70,#6b4fa0)", border: "none", borderRadius: "20px", padding: "12px 28px", color: "white", cursor: "pointer", fontFamily: "inherit", fontSize: "15px" }}>+ Add partner</button>
        </div>
      )}

      {active && (
        <div style={{ padding: "18px 20px", maxWidth: "480px", margin: "0 auto" }}>

          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "14px", padding: "12px 16px", background: CARD, borderRadius: "14px", border: "1px solid " + BORDER }}>
            <div style={{ fontSize: "32px", cursor: "pointer" }} onClick={function() { setPickAvatar(function(v) { return !v; }); }}>{active.avatar}</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: "16px", fontWeight: "bold", color: "#d4b8f0" }}>{active.name}{active.age ? ", " + active.age : ""}</div>
              <div style={{ fontSize: "12px", color: "#5a4a6a", marginTop: "2px" }}>{relLabel}</div>
              {active.goal && <div style={{ fontSize: "11px", color: "#4a3a6a", marginTop: "2px", fontStyle: "italic" }}>Goal: {goalLabel}</div>}
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
              <button onClick={function() { setShowStatus(function(v) { return !v; }); setPickAvatar(false); setShowGoal(false); }} style={{ background: "none", border: "1px solid " + BORDER, borderRadius: "10px", padding: "4px 10px", color: "#6b4fa0", fontSize: "11px", cursor: "pointer", fontFamily: "inherit" }}>change status</button>
              <button onClick={function() { setShowGoal(function(v) { return !v; }); setShowStatus(false); setPickAvatar(false); }} style={{ background: "none", border: "1px solid " + BORDER, borderRadius: "10px", padding: "4px 10px", color: "#6b4fa0", fontSize: "11px", cursor: "pointer", fontFamily: "inherit" }}>change goal</button>
            </div>
          </div>

          {pickAvatar && (
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "14px", padding: "12px", background: CARD, borderRadius: "12px", border: "1px solid " + BORDER }}>
              {AVATARS.map(function(a) {
                return <button key={a} onClick={function() { setPartners(function(prev) { return prev.map(function(p) { return p.id === activeId ? Object.assign({}, p, { avatar: a }) : p; }); }); setPickAvatar(false); }} style={{ background: active.avatar === a ? "#3d2860" : "#130f1e", border: active.avatar === a ? "2px solid #6b4fa0" : "1px solid " + BORDER, borderRadius: "10px", padding: "8px 10px", fontSize: "20px", cursor: "pointer" }}>{a}</button>;
              })}
            </div>
          )}

          {showStatus && (
            <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "14px", padding: "12px", background: CARD, borderRadius: "12px", border: "1px solid " + BORDER }}>
              <div style={{ fontSize: "11px", color: "#6b4fa0", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "4px" }}>Change status</div>
              {REL_TYPES.map(function(r) {
                return (
                  <button key={r.id} onClick={function() {
                    if (r.pro && !isPro) { triggerUpgrade("Unlock " + r.label + " with Pro"); return; }
                    var em = { girlfriend: "🌹", wife: "💍", fwb: "🔥", friend: "🤝", other: "🌀", boss: "👔", daughter: "👧", coworker: "💼" };
                    setPartners(function(prev) { return prev.map(function(p) { return p.id === activeId ? Object.assign({}, p, { relType: r.id, avatar: em[r.id] }) : p; }); });
                    setShowStatus(false);
                  }} style={{ background: active.relType === r.id ? "linear-gradient(135deg,#2e1f45,#3d2860)" : "#130f1e", border: active.relType === r.id ? "1px solid #8b6fca" : "1px solid " + BORDER, borderRadius: "10px", padding: "10px 14px", display: "flex", alignItems: "center", gap: "12px", cursor: "pointer", fontFamily: "inherit", textAlign: "left", opacity: r.pro && !isPro ? 0.6 : 1 }}>
                    <span style={{ fontSize: "20px" }}>{r.emoji}</span>
                    <span style={{ fontSize: "15px", color: active.relType === r.id ? "#d4b8f0" : "#c8b8e0", fontWeight: "bold", flex: 1 }}>{r.label}</span>
                    {r.pro && !isPro ? <span style={{ fontSize: "11px", color: "#8b6fca", background: "#2a1f3d", borderRadius: "8px", padding: "2px 8px" }}>Pro</span> : active.relType === r.id ? <span style={{ color: "#8b6fca" }}>✓</span> : null}
                  </button>
                );
              })}
            </div>
          )}

          {showGoal && (
            <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "14px", padding: "12px", background: CARD, borderRadius: "12px", border: "1px solid " + BORDER }}>
              <div style={{ fontSize: "11px", color: "#6b4fa0", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "4px" }}>Change your goal</div>
              {GOALS.map(function(g) {
                return (
                  <button key={g.id} onClick={function() { setPartners(function(prev) { return prev.map(function(p) { return p.id === activeId ? Object.assign({}, p, { goal: g.id }) : p; }); }); setShowGoal(false); }} style={{ background: active.goal === g.id ? "linear-gradient(135deg,#2e1f45,#3d2860)" : "#130f1e", border: active.goal === g.id ? "1px solid #8b6fca" : "1px solid " + BORDER, borderRadius: "10px", padding: "10px 14px", display: "flex", alignItems: "center", gap: "12px", cursor: "pointer", fontFamily: "inherit", textAlign: "left" }}>
                    <span style={{ fontSize: "18px" }}>{g.emoji}</span>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: "14px", color: active.goal === g.id ? "#d4b8f0" : "#c8b8e0", fontWeight: "bold" }}>{g.label}</div>
                      <div style={{ fontSize: "11px", color: "#6a5a7a", marginTop: "2px" }}>{g.sub}</div>
                    </div>
                    {active.goal === g.id && <span style={{ color: "#8b6fca" }}>✓</span>}
                  </button>
                );
              })}
            </div>
          )}

          {phase && (
            <div style={{ background: "linear-gradient(135deg," + phase.color + "18," + phase.color + "08)", border: "1px solid " + phase.color + "40", borderRadius: "20px", padding: "20px", marginBottom: "14px", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: "-20px", right: "-20px", fontSize: "90px", opacity: "0.07" }}>{phase.emoji}</div>
              <div style={{ fontSize: "11px", color: phase.color, letterSpacing: "2px", textTransform: "uppercase", marginBottom: "4px" }}>{active.name} is in</div>
              <div style={{ fontSize: "26px", fontWeight: "bold" }}>{phase.emoji} {phase.name} Phase</div>
              <div style={{ fontSize: "13px", color: "#a090b8", fontStyle: "italic", marginTop: "3px" }}>{phase.tagline}</div>
              <div style={{ display: "inline-block", marginTop: "10px", background: phase.color + "20", border: "1px solid " + phase.color + "40", borderRadius: "20px", padding: "4px 12px", fontSize: "12px", color: phase.color }}>⚗️ {phase.chemical} — {phase.chemicalNote}</div>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "12px" }}>
                <div style={{ fontSize: "12px", color: "#7a6b8a" }}>Day {day - phase.days[0] + 1} of {phase.days[1] - phase.days[0] + 1} in this phase</div>
                <button onClick={function() { setShowNextPhase(true); }} style={{ background: phase.color + "20", border: "1px solid " + phase.color + "40", borderRadius: "12px", padding: "5px 12px", color: phase.color, fontSize: "12px", cursor: "pointer", fontFamily: "inherit" }}>Look ahead →</button>
              </div>
              <div style={{ marginTop: "14px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "11px", color: "#7a6b8a", marginBottom: "5px" }}>
                  <span>Day {day} of {active.cycleLength}</span>
                  <span>{daysLeft > 1 ? "~" + daysLeft + " days to period" : "Period due very soon"}</span>
                </div>
                <div style={{ background: "#2a2035", borderRadius: "8px", height: "5px", overflow: "hidden" }}>
                  <div style={{ width: cyclePct + "%", height: "100%", background: "linear-gradient(90deg,#e05c6b," + phase.color + ")", borderRadius: "8px" }} />
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", marginTop: "10px" }}>
                  {PHASE_ORDER.map(function(p) {
                    return (
                      <div key={p} style={{ textAlign: "center", opacity: p === pk ? 1 : 0.2 }}>
                        <div style={{ fontSize: "13px" }}>{PHASES[p].emoji}</div>
                        <div style={{ fontSize: "9px", color: "#7a6b8a", marginTop: "2px" }}>{PHASES[p].name.split(" ")[0]}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {phase && (
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "6px", marginBottom: "12px" }}>
              {Object.keys(HEADERS).map(function(key) {
                var val = HEADERS[key];
                var gated = PRO_HEADERS.indexOf(key) !== -1 && !isPro;
                return (
                  <button key={key} onClick={function() { if (gated) { triggerUpgrade(val.label + " is a Pro feature"); return; } setActiveHeader(key); }} style={{ background: activeHeader === key ? phase.color + "30" : "#252235", border: activeHeader === key ? "1px solid " + phase.color + "80" : "1px solid #3a3050", borderRadius: "12px", padding: "10px 6px", color: activeHeader === key ? phase.color : "#a090b8", fontSize: "12px", cursor: "pointer", fontFamily: "inherit", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: "3px", position: "relative", opacity: gated ? 0.6 : 1 }}>
                    <span style={{ fontSize: "18px" }}>{val.emoji}</span>
                    <span style={{ fontSize: "11px", whiteSpace: "nowrap" }}>{val.label}</span>
                    {gated && <span style={{ position: "absolute", top: "4px", right: "6px", fontSize: "9px" }}>🔒</span>}
                  </button>
                );
              })}
            </div>
          )}

          {phase && (function() {
            var f = FERTILITY[pk];
            var ai3 = FERTILITY_TIERS.indexOf(f.tier);
            return (
              <div style={{ background: CARD, border: "1px solid " + f.color + "40", borderRadius: "16px", padding: "16px", marginBottom: "12px" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "10px" }}>
                  <div style={{ fontSize: "11px", letterSpacing: "2px", color: f.color, textTransform: "uppercase" }}>🌿 Fertility</div>
                  <div style={{ fontSize: "15px", fontWeight: "bold", color: f.color }}>{f.emoji} {f.tier}</div>
                </div>
                <div style={{ display: "flex", gap: "4px", marginBottom: "10px" }}>
                  {FERTILITY_TIERS.map(function(t, i) { return <div key={i} style={{ flex: 1, height: "6px", borderRadius: "3px", background: i === ai3 ? FERTILITY_COLORS[i] : "#2a2035" }} />; })}
                </div>
                <div style={{ fontSize: "12px", color: "#7a6b8a", lineHeight: "1.5" }}>{f.note}</div>
              </div>
            );
          })()}

          {phase && bullets.length > 0 && (
            <div style={{ marginBottom: "12px" }}>
              <div
                style={{ background: activeHeader === "avoid" ? "#3a1828" : "#f5f0ff", borderRadius: "20px", padding: "24px", minHeight: "180px", display: "flex", flexDirection: "column", justifyContent: "space-between", boxShadow: "0 4px 24px rgba(0,0,0,0.3)", userSelect: "none", touchAction: "pan-y" }}
                onTouchStart={function(e) { e.currentTarget._tx = e.touches[0].clientX; }}
                onTouchEnd={function(e) { var d = e.changedTouches[0].clientX - e.currentTarget._tx; if (d < -50 && bullet < bullets.length - 1) setBullet(function(b) { return b + 1; }); if (d > 50 && bullet > 0) setBullet(function(b) { return b - 1; }); }}
              >
                <div>
                  <div style={{ fontSize: "11px", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "16px", color: activeHeader === "avoid" ? "#bf5060" : phase.color, fontWeight: "bold" }}>{HEADERS[activeHeader].emoji} {HEADERS[activeHeader].label}</div>
                  <div style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
                    <span style={{ fontSize: "28px", fontWeight: "900", color: activeHeader === "avoid" ? "#bf506030" : phase.color + "40", lineHeight: 1, marginTop: "-4px" }}>{bullet + 1}</span>
                    <div style={{ fontSize: "18px", color: activeHeader === "avoid" ? "#e8c0c8" : "#1a1030", lineHeight: "1.6", fontWeight: "500" }}>
                      {typeof bullets[bullet] === "object" ? (
                        <span onClick={function() { if (bullets[bullet].link) setLinkedItem(bullets[bullet].link); }} style={{ cursor: "pointer" }}>
                          {bullets[bullet].text} <span style={{ color: phase.color }}>→</span>
                        </span>
                      ) : bullets[bullet]}
                    </div>
                  </div>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "20px" }}>
                  <div style={{ display: "flex", gap: "5px" }}>
                    {bullets.map(function(b, i) { return <div key={i} onClick={function() { setBullet(i); }} style={{ width: i === bullet ? "20px" : "6px", height: "6px", borderRadius: "3px", cursor: "pointer", background: i === bullet ? phase.color : phase.color + "30", transition: "all 0.2s" }} />; })}
                  </div>
                  <div style={{ fontSize: "12px", color: "#9888b060" }}>{bullet + 1} / {bullets.length}</div>
                </div>
              </div>
              <div style={{ display: "flex", justifyContent: "center", marginTop: "8px", gap: "16px" }}>
                <button onClick={function() { setBullet(function(b) { return Math.max(0, b - 1); }); }} style={{ background: "none", border: "none", color: bullet > 0 ? phase.color : "#3a2a50", fontSize: "22px", cursor: bullet > 0 ? "pointer" : "default" }}>‹</button>
                <button onClick={function() { setBullet(function(b) { return Math.min(bullets.length - 1, b + 1); }); }} style={{ background: "none", border: "none", color: bullet < bullets.length - 1 ? phase.color : "#3a2a50", fontSize: "22px", cursor: bullet < bullets.length - 1 ? "pointer" : "default" }}>›</button>
              </div>
            </div>
          )}

          {phase && activeHeader === "game" && phase.gameNote && (
            <div style={{ background: phase.color + "12", border: "1px solid " + phase.color + "30", borderRadius: "12px", padding: "14px 16px", marginBottom: "10px" }}>
              <div style={{ fontSize: "11px", color: phase.color, letterSpacing: "1px", textTransform: "uppercase", marginBottom: "6px" }}>🎯 The move this week</div>
              <div style={{ fontSize: "14px", color: "#b8a8d0", lineHeight: "1.6", fontStyle: "italic" }}>{phase.gameNote}</div>
            </div>
          )}

          {phase && (function() {
            var frd = null;
            for (var i = 0; i < FURTHER_READING.length; i++) { if (FURTHER_READING[i].id === pk) { frd = FURTHER_READING[i]; break; } }
            if (!frd) return null;
            return (
              <div style={{ background: CARD, border: "1px solid " + BORDER, borderRadius: "16px", padding: "18px", marginBottom: "10px" }}>
                <div style={{ fontSize: "11px", letterSpacing: "2px", color: "#6b4fa0", textTransform: "uppercase", marginBottom: "14px" }}>📖 Further Reading</div>
                <button onClick={function() { setFurtherArticle(frd.id); }} style={{ background: "#130f1e", border: "1px solid " + BORDER, borderRadius: "12px", padding: "12px 14px", display: "flex", alignItems: "center", gap: "12px", cursor: "pointer", fontFamily: "inherit", textAlign: "left", width: "100%" }}>
                  <span style={{ fontSize: "20px", opacity: 0.6 }}>{frd.emoji}</span>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: "11px", color: "#6b4fa0", letterSpacing: "1px", textTransform: "uppercase", marginBottom: "3px" }}>{frd.phase} Phase</div>
                    <div style={{ fontSize: "14px", color: "#a090b8" }}>{frd.title}</div>
                  </div>
                  <span style={{ color: "#6b4fa0", fontSize: "16px" }}>→</span>
                </button>
              </div>
            );
          })()}

          {phase && (
            <div style={{ background: CARD, border: "1px solid " + BORDER, borderRadius: "16px", padding: "18px", marginBottom: "10px" }}>
              <div style={{ fontSize: "11px", letterSpacing: "2px", color: "#6b4fa0", textTransform: "uppercase", marginBottom: "6px" }}>🔮 Phase Forecast</div>
              <div style={{ fontSize: "13px", color: "#7a6b8a", marginBottom: "14px" }}>Planning something? See what phase she'll be in.</div>
              <input type="date" value={forecastDate} onChange={function(e) {
                setForecastDate(e.target.value);
                if (e.target.value && active.lastPeriod) {
                  var diff = Math.floor((new Date(e.target.value) - new Date(active.lastPeriod)) / 86400000);
                  if (diff >= 0) setForecastPhase({ key: getPhaseKey(((diff % active.cycleLength) + 1)), day: ((diff % active.cycleLength) + 1) });
                  else setForecastPhase(null);
                } else setForecastPhase(null);
              }} style={{ width: "100%", background: "#130f1e", border: "1px solid " + BORDER, borderRadius: "8px", padding: "8px 12px", color: "#d4c8e8", fontFamily: "inherit", fontSize: "14px", colorScheme: "dark", boxSizing: "border-box" }} />
              {forecastPhase && (function() {
                var fp = PHASES[forecastPhase.key];
                return (
                  <div style={{ marginTop: "12px", background: "linear-gradient(135deg," + fp.color + "18," + fp.color + "08)", border: "1px solid " + fp.color + "40", borderRadius: "12px", padding: "14px" }}>
                    <div style={{ fontSize: "11px", color: fp.color, letterSpacing: "2px", textTransform: "uppercase", marginBottom: "6px" }}>Day {forecastPhase.day} of {active.cycleLength}</div>
                    <div style={{ fontSize: "20px", fontWeight: "bold", color: "#f0eaf8", marginBottom: "4px" }}>{fp.emoji} {fp.name} Phase</div>
                    <div style={{ fontSize: "13px", color: "#a090b8", fontStyle: "italic", marginBottom: "8px" }}>{fp.tagline}</div>
                    <div style={{ fontSize: "13px", color: fp.color, background: fp.color + "15", borderRadius: "8px", padding: "8px 12px" }}>⚗️ {fp.chemical} — {fp.chemicalNote}</div>
                  </div>
                );
              })()}
            </div>
          )}

          <div style={{ background: "#130f1e", border: "1px solid #1e1830", borderRadius: "16px", padding: "14px", marginBottom: "10px" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "8px" }}>
              <div style={{ fontSize: "11px", letterSpacing: "2px", color: "#6b4fa0", textTransform: "uppercase" }}>📅 Adjust period start date</div>
              <button onClick={function() {}} style={{ background: "none", border: "none", color: "#6b4fa0", fontSize: "12px", cursor: "pointer", fontFamily: "inherit", fontStyle: "italic", textDecoration: "underline" }}>why would I do that?</button>
            </div>
            <div style={{ display: "flex", gap: "8px" }}>
              <input type="date" value={updateDate} onChange={function(e) { setUpdateDate(e.target.value); }} style={{ flex: 1, background: CARD, border: "1px solid " + BORDER, borderRadius: "8px", padding: "8px 12px", color: "#d4c8e8", fontFamily: "inherit", fontSize: "14px", colorScheme: "dark" }} />
              <button onClick={doUpdate} style={{ background: "linear-gradient(135deg,#4a2f70,#6b4fa0)", border: "none", borderRadius: "8px", padding: "8px 14px", color: "white", cursor: "pointer", fontFamily: "inherit", fontSize: "13px" }}>Save</button>
            </div>
          </div>

          <div style={{ background: CARD, border: "1px solid " + BORDER, borderRadius: "16px", padding: "18px", marginBottom: "10px" }}>
            <div style={{ fontSize: "11px", letterSpacing: "2px", color: "#6b4fa0", textTransform: "uppercase", marginBottom: "14px" }}>🎓 Library</div>
            {LIBRARY.map(function(section) {
              return (
                <div key={section.id} style={{ marginBottom: "12px" }}>
                  <button onClick={function() { setLibrarySection(librarySection === section.id ? null : section.id); }} style={{ width: "100%", background: "#130f1e", border: "1px solid " + BORDER, borderRadius: "12px", padding: "12px 16px", display: "flex", alignItems: "center", gap: "10px", cursor: "pointer", fontFamily: "inherit", textAlign: "left" }}>
                    <span style={{ fontSize: "20px" }}>{section.emoji}</span>
                    <span style={{ flex: 1, fontSize: "15px", color: "#d4b8f0", fontWeight: "bold" }}>{section.title}</span>
                    <span style={{ color: "#4a3a6a", fontSize: "16px" }}>{librarySection === section.id ? "↑" : "↓"}</span>
                  </button>
                  {librarySection === section.id && (
                    <div style={{ background: "#0f0d14", border: "1px solid #1e1830", borderRadius: "0 0 12px 12px", padding: "8px 12px 12px", marginTop: "-4px" }}>
                      {section.items.map(function(item, i) { return <LibraryItem key={i} item={item} />; })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div style={{ background: CARD, border: "1px solid " + BORDER, borderRadius: "16px", padding: "18px", marginBottom: "10px" }}>
            <button onClick={function() { setShowFeedback(function(v) { return !v; }); }} style={{ background: "none", border: "none", cursor: "pointer", fontFamily: "inherit", width: "100%", textAlign: "left", padding: "0", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <div style={{ fontSize: "11px", letterSpacing: "2px", color: "#6b4fa0", textTransform: "uppercase" }}>💬 App Feedback</div>
              <span style={{ color: "#4a3a6a", fontSize: "16px" }}>{showFeedback ? "↑" : "↓"}</span>
            </button>
            {showFeedback && (
              <div style={{ marginTop: "14px" }}>
                <div style={{ fontSize: "13px", color: "#7a6b8a", marginBottom: "10px" }}>What's working? What's missing? Be brutal.</div>
                {feedbackSent ? (
                  <div style={{ textAlign: "center", padding: "20px", color: "#8b6fca", fontSize: "15px" }}>🙏 Thanks — we read every single one.</div>
                ) : (
                  <div>
                    <textarea value={feedbackText} onChange={function(e) { setFeedbackText(e.target.value); }} placeholder="Type your feedback here..." rows={4} style={{ width: "100%", background: "#130f1e", border: "1px solid " + BORDER, borderRadius: "10px", padding: "12px 14px", color: "#f0eaf8", fontFamily: "inherit", fontSize: "14px", boxSizing: "border-box", resize: "none", outline: "none" }} />
                    <button onClick={function() { if (feedbackText.trim()) { setFeedbackSent(true); setFeedbackText(""); } }} style={{ width: "100%", marginTop: "10px", background: feedbackText.trim() ? "linear-gradient(135deg,#4a2f70,#6b4fa0)" : "#2a2035", border: "none", borderRadius: "10px", padding: "12px", color: feedbackText.trim() ? "white" : "#4a3a5a", fontFamily: "inherit", fontSize: "14px", cursor: feedbackText.trim() ? "pointer" : "default" }}>Send feedback</button>
                  </div>
                )}
              </div>
            )}
          </div>

          {!confirmDelete ? (
            <button onClick={function() { setConfirmDelete(true); }} style={{ background: "none", border: "1px solid #3a2035", borderRadius: "10px", color: "#6a3a45", padding: "8px 16px", cursor: "pointer", fontFamily: "inherit", fontSize: "12px", width: "100%", marginBottom: "32px" }}>Remove {active.name}</button>
          ) : (
            <div style={{ background: "#2a1520", border: "1px solid #5a2030", borderRadius: "14px", padding: "16px", marginBottom: "32px", textAlign: "center" }}>
              <div style={{ fontSize: "15px", color: "#e8a0a8", fontWeight: "bold", marginBottom: "6px" }}>Remove {active.name}?</div>
              <div style={{ fontSize: "13px", color: "#7a4a55", marginBottom: "16px" }}>This can't be undone.</div>
              <div style={{ display: "flex", gap: "10px" }}>
                <button onClick={function() { setConfirmDelete(false); }} style={{ flex: 1, background: CARD, border: "1px solid " + BORDER, borderRadius: "10px", padding: "10px", color: "#7a6b8a", fontFamily: "inherit", fontSize: "14px", cursor: "pointer" }}>Cancel</button>
                <button onClick={function() { removePartner(active.id); }} style={{ flex: 1, background: "linear-gradient(135deg,#6a1525,#9a2535)", border: "none", borderRadius: "10px", padding: "10px", color: "white", fontFamily: "inherit", fontSize: "14px", fontWeight: "bold", cursor: "pointer" }}>Yes, remove</button>
              </div>
            </div>
          )}

        </div>
      )}

      {showNextPhase && pk && (function() {
        var nextKey = PHASE_ORDER[(PHASE_ORDER.indexOf(pk) + 1) % PHASE_ORDER.length];
        var np = PHASES[nextKey];
        return (
          <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.75)", display: "flex", alignItems: "flex-end", zIndex: 200 }} onClick={function() { setShowNextPhase(false); }}>
            <div style={{ background: CARD, borderRadius: "24px 24px 0 0", padding: "28px 24px", width: "100%", maxWidth: "480px", margin: "0 auto", border: "1px solid " + np.color + "40" }} onClick={function(e) { e.stopPropagation(); }}>
              <div style={{ fontSize: "11px", color: np.color, letterSpacing: "2px", textTransform: "uppercase", marginBottom: "8px" }}>Coming up next</div>
              <div style={{ fontSize: "28px", fontWeight: "bold", marginBottom: "4px" }}>{np.emoji} {np.name} Phase</div>
              <div style={{ fontSize: "14px", color: "#a090b8", fontStyle: "italic", marginBottom: "14px" }}>{np.tagline}</div>
              <div style={{ background: np.color + "15", border: "1px solid " + np.color + "30", borderRadius: "12px", padding: "12px 14px", marginBottom: "14px" }}>
                <div style={{ fontSize: "12px", color: np.color, marginBottom: "6px" }}>⚗️ {np.chemical}</div>
                <div style={{ fontSize: "13px", color: "#9888b0" }}>{np.chemicalNote}</div>
              </div>
              <div style={{ fontSize: "13px", color: "#7a6b8a", marginBottom: "6px", fontWeight: "bold", textTransform: "uppercase", letterSpacing: "1px" }}>First tip</div>
              <div style={{ fontSize: "14px", color: "#c8b8e0", lineHeight: "1.6", marginBottom: "20px" }}>{typeof np.tips[0] === "object" ? np.tips[0].text : np.tips[0]}</div>
              <button onClick={function() { setShowNextPhase(false); }} style={{ width: "100%", background: "linear-gradient(135deg,#4a2f70,#6b4fa0)", border: "none", borderRadius: "12px", padding: "14px", color: "white", fontFamily: "inherit", fontSize: "15px", cursor: "pointer" }}>Got it</button>
            </div>
          </div>
        );
      })()}

      {showUpgrade && (
        <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.85)", display: "flex", alignItems: "flex-end", zIndex: 300 }} onClick={function() { setShowUpgrade(false); }}>
          <div style={{ background: "linear-gradient(135deg,#1a1525,#0f0d14)", borderRadius: "28px 28px 0 0", padding: "32px 24px", width: "100%", maxWidth: "480px", margin: "0 auto", border: "1px solid #4a3a6a" }} onClick={function(e) { e.stopPropagation(); }}>
            <div style={{ textAlign: "center", marginBottom: "24px" }}>
              <div style={{ fontSize: "40px", marginBottom: "12px" }}>👑</div>
              <div style={{ fontSize: "22px", fontWeight: "bold", color: "#d4b8f0", marginBottom: "8px" }}>Upgrade to TrackHer Pro</div>
              <div style={{ fontSize: "14px", color: "#7a6b8a", lineHeight: "1.6" }}>{upgradeReason || "Unlock the full TrackHer experience"}</div>
            </div>
            {["🔥 Sex: Know WHEN and HOW to stoke her sexual desire", "⚠️ Avoid: Avoid drama-causing mistakes", "🔬 Body Science: Get deeper knowledge of her biodynamics", "♚ Advanced Game: What your grandfather and your father should have told you", "🔒 Foundational Articles: All unlocked", "🔔 Notifications: Real time alerts with what you need to know NOW", "💼 Relationship Types: Boss, Daughter, Co-Worker and more"].map(function(f, i) {
              return (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: "12px", padding: "10px 14px", background: CARD, borderRadius: "10px", border: "1px solid " + BORDER, marginBottom: "8px" }}>
                  <span style={{ fontSize: "18px" }}>{f.split(" ")[0]}</span>
                  <span style={{ fontSize: "14px", color: "#c8b8e0" }}>{f.split(" ").slice(1).join(" ")}</span>
                </div>
              );
            })}
            <button onClick={function() { setIsPro(true); setShowUpgrade(false); }} style={{ width: "100%", background: "linear-gradient(135deg,#6b4fa0,#c084fc)", border: "none", borderRadius: "16px", padding: "16px", color: "white", fontFamily: "inherit", fontSize: "17px", fontWeight: "bold", cursor: "pointer", marginTop: "8px", marginBottom: "10px" }}>Unlock Pro — $4.99 / month</button>
            <button onClick={function() { setShowUpgrade(false); }} style={{ width: "100%", background: "none", border: "none", color: "#5a4a6a", fontFamily: "inherit", fontSize: "14px", cursor: "pointer", padding: "8px", fontStyle: "italic" }}>Maybe later</button>
          </div>
        </div>
      )}

      {showSavePrompt && (
        <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.75)", display: "flex", alignItems: "flex-end", zIndex: 200 }}>
          <div style={{ background: CARD, borderRadius: "24px 24px 0 0", padding: "28px 24px", width: "100%", maxWidth: "480px", margin: "0 auto", border: "1px solid " + BORDER }}>
            <div style={{ fontSize: "32px", marginBottom: "12px" }}>💾</div>
            <div style={{ fontSize: "20px", fontWeight: "bold", color: "#d4b8f0", marginBottom: "8px" }}>Your data is saved on this device</div>
            <div style={{ fontSize: "14px", color: "#7a6b8a", lineHeight: "1.6", marginBottom: "24px" }}>Right now TrackHer lives on this phone only. Create a free account to back up your data and access it anywhere.</div>
            <button onClick={function() { setShowSavePrompt(false); }} style={{ width: "100%", background: "linear-gradient(135deg,#4a2f70,#6b4fa0)", border: "none", borderRadius: "12px", padding: "14px", color: "white", fontFamily: "inherit", fontSize: "15px", fontWeight: "bold", cursor: "pointer", marginBottom: "10px" }}>Create free account — coming soon</button>
            <button onClick={function() { setShowSavePrompt(false); }} style={{ width: "100%", background: "none", border: "none", color: "#5a4a6a", fontFamily: "inherit", fontSize: "14px", cursor: "pointer", padding: "8px", fontStyle: "italic" }}>Maybe later</button>
          </div>
        </div>
      )}

    </div>
  );
}
