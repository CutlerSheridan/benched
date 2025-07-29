import { useState } from 'react';
import logoImg from './assets/logo-2-img.png';
import logoText from './assets/logo-2-text.png';
import logoTextCropped from './assets/logo-text-cropped.png';
import './App.css';
import Poster from './components/Poster';
// import preppedPoster from './assets/posters/fully-prepped.png';
import oldBallPoster from './assets/posters/old-ball.png';
import swingPoster from './assets/posters/swing.png';
import comingSoonPoster from './assets/posters/coming-soon.png';

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
              keyArt={oldBallPoster}
              title="Old Ball"
              description="After 25 years stuck in a shed, OLD BALL is finally free—and ready to talk trash like it’s 1999."
              url="https://www.instagram.com/oldballshow/reels/"
            />
            <Poster
              keyArt={swingPoster}
              title="Take a Swing"
              description="Speed dating hits the fairway as nine singles tee off to win the heart of one standout golfer."
              url="https://vimeo.com/1084719907"
            />
            {/* <Poster
              keyArt={preppedPoster}
              title="Fully Prepped"
              description="Chanice Ball serves up everything you need to know—so you can keep up and convert that sports newbie friend. Sports news made simple."
              url="https://www.tiktok.com/@fullyprepped"
            /> */}
            <Poster
              keyArt={comingSoonPoster}
              title="Coming Soon"
              description="More great shows dropping soon!"
              url="https://youtube.com/benched"
            />
          </div>

          <div className="home-about">
            <p>
              BENCHED is a studio dedicated to making top-tier comedy + sports
              shows for all platforms.
            </p>
            <div className="home-aboutHeading">
              <img src={logoTextCropped} />
            </div>

            <div className="home-contactButtons">
              <a href="mailto:contact@benched.co">
                <i class="fa-solid fa-envelope fa-lg"></i>
              </a>
              <a href="https://youtube.com/benched">
                <i class="fa-brands fa-youtube fa-lg"></i>
              </a>
              <a href="https://www.instagram.com/benched_studio">
                <i class="fa-brands fa-square-instagram fa-lg"></i>
              </a>
            </div>
          </div>
        </div>

        <footer>
          <p>© 2025 | Benched, LLC</p>
          <div>
            <img src={logoTextCropped} />
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
