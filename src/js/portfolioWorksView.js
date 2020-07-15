import { $, mount } from "./hooks/elemetsHooks.js"

const worksViewTemplate = `
  <div class="section__container">
    <h1>My work</h1>
    <h3>Projects</h3>
    <div class="work__categories">
      <button class="category__btn active">
        All<span class="category__count">3</span>
      </button>
      <button class="category__btn">
        Personal<span class="category__count">1</span>
      </button>
      <button class="category__btn">
        Team<span class="category__count">1</span>
      </button>
      <button class="category__btn">
        etc<span class="category__count">3</span>
      </button>
    </div>
    <div class="work__projects">
      <a href="https://github.com/BoMeeYoon/practice-css/commits?author=BoMeeYoon" class="project" target="blank">
        <img src="./images/icon.png" alt="project-photo" class="project__img" />
        <div class="project__description">
          <h3>Parking Lot System</h3>
          <span>my first mini-project and full stack</span>
        </div>
      </a>
      <a href="https://github.com/BoMeeYoon/practice-css/commits?author=BoMeeYoon" class="project" target="blank">
        <img src="./images/icon.png" alt="project-photo" class="project__img" />
        <div class="project__description">
          <h3>Parking Lot System</h3>
          <span>my first mini-project and full stack</span>
        </div>
      </a>
      <a href="https://github.com/BoMeeYoon/practice-css/commits?author=BoMeeYoon" class="project" target="blank">
        <img src="./images/icon.png" alt="project-photo" class="project__img" />
        <div class="project__description">
          <h3>Parking Lot System</h3>
          <span>my first mini-project and full stack</span>
        </div>
      </a>
      <a href="https://github.com/BoMeeYoon/practice-css/commits?author=BoMeeYoon" class="project" target="blank">
        <img src="./images/icon.png" alt="project-photo" class="project__img" />
        <div class="project__description">
          <h3>Parking Lot System</h3>
          <span>my first mini-project and full stack</span>
        </div>
      </a>
      <a href="https://github.com/BoMeeYoon/practice-css/commits?author=BoMeeYoon" class="project" target="blank">
        <img src="./images/icon.png" alt="project-photo" class="project__img" />
        <div class="project__description">
          <h3>Parking Lot System</h3>
          <span>my first mini-project and full stack</span>
        </div>
      </a>
    </div>
  </div>
`;

const mountWorksView = () => mount($("#main__works"), worksViewTemplate);
export default function init() {
  mountWorksView();
  return this;
}