import './Poster.css';
import { useRef } from 'react';

const Poster = ({ keyArt, description, url }) => {
  return (
    <div className="poster-wrapper">
      <img src={keyArt} alt="" />

      <div className="poster-hoverWrapper">
        <p>{description}</p>
        <a href={url}>Click!</a>
      </div>
    </div>
  );
};

export default Poster;
