export const DOMAIN = "manmohansingh.dev";
export const FULL_DOMAIN = `https://${DOMAIN}`;
export const FULL_WWW_DOMAIN = `https://www.${DOMAIN}`;

export const CANONICAL_HOME = `${FULL_DOMAIN}/`;

export const FAVICON = `${FULL_WWW_DOMAIN}/favicon.svg`;
export const THUMB = `${FULL_WWW_DOMAIN}/og-image.png`;

export const OG_TYPE = "portfolio";
export const TWITTER_CARD = "summary_large_image";

export const MAIL = `hi@${DOMAIN}`;
export const MAIL_TO = `mailto:${MAIL}`;

export const USERNAME = "pulpmint";

export const NAME = "Manmohan Singh";
export const TAGLINE = "Building things for the Web";

export const PIXEL_PERFECT =
  "Crafting smooth, secure and pixel-perfect web experiences with great attention to detail.";

export const TITLE = `${NAME} - ${TAGLINE}`;
export const DESC = "A web developer based in India. Working with JavaScript & Figma.";

export const META_DESC = `${DESC} ${PIXEL_PERFECT}`;

export const HELLO = 'Hello!';
export const GREETINGS = `I am ${NAME}.`;

export const DANPEN = {
  LABEL: "Danpen",
  LINK: "https://www.danpen.wtf",
  YEAR: 2022,
};

const TWITTER_GEMS = {
  LABEL: "Twitter Gems",
  LINK: "https://twittrgems.careerleap.io",
  YEAR: 2021,
};

const COFFEE_HOURS = {
  LABEL: "Coffee Hours",
  LINK: "https://www.coffeehours.club",
  YEAR: 2020,
};

const RIVI = {
  LABEL: "Rivi",
  LINK: "https://www.rivi.co",
  YEAR: 2020,
};

export const PROJECTS = [DANPEN, TWITTER_GEMS, COFFEE_HOURS, RIVI];

export const EXPERIENCES = [
  {
    DESG: "Frontend Developer",
    LABEL: "PayU",
    YEAR: "2023 - ....",
  },
  {
    DESG: "Full Stack Developer",
    LABEL: "Standard Chartered Bank",
    YEAR: "2020 - 2023",
  },
  {
    DESG: "Frontend Developer (Intern)",
    LABEL: "Rivi",
    YEAR: "2019 - 2020",
  },
];

export const SKILLS = [
  "React.js",
  "Next.js",
  "Vue.js",
  "Nuxt.js",
  "Node.js",
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "Figma",
];

export const AWARDS = [
  {
    ...TWITTER_GEMS,
    AWARD: "Product Hunt - Product of the Day",
    LINK: "https://www.producthunt.com/products/twittr-gems",
  },
];

export const GITHUB = {
  LABEL: "GitHub",
  LINK: "https://www.github.com/pulpmint",
};

export const CODEPEN = {
  LABEL: "CodePen",
  LINK: "https://www.codepen.io/pulpmint",
};

export const TWITTER = {
  LABEL: "Twitter",
  LINK: "https://www.twitter.com/pulpmint",
};

export const HASHNODE = {
  LABEL: "Hashnode",
  LINK: "https://pulpmint.hashnode.dev",
  OPTIONAL: "My Blog",
};

export const SOCIALS = [GITHUB, CODEPEN, TWITTER, HASHNODE];

export const FAQS = [
  {
    q: "What's with all the text?",
    a: "I'm busy working on the actual site. It is expected to go live within the next 69 years.",
  },
  {
    q: "What did you use for this site?",
    a: "For this one, I just used Astro & some good old CSS for styles. Plain & simple.",
  },
  {
    q: "What are you using for the actual site?",
    a: "I'm using Next.js & TypeScript along with TailwindCSS for styles & GSAP for animations.",
  },
  {
    q: "This is ugly.",
    a: "Yes but that is not a question.",
  },
];

export const MORE_QUESTIONS = "Have more questions?";

export const COPYRIGHT = "🧙‍♂️ Design & Code • Manmohan Singh";
export const YEAR = new Date().getFullYear();
