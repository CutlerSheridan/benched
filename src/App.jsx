import { useState } from 'react';
import logoImg from './assets/logo-2-img.png';
import logoText from './assets/logo-2-text.png';
import './App.css';
import Poster from './components/Poster';
import preppedPoster from './assets/posters/fully-prepped.png';
import oldBallPoster from './assets/posters/old-ball.png';
import swingPoster from './assets/posters/swing.png';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="home-flexWrapper">
        <div className="home-contentWrapper">
          <header className="home-divider">
            <div className="home-dividerLine home-dividerLine1"></div>
            <img src={logoImg} alt="Benched logo" />
            <div className="home-dividerLine home-dividerLine2"></div>
          </header>

          <div className="home-posterGrid">
            <Poster
              keyArt={swingPoster}
              title="Take a Swing"
              description="This show is for all the golf-lovers out there"
              url="https://youtube.com"
            />
            <Poster
              keyArt={oldBallPoster}
              title="Old Ball"
              description="This ball is old"
              url="https://youtube.com"
            />
            <Poster
              keyArt={preppedPoster}
              title="Fully Prepped"
              description="If you're gonna play basketball, you better be prepped.  It's the most fun sport on the planet.  Give me any sport and I'll pick basketball."
              url="https://youtube.com"
            />
          </div>

          <div className="home-about">
            <p>
              BENCHED is a studio dedicated to making top-tier comedy + sports
              shows for all platforms.
            </p>

            <div className="home-contactButtons">
              <a href="mailto:contact@benched.co">Contact us</a>
            </div>
          </div>
        </div>

        <footer>© 2025 | Benched, LLC</footer>
      </div>
    </>
  );
}

export default App;
