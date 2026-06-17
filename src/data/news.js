const placeholderImg = (id, gradient) =>
  `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='450' viewBox='0 0 800 450'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23${gradient.split("-")[0]}'/%3E%3Cstop offset='100%25' style='stop-color:%23${gradient.split("-")[1]}'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='800' height='450' fill='url(%23g)'/%3E%3Ctext x='400' y='230' font-family='Inter,system-ui,sans-serif' font-size='28' font-weight='600' fill='white' text-anchor='middle'%3E${encodeURIComponent("Nova News")}%3C/text%3E%3Ctext x='400' y='270' font-family='Inter,system-ui,sans-serif' font-size='16' fill='rgba(255,255,255,0.7)' text-anchor='middle'%3E${encodeURIComponent(`Article #${id}`)}%3C/text%3E%3C/svg%3E`;

const now = new Date();
const daysAgo = (n) => {
  const d = new Date(now);
  d.setDate(d.getDate() - n);
  return d.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
};

const newsData = [
  {
    id: 1,
    title: "Next-Gen GPU Architectures Promise 4x Ray Tracing Performance",
    summary:
      "Major hardware manufacturers have unveiled next-generation GPU architectures that promise a fourfold increase in ray tracing performance while being more power-efficient than ever before.",
    content: `The landscape of computer graphics is set to undergo a seismic shift with the announcement of next-generation GPU architectures from leading manufacturers. These new designs promise not just incremental improvements but a quantum leap in rendering capabilities.

The new architectures feature redesigned streaming multiprocessors, enhanced ray tracing cores, and significantly improved tensor cores for AI-assisted rendering. Early benchmarks suggest that real-time ray tracing, once considered prohibitively expensive, will become the new standard for game development.

Key improvements include:
- 4x ray tracing performance improvement
- 60% better power efficiency
- AI-driven supersampling techniques
- Hardware-accelerated neural rendering
- Support for next-gen display technologies

Industry analysts predict that these advancements will enable game developers to create experiences that blur the line between real-time graphics and pre-rendered cinematic quality. The ripple effects will be felt across virtual reality, architectural visualization, and film production.`,
    category: "Game",
    image: placeholderImg(1, "6C63FF-3F3D9E"),
    author: "Nova Staff",
    date: daysAgo(1),
    comments: [
      {
        id: 1,
        author: "TechEnthusiast42",
        text: "Finally! Ray tracing that won't tank my framerate. Can't wait for the mid-range cards to hit the market.",
        date: daysAgo(1),
      },
      {
        id: 2,
        author: "PixelPusher",
        text: "The power efficiency improvements are what excite me most. My current rig sounds like a jet engine.",
        date: daysAgo(1),
      },
    ],
  },
  {
    id: 2,
    title: "Revolutionary AI Model Achieves Human-Level Reasoning in Scientific Research",
    summary:
      "A groundbreaking AI system has demonstrated the ability to formulate and test scientific hypotheses independently, marking a new era in automated research.",
    content: `In a landmark development that has sent ripples through both the scientific and technology communities, researchers have unveiled an AI system capable of conducting independent scientific research. The system, trained on the entire corpus of published scientific literature, can formulate hypotheses, design experiments, and interpret results without human intervention.

The implications are staggering. What traditionally takes years of graduate-level research can now be accomplished in days. The system has already made several novel contributions to materials science, identifying new compounds with desirable properties that had eluded human researchers.

"This doesn't replace scientists," notes Dr. Sarah Chen, lead researcher on the project. "It augments them. Think of it as a tireless research assistant that never forgets a paper it has read and can make connections across disciplines that a human specialist might miss."

The system's architecture combines large language models with specialized scientific reasoning modules, allowing it to understand and manipulate domain-specific concepts with unprecedented accuracy.`,
    category: "Tech",
    image: placeholderImg(2, "00BCD4-0097A7"),
    author: "Nova Staff",
    date: daysAgo(2),
    comments: [
      {
        id: 3,
        author: "FutureWatcher",
        text: "This is both exciting and terrifying. The potential for accelerating scientific discovery is immense, but we need robust ethical frameworks.",
        date: daysAgo(2),
      },
    ],
  },
  {
    id: 3,
    title: "NASA's James Webb Telescope Discovers Signs of Atmosphere on Rocky Exoplanet",
    summary:
      "The James Webb Space Telescope has detected compelling evidence of an atmosphere on a rocky exoplanet in the habitable zone of its star system.",
    content: `In a discovery that brings humanity closer to answering the age-old question of whether we are alone in the universe, the James Webb Space Telescope has detected telltale signs of an atmosphere on a rocky exoplanet located in the habitable zone of its star system.

The exoplanet, designated LHS 3844 b, is approximately 48.6 light-years from Earth. JWST's advanced spectrographic instruments detected molecular signatures consistent with a substantial atmosphere, potentially containing water vapor and carbon compounds.

"This is exactly what JWST was built for," says Dr. Amira Patel, an astrophysicist at NASA's Goddard Space Flight Center. "We're not just finding exoplanets anymore — we're characterizing their atmospheres and looking for the chemical signatures that could indicate habitable conditions."

The discovery represents a critical milestone in the search for extraterrestrial life. While the presence of an atmosphere doesn't guarantee life, it significantly increases the probability that the planet could support biological processes.`,
    category: "Science",
    image: placeholderImg(3, "1A237E-4A148C"),
    author: "Nova Staff",
    date: daysAgo(3),
    comments: [
      {
        id: 4,
        author: "StarGazer99",
        text: "48.6 light-years... so close yet so far. Imagine what we'll discover once we can send probes there.",
        date: daysAgo(3),
      },
      {
        id: 5,
        author: "CosmicDude",
        text: "JWST keeps delivering! Best investment in science ever made.",
        date: daysAgo(3),
      },
      {
        id: 6,
        author: "AstroBioNerd",
        text: "Carbon compounds AND water vapor? This is huge. Next step: find biosignatures.",
        date: daysAgo(3),
      },
    ],
  },
  {
    id: 4,
    title: "Open World RPG 'Eternal Kingdoms' Breaks Pre-Order Records",
    summary:
      "The highly anticipated open-world RPG has shattered pre-order records, with over 5 million copies reserved before its official launch date.",
    content: `The gaming world is abuzz as "Eternal Kingdoms," the ambitious open-world RPG from acclaimed developer Nightfall Studios, has shattered every pre-order record in the industry. With over 5 million pre-orders worldwide, the game has already recouped its development costs before a single retail copy has been sold.

The game promises a living, breathing world where player choices have permanent consequences. Unlike traditional RPGs where decisions might affect a single quest or dialogue tree, Eternal Kingdoms features a dynamic world system where player actions can reshape the political landscape, alter geographical features, and change the fate of entire civilizations.

"I've been making games for 25 years, and I've never seen anything quite like this," said Marcus Webb, creative director at Nightfall Studios. "The tech behind the world simulation is genuinely next-gen. Every NPC has goals, relationships, and a daily routine. The world doesn't wait for the player — it lives and breathes on its own."`,
    category: "Game",
    image: placeholderImg(4, "FF6B6B-C44569"),
    author: "Nova Staff",
    date: daysAgo(1),
    comments: [
      {
        id: 7,
        author: "RPG_Fanatic",
        text: "Pre-ordered the collector's edition. The 'world that lives without you' concept is what I've always wanted.",
        date: daysAgo(1),
      },
      {
        id: 8,
        author: "SkepticalGamer",
        text: "Let's wait for the reviews. We've been burned by hype before. Remember Cyberpunk?",
        date: daysAgo(1),
      },
      {
        id: 9,
        author: "NightfallStan",
        text: "Nightfall Studios has never missed. Their track record speaks for itself.",
        date: daysAgo(1),
      },
    ],
  },
  {
    id: 5,
    title: "Breakthrough in Quantum Computing: 1000-Qubit Processor Achieves Error Correction",
    summary:
      "Scientists have built a 1000-qubit quantum processor that successfully implements error correction, removing a major barrier to practical quantum computing.",
    content: `The dream of practical quantum computing has taken a massive leap forward with the announcement of a 1000-qubit processor that successfully implements real-time error correction. This breakthrough addresses what has long been considered the single biggest obstacle to building useful quantum computers.

Quantum bits, or qubits, are notoriously fragile. Environmental noise, temperature fluctuations, and electromagnetic interference can cause errors that render calculations useless. Until now, error correction schemes required so many physical qubits to encode a single logical qubit that scaling seemed nearly impossible.

The new architecture, developed by a collaboration between university researchers and industry partners, uses a novel surface code implementation that achieves error correction with far fewer physical qubits than previously thought necessary.

"This is the transistor moment for quantum computing," said Dr. James Morrison, the project's lead. "Just as the transistor turned theoretical computing into something that could fit on a desktop, this breakthrough turns quantum error correction from a theoretical possibility into a practical reality."`,
    category: "Tech",
    image: placeholderImg(5, "0D47A1-1565C0"),
    author: "Nova Staff",
    date: daysAgo(4),
    comments: [
      {
        id: 10,
        author: "QuantumLeap",
        text: "1000 qubits with error correction is insane. We're entering the quantum advantage era for real this time.",
        date: daysAgo(4),
      },
    ],
  },
  {
    id: 6,
    title: "Mind-Blowing Discovery: Octopuses Have Individual Personalities, Study Confirms",
    summary:
      "A comprehensive long-term study has confirmed what divers have suspected for decades — octopuses have distinct, stable personalities that persist over time.",
    content: `In a finding that challenges our understanding of invertebrate intelligence, a decade-long study has confirmed that octopuses possess distinct, stable individual personalities. The research, conducted at the Marine Biological Laboratory, tracked over 200 octopuses across their lifespans, documenting behavioral patterns and responses to various stimuli.

"We found consistent individual differences in boldness, exploration, and problem-solving approaches," explains Dr. Maria Santos, the study's lead author. "Some octopuses were cautious observers, others were bold explorers, and each individual maintained their behavioral style throughout their lives."

The study used standardized tests, including maze navigation, novel object interaction, and predatory response trials. Researchers found that individual personality traits were as distinct and stable as those observed in many mammals and birds. This level of behavioral complexity in an invertebrate challenges fundamental assumptions about the evolution of intelligence and personality.

"What's remarkable is that octopuses are solitary animals with relatively short lifespans," Santos adds. "They don't learn social behaviors from a group, yet they develop these rich, individual personalities."`,
    category: "Science",
    image: placeholderImg(6, "E65100-FF6F00"),
    author: "Nova Staff",
    date: daysAgo(5),
    comments: [
      {
        id: 11,
        author: "OceanExplorer",
        text: "I've been saying this for years! Every octopus I've encountered underwater had a completely different vibe.",
        date: daysAgo(5),
      },
      {
        id: 12,
        author: "MarineBioFan",
        text: "Octopuses are basically aliens on Earth. The more we study them, the more amazing they become.",
        date: daysAgo(5),
      },
    ],
  },
  {
    id: 7,
    title: "Indie Sensation 'Pixel Dreams' Wins Game of the Year at Global Awards",
    summary:
      "The charming indie title developed by a team of just three people has taken the gaming world by storm, winning the prestigious Game of the Year award.",
    content: `In a stunning upset that has become the talk of the gaming industry, "Pixel Dreams," a hand-crafted indie game developed by a team of just three people, has won the coveted Game of the Year award at the Global Game Awards. The game beat out blockbuster titles with hundred-million-dollar budgets and teams of hundreds.

"Pixel Dreams" is a meditative exploration game set in a world constructed entirely from hand-drawn pixel art. Players explore a dreamscape that shifts and transforms based on their emotional responses, measured through subtle gameplay choices rather than explicit inputs.

"We wanted to create something that felt personal," said co-developer Yuki Tanaka. "AAA games are amazing, but there's something special about a game where you can feel the human touch in every pixel."

The game's success has sparked renewed discussion about the state of the gaming industry and the value of small, personal projects. Sales have exceeded 2 million copies, making it one of the most successful indie games of all time.`,
    category: "Game",
    image: placeholderImg(7, "2E7D32-4CAF50"),
    author: "Nova Staff",
    date: daysAgo(2),
    comments: [
      {
        id: 13,
        author: "IndieLover",
        text: "This gives me so much hope for indie gaming. You don't need a billion-dollar budget to make something meaningful.",
        date: daysAgo(2),
      },
      {
        id: 14,
        author: "PixelArtFan",
        text: "The art style is absolutely gorgeous. Every frame is a wallpaper.",
        date: daysAgo(2),
      },
    ],
  },
  {
    id: 8,
    title: "CRISPR Gene Therapy Successfully Reverses Blindness in Clinical Trial",
    summary:
      "A groundbreaking clinical trial has used CRISPR gene editing to partially restore vision in patients with a rare form of inherited blindness.",
    content: `Medical science has achieved a historic milestone as a clinical trial using CRISPR gene editing technology has successfully restored vision in patients with Leber congenital amaurosis (LCA), a rare genetic condition that causes severe vision loss from birth.

The trial, conducted at multiple medical centers worldwide, involved injecting CRISPR-Cas9 components directly into the photoreceptor cells of patients' retinas. The therapy targeted a specific genetic mutation that prevents the production of a protein essential for vision.

Results have been remarkable. Within three months of treatment, 11 of the 14 participants showed measurable improvement in visual function. Several patients who were previously unable to perceive light can now navigate rooms independently and recognize faces.

"This isn't just about vision," says Dr. Robert Kim, principal investigator. "It's proof that CRISPR can work in living human patients to reverse genetic disease. The implications for treating thousands of other genetic conditions are profound."

The success has accelerated plans for similar trials targeting other genetic eye diseases and has renewed hope for CRISPR-based therapies for conditions ranging from sickle cell disease to muscular dystrophy.`,
    category: "Science",
    image: placeholderImg(8, "AD1457-880E4F"),
    author: "Nova Staff",
    date: daysAgo(3),
    comments: [
      {
        id: 15,
        author: "MedFuture",
        text: "CRISPR keeps delivering. Gene therapy is going to be the defining medical breakthrough of this decade.",
        date: daysAgo(3),
      },
      {
        id: 16,
        author: "HopefulPatient",
        text: "As someone with a genetic eye condition, this gives me so much hope. Science is amazing.",
        date: daysAgo(3),
      },
      {
        id: 17,
        author: "BioEthicistJane",
        text: "The results are incredible, but we must ensure equitable access. These therapies can't only be for the wealthy.",
        date: daysAgo(3),
      },
    ],
  },
  {
    id: 9,
    title: "Revolutionary Battery Technology Achieves 1000-Mile Range for EVs",
    summary:
      "A solid-state battery breakthrough could finally eliminate range anxiety, with a new design achieving an unprecedented 1000-mile range on a single charge.",
    content: `The electric vehicle industry may have just received its most transformative development yet: a solid-state battery technology that achieves a 1000-mile range on a single charge. The technology, developed by a startup spun out of MIT, uses a novel solid electrolyte material that enables much higher energy density than current lithium-ion batteries.

The implications for the automotive industry are profound. A 1000-mile range would mean most drivers would need to charge their vehicles only once a month. Even long-distance road trips could be completed with minimal charging stops. The battery also charges faster than current technology, reaching 80% capacity in just 15 minutes.

"We've solved the three biggest problems with EVs simultaneously," explains Dr. Emily Zhang, CEO of the startup. "Range, charging speed, and safety. Our solid electrolyte is non-flammable, so thermal runaway — the cause of battery fires — is physically impossible."

Production is expected to begin within 18 months, with the first vehicles equipped with the new batteries reaching consumers by late 2027. The technology has already attracted investment from every major automaker.`,
    category: "Tech",
    image: placeholderImg(9, "1B5E20-2E7D32"),
    author: "Nova Staff",
    date: daysAgo(1),
    comments: [
      {
        id: 18,
        author: "EV_Convert",
        text: "1000 miles? Sign me up. Range anxiety has been the only thing keeping me from going electric.",
        date: daysAgo(1),
      },
      {
        id: 19,
        author: "GreenTechAdvocate",
        text: "Non-flammable solid state is the key. This is what we've been waiting for.",
        date: daysAgo(1),
      },
    ],
  },
  {
    id: 10,
    title: "Streaming Wars: New Platform 'Aether' Offers Artists 90% Revenue Share",
    summary:
      "A music streaming startup is disrupting the industry by offering artists 90% of revenue, nine times what major platforms pay, with lossless audio quality.",
    content: `The music streaming landscape is facing a potential revolution with the launch of "Aether," a new platform that promises artists 90% of streaming revenue — roughly nine times what current major platforms pay. Combined with CD-quality lossless audio, the platform is positioning itself as the ethical choice for both artists and listeners.

Current streaming platforms pay artists fractions of a cent per stream, a model that has been widely criticized for making it nearly impossible for most musicians to earn a sustainable income from streaming. Aether's model flips this entirely, using a combination of higher subscription fees and efficient operations to deliver more money to creators.

"Music has value, and we believe the people who make it should be paid fairly," says Aether's founder, musician-turned-entrepreneur Alex Rivera. "We've built a platform that can be profitable while treating artists with respect."

Early adoption has been strong, with over 500,000 subscribers in the first week and major artists from across genres signing exclusive deals. The platform has sparked a broader industry conversation about the sustainability of current streaming economics and whether competitors will be forced to improve their rates.`,
    category: "Entertainment",
    image: placeholderImg(10, "6A1B9A-8E24AA"),
    author: "Nova Staff",
    date: daysAgo(2),
    comments: [
      {
        id: 20,
        author: "MusicLover_88",
        text: "Finally! A platform that actually respects artists. I signed up immediately.",
        date: daysAgo(2),
      },
      {
        id: 21,
        author: "IndieMusician",
        text: "90% revenue share is game-changing for independent artists. This could fundamentally change the music industry.",
        date: daysAgo(2),
      },
      {
        id: 22,
        author: "Audiophile101",
        text: "Lossless audio AND fair pay? Where do I sign up?",
        date: daysAgo(2),
      },
    ],
  },
  {
    id: 11,
    title: "Scientists Develop 'Smart Bandage' That Heals Chronic Wounds 3x Faster",
    summary:
      "A revolutionary smart bandage uses electrical stimulation and real-time monitoring to heal chronic wounds three times faster than conventional treatments.",
    content: `A team of biomedical engineers has developed a "smart bandage" that promises to transform the treatment of chronic wounds, a condition that affects millions of patients with diabetes and other circulatory disorders. The bandage combines flexible electronics with advanced biomaterials to actively promote healing.

The smart bandage works through two mechanisms: First, it delivers gentle electrical stimulation that promotes cell migration and tissue regeneration. Second, built-in sensors continuously monitor the wound's condition — tracking temperature, pH levels, and bacterial presence — and wirelessly transmit this data to healthcare providers.

In clinical trials, wounds treated with the smart bandage healed three times faster than those treated with standard care. The bandage also reduced infection rates by 60% and significantly decreased the need for antibiotics.

"Chronic wounds are a silent epidemic," says Dr. James Park, the study's lead author. "They affect millions of people, reduce quality of life tremendously, and cost healthcare systems billions. This technology could change all of that."

The bandage is expected to receive FDA approval within the next year and could be available to patients shortly after.`,
    category: "Science",
    image: placeholderImg(11, "004D40-00695C"),
    author: "Nova Staff",
    date: daysAgo(4),
    comments: [
      {
        id: 23,
        author: "MedTechWatcher",
        text: "Smart bandages are such an elegant solution. Monitoring + treatment in one package.",
        date: daysAgo(4),
      },
    ],
  },
  {
    id: 12,
    title: "Esports Giant 'Fusion' Wins World Championship in Historic 7-Hour Grand Final",
    summary:
      "In what is being called the greatest esports match of all time, Fusion defeated rivals Apex in a grueling 7-hour grand final that captivated millions of viewers worldwide.",
    content: `Esports history was written this weekend as Fusion Gaming, the legendary organization, claimed the World Championship title in a marathon grand final that lasted an unprecedented seven hours. The match against long-time rivals Apex Esports has been immediately hailed as the greatest competitive gaming event of all time.

The best-of-seven series went the distance, with each match showcasing incredible skill, strategic depth, and mental fortitude from both teams. Fusion, who were down 3-1 at one point, staged an incredible reverse sweep that had the live audience of 15,000 in the arena and millions watching online on the edge of their seats.

"We never stopped believing," said Fusion's captain, known as "Kraken," in the emotional post-match interview. "Even when we were down 3-1, we looked at each other and knew we could do this. This team is family."

The event broke multiple viewership records, with peak concurrent viewers reaching 6.8 million across all platforms, surpassing the previous record by nearly a million. The prize pool of $5 million also set a new esports record.`,
    category: "Game",
    image: placeholderImg(12, "B71C1C-D32F2F"),
    author: "Nova Staff",
    date: daysAgo(1),
    comments: [
      {
        id: 24,
        author: "EsportsFanatic",
        text: "That reverse sweep was absolutely legendary. I was screaming at my screen for the last three matches.",
        date: daysAgo(1),
      },
      {
        id: 25,
        author: "KrakenFan42",
        text: "KRAKEN IS THE GOAT! 7 hours of peak gameplay. This is why esports is the future of competition.",
        date: daysAgo(1),
      },
    ],
  },
  {
    id: 13,
    title: "Acclaimed Director Announces Revolutionary Film Shot Entirely on Smartphone",
    summary:
      "Oscar-winning director Sofia Velez is pushing cinematic boundaries with a feature film shot entirely on a modified smartphone, proving that great storytelling trumps expensive equipment.",
    content: `In a move that has the film industry buzzing, multiple Oscar-winning director Sofia Velez has announced her next project: a feature-length film shot entirely on a modified smartphone. The project, titled "Fragments," is described as an intimate character drama that explores the fragmented nature of modern memory and identity.

Velez, known for her visually stunning cinematography, has partnered with smartphone manufacturers to develop custom camera software and lens attachments that push mobile photography to its limits. Early test footage has reportedly impressed industry veterans, with some comparing the visual quality to traditional cinema cameras.

"This film is a statement," Velez explains. "We've reached a point where the technology in our pockets is powerful enough to tell any story. The limitations aren't technical anymore — they're creative. I want to prove that a great story, told with passion and skill, transcends the tools used to tell it."

The announcement has sparked debate among filmmakers about the democratization of cinema and whether smartphone filmmaking represents the future of independent film or merely a technical curiosity.`,
    category: "Entertainment",
    image: placeholderImg(13, "4A148C-7B1FA2"),
    author: "Nova Staff",
    date: daysAgo(3),
    comments: [
      {
        id: 26,
        author: "FilmBuff2025",
        text: "Sofia Velez could shoot a film on a potato and it would still be visually stunning. This is going to be incredible.",
        date: daysAgo(3),
      },
    ],
  },
  {
    id: 14,
    title: "Renewable Energy Milestone: Solar Power Now Cheaper Than Coal in Every Major Economy",
    summary:
      "The International Energy Agency has confirmed that solar photovoltaic power is now cheaper than coal in every major economy worldwide, a tipping point for renewable energy adoption.",
    content: `In a landmark moment for the global energy transition, the International Energy Agency (IEA) has confirmed that solar photovoltaic power has achieved grid parity with coal in every major economy worldwide. This economic tipping point, long predicted but now confirmed, is expected to accelerate the shift away from fossil fuels dramatically.

The cost of solar energy has fallen by 90% over the past decade, driven by manufacturing efficiencies, technological improvements, and economies of scale. Meanwhile, coal power has become more expensive in many regions due to carbon pricing, pollution control requirements, and supply chain disruptions.

"This is the moment the energy world has been waiting for," says Dr. Fatima Al-Rashid, the IEA's chief economist. "When the cleanest option is also the cheapest, the economic argument against renewable energy disappears entirely."

The announcement has major implications for global climate goals. With solar now the most economical option, analysts project that renewable energy adoption will accelerate beyond current forecasts, potentially keeping the Paris Agreement targets within reach.`,
    category: "Science",
    image: placeholderImg(14, "F9A825-F57F17"),
    author: "Nova Staff",
    date: daysAgo(2),
    comments: [
      {
        id: 27,
        author: "ClimateOptimist",
        text: "Finally, some good news! Economics and sustainability aligning is exactly what we needed.",
        date: daysAgo(2),
      },
      {
        id: 28,
        author: "GreenEnergyFan",
        text: "90% cost reduction in a decade. Innovation is incredible when we put our minds to something.",
        date: daysAgo(2),
      },
    ],
  },
  {
    id: 15,
    title: "Immersive Theatre Experience 'Void' Blends VR with Live Performance",
    summary:
      "A groundbreaking theatrical production is combining virtual reality headsets with live actors to create an immersive experience that blurs the line between digital and physical performance.",
    content: `The boundaries between theater, gaming, and virtual reality are dissolving with the premiere of "Void," an immersive theatrical experience that has critics reaching for new vocabulary to describe what they've witnessed. Audience members wear lightweight VR headsets that overlay digital environments onto physical sets, creating a hybrid reality where live actors interact with virtual elements in real-time.

The production, created by avant-garde theater company Liminal Spaces, tells the story of a scientist who discovers that our universe might be a simulation. As the narrative progresses, the line between the physical set and the virtual overlay becomes increasingly blurred, mirroring the protagonist's unraveling reality.

"Traditional theater asks you to suspend disbelief," explains director Amara Obi. "Void doesn't ask you to suspend anything — it makes you question what's real. When an actor hands you a virtual object that you can see but not touch, while simultaneously interacting with physical props, your brain doesn't know what to believe."

Tickets for the limited run sold out in minutes, with a second run already announced due to overwhelming demand.`,
    category: "Entertainment",
    image: placeholderImg(15, "01579B-0277BD"),
    author: "Nova Staff",
    date: daysAgo(5),
    comments: [
      {
        id: 29,
        author: "TheatreGeek",
        text: "I was lucky enough to see a preview and it's genuinely mind-bending. The future of performance art is here.",
        date: daysAgo(5),
      },
      {
        id: 30,
        author: "VR_Enthusiast",
        text: "Mixed reality performances are going to be huge. This is just the beginning.",
        date: daysAgo(5),
      },
    ],
  },
];

export const categories = [
  "All",
  "Game",
  "Tech",
  "Science",
  "Entertainment",
  "Sports",
];

export const getNewsByCategory = (category) => {
  if (category === "All") return newsData;
  return newsData.filter(
    (item) => item.category.toLowerCase() === category.toLowerCase()
  );
};

export const getNewsById = (id) => newsData.find((item) => item.id === Number(id));

export const addComment = (articleId, comment) => {
  const article = newsData.find((item) => item.id === Number(articleId));
  if (article) {
    article.comments.push({
      id: Date.now(),
      ...comment,
      date: new Date().toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      }),
    });
    return true;
  }
  return false;
};

export default newsData;
