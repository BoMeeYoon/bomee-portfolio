import { $, mount } from "./hooks/elemetsHooks.js";

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
`;

const mountContactView = () => mount($("#main__contact"), contactViewTemplate);

export default function init() {
  mountContactView();
  return this;
}
