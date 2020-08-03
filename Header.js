import React from 'react';
import { Link } from 'react-router-dom'
import '../App.css';


export const Header = () => (
  <div className="headerContainer">
    <div className="headerDesc">
      (Shane Wesley) is (a designer / developer) in (Atlanta, GA) (Contact:&nbsp;
      <a href="mailto:shane.simms@gmail.com">Email</a>,&nbsp;
      <a href="https://www.instagram.com/techno_for_an_answer/" target="_blank" rel="noopener noreferrer">Instagram</a>
    ) (Open to collaboration)
    </div>
    <div className="headerNav">
      ⇩ <Link to={'/projects'} className="nav">Projects</Link>
      ⇨ <Link to={'/about'} className="nav">More Info</Link>
    </div>
  </div>
)

export const HeaderDesktop = () => (
  <div className="headerContainer">
    <div className="headerDesc">
      (Shane Wesley) is (a designer / developer) in (Atlanta, GA) (Contact:&nbsp;
      <a href="mailto:shane.simms@gmail.com">Email</a>,&nbsp;
      <a href="https://www.instagram.com/techno_for_an_answer/" target="_blank" rel="noopener noreferrer">Instagram</a>
    ) <br/> (Open to collaboration)
    </div>
    <div className="headerNav">
      ⇩ <span className="nav">Projects</span>
      ⇨ <Link to={'/about'} className="nav">More Info</Link>
    </div>
  </div>
)
