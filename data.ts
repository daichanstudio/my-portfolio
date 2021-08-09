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
      "I can handle database, server, api using <b>SQL</b>, <b>Firebase</b>, and <b>Postman</b> ",
  },
  {
    Icon: AiOutlineApi,
    title: "API Development",
    about:
      "I can develop REST API using <b>Django-REST-API</b>, and <b>Mock Service Worker</b>",
  },
  {
    Icon: MdDeveloperMode,
    title: "Testing Tools",
    about: "I can test React component, using React-Testing-Library(RTL), <b>Jest</b>",
  },
  {
    Icon: AiOutlineAntDesign,
    title: "UI/UX Designer",
    about:
      "According to UI/UX design, I can create user-friendly interfaces.",
  },
  {
    Icon: RiComputerLine,
    title: "Qualifications",
    about:
      "English:  <b>TOEIC 885</b>(April, 2021)<br/> I'm studying <b>Applied Information Technology Engineer Examination</b>",
  },

];

export const languages: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "React.js",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "TypeScript",
    level: "75",
  },
  {
    Icon: BsCircleFill,
    name: "Next.js",
    level: "70",
  },

  {
    Icon: BsCircleFill,
    name: "JavaScript",
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
  {
    Icon: BsCircleFill,
    name: "Python",
    level: "50",
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
      "This app shows a statistical view about COVID-19 over the world with Map",
    image_path: "/images/covid-tracker.jpg",
    deployed_url: "https://covid-19-tracker-2567a.web.app/",
    github_url: "https://github.com/daichanstudio/covid-19-tracker",
    category: ["react"],
    key_techs: ["React", "Chart.js", "Material UI"],
  },
  {
    id: 2,
    name: "Mabo-log",
    image_path: "/images/mabo-log.jpg",
    deployed_url: "https://mabo-log-v2.vercel.app/",
    github_url: "https://github.com/daichanstudio/mabo-log",
    category: ["react", "next"],
    description:
      "First Next.js Project :) My brother's Blog",
    key_techs: ["React", "Next", "Markdown", "Tailwind CSS"],
  },

  {
    id: 3,
    name: "COVID Dashboard",
    image_path: "/images/covid-dashboard.jpg",
    deployed_url: "https://covid-dashboard-api-da763.firebaseapp.com/",
    github_url: "https://github.com/daichanstudio/covid_dashboard_api",
    category: ["typescript", "react"],
    description:
    "This app shows a statistical view about COVID-19 over the world",
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
      "Basic Chat App at my company",
    key_techs: ["React","Material UI"],
  },

  {
    id: 5,
    name: "Markdown-App",
    image_path: "/images/markdown-app.jpg",
    deployed_url: "https://markdown-app-16b04.web.app/",
    github_url: "https://github.com/daichanstudio/Markdown-App",
    category: ["typescript", "react"],
    description:
      "This app is best for learning Markdown",
    key_techs: ["React", "Typescript"],
  },

  {
    id: 6,
    name: "News App",
    image_path: "/images/news-app.jpg",
    deployed_url: "https://expo.dev/@daichanstudio/news-app",
    github_url: "https://github.com/daichanstudio/NewsApp",
    category: ["react native", "react"],
    description:
      "First React Native Project :) Using News API",
    key_techs: ["React Native", "React", "News API", "Redux"],
  },
  {
    id: 7,
    name: "My Portfolio",
    image_path: "/images/my-portfolio.jpg",
    deployed_url: "https://my-portfolio-daichanstudio.vercel.app/",
    github_url: "https://github.com/daichanstudio/my-portfolio",
    category: ["react", "typescript", "next"],
    description:
      "Introduce myself",
    key_techs: [
      "React", "Typescript", "Next", "Tailwind css"
    ],
  },

];
