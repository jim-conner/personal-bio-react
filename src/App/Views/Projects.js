import React, { useState } from 'react';
import PropTypes from 'prop-types';
import getProjects from '../../helpers/data/projectData';
import ProjectCard from '../components/ProjectCard';

function ProjectsView() {
  const [projects, setProjects] = useState([]);

  getProjects().then((projectsArray) => (setProjects(projectsArray)));
  return (
    <div className='cardHolder'>
      {projects.map((projectObj) => (
        <ProjectCard
          key={projectObj.firebaseKey}
          {...projectObj}
          // firebaseKey={projectObj.firebaseKey}
          // image={projectObj.image}
        />
      ))}
    </div>
  );
}
ProjectsView.propTypes = {
  projectObj: PropTypes.object
  // firebaseKey: PropTypes.string,
  // name: PropTypes.string,
  // position: PropTypes.string,
  // imageUrl: PropTypes.string,
};

export default ProjectsView;
