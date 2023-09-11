import React from 'react';
import './HomePage.css';

const HomePage = () => {
  return (
    <>
      <div className="home-text">

        <h1>CREATIVE AGENCY</h1>
        <p>We are a team that generates multiformat strategies and genuine content that connects Brands and Artists with their communities.</p>
        <h1>NURTURED - AV - SOUND</h1>
        <p>AV Production - Edit | Rec-Mix-Master | Syncros are all in our DNA. Filmmaking | Mobile | Post | Graph.Design | UX feed our content engine.</p>
        <h1>TECH AHEAD - WEB3 LABEL</h1>
        <p>We were born digital, Artists. We are Phygital, Brands. Canasta is a Web 3 Music Label and Mgmt.- Booking agency with boutique approach.</p>
      </div>
      <div className="video-background">
        <video playsInline="playsinline" autoPlay="autoplay" muted="muted" loop="loop">
          <source
            src="../public/x2mate.com-Travis Scott, Bad Bunny, The Weeknd - K-POP (Official Music Video)-(1080p).mp4"
            type="video/mp4" />
        </video>
      </div>

      <img src='public\logosony.webp' className='brands'></img>
    </>
  );
};

export default HomePage;