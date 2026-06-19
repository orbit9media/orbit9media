// Orbit9Media — Bilingual News Data (English + Malayalam)
// All articles have both 'en' and 'ml' versions

const articles = [
  // ── HERO ARTICLE ──────────────────────────────────
  {
    id: 1,
    category: { en: "Budget 2026-27 · Breaking", ml: "ബജറ്റ് 2026-27 · ബ്രേക്കിംഗ്" },
    title: {
      en: "CM Satheesan presents Kerala's revised budget: 'Invest Keralam' drive, ₹192 crore for MSMEs, new Medical College at Haripad",
      ml: "സി.എം. സതീശൻ കേരളത്തിന്റെ പുനഃക്രമീകൃത ബജറ്റ് അവതരിപ്പിച്ചു: 'ഇൻവെസ്റ്റ് കേരളം', MSME-കൾക്ക് ₹192 കോടി, ഹരിപ്പാട്ട് പുതിയ മെഡിക്കൽ കോളേജ്"
    },
    byline: { en: "Source: Onmanorama · June 19, 2026 · Thiruvananthapuram", ml: "ഉറവിടം: ഓൺമനോരമ · ജൂൺ 19, 2026 · തിരുവനന്തപുരം" },
    type: "hero",
    district: "Thiruvananthapuram"
  },

  // ── SIDEBAR ARTICLES ────────────────────────────────
  {
    id: 2,
    category: { en: "Health Alert · Kozhikode", ml: "ആരോഗ്യ അലേർട്ട് · കോഴിക്കോട്" },
    title: {
      en: "Shigella outbreak spreads: 110 cases in June, outbreaks declared in Kozhikode and Wayanad",
      ml: "ഷിഗെല്ല പൊട്ടിപ്പുറപ്പെടൽ: ജൂണിൽ 110 കേസുകൾ, കോഴിക്കോട്, വയനാട് ജില്ലകളിൽ അലേർട്ട്"
    },
    excerpt: {
      en: "Health minister warns of rising risk as monsoon intensifies — children and elderly especially vulnerable.",
      ml: "മഴ തീവ്രമാകുന്നതോടെ അപകടസാധ്യത വർദ്ധിക്കുന്നതായി ആരോഗ്യ മന്ത്രി മുന്നറിയിപ്പ് നൽകി."
    },
    type: "sidebar",
    district: "Kozhikode"
  },
  {
    id: 3,
    category: { en: "Power Crisis · KSEB", ml: "വൈദ്യുതി പ്രതിസന്ധി · KSEB" },
    title: {
      en: "El Niño disrupts KSEB plans: Evening power cuts 6 PM to midnight across Kerala until June 30",
      ml: "എൽ നിനോ KSEB-യുടെ പദ്ധതി തകർത്തു: ജൂൺ 30 വരെ വൈകുന്നേരം 6 മുതൽ അർദ്ധരാത്രി വരെ ലോഡ് ഷെഡ്ഡിംഗ്"
    },
    excerpt: {
      en: "Daily shortfall of 900 MW as monsoon brings less rainfall than expected, worsening electricity crunch.",
      ml: "900 MW ദൈനംദിന കുറവ്; പ്രതീക്ഷിച്ചതിലും കുറവ് മഴ, വൈദ്യുതി ക്ഷാമം രൂക്ഷം."
    },
    type: "sidebar",
    district: "Kerala"
  },
  {
    id: 4,
    category: { en: "Politics · UDF", ml: "രാഷ്ട്രീയം · UDF" },
    title: {
      en: "VD Satheesan sworn in as 13th CM of Kerala: UDF ends decade of LDF rule",
      ml: "വി.ഡി. സതീശൻ കേരളത്തിന്റെ 13-ാം മുഖ്യമന്ത്രിയായി; UDF-ന്റെ പത്ത് വർഷത്തെ LDF ഭരണം അവസാനിപ്പിച്ചു"
    },
    excerpt: {
      en: "Congress leader took charge on May 18 after a leadership dispute resolved with AICC backing Satheesan.",
      ml: "AICC-യുടെ പിന്തുണയോടെ നേതൃത്വ തർക്കം പരിഹരിച്ച ശേഷം മേയ് 18-ന് ചുമതലയേറ്റു."
    },
    type: "sidebar",
    district: "Thiruvananthapuram"
  },

  // ── LATEST NEWS GRID ────────────────────────────────
  {
    id: 5,
    source: { en: "Onmanorama · Wayanad", ml: "ഓൺമനോരമ · വയനാട്" },
    category: { en: "Ground Report", ml: "ഗ്രൗണ്ട് റിപ്പോർട്ട്" },
    title: {
      en: "Frequent earth slips on Wayanad Ghat roads — travellers advised to carry supplies and track conditions",
      ml: "വയനാട് ഘാട്ട് റോഡുകളിൽ ഇടക്കിടെ മണ്ണിടിച്ചിൽ — യാത്രക്കാർ ശ്രദ്ധിക്കണമെന്ന് അധികൃതർ"
    },
    meta: { en: "June 19, 2026 · 4 min read", ml: "ജൂൺ 19, 2026 · 4 മിനിറ്റ്" },
    thumb: "ct1",
    type: "latest",
    district: "Wayanad"
  },
  {
    id: 6,
    source: { en: "Onmanorama · Thiruvananthapuram", ml: "ഓൺമനോരമ · തിരുവനന്തപുരം" },
    category: { en: "Policy", ml: "നയം" },
    title: {
      en: "Priyadarshini free travel scheme applies only to Ordinary buses — not City Fast services, govt clarifies",
      ml: "പ്രിയദർശിനി സൗജന്യ യാത്ര സ്കീം ഓർഡിനറി ബസുകൾക്ക് മാത്രം — സിറ്റി ഫാസ്റ്റ് ഒഴിവ്: സർക്കാർ"
    },
    meta: { en: "June 18, 2026 · 3 min read", ml: "ജൂൺ 18, 2026 · 3 മിനിറ്റ്" },
    thumb: "ct2",
    type: "latest",
    district: "Thiruvananthapuram"
  },
  {
    id: 7,
    source: { en: "Onmanorama · Kasaragod", ml: "ഓൺമനോരമ · കാസർഗോഡ്" },
    category: { en: "Crime", ml: "ക്രൈം" },
    title: {
      en: "Village office staff arrested for demanding ₹5,000 bribe from temple committee in Kasaragod",
      ml: "ക്ഷേത്ര കമ്മിറ്റിയിൽ നിന്ന് ₹5,000 കൈക്കൂലി ആവശ്യപ്പെട്ട വില്ലേജ് ഓഫീസ് ജീവനക്കാരൻ അറസ്റ്റിൽ"
    },
    meta: { en: "June 18, 2026 · 3 min read", ml: "ജൂൺ 18, 2026 · 3 മിനിറ്റ്" },
    thumb: "ct3",
    type: "latest",
    district: "Kasaragod"
  },
  {
    id: 8,
    source: { en: "Onmanorama · Kerala", ml: "ഓൺമനോരമ · കേരളം" },
    category: { en: "Social Justice", ml: "സാമൂഹ്യ നീതി" },
    title: {
      en: "Seven Dalit families' long eviction dispute resolved — five cents of land each, state to build homes",
      ml: "ഏഴ് ദലിത് കുടുംബങ്ങളുടെ ഒഴിപ്പിക്കൽ തർക്കം പരിഹൃതം — ഓരോ കുടുംബത്തിനും 5 സെൻറ് ഭൂമി"
    },
    meta: { en: "June 17, 2026 · 5 min read", ml: "ജൂൺ 17, 2026 · 5 മിനിറ്റ്" },
    thumb: "ct4",
    type: "latest",
    district: "Kerala"
  },

  // ── MORE STORIES ────────────────────────────────────
  {
    id: 9,
    source: { en: "Onmanorama · Kozhikode", ml: "ഓൺമനോരമ · കോഴിക്കോട്" },
    category: { en: "Health", ml: "ആരോഗ്യം" },
    title: {
      en: "19 new Shigella cases on June 18 — Kozhikode records 33 cases, Wayanad 18 this month",
      ml: "ജൂൺ 18-ന് 19 പുതിയ ഷിഗെല്ല കേസ് — ഈ മാസം കോഴിക്കോട്ട് 33, വയനാട്ടിൽ 18 കേസ്"
    },
    meta: { en: "June 18, 2026 · 4 min read", ml: "ജൂൺ 18, 2026 · 4 മിനിറ്റ്" },
    thumb: "ct5",
    type: "more",
    district: "Kozhikode"
  },
  {
    id: 10,
    source: { en: "Onmanorama · Kerala", ml: "ഓൺമനോരമ · കേരളം" },
    category: { en: "Weather", ml: "കാലാവസ്ഥ" },
    title: {
      en: "Orange and yellow alerts across Kerala districts: Heavy rain and gusty winds forecast through June 21",
      ml: "കേരളത്തിൽ ഓറഞ്ച്, മഞ്ഞ അലേർട്ടുകൾ: ജൂൺ 21 വരെ കനത്ത മഴയ്ക്കും ശക്തമായ കാറ്റിനും സാധ്യത"
    },
    meta: { en: "June 19, 2026 · 2 min read", ml: "ജൂൺ 19, 2026 · 2 മിനിറ്റ്" },
    thumb: "ct6",
    type: "more",
    district: "Kerala"
  },
  {
    id: 11,
    source: { en: "Onmanorama · Politics", ml: "ഓൺമനോരമ · രാഷ്ട്രീയം" },
    category: { en: "Legislature", ml: "നിയമസഭ" },
    title: {
      en: "CPI state executive split over Deputy Opposition Leader post — internal tensions surface",
      ml: "ഡെപ്യൂട്ടി പ്രതിപക്ഷ നേതൃ സ്ഥാനം ചൊല്ലി CPI സംസ്ഥാന എക്സിക്യൂട്ടീവ് പിളർന്നു"
    },
    meta: { en: "June 17, 2026 · 5 min read", ml: "ജൂൺ 17, 2026 · 5 മിനിറ്റ്" },
    thumb: "ct7",
    type: "more",
    district: "Kerala"
  },
  {
    id: 12,
    source: { en: "Onmanorama · Environment", ml: "ഓൺമനോരമ · പരിസ്ഥിതി" },
    category: { en: "Policy", ml: "നയം" },
    title: {
      en: "Kerala to become carbon-neutral by 2050 — soil carbon sequestration to be integrated in farming",
      ml: "2050-ഓടെ കേരളം കാർബൺ ന്യൂട്രൽ ആകും — കൃഷിയിൽ മണ്ണ് കാർബൺ ശേഖരണം നടപ്പാക്കും"
    },
    meta: { en: "June 19, 2026 · 4 min read", ml: "ജൂൺ 19, 2026 · 4 മിനിറ്റ്" },
    thumb: "ct8",
    type: "more",
    district: "Kerala"
  }
];

// Long form articles
const longform = {
  main: {
    category: { en: "Investigation · Budget Analysis", ml: "അന്വേഷണം · ബജറ്റ് വിശകലനം" },
    title: {
      en: "The ₹20,000 crore question: What happened to Kerala's finances under LDF, and what Satheesan inherits",
      ml: "₹20,000 കോടിയുടെ ചോദ്യം: LDF ഭരണത്തിൽ കേരളത്തിന്റെ ധനകാര്യം എന്ത് സംഭവിച്ചു, സതീശൻ ഇനി എന്ത് ഏറ്റെടുക്കും"
    },
    excerpt: {
      en: "CM Satheesan says ₹20,000 crore out of a planned ₹35,000 crore was 'missing' when UDF took office. Orbit9Media unpacks the numbers, the blame, and what the revised budget really signals for Kerala's economy.",
      ml: "₹35,000 കോടി ആസൂത്രണം ചെയ്തതിൽ ₹20,000 കോടി UDF അധികാരമേറ്റപ്പോൾ 'കാണില്ലായിരുന്നു' എന്ന് സി.എം. സതീശൻ. ഓർബിറ്റ്9 മീഡിയ കണക്കുകൾ, ആരോപണങ്ങൾ, പുനഃക്രമീകൃത ബജറ്റ് കേരളത്തിന്റെ സമ്പദ്ഘടനയ്ക്ക് എന്ത് അർഥം നൽകുന്നു എന്ന് വിശകലനം ചെയ്യുന്നു."
    },
    readMore: { en: "Read the full report", ml: "പൂർണ്ണ റിപ്പോർട്ട് വായിക്കുക" }
  },
  sidebar: [
    {
      title: {
        en: "Sabarimala's gold-plated roof shows black marks — Travancore Devaswom Board orders inspection",
        ml: "ശബരിമല സ്വർണ്ണ മേൽക്കൂരയിൽ കറുത്ത പാടുകൾ — ട്രാവൻകൂർ ദേവസ്വം ബോർഡ് പരിശോധന ഉത്തരവിട്ടു"
      },
      date: { en: "June 17, 2026", ml: "ജൂൺ 17, 2026" }
    },
    {
      title: {
        en: "Kasaragod's healthcare gap: Stalled trauma care, incomplete medical college, and a community's plea",
        ml: "കാസർഗോഡ്: ട്രോമ കെയർ തടസ്സം, അപൂർണ്ണ മെഡിക്കൽ കോളേജ്, ജനങ്ങളുടെ ആവശ്യം"
      },
      date: { en: "June 16, 2026", ml: "ജൂൺ 16, 2026" }
    },
    {
      title: {
        en: "PIL challenges Kerala's free bus travel scheme — does it violate equality before law?",
        ml: "കേരളത്തിലെ സൗജന്യ ബസ് യാത്ര സ്കീം ഭരണഘടനാ ലംഘനമോ? PIL ഹൈക്കോടതിയിൽ"
      },
      date: { en: "June 15, 2026", ml: "ജൂൺ 15, 2026" }
    },
    {
      title: {
        en: "Monsoon 2026: El Niño weakens Kerala rains — what it means for agriculture and water security",
        ml: "മൺസൂൺ 2026: എൽ നിനോ കേരളത്തിലെ മഴ ദുർബലമാക്കി — കൃഷിക്കും ജലസുരക്ഷയ്ക്കും ഭീഷണി"
      },
      date: { en: "June 14, 2026", ml: "ജൂൺ 14, 2026" }
    }
  ]
};

// Podcasts
const podcasts = [
  {
    icon: "🎙",
    iconClass: "pi1",
    title: { en: "Kerala Vaaram — Weekly News Roundtable", ml: "കേരള വാരം — വാർത്ത ചർച്ചാ മേശ" },
    desc: { en: "Kerala's week, dissected by journalists who read every story so you don't have to.", ml: "ജേർണലിസ്റ്റുകൾ ഓരോ വാർത്തയും വായിച്ച് കേരളത്തിന്റെ ആഴ്ചയെ വിശകലനം ചെയ്യുന്നു." },
    ep: { en: "EP 312 · Latest episode", ml: "EP 312 · പുതിയ എപിസോഡ്" }
  },
  {
    icon: "📡",
    iconClass: "pi2",
    title: { en: "Orbit9 Decodes — Media & Policy Analysis", ml: "ഓർബിറ്റ്9 ഡീകോഡ്സ് — മാധ്യമ & നയ വിശകലനം" },
    desc: { en: "Who said what in Thiruvananthapuram, who stayed silent, and why the gap matters.", ml: "തിരുവനന്തപുരത്ത് ആര് എന്ത് പറഞ്ഞു, ആര് മൗനം പാലിച്ചു, ആ വ്യത്യാസം എന്തുകൊണ്ട് പ്രധാനം." },
    ep: { en: "EP 98 · Latest episode", ml: "EP 98 · പുതിയ എപിസോഡ്" }
  },
  {
    icon: "🎬",
    iconClass: "pi3",
    title: { en: "Chalachithram — Malayalam Cinema Podcast", ml: "ചലച്ചിത്രം — മലയാള സിനിമ പോഡ്കാസ്റ്റ്" },
    desc: { en: "Malayalam films, OTT releases, and the culture conversations Kerala is having right now.", ml: "മലയാള സിനിമ, OTT റിലീസുകൾ, ഇന്ന് കേരളം നടത്തുന്ന സാംസ്കാരിക ചർച്ചകൾ." },
    ep: { en: "EP 74 · Latest episode", ml: "EP 74 · പുതിയ എപിസോഡ്" }
  }
];

// UI strings (nav, labels, buttons, etc.)
const ui = {
  siteTagline: { en: "Kerala's Independent Voice", ml: "കേരളത്തിന്റെ സ്വതന്ത്ര ശബ്ദം" },
  keralaBadge: { en: "Kerala", ml: "കേരളം" },
  nav: {
    video:    { en: "Video",    ml: "വീഡിയോ" },
    podcast:  { en: "Podcast",  ml: "പോഡ്കാസ്റ്റ്" },
    longform: { en: "Long Form", ml: "ദീർഘ രൂപം" },
    analysis: { en: "Analysis", ml: "വിശകലനം" },
    lang:     { en: "മലയാളം",   ml: "English" },
    subscribe:{ en: "Subscribe", ml: "സബ്‌സ്ക്രൈബ്" }
  },
  countdown: {
    title:   { en: "Orbit9Media Grand Launch", ml: "ഓർബിറ്റ്9 മീഡിയ ഗ്രാൻഡ് ലോഞ്ച്" },
    sub:     { en: "Counting down to · 17 August 2026", ml: "കൗണ്ട്ഡൗൺ · ഓഗസ്റ്റ് 17, 2026" },
    label:   { en: "Event Date", ml: "ഇവന്റ് തീയതി" },
    date:    { en: "17 August 2026", ml: "17 ഓഗസ്റ്റ് 2026" },
    days:    { en: "Days",  ml: "ദിവസം" },
    hours:   { en: "Hours", ml: "മണിക്കൂർ" },
    mins:    { en: "Mins",  ml: "മിനിറ്റ്" },
    secs:    { en: "Secs",  ml: "സെക്കൻഡ്" }
  },
  districtAll: { en: "All Kerala", ml: "എല്ലാ കേരളം" },
  districts: [
    { en: "Thiruvananthapuram", ml: "തിരുവനന്തപുരം" },
    { en: "Kochi",              ml: "കൊച്ചി" },
    { en: "Kozhikode",          ml: "കോഴിക്കോട്" },
    { en: "Thrissur",           ml: "തൃശ്ശൂർ" },
    { en: "Wayanad",            ml: "വയനാട്" },
    { en: "Kannur",             ml: "കണ്ണൂർ" },
    { en: "Malappuram",         ml: "മലപ്പുറം" },
    { en: "Palakkad",           ml: "പാലക്കാട്" },
    { en: "Kottayam",           ml: "കോട്ടയം" },
    { en: "Idukki",             ml: "ഇടുക്കി" },
    { en: "Alappuzha",          ml: "ആലപ്പുഴ" },
    { en: "Kollam",             ml: "കൊല്ലം" },
    { en: "Kasaragod",          ml: "കാസർഗോഡ്" }
  ],
  sectionLabels: {
    latest:   { en: "Latest Kerala News",    ml: "ഏറ്റവും പുതിയ കേരള വാർത്ത" },
    longform: { en: "Long Form · In Depth",  ml: "ദീർഘ രൂപം · ആഴത്തിൽ" },
    podcasts: { en: "Podcasts",              ml: "പോഡ്കാസ്റ്റുകൾ" },
    more:     { en: "More Kerala Stories",   ml: "കൂടുതൽ കേരള വാർത്തകൾ" },
    alsoIn:   { en: "Also in Long Form",     ml: "ദീർഘ രൂപത്തിൽ കൂടുതൽ" }
  },
  signal: {
    title:   { en: "Kerala's voice. Funded by Keralites.", ml: "കേരളത്തിന്റെ ശബ്ദം. കേരളീയർ ഫണ്ട് ചെയ്യുന്നു." },
    sub:     { en: "No corporate board. No political master. Only the truth.", ml: "കോർപ്പറേറ്റ് ബോർഡ് ഇല്ല. രാഷ്ട്രീയ ആശ്രയം ഇല്ല. സത്യം മാത്രം." },
    f1n: "14", f1l: { en: "Districts Covered",    ml: "ജില്ലകൾ" },
    f2n: "1.8L+", f2l: { en: "Kerala Subscribers", ml: "കേരള വരിക്കാർ" },
    f3n: "0",  f3l: { en: "Govt Ad Revenue",      ml: "സർക്കാർ പരസ്യ വരുമാനം" },
    f4n: "9",  f4l: { en: "Years Independent",    ml: "വർഷം സ്വതന്ത്രം" }
  },
  subscribe: {
    tag:   { en: "Pay to keep Kerala's news free", ml: "കേരളത്തിന്റെ വാർത്ത സ്വതന്ത്രമാക്കാൻ പണം നൽകൂ" },
    title: { en: "Good Kerala journalism has a cost. You choose if it survives.", ml: "നല്ല കേരള പത്രപ്രവർത്തനത്തിന് ചെലവുണ്ട്. അത് നിലനിൽക്കണോ എന്ന് നിങ്ങൾ തീരുമാനിക്കൂ." },
    body:  { en: "Orbit9Media does not run government ads, does not take political money, and answers to no corporate board. Every rupee comes from Malayalees who believe in independent reporting.", ml: "ഓർബിറ്റ്9 മീഡിയ സർക്കാർ പരസ്യം നടത്തുന്നില്ല, രാഷ്ട്രീയ പണം സ്വീകരിക്കുന്നില്ല, കോർപ്പറേറ്റ് ബോർഡിനോട് ഉത്തരം പറയുന്നില്ല. ഓരോ രൂപയും സ്വതന്ത്ര പത്രപ്രവർത്തനത്തിൽ വിശ്വസിക്കുന്ന മലയാളികളിൽ നിന്ന് വരുന്നു." },
    btn1:  { en: "Subscribe — ₹299/month",   ml: "സബ്സ്ക്രൈബ് — ₹299/മാസം" },
    btn2:  { en: "Annual Plan — ₹2499/year", ml: "വാർഷിക പ്ലാൻ — ₹2499/വർഷം" }
  },
  newsletter: {
    title:       { en: "The Orbit9 Kerala Briefing — every morning in your inbox", ml: "ഓർബിറ്റ്9 കേരള ബ്രീഫിംഗ് — എല്ലാ ദിവസവും രാവിലെ നിങ്ങളുടെ ഇൻബോക്സിൽ" },
    body:        { en: "Three Kerala stories that matter, curated daily. In English and Malayalam. Always free.", ml: "പ്രധാനപ്പെട്ട മൂന്ന് കേരള വാർത്തകൾ, ദിവസവും ക്യൂറേറ്റ് ചെയ്തത്. ഇംഗ്ലീഷിലും മലയാളത്തിലും. എപ്പോഴും സൗജന്യം." },
    placeholder: { en: "your@email.com",     ml: "നിങ്ങളുടെ@ഇമെയിൽ.com" },
    btn:         { en: "Subscribe Free",     ml: "സൗജന്യ സബ്‌സ്ക്രിപ്ഷൻ" }
  },
  ticker: {
    en: [
      "Kerala Budget 2026-27: CM Satheesan proposes 'Invest Keralam' & ₹192cr for MSMEs",
      "Shigella outbreak: 110 cases in June — Kozhikode and Wayanad worst hit",
      "KSEB imposes power cuts 6 PM–midnight till June 30 due to El Niño shortage",
      "Southwest monsoon active over Kerala — orange alerts in multiple districts",
      "Kasaragod village office staff arrested for demanding ₹5,000 bribe",
      "Orbit9Media — Kerala's independent, reader-funded voice"
    ],
    ml: [
      "കേരള ബജറ്റ് 2026-27: CM സതീശൻ 'ഇൻവെസ്റ്റ് കേരളം' പ്രഖ്യാപിച്ചു, MSME-കൾക്ക് ₹192 കോടി",
      "ഷിഗെല്ല: ജൂണിൽ 110 കേസ് — കോഴിക്കോടും വയനാടും ഏറ്റവും ബാധിച്ചു",
      "KSEB: എൽ നിനോ കാരണം ജൂൺ 30 വരെ സന്ധ്യ 6 മുതൽ ലോഡ് ഷെഡ്ഡിംഗ്",
      "കേരളത്തിൽ തെക്കുപടിഞ്ഞാറൻ മൺസൂൺ സജീവം — ഒാറഞ്ച് അലേർട്ട്",
      "കാസർഗോഡ്: ₹5,000 കൈക്കൂലി ആവശ്യപ്പെട്ട വില്ലേജ് ഓഫീസ് ജീവനക്കാരൻ പിടിയിൽ",
      "ഓർബിറ്റ്9 മീഡിയ — കേരളത്തിന്റെ സ്വതന്ത്ര, വായനക്കാർ ഫണ്ട് ചെയ്യുന്ന ശബ്ദം"
    ]
  },
  footer: {
    tagline: { en: "Reader-supported independent media covering Kerala's 14 districts.", ml: "കേരളത്തിലെ 14 ജില്ലകൾ ഉൾക്കൊള്ളുന്ന വായനക്കാർ പിന്തുണയ്ക്കുന്ന സ്വതന്ത്ര മാധ്യമം." },
    keralaBadge: { en: "Voice of Kerala", ml: "കേരളത്തിന്റെ ശബ്ദം" },
    col1: { head: { en: "About", ml: "ഞങ്ങളെ കുറിച്ച്" }, links: [
      { en: "About Us",        ml: "ഞങ്ങളെ കുറിച്ച്" },
      { en: "Meet the Team",   ml: "ടീമിനെ കാണൂ" },
      { en: "Contact Us",      ml: "ഞങ്ങളെ ബന്ധപ്പെടൂ" },
      { en: "Privacy Policy",  ml: "സ്വകാര്യതാ നയം" },
      { en: "Terms of Service",ml: "സേവന നിബന്ധനകൾ" }
    ]},
    col2: { head: { en: "Subscription", ml: "സബ്‌സ്ക്രിപ്ഷൻ" }, links: [
      { en: "Subscribe",       ml: "സബ്‌സ്ക്രൈബ്" },
      { en: "Student Plan",    ml: "വിദ്യാർത്ഥി പ്ലാൻ" },
      { en: "Account Details", ml: "അക്കൗണ്ട് വിവരങ്ങൾ" },
      { en: "Subscriber FAQ",  ml: "സബ്സ്ക്രൈബർ FAQ" },
      { en: "Legal Fund",      ml: "നിയമ ഫണ്ട്" }
    ]},
    col3: { head: { en: "Explore", ml: "കൂടുതൽ" }, links: [
      { en: "മലയാളം",          ml: "English" },
      { en: "Newsletters",     ml: "ന്യൂസ്‌ലെറ്ററുകൾ" },
      { en: "Interviews",      ml: "അഭിമുഖങ്ങൾ" },
      { en: "Documentaries",   ml: "ഡോക്യുമെന്ററികൾ" },
      { en: "District Reports",ml: "ജില്ലാ റിപ്പോർട്ടുകൾ" }
    ]},
    copy: { en: "© 2026 Orbit9Media Private Limited. All Rights Reserved.", ml: "© 2026 ഓർബിറ്റ്9 മീഡിയ പ്രൈവറ്റ് ലിമിറ്റഡ്. എല്ലാ അവകാശങ്ങളും നിക്ഷിപ്തം." },
    tagline2: { en: "Independent · Kerala-Funded · Unfiltered", ml: "സ്വതന്ത്രം · കേരള-ഫണ്ടഡ് · അണ്‍ഫിൽട്ടേർഡ്" }
  }
};

module.exports = { articles, longform, podcasts, ui };
