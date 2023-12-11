// Developer Basic Information
import eliasImg from "../assets/images/eliasImage.webp";

// Developer SoMe
import githubLogo from "../assets/images/icon-github.svg";
import linkedIn from "../assets/images/icon-linkedin.svg";
import twitter from "../assets/images/icon-twitter.svg";

// Developer Skills
import bootstrap from "../assets/icons/bootstrap5.svg";
import css from "../assets/icons/css.svg";
import html from "../assets/icons/html5.svg";
import react from "../assets/icons/reactjs.svg";
import sass from "../assets/icons/sass.svg";
import vsCode from "../assets/icons/vs.svg";
import git from "../assets/icons/git.svg";
import figma from "../assets/icons/figma.svg";
import js from "../assets/icons/js.svg";
import github from "../assets/icons/github.svg";
import tailwind from "../assets/icons/tailwind.svg";

// Developer Projects
import CabinQuest from "../assets/projects/CabinQuest.png";
import EliasGloriousGoods from "../assets/projects/EliasGloriousGoods.png";
import eatSplit from "../assets/projects/preview-eat-n-split.png";
import gameHub from "../assets/projects/Cross-Course-Project.png";

import lazySloth from "../assets/projects/lazy-sloth.png";

export const devData = {
  basics: {
    name: "Elias",
    label: "Frontend Developer",
    image: eliasImg,
    email: "elias.ekornas@gmail.com",
    phone: "(+47) 413 42 036",
    url: "https://johndoe.com",
    summary: `Based in Ålesund, Norway, I am a passionate Frontend Developer who loves learning new technologies and improving my craft based on current industry trends.
    At the moment i am fully invested in mastering React, Tailwind and React Query to further expand my stack.`,
    location: {
      address: "Grimvegen 13",
      postalCode: "6150",
      city: "Ørsta",
      countryCode: "NOR",
      region: "Møre og Romsdal",
    },
    profiles: [
      {
        network: "Twitter",
        username: "IMEkon",
        url: "https://twitter.com/IMEkon",
        icon: twitter,
      },
      {
        network: "LinkedIn",
        username: "Elias Ekornås",
        url: "https://www.linkedin.com/in/elias-ekorn%C3%A5s/",
        icon: linkedIn,
      },
      {
        network: "GitHub",
        username: "DrRuski",
        url: "https://github.com/DrRuski",
        icon: githubLogo,
      },
    ],
  },
  work: [
    {
      name: "Company",
      position: "President",
      url: "https://company.com",
      startDate: "2013-01-01",
      endDate: "2014-01-01",
      summary: "Description…",
      highlights: ["Started the company"],
    },
  ],
  volunteer: [
    {
      organization: "Organization",
      position: "Volunteer",
      url: "https://organization.com/",
      startDate: "2012-01-01",
      endDate: "2013-01-01",
      summary: "Description…",
      highlights: ["Awarded 'Volunteer of the Month'"],
    },
  ],
  education: [
    {
      institution: "Noroff School of technology and digital media",
      url: "https://www.noroff.no/en/studies/vocational-school/front-end-development",
      area: "Frontend Development",
      studyType: "Higher Professional Degree",
      startDate: "2021-01-10",
      endDate: "2024-01-10",
      score: "A",
    },
    {
      institution: "Noroff School of technology and digital media",
      url: "https://www.noroff.no/en/studies/vocational-school/ux-design",
      area: "User Experience",
      studyType: "Professional Degree",
      startDate: "2019-07-25",
      endDate: "2020-06-25",
      score: "A",
    },
  ],
  awards: [
    {
      title: "Award",
      date: "2014-11-01",
      awarder: "Company",
      summary: "There is no spoon.",
    },
  ],
  certificates: [
    {
      name: "Certificate",
      date: "2021-11-07",
      issuer: "Company",
      url: "https://certificate.com",
    },
  ],
  publications: [
    {
      name: "Publication",
      publisher: "Company",
      releaseDate: "2014-10-01",
      url: "https://publication.com",
      summary: "Description…",
    },
  ],
  skills: [
    {
      name: "HTML",
      icon: html,
    },
    {
      name: "CSS",
      icon: css,
    },

    {
      name: "SASS",
      icon: sass,
    },
    {
      name: "GIT",
      icon: git,
    },
    {
      name: "VSCODE",
      icon: vsCode,
    },
    {
      name: "REACT",
      icon: react,
    },

    {
      name: "JS",
      icon: js,
    },
    {
      name: "GITHUB",
      icon: github,
    },
    {
      name: "FIGMA",
      icon: figma,
    },
    {
      name: "BOOTSTRAP",
      icon: bootstrap,
    },
    {
      name: "TAILWIND",
      icon: tailwind,
    },
  ],
  languages: [
    {
      language: "Norwegian",
      fluency: "Native speaker",
    },
    {
      language: "English",
      fluency: "Fluent Business Communication",
    },
  ],
  interests: [
    {
      name: "Wildlife",
      keywords: ["Ferrets", "Unicorns"],
    },
  ],
  references: [
    {
      name: "Oliver Dipple",
      position:
        "Line Manager for the Online Front-end Development Course at Noroff",
      reference: "Reference…",
    },
    {
      name: "Michael-John Phillip",
      position:
        "Line Manager for the Online Front-end Development Course at Noroff",
      reference: `To whom it may concern
      This letter is a reference for Elias Ekornås who is studying Front-end Development with
      Noroff from January 2022, and will graduate in January 2024.
      I first met Elias when he was studying User Experience Design at Noroff and he and a 
      fellow student had taken the initiative to re-design the Learning Management System 
      that the vocational college uses and were interviewing staff and students about the 
      LMS. I was impressed by their innovative spirit and desire to make a lasting 
      improvement on the experience of other students.
      Elias is a very engaged student, participating well in his class, and asking for
      clarifications when needed. For us this is important that a student develops this
      evaluative judgement to know what they already know, and know what they need to
      know to tackle a problem.
      In his studies, Elias has consistently performed well and got an A-grade on his Project 
      Exam 1 at the end of first year. I am confident that Elias will continue to perform well in 
      his studies as he has shown himself to be a determined student.`,
    },
  ],
  projects: [
    {
      title: "CabinQuest",
      startDate: "2019-01-01",
      endDate: "2021-01-01",
      image: CabinQuest,
      website: "https://cabinquest.no/",
      code: "https://github.com/DrRuski/CabinQuest",
      summary: "",
      highlights: ["Won award at AIHacks 2016"],
      frameworks: ["REACT", "TAILWIND", "JS"],
    },
    {
      title: "Elias` Glorious Goods.",
      startDate: "2019-01-01",
      endDate: "2021-01-01",
      image: EliasGloriousGoods,
      website: "https://jade-paprenjak-6721a7.netlify.app/",
      code: "https://github.com/DrRuski/js-frameworks-ca",
      summary: "",
      highlights: ["Won award at AIHacks 2016"],
      frameworks: ["REACT", "TAILWIND", "JS"],
    },
    {
      title: "GAME HUB - E-COMMERCE",
      startDate: "2019-01-01",
      endDate: "2021-01-01",
      image: gameHub,
      website: "https://calm-hummingbird-304e8c.netlify.app",
      code: "https://github.com/DrRuski/cross-course-project-EliasEkornas",
      summary:
        "This cross-course project has been designed, developed and improved throughout my studies @Noroff. The development of the project started when I enrolled into the school and with each passing course, the website was built upon and improved into what you see today (EU - 08.12.22 | US - 12.08.22). In general, the website incorporates real-world project development processes that are focused on research-based and user-centric design and development methodologies.",
      highlights: ["Won award at AIHacks 2016"],
      frameworks: ["HTML", "CSS", "JS", "WooCommerce"],
    },
    {
      title: "LAZY SLOTH - AUCTION HOUSE",
      startDate: "2019-01-01",
      endDate: "2021-01-01",
      image: lazySloth,
      website: "https://noroffauctionhouse.imdev.no/",
      code: "https://github.com/DrRuski/noroff-auction-house",
      summary: "",
      highlights: ["Won award at AIHacks 2016"],
      frameworks: ["HTML", "SASS", "JS"],
    },
    {
      title: "EAT'N'SPLIT",
      startDate: "2019-01-01",
      endDate: "2021-01-01",
      image: eatSplit,
      website: "https://tangerine-genie-e307db.netlify.app",
      code: "https://github.com/DrRuski/eat-n-split",
      summary: "",
      highlights: ["Won award at AIHacks 2016"],
      frameworks: ["REACT", "CSS"],
    },
  ],
};
