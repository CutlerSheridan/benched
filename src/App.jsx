import { useState } from 'react';
import benchedLogo from './assets/benched-logo.png';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div class="home-flexWrapper">
        <div class="flex-padding"></div>

        <div class="content-wrapper">
          <div class="logo-wrapper">
            <img src={benchedLogo} alt="Benched logo" />
          </div>
          <p>
            <a href="mailto:contact@dumbdraper.com" target="_blank">
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
