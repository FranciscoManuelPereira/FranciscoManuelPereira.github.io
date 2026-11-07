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
    'Before tech I spent six years in retail operations at BCM Bricolage, managing a store area, handling customer complaints and running training sessions. That taught me to listen to clients, explain problems in plain language and follow through until they are solved.',
    'I am pragmatic, always learning, and I enjoy working closely with the people I build for.',
  ],
  skills: {
    Security: ['Networking fundamentals', 'How the web works (HTTP, DNS)', 'Linux & Windows fundamentals', 'HTTP security headers', 'OWASP Top 10 (learning)'],
    Development: ['JavaScript (ES6+)', 'React', 'Node.js', 'Express.js', 'MongoDB', 'HTML5 & CSS3'],
    Tools: ['Git', 'Linux', 'Netlify', 'Cloudinary'],
  },
  languages: ['Portuguese (native)', 'English', 'Spanish'],
};

export const services = [
  {
    title: 'Website Security Check',
    description:
      'A review of your website against the OWASP Top 10: security headers, cookies, forms, authentication and exposed information, with a clear report of what to fix first.',
  },
  {
    title: 'Security Headers & HTTPS Setup',
    description:
      'Configuring Content Security Policy, HSTS, cookie flags and TLS so your site gets an A on public scanners and resists common attacks.',
  },
  {
    title: 'Secure Web Development',
    description:
      'Building or fixing websites and APIs in JavaScript, React and Node.js, with input validation, safe authentication and up-to-date dependencies from day one.',
  },
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

export const experience: { period: string; title: string; place: string; description: string }[] = [
  {
    period: '2017 – 2023',
    title: 'Store Operator',
    place: 'BCM Bricolage SA, Lisbon',
    description:
      'Customer service and complaint resolution, area and department management, stock control and supplier communication, staff training and workshops.',
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
  {
    period: '2015 – 2016',
    title: 'Video Post-Production and Graphic Design',
    place: 'ETIC, Lisbon',
    description: 'Video editing and animation with Photoshop, Premiere, After Effects and Audition.',
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
