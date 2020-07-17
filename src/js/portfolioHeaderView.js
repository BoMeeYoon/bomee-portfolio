import { $, mount, event, addName, removeName } from "./hooks/elemetsHooks.js";
import { scrollHeight, scrollIntoView } from "./hooks/scrollHooks.js";

const headerViewTemplate = `
  <div class="header__logo">
    <i class="fas fa-fan audio-btn"></i>
    <span>Music Player</span>
    <a href="#none">BOMEE's PORTFOLIO</a>
  </div>
  <nav class="header__nav">
    <ul class="header__nav-menu">
      <li class="header__nav-item active" data-link="#main__me">IT'S ME</li>
      <li class="header__nav-item" data-link="#main__about">ABOUT</li>
      <li class="header__nav-item" data-link="#main__skills">SKILLS</li>
      <li class="header__nav-item" data-link="#main__works">WORKS</li>
      <li class="header__nav-item" data-link="#main__contact">CONTACT</li>
    </ul>
  </nav>
`;
const headerEl = $("#header");
const navBar = $(".header__nav-menu");
const navScrollHandler = () => {
  const removeHandler = (target, name, time) => {
    setTimeout(() => {
      removeName(target, name);
    }, time);
  };
  event(navBar, "click", (e) => {
    const active = $(".header__nav-item.active");
    const target = e.target;
    const link = target.dataset.link;
    removeHandler(active, "active", 300);
    addName(target, "active");
    if (!link) return;
    scrollIntoView(link);
  });
};

const navStyleHandler = () => {
  const headerHeight = scrollHeight(headerEl);

  event(null, "scroll", () => {
    window.scrollY >= headerHeight
      ? addName(headerEl, "navbar__dark")
      : removeName(headerEl, "navbar__dark");
  });
};

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
  // audioPlay(audio);
  event(audioBtn, "click", () => {
    const audioClassName = audio.className;
    audioClassName === "play" ? audioPlay(audio) : audioPause(audio);
  });
};

const mountHeaderView = () => mount($("#header"), headerViewTemplate);

export default function init() {
  mountHeaderView();
  audioHandler();
  navStyleHandler();
  navScrollHandler();
  return this;
}
