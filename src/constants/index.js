import Foto from "../../public/images/logos/Foto";

const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  // {
  //   name: "Testimonials",
  //   link: "#testimonials",
  // },
  {
    name: "Contact",
    link: "#contact",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 1, suffix: "+", label: "Years of Experience" },
  { value: 5, suffix: "+", label: "Satisfied Clients" },
  { value: 10, suffix: "+", label: "Completed Projects" },
  { value: 90, suffix: "%", label: "Client Retention Rate" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackImgs = [
  {
    name: "HTML",
    imgPath: "/images/logos/html-1.svg",
  },
  {
    name: "CSS",
    imgPath: "/images/logos/css.svg",
  },
  {
    name: "Tailwind Css",
    imgPath: "/images/logos/tailwind.svg",
  },
  {
    name: "Javascript",
    imgPath: "/images/logos/javascript.svg",
  },
  {
    name: "Typescript",
    imgPath: "/images/logos/typescript.svg",
  },
  {
    name: "React",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Next.Js",
    imgPath: "/images/logos/icons8-next.js.svg",
  },
  {
    name: "Git",
    imgPath: "/images/logos/git.svg",
  },
  {
    name: "Github",
    imgPath: "/images/logos/github-2.svg",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review:
      "Saba played a key role in developing Tiksit’s customer-facing interface. His attention to detail and proactive communication helped us ship reliable features quickly and efficiently.",
    imgPath: "/images/tiksit.svg",
    logoPath: "",
    title: "Frontend Developer",
    date: "November 2024 - Present",
    responsibilities: [
      "Implemented user-facing features using React, Next.js, and TypeScript.",
      "Fixed bugs and added new functionalities to improve platform usability.",
      "Integrated front-end components with REST APIs and real-time data.",
      "Worked closely with designers and product managers to deliver responsive and accessible UI.",
      "Contributed to the live production-level SaaS platform in a hybrid environment.",
    ],
  },
  {
    review:
      "Saba demonstrated excellent frontend development skills while working with us on Kolkhisea. His ability to blend cultural aesthetics with modern technology really brought the platform to life.",
    imgPath: "/images/Kolkhisea.svg",
    logoPath: "/images/kol-logo.svg",
    title: "React Developer (Contract)",
    date: "February 2025 - Present",
    responsibilities: [
      "Built a culturally inspired real estate web platform using React, Next.js, and TypeScript.",
      "Implemented multilingual support (English, Georgian, Russian) for diverse audiences.",
      "Integrated dynamic property data via REST APIs.",
      "Developed reusable UI components with Tailwind CSS reflecting luxury and heritage.",
      "Collaborated with designers, backend engineers, and stakeholders to deliver a polished user experience.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Esther Howard",
    mentions: "@estherhoward",
    review:
      "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Wade Warren",
    mentions: "@wadewarren",
    review:
      "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Guy Hawkins",
    mentions: "@guyhawkins",
    review:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Marvin McKinney",
    mentions: "@marvinmckinney",
    review:
      "Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Floyd Miles",
    mentions: "@floydmiles",
    review:
      "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
    imgPath: "/images/client4.png",
  },
  {
    name: "Albert Flores",
    mentions: "@albertflores",
    review:
      "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
    imgPath: "/images/client6.png",
  },
];

const socialImgs = [
  {
    name: "insta",
    url: "https://www.instagram.com/pailodze_saba/",
    imgPath: "/images/instagram1.svg",
  },
  {
    name: "fb",
    url: "https://www.facebook.com/profile.php?id=100008080189238",
    imgPath: "/images/facebook1.svg",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/saba-pailodze-040952300/",
    imgPath: "/images/inkedin1.svg",
  },
  {
    name: "github",
    url: "https://github.com/sabaPailodze",
    imgPath: "/images/github1.svg",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
