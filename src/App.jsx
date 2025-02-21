import { useState } from 'react';
import logoImg from './assets/logo-2-img.png';
import logoText from './assets/logo-2-text.png';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="home-flexWrapper">
        <div className="flex-padding"></div>

        <div className="content-wrapper">
          <div className="logo-wrapper">
            <img src={logoImg} alt="Benched logo image" />
            <img src={logoText} alt="Benched logo text" />
          </div>
          <p>
            <a href="mailto:contact@benched.co" target="_blank">
              Contact us
            </a>
          </p>
        </div>

        <footer>© 2025 | Benched, LLC</footer>
      </div>
    </>
  );
}

export default App;
