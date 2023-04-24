import './index.css';
import chefIcon from './assets/chef.png';

const Home = () => {
  const home = document.createElement('main');
  home.classList.add('content');

  const container = document.createElement('div');
  container.classList.add('container');

  const p1 = document.createElement('p');
  p1.textContent = 'Best pizza in your country!';

  const p2 = document.createElement('p');
  p2.textContent = 'Made with passion since 19011.';

  const img = document.createElement('img');
  img.src = chefIcon;
  img.alt = 'Chef';

  const p3 = document.createElement('p');
  p3.textContent = 'Order online or visit us!';

  container.appendChild(p1);
  container.appendChild(p2);
  container.appendChild(img);
  container.appendChild(p3);
  home.appendChild(container);

  return home;
};

export default Home;
