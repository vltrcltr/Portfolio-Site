import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { About } from './Components/AboutMe'
import { Projects, ProjectsDesktop, ProjectsDesktop2 } from './Components/Projects'


export const Main = () => (
  <div className="mainContainer">
    <Switch>
      <Route exact path='/' component={Projects}/>
      <Route path='/projects' component={Projects}/>
      <Route path='/about' component={About} />
    </Switch>
  </div>
)

/* DESKTOP */

export const MainDesktop = () => (
  <div className="mainContainer">
    <Switch>
      <Route path='/' component={ProjectsDesktop}/>
      <Route path='/projects' component={ProjectsDesktop}/>
    </Switch>
  </div>
)

export const Main2Desktop = () => (
  <div className="mainContainer2">
    <Switch>
      <Route exact path='/' component={About}/>
      <Route path='/about' component={About}/>
      <Route path='/projects/:number' component={ProjectsDesktop2}/>
    </Switch>
  </div>
)
