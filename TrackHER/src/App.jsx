import { useState, useEffect } from "react";

// ─── ARTICLES ────────────────────────────────────────────────────────────────
const ARTICLES = [
  {
    id: "code", title: "The Code Has Been Right There The Whole Time",
    subtitle: "Read this first.", emoji: "🔑",
    content: `How many arguments have you had that you still don't fully understand? How many times has she been "fine" and clearly wasn't? How many times did you say the wrong thing on the wrong day and have no idea why it landed like a grenade when last week it would have been nothing?

What if I told you there was a code. And you just didn't have it.

YOU'VE BEEN RUNNING BLIND

Here's something wild that nobody talks about. You run on a 24 hour hormone cycle. Every day you wake up, testosterone is high, you're ready to go, you're basically the same dude you were yesterday. Consistent. Predictable. Simple.

She does not work like that.

She runs on a 28 day cycle. Her hormones don't reset every morning — they move through four completely different phases over the course of a month. Her energy, her mood, her desire, her patience, her need for connection, her tolerance for stress — all of it shifts. Week by week. Sometimes day by day.

You've been trying to read her like she's running your operating system. She's not. She never was. And nobody told you.

HERE'S THE PART THAT WILL BLOW YOUR MIND

Human females hide fertility status.

You know what most female mammals do when they're fertile and ready to mate? They signal it. Loudly and obviously. The whole animal kingdom basically announces it.

Not human women.

Human females are one of the only species on the planet that conceals ovulation. There are no obvious external signs. No clear signal. Nothing that says "this is where I am in my cycle today."

Scientists think this evolved to keep men around — if you can never tell exactly when she's fertile, you stay close. You stay invested. You keep showing up.

It worked. But it also means you've been flying blind for your entire life. We all have. For centuries men have been confused, frustrated and completely baffled by the women in their lives — and the answer was right there the whole time, hidden in a 28 day cycle that nobody handed us the manual for.

Until now.

THE CODE IS THE CYCLE

The menstrual cycle is the code. Crack it and you understand her. Not sometimes. Not mostly. Fundamentally.

Her energy levels? Cycle. Her mood? Cycle. Her desire for sex? Cycle. Her need for space vs connection? Cycle. Her patience, her confidence, her appetite, her sleep, her social battery? Cycle. Cycle. Cycle. Cycle.

I know what you're thinking. "It can't be that simple." Try it. Seriously — just try it for one month. Track where she is. Pay attention to which week it is. Watch what happens to her energy around day 6. Watch what happens around day 14. Watch what starts shifting around day 23. Then come back and tell me it doesn't map.

It maps. Every time. It will boggle your mind how cleanly it maps.

THINK ABOUT IT LIKE THIS

You know how a two year old has basically five needs? Sleep. Food. Water. Hugs. A diaper change. And when a two year old is losing their mind — screaming, inconsolable, impossible — the move is not to sit down and have a conversation about their feelings. The move is to go through the checklist.

Your partner is not a two year old — obviously. But the principle is the same. When something is off, there is a biological reason. There is a checklist. And the first item on that checklist, every single time, is where is she in her cycle right now?

Don't tell me it's a mystery. Don't tell me she's complicated. Don't tell me you can't figure her out. Do that first. Then talk to me.

WHY YOU NEED TO BE TRACKING

When you know she's on day 23 you don't take the short temper personally. When you know she's on day 14 you show up differently. When you know she's on day 6 you make a plan because she's about to feel incredible and you want to be the reason she has a great week.

You stop reacting and start leading. You stop being confused and start being the one guy in her life who actually gets it. Who gets her. Not because you're a mind reader. Because you did the work of understanding how she's actually built.

That's not manipulation. That's love. That's paying attention. That's being the kind of man that a woman feels genuinely lucky to have.

Start tracking. Pay attention for 30 days. Everything will start to make sense.`,
  },
  {
    id: "chemicals", title: "She Can't See You. She Can Only Feel You.",
    subtitle: "The chemical framework that changes everything.", emoji: "⚗️",
    content: `She is not responding to you. Not really. She's responding to what you make her feel — and what she feels is chemistry. Literally.

Her emotional world is wider, deeper and more complex than yours. She doesn't compartmentalize the way you do. Everything is connected — her mood, her body, her desire, her sense of safety, her attraction to you. And underneath all of it, running the whole operation, are three chemicals: Oxytocin. Serotonin. Dopamine.

You are not the point. You are the trigger. The question is — which chemical are you driving right now, and is it the one she actually needs?

THE SHIFT THAT CHANGES EVERYTHING

Most men approach their partner the same way regardless of where she is in her cycle. Same moves, same energy, same playbook. And then they wonder why it lands differently on different days.

It's not her. It's chemistry. And her chemistry changes every single week.

OXYTOCIN — THE "I FEEL SAFE WITH YOU" CHEMICAL

This hits when she feels warm, close and held. No agenda. No performance. Just presence.

Think about what she does that makes her light up in a quiet way. Is it when you watch something together under a blanket and you're actually there — not half on your phone? Is it when you hold her hand for no reason? When she talks at you for 20 minutes about something you don't care about and you just... let her? When there's skin to skin contact with zero expectation attached?

That's Oxytocin. And when she's in it she feels bonded to you. She feels like you're her person. That is the foundation everything else is built on.

DOPAMINE — THE "HE MAKES LIFE FEEL ALIVE" CHEMICAL

This one hits when there's novelty. Anticipation. Spark. The feeling that something good is coming.

What does she do that makes her genuinely excited? Is it trying somewhere new? Spontaneous plans? You booking something without her having to ask? Dancing in the kitchen at 10pm for no reason? Showing up with something unexpected?

When Dopamine is flowing she associates you with excitement. With possibility. With the feeling that life is good and interesting. You want to be the guy that triggers that. Not the couch. Not the routine. You.

SEROTONIN — THE "EVERYTHING IS GOING TO BE OKAY" CHEMICAL

This is the one most men completely miss. And it's probably the most important one.

Serotonin is stability. Calm. The quiet feeling that things are under control and you are not a source of chaos in her life.

What makes her visibly relax? Is it when the house is clean and she didn't have to ask? When you have a plan and she doesn't have to manage you? When you're just calm in a moment where she's spiraling and your energy brings her down a level? When you handle something without making it a whole thing?

That's Serotonin. And when her Serotonin is low — which happens hard during PMS — she cannot manufacture it on her own. She needs you to be it for her. Your steadiness is literally the chemical her brain is missing.

YOUR HOMEWORK

Think about her. Specifically. Not women in general — her.

What does she do that you can tell genuinely fills her up? What makes her soften? What makes her laugh from the gut? What makes her grab your arm or look at you differently?

You already know. You've seen it. You just didn't have the framework to understand what you were watching.

You were watching her brain get exactly what it needed. And you were the one who gave it to her.

Now do it on purpose. Every week. Based on where she is. That's the whole game. That's it.`,
  },
];

// ─── SKIP ARTICLE ────────────────────────────────────────────────────────────
const ADJUST_DATE_ARTICLE = {
  id: "adjustdate",
  title: "Why Would I Adjust Her Start Date?",
  subtitle: "Because cycles aren't a perfect clock.",
  emoji: "📅",
  content: `Most people assume a menstrual cycle runs like clockwork — 28 days, every time, on the dot. It doesn't.

Cycles shift. They get longer or shorter based on stress, sleep, illness, travel, diet changes, intense exercise, or just the natural variation that comes with being human. A woman who usually runs a 28-day cycle might have a 24-day cycle one month and a 32-day cycle the next.

This matters for you because the phase calculations in TrackHer are only as accurate as the start date you give it. If her period came a few days earlier or later than expected, the whole calendar shifts with it.

The fix is simple: the moment her period starts, update the date. That resets everything and keeps the tracking accurate.

You don't need to be perfect about it. Even a rough date is better than nothing. But the more current you keep it, the more useful the app becomes.`,
};

const SKIP_ARTICLE = {
  id: "finddate", title: "How To Find Out Her Start Date",
  subtitle: "For the guy who skipped — here's how to get the info you need.", emoji: "🕵️",
  content: `Just ask her.

Seriously. That's tip number one and it's also the whole article if you want it to be.

"Hey, when did your last period start?" That's the question. You don't need a preamble. You don't need to explain that you're tracking her cycle or go into a whole thing about why you want to know. It's a normal question. Ask it the same way you'd ask what she wants for dinner. Most women will just tell you. Some might ask why — just say "I'm trying to be more aware" and leave it at that. That's the truth and it's enough.

SHE ALMOST DEFINITELY ALREADY HAS AN APP

The majority of women track their cycles. Flo, Clue, Natural Cycles — these apps are on millions of phones. There's a good chance she already knows her start date to the day. If you ask, she might just pull out her phone and read it to you. Done.

LOOK FOR THE SIGNALS

If asking directly feels like too much right now, you can piece it together. Notice when she seems lower energy or wants more comfort — that's likely day 1 or 2. Notice when she's at her most social and magnetic — that's probably ovulation around day 14. You can back-calculate from there. It's not perfect but it gets you in the ballpark.

PAY ATTENTION TO WHAT SHE BUYS

If you live together or shop together, you'll notice. Pads, tampons, pain relief, comfort food showing up — that's your signal. Note the date. You now have a start date.

ASK DURING A RELAXED MOMENT

If she's visibly uncomfortable or irritable, that's not the moment to ask. Bring it up during a neutral, connected moment. Curiosity lands differently than interrogation.

Once you have it, come back and enter it under "Adjust period start date" at the bottom of her profile. The whole app unlocks from there.`,
};

// ─── FURTHER READING ─────────────────────────────────────────────────────────
const FURTHER_READING = [
  { id: "menstrual",   emoji: "🌑", phase: "Menstrual",    title: "The Reset: What's Really Happening This Week" },
  { id: "follicular",  emoji: "🌒", phase: "Follicular",   title: "The Rise: How To Ride This Wave With Her" },
  { id: "ovulation",   emoji: "🌕", phase: "Ovulation",    title: "The Peak: Three Days That Change Everything" },
  { id: "earlyLuteal", emoji: "🌖", phase: "Early Luteal", title: "The Shift: When Steady Wins" },
  { id: "lateLuteal",  emoji: "🌘", phase: "Late Luteal",  title: "The Storm: How To Be The Wall She Leans On" },
];

// ─── LIBRARY ─────────────────────────────────────────────────────────────────
const LIBRARY = [
  {
    id: "understanding", title: "Understanding Her", emoji: "🧠",
    items: [
      { type: "text",  title: "Why she may not want you to track", url: null },
      { type: "audio", title: "The emotional world of a woman", url: null },
      { type: "video", title: "What her cycle actually looks like", url: null },
    ],
  },
  {
    id: "conflict", title: "Conflict & Tension", emoji: "⚡",
    items: [
      { type: "audio", title: "Handling shit tests", url: null },
      { type: "video", title: "Examples of different tests", url: null },
      { type: "text",  title: "When to hold firm vs when to fold", url: null },
    ],
  },
  {
    id: "connection", title: "Deep Connection", emoji: "🔗",
    items: [
      { type: "text",  title: "The Oxytocin playbook", url: null },
      { type: "audio", title: "How to make her feel truly seen", url: null },
      { type: "video", title: "Non-verbal connection techniques", url: null },
    ],
  },
  {
    id: "sex", title: "Sex & Desire", emoji: "🔥",
    items: [
      { type: "text",  title: "How her desire actually works", url: null },
      { type: "audio", title: "Timing intimacy to her cycle", url: null },
      { type: "video", title: "Reading her signals", url: null },
    ],
  },
  {
    id: "advanced", title: "Advanced Game", emoji: "♟️",
    items: [
      { type: "text",  title: "The chemical triggers explained", url: null },
      { type: "audio", title: "Dopamine, Oxytocin, Serotonin deep dive", url: null },
      { type: "video", title: "Real world examples by phase", url: null },
    ],
  },
];

// ─── PHASES ───────────────────────────────────────────────────────────────────
const PHASES = {
  menstrual: {
    name: "Menstrual", days: [1,5], color: "#e05c6b", emoji: "🌑",
    tagline: "The reset phase", chemical: "Oxytocin",
    chemicalNote: "She needs warmth, closeness and safety — no agenda",
    mood: ["She's low energy and her body is doing real physical work right now","Hormones are at their lowest — don't expect her to be her usual self","She may be crampy, bloated and just want to be left alone","Emotionally she may feel raw or fragile without fully knowing why","Comfort and rest are all she really wants right now"],
    tips: ["Focus on her comfort — think about what makes her feel cozy and make it happen","Stock her favorite comfort food — chocolate, soup, whatever she loves","Take something off her plate today — dishes, errands, dinner plans","Don't push her to socialize or go out; a night in is the move","Just sit with her. You don't need to fix anything, just be present","If she eats meat, suggest red meat — iron drops during her period and red meat helps replenish it"],
    avoid: ["Don't minimize her pain or tell her to push through it","Don't make demands on her time or energy","Don't take her low mood personally — it's hormonal not personal","Don't pressure her to go out or be social","Don't make her feel bad for canceling plans"],
    body: ["The uterine lining is shedding as estrogen and progesterone hit their lowest point","The body releases prostaglandins — chemicals that cause the uterus to contract and create cramps","Blood flow and fatigue are real physical symptoms, not exaggeration","Iron levels can dip during heavy flow days, adding to exhaustion","Think of it as a full system reset — she's clearing out to start fresh"],
    sex: ["Many women actually want sex during their period — don't assume she doesn't","If she's open to it, heat and intimacy can genuinely relieve cramps","Ask rather than assume — a simple 'do you want me close tonight?' goes a long way","If she's not interested, don't sulk — just be warm and physically present","A back rub or just holding her is its own kind of intimacy right now","Breast sensitivity is heightened right now — be extra gentle, check in before touching","She may be more sensitive to cold — warmth is not just comfort, it's physical relief right now","Fertility: 🟢 Very low — the uterine lining is shedding and ovulation is still ~2 weeks away, though never truly zero if her cycle is short"],
    game: ["She can't see you right now — she can only feel whether you make her feel safe or not","The chemical she needs is Oxytocin — warmth, closeness, no agenda","Think about what makes her feel held — a blanket, a movie, your hand, skin to skin contact with zero expectation","You are not trying to fix anything or get anything — you are just being a warm presence","The man who shows up here without an agenda is the man she remembers"],
    gameNote: "Put your phone down, queue up her favorite show, and just be a warm body next to her tonight. No agenda. That's it. That's the whole game.",
  },
  follicular: {
    name: "Follicular", days: [6,13], color: "#f4a24b", emoji: "🌒",
    tagline: "The rising phase", chemical: "Dopamine",
    chemicalNote: "She needs novelty, spark and the feeling that life is exciting",
    mood: ["Energy is rising and she's feeling more like herself again","She's optimistic, curious and more open to conversation","Social energy is coming back — she may want to make plans","Her confidence is building day by day through this phase","This is genuinely one of her best weeks of the month"],
    tips: ["Great time to plan a date, an adventure or try something new together","She'll be more social and energetic this week — match that energy","This is the best phase for important conversations — she's open and optimistic","Suggest something she's been wanting to do and actually book it","Be spontaneous — she'll respond well to surprises this week"],
    avoid: ["Don't be withdrawn or glued to your phone — she wants to connect","Don't cancel plans or be flaky — she's in the mood to do things","Don't bring up old arguments — her good mood isn't an invitation to rehash drama","Don't take her energy for granted — match it","Don't waste this week on autopilot"],
    body: ["Estrogen is climbing steadily as the ovaries prepare to release an egg","The brain gets a measurable boost — memory, focus and mood all sharpen","She may feel almost unusually good during this phase and that's completely normal","Serotonin levels rise alongside estrogen, which is why she seems happier","This is the phase where she's most likely to want to try new things"],
    sex: ["Her interest is returning and building — this is a good time to reconnect physically","She's more adventurous during this phase, open to trying new things","Flirt more, build tension slowly — she'll respond well to the chase","Emotional connection still matters — don't skip straight to physical","This is a great phase to introduce something new you've both been curious about","Fertility: 🟡 Low to moderate and rising — sperm can survive up to 5 days, so unprotected sex toward the end of this phase can absolutely lead to pregnancy"],
    game: ["Her Dopamine is rising — she needs novelty, spark and the feeling that life is exciting","You are not the point — the chemical you trigger is the point","Think about what makes her genuinely light up — new places, spontaneous plans, unexpected moves","Book something. Suggest something. Show up differently this week","The man who makes her feel alive during this phase becomes associated with that feeling permanently"],
    gameNote: "Don't wait for her to suggest something. You make the plan this week. Watch how she responds.",
  },
  ovulation: {
    name: "Ovulation", days: [14,16], color: "#5bbf8a", emoji: "🌕",
    tagline: "The peak phase", chemical: "Oxytocin + Dopamine",
    chemicalNote: "The only window where all three chemicals align at once",
    mood: ["This is her peak — she feels confident, attractive and fully alive","She's at her most warm, affectionate and communicative","She wants to be seen, appreciated and pursued right now","Her social energy is at maximum — she loves being around people","If there was ever a time to make her feel special, it's these 3 days"],
    tips: ["She's at her peak — plan your best date of the month right now","Tell her she looks good — she wants to feel seen and desired","This is the best time for deep meaningful conversations — she's at her most articulate","Be fully present and attentive — she will notice everything this week","Plan something special — she is up for anything and will remember it"],
    avoid: ["Don't pick fights or bring up heavy topics — you're burning the best days","Don't be emotionally unavailable when she's this open","Don't ignore her or be distracted — she'll notice more than usual","Don't take her good mood for granted and coast","Don't forget to actually tell her she looks good"],
    body: ["A luteinizing hormone surge triggers the release of a mature egg from the ovary","Estrogen peaks and testosterone spikes briefly — a rare and powerful combination","This is why she feels her most confident, communicative and attractive right now","Her voice, skin and energy all subtly shift during ovulation","It's the shortest phase but the most hormonally dramatic"],
    sex: ["Her libido is at its absolute peak right now — biologically she is most drawn to intimacy","She wants to feel desired — be direct, confident and intentional","This is the time to plan a proper date that ends well, not a casual night in","She'll likely be more physically responsive than at any other point in the cycle","Don't waste these 3 days — be present, attentive and bring your A game","Fertility: 🔴 Peak fertility — this is the highest chance of conception in the entire cycle, the egg is live and viable for 12–24 hours after release"],
    game: ["All three chemicals are peaking — this is the only window where Oxytocin, Dopamine and Serotonin all align at once","Her desire is not at the front like yours — it crept up on her out of a cocktail of feeling safe, excited and alive","You triggered that. Now be intentional about it","This is not the week for autopilot — she is fully awake and she will notice everything","The man who shows up completely during ovulation is the man she compares everyone else to"],
    gameNote: "Three days. That's all you get. Don't waste them being the same guy you are every other week.",
  },
  earlyLuteal: {
    name: "Early Luteal", days: [17,22], color: "#7a9ebf", emoji: "🌖",
    tagline: "The settling phase", chemical: "Serotonin",
    chemicalNote: "She needs stability, calm and quiet consistency",
    mood: ["Still relatively stable but she's starting to wind down from her peak","She may be a little more tired or inward than the week before","She's more reflective and less interested in big social plans","Small irritabilities may start to surface — nothing major yet","She needs a bit more reassurance than during the first half of her cycle"],
    tips: ["Check in more — ask how she's doing and actually listen","Reduce her mental load: handle something without being asked","Keep plans low key — she's winding down and doesn't want to be overscheduled","Be steady and calm — your consistency matters more than your excitement right now","Small gestures of care land big during this phase — don't underestimate them"],
    avoid: ["Don't assume everything is fine just because she seems okay","Don't overschedule her or make too many plans without asking","Don't be less attentive just because she's not at her peak anymore","Don't dismiss early mood shifts as nothing — they're signals worth noticing","Don't wait for her to ask for help — just do things"],
    body: ["Progesterone rises sharply after ovulation and takes the lead hormonally","This hormone has a calming but sedating effect — hence the lower energy","Estrogen dips briefly then rises again before eventually falling","The body is essentially waiting to find out if pregnancy occurred","If it didn't, both hormones will begin their descent toward the end of this phase"],
    sex: ["Her libido is tapering down from its peak but she's still receptive","Slow down and focus on connection over performance right now","She may prefer intimacy that feels more emotional than physical","Don't pressure or initiate aggressively — read the room carefully","Cuddling, closeness and non-sexual touch matter more during this phase than you'd think","Fertility: 🟡 Low and falling — the window has passed but if ovulation was late, there is still a small chance early in this phase"],
    game: ["She's shifting from Dopamine to Serotonin — she needs stability more than excitement now","Stop performing and start being steady — calm, reliable, consistent","Think about what makes her visibly relax — a clean space, a plan, you handling something without being asked","Her attraction is quietly deepening right now based on whether you feel like a safe place to land","The man who transitions smoothly from exciting to steady is the man she trusts completely"],
    gameNote: "This week isn't about grand gestures. It's about being the guy who just handles things. Quietly. Without making it a thing.",
  },
  lateLuteal: {
    name: "Late Luteal", days: [23,28], color: "#8e7abf", emoji: "🌘",
    tagline: "The storm before the reset", chemical: "Serotonin (crashing)",
    chemicalNote: "Her Serotonin is crashing — your calm is literally what her brain is missing",
    mood: ["Emotionally sensitive — small things can feel much bigger than they are","She may be irritable, anxious, tearful or all three in the same afternoon","Her patience is thinner and her nervous system is genuinely more reactive","She may feel unlike herself and not fully understand why","This is the hardest phase — for her more than anyone"],
    tips: ["Be her calm — your steadiness is the chemical her brain is running low on","Do not add a single unnecessary stressor to her week","Handle the small things before she has to ask — dishes, errands, whatever you see","Check in with warmth, not logic — 'how are you feeling' not 'what's wrong'","Just being present and unbothered is genuinely one of the most powerful things you can do"],
    avoid: ["Don't say 'are you PMSing?' — ever, under any circumstances","Don't make big plans, have big conversations or create big demands right now","Don't interpret her emotions as personal attacks","Don't disappear or go cold when she needs steadiness most","Don't add stress to her life in any form this week if you can help it"],
    body: ["Estrogen and progesterone both crash toward the end of this phase","This hormonal drop triggers classic PMS symptoms — bloating, mood swings, fatigue, cravings","Serotonin also dips, which directly affects mood and emotional regulation","Her nervous system is genuinely more sensitive right now — she's not being dramatic","The closer to day 28, the more intense it gets — then her period starts and the cycle resets"],
    sex: ["Her libido is at its lowest and she may have zero interest — don't take it personally","If she is in the mood, keep it gentle, intimate and low pressure","Physical touch that isn't sexual — holding her, stroking her hair — may actually mean more right now","Never push or guilt trip during this phase — the hormonal crash makes rejection of advances feel worse to her too","Your best move is to be so steady and supportive this week that she actually wants to come to you","Fertility: 🟢 Very low — the body is preparing to shed the lining and the fertile window is long closed for this cycle"],
    game: ["Her Serotonin is crashing and she cannot manufacture it on her own right now","You are not dealing with her mood — you are literally providing the chemical her brain is missing","Do not be a source of chaos, friction or unpredictability this week — be the opposite of all of that","Think about what makes her feel like everything is going to be okay — and go do that thing","The man who holds it together when she can't is the man she feels safest with for the long haul"],
    gameNote: "Don't try to fix it. Don't try to cheer her up. Don't make it about you. Just be a wall she can lean on. That's the whole move this week.",
  },
};

// ─── CONSTANTS ────────────────────────────────────────────────────────────────
const REL_TYPES = [
  { id: "girlfriend", emoji: "🌹", label: "Girlfriend" },
  { id: "wife",       emoji: "💍", label: "Wife" },
  { id: "fwb",        emoji: "🔥", label: "FWB" },
  { id: "friend",     emoji: "🤝", label: "Friend" },
  { id: "other",      emoji: "🌀", label: "Other" },
];

const GOALS = [
  { id: "friction",   emoji: "🧘", label: "Minimize friction",    sub: "Stop the unnecessary conflict" },
  { id: "connect",    emoji: "🔗", label: "Connect more deeply",   sub: "Build a real bond" },
  { id: "better",     emoji: "⬆️", label: "Be a better partner",   sub: "Show up the right way" },
  { id: "sex",        emoji: "🔥", label: "Improve our sex life",  sub: "Understand her desire" },
  { id: "understand", emoji: "🧠", label: "Understand her better", sub: "Finally make sense of it" },
  { id: "all",        emoji: "💯", label: "All of the above",      sub: "The full picture" },
];

const HEADER_LABELS = {
  tips:  { label: "Tips",          emoji: "💡" },
  mood:  { label: "Her Mood",      emoji: "💜" },
  avoid: { label: "Avoid",         emoji: "⚠️" },
  body:  { label: "Body Science",  emoji: "🔬" },
  sex:   { label: "Sex",           emoji: "🔥" },
  game:  { label: "Advanced Game", emoji: "♟️" },
};

const PHASE_ORDER = ["menstrual","follicular","ovulation","earlyLuteal","lateLuteal"];
const AVATARS = ["💜","💙","💚","🧡","❤️","🤍","💛","🩷"];
const REL_EMOJI = { girlfriend: "🌹", wife: "💍", fwb: "🔥", friend: "🤝", other: "🌀" };

// ─── HELPERS ──────────────────────────────────────────────────────────────────
const FERTILITY = {
  menstrual:   { emoji: "🟢", tier: "Very Low",      color: "#5bbf8a", note: "The uterine lining is shedding — conception is extremely unlikely right now." },
  follicular:  { emoji: "🟡", tier: "Low → Medium",  color: "#f4a24b", note: "Estrogen is rising and the body is preparing to ovulate — fertility builds toward the end of this phase." },
  ovulation:   { emoji: "🔴", tier: "Peak",           color: "#e05c6b", note: "The egg is released and viable for 12–24 hours — this is the highest fertility window of the entire cycle." },
  earlyLuteal: { emoji: "🟡", tier: "Medium Low",     color: "#f4a24b", note: "The fertile window has passed — conception is unlikely but not impossible if ovulation was late." },
  lateLuteal:  { emoji: "🟢", tier: "Very Low",       color: "#5bbf8a", note: "The body is preparing to shed the lining — the fertile window is long closed for this cycle." },
};

const FERTILITY_TIERS = [
  { label: "Very Low",     color: "#5bbf8a" },
  { label: "Low → Medium", color: "#f4a24b" },
  { label: "Medium Low",   color: "#f4a24b" },
  { label: "Medium",       color: "#f4c14b" },
  { label: "High",         color: "#e08a3c" },
  { label: "Peak",         color: "#e05c6b" },
];

function getPhaseKey(day) {
  if (day <= 5)  return "menstrual";
  if (day <= 13) return "follicular";
  if (day <= 16) return "ovulation";
  if (day <= 22) return "earlyLuteal";
  return "lateLuteal";
}
function getDayOfCycle(lastPeriod, cycleLength) {
  const diff = Math.floor((new Date() - new Date(lastPeriod)) / 86400000);
  return ((diff % cycleLength) + 1);
}
function getDaysUntil(day, cycleLength) { return cycleLength - day + 1; }
function today() { return new Date().toISOString().split("T")[0]; }

// ─── SETUP ────────────────────────────────────────────────────────────────────
function Setup({ onComplete }) {
  const [screen, setScreen]   = useState(1);
  const [name, setName]       = useState("");
  const [age, setAge]         = useState("");
  const [goal, setGoal]       = useState(null);
  const [relType, setRelType] = useState(null);
  const [date, setDate]       = useState("");
  const [fade, setFade]       = useState(true);

  function next() {
    setFade(false);
    setTimeout(() => { setScreen(s => s + 1); setFade(true); }, 180);
  }
  function finish(skip) {
    onComplete({ name: name.trim(), age: age.trim(), goal, relType, lastPeriod: skip ? today() : (date || today()), skipped: skip });
  }

  const pct = (screen / 5) * 100;
  const wrap = { minHeight: "100vh", background: "#0a0812", fontFamily: "'Georgia', serif", color: "#f0eaf8", display: "flex", flexDirection: "column", opacity: fade ? 1 : 0, transition: "opacity 0.18s" };
  const inner = { flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", padding: "70px 28px 48px", maxWidth: "440px", margin: "0 auto", width: "100%", boxSizing: "border-box" };
  const inputStyle = { width: "100%", background: "#1a1525", border: "1px solid #3a2a50", borderRadius: "14px", padding: "16px 18px", color: "#f0eaf8", fontFamily: "inherit", fontSize: "18px", boxSizing: "border-box", outline: "none" };
  const cta = (on) => ({ background: on ? "linear-gradient(135deg,#6b4fa0,#9b6fca)" : "#2a2035", border: "none", borderRadius: "14px", padding: "16px", color: on ? "white" : "#4a3a5a", fontSize: "16px", fontWeight: "bold", cursor: on ? "pointer" : "default", fontFamily: "inherit", width: "100%", marginTop: "12px", transition: "all 0.2s" });

  return (
    <div style={wrap}>
      <div style={{ height: "3px", background: "#1a1525", position: "fixed", top: 0, left: 0, right: 0, zIndex: 10 }}>
        <div style={{ height: "100%", width: `${pct}%`, background: "linear-gradient(90deg,#6b4fa0,#c084fc)", transition: "width 0.4s ease" }} />
      </div>
      <div style={inner}>

        {screen === 1 && (
          <>
            <div style={{ fontSize: "28px", fontWeight: "bold", marginBottom: "28px" }}>What's her name?</div>
            <div style={{ fontSize: "12px", color: "#6a5a7a", letterSpacing: "1.5px", textTransform: "uppercase", marginBottom: "12px" }}>Her first name</div>
            <input value={name} onChange={e => setName(e.target.value)} placeholder="e.g. Sarah" autoFocus style={inputStyle} onKeyDown={e => e.key === "Enter" && name.trim() && next()} />
            <button onClick={next} style={cta(!!name.trim())} disabled={!name.trim()}>Continue →</button>
          </>
        )}

        {screen === 2 && (
          <>
            <div style={{ fontSize: "28px", fontWeight: "bold", marginBottom: "28px" }}>How old is {name}?</div>
            <div style={{ fontSize: "12px", color: "#6a5a7a", letterSpacing: "1.5px", textTransform: "uppercase", marginBottom: "12px" }}>Her age</div>
            <input value={age} onChange={e => setAge(e.target.value.replace(/\D/g,""))} placeholder="e.g. 28" type="number" min={13} max={60} autoFocus style={inputStyle} onKeyDown={e => e.key === "Enter" && age && next()} />
            <button onClick={next} style={cta(!!age)} disabled={!age}>Continue →</button>
          </>
        )}

        {screen === 3 && (
          <>
            <div style={{ fontSize: "28px", fontWeight: "bold", marginBottom: "28px" }}>Why are you tracking?</div>
            <div style={{ display: "flex", flexDirection: "column", gap: "9px", marginBottom: "8px" }}>
              {GOALS.map(g => (
                <button key={g.id} onClick={() => setGoal(g.id)} style={{ background: goal === g.id ? "linear-gradient(135deg,#2e1f45,#3d2860)" : "#1a1525", border: goal === g.id ? "1px solid #8b6fca" : "1px solid #2a2035", borderRadius: "14px", padding: "13px 16px", display: "flex", alignItems: "center", gap: "13px", cursor: "pointer", fontFamily: "inherit", textAlign: "left", transition: "all 0.18s" }}>
                  <span style={{ fontSize: "22px" }}>{g.emoji}</span>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: "15px", color: goal === g.id ? "#d4b8f0" : "#c8b8e0", fontWeight: "bold" }}>{g.label}</div>
                    <div style={{ fontSize: "12px", color: "#6a5a7a", marginTop: "2px" }}>{g.sub}</div>
                  </div>
                  {goal === g.id && <span style={{ color: "#8b6fca" }}>✓</span>}
                </button>
              ))}
            </div>
            <button onClick={next} style={cta(!!goal)} disabled={!goal}>Continue →</button>
          </>
        )}

        {screen === 4 && (
          <>
            <div style={{ fontSize: "28px", fontWeight: "bold", marginBottom: "28px" }}>{name} is my...</div>
            <div style={{ display: "flex", flexDirection: "column", gap: "9px", marginBottom: "8px" }}>
              {REL_TYPES.map(r => (
                <button key={r.id} onClick={() => setRelType(r.id)} style={{ background: relType === r.id ? "linear-gradient(135deg,#2e1f45,#3d2860)" : "#1a1525", border: relType === r.id ? "1px solid #8b6fca" : "1px solid #2a2035", borderRadius: "14px", padding: "14px 18px", display: "flex", alignItems: "center", gap: "14px", cursor: "pointer", fontFamily: "inherit", textAlign: "left", transition: "all 0.18s" }}>
                  <span style={{ fontSize: "24px" }}>{r.emoji}</span>
                  <span style={{ fontSize: "17px", color: relType === r.id ? "#d4b8f0" : "#c8b8e0", fontWeight: "bold", flex: 1 }}>{r.label}</span>
                  {relType === r.id && <span style={{ color: "#8b6fca" }}>✓</span>}
                </button>
              ))}
            </div>
            <button onClick={next} style={cta(!!relType)} disabled={!relType}>Continue →</button>
          </>
        )}

        {screen === 5 && (
          <>
            <div style={{ fontSize: "28px", fontWeight: "bold", marginBottom: "8px" }}>When did {name}'s last period start?</div>
            <div style={{ fontSize: "15px", color: "#6a5a7a", marginBottom: "28px" }}>First day of her last period</div>
            <input type="date" value={date} onChange={e => setDate(e.target.value)} style={{ ...inputStyle, colorScheme: "dark", fontSize: "16px" }} />
            <button onClick={() => finish(false)} style={cta(true)}>Start tracking →</button>
            <button onClick={() => finish(true)} style={{ background: "none", border: "none", color: "#8b6fca", fontSize: "14px", cursor: "pointer", fontFamily: "inherit", marginTop: "16px", textAlign: "center", width: "100%", fontStyle: "italic" }}>Skip for now</button>
          </>
        )}

        <div style={{ display: "flex", justifyContent: "center", gap: "6px", marginTop: "32px" }}>
          {[1,2,3,4,5].map(i => (
            <div key={i} style={{ width: i === screen ? "20px" : "6px", height: "6px", borderRadius: "3px", background: i === screen ? "#8b6fca" : i < screen ? "#4a3a6a" : "#2a2035", transition: "all 0.3s" }} />
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── MAIN APP ─────────────────────────────────────────────────────────────────
export default function TrackHer() {
  const [partners, setPartners]         = useState(() => { try { return JSON.parse(localStorage.getItem("th_partners")) || []; } catch { return []; } });
  const [activeId, setActiveId]         = useState(null);
  const [showSetup, setShowSetup]       = useState(false);
  const [isFirst, setIsFirst]           = useState(() => { try { return !localStorage.getItem("th_ready"); } catch { return true; } });
  const [activeHeader, setActiveHeader] = useState("tips");
  const [bullet, setBullet]             = useState(0);
  const [appView, setAppView]           = useState("tracker");
  const [activeArticle, setActiveArticle] = useState(null);
  const [updateDate, setUpdateDate]     = useState("");
  const [pickAvatar, setPickAvatar]     = useState(false);
  const [showSkipArticle, setShowSkipArticle] = useState(false);
  const [furtherReadingArticle, setFurtherReadingArticle] = useState(null);
  const [showStatusChange, setShowStatusChange] = useState(false);
  const [librarySection, setLibrarySection] = useState(null);
  const [forecastDate, setForecastDate] = useState("");
  const [forecastPhase, setForecastPhase] = useState(null);
  const [showNextPhase, setShowNextPhase] = useState(false);
  const [showSavePrompt, setShowSavePrompt] = useState(false);
  const [showAdjustArticle, setShowAdjustArticle] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  const [feedbackText, setFeedbackText] = useState("");
  const [feedbackSent, setFeedbackSent] = useState(false);

  useEffect(() => { if (partners.length > 0 && !activeId) setActiveId(partners[0].id); }, [partners]);
  useEffect(() => { try { localStorage.setItem("th_partners", JSON.stringify(partners)); } catch {} }, [partners]);
  useEffect(() => { setBullet(0); }, [activeHeader, activeId]);
  useEffect(() => { const p = partners.find(p => p.id === activeId); setUpdateDate(p?.lastPeriod || ""); }, [activeId, partners]);

  function completeSetup(data) {
    const isFirstPartner = partners.length === 0;
    const p = { id: Date.now(), name: data.name, age: data.age, relType: data.relType, goal: data.goal, lastPeriod: data.lastPeriod, cycleLength: 28, avatar: REL_EMOJI[data.relType] || "💜", skipped: data.skipped || false };
    setPartners(prev => [...prev, p]);
    setActiveId(p.id);
    setIsFirst(false);
    setShowSetup(false);
    if (isFirstPartner) setShowSavePrompt(true);
    try { localStorage.setItem("th_ready", "1"); } catch {}
  }
  function removePartner(id) { const r = partners.filter(p => p.id !== id); setPartners(r); setActiveId(r[0]?.id || null); }
  function doUpdate() { if (updateDate) setPartners(prev => prev.map(p => p.id === activeId ? { ...p, lastPeriod: updateDate, skipped: false } : p)); }

  if (isFirst || showSetup) return <Setup onComplete={completeSetup} />;

  const active   = partners.find(p => p.id === activeId);
  const day      = active?.lastPeriod ? getDayOfCycle(active.lastPeriod, active.cycleLength) : null;
  const pk       = day ? getPhaseKey(day) : null;
  const phase    = pk ? PHASES[pk] : null;
  const daysLeft = day ? getDaysUntil(day, active.cycleLength) : null;
  const pct      = day ? (day / active.cycleLength) * 100 : 0;
  const bullets  = phase ? phase[activeHeader] : [];
  const relLabel = REL_TYPES.find(r => r.id === active?.relType)?.label || "";

  // ── Library
  if (appView === "library") {
    const TI = { text: "📄", audio: "🎧", video: "🎬" };
    const TC = { text: "#6b9ebf", audio: "#8e7abf", video: "#e05c6b" };
    return (
      <div style={{ minHeight: "100vh", background: "#0f0d14", color: "#f0eaf8", fontFamily: "'Georgia', serif" }}>
        <div style={{ background: "#1a1525", borderBottom: "1px solid #2a2035", padding: "16px 20px", display: "flex", alignItems: "center", gap: "12px", position: "sticky", top: 0, zIndex: 10 }}>
          <button onClick={() => setAppView("tracker")} style={{ background: "none", border: "none", color: "#7a6b8a", fontSize: "22px", cursor: "pointer" }}>←</button>
          <div style={{ fontSize: "16px", color: "#d4b8f0", fontWeight: "bold" }}>🎓 Library</div>
        </div>
        <div style={{ padding: "20px", maxWidth: "480px", margin: "0 auto" }}>
          <div style={{ fontSize: "13px", color: "#5a4a6a", fontStyle: "italic", marginBottom: "24px" }}>Deepen your knowledge. Content added regularly.</div>
          {LIBRARY.map(section => (
            <div key={section.id} style={{ marginBottom: "14px" }}>
              <button onClick={() => setLibrarySection(librarySection === section.id ? null : section.id)} style={{ width: "100%", background: "#1a1525", border: "1px solid #2a2035", borderRadius: "14px", padding: "16px 18px", display: "flex", alignItems: "center", gap: "12px", cursor: "pointer", fontFamily: "inherit", textAlign: "left" }}>
                <span style={{ fontSize: "24px" }}>{section.emoji}</span>
                <div style={{ flex: 1, fontSize: "16px", color: "#d4b8f0", fontWeight: "bold" }}>{section.title}</div>
                <span style={{ color: "#4a3a6a", fontSize: "16px", display: "inline-block", transform: librarySection === section.id ? "rotate(90deg)" : "rotate(0deg)", transition: "transform 0.2s" }}>›</span>
              </button>
              {librarySection === section.id && (
                <div style={{ background: "#130f1e", border: "1px solid #1e1830", borderRadius: "0 0 14px 14px", marginTop: "-4px", padding: "8px 12px 12px" }}>
                  {section.items.map((item, i) => (
                    <div key={i} onClick={() => item.url && window.open(item.url, "_blank")} style={{ display: "flex", alignItems: "center", gap: "12px", padding: "12px", borderRadius: "10px", marginBottom: "6px", cursor: item.url ? "pointer" : "default", opacity: item.url ? 1 : 0.5 }}>
                      <span style={{ fontSize: "20px" }}>{TI[item.type]}</span>
                      <div style={{ flex: 1 }}>
                        <div style={{ fontSize: "11px", color: TC[item.type], letterSpacing: "1px", textTransform: "uppercase", marginBottom: "3px" }}>{item.type}</div>
                        <div style={{ fontSize: "14px", color: item.url ? "#d4c8e8" : "#5a4a6a" }}>{item.title}</div>
                      </div>
                      {item.url ? <span style={{ color: "#6b4fa0" }}>→</span> : <span style={{ fontSize: "11px", color: "#3a2a50", fontStyle: "italic" }}>coming soon</span>}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  }

  // ── Further reading article
  if (furtherReadingArticle) {
    const art = FURTHER_READING.find(a => a.id === furtherReadingArticle);
    return (
      <div style={{ minHeight: "100vh", background: "#0f0d14", color: "#f0eaf8", fontFamily: "'Georgia', serif" }}>
        <div style={{ background: "#1a1525", borderBottom: "1px solid #2a2035", padding: "16px 20px", display: "flex", alignItems: "center", gap: "12px", position: "sticky", top: 0, zIndex: 10 }}>
          <button onClick={() => setFurtherReadingArticle(null)} style={{ background: "none", border: "none", color: "#7a6b8a", fontSize: "22px", cursor: "pointer" }}>←</button>
          <div style={{ fontSize: "14px", color: "#d4b8f0", fontWeight: "bold" }}>{art.emoji} {art.title}</div>
        </div>
        <div style={{ padding: "24px 20px", maxWidth: "480px", margin: "0 auto" }}>
          <div style={{ fontSize: "11px", color: "#6b4fa0", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "20px" }}>{art.phase} Phase</div>
          <div style={{ fontSize: "15px", color: "#c8b8e0", lineHeight: "1.85" }}>Content coming soon.</div>
        </div>
      </div>
    );
  }

  // ── Skip article
  if (showSkipArticle) {
    const art = SKIP_ARTICLE;
    return (
      <div style={{ minHeight: "100vh", background: "#0f0d14", color: "#f0eaf8", fontFamily: "'Georgia', serif" }}>
        <div style={{ background: "#1a1525", borderBottom: "1px solid #2a2035", padding: "16px 20px", display: "flex", alignItems: "center", gap: "12px", position: "sticky", top: 0, zIndex: 10 }}>
          <button onClick={() => setShowSkipArticle(false)} style={{ background: "none", border: "none", color: "#7a6b8a", fontSize: "22px", cursor: "pointer" }}>←</button>
          <div style={{ fontSize: "14px", color: "#d4b8f0", fontWeight: "bold" }}>{art.emoji} {art.title}</div>
        </div>
        <div style={{ padding: "24px 20px", maxWidth: "480px", margin: "0 auto" }}>
          <div style={{ fontSize: "13px", color: "#7a6b8a", fontStyle: "italic", marginBottom: "24px" }}>{art.subtitle}</div>
          {art.content.split("\n\n").map((para, i) => {
            const isH = para === para.toUpperCase() && para.length < 80 && !para.includes(".");
            return <div key={i} style={{ fontSize: isH ? "11px" : "15px", color: isH ? "#6b4fa0" : "#c8b8e0", lineHeight: isH ? "1.4" : "1.85", marginBottom: isH ? "8px" : "18px", letterSpacing: isH ? "2px" : "0", fontWeight: isH ? "bold" : "normal" }}>{para}</div>;
          })}
          <div style={{ height: "40px" }} />
        </div>
      </div>
    );
  }

  // ── Articles list
  if (appView === "articles") {
    return (
      <div style={{ minHeight: "100vh", background: "#0f0d14", color: "#f0eaf8", fontFamily: "'Georgia', serif" }}>
        <div style={{ background: "#1a1525", borderBottom: "1px solid #2a2035", padding: "16px 20px", display: "flex", alignItems: "center", gap: "12px" }}>
          <button onClick={() => setAppView("tracker")} style={{ background: "none", border: "none", color: "#7a6b8a", fontSize: "22px", cursor: "pointer" }}>←</button>
          <div style={{ fontSize: "16px", color: "#d4b8f0", fontWeight: "bold" }}>📚 Read This First</div>
        </div>
        <div style={{ padding: "20px", maxWidth: "480px", margin: "0 auto" }}>
          <div style={{ fontSize: "13px", color: "#5a4a6a", fontStyle: "italic", marginBottom: "24px" }}>Two articles that will change how you see everything.</div>
          {ARTICLES.map((art, i) => (
            <button key={art.id} onClick={() => { setActiveArticle(art.id); setAppView("article"); }} style={{ width: "100%", background: "#1a1525", border: "1px solid #2a2035", borderRadius: "16px", padding: "20px", marginBottom: "12px", cursor: "pointer", textAlign: "left", fontFamily: "inherit", display: "block" }}>
              <div style={{ fontSize: "32px", marginBottom: "10px" }}>{art.emoji}</div>
              <div style={{ fontSize: "11px", color: "#5a4a6a", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "6px" }}>Article {i + 1}</div>
              <div style={{ fontSize: "16px", color: "#d4b8f0", fontWeight: "bold", marginBottom: "6px" }}>{art.title}</div>
              <div style={{ fontSize: "13px", color: "#7a6b8a", fontStyle: "italic", marginBottom: "12px" }}>{art.subtitle}</div>
              <div style={{ fontSize: "12px", color: "#6b4fa0" }}>Read →</div>
            </button>
          ))}
        </div>
      </div>
    );
  }

  // ── Article reader
  if (appView === "article" && activeArticle) {
    const art = ARTICLES.find(a => a.id === activeArticle);
    return (
      <div style={{ minHeight: "100vh", background: "#0f0d14", color: "#f0eaf8", fontFamily: "'Georgia', serif" }}>
        <div style={{ background: "#1a1525", borderBottom: "1px solid #2a2035", padding: "16px 20px", display: "flex", alignItems: "center", gap: "12px", position: "sticky", top: 0, zIndex: 10 }}>
          <button onClick={() => setAppView("articles")} style={{ background: "none", border: "none", color: "#7a6b8a", fontSize: "22px", cursor: "pointer" }}>←</button>
          <div style={{ fontSize: "14px", color: "#d4b8f0", fontWeight: "bold" }}>{art.emoji} {art.title}</div>
        </div>
        <div style={{ padding: "24px 20px", maxWidth: "480px", margin: "0 auto" }}>
          <div style={{ fontSize: "13px", color: "#7a6b8a", fontStyle: "italic", marginBottom: "24px" }}>{art.subtitle}</div>
          {art.content.split("\n\n").map((para, i) => {
            const isH = para === para.toUpperCase() && para.length < 80 && !para.includes(".");
            return <div key={i} style={{ fontSize: isH ? "11px" : "15px", color: isH ? "#6b4fa0" : "#c8b8e0", lineHeight: isH ? "1.4" : "1.85", marginBottom: isH ? "8px" : "18px", letterSpacing: isH ? "2px" : "0", fontWeight: isH ? "bold" : "normal" }}>{para}</div>;
          })}
          <div style={{ height: "40px" }} />
        </div>
      </div>
    );
  }

  // ── Main tracker
  return (
    <div style={{ minHeight: "100vh", background: "#0f0d14", fontFamily: "'Georgia', serif", color: "#f0eaf8" }}>

      {/* Header */}
      <div style={{ background: "linear-gradient(135deg,#1a1525,#0f0d14)", borderBottom: "1px solid #2a2035", padding: "18px 20px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div>
          <div style={{ fontSize: "24px", fontWeight: "bold", letterSpacing: "-0.5px" }}>TrackHer</div>
          <div style={{ fontSize: "11px", color: "#7a6b8a", marginTop: "2px", fontStyle: "italic" }}>understand her, support her</div>
        </div>
        <div style={{ display: "flex", gap: "8px" }}>
          <button onClick={() => setAppView("articles")} style={{ background: "#1a1525", border: "1px solid #2a2035", borderRadius: "20px", padding: "8px 14px", color: "#7a6b8a", fontSize: "13px", cursor: "pointer", fontFamily: "inherit" }}>📚</button>
          <button onClick={() => setAppView("library")} style={{ background: "#1a1525", border: "1px solid #2a2035", borderRadius: "20px", padding: "8px 14px", color: "#7a6b8a", fontSize: "13px", cursor: "pointer", fontFamily: "inherit" }}>🎓</button>
          <button onClick={() => setShowSetup(true)} style={{ background: "linear-gradient(135deg,#6b4fa0,#9b6fca)", border: "none", borderRadius: "20px", padding: "8px 16px", color: "white", fontSize: "13px", cursor: "pointer", fontFamily: "inherit" }}>+ Add</button>
        </div>
      </div>

      {/* Partner tabs */}
      {partners.length > 0 && (
        <div style={{ display: "flex", gap: "8px", padding: "12px 20px", overflowX: "auto", background: "#130f1e", borderBottom: "1px solid #1e1830" }} onDragOver={e => e.preventDefault()}>
          {partners.map((p, i) => (
            <button key={p.id} draggable
              onDragStart={e => e.dataTransfer.setData("dragIndex", i)}
              onDrop={e => {
                const from = parseInt(e.dataTransfer.getData("dragIndex"));
                if (from === i) return;
                const r = [...partners];
                const [m] = r.splice(from, 1);
                r.splice(i, 0, m);
                setPartners(r);
              }}
              onClick={() => setActiveId(p.id)}
              style={{ background: activeId === p.id ? "linear-gradient(135deg,#2e1f45,#3d2860)" : "#1a1525", border: activeId === p.id ? "1px solid #6b4fa0" : "1px solid #2a2035", borderRadius: "24px", padding: "6px 14px", color: activeId === p.id ? "#d4b8f0" : "#7a6b8a", fontSize: "14px", cursor: "grab", fontFamily: "inherit", whiteSpace: "nowrap" }}>
              {p.avatar} {p.name}
            </button>
          ))}
        </div>
      )}

      {/* No partners */}
      {!active && (
        <div style={{ textAlign: "center", padding: "60px 24px", color: "#4a3a5a" }}>
          <div style={{ fontSize: "48px", marginBottom: "16px" }}>🌙</div>
          <div style={{ fontSize: "18px", marginBottom: "8px", color: "#7a6b8a" }}>No one added yet</div>
          <div style={{ fontSize: "13px", marginBottom: "28px" }}>Tap + Add to get started</div>
          <button onClick={() => setShowSetup(true)} style={{ background: "linear-gradient(135deg,#4a2f70,#6b4fa0)", border: "none", borderRadius: "20px", padding: "12px 28px", color: "white", cursor: "pointer", fontFamily: "inherit", fontSize: "15px" }}>+ Add partner</button>
        </div>
      )}

      {/* Partner view */}
      {active && (
        <div style={{ padding: "18px 20px", maxWidth: "480px", margin: "0 auto" }}>

          {/* Profile strip */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "14px", padding: "12px 16px", background: "#1a1525", borderRadius: "14px", border: "1px solid #2a2035" }}>
            <div style={{ fontSize: "32px", cursor: "pointer" }} onClick={() => { setPickAvatar(v => !v); setShowStatusChange(false); }}>{active.avatar}</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: "16px", fontWeight: "bold", color: "#d4b8f0" }}>{active.name}{active.age ? `, ${active.age}` : ""}</div>
              <div style={{ fontSize: "12px", color: "#5a4a6a", marginTop: "2px" }}>{relLabel}</div>
            </div>
            <button onClick={() => { setShowStatusChange(v => !v); setPickAvatar(false); }} style={{ background: "none", border: "1px solid #2a2035", borderRadius: "10px", padding: "4px 10px", color: "#6b4fa0", fontSize: "11px", cursor: "pointer", fontFamily: "inherit", whiteSpace: "nowrap" }}>change status</button>
          </div>

          {/* Avatar picker */}
          {pickAvatar && (
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "14px", padding: "12px", background: "#1a1525", borderRadius: "12px", border: "1px solid #2a2035" }}>
              {AVATARS.map(a => (
                <button key={a} onClick={() => { setPartners(prev => prev.map(p => p.id === activeId ? { ...p, avatar: a } : p)); setPickAvatar(false); }} style={{ background: active.avatar === a ? "#3d2860" : "#130f1e", border: active.avatar === a ? "2px solid #6b4fa0" : "1px solid #2a2035", borderRadius: "10px", padding: "8px 10px", fontSize: "20px", cursor: "pointer" }}>{a}</button>
              ))}
            </div>
          )}

          {/* Status change */}
          {showStatusChange && (
            <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "14px", padding: "12px", background: "#1a1525", borderRadius: "12px", border: "1px solid #2a2035" }}>
              <div style={{ fontSize: "11px", color: "#6b4fa0", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "4px" }}>Change status</div>
              {REL_TYPES.map(r => (
                <button key={r.id} onClick={() => { setPartners(prev => prev.map(p => p.id === activeId ? { ...p, relType: r.id, avatar: REL_EMOJI[r.id] } : p)); setShowStatusChange(false); }} style={{ background: active.relType === r.id ? "linear-gradient(135deg,#2e1f45,#3d2860)" : "#130f1e", border: active.relType === r.id ? "1px solid #8b6fca" : "1px solid #2a2035", borderRadius: "10px", padding: "10px 14px", display: "flex", alignItems: "center", gap: "12px", cursor: "pointer", fontFamily: "inherit", textAlign: "left" }}>
                  <span style={{ fontSize: "20px" }}>{r.emoji}</span>
                  <span style={{ fontSize: "15px", color: active.relType === r.id ? "#d4b8f0" : "#c8b8e0", fontWeight: "bold", flex: 1 }}>{r.label}</span>
                  {active.relType === r.id && <span style={{ color: "#8b6fca" }}>✓</span>}
                </button>
              ))}
            </div>
          )}

          {/* Skip tip card */}
          {active.skipped && (
            <div style={{ background: "linear-gradient(135deg,#1e1530,#1a1525)", border: "1px solid #4a3a6a", borderRadius: "16px", padding: "18px", marginBottom: "14px" }}>
              <div style={{ fontSize: "11px", color: "#8b6fca", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "8px" }}>🕵️ Don't know her date?</div>
              <div style={{ fontSize: "15px", color: "#d4b8f0", fontWeight: "bold", marginBottom: "6px" }}>Tips to discover her start date</div>
              <div style={{ fontSize: "13px", color: "#7a6b8a", marginBottom: "14px", lineHeight: 1.5 }}>It's simpler than you think. Here's how to find out.</div>
              <button onClick={() => setShowSkipArticle(true)} style={{ background: "linear-gradient(135deg,#4a2f70,#6b4fa0)", border: "none", borderRadius: "10px", padding: "10px 18px", color: "white", cursor: "pointer", fontFamily: "inherit", fontSize: "14px" }}>Read the guide →</button>
            </div>
          )}

          {/* Phase content */}
          {phase && (
            <>
              {/* Phase card */}
              <div style={{ background: `linear-gradient(135deg,${phase.color}18,${phase.color}08)`, border: `1px solid ${phase.color}40`, borderRadius: "20px", padding: "20px", marginBottom: "14px", position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", top: "-20px", right: "-20px", fontSize: "90px", opacity: "0.07" }}>{phase.emoji}</div>
                <div style={{ fontSize: "11px", color: phase.color, letterSpacing: "2px", textTransform: "uppercase", marginBottom: "4px" }}>{active.name} is in</div>
                <div style={{ fontSize: "26px", fontWeight: "bold" }}>{phase.emoji} {phase.name} Phase</div>
                <div style={{ fontSize: "13px", color: "#a090b8", fontStyle: "italic", marginTop: "3px" }}>{phase.tagline}</div>
                <div style={{ display: "inline-block", marginTop: "10px", background: `${phase.color}20`, border: `1px solid ${phase.color}40`, borderRadius: "20px", padding: "4px 12px", fontSize: "12px", color: phase.color }}>⚗️ {phase.chemical} — {phase.chemicalNote}</div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "12px" }}>
                  <div style={{ fontSize: "12px", color: "#7a6b8a" }}>Day {day - phase.days[0] + 1} of {phase.days[1] - phase.days[0] + 1} in this phase</div>
                  <button onClick={() => setShowNextPhase(true)} style={{ background: `${phase.color}20`, border: `1px solid ${phase.color}40`, borderRadius: "12px", padding: "5px 12px", color: phase.color, fontSize: "12px", cursor: "pointer", fontFamily: "inherit" }}>Look ahead: next phase →</button>
                </div>
                <div style={{ marginTop: "14px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: "11px", color: "#7a6b8a", marginBottom: "5px" }}>
                    <span>Day {day} of {active.cycleLength}</span>
                    <span>{daysLeft > 1 ? `~${daysLeft} days to period` : "Period due very soon"}</span>
                  </div>
                  <div style={{ background: "#2a2035", borderRadius: "8px", height: "5px", overflow: "hidden" }}>
                    <div style={{ width: `${pct}%`, height: "100%", background: `linear-gradient(90deg,#e05c6b,${phase.color})`, borderRadius: "8px" }} />
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", marginTop: "10px" }}>
                    {PHASE_ORDER.map(p => (
                      <div key={p} style={{ textAlign: "center", opacity: p === pk ? 1 : 0.2, transition: "opacity 0.3s" }}>
                        <div style={{ fontSize: "13px" }}>{PHASES[p].emoji}</div>
                        <div style={{ fontSize: "9px", color: "#7a6b8a", marginTop: "2px" }}>{PHASES[p].name.split(" ")[0]}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Fertility card */}
              {(() => {
                const f = FERTILITY[pk];
                const tiers = ["Very Low", "Low → Medium", "Medium Low", "Medium", "High", "Peak"];
                const tierColors = ["#5bbf8a", "#8bbf5a", "#f4c14b", "#f4a24b", "#e08a3c", "#e05c6b"];
                const activeIdx = tiers.indexOf(f.tier);
                return (
                  <div style={{ background: "#1a1525", border: `1px solid ${f.color}40`, borderRadius: "16px", padding: "16px", marginBottom: "12px" }}>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "10px" }}>
                      <div style={{ fontSize: "11px", letterSpacing: "2px", color: f.color, textTransform: "uppercase" }}>🌿 Fertility</div>
                      <div style={{ fontSize: "15px", fontWeight: "bold", color: f.color }}>{f.emoji} {f.tier}</div>
                    </div>
                    <div style={{ display: "flex", gap: "4px", marginBottom: "10px" }}>
                      {tiers.map((t, i) => (
                        <div key={i} style={{ flex: 1, height: "6px", borderRadius: "3px", background: i === activeIdx ? tierColors[i] : "#2a2035", transition: "background 0.3s" }} />
                      ))}
                    </div>
                    <div style={{ fontSize: "12px", color: "#7a6b8a", lineHeight: "1.5" }}>{f.note}</div>
                  </div>
                );
              })()}

              {/* Header tabs — 2 row grid */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "6px", marginBottom: "12px" }}>
                {Object.entries(HEADER_LABELS).map(([key, val]) => (
                  <button key={key} onClick={() => setActiveHeader(key)} style={{ background: activeHeader === key ? `${phase.color}25` : "#1a1525", border: activeHeader === key ? `1px solid ${phase.color}60` : "1px solid #2a2035", borderRadius: "12px", padding: "10px 6px", color: activeHeader === key ? phase.color : "#5a4a6a", fontSize: "12px", cursor: "pointer", fontFamily: "inherit", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: "3px" }}>
                    <span style={{ fontSize: "16px" }}>{val.emoji}</span>
                    <span style={{ fontSize: "11px", whiteSpace: "nowrap" }}>{val.label}</span>
                  </button>
                ))}
              </div>

              {/* Content card */}
              <div style={{ background: "#1a1525", border: `1px solid ${activeHeader === "avoid" ? "#3a2035" : phase.color + "30"}`, borderRadius: "16px", padding: "18px", marginBottom: "10px" }}>
                <div style={{ fontSize: "11px", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "12px", color: activeHeader === "avoid" ? "#bf5060" : phase.color }}>{HEADER_LABELS[activeHeader].emoji} {HEADER_LABELS[activeHeader].label}</div>
                <div style={{ display: "flex", gap: "12px", alignItems: "flex-start", fontSize: "15px", color: activeHeader === "avoid" ? "#c8a0a8" : "#d4c8e8", lineHeight: "1.7", padding: "13px", background: activeHeader === "avoid" ? "#3a202510" : `${phase.color}10`, borderRadius: "10px", marginBottom: "13px", minHeight: "55px" }}>
                  <span style={{ fontSize: "13px", fontWeight: "bold", color: activeHeader === "avoid" ? "#bf5060" : phase.color, minWidth: "20px", marginTop: "1px" }}>{bullet + 1}.</span>
                  <span>{bullets[bullet]}</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <button onClick={() => setBullet(b => Math.max(0, b - 1))} style={{ background: bullet > 0 ? `${phase.color}20` : "#1a1525", border: `1px solid ${bullet > 0 ? phase.color + "40" : "#2a2035"}`, borderRadius: "8px", padding: "6px 12px", color: bullet > 0 ? phase.color : "#3a2a50", fontSize: "13px", cursor: bullet > 0 ? "pointer" : "default", fontFamily: "inherit" }}>← prev</button>
                  <div style={{ display: "flex", gap: "5px" }}>
                    {bullets.map((_, i) => <div key={i} onClick={() => setBullet(i)} style={{ width: i === bullet ? "16px" : "6px", height: "6px", borderRadius: "3px", cursor: "pointer", background: i === bullet ? phase.color : "#3a2a50", transition: "all 0.2s" }} />)}
                  </div>
                  <button onClick={() => setBullet(b => Math.min(bullets.length - 1, b + 1))} style={{ background: bullet < bullets.length - 1 ? `${phase.color}20` : "#1a1525", border: `1px solid ${bullet < bullets.length - 1 ? phase.color + "40" : "#2a2035"}`, borderRadius: "8px", padding: "6px 12px", color: bullet < bullets.length - 1 ? phase.color : "#3a2a50", fontSize: "13px", cursor: bullet < bullets.length - 1 ? "pointer" : "default", fontFamily: "inherit" }}>next →</button>
                </div>
                <div style={{ textAlign: "center", fontSize: "11px", color: "#4a3a5a", marginTop: "8px" }}>{bullet + 1} of {bullets.length}</div>
              </div>

              {/* Game note */}
              {activeHeader === "game" && phase.gameNote && (
                <div style={{ background: `${phase.color}12`, border: `1px solid ${phase.color}30`, borderRadius: "12px", padding: "14px 16px", marginBottom: "10px" }}>
                  <div style={{ fontSize: "11px", color: phase.color, letterSpacing: "1px", textTransform: "uppercase", marginBottom: "6px" }}>🎯 The move this week</div>
                  <div style={{ fontSize: "14px", color: "#b8a8d0", lineHeight: "1.6", fontStyle: "italic" }}>{phase.gameNote}</div>
                </div>
              )}

              {/* Phase Forecast */}
              <div style={{ background: "#1a1525", border: "1px solid #2a2035", borderRadius: "16px", padding: "18px", marginBottom: "10px" }}>
                <div style={{ fontSize: "11px", letterSpacing: "2px", color: "#6b4fa0", textTransform: "uppercase", marginBottom: "6px" }}>🔮 Phase Forecast</div>
                <div style={{ fontSize: "13px", color: "#7a6b8a", marginBottom: "14px" }}>Planning something? See what phase she'll be in.</div>
                <div style={{ display: "flex", gap: "8px", marginBottom: forecastPhase ? "14px" : "0" }}>
                  <input type="date" value={forecastDate} onChange={e => {
                    setForecastDate(e.target.value);
                    if (e.target.value && active.lastPeriod) {
                      const diff = Math.floor((new Date(e.target.value) - new Date(active.lastPeriod)) / 86400000);
                      if (diff >= 0) {
                        const fd = ((diff % active.cycleLength) + 1);
                        setForecastPhase({ key: getPhaseKey(fd), day: fd });
                      } else { setForecastPhase(null); }
                    } else { setForecastPhase(null); }
                  }} style={{ flex: 1, background: "#130f1e", border: "1px solid #2a2035", borderRadius: "8px", padding: "8px 12px", color: "#d4c8e8", fontFamily: "inherit", fontSize: "14px", colorScheme: "dark" }} />
                </div>
                {forecastPhase && (() => {
                  const fp = PHASES[forecastPhase.key];
                  return (
                    <div style={{ background: `linear-gradient(135deg,${fp.color}18,${fp.color}08)`, border: `1px solid ${fp.color}40`, borderRadius: "12px", padding: "14px" }}>
                      <div style={{ fontSize: "11px", color: fp.color, letterSpacing: "2px", textTransform: "uppercase", marginBottom: "6px" }}>Day {forecastPhase.day} of {active.cycleLength}</div>
                      <div style={{ fontSize: "20px", fontWeight: "bold", color: "#f0eaf8", marginBottom: "4px" }}>{fp.emoji} {fp.name} Phase</div>
                      <div style={{ fontSize: "13px", color: "#a090b8", fontStyle: "italic", marginBottom: "10px" }}>{fp.tagline}</div>
                      <div style={{ fontSize: "13px", color: fp.color, background: `${fp.color}15`, borderRadius: "8px", padding: "8px 12px" }}>⚗️ {fp.chemical} — {fp.chemicalNote}</div>
                    </div>
                  );
                })()}
              </div>

              {/* Further Reading */}
              <div style={{ background: "#1a1525", border: "1px solid #2a2035", borderRadius: "16px", padding: "18px", marginBottom: "10px" }}>
                <div style={{ fontSize: "11px", letterSpacing: "2px", color: "#6b4fa0", textTransform: "uppercase", marginBottom: "14px" }}>📖 Further Reading</div>
                {(() => {
                  const art = FURTHER_READING.find(a => a.id === pk);
                  if (!art) return null;
                  return (
                    <button onClick={() => setFurtherReadingArticle(art.id)} style={{ background: `linear-gradient(135deg,#2e1f45,#3d2860)`, border: `1px solid ${phase.color}40`, borderRadius: "12px", padding: "14px 16px", display: "flex", alignItems: "center", gap: "12px", cursor: "pointer", fontFamily: "inherit", textAlign: "left", width: "100%" }}>
                      <span style={{ fontSize: "24px" }}>{art.emoji}</span>
                      <div style={{ flex: 1 }}>
                        <div style={{ fontSize: "11px", color: phase.color, letterSpacing: "1px", textTransform: "uppercase", marginBottom: "4px" }}>{art.phase} Phase</div>
                        <div style={{ fontSize: "15px", color: "#d4b8f0", fontWeight: "bold" }}>{art.title}</div>
                      </div>
                      <span style={{ color: phase.color, fontSize: "18px" }}>→</span>
                    </button>
                  );
                })()}
              </div>

              {/* Adjust period start date */}
              <div style={{ background: "#130f1e", border: "1px solid #2a2035", borderRadius: "16px", padding: "14px", marginBottom: "10px" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "8px" }}>
                <div style={{ fontSize: "11px", letterSpacing: "2px", color: "#6b4fa0", textTransform: "uppercase" }}>📅 Adjust period start date</div>
                <button onClick={() => setShowAdjustArticle(true)} style={{ background: "none", border: "none", color: "#6b4fa0", fontSize: "12px", cursor: "pointer", fontFamily: "inherit", fontStyle: "italic", textDecoration: "underline" }}>why would I do that?</button>
              </div>
                <div style={{ display: "flex", gap: "8px" }}>
                  <input type="date" value={updateDate} onChange={e => setUpdateDate(e.target.value)} style={{ flex: 1, background: "#1a1525", border: "1px solid #2a2035", borderRadius: "8px", padding: "8px 12px", color: "#d4c8e8", fontFamily: "inherit", fontSize: "14px", colorScheme: "dark" }} />
                  <button onClick={doUpdate} style={{ background: "linear-gradient(135deg,#4a2f70,#6b4fa0)", border: "none", borderRadius: "8px", padding: "8px 14px", color: "white", cursor: "pointer", fontFamily: "inherit", fontSize: "13px" }}>Save</button>
                </div>
              </div>
            </>
          )}

          {/* App Feedback */}
          <div style={{ background: "#1a1525", border: "1px solid #2a2035", borderRadius: "16px", padding: "18px", marginBottom: "10px" }}>
            <button onClick={() => { setShowFeedback(v => !v); setFeedbackSent(false); }} style={{ background: "none", border: "none", cursor: "pointer", fontFamily: "inherit", width: "100%", textAlign: "left", padding: "0", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <div style={{ fontSize: "11px", letterSpacing: "2px", color: "#6b4fa0", textTransform: "uppercase" }}>💬 App Feedback</div>
              <span style={{ color: "#4a3a6a", fontSize: "16px", display: "inline-block", transform: showFeedback ? "rotate(90deg)" : "rotate(0deg)", transition: "transform 0.2s" }}>›</span>
            </button>
            {showFeedback && (
              <div style={{ marginTop: "14px" }}>
                <div style={{ fontSize: "13px", color: "#7a6b8a", marginBottom: "10px" }}>What's working? What's missing? Be brutal.</div>
                {feedbackSent ? (
                  <div style={{ textAlign: "center", padding: "20px", color: "#8b6fca", fontSize: "15px" }}>🙏 Thanks — we read every single one.</div>
                ) : (
                  <>
                    <textarea value={feedbackText} onChange={e => setFeedbackText(e.target.value)} placeholder="Type your feedback here..." rows={5} style={{ width: "100%", background: "#130f1e", border: "1px solid #2a2035", borderRadius: "10px", padding: "12px 14px", color: "#f0eaf8", fontFamily: "inherit", fontSize: "14px", boxSizing: "border-box", resize: "none", outline: "none", lineHeight: "1.6" }} />
                    <button onClick={() => { if (feedbackText.trim()) { setFeedbackSent(true); setFeedbackText(""); } }} style={{ width: "100%", marginTop: "10px", background: feedbackText.trim() ? "linear-gradient(135deg,#4a2f70,#6b4fa0)" : "#2a2035", border: "none", borderRadius: "10px", padding: "12px", color: feedbackText.trim() ? "white" : "#4a3a5a", fontFamily: "inherit", fontSize: "14px", cursor: feedbackText.trim() ? "pointer" : "default" }}>Send feedback</button>
                  </>
                )}
              </div>
            )}
          </div>

          <button onClick={() => removePartner(active.id)} style={{ background: "none", border: "1px solid #3a2035", borderRadius: "10px", color: "#6a3a45", padding: "8px 16px", cursor: "pointer", fontFamily: "inherit", fontSize: "12px", width: "100%", marginBottom: "32px" }}>Remove {active.name}</button>

        </div>
      )}

      {/* Next phase modal */}
      {showNextPhase && pk && (() => {
        const nextKey = PHASE_ORDER[(PHASE_ORDER.indexOf(pk) + 1) % PHASE_ORDER.length];
        const np = PHASES[nextKey];
        return (
          <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.75)", display: "flex", alignItems: "flex-end", zIndex: 200 }} onClick={() => setShowNextPhase(false)}>
            <div style={{ background: "#1a1525", borderRadius: "24px 24px 0 0", padding: "28px 24px", width: "100%", maxWidth: "480px", margin: "0 auto", border: `1px solid ${np.color}40` }} onClick={e => e.stopPropagation()}>
              <div style={{ fontSize: "11px", color: np.color, letterSpacing: "2px", textTransform: "uppercase", marginBottom: "8px" }}>Coming up next</div>
              <div style={{ fontSize: "28px", fontWeight: "bold", marginBottom: "4px" }}>{np.emoji} {np.name} Phase</div>
              <div style={{ fontSize: "14px", color: "#a090b8", fontStyle: "italic", marginBottom: "14px" }}>{np.tagline}</div>
              <div style={{ background: `${np.color}15`, border: `1px solid ${np.color}30`, borderRadius: "12px", padding: "12px 14px", marginBottom: "14px" }}>
                <div style={{ fontSize: "12px", color: np.color, marginBottom: "6px" }}>⚗️ {np.chemical}</div>
                <div style={{ fontSize: "13px", color: "#9888b0" }}>{np.chemicalNote}</div>
              </div>
              <div style={{ fontSize: "13px", color: "#7a6b8a", marginBottom: "6px", fontWeight: "bold", textTransform: "uppercase", letterSpacing: "1px" }}>First tip</div>
              <div style={{ fontSize: "14px", color: "#c8b8e0", lineHeight: "1.6", marginBottom: "20px" }}>{np.tips[0]}</div>
              <button onClick={() => setShowNextPhase(false)} style={{ width: "100%", background: "linear-gradient(135deg,#4a2f70,#6b4fa0)", border: "none", borderRadius: "12px", padding: "14px", color: "white", fontFamily: "inherit", fontSize: "15px", cursor: "pointer" }}>Got it</button>
            </div>
          </div>
        );
      })()}

      {/* Save your data prompt */}
      {showSavePrompt && (
        <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.75)", display: "flex", alignItems: "flex-end", zIndex: 200 }}>
          <div style={{ background: "#1a1525", borderRadius: "24px 24px 0 0", padding: "28px 24px", width: "100%", maxWidth: "480px", margin: "0 auto", border: "1px solid #2a2035" }}>
            <div style={{ fontSize: "32px", marginBottom: "12px" }}>💾</div>
            <div style={{ fontSize: "20px", fontWeight: "bold", color: "#d4b8f0", marginBottom: "8px" }}>Your data is saved on this device</div>
            <div style={{ fontSize: "14px", color: "#7a6b8a", lineHeight: "1.6", marginBottom: "24px" }}>Right now TrackHer lives on this phone only. Create a free account to back up your data and access it anywhere.</div>
            <button onClick={() => setShowSavePrompt(false)} style={{ width: "100%", background: "linear-gradient(135deg,#4a2f70,#6b4fa0)", border: "none", borderRadius: "12px", padding: "14px", color: "white", fontFamily: "inherit", fontSize: "15px", fontWeight: "bold", cursor: "pointer", marginBottom: "10px" }}>Create free account — coming soon</button>
            <button onClick={() => setShowSavePrompt(false)} style={{ width: "100%", background: "none", border: "none", color: "#5a4a6a", fontFamily: "inherit", fontSize: "14px", cursor: "pointer", padding: "8px", fontStyle: "italic" }}>Maybe later</button>
          </div>
        </div>
      )}

    </div>
  );
}
