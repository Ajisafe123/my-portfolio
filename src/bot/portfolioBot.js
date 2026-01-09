export const portfolioProfile = {
  name: 'Ajisafe Ibrahim',
  title: 'Software Developer & AI Engineer',

  summary:
    'Full-stack software developer with strong Python and JavaScript expertise, focused on building scalable web apps, automation bots, and AI-powered systems. Passionate about clean UI, performance, and practical problem-solving.',

  experienceLevel: 'Junior–Mid Software Developer',
  whatsapp: '+2349056453575',
  whatsappLink: 'https://wa.me/2349056453575',
  whatsappBot: '+1 (555) 150-5439',
  whatsappBotLink: 'https://wa.me/15551505439',
  telegramBot: {
    username: '@ibrahim_py_2026_bot',
    link: 'https://web.telegram.org/k/#@ibrahim_py_2026_bot'
  },
  email: 'ajisafeibrahim54@gmail.com',
  socials: {
    github: 'https://github.com/Ajisafe123',
    linkedin: 'https://www.linkedin.com/me?trk=p_mwlite_feed-secondary_nav',
    twitter: 'https://x.com/code_wit_jeedev?s=21',
    portfolio: 'https://ajisafe.vercel.app'
  },

  aboutMe: [
    'I am a full-stack software developer and AI engineer focused on building real-world solutions.',
    'I specialize in modern business websites, automation bots, and AI-powered systems.',
    'I enjoy turning ideas into scalable products with clean code and great user experience.',
    'Most of my work combines frontend performance, backend logic, and smart automation.',
    'I believe software should be simple, fast, and actually solve problems.'
  ],

  workPhilosophy: [
    'Build with clarity, not complexity',
    'Performance and UI matter equally',
    'Automation saves time and money',
    'Every project should scale'
  ],

  whoICanHelp: [
    'Startups',
    'Small & medium businesses',
    'Personal brands',
    'Organizations',
    'Founders with product ideas'
  ],

  pricing: {
    websites: [
      {
        name: 'Basic Business Website',
        price: '$150 – $250',
        includes: ['3–5 pages', 'Responsive design', 'Contact form', 'Basic SEO', 'Fast deployment']
      },
      {
        name: 'Standard Website',
        price: '$300 – $500',
        includes: [
          '5–8 pages',
          'Modern UI & animations',
          'Admin/content support',
          'Better SEO',
          'Performance optimization'
        ]
      },
      {
        name: 'Advanced / Web App',
        price: '$600+',
        includes: ['Custom features', 'Authentication', 'Dashboard', 'API integration', 'Database']
      }
    ],
    bots: '$100 – $400 depending on complexity',
    maintenance: '$30 – $80 / month'
  },

  workProcess: [
    'Requirement discussion',
    'UI & feature planning',
    'Development',
    'Testing & optimization',
    'Deployment & support'
  ],

  whyChooseMe: [
    'Clean & scalable code',
    'Strong UI/UX focus',
    'Automation & AI experience',
    'Clear communication',
    'Affordable pricing'
  ],

  extras: [
    'Admin dashboards',
    'Payment integration',
    'Email notifications',
    'Analytics integration',
    'Custom automation'
  ],

  frontendDetails: [
    'Responsive UI for mobile, tablet, and desktop',
    'Modern animations with Framer Motion',
    'Clean component-based architecture',
    'Fast loading and optimized assets',
    'User-friendly and conversion-focused design'
  ],

  backendDetails: [
    'Secure REST API development',
    'Authentication & authorization',
    'Database design & optimization',
    'Server-side validation',
    'Scalable architecture'
  ],

  seoDetails: [
    'SEO-friendly page structure',
    'Meta tags & Open Graph setup',
    'Fast page speed optimization',
    'Mobile-first indexing',
    'Search engine visibility best practices'
  ],

  performanceDetails: [
    'Code splitting',
    'Lazy loading',
    'Image optimization',
    'Caching strategies',
    'Reduced bundle size'
  ],

  securityDetails: [
    'Input validation',
    'Secure authentication',
    'Environment variable protection',
    'Basic vulnerability prevention',
    'HTTPS & deployment best practices'
  ],

  maintenanceDetails: [
    'Bug fixes',
    'Content updates',
    'Performance monitoring',
    'Feature upgrades',
    'Deployment support'
  ],

  techStack: {
    frontend: ['React', 'Next.js', 'Vue.js', 'TailwindCSS', 'Framer Motion'],
    backend: ['Node.js', 'Express.js', 'Python', 'REST APIs'],
    ai_ml: ['Machine Learning', 'PyTorch', 'Facial Recognition', 'AI-powered automation'],
    bots: ['python-telegram-bot', 'WhatsApp Bot APIs', 'APScheduler'],
    databases: ['MongoDB', 'PostgreSQL (basic)', 'SQLite'],
    devops: ['Vercel', 'Render', 'DigitalOcean', 'Docker (basic)', 'GitHub']
  },

  services: [
    'Business websites & web applications',
    'Automation bots (Telegram & WhatsApp)',
    'AI / ML integrations',
    'REST API development',
    'Deployment & cloud setup',
    'UI/UX optimization'
  ],
  projects: [
    {
      title: 'Nibras Al-deen',
      description:
        'A productivity Islamic web app designed to help users manage tasks and stay focused with AI Prayer reminders.',
      liveLink: 'https://nibrasudeen.vercel.app'
    },
    {
      title: 'My Portfolio',
      description:
        'A creative personal portfolio built with smooth animations and a modern UI to showcase my skills.',
      liveLink: 'https://ajisafe.vercel.app'
    },
    {
      title: 'LibroSeek',
      description:
        'A digital library web app for discovering, reading, and organizing books online seamlessly.',
      liveLink: 'https://libro-seek.vercel.app'
    },
    {
      title: 'E-Attendance System',
      description:
        'Smart attendance system with geofencing and facial recognition technology for secure employee tracking.',
      liveLink: 'https://e-attendance.com.ng/'
    },
    {
      title: 'DunniStarr',
      description:
        'An ecommerce storefront built with Next.js and TypeScript, focused on performance and clean UI.',
      liveLink: 'https://dunnies-store.onrender.com/'
    },
    {
      title: 'WhatsApp Reminder Bot',
      description:
        'A WhatsApp bot that schedules and sends reminders automatically.',
      liveLink: ''
    },
    {
      title: 'Telegram Echo Bot',
      description:
        'Telegram bot that replies with the exact message sent.',
      liveLink: 'https://web.telegram.org/k/#@ibrahim_py_2026_bot'
    }
  ]
};

const normalize = (text) => String(text || '').trim().toLowerCase();

const formatList = (items) => items.map((v) => `- ${v}`).join('\n');

const formatProjects = (projects) =>
  projects
    .map((p) => `- ${p.title}: ${p.liveLink}`)
    .join('\n');

export const getBotResponse = (message) => {
  const q = normalize(message);
  const p = portfolioProfile;

  if (!q)
    return "Type something like: 'projects', 'frontend stack', 'website price', or 'hire you'.";

  const isGreeting =
    q === 'hi' ||
    q === 'hello' ||
    q === 'hey' ||
    q.startsWith('hi ') ||
    q.startsWith('hello ') ||
    q.startsWith('hey ');

  if (isGreeting) {
    return `Hi! I'm ${p.name}'s portfolio bot. Ask me about projects, tech stack, services, pricing, or hiring.`;
  }

  if (q.includes('help') || q.includes('what can you do') || q.includes('commands')) {
    return [
      'I can help you with:',
      '- About me',
      '- What I do',
      '- Website pricing',
      '- Tech stack (frontend/backend/AI/bots/databases/devops)',
      '- Projects',
      '- Work process',
      '- Hiring & contact',
      "Try: 'website price' or 'frontend stack'"
    ].join('\n');
  }

  if (q.includes('about you') || q.includes('about me') || q.includes('tell me about')) {
    return [`${p.name} — ${p.title}`, '', ...p.aboutMe].join('\n');
  }

  if (q.includes('summary') || q.includes('profile') || q.includes('experience')) {
    return [`${p.name} — ${p.experienceLevel}`, p.summary].join('\n');
  }

  if (q.includes('philosophy') || q.includes('mindset')) {
    return ['Work philosophy:', formatList(p.workPhilosophy)].join('\n');
  }

  if (q.includes('what do you do') || q.includes('your work') || q.includes('what you do')) {
    return [
      'What I do:',
      '- Build modern business websites',
      '- Develop full-stack web apps',
      '- Create Telegram & WhatsApp bots',
      '- Integrate AI & automation',
      '- Deploy and maintain systems'
    ].join('\n');
  }

  if (q.includes('service') || q.includes('offer')) {
    return ['Services offered:', formatList(p.services)].join('\n');
  }

  if (q.includes('hire') || q.includes('freelance') || q.includes('work with you')) {
    return [
      'I am available for freelance & contract work.',
      `Portfolio: ${p.socials.portfolio}`,
      `WhatsApp: ${p.whatsappLink}`,
      `Email: ${p.email}`
    ].join('\n');
  }

  if (q.includes('price') || q.includes('cost')) {
    const websiteLines = p.pricing.websites.flatMap((w) => [
      `${w.name}`,
      `Price: ${w.price}`,
      'Includes:',
      formatList(w.includes),
      ''
    ]);
    return [
      'Website Pricing (depends on features):',
      '',
      ...websiteLines,
      `Bots: ${p.pricing.bots}`,
      `Maintenance: ${p.pricing.maintenance}`
    ].join('\n');
  }

  if (q.includes('process') || q.includes('how you work')) {
    return ['My work process:', formatList(p.workProcess)].join('\n');
  }

  if (q.includes('who do you work with') || q.includes('clients')) {
    return ['I work with:', formatList(p.whoICanHelp)].join('\n');
  }

  if (q.includes('why you') || q.includes('why choose')) {
    return ['Why choose me:', formatList(p.whyChooseMe)].join('\n');
  }

  const wantsStack = q.includes('stack') || q.includes('skills') || q.includes('tech');

  if (wantsStack && q.includes('frontend')) {
    return ['Frontend stack:', formatList(p.techStack.frontend)].join('\n');
  }

  if (wantsStack && (q.includes('backend') || q.includes('server'))) {
    return ['Backend stack:', formatList(p.techStack.backend)].join('\n');
  }

  if (wantsStack && (q.includes('ai') || q.includes('ml') || q.includes('machine learning'))) {
    return ['AI/ML stack:', formatList(p.techStack.ai_ml)].join('\n');
  }

  if (wantsStack && q.includes('bot')) {
    return ['Bot stack:', formatList(p.techStack.bots)].join('\n');
  }

  if (wantsStack && (q.includes('database') || q.includes('db'))) {
    return ['Database stack:', formatList(p.techStack.databases)].join('\n');
  }

  if (wantsStack && (q.includes('devops') || q.includes('deploy') || q.includes('deployment'))) {
    return ['DevOps stack:', formatList(p.techStack.devops)].join('\n');
  }

  if (q.includes('frontend')) return ['Frontend includes:', formatList(p.frontendDetails)].join('\n');
  if (q.includes('backend') || q.includes('server')) return ['Backend includes:', formatList(p.backendDetails)].join('\n');
  if (q.includes('seo') || q.includes('search engine')) return ['SEO includes:', formatList(p.seoDetails)].join('\n');
  if (q.includes('performance') || q.includes('speed'))
    return ['Performance optimization includes:', formatList(p.performanceDetails)].join('\n');
  if (q.includes('security') || q.includes('secure')) return ['Security practices include:', formatList(p.securityDetails)].join('\n');
  if (q.includes('maintenance') || q.includes('support'))
    return ['Maintenance & support includes:', formatList(p.maintenanceDetails)].join('\n');
  if (q.includes('extra') || q.includes('feature')) return ['Additional features:', formatList(p.extras)].join('\n');

  if (q.includes('telegram bot') || q.includes('telegram') || q.includes('bot username')) {
    return [
      `Telegram bot username: ${p.telegramBot.username}`,
      `Link: ${p.telegramBot.link}`
    ].join('\n');
  }

  if (q.includes('whatsapp bot')) {
    return [
      `WhatsApp bot number: ${p.whatsappBot}`,
      `Link: ${p.whatsappBotLink}`
    ].join('\n');
  }

  if (q.includes('whatsapp') || q.includes('phone') || q.includes('number') || q.includes('contact')) {
    return [
      `WhatsApp (personal): ${p.whatsapp}`,
      `WhatsApp link: ${p.whatsappLink}`,
      `WhatsApp bot: ${p.whatsappBot}`,
      `WhatsApp bot link: ${p.whatsappBotLink}`,
      `Telegram bot: ${p.telegramBot.username}`,
      `Telegram link: ${p.telegramBot.link}`,
      `GitHub: ${p.socials.github}`,
      `Email: ${p.email}`
    ].join('\n');
  }

  if (q.includes('github')) return `GitHub: ${p.socials.github}`;
  if (q.includes('linkedin')) return `LinkedIn: ${p.socials.linkedin}`;
  if (q.includes('twitter') || q === 'x' || q.includes(' x ')) return `Twitter/X: ${p.socials.twitter}`;
  if (q.includes('portfolio') || q.includes('website')) return `Portfolio: ${p.socials.portfolio}`;
  if (q.includes('email')) return `Email: ${p.email}`;

  if (q.includes('tech') || q.includes('stack') || q.includes('skills') || q.includes('tools')) {
    const lines = Object.entries(p.techStack).map(
      ([k, v]) => `\n${String(k).toUpperCase()}:\n${formatList(v)}`
    );
    return ['Tech Stack:', ...lines].join('\n');
  }

  if (q.includes('project') || q.includes('work') || q.includes('build') || q.includes('built')) {
    return ['Projects:', formatProjects(p.projects), "Want details on one? Type the project's name."].join('\n');
  }

  const projectMatch = p.projects.find((proj) => q.includes(normalize(proj.title)));
  if (projectMatch) {
    return [
      `${projectMatch.title}`,
      `${projectMatch.description}`,
      `Live: ${projectMatch.liveLink}`
    ].join('\n');
  }

  if (q.includes('who are you') || q.includes('what do you do')) {
    return `${p.name} is a ${p.title} focused on full-stack development, automation bots, and AI-powered systems.`;
  }

  return "I didn’t catch that. Try 'help', 'projects', 'frontend stack', 'website price', or 'hire you'.";
};
