import { $, mount, event } from "./hooks/elemetsHooks.js";
import { scrollIntoView, getElementHeight } from "./hooks/scrollHooks.js";

const meViewTemplate = `
    <div class="me section__container">
      <div class="me__image-container">
        <span></span>
        <span></span>
        <span></span>
        <img
          src="src/images/avatar.jpg"
          alt="BoMee's profile photo"
          class="me__photo"
        />
      </div>
      <h1 class="me__title">FRONT - END DEVELOPER</h1>
      <h1>BOMEE YOON</h1>
      <button class="me__contact-btn" data-link="#main__contact">Contact Me</button>
      <i class="fas fa-angle-double-down down-arrow"></i>
    </div>
`;

const mountMeView = () => mount($("#main__me"), meViewTemplate);
//contact 버튼 클릭
const contactLinkHandler = () => {
  event($(".me__contact-btn"), "click", (e) => {
    const target = e.target;
    const link = target.dataset.link;
    if (!link) return;
    scrollIntoView(link);
  });
};
//down arrow 클릭
const nextLinkHandler = () => {
  const downArrow = $(".down-arrow");
  event(downArrow, "click", () => {
    scrollIntoView("#main__about");
  });
};

//Me content fadeout
const meFadeOut = () => {
  const meContainer = $(".me.section__container");
  const meContainerHeight = getElementHeight(meContainer);
  event(null, "scroll", () => {
    meContainer.style.opacity = 1 - window.pageYOffset / meContainerHeight;
  });
};

export default function init() {
  mountMeView();
  contactLinkHandler();
  nextLinkHandler();
  meFadeOut();
  return this;
}
