import { $, mount, event } from "./hooks/elemetsHooks.js"

const headerAboutTemplate = `
  <div class="about section__container">
  <h1 class="about__title linear">ABOUT ME</h1>
  <div class="about__mind">
    <div class="about__mind-item">
      <i class="fas fa-gift about__mind-icon"></i>
      <h3 class="about__mind-title">
        ENJOYABLE
      </h3>
      <p class="about__mind-description">
        코딩의 즐거움을 아는 <br/>프론트엔드 개발자
      </p>
    </div>
    <div class="about__mind-item">
      <i class="fas fa-signal about__mind-icon"></i>
      <h3 class="about__mind-title">
        STEADY
      </h3>
      <p class="about__mind-description">
        끊임없는 성장을 추구하는 <br/>프론트엔드 개발자
      </p>
    </div>
    <div class="about__mind-item">
      <i class="fas fa-globe-americas about__mind-icon"></i>
      <h3 class="about__mind-title">
        HUMANE
      </h3>
      <p class="about__mind-description">
        사람을 생각하는 <br/>프론트엔드 개발자
      </p>
    </div>
  </div>
  </div>
`;


const mountAboutView = () => mount($("#main__about"), headerAboutTemplate);

export default function init() {
  mountAboutView();
  return this;
};
