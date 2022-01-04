<<<<<<< HEAD
<<<<<<< HEAD
import Template from '@templates/Template.js';
import '@styles/main.css';
import '@styles/vars.scss';
=======
import Template from './templates/Template.js';
import "./styles/main.css"
import "./styles/index.scss"
>>>>>>> origin/main
=======
import Template from './templates/Template.js';
import "./styles/main.css"
import "./styles/index.scss"
>>>>>>> upstream/main

(async function App() {
  const main = null || document.getElementById('main');
  main.innerHTML = await Template();
})();
