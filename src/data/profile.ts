// Single source of truth for personal content.
export const profile = {
  name: 'Francisco Pereira',
  role: 'Web Developer focused on Web Security',
  tagline:
    'I build web applications with security in mind, and help small businesses find and fix weak spots in their websites.',
  location: 'Lisbon, Portugal · Remote',
  email: 'franciscowanuelpereira@gmail.com',
  links: {
    github: 'https://github.com/FranciscoManuelPereira',
    linkedin: 'https://www.linkedin.com/in/franciscomanuelpereira',
  },
  about: [
    "I'm a full-stack web developer trained at Ironhack Lisbon, now specialising in web application security. I like understanding how things are built so I can see how they break, and then make them harder to break.",
    'I explain problems in plain language, without jargon, and follow through until they are fixed. You get a clear list of what matters, why it matters and how to fix it.',
    'I am pragmatic, always learning, and I enjoy working closely with the people I build for.',
  ],
  skills: {
    Security: ['Networking fundamentals', 'How the web works (HTTP, DNS)', 'Linux & Windows fundamentals', 'HTTP security headers', 'OWASP Top 10 (learning)'],
    Development: ['JavaScript (ES6+)', 'React', 'Node.js', 'Express.js', 'MongoDB', 'HTML5 & CSS3'],
    Tools: ['Git', 'Linux', 'Netlify', 'Cloudinary'],
  },
  languages: ['Portuguese (native)', 'English', 'Spanish'],
};

export const services: { icon: 'shield' | 'lock' | 'code'; title: string; description: string; deliverables: string[] }[] = [
  {
    icon: 'shield',
    title: 'Website Security Check',
    description:
      'A review of your website against the OWASP Top 10: security headers, cookies, forms, authentication and exposed information, with a clear report of what to fix first.',
    deliverables: ['Written report in plain language', 'Issues ranked by risk', 'Step-by-step fixes'],
  },
  {
    icon: 'lock',
    title: 'Security Headers & HTTPS Setup',
    description:
      'Configuring Content Security Policy, HSTS, cookie flags and TLS so your site gets an A on public scanners and resists common attacks.',
    deliverables: ['Before and after scan', 'Headers configured on your host', 'Nothing on your site breaks'],
  },
  {
    icon: 'code',
    title: 'Secure Web Development',
    description:
      'Building or fixing websites and APIs in JavaScript, React and Node.js, with input validation, safe authentication and up-to-date dependencies from day one.',
    deliverables: ['React and Node.js', 'Security built in from day one', 'Clean, documented code'],
  },
];

export const process = [
  { step: '01', title: 'Free first chat', description: 'Tell me about your website and what worries you. No commitment, no jargon.' },
  { step: '02', title: 'Review or build', description: 'I scan and test your site (only with your written permission) or build what you need.' },
  { step: '03', title: 'Clear report and fixes', description: 'You get plain-language findings ranked by risk, and I can apply the fixes for you.' },
];

// Highlighted on the home page. School projects live on the CV page instead.
export const projects: { title: string; description: string; tags: string[]; url?: string; repo?: string }[] = [
  {
    title: 'Security Headers Checker',
    description:
      'Command-line tool that grades a website’s HTTP security headers and cookies from A to F and explains how to fix each issue: CSP, HSTS, clickjacking, cookie flags and more. Zero dependencies, unit tested, usable in CI.',
    tags: ['Node.js', 'HTTP security', 'OWASP', 'CLI'],
    url: '/writeups/http-security-headers/',
    repo: 'https://github.com/FranciscoManuelPereira/security-headers-checker',
  },
];

export const education: { period: string; title: string; place: string; description: string }[] = [
  {
    period: 'Oct 2026',
    title: 'Pre Security Learning Path',
    place: 'TryHackMe',
    description: 'Cyber security foundations: networking, how the web works, Linux and Windows fundamentals (19 hours, certificate of completion).',
  },
  {
    period: '2023',
    title: 'Full-Stack Web Developer Bootcamp',
    place: 'Ironhack, Lisbon',
    description: 'Front-end and back-end development with HTML5, CSS3, JavaScript (ES6), Node.js, Express.js, MongoDB and React.',
  },
];

export const schoolProjects: { title: string; description: string; tags: string[]; repo?: string }[] = [
  {
    title: 'ToCheck',
    description: 'Task tracker web app to keep focus on what needs to be done.',
    tags: ['React', 'MongoDB', 'Cloudinary'],
    repo: 'https://github.com/FranciscoManuelPereira/ToCheck-client',
  },
  {
    title: "Kiddo's Care",
    description: 'Web app connecting parents with nannies, where nannies can apply for jobs.',
    tags: ['Node.js', 'MongoDB', 'Handlebars'],
    repo: 'https://github.com/FranciscoManuelPereira/kiddoscare',
  },
  {
    title: 'ridingHood.innerHTML(wolf)',
    description: 'Two-player browser game in the Red Riding Hood universe, built with OOP JavaScript and HTML Canvas.',
    tags: ['JavaScript', 'Canvas'],
    repo: 'https://github.com/FranciscoManuelPereira/GameProject',
  },
];
