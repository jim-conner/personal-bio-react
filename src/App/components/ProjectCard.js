import React from 'react';
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
import { deleteProject } from '../../helpers/data/projectData';

function ProjectCard({ admin, setProjects, ...projectObj }) {
  // const [editNow, setEditNow] = useState(false);

  const handleClick = (type) => {
    if (type === 'delete') {
      deleteProject(projectObj.firebaseKey).then((response) => console.warn(response));
      // console.warn('trying to delete', projectObj.firebaseKey);
      // console.warn(deleteProject(projectObj.firebaseKey));
      // deleteProject(projectObj.firebaseKey)
      //   .then((projectsArray) => setProjects(projectsArray));
    }
  };

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
            {/* {editNow ? 'Close Form' : 'Edit Form'} */}
          {/* <Button to={deployedUrl}>Deployed Site</Button> */}
          {/* {
            editNow &&
            AddProject edit for will go here
           */}
        </CardBody>
        {
            admin
              ? <>
                <Button color='success' onClick={() => handleClick('edit')}>Edit</Button>
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
