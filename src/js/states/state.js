import { getElementHeight } from "../hooks/scrollHooks.js";
import { $ } from "../hooks/elemetsHooks.js";
export default {
  headerHeight : getElementHeight($("#header")),
  headerActive : $(".header__nav-item.active")
};

export const sceneInfo = [
  {
    id: 1,
    scrollHeight: 0,
    element: $("#main__me"),
  },
  {
    id: 2,
    scrollHeight: 0,
    element: $("#main__about"),
  },
  {
    id: 3,
    scrollHeight: 0,
    element: $("#main__skills"),
  },
  {
    id: 4,
    scrollHeight: 0,
    element: $("#main__works"),
  },
  {
    id: 5,
    scrollHeight: 0,
    element: $("#main__contact"),
  },
];

export const skillsData = {
  skills: [
    {
      id: 1,
      skill: "HTML",
      proficiency: 60,
    },
    {
      id: 2,
      skill: "CSS",
      proficiency: 70,
    },
    {
      id: 3,
      skill: "JAVASCRIPT",
      proficiency: 70,
    },
    {
      id: 4,
      skill: "REACT",
      proficiency: 50,
    }
  ],
  tools: [
    "Node.js", "MySQL", "Jquery", "Redux", "Typescript" 
  ],
  etc: [
    "web API", "Git", "Webpack", "Eslint", "Babel"
  ]
} 