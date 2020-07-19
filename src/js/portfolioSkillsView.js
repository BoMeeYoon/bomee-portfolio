import { $, all$, mount, event } from "./hooks/elemetsHooks.js";
import { sceneInfo, skillsData } from "./states/state.js";

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
        <div class="skill__left"></div>
        <div class="skill__right">
          <div class="tools">
            <h3 class="skill__tools-title">Tools</h3>
            <ul class="skill__tools-list"></ul>
          </div>
          <div class="etc">
            <h3 class="skill__etc-title">etc</h3>
            <ul class="skill__etc-list"></ul>
          </div>
        </div>
      </div>
    </div>
  </div>
`;

const mountSkillsView = () => mount($("#main__skills"), skillsViewTemplate);

//스킬바 html
const getSkillsLeftHTML = () => {
  const skillsLeftEl = $(".skill__left");
  const { skills } = skillsData;
  skillsLeftEl.innerHTML = skills.reduce((html, skill) => {
    return (html += _getSkillBarHTML(skill));
  }, `<h3 class="skill__title">Skills</h3>`);
};

const _getSkillBarHTML = (_skill) => {
  const { skill, proficiency } = _skill;
  return `
  <div class="skill">
    <div class="skill__description">
      <span>${skill}</span>
      <span>${proficiency}%</span>
    </div>
    <div class="skill__bar">
      <div class="skill__value" data-skill="${skill}"></div>
    </div>
  </div>`;
};

//tools & etc html
const getSkillsRightHTML = () => {
  const { tools, etc } = skillsData;
  const skillsToolsEl = $(".skill__tools-list");
  const skillsEtcEl = $(".skill__etc-list");
  skillsToolsEl.innerHTML = tools.reduce((list, tool) => {
    return (list += `<li><span>${tool}</span></li>`);
  }, "");
  skillsEtcEl.innerHTML = etc.reduce((list, _etc) => {
    return (list += `<li><span>${_etc}</span></li>`);
  }, "");
};

//스킬바
const skillsBarHandler = () => {
  let totalScrollHeight = 0;
  for (let i = 0; i < sceneInfo.length; i++) {
    totalScrollHeight += sceneInfo[i].scrollHeight;
    if (totalScrollHeight >= window.pageYOffset + 87) {
      if (i === 2) _mountSkillsBar();
      break;
    } else {
      const valueEls = all$(".skill__value");
      valueEls.forEach((valueEl) => {
        valueEl.style.width = `0%`;
      });
    }
  }
};

const _mountSkillsBar = ({ skills } = skillsData) => {
  const skillValue = {};
  const valueEls = all$(".skill__value");
  skills.forEach((skill) => {
    skillValue[skill.skill] = skill.proficiency;
  });
  valueEls.forEach((valueEl) => {
    valueEl.style.width = `${skillValue[valueEl.dataset.skill]}%`;
  });
};

export default function init() {
  mountSkillsView();
  getSkillsLeftHTML();
  getSkillsRightHTML();
  skillsBarHandler();
  event(null, "scroll", skillsBarHandler);
  return this;
}
