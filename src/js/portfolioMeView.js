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
      <h1 class="me__title">Hello, <br />I'm Front-end Developer👩‍💻</h1>
      <h2 class="me__description">
        😍코딩의 즐거움을 아는 프론트엔드 개발자🍭
      </h2>
      <button class="me__contact-btn">Contact Me</button>
    </div>
`;

const mountMeView = mount($("#main__me"), meViewTemplate);

export default function init() {
  mountMeView;
  return this;
}