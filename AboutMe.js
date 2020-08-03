import React from 'react';
import '../App.css';

export const About = () => (
  <div className="aboutContainer">
    <span className="aboutImg">
      <img src={require("../Images/me.jpg")} className="projectImage" alt="Self"/>
    </span>
    <span className="aboutText">
      (S.W.) is (a print / web-based designer / developer. Heavily influenced
      by punk and rave culture, with a passion for color theory and brutalist design.
      His work seeks to merge the iconoclastic with the accessible, and is always
      looking for new ways to express the intangible through print and digital media.)
    </span>
    <span className="aboutText">
      (Current projects include: a consolidated online presence for DJ Zenpond, and
      learning WebGL.)
    </span>
  </div>
)
