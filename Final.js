import React from 'react';
import { Header, HeaderDesktop } from './Header'
import { Main, MainDesktop, Main2Desktop } from '../Main'
import '../App.css';

export const AppMobile = () => (
  <div className="containerDiv">
    <div className="mainDiv1">
      <Header />
      <Main />
    </div>

    <div className="mainDiv2">

    </div>
  </div>
)

export const AppDesktop = () => (
  <div className="containerDiv">
    <div className="mainDiv1">
      <HeaderDesktop />
      <MainDesktop />
    </div>

    <div className="mainDiv2">
      <Main2Desktop />
    </div>
  </div>
)
