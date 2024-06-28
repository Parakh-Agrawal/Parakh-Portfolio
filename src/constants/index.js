import {
  mobile,
  backend,
  vnit,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const education = [
  {
    title: "VNIT, Nagpur   2022-26",
    icon: vnit,
    grade: "Grade: 6.85",
    department: "Department: ECE",
  },
  {
    title: "JEE Score,    2022",
    icon: mobile,
    grade: "Advance: AIR 12k",
    department: "Mains: 98.48%ile",
  },
  {
    title: "SVN H.S School,    2021",
    icon: mobile,
    grade: "Grade: 93.6%",
    department: "XII  MPBSE",
  },
  {
    title: "RDPS School,    2019",
    icon: backend,
    grade: "Grade: 93.2%",
    department: "X  CBSE",
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },

  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },

];

const experiences = [
  {
    title: "TnP Co-ordinator",
    company_name: "VNIT Nagpur ECE",
    icon: vnit,
    iconBg: "#383E56",
    date: "May 2024 - Present",
    points: [
      "Establish and maintain relationships with companies for campus recruitment.",
      "Organize training sessions, workshops, and seminars to enhance students' employability skills. This may include soft skills, technical skills, resume writing, and interview preparation.",
      "Plan and coordinate on-campus placement drives, including logistics, scheduling, and coordination with recruiting companies.",
      "Maintain a comprehensive database of students, including their academic records, skills, and interests in Superset.",
    ],
  },
];

export { education, technologies, experiences};