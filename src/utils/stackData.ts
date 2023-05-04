import { TbBrandNextjs } from "react-icons/tb";
import { SiPostgresql, SiTypescript } from "react-icons/si";
import typeorm from "../public/static/img/stack/typeorm.svg";
import express from "../public/static/img/stack/express.svg";
import { FaGit, FaPython } from "react-icons/fa";
import {
  FaDocker,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaNode,
  FaReact,
} from "react-icons/fa";
import {
  SiSqlite,
  SiDjango,
  SiChakraui,
  SiStyledcomponents,
  SiExpress,
} from "react-icons/si";

export const stackData = [
  {
    title: "HTML",
    img: FaHtml5,
  },
  {
    title: "CSS",
    img: FaCss3Alt,
  },
  {
    title: "JS",
    img: FaJs,
  },
  { title: "TypeScript", img: SiTypescript },
  {
    title: "Node JS",
    img: FaNode,
  },
  {
    title: "React",
    img: FaReact,
  },
  { title: "Next.js", img: TbBrandNextjs },
  { title: "Docker", img: FaDocker },
  { title: "PostgreSQL", img: SiPostgresql },
  { title: "Git", img: FaGit },
  { title: "Python", img: FaPython },
  { title: "Sqlite", img: SiSqlite },
  { title: "Django", img: SiDjango },
  { title: "Typeorm", img: typeorm },
  { title: "Express", img: SiExpress },
  { title: "Styled-components", img: SiStyledcomponents },
  { title: "Chakra-ui", img: SiChakraui },
];
