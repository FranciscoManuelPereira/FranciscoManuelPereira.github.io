// Single source of truth for personal content. Step 2 of the plan fills this in from the CV.
export const profile = {
  name: 'Francisco Pereira',
  role: 'Web Security Specialist & Web Developer',
  tagline:
    'I help businesses find and fix security flaws in their web applications before attackers do.',
  location: 'Portugal · Remote',
  email: 'hello@example.com', // TODO: replace with a public contact address
  links: {
    github: 'https://github.com/FranciscoManuelPereira',
    linkedin: 'https://www.linkedin.com/', // TODO: add LinkedIn profile URL
  },
  about: [
    'TODO: short bio written from the CV. Who you are, what you focus on in web security, and how you combine it with web development.',
  ],
  skills: {
    Security: ['OWASP Top 10', 'Burp Suite', 'Web app pentesting', 'HTTP security headers', 'TLS'],
    Development: ['JavaScript / TypeScript', 'React', 'Node.js / Express', 'MongoDB', 'HTML & CSS'],
    Tools: ['Linux', 'Git', 'Docker'],
  },
};

export const services = [
  {
    title: 'Web Application Security Testing',
    description:
      'Manual and tool-assisted testing of your web app against the OWASP Top 10, with a clear report of findings and fixes.',
  },
  {
    title: 'Security Headers & TLS Review',
    description:
      'Review of HTTP security headers, cookies, CSP and TLS configuration, with ready-to-apply recommendations.',
  },
  {
    title: 'Secure Development',
    description:
      'Building or hardening websites and APIs with security in mind from day one: auth, input validation, dependency hygiene.',
  },
];

export const projects: { title: string; description: string; tags: string[]; url?: string; repo?: string }[] = [
  {
    title: 'Coming soon: security showcase project',
    description: 'Step 3 of the plan: a new web security project that replaces the school projects as the highlight.',
    tags: ['Web Security'],
  },
];

export const experience: { period: string; title: string; place: string; description: string }[] = [
  // TODO: fill from the CV (step 2)
  { period: 'YYYY – YYYY', title: 'Role or course', place: 'Company or school', description: 'TODO' },
];
