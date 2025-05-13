import './Poster.css';
import { useRef } from 'react';

const Poster = ({ keyArt, description, title, url }) => {
  return (
    <div className="poster-wrapper">
      <img src={keyArt} alt="" />

      <div className="poster-hoverWrapper">
        <div className="poster-hoverContent">
          <h2>{title}</h2>
          <p>{description}</p>
          <a href={url}>Click!</a>
        </div>
      </div>
    </div>
  );
};

export default Poster;
