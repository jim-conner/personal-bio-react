import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// import { useHistory } from 'react-router-dom';
import {
  Button,
  CardImg,
  Card,
  CardTitle,
  CardText,
  CardBody,
  CardLink,
} from 'reactstrap';
import { deleteProject, updateProject } from '../../helpers/data/projectData';
import AddEditProjectForm from './forms/AddProject';

function ProjectCard({ admin, setProjects, ...projectObj }) {
  const [editNow, setEditNow] = useState(false);

  const handleClick = (type) => {
    if (type === 'delete') {
      deleteProject(projectObj)
        .then((projectsArray) => setProjects(projectsArray));
    } else if (type === 'edit') {
      updateProject(projectObj).then((response) => console.warn(response));
    }
  };
  console.warn(setEditNow);
  return (
      <Card body
        className='customizedCard'
        // key={projectObj.firebaseKey}
        color='transparent'
        >
        <CardImg top width="100%" height="200px"src={projectObj.image} alt="Player Card"
        />
        <CardBody>
          <CardTitle tag="h3">{projectObj.title}</CardTitle>
          <CardText tag="h5">{projectObj.description}</CardText>
          <CardLink href={projectObj.gitHubUrl}>GitHub Repo</CardLink>
          {/* <Button to={deployedUrl}>Deployed Site</Button> */}
            {editNow ? 'Close Form' : 'Edit Form'}
            {
            editNow
            && <AddEditProjectForm/>
            }
        </CardBody>
        {
            admin
              ? <>
                <Button color='success' onClick={() => handleClick('edit')}
                >{editNow ? 'Close Form' : 'Edit Form'}</Button>
                <Button color='danger' onClick={() => handleClick('delete')}>Delete</Button>
              </>
              : ''
          }
      </Card>
  );
}

ProjectCard.propTypes = {
  admin: PropTypes.any,
  // projects: PropTypes.array,
  setProjects: PropTypes.func,
  projectObj: PropTypes.object
};

export default ProjectCard;
