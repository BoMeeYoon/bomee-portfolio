import {
  $,
  mount,
  event,
  removeName,
  addName,
  all$,
} from "./hooks/elemetsHooks.js";
import { worksData } from "./states/state.js";

const worksViewTemplate = `
  <div class="section__container">
    <h1>My work</h1>
    <h3>Projects</h3>
    <div class="work__categories"></div>
    <div class="work__projects"></div>
  </div>
`;
const mountWorksView = () => mount($("#main__works"), worksViewTemplate);

const categoryHTML = () => {
  const categoryEl = $(".work__categories");
  categoryEl.innerHTML = `
  <button class="category__btn selected" data-filter="*">
    All<span class="category__count">${worksData.length}</span>
  </button>
  <button class="category__btn" data-filter="personal">
    Personal<span class="category__count">${
      worksData.filter((data) => data.type === "personal").length
    }</span>
  </button>
  <button class="category__btn" data-filter="team">
    Team<span class="category__count">${
      worksData.filter((data) => data.type === "team").length
    }</span>
  </button>
  <button class="category__btn" data-filter="etc">
    etc<span class="category__count">${
      worksData.filter((data) => data.type === "etc").length
    }</span>
  </button>
  `;
};

const getWorksHTML = () => {
  const projectEl = $(".work__projects");
  projectEl.innerHTML = worksData.reduce((html, work) => {
    return (html += getWorkHTML(work));
  }, "");
  filterHandler();
};
const getWorkHTML = (work) => {
  const { title, image, description, type } = work;
  const { engTitle, spec, github } = description;

  return `
  <div class="work__project" data-type="${type}">
    <div class="project__img">
      <p>${title}</p>
      <img src=${image} alt="project-photo"/>
    </div>
    <div class="project__description">
      <h3>${engTitle}</h3>
      <p>${spec}</p>
      <div class="project__description-bts">
        <a href=${github} target="blank" class="project"><i class="fab fa-github-square"></i>View Details</a>
      </div>
    </div>
  </div>
  `;
};
const filterHandler = () => {
  const categoryEl = $(".work__categories");
  const projectContainer = $(".work__projects");
  const projects = all$(".work__project");

  event(categoryEl, "click", (e) => {
    const filter =
      e.target.dataset.filter || e.target.parentNode.dataset.filter;
    if (!filter) return;
    console.log(filter);
    const active = $(".category__btn.selected");
    removeName(active, "selected");
    const target =
      e.target.nodeName === "BUTTON" ? e.target : e.target.parentNode;
    addName(target, "selected");

    addName(projectContainer, "anim-out");
    setTimeout(() => {
      projects.forEach((project) => {
        if (filter === "*" || filter === project.dataset.type) {
          removeName(project, "invisible");
        } else {
          addName(project, "invisible");
        }
      });
      removeName(projectContainer, "anim-out");
    }, 300);
  });
};
export default function init() {
  mountWorksView();
  categoryHTML();
  getWorksHTML();
  return this;
}
