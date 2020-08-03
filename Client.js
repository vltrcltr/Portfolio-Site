import React from 'react'
import { ProjectAPI } from '../api'
import { Link } from 'react-router-dom'

export const Client = (props) => {

  const project = ProjectAPI.get(
    parseInt(props.match.params.number, 10)
  )

  return (
    <div className="clientContainer">
      <div className="clientInfo">

        <div className="projectClient">{project.client}</div>
        <div className="projectDesc">{project.description}</div>

        {project.images.length > 0 && project.images.map(image =>
          <img src={image.url} key={image.id} className="projectImage" alt="Project"/>)
        }

        <span className="prevNextLinks">⇦ <Link to={`/projects/${project.prev}`}>Prev</Link></span>
        <span className="prevNextLinks">⇨ <Link to={`/projects/${project.next}`}>Next</Link></span>

      </div>
    </div>
  )
}
