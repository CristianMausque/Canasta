import React from 'react';
import './HomePage.css';

const HomePage = () => {
  return (
    <>
      <div className="video-background">
        <video playsInline="playsinline" autoPlay="autoplay" muted="muted" loop="loop">
          <source
            src="../public/x2mate.com-Travis Scott, Bad Bunny, The Weeknd - K-POP (Official Music Video)-(1080p).mp4"
            type="video/mp4" />
        </video>
      </div>
      <div className="home-text">

        <h1>CREATIVE AGENCY</h1>
        <h1>NURTURED - AV - SOUND</h1>
        <h1>TECH AHEAD - WEB3 LABEL</h1>
      </div>

      <img src='public\logosony.webp' className='brands'></img>
    </>
  );
};

export default HomePage;