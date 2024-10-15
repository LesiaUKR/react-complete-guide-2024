import React from 'react'
import ProjectItem from './ProjectItem'

export default function ProjectList({projects, onSelectProject, selectedProjectId}) {
  console.log("projects in tasksList", projects);
  return (
    <ul className='mt-8'>
      {projects.map((project) => (<ProjectItem key={project.id} project={project} onSelectProject={onSelectProject} selectedProjectId={selectedProjectId}/>))}
    </ul>
      
  )
}
