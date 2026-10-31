/* =====================================================================
   PORTFOLIO CONTENT. Edit this file to change the text on the website.
   =====================================================================

   How to edit:
   - Change any text between quotes "like this". Keep the quotes and the
     comma at the end of the line.
   - To use a quote mark inside text, write it as \" (backslash, quote).
   - Images live in the "images" folder. To use a new image, put the file
     in that folder and write its name here, for example "images/my-shot.webp".
   - Save the file, then refresh the page in your browser to see the change.
   - Full guide: HOW-TO-EDIT.md in the main portfolio folder.
*/

window.SITE = {

  /* ---------- Basics ---------- */
  name: "Rahul Pranasseri",
  role: "Game Designer",
  engine: "Unreal Engine 5",
  // Small "open to work" line above the title. Set to "" to hide it.
  availability: "Open to game design and level design roles, UK and remote",
  intro: "I design levels, combat encounters and gameplay systems, then build them myself in Unreal Engine 5, from the first greybox to the final lighting pass.",

  // Your CV. Put the PDF in the website folder and write its file name here.
  cvFile: "Rahul_Pranasseri_CV.pdf",

  /* ---------- Your three strongest projects ----------
     These appear as the rooms on the level map at the top, and as the big
     featured projects in the Work section. Use the "slug" of a project from
     the projects list at the bottom of this file. */
  featured: ["the-broken-camp", "knight-fight", "gauntlet-mania"],
  mapNote: "My three strongest projects. Click a room to open the full design breakdown.",

  /* ---------- Reel at the top of the page ----------
     Slides play in this order. "project" is the slug of the project that opens when the
     slide is clicked (use "building" for Hospital Escape). */
  reel: [
    { src: "images/b4500d9d8890abf1.webp", label: "The Broken Camp: greybox", project: "the-broken-camp" },
    { src: "images/7f3613919b99f01b.webp", label: "The Broken Camp: final", project: "the-broken-camp" },
    { src: "images/99c7067a33d68eed.webp", label: "Knight Fight", project: "knight-fight" },
    { src: "images/059f8a61fc40e0ae.webp", label: "Gauntlet Mania", project: "gauntlet-mania" },
    { src: "images/d5d93b01f685b667.webp", label: "Nightclub Fight Arena", project: "nightclub-fight-arena" },
    { src: "images/b5e3e529ca00fb87.webp", label: "Boss Arena", project: "boss-arena" },
    { src: "images/4452a63e8562e986.webp", label: "Forgotten Temple", project: "forgotten-temple" },
    { src: "images/cfb7f3449e016684.webp", label: "Hospital Escape: in development", project: "building" },
  ],
  // The video linked under the reel.
  // Optional link under the reel, e.g. { label: "Watch gameplay", url: "https://..." }. null hides it.
  reelVideo: null,
  // The showreel video opened by the "Watch showreel" button. To use a new video, put the .mp4
  // in the website folder and change "file". Delete these lines to hide the button.
  showreel: { file: "showreel.mp4", poster: "images/showreel-poster.jpg", label: "Watch showreel" },

  /* ---------- Currently building ---------- */
  building: {
    title: "Hospital Escape",
    status: "In development, solo project",
    pitch: "A goofy online co-op game for up to 4 friends.",
    details: [
      { label: "Role", value: "Solo developer" },
      { label: "Engine", value: "Unreal Engine 5.7, C++ and Blueprints" },
      { label: "Genre", value: "Co-op comedy, physics party game" },
    ],
    cover: { src: "images/cfb7f3449e016684.webp", alt: "Hospital Escape cover art: two bean patients in hospital gowns escaping" },
    // Screenshots: "src" is the full image, "thumb" is the small version shown on the page.
    shots: [
      { src: "images/02e381b7a25785e0.webp", thumb: "images/02e381b7a25785e0-gthumb.webp", alt: "Hospital Escape news intro scene" },
      { src: "images/048152f700fe27c6.webp", thumb: "images/048152f700fe27c6-gthumb.webp", alt: "The Head Nurse spotting players on the hospital roof" },
      { src: "images/3fd29157b8703bad.webp", thumb: "images/3fd29157b8703bad-gthumb.webp", alt: "Players bonking the chef in the hospital kitchen" },
    ],
  },

  /* ---------- About ---------- */
  portrait: "images/19e176633ca57739.webp",
  about: [
    "I'm a game designer based in Stoke-on-Trent, UK. I work in Unreal Engine 5, where I design levels, combat encounters and gameplay systems, build them with Blueprints, and optimise them so they run well.",
    "I graduated from Staffordshire University in September 2026 with an MSc in Computer Games Design (Merit). I found game development while studying for a B.Tech in Computer Science with Big Data Analytics in India, then taught myself Unreal Engine through personal projects before working at O-Sens Studio and freelancing for clients around the world.",
    "I'm looking for a full-time game design or level design role, and I'm open to freelance work.",
  ],
  stats: [
    { num: "15+", label: "projects completed" },
    { num: "4", label: "years making games" },
    { num: "5", label: "games released" },
    { num: "5+", label: "studios and clients" },
  ],

  /* ---------- Experience and education (newest first) ---------- */
  experience: [
    { date: "2025 - 2026", role: "MSc Computer Games Design, Merit", org: "Staffordshire University, UK",
      desc: "Graduated September 2026. Postgraduate study at Staffordshire University Games Institute in game design, prototyping, gameplay systems and professional practice.",
      // Optional: a list shown as small tags under this entry. Delete the line if not needed.
      modules: ["Advanced Game Design and Research", "Advanced Prototyping", "Gameplay System Design", "Game Feel and Polish",
                "Game Master Project", "Project Management and Research Methods", "Professional Practice and Entrepreneurship"] },
    { date: "Aug 2025", role: "Paid research study", org: "Meta",
      desc: "Built a working game prototype in Roblox Studio with AI tools inside a two-hour research task, compared it with Unreal Engine for rapid prototyping, and gave structured feedback for Meta's research on AI-assisted game development." },
    { date: "Aug 2024 - Sep 2025", role: "Level Designer, Unreal Engine Game Developer", org: "O-Sens Studio",
      desc: "Designed and built UE5 levels for the studio's game projects, focused on gameplay flow and pacing: boss fight arenas, hidden caves and temple courtyards. Built dynamic environment loading and optimised large open-world scenes." },
    { date: "Apr 2023 - present", role: "Freelance Game Developer", org: "Self-employed",
      desc: "Level design, environment art, combat and AI systems in Unreal Engine 5 for international clients, including Urban Trap Safehouse, an Unreal short film with three large cinematic levels, and the released fan game The Boys: Ascent." },
    { date: "2020 - 2024", role: "B.Tech Computer Science with Big Data Visualization", org: "SRM IST Ramapuram, India",
      desc: "Graduated with an 8.5 CGPA. Foundation in computer science, programming, data analytics and research." },
  ],

  /* ---------- Skills ---------- */
  skills: [
    { group: "Design", items: ["Level design", "Gameplay and AI design", "Combat system design", "Mission design", "Environment art", "Playtesting and iteration"] },
    { group: "Unreal Engine", items: ["Unreal Engine 5", "Blueprints", "AI Behavior Trees", "Niagara VFX", "Sequencer", "Data Layers and Level Streaming", "Performance optimisation"] },
    { group: "Tools", items: ["Blender (basic modelling)", "Roblox Studio", "Quixel Megascans", "KitBash3D", "Perforce", "Git and GitHub"] },
    { group: "Languages", items: ["English", "Hindi", "Malayalam", "Tamil"] },
  ],

  /* ---------- Contact ---------- */
  contact: {
    heading: "Let's build something together",
    text: "Hiring for a design role, or have a project in mind? Send me a message and I'll reply by email.",
    email: "rahulravimenon@gmail.com",
    phones: [
      { number: "+44 7799 258235", note: "UK" },
      { number: "+91 7012568247", note: "India" },
    ],
    location: "Stoke-on-Trent, UK. Open to remote.",
    lookingFor: "Full-time game design and level design roles, plus freelance work",
    linkedin: "https://www.linkedin.com/in/rahuldx/",
    itch: "https://rahulachu.itch.io/",
    // Web3Forms access key. Contact form messages are emailed to the address
    // you signed up to Web3Forms with. This key is meant to be public.
    formKey: "f29b686e-8246-4a9c-976f-f3034d3060b0",
  },

  /* ---------- Projects ----------
     Each project between { and } is one card. Fields:
     slug       short id used in links, lowercase with dashes (must be unique)
     title      project name
     kind       "Level design", "Gameplay" or "Environment" (used by the filter buttons)
     year       shown on the card; can be empty ""
     context    where it was made, e.g. "University team project"
     short      a few words shown on the level map rooms
     badge      optional tag on the card: "Released", "Playable" or ""
     role       your role on the project
     timeline / genre   shown in the case study
     desc       2 to 3 sentences shown on the card
     overview, whatIDid, challenges, lessons   case study text.
     designNote optional problem / change / result from playtesting, shown on featured projects
     breakdown  optional level breakdown: a map image with numbered beats (x and y are % positions on the map)
                In whatIDid, each sentence becomes one bullet point.
     cover      main image
     process    optional "greybox to final" images, each with a label
     gallery    all images shown in the case study
     tags       short skill tags
     video      YouTube link or ""
     videoLabel optional button text for the video link (default "Watch gameplay")
     poster     optional picture shown behind the "Play video" button (defaults to the cover)
     play       link to play the game or ""
     playLabel  button text for the play link
     designDoc  link to the design document or ""
     moreLinks  optional extra links, e.g. [{ "label": "Watch the greybox", "url": "https://..." }]
  */
  projects: [
    {
      "slug": "the-broken-camp",
      "title": "The Broken Camp",
      "kind": "Level design",
      "year": "2026",
      "context": "University final year project, solo",
      "short": "Military third-person shooter",
      "badge": "",
      "role": "Game Designer, Gameplay Programmer & Level Designer",
      "timeline": "University Final Year Project (2026)",
      "genre": "Single-Player Military Third-Person Shooter",
      "desc": "Third-person military shooter built solo in Unreal Engine 5.7. Level design centered on player guidance through environmental storytelling, layered combat encounters, and a fully greyboxed-to-final pipeline, built around gameplay systems designed first.",
      "overview": "This is my Final Year Project and the largest Unreal Engine project I have worked on so far. The goal was to develop a third-person shooter that brings together gameplay programming, level design, AI, mission systems, and environment production into a complete playable experience. The project is now complete, shaped by structured playtesting and multiple rounds of iteration on gameplay, AI behaviour, and level design. Final set dressing, lighting, and optimisation are complete, taking the project from greybox through to a fully realised playable environment",
      "whatIDid": "Designed the level from concept art to final playable environment. Created the initial blockout and refined gameplay flow. Built gameplay systems using Blueprints. Developed enemy AI and combat encounters. Refined enemy placement, combat pacing, and player progression. Built the environment using Fab Marketplace assets. Created in-game cinematics using Unreal Sequencer. Tested, debugged and optimised the project for the final build.",
      "challenges": "One of the biggest challenges was refining the enemy AI while new gameplay features were still being added. I spent a lot of time testing combat encounters, adjusting enemy placement, patrol routes, and behaviour to improve the overall flow of each mission. As the project grew, debugging Blueprint systems and fixing issues between interconnected mechanics became a regular part of development, helping me build a more stable and organised project.",
      "lessons": "This project gave me a much better understanding of how gameplay systems, AI, level design, and player progression work together. It also improved my Blueprint workflow, problem-solving, and level iteration process. During development, I also learned the fundamentals of Unreal Engine Sequencer, which helped me present gameplay moments and support the overall pacing of the project.",
    "designNote": {
      "problem": "Combat encounters needed better mission flow while new gameplay features were still being added.",
      "change": "Tested each encounter and adjusted enemy placement, patrol routes and AI behaviour.",
      "result": "Smoother flow through each mission, and a more stable, organised project by the final build."
    },
    "breakdown": {
      "image": "images/fa3f06e6bc4c4280.webp",
      "intro": "Planned on paper before the greybox. The mission moves from stealth to combat to escape, and the player's route is colour-coded by how they move through each phase.",
      "phases": [
        {
          "name": "Recon and infiltration",
          "mode": "Stealth",
          "colour": "green",
          "beats": [
            {
              "mark": "1",
              "x": 5.3,
              "y": 51.4,
              "title": "Reach the observation ridge",
              "text": "Scout the base with binoculars before committing, using the abandoned hut as cover on the way in."
            },
            {
              "mark": "2",
              "x": 40.4,
              "y": 70.9,
              "title": "Follow the truck, then sneak in behind it",
              "text": "The supply truck is the way past the checkpoint: the player tails it and slips into the base behind it."
            }
          ]
        },
        {
          "name": "Sabotage and assault",
          "mode": "Combat",
          "colour": "red",
          "beats": [
            {
              "mark": "3",
              "x": 37.3,
              "y": 11.9,
              "title": "Destroy the communications centre",
              "text": "The first loud objective, next to the garage, where the mission switches from stealth to combat."
            },
            {
              "mark": "★",
              "x": 48.4,
              "y": 29.5,
              "title": "Obtain the access card",
              "text": "A key objective inside the first camp that sets up the push deeper into the base."
            },
            {
              "mark": "4",
              "x": 56.3,
              "y": 19.4,
              "title": "Infiltrate the next camp",
              "text": "Through the gate and across the central courtyard into the inner camp."
            }
          ]
        },
        {
          "name": "Extraction and escape",
          "mode": "Combat",
          "colour": "blue",
          "beats": [
            {
              "mark": "★",
              "x": 76.8,
              "y": 32.6,
              "title": "Gather intel",
              "text": "Collected from the officer quarters."
            },
            {
              "mark": "5",
              "x": 85.5,
              "y": 44.6,
              "title": "Plant the explosive",
              "text": "At the power station, deep in the inner camp."
            },
            {
              "mark": "6",
              "x": 87.3,
              "y": 54.3,
              "title": "Board the helicopter and escape",
              "text": "The extraction path leads to the helipad to finish the mission."
            }
          ]
        }
      ],
      "notes": [
        "Multiple patrol routes inside the base.",
        "Searchlights and sniper towers raise the stealth difficulty."
      ]
    },
      "cover": "images/aee7f4ea353fdfc4.webp",
      "process": [
        {
          "src": "images/fa3f06e6bc4c4280.webp",
          "label": "Paper map"
        },
        {
          "src": "images/b4500d9d8890abf1.webp",
          "label": "Greybox"
        },
        {
          "src": "images/7f3613919b99f01b.webp",
          "label": "Final"
        }
      ],
      "gallery": [
        "images/aee7f4ea353fdfc4.webp",
        "images/ece6e8e1d27394e4.webp",
        "images/b4500d9d8890abf1.webp",
        "images/4368d2b38889896c.webp",
        "images/c447d87141b5f5d3.webp",
        "images/4dfbfdf9ce480a99.webp",
        "images/fa3f06e6bc4c4280.webp",
        "images/7f3613919b99f01b.webp",
        "images/d7bf1b0ed6f8fa46.webp"
      ],
      "tags": [
        "UE5",
        "Blueprints",
        "Level design",
        "Gameplay & AI design",
        "Playtesting"
      ],
      "video": "https://youtu.be/wEFuCUPaQoA",
    "videoLabel": "Watch final set-dressed level",
    "moreLinks": [{ "label": "Watch blockout level", "url": "https://youtu.be/48gaFhpSrlk" }],
      "play": "",
      "playLabel": "",
      "designDoc": "https://drive.google.com/file/d/1M7mZlCA4g2_XOpMwkfhBuRxLg9aw2W10/view?usp=sharing"
    },
    {
      "slug": "knight-fight",
      "title": "Knight Fight",
      "kind": "Level design",
      "year": "2026",
      "context": "University team project",
      "short": "Multiplayer physics brawler",
      "badge": "",
      "role": "Level Designer & Gameplay Programmer (Collaborative University Project)",
      "timeline": "March 2026 to August 2026",
      "genre": "Local Multiplayer Physics-Based Party Brawler",
      "desc": "Knight Fight is a collaborative university project built in Unreal Engine 5. Players battle as ghostly knights inside a Victorian mansion, using traps, health pickups, and ragdoll physics to knock each other out. I worked mainly on the level design, gameplay systems, lighting, and environment setup.",
      "overview": "Knight Fight is a local multiplayer party game developed as a collaborative university project in Unreal Engine 5. Players take control of ghosts trapped inside knight armour and battle inside a Victorian mansion using environmental traps, ragdoll physics, and health pickups.\n\nInspired by games like Gang Beasts and BombSquad, the focus was on creating short, chaotic matches where the environment is just as dangerous as the other players.",
      "whatIDid": "Designed the Victorian mansion level from the initial blockout to the final gameplay layout.\nImplemented gameplay systems using Unreal Engine Blueprints.\nDeveloped the ragdoll system and integrated it with gameplay interactions.\nBuilt environmental hazards including flame traps, spike traps, oil hazards, and health pickups.\nDesigned and implemented the dynamic local multiplayer camera.\nCompleted level set dressing using assets created by the 3D artist.\nCreated the final lighting and post-processing to establish the Victorian atmosphere.\nBalanced player flow, trap placement, and gameplay spaces through iteration and testing.",
      "challenges": "One of the biggest challenges was creating a level that stayed fun while supporting four-player local multiplayer. The camera, trap placement, and health pickup locations went through several iterations to keep the gameplay readable without reducing the chaotic feel.\n\nAnother challenge was working with limited concept art during development. Since there were very few visual sketches available, we relied on Victorian mansion references, gameplay references, and existing asset packs to guide the level design and environment.",
      "lessons": "This was my first collaborative university project, and it gave me a much better understanding of how different disciplines come together during game development. Working closely with artists and programmers taught me the importance of communication, planning, and iteration. It also helped me improve my skills in level design, Blueprint gameplay systems, lighting, set dressing, and designing spaces around multiplayer gameplay.",
    "designNote": {
      "problem": "Four-player local matches had to stay readable without losing their chaotic feel.",
      "change": "Iterated the shared camera, trap placement and health pickup locations several times through testing.",
      "result": "Short, chaotic matches where players can still follow the action and the mansion itself is a threat."
    },
      "cover": "images/99c7067a33d68eed-thumb.webp",
      "process": [
        {
          "src": "images/ffd6b82eb516e93a.webp",
          "label": "Design document"
        },
        {
          "src": "images/b4cc3785f45ecf1a.webp",
          "label": "Greybox"
        },
        {
          "src": "images/99c7067a33d68eed.webp",
          "label": "Final"
        }
      ],
      "gallery": [
        "images/99c7067a33d68eed.webp",
        "images/ffd6b82eb516e93a.webp",
        "images/b4cc3785f45ecf1a.webp",
        "images/e2075c5a96c11c66.webp",
        "images/d2813e17f63e5aa1.webp",
        "images/03350f9beb18c7e2.webp",
        "images/edbe82678a39964a.webp",
        "images/d1e4841d26204cbe.webp"
      ],
      "tags": [
        "UE5",
        "Blueprints",
        "Level design",
        "Collaborative project",
        "Multiplayer"
      ],
      "video": "https://www.youtube.com/watch?v=7PmD-EkIP1g",
      "play": "https://drive.google.com/drive/folders/1vIRiAz5o-boYNEr3eGu2QlOa53WmORs-?usp=sharing",
      "playLabel": "Play the game",
      "designDoc": "https://drive.google.com/file/d/1fCGvJC7kKqUeCw4_FnhUzFBttA4efcAV/view?usp=drive_link"
    },
    {
      "slug": "nightclub-fight-arena",
      "title": "Nightclub Fight Arena",
      "kind": "Level design",
      "year": "2025",
      "context": "Freelance, studio client",
      "short": "Combat arena for a client",
      "badge": "",
      "role": "Level Designer, Environment Artist",
      "timeline": "2025",
      "genre": "Action • Combat Arena",
      "desc": "A freelance Unreal Engine 5 project created for a studio client. The project involved designing and building a nightclub combat arena from blockout to the final environment using Fab assets. My responsibilities included level layout, environment art, set dressing, lighting, optimisation, and polishing the scene to create a visually engaging and gameplay-ready space.",
      "overview": "A freelance environment build for a studio client: a nightclub designed to double as a close-quarters combat arena. I took it from blockout through to final set dressing using Fab Marketplace assets, handling level layout, lighting, and optimisation while working closely with the client throughout.",
      "whatIDid": "Created the initial blockout for the nightclub layout. Built the environment using Fab Marketplace assets. Completed the final set dressing with furniture, stage props, lighting fixtures, and environmental details. Developed the lighting to create a nightclub atmosphere while keeping the level readable for gameplay. Optimised the environment to maintain good performance. Refined the level through regular feedback from the client.",
      "challenges": "Making it read as a real nightclub while still functioning as a combat space was the main tension. Too much dressing and player movement suffers, too little and it feels empty. Lighting took the most iteration: testing colours, intensities, and placement until it matched the atmosphere the client wanted without losing readability in the areas that mattered for gameplay.",
      "lessons": "Sharpened my blockout-to-final workflow and, more importantly, my ability to balance level design against lighting and performance rather than treating them separately. Working directly with the client throughout also made me quicker at adapting to feedback mid-build instead of waiting until a review milestone.",
      "cover": "images/49a2899d354bf535-thumb.webp",
      "process": [
        {
          "src": "images/903fbbc5d7a7341c.webp",
          "label": "Greybox"
        },
        {
          "src": "images/95b8e53190e042d4.webp",
          "label": "Blockout zones"
        },
        {
          "src": "images/d5d93b01f685b667.webp",
          "label": "Final"
        }
      ],
      "gallery": [
        "images/905cb2f20ad69f56.webp",
        "images/95b8e53190e042d4.webp",
        "images/52f838055c8f8e1e.webp",
        "images/903fbbc5d7a7341c.webp",
        "images/01abc5f4a4668584.webp",
        "images/991a364367cff24e.webp",
        "images/b2715274055f4c64.webp",
        "images/436eeaac7260277d.webp",
        "images/38a95abe94a56639.webp",
        "images/d5d93b01f685b667.webp",
        "images/83a3bf57c5747592.webp",
        "images/1e04d2675358b39e.webp"
      ],
      "tags": [
        "UE5",
        "Modular assets",
        "Level design",
        "Optimization"
      ],
      "video": "",
      "play": "",
      "playLabel": "",
      "designDoc": ""
    },
    {
      "slug": "the-boys-ascent",
      "title": "The Boys: Ascent",
      "kind": "Gameplay",
      "year": "2024",
      "context": "Freelance, released fan game",
      "short": "Open-world action",
      "badge": "Released",
      "role": "Gameplay Programmer, Level Designer",
      "timeline": "2024",
      "genre": "Open-World Action",
      "desc": "The Boys: Ascent was a freelance Unreal Engine 5 project inspired by The Boys. I joined the project to develop Homelander's gameplay systems, optimize the City Sample map, and help with level design where needed. The project has since been completed and shipped.",
      "overview": "The Boys: Ascent is a freelance Unreal Engine 5 project inspired by The Boys. I joined the project to develop gameplay systems for Homelander, optimise the City Sample map, and support level design where needed. The project gave me the opportunity to work on a large open-world environment while collaborating directly with an international client. It also became my first shipped freelance project, giving me valuable experience working within a real production pipeline.",
      "whatIDid": "Developed Homelander's gameplay systems using Unreal Engine Blueprints. Implemented and refined character mechanics based on client feedback. Optimised the City Sample environment to improve performance. Assisted with level design and environment changes where required. Identified and fixed Blueprint issues throughout development. Worked directly with the client, delivering regular updates and implementing requested changes.",
      "challenges": "The biggest challenge was working with the City Sample project. Its large scale and high asset density affected performance, especially while adding new gameplay features. I spent time profiling the level, removing unnecessary overhead, and optimising the environment so gameplay remained smooth without changing the overall look of the city. Another challenge was developing gameplay systems that matched the client's vision. Regular feedback sessions helped refine the mechanics and improve the overall experience before delivery.",
      "lessons": "This project gave me my first experience delivering a freelance Unreal Engine project from start to finish. I became more confident building Blueprint gameplay systems, working with large environments, and communicating with a client throughout development. It also reinforced the importance of optimisation and testing when working on open-world projects.",
      "cover": "images/272716948e2482ed-thumb.webp",
    "poster": "images/9166ee3a76f6a685.webp",
      "process": [],
      "gallery": [
        "images/9166ee3a76f6a685.webp",
        "images/d2e244972f718737.webp",
        "images/43180840cf8cd5d2.webp"
      ],
      "tags": [
        "UE5",
        "Blueprints",
        "Level design",
        "Optimization"
      ],
      "video": "https://youtu.be/p0xtXNiSvQM",
      "play": "https://discord.com/invite/YX2bxU83St",
      "playLabel": "Join on Discord",
      "designDoc": ""
    },
    {
      "slug": "echoes-beyond-the-hill",
      "title": "Echoes Beyond The Hill",
      "kind": "Gameplay",
      "year": "",
      "context": "University project",
      "short": "2D platformer",
      "badge": "Playable",
      "role": "Game Designer, Level Designer, Game Programmer",
      "timeline": "4 weeks",
      "genre": "2D Platformer",
      "desc": "A 2D platformer developed in Unreal Engine 5, focusing on level design, Blueprint gameplay systems, and creating a polished gameplay experience.",
      "overview": "Echoes Beyond The Hill is my first 2D game, created in Unreal Engine 5 as a personal project. I wanted to learn the complete workflow of developing a 2D platformer because I have ideas for a future 2D game of my own. Rather than jumping straight into that project, I used this as an opportunity to understand 2D gameplay, level design, Blueprint systems, and player progression. I also built the environment using modular assets so they could be reused in future projects.",
      "whatIDid": "Designed and built the game levels. Developed gameplay systems using Blueprints. Created platforming sections and puzzle mechanics. Implemented player interactions and checkpoints. Tested and refined the gameplay based on feedback. Polished the game before the final submission.",
      "challenges": "Coming from a 3D background, learning how to design for a 2D platformer was a completely different experience. I had to think more carefully about jump distances, player movement, enemy placement, and how each level introduced new mechanics. I also designed the environment using modular pieces so I could quickly make changes and reuse assets without rebuilding sections from scratch.",
      "lessons": "This project gave me a solid understanding of 2D game development and helped me become more confident designing gameplay in a different perspective. It also reinforced the value of planning modular assets early in development, making future levels easier to build and iterate on. Most importantly, it gave me the knowledge and confidence to start developing the 2D game idea I originally wanted to create.",
      "cover": "images/b596ae52159b3e0a-thumb.webp",
      "process": [],
      "gallery": [
        "images/b596ae52159b3e0a.webp",
        "images/0512519f9b096aeb.webp",
        "images/76eb4f6e8e328424.webp"
      ],
      "tags": [
        "UE5",
        "Blueprints",
        "Pixel art",
        "Boss fight"
      ],
      "video": "https://youtu.be/taXWiXmqguA",
      "play": "https://rahulachu.itch.io/echoes-beyond-the-hills",
      "playLabel": "Play the game",
      "designDoc": "https://drive.google.com/file/d/1yRi19QjF9QFwVGNE5jAUBu75-UfTt5vb/view?usp=sharing"
    },
    {
      "slug": "gauntlet-mania",
      "title": "Gauntlet Mania",
      "kind": "Gameplay",
      "year": "",
      "context": "University project",
      "short": "Arena combat prototype",
      "badge": "Playable",
      "role": "Game Designer, Level Designer, Game Programmer",
      "timeline": "8 weeks",
      "genre": "Arena Combat",
      "desc": "A fast-paced arena combat prototype built in Unreal Engine 5 using Blueprints. The project focuses on directional combat, cinematic finishers, dynamic camera work, and layered visual and audio feedback to create satisfying and responsive gameplay.",
      "overview": "Gauntlet Mania is an arena combat prototype developed in Unreal Engine 5 using Blueprints for the Game Feel & Polish module. The project explores how layered gameplay feedback can improve the feel of combat. Players survive a 180-second arena challenge while fighting enemies with directional attacks, cinematic finishers, and responsive visual, audio, and camera feedback.",
      "whatIDid": "Designed and implemented the combat system using Blueprints. Created directional punch and kick attacks. Developed the enemy spawning system and random attack behaviour. Implemented cinematic finishers with dynamic camera transitions. Added combat feedback, including Niagara effects, hit stop, camera shake, and sound effects. Built the Start Menu, Game Over screen, timer, score system, and overall game flow. Dressed the arena level using modular assets and added a crowd system to improve the atmosphere.",
      "challenges": "One of the biggest challenges was making the combat feel responsive. Although the mechanics worked, the attacks initially lacked impact. To improve this, I layered different feedback systems such as hit stop, camera shake, Niagara effects, and sound effects. I also adjusted the timing of each element through playtesting until the combat felt more responsive and consistent.",
      "lessons": "This project helped me understand how much small details contribute to the overall player experience. I gained practical experience building gameplay systems in Blueprints, balancing combat through iteration, and using visual and audio feedback to support gameplay rather than simply decorate it. It also reinforced the importance of regular playtesting and making small improvements throughout development instead of waiting until the end.",
    "designNote": {
      "problem": "The attacks worked, but they lacked impact.",
      "change": "Layered hit stop, camera shake, Niagara effects and sound, then tuned the timing of each through playtesting.",
      "result": "Combat that feels more responsive and consistent."
    },
      "cover": "images/059f8a61fc40e0ae-thumb.webp",
      "process": [],
      "gallery": [
        "images/059f8a61fc40e0ae.webp",
        "images/e4b7ce36646cc394.webp",
        "images/6aac04c69a5f27af.webp"
      ],
      "tags": [
        "UE5",
        "Blueprints",
        "Combat system",
        "Game feel"
      ],
      "video": "https://youtu.be/faKVibi0Jt0",
    "moreLinks": [{ "label": "Combat system prototype", "url": "https://youtu.be/awSc4D_u0qY" }],
      "play": "https://rahulachu.itch.io/gauntlet-mania",
      "playLabel": "Play the game",
      "designDoc": "https://drive.google.com/file/d/1HmBPqGsw4p4Q1MX0ti97VWWzyzSnVYnp/view?usp=sharing"
    },
    {
      "slug": "boss-arena",
      "title": "Boss Arena",
      "kind": "Level design",
      "year": "2024",
      "context": "O-Sens Studio",
      "short": "Boss encounter space",
      "badge": "",
      "role": "Level Designer, Environment Artist",
      "timeline": "2024",
      "genre": "Action • Boss Arena",
      "desc": "A boss combat arena built for an O-Sens Studio game. I took it from blockout to final environment with Quixel Megascans, shaping the space around the encounter while matching the game's visual style.",
      "overview": "Built for a game at O-Sens Studio. I took a boss combat arena from blockout to final environment using Quixel Megascans, matching the game's visual style while leaving enough room for the team's gameplay systems to actually work.\n\nI owned the level layout, set dressing, and overall composition. The arena went through several rounds of rework as gameplay requirements shifted, which was my first real taste of iterating inside an established studio pipeline rather than on my own.",
      "whatIDid": "Created the initial blockout for the boss arena.\nBuilt the environment using Quixel Megascans and modular assets.\nCompleted the final set dressing with rocks, ruins, vegetation, and environmental props.\nRefined the arena layout based on gameplay and team feedback.\nWorked with the team to ensure the environment matched the project's visual direction.\nOrganised the level to make future changes and iterations easier.",
      "challenges": "The tension was between dressing the arena to feel finished and keeping it open enough for combat to actually work. Every asset added risked eating into space the gameplay systems needed. Getting the balance right took several passes of asset placement and composition before the layout held up.",
      "lessons": "First real experience taking a level from blockout to finished environment inside a professional studio, and it built real confidence with composition, set dressing, and Quixel Megascans. Mostly, though, it taught me how much a level can change mid-development, and staying adaptable to designer feedback mattered more than getting it right the first time.",
      "cover": "images/b5e3e529ca00fb87-thumb.webp",
      "process": [],
      "gallery": [
        "images/b5e3e529ca00fb87.webp",
        "images/9dc9b08bcc0e9823.webp",
        "images/4f478bd3bff6d37b.webp"
      ],
      "tags": [
        "UE5",
        "Level design",
        "Environment art"
      ],
      "video": "https://youtu.be/XD4LTOiFoJY",
      "play": "",
      "playLabel": "",
      "designDoc": ""
    },
    {
      "slug": "european-town",
      "title": "European Town",
      "kind": "Environment",
      "year": "2024",
      "context": "Freelance, cinematic client project",
      "short": "Cinematic environment",
      "badge": "",
      "role": "Level Designer, Environment Artist",
      "timeline": "2024",
      "genre": "Cinematic / Short Film",
      "desc": "A realistic European riverside town built freelance for a Canadian client's cinematic short film, taken from blockout to final set dressing using the client's Fab Marketplace assets, with scenes prepared specifically for camera.",
      "overview": "A freelance build for a Canadian client's cinematic short film. It is a realistic European riverside town, taken from blockout to final set dressing using assets the client provided through Fab Marketplace.\n\nBeyond layout and dressing, most of the work was in composition and lighting: preparing the scenes specifically for the camera shots the film needed, not for free-roam gameplay.",
      "whatIDid": "Created the initial blockout for the town layout.\nBuilt the environment using client-provided assets from the Fab Marketplace.\nCompleted the final set dressing with buildings, vegetation, props, and environmental details.\nDeveloped the lighting to create a realistic cinematic atmosphere.\nPrepared the environment for cinematic camera shots.\nOptimised the level while maintaining visual quality.\nWorked closely with the client, refining the environment through multiple feedback sessions.",
      "challenges": "Cinematic work raises the bar on consistency. Every camera angle needed to hold up, with no empty gaps or repeated details visible in frame, which is a different discipline than dressing a space just for gameplay traversal.\n\nThe client's asset library was large and varied, so a good chunk of time went into layout and lighting adjustments just to make everything read as one coherent place rather than a pile of separate packs, all while keeping the level light enough to run smoothly.",
      "lessons": "My first real depth in cinematic-specific environment work rather than gameplay spaces, and it sharpened how I think about composition and lighting when a fixed camera, not a moving player, is the audience. Working directly with an international client end-to-end also made me faster at turning feedback into revisions.",
      "cover": "images/6ad57e39d10f0bf4-thumb.webp",
      "process": [],
      "gallery": [
        "images/dd79b08286caf1dc.webp",
        "images/0270cd1cf437ef57.webp",
        "images/6ad57e39d10f0bf4.webp"
      ],
      "tags": [
        "UE5",
        "Cinematic",
        "Modular assets"
      ],
      "video": "",
      "play": "",
      "playLabel": "",
      "designDoc": ""
    },
    {
      "slug": "hidden-cave",
      "title": "Hidden Cave",
      "kind": "Environment",
      "year": "2024",
      "context": "O-Sens Studio",
      "short": "Cinematic environment",
      "badge": "",
      "role": "Environment Artist, Level Designer",
      "timeline": "2024",
      "genre": "Cinematic Environment",
      "desc": "A cave environment built for cinematic shots on an O-Sens Studio project, taken from blockout to final set dressing with Quixel Megascans, focused on composition and lighting rather than gameplay.",
      "overview": "My first project after joining O-Sens Studio was a cave environment built for cinematic shots rather than gameplay, taken from blockout to final set dressing using Quixel Megascans. I owned the scene composition, dressing, and lighting, all aimed at matching the project's established visual direction.",
      "whatIDid": "Created the initial blockout for the cave environment. Built the environment using Quixel Megascans and modular assets. Completed the final set dressing with rocks, vegetation, and environmental props. Worked on the lighting to establish the mood of the scene. Refined the environment through multiple iterations based on team feedback. Organised the level to support future updates during production.",
      "challenges": "Getting the cave to feel like a natural formation rather than an obviously arranged set was the main challenge, especially with every angle needing to hold up as its own cinematic shot. Rock formations, vegetation, and asset placement all went through repeated adjustment, and lighting took several more passes before it matched the mood the team was after.",
      "lessons": "As my first project on a professional team, this was really where I learned that environments get built through rounds of feedback and iteration, not a single pass, and it's where my blockout-to-final workflow with Quixel Megascans actually started to solidify.",
      "cover": "images/4ed231622beb7cfe-thumb.webp",
      "process": [],
      "gallery": [
        "images/b804c94e215f159d.webp",
        "images/465d4a74c4a83597.webp",
        "images/dcd706a7f357659c.webp"
      ],
      "tags": [
        "UE5",
        "Level design",
        "Environment art"
      ],
      "video": "",
      "play": "",
      "playLabel": "",
      "designDoc": ""
    },
    {
      "slug": "forgotten-temple",
      "title": "Forgotten Temple",
      "kind": "Environment",
      "year": "2024",
      "context": "KitBash3D Secrets of the Luminara challenge",
      "short": "Cinematic environment",
      "badge": "",
      "role": "Environment Artist, Level Designer",
      "timeline": "2024",
      "genre": "Cinematic Environment",
      "desc": "An ancient temple environment built for KitBash3D's Secrets of the Luminara Challenge, taken from blockout to final set dressing and blending the Luminara kit with Quixel Megascans, built for cinematic presentation.",
      "overview": "A personal entry for KitBash3D's Secrets of the Luminara Challenge. I wanted to push myself on a full cinematic environment built entirely around the competition's ancient-civilisation theme. Took it from blockout to final set-dressed scene using the Luminara kit alongside Quixel Megascans, with most of the focus on composition and lighting good enough to hold up in still cinematic shots.",
      "whatIDid": "Planned the environment based on the challenge theme. Created the initial blockout for the temple layout. Built the environment using KitBash3D assets and Quixel Megascans. Completed the final set dressing with vegetation, rocks, ruins, and environmental details. Developed the lighting to create a realistic cinematic atmosphere. Optimised the level while maintaining visual quality. Refined the scene through multiple iterations before the final presentation.",
      "challenges": "Mixing a stylised kit (Luminara) with photorealistic Megascans assets without the seams showing was the main problem. Materials, vegetation, and lighting all needed adjusting until it read as one consistent world instead of two libraries bolted together. On top of that, the scene had to hold up from multiple cinematic angles, which meant testing several camera positions and lighting setups before landing on the final presentation.",
      "lessons": "Built real confidence mixing KitBash3D with Quixel Megascans and planning scenes specifically for cinematic renders rather than gameplay. Working to a fixed competition brief was also a useful constraint, because designing around a specific theme forced sharper decisions than building without any limits at all.",
      "cover": "images/4452a63e8562e986-thumb.webp",
      "process": [],
      "gallery": [
        "images/90eda0caed051754.webp",
        "images/4452a63e8562e986.webp",
        "images/3756c4a8840b26b4.webp"
      ],
      "tags": [
        "UE5",
        "Level design",
        "Environment art"
      ],
      "video": "",
      "play": "",
      "playLabel": "",
      "designDoc": ""
    }
  ],
};
