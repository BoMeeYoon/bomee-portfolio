import { $, mount } from "./hooks/elemetsHooks.js";

const contactViewTemplate = `
  <div class="contact section__container">
    <h1 class="contact__title">Let's talk</h1>
    <h2 class="contact__email" type="email">primavera0331@gmail.com</h2>
    <div class="contact__links">
      <a href="google.com" target="_blank">
        <i class="fab fa-google-plus-square"></i>
      </a>
      <a href="#" target="_blank">
        <i class="fab fa-google-plus-square"></i>
      </a>
    </div>
  </div>
`;

const mountContactView = () => mount($("#main__contact"), contactViewTemplate);

export default function init() {
  mountContactView();
  return this;
}