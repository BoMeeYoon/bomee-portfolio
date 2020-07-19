import { $, all$, mount, event } from "./hooks/elemetsHooks.js";

const skillsViewTemplate = `
  <div class="section__container">
    <div class="skill__container">
      <h1 class="linear">Skills</h1>
      <h2>Skills & Attributes</h2>
      <p>< <i class="fab fa-html5"></i> <i class="fab fa-css3"></i> <i class="fab fa-js-square"></i> > 를 활용한 웹 페이지는 물론! <br />
      < <span>React, Jquery, Node.js, Typescript</span> > 등의 기술을 적재적소에 사용할 수 있도록 <br />
      꾸준히 실무기술을 연구하고 있습니다.
      </p>
      <div class="skill__box">
        <div class="skill__left">
          <h3 class="skill__title">Skills</h3>
          <div class="skill">
            <div class="skill__description">
              <span>HTML</span>
              <span>60%</span>
            </div>
            <div class="skill__bar">
              <div class="skill__value" data-skill="HTML"></div>
            </div>
          </div>
          <div class="skill">
            <div class="skill__description">
              <span>CSS</span>
              <span>70%</span>
            </div>
            <div class="skill__bar">
              <div class="skill__value" data-skill="CSS"></div>
            </div>
          </div>
          <div class="skill">
            <div class="skill__description">
              <span>JAVASCRIPT</span>
              <span>70%</span>
            </div>
            <div class="skill__bar">
              <div class="skill__value" data-skill="JAVASCRIPT"></div>
            </div>
          </div>
          <div class="skill">
            <div class="skill__description">
              <span>REACT</span>
              <span>50%</span>
            </div>
            <div class="skill__bar">
              <div class="skill__value" data-skill="REACT"></div>
            </div>
          </div>
        </div>
        <div class="skill__right">
          <div class="tools">
            <h3 class="skill__tools-title">Tools</h3>
            <ul class="skill__tools-list">
              <li><span>Node.js</span></li>
              <li><span>MySQL</span></li>
              <li><span>Jquery</span></li>
              <li><span>Redux</span></li>
              <li><span>Typescript</span></li>
            </ul>
          </div>
          <div class="etc">
            <h3 class="skill__etc-title">etc</h3>
            <ul class="skill__etc-list">
              <li><span>WEB Api</span></li>
              <li><span>Git</span></li>
              <li><span>Webpack</span></li>
              <li><span>Eslint</span></li>
              <li><span>Babel</span></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
`;
const mountSkillsBar = () => {
  const skillValue = {
    HTML: 60,
    CSS: 70,
    JAVASCRIPT: 70,
    REACT: 50,
  };
  const valueEls = all$(".skill__value");
  valueEls.forEach((valueEl) => valueEl.style.width = `0`);

  event(null, "DOMContentLoaded", () => {
    setTimeout(() => {
      valueEls.forEach((valueEl) => valueEl.style.width = `${skillValue[valueEl.dataset.skill]}%`);
    }, 500)
  });
};
const mountSkillsView = () => mount($("#main__skills"), skillsViewTemplate);

export default function init() {
  mountSkillsView();
  mountSkillsBar();
  return this;
}
