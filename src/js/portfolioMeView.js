import { $, mount } from "./hooks/elemetsHooks.js"

const meViewTemplate = `
    <div class="me section__container">
      <div class="me__image-container">
        <span></span>
        <span></span>
        <span></span>
        <img
          src="./images/avatar.jpg"
          alt="BoMee's profile photo"
          class="me__photo"
        />
      </div>
      <h1 class="me__title">FRONT - END DEVELOPER</h1>
      <h1>BOMEE YOON</h1>
      <button class="me__contact-btn">Contact Me</button>
      <i class="fas fa-angle-double-down down-arrow to-next"></i>
    </div>
`;

const mountMeView = () => mount($("#main__me"), meViewTemplate);

export default function init() {
  mountMeView();
  return this;
}