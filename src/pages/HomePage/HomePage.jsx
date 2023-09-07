import React from 'react';
import './HomePage.css';

const HomePage = () => {
  return (
    <>
    <div className="modelo"><h1>soy tu jefe</h1></div>
      <div className="video-background">
        <video playsInline="playsinline" autoPlay="autoplay" muted="muted" loop="loop">
          <source 
          src="../public/x2mate.com-Travis Scott, Bad Bunny, The Weeknd - K-POP (Official Music Video)-(1080p).mp4" 
          type="video/mp4" />
        </video>      
      </div>
      <div className="overlay-text">LETRAS DE PRUEBA</div>
    </>
  );
};

export default HomePage;