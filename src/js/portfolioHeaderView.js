import { $, mount, event } from "./hooks/elemetsHooks.js"

const headerViewTemplate = `
  <div class="header__logo">
    <i class="fas fa-fan audio-btn" title="Music Player"></i>
    <a href="#none">BOMEE's PORTFOLIO</a>
  </div>
  <nav class="header__nav">
    <ul class="header__nav-menu">
      <li class="header__nav-item active">IT'S ME</li>
      <li class="header__nav-item">SKILLS</li>
      <li class="header__nav-item">WORKS</li>
      <li class="header__nav-item">CONTACT</li>
    </ul>
  </nav>
`;

const audioHandler = () => {
  const audioBtn = $(".audio-btn");
  const audio = new Audio("./audio/bgm_cut.mp3");

  const audioPlay = audio => {
    audio.play();
    audio.classList.remove("play");
    audioBtn.classList.add("spin");
  };
  const audioPause = audio => {
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

const mountHeaderView = () => mount($("#header"), headerViewTemplate);

export default function init() {
  mountHeaderView();
  audioHandler();
  return this;
};


