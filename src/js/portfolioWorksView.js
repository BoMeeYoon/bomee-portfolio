import { $, mount } from "./hooks/elemetsHooks.js";

const worksViewTemplate = `
  <div class="section__container">
    <h1>My work</h1>
    <h3>Projects</h3>
    <div class="work__categories">
      <button class="category__btn selected">
        All<span class="category__count">3</span>
      </button>
      <button class="category__btn">
        Personal<span class="category__count">1</span>
      </button>
      <button class="category__btn">
        Team<span class="category__count">1</span>
      </button>
      <button class="category__btn">
        etc<span class="category__count">3</span>
      </button>
    </div>
    <div class="work__projects">
      <div class="work__project">
        <div class="project__img">
          <p>😻 주차관리시스템</p>
          <img src="./images/parkinglot.png" alt="project-photo"/>
        </div>
        <div class="project__description">
          <h3>Parking Lot System</h3>
          <p>HTML, CSS, Javascript<br/>node.js, express<br/>mySQL<br/>Webpack, Babel</p>
          <div class="project__description-bts">
            <a href="https://github.com/BoMeeYoon/vanilla-webpack-parkinglot-mvc" target="blank"><i class="fab fa-github-square"></i>View Details</a>
          </div>
        </div>
      </div>
      <div class="work__project">
        <div class="project__img">
          <p>😻 지출기입장</p>
          <img src="./images/expenses.png" alt="project-photo"/>
        </div>
        <div class="project__description">
          <h3>Financial Ledger</h3>
          <p>React.js</p>
          <div class="project__description-bts">
            <a href="https://github.com/BoMeeYoon/react-hooks-financial-ledger" target="blank"><i class="fab fa-github-square"></i>View Details</a>
          </div>
        </div>
      </div>
      <div class="work__project">
        <div class="project__img">
          <p>😻 자동검색창</p>
          <img src="./images/autocomplete.png" alt="project-photo"/>
        </div>
        <div class="project__description">
          <h3>Autocomplete</h3>
          <p>HTML, CSS, Javascript<br/>Webpack, Babel, Eslint</p>
          <div class="project__description-bts">
            <a href="https://github.com/BoMeeYoon/webpack-autocomplete-api-mocker" target="blank"><i class="fab fa-github-square"></i>View Details</a>
          </div>
        </div>
      </div>
      <div class="work__project">
        <div class="project__img">
          <p>😻 온라인교육웹페이지</p>
          <img src="./images/onlineeducation.png" alt="project-photo"/>
        </div>
        <div class="project__description">
          <h3>Online Coding Education</h3>
          <p>HTML, CSS, Javascript<br/>
          Java, Spring, JWT<br/>
          Python, Django, SSR<br/>
          MySQL</p>
          <div class="project__description-bts">
            <a href="https://github.com/BoMeeYoon/group-online-coding-education/blob/master/%EC%98%A8%EB%9D%BC%EC%9D%B8%EA%B5%90%EC%9C%A1_%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8_%EC%B5%9C%EC%A2%85.pdf" target="blank"><i class="fab fa-github-square"></i>View Details</a>
          </div>
        </div>
      </div>    
      <div class="work__project">
        <div class="project__img">
          <p>😻 주차정산시스템</p>
          <img src="./images/parkinglotbefore.png" alt="project-photo"/>
        </div>
        <div class="project__description">
          <h3>Autocomplete</h3>
          <p>HTML, CSS, Javascript, jquery<br/>
          Node.js, express<br/>
          MySQL</p>
          <div class="project__description-bts">
            <a href="https://github.com/BoMeeYoon/mini-project-in-90factory" target="blank"><i class="fab fa-github-square"></i>View Details</a>
          </div>
        </div>
      </div>    
    </div>
  </div>
`;

const mountWorksView = () => mount($("#main__works"), worksViewTemplate);
export default function init() {
  mountWorksView();
  return this;
}
