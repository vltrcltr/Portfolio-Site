import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Client } from './Client'
import { ProjectList } from './ProjectList'
import '../App.css';

/* MOBILE */

export const Projects = () => (
  <Switch>
    <Route exact path='/' component={ProjectList} />
    <Route exact path='/projects' component={ProjectList} />
    <Route path='/projects/:number' component={Client} />
  </Switch>
)

/* DESKTOP */

export const ProjectsDesktop = () => (
  <Switch>
    <Route path='/' component={ProjectList}/>
    <Route path='/projects' component={ProjectList} />
  </Switch>
)

export const ProjectsDesktop2 = () => (
  <Switch>
    <Route path='/projects/:number' component={Client} />
  </Switch>
)
