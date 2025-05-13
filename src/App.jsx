import { useState } from 'react';
import logoImg from './assets/logo-2-img.png';
import logoText from './assets/logo-2-text.png';
import './App.css';
import Poster from './components/Poster';
import preppedPoster from './assets/posters/fully-prepped.png';
import oldBallPoster from './assets/posters/old-ball.png';
import swing from './assets/posters/swing.png';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="home-flexWrapper">
        {/* <div className="flex-padding"></div> */}

        {/* <div className="content-wrapper">
          <div className="logo-wrapper">
            <img src={logoImg} alt="Benched logo image" />
            <img src={logoText} alt="Benched logo text" />
          </div>
          <p>
            <a href="mailto:contact@benched.co" target="_blank">
              Contact us
            </a>
          </p>
        </div> */}

        <div className="home-contentWrapper">
          <header className="home-divider">
            <img src={logoImg} alt="" />
          </header>

          <div className="home-posterGrid"></div>
        </div>

        <footer>© 2025 | Benched, LLC</footer>
      </div>
    </>
  );
}

export default App;
