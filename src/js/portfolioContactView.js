import {
  $,
  mount,
  event,
  addName,
  removeHandler,
} from "./hooks/elemetsHooks.js";
import { scrollIntoView } from "./hooks/scrollHooks.js";
import states from "./states/state.js";
const contactViewTemplate = `
  <div class="contact section__container">
    <h1 class="contact__title">Let's talk</h1>
    <h2 class="contact__email" type="email">
      <i class="fas fa-envelope-open-text"></i>primavera0331@gmail.com
    </h2>
    <div class="contact__links">
      <a href="https://github.com/BoMeeYoon" target="_blank">
        <i class="fab fa-github"></i>
        <span>Go to Github</span>
      </a>
    </div>
  </div>
    <i class="fas fa-arrow-up"></i>
  `;
const toTopHandler = () => {
  event(null, "scroll", () => {
    window.scrollY > states.headerHeight / 2
      ? addName($(".fa-arrow-up"), "visible")
      : removeHandler($(".fa-arrow-up"), "visible", 100);
  });
  event($(".fa-arrow-up"), "click", (e) => {
    const active = $(".header__nav-item.active");
    if(active) removeHandler(active, "active", 300);
    scrollIntoView("#main__me");
    addName($(".nav-me"), "active");
    console.log($(".nav-me"));
  });
};
const mountContactView = () => mount($("#main__contact"), contactViewTemplate);

export default function init() {
  mountContactView();
  toTopHandler();
  return this;
}
