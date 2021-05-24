import React from 'react'
import ProjectCard from '../components/ProjectCard';

function ProjectsView() {
  return (
    <div className='cardHolder'>
      {projects.map((projectInfo) => (
        <ProjectCard
          key={projectInfo.firebaseKey}
          firebaseKey={projectInfo.firebaseKey}

        />
      ))}
    </div>
  );
}

export default ProjectsView;
