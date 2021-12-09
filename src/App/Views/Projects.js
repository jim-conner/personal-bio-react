import React from 'react';
import PropTypes from 'prop-types';
// import { Chrono } from 'react-chrono';

import ProjectCard from '../components/ProjectCard';

function ProjectsView({ admin, projects, setProjects }) {
  return (
    <div className='projectHolder' id='projects'>
      {/* <Chrono
        projects={projects}
        scrollable
      /> */}
      {projects.map((projectObj) => (
        <ProjectCard
          key={projectObj.firebaseKey}
          admin={admin}
          setProjects={setProjects}
          {...projectObj}
        />
      ))}
    </div>
  );
}
ProjectsView.propTypes = {
  admin: PropTypes.any,
  projects: PropTypes.array,
  setProjects: PropTypes.func,
  projectObj: PropTypes.object
};

export default ProjectsView;
