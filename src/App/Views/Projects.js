import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { getProjects } from '../../helpers/data/projectData';
import ProjectCard from '../components/ProjectCard';

function ProjectsView({ admin, projects, setProjects }) {
  useEffect(() => {
    getProjects().then((projectsArray) => (setProjects(projectsArray)));
  }, []);

  return (
    <div className='cardHolder'>
      {projects.map((projectObj, i) => (
        <ProjectCard
          // key={projectObj.firebaseKey}
          key={i}
          admin={admin}
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
