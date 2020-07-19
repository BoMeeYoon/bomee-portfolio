import {
  $,
  mount,
  event,
  addName,
  removeHandler,
  setAttribute
} from "./hooks/elemetsHooks.js";

import { getElementHeight, scrollIntoView } from "./hooks/scrollHooks.js";
import { sceneInfo } from "./states/state.js";
const headerViewTemplate = `
  <div class="header__logo">
    <i class="fas fa-fan audio-btn"></i>
    <span>Music Player</span>
    <a href="#none">BOMEE's PORTFOLIO</a>
  </div>
  <nav class="header__nav">
    <ul class="header__nav-menu">
      <li class="header__nav-item nav-me" data-link="#main__me">IT'S ME</li>
      <li class="header__nav-item nav-about" data-link="#main__about">ABOUT</li>
      <li class="header__nav-item nav-skills" data-link="#main__skills">SKILLS</li>
      <li class="header__nav-item nav-works" data-link="#main__works">WORKS</li>
      <li class="header__nav-item nav-contact" data-link="#main__contact">CONTACT</li>
    </ul>
  </nav>
`;

let yOffset = 0;
let prevScrollHeight = 0;
let currentScene = 0;

// 헤더 마운트
const mountHeaderView = () => mount($("#header"), headerViewTemplate);

// 뮤직 플레이어
const audioHandler = () => {
  const audioBtn = $(".audio-btn");
  const audio = new Audio("./audio/bgm_cut.mp3");

  const audioPlay = (audio) => {
    audio.play();
    audio.classList.remove("play");
    audioBtn.classList.add("spin");
  };
  const audioPause = (audio) => {
    audio.pause();
    audio.classList.add("play");
    audioBtn.classList.remove("spin");
  };

  audioPlay(audio);
  event(audioBtn, "click", () => {
    const audioClassName = audio.className;
    audioClassName === "play" ? audioPlay(audio) : audioPause(audio);
  });
};

//네비 바 스타일
const navStyleHandler = () => {
  const headerEl = $("#header");
  yOffset = window.pageYOffset;
  
  yOffset >= getElementHeight(headerEl) && addName(headerEl, "navbar__dark");
  event(null, "scroll", () => {
    yOffset >= getElementHeight(headerEl)
      ? addName(headerEl, "navbar__dark")
      : removeHandler(headerEl, "navbar__dark", 100);
  });
};

//네비 링크 이동
const navScrollHandler = () => {
  const navBar = $(".header__nav-menu");

  event(navBar, "click", (e) => {
    const target = e.target;
    const link = target.dataset.link;

    if (!link) return;
    scrollIntoView(link);
  });
};

//섹션별 구역 구분 세팅
const setSceneLayout = () => {
  for (let i = 0; i < sceneInfo.length; i++) {
    sceneInfo[i].scrollHeight = sceneInfo[i].element.clientHeight - 1;
  };
  //새로고침 시
  let totalScrollHeight = 0;
  for (let i = 0; i < sceneInfo.length; i++) {
    totalScrollHeight += sceneInfo[i].scrollHeight;
    if (totalScrollHeight >= yOffset) {
      currentScene = i;
      break;
    }
  }
  setAttribute("body", "id", `show-scene-${currentScene}`)
};

//스크롤 시 구역 확인 후 속성 추가 함수
const scrollLoop = () => {
  prevScrollHeight = 0;
  for (let i = 0; i < currentScene; i++) {
    prevScrollHeight += sceneInfo[i].scrollHeight;
  }
  if (yOffset > prevScrollHeight + sceneInfo[currentScene].scrollHeight) {
    currentScene++;
    setAttribute("body", "id", `show-scene-${currentScene}`)
  }
  if (yOffset < prevScrollHeight) {
    if (currentScene === 0) return;
    currentScene--;
    setAttribute("body", "id", `show-scene-${currentScene}`)
  }
};


export default function init() {
  mountHeaderView();
  audioHandler();
  navStyleHandler();
  navScrollHandler();
  event(null, "load", setSceneLayout);
  event(null, "resize", setSceneLayout);
  event(null, "scroll", () => {
    yOffset = window.pageYOffset;
    scrollLoop();
  });
  setSceneLayout();
  return this;
}
