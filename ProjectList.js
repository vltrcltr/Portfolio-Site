import React from 'react'
import { ProjectAPI } from '../api'
import { Link } from 'react-router-dom'

export const ProjectList = () => (
  <div>
      {
        ProjectAPI.all().map(p => (
          <div key={p.number} className="projectList">
            <Link to={`/projects/${p.number}`}>{p.title}</Link>
            <span className="year">({p.year})</span>
          </div>
        ))
      }
  </div>
)
