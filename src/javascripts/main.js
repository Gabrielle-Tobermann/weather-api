// USE WITH FIREBASE AUTH
// import checkLoginStatus from './helpers/auth';
import 'bootstrap'; // import bootstrap elements and js

import '../styles/main.scss';
import domBuilder from './components/domBuilder';
import weatherForm from './components/form';
import domEvents from './helpers/domEvents';

const init = () => {
  domBuilder();
  weatherForm();
  domEvents();
};

init();
