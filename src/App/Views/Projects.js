import React, {
} from 'react';
import PropTypes from 'prop-types';
import ProjectCard from '../components/ProjectCard';

function ProjectsView({ admin, projects, setProjects }) {
  return (
    <div className='projectHolder' id='projects'>
      {projects.map((projectObj) => (
        <ProjectCard
          key={projectObj.firebaseKey}
          // key={i}
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
