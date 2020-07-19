import { getElementHeight } from "../hooks/scrollHooks.js";
import { $ } from "../hooks/elemetsHooks.js";
export default {
  headerHeight: getElementHeight($("#header")),
  headerActive: $(".header__nav-item.active"),
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
    },
  ],
  tools: ["Node.js", "MySQL", "Jquery", "Redux", "Typescript"],
  etc: ["web API", "Git", "Webpack", "Eslint", "Babel"],
};

export const worksData = [
  {
    id: 1,
    title: `😻 주차관리시스템`,
    image: `./images/parkinglot.png`,
    description: {
      engTitle: `Parking Lot System`,
      spec: `HTML, CSS, Javascript<br/>node.js, express<br/>mySQL<br/>Webpack, Babel`,
      github: `https://github.com/BoMeeYoon/vanilla-webpack-parkinglot-mvc`,
    },
    type: `personal`,
  },
  {
    id: 2,
    title: `😻 지출기입장`,
    image: `./images/expenses.png`,
    description: {
      engTitle: `Financial Ledger`,
      spec: `React.js`,
      github: `https://github.com/BoMeeYoon/react-hooks-financial-ledger`,
    },
    type: `personal`,
  },
  {
    id: 3,
    title: `😻 자동검색창`,
    image: `./images/autocomplete.png`,
    description: {
      engTitle: `Autocomplete`,
      spec: `HTML, CSS, Javascript<br/>Webpack, Babel, Eslint`,
      github: `https://github.com/BoMeeYoon/webpack-autocomplete-api-mocker`,
    },
    type: `personal`,
  },
  {
    id: 4,
    title: `😻 온라인교육웹페이지`,
    image: `./images/onlineeducation.png`,
    description: {
      engTitle: `Online Coding Education`,
      spec: `HTML, CSS, Javascript<br/>Java, Spring, JWT<br/>Python, Django, SSR<br/>MySQL`,
      github: `https://github.com/BoMeeYoon/group-online-coding-education/blob/master/%EC%98%A8%EB%9D%BC%EC%9D%B8%EA%B5%90%EC%9C%A1_%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8_%EC%B5%9C%EC%A2%85.pdf`,
    },
    type: `team`,
  },
  {
    id: 5,
    title: `😻 주차정산시스템`,
    image: `./images/parkinglotbefore.png`,
    description: {
      engTitle: `Parking Lot Pay System`,
      spec: `HTML, CSS, Javascript, jquery<br/>Node.js, express<br/>MySQL`,
      github: `https://github.com/BoMeeYoon/mini-project-in-90factory`,
    },
    type: `personal`,
  },
];
