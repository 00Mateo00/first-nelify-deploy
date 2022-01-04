import getData from '@utils/getData.js';
import github from '@images/github.png';
import Mateo from '@images/mateo.png';
import twitter from '@images/twitter.png';
import instagram from '@images/instagram.png';

const Template = async () => {
  const data = await getData();
  const view = `
    <div class="About">
      <div class="card">
        <div class="card_details">
          <div class="card_photo center circle">
            <img src="${Mateo}" alt="Mateo">
            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" style="enable-background:new -580 439 577.9 194;"
              xml:space="preserve">
              <circle cx="50" cy="50" r="40" />
            </svg>
          </div>
          <p class="card_title">Hi, My name is</p>
          <p class="card_value">Mateo Ossa</p>
        </div>
        <div class="card_userdata">
          <ul>
            <li>mateo.ossa.b@gmail.com</li>
            <li>Chile</li>
          </ul>
        </div>
        <div class="card_social">
          <a href="https://twitter.com/MateoOssa14">
            <img src="${twitter}" />
          </a>
          <a href="https://github.com/00Mateo00">
            <img src="${github}" />
          </a>
          <a href="https://instagram.com/lmateo_ossal/">
            <img src="${instagram}" />
          </a>
        </div>
      </div>
    </div>
  `;
  return view;
};

export default Template;