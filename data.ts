import { RiComputerLine } from "react-icons/ri";
import { FaServer } from "react-icons/fa";
import { AiOutlineAntDesign, AiOutlineApi } from "react-icons/ai";
import { MdDeveloperMode } from "react-icons/md";
import { IProject, Service, Skill } from "./type";

import { BsCircleFill } from "react-icons/bs";

export const services: Service[] = [
  {
    Icon: RiComputerLine,
    title: "Frontend Development",
    about:
      "I can build a beautiful and scalable SPA using <b>React.js</b>, <b>TypeScript</b>, and <b>Next.js</b> ",
  },
  {
    Icon: FaServer,
    title: "Backend  Development",
    about:
      "handle database, server, api using <b>Firebase </b> & other popular frameworks",
  },
  {
    Icon: AiOutlineApi,
    title: "API Development",
    about:
      "I can develop robust  REST API using <b>django-rest-api</b>  & <b>Node API</b> ",
  },
  {
    Icon: MdDeveloperMode,
    title: "Competitive Coder",
    about: "a daily problem solver in <b>HackerRank</b>  and <b>Leet Code</b> ",
  },
  {
    Icon: AiOutlineAntDesign,
    title: "UI/UX designer",
    about:
      "stunning user interface designer using <b>Figma</b>  and  <b>Framer</b> ",
  },
  {
    Icon: RiComputerLine,
    title: "Qualifications",
    about:
      "TOEIC 900 (2021/10)<br>Applied Information Technology Engineer Examination（応用情報技術者試験）",
  },
];

export const languages: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "React",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "Type Script",
    level: "75",
  },
  {
    Icon: BsCircleFill,
    name: "Next.js",
    level: "70",
  },

  {
    Icon: BsCircleFill,
    name: "Java Script",
    level: "90",
  },
  {
    Icon: BsCircleFill,
    name: "React Native",
    level: "65",
  },
  {
    Icon: BsCircleFill,
    name: "Redux/Redux ToolKit",
    level: "55",
  },


];


export const tools: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "Material UI",
    level: "85",
  },
  {
    Icon: BsCircleFill,
    name: "Tailwind CSS",
    level: "70",
  },

];

export const projects: IProject[] = [
  {
    id: 1,
    name: "COVID Tracker",
    description:
      "This app shows a statistical view about corona virus over the world",
    image_path: "/images/covid.jpg",
    deployed_url: "https://covid-19-tracker-2567a.web.app/",
    github_url: "https://github.com/daichanstudio/covid-19-tracker",
    category: ["react"],
    key_techs: ["React", "Chart.js", "Material UI"],
  },
  {
    id: 2,
    name: "Mabo-log",
    image_path: "/images/algoVisual.png",
    deployed_url: "https://mabo-log-v2.vercel.app/",
    github_url: "https://github.com/daichanstudio/mabo-log",
    category: ["react", "next"],
    description:
      "A blog for my brother",
    key_techs: ["React", "Next", "Markdown", "Tailwind css"],
  },

  {
    id: 3,
    name: "COVID Dashboard",
    image_path: "/images/dev.jpg",
    deployed_url: "https://covid-dashboard-api-da763.firebaseapp.com/",
    github_url: "https://github.com/daichanstudio/covid_dashboard_api",
    category: ["typescript", "react"],
    description:
    "This app shows a statistical view about corona virus over the world",
    key_techs: [
      "React",
      "Redux ToolKit",
      "Chart.js",
      "TypeScript",
      "Firebase",
      "Material UI",

    ],
  },

  {
    id: 4,
    name: "Chat App",
    image_path: "/images/chatapp.jpg",
    deployed_url: "https://chatbot-app-b9e83.web.app/",
    github_url: "https://github.com/daichanstudio/chatbot-app",
    category: ["react"],
    description:
      "Basic Realtime Chat App where one can create a room can talk to each other",
    key_techs: ["React","Material UI"],
  },

  {
    id: 5,
    name: "Code App",
    image_path: "/images/tweetme.jpg",
    deployed_url: "#",
    github_url: "https://github.com/daichanstudio/code-app",
    category: ["typescript", "react"],
    description:
      "You can learn Markdown",
    key_techs: ["React", "Typescript"],
  },

  {
    id: 6,
    name: "News App",
    image_path: "/images/color.jpg",
    deployed_url: "https://daichanstudio.github.io/News-App/",
    github_url: "https://github.com/daichanstudio/News-App",
    category: ["react native", "react"],
    description:
      "First React Native Project :) | ",
    key_techs: ["React Native", "React", "News API", "Redux"],
  },
  {
    id: 7,
    name: "My Portfolio",
    image_path: "/images/youtubeClone.png",
    deployed_url: "https://my-portfolio-5w93xhc6d-daichanstudio.vercel.app/",
    github_url: "https://github.com/daichanstudio/my-portfolio",
    category: ["react", "typescript", "next"],
    description:
      "Introduce myself",
    key_techs: [
      "React", "Typescript", "Next", "Tailwind css"
    ],
  },

];
