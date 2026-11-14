import eccomerce from '../assets/opt/ecommerce.webp';
import hotel from '../assets/opt/hotel.webp';
import food from '../assets/opt/food.webp';
import jobPortal from '../assets/opt/job-portal.webp';
import aiTerminal from '../assets/opt/ai-terminal.webp';
import netflix from '../assets/opt/netflix.webp';
import spotify from '../assets/opt/spotify.webp';
import landing from '../assets/opt/landing.webp';
import recipe from '../assets/opt/recipe.webp';
import fullstackCert from '../assets/opt/cert-fullstack.webp';
import ibmCert from '../assets/opt/cert-ibm.webp';
import aiCert from '../assets/opt/cert-ai.webp';
import techCert from '../assets/opt/cert-tech.webp';

export const profile = {
  name: 'Wright Gichana',
  role: 'Full-Stack Web Developer',
  location: 'Nairobi, Kenya',
  github: 'https://github.com/Wright-Moseti200',
  linkedin: 'https://www.linkedin.com/in/wright-gichana-84976131b',
  email: 'wrightgichana@gmail.com',
  phone: '0714471627',
  phoneDisplay: '0714 471 627',
  phoneHref: '+254714471627',
  site: 'https://wrightgichana.netlify.app',
};

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Certifications', href: '#certifications' },
];

export const heroStack = ['React', 'Node.js', 'MongoDB', 'Tailwind'];

export const socialLinks = [
  { label: 'GitHub', href: profile.github, icon: 'github', external: true },
  { label: 'LinkedIn', href: profile.linkedin, icon: 'linkedin', external: true },
  { label: 'Email', href: '#contact', icon: 'mail' },
  { label: 'Projects', href: '#projects', icon: 'folder' },
  { label: 'Certificates', href: '#certifications', icon: 'award' },
];

export const skills = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'Express',
  'MongoDB',
  'PostgreSQL',
  'Redis',
  'Docker',
  'Git & GitHub',
  'Tailwind CSS',
  'REST APIs',
  'UI / UX',
];

export const services = [
  {
    title: 'Frontend Development',
    description:
      'Responsive, accessible interfaces built with React and Tailwind — fast on every screen and a pleasure to use.',
    icon: 'code',
  },
  {
    title: 'Backend & APIs',
    description:
      'Robust server-side logic, REST APIs and database schemas with Node.js, Express, MongoDB and PostgreSQL.',
    icon: 'server',
  },
  {
    title: 'UI / UX & Web Design',
    description:
      'Thoughtful product design, design systems and prototypes that turn complex flows into simple, clear journeys.',
    icon: 'pen',
  },
  {
    title: 'System Design & Deployment',
    description:
      'Scalable architecture, integrations, containerisation and deployment pipelines that keep products reliable.',
    icon: 'layers',
  },
];

export const projects = [
  {
    title: 'FoodGen — AI recipe generator',
    image: recipe,
    alt: 'FoodGen AI recipe generator homepage with an ingredient prompt box and a generate button',
    description:
      'An AI recipe generator that turns whatever is in your fridge into a complete recipe — ingredients, steps and cooking tips — powered by a Gemini API.',
    tags: ['AI', 'React', 'Gemini API'],
    year: '2026',
    live: 'https://foodgen123.netlify.app/',
    github: null,
    featured: true,
  },
  {
    title: 'Ecommerce website',
    alt: 'Ecommerce storefront with a product grid, cart and checkout flow',
    image: eccomerce,
    description:
      'A complete e-commerce platform with cart, checkout and order management built with React, MongoDB, Express and Node.',
    tags: ['MERN', 'UI Design'],
    year: '2025',
    live: 'https://eccomercewebsite123.netlify.app',
    github: 'https://github.com/Wright-Moseti200/Eccomerce.git',
    featured: true,
  },
  {
    title: 'Hotel booking website',
    image: hotel,
    alt: 'Hotel booking website with room availability search and a reservation form',
    description:
      'A full-featured hotel reservation system that lets guests search availability and book rooms in a few clicks.',
    tags: ['Full Stack', 'Booking'],
    year: '2025',
    live: 'https://hotelbookingwebiste.netlify.app',
    github: 'https://github.com/Wright-Moseti200/Hotel-booking.git',
    featured: true,
  },
  {
    title: 'Food ordering website',
    image: food,
    alt: 'Food ordering app showing a restaurant menu, cart and delivery tracking',
    description:
      'An intuitive food delivery application crafted with the MERN stack for seamless browsing, ordering and tracking.',
    tags: ['MERN', 'UI Design'],
    year: '2025',
    live: 'https://mellifluous-stroopwafel-8ab97d.netlify.app',
    github: 'https://github.com/Wright-Moseti200/Food-delivery-site.git',
  },
  {
    title: 'Job portal website',
    image: jobPortal,
    alt: 'Job portal dashboard listing open roles and submitted applications',
    description:
      'A dynamic job board connecting applicants with opportunities, with role-based dashboards and applications.',
    tags: ['React', 'Node.js'],
    year: '2025',
    live: 'https://jobportalsite123.netlify.app',
    github: 'https://github.com/Wright-Moseti200/Job-Portal-Managemant.git',
  },
  {
    title: 'AI terminal chatbot',
    image: aiTerminal,
    alt: 'AI terminal chatbot answering a question in a command-line interface',
    description:
      'A command-line AI assistant powered by Node, Express and the Gemini API, with conversational memory.',
    tags: ['Node.js', 'Gemini API'],
    year: '2025',
    live: null,
    github: 'https://github.com/Wright-Moseti200/AI_chatbot.git',
  },
  {
    title: 'Netflix clone',
    image: netflix,
    alt: 'Netflix clone interface with a movie catalogue and featured banner',
    description:
      'A polished Netflix interface built with React and Firebase, pulling movie data live from the TMDB API.',
    tags: ['React', 'Firebase'],
    year: '2024',
    live: 'https://breakernefliux.netlify.app',
    github: 'https://github.com/Wright-Moseti200/Netflix_clone.git',
  },
  {
    title: 'Spotify clone',
    image: spotify,
    alt: 'Spotify clone web player with playlists and playback controls',
    description:
      'A Spotify web player clone with playlists, playback controls and a responsive, immersive interface.',
    tags: ['React', 'UI Design'],
    year: '2024',
    live: 'https://spotifyclone12000.netlify.app',
    github: 'https://github.com/Wright-Moseti200/Spotifyclone.git',
  },
  {
    title: 'Landing page',
    image: landing,
    alt: 'Educational landing page with a hero section and call to action',
    description:
      'A responsive, conversion-focused landing page built with modern layout and animation practices.',
    tags: ['React', 'Tailwind'],
    year: '2024',
    live: 'https://educationalsite2.netlify.app',
    github: 'https://github.com/Wright-Moseti200/Educationalsite.git',
  },
];

export const experience = [
  {
    company: 'Kenya Revenue Authority',
    role: 'IT Support Attaché',
    period: 'Jan 2026 — Apr 2026',
    location: 'Mombasa, Kenya',
    mark: 'KRA',
    description:
      'Supported high-availability digital revenue infrastructure, resolved critical hardware and software issues, and helped maintain security protocols for sensitive financial systems.',
  },
  {
    company: 'Freelance',
    role: 'Full-Stack Web Developer',
    period: '2023 — Present',
    location: 'Remote',
    mark: 'WG',
    description:
      'Designing and shipping end-to-end web products — e-commerce, booking, food delivery and job platforms — with React, Node, Express and MongoDB.',
  },
  {
    company: 'Google · IBM · Mimo',
    role: 'Continuous Learning',
    period: '2025 — 2026',
    location: 'Online',
    mark: 'CE',
    description:
      'Certified in full-stack development, Node.js and MongoDB, AI fundamentals and technical support — applying new skills to every project.',
  },
];

export const certifications = [
  {
    title: 'Full-Stack Development',
    issuer: 'Mimo',
    date: 'Aug 2025',
    image: fullstackCert,
    description:
      'HTML, CSS, JavaScript, React, data structures, algorithms, Node.js, Express and SQL.',
    link: 'https://www.virtualbadge.io/certificate-validator?credential=01cce887-65df-43ee-bf45-737535068374',
  },
  {
    title: 'Node.js & MongoDB',
    issuer: 'IBM',
    date: 'Jan 2026',
    image: ibmCert,
    description:
      'Back-end database applications, robust API design and MongoDB data modelling.',
    link: 'https://coursera.org/verify/VN9YJ2U1AP5X',
  },
  {
    title: 'Introduction to AI',
    issuer: 'Google',
    date: 'Nov 2025',
    image: aiCert,
    description:
      'Core concepts in artificial intelligence, generative models and responsible AI.',
    link: 'https://coursera.org/verify/2F14D9ALF5F6',
  },
  {
    title: 'Technical Support Fundamentals',
    issuer: 'Google',
    date: 'Dec 2025',
    image: techCert,
    description:
      'Operating systems, networking, troubleshooting and customer support fundamentals.',
    link: 'https://coursera.org/verify/CPBRKC1PLVBM',
  },
];

export const footerSocials = [
  { label: 'Follow me!', href: '#contact', sticker: '👋' },
  { label: 'Github', href: profile.github, external: true },
  { label: 'LinkedIn', href: profile.linkedin, external: true },
  { label: 'Projects', href: '#projects' },
  { label: 'Certificates', href: '#certifications' },
  { label: 'Email me', href: `mailto:${profile.email}` },
];
