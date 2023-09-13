import React from 'react';
import './HomePage.css';

const HomePage = () => {
  return (
    <>
      <div className="home-text">
        <h1>CREATIVE AGENCY</h1>
        <p className="paragraph">
          We are a team that generates multiformat strategies and genuine content that connects Brands and Artists with their communities.
        </p>
        <h1>NURTURED - AV - SOUND</h1>
        <p className="paragraph">
          AV Production - Edit | Rec-Mix-Master | Syncros are all in our DNA. Filmmaking | Mobile | Post | Graph.Design | UX feed our content engine.
        </p>
        <h1>TECH AHEAD - WEB3 LABEL</h1>
        <p className="paragraph">
          We were born digital, Artists. We are Phygital, Brands. Canasta is a Web 3 Music Label and Mgmt.- Booking agency with a boutique approach.
        </p>
      </div>
      <div className="video-background">
        <video playsInline="playsinline" autoPlay="autoplay" muted="muted" loop="loop">
          <source
            src="../public/x2mate.com-Travis Scott, Bad Bunny, The Weeknd - K-POP (Official Music Video)-(1080p).mp4"
            type="video/mp4" />
        </video>
      </div>
      <div className="home-text-big">
        <h1 className="hoverable">CREATIVE AGENCY</h1>
        <p className="paragraph">
          We are a team that generates multiformat strategies and genuine content that connects Brands and Artists with their communities.
        </p>
        <h1 className="hoverable">NURTURED - AV - SOUND</h1>
        <p className="paragraph">
          AV Production - Edit | Rec-Mix-Master | Syncros are all in our DNA. Filmmaking | Mobile | Post | Graph.Design | UX feed our content engine.
        </p>
        <h1 className="hoverable">TECH AHEAD - WEB3 LABEL</h1>
        <p className="paragraph">
          We were born digital, Artists. We are Phygital, Brands. Canasta is a Web 3 Music Label and Mgmt.- Booking agency with a boutique approach.
        </p>
      </div>
      <img src="public\logosony.webp" className="brands" alt="Logo" />
    </>
  );
};

export default HomePage;
