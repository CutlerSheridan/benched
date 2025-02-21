import { useState } from 'react';
import benchedLogo from './assets/benched-logo.png';
import logo2Img from './assets/logo-2-img.png';
import logo2Text from './assets/logo-2-text.png';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="home-flexWrapper">
        <div className="flex-padding"></div>

        <div className="content-wrapper">
          <div className="logo-wrapper">
            {/* <img src={benchedLogo} alt="Benched logo" /> */}
            <img src={logo2Img} alt="Benched logo image" />
            <img src={logo2Text} alt="Benched logo text" />
          </div>
          <p>
            <a href="mailto:contact@benched.co" target="_blank">
              Contact us
            </a>
          </p>
        </div>

        <footer>
          © 2025 | A{' '}
          <a href="https://hugeconglomerate.co">Huge Conglomerate Co.</a>{' '}
          Company
        </footer>
      </div>
    </>
  );
}

export default App;
