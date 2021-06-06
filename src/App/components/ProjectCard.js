import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import {
  Button,
  CardImg,
  Card,
} from 'reactstrap';
import { deleteProject } from '../../helpers/data/projectData';
import AddEditProjectForm from './forms/AddProject';
import CardModal from './forms/CardModal';

function ProjectCard({ admin, setProjects, ...projectObj }) {
  const [editNow, setEditNow] = useState(false);
  const history = useHistory();

  const handleClick = (type) => {
    if (type === 'delete') {
      deleteProject(projectObj)
        .then((projectsArray) => setProjects(projectsArray));
    } else if (type === 'edit') {
      setEditNow((prevState) => !prevState);
    } else if (type === 'view') {
      history.push(`/projects/${projectObj.firebaseKey}`);
    }
  };

  // const adminButtons = () => {
  //   <>
  //   {
  //     admin
  //       ? <>
  //           <Button color='success' onClick={() => handleClick('edit')}
  //           >{editNow ? 'Close Form' : 'Edit Form'}</Button>
  //           <Button color='danger' onClick={() => handleClick('delete')}>Delete</Button>
  //         </>
  //       : ''
  //   }
  //       {
  //       editNow
  //       && <AddEditProjectForm
  //       setProjects={setProjects}
  //       {...projectObj}
  //       />
  //       }
  //   </>;
  // };
  return (
      <Card body
        className='customizedCard'
        color='transparent'
        >
        <CardImg top width='100%' height='200px'src={projectObj.image} alt='Player Card'
        />
        {/* <CardBody>
          <CardTitle tag='h3'>{projectObj.title}</CardTitle>
          <CardText tag='h5'>{projectObj.description}</CardText>
          <CardLink
          style={{ display: 'table-cell' }} href={projectObj.gitHubUrl} target = '_blank'
          rel = 'noopener noreferrer'
          >GitHub Repo
          </CardLink>
          <CardLink
          style={{ display: 'table-cell' }} href={projectObj.deployUrl} target = '_blank'
          rel = 'noopener noreferrer'
          >Deployed Site
          </CardLink>
          <Button color='primary' onClick={() => handleClick('view')}>View Details</Button>
        </CardBody> */}
          <CardModal
            {...projectObj}
          />
     {/* {adminButtons()} */}
     {
      admin
        ? <>
            <Button color='success' onClick={() => handleClick('edit')}
            >{editNow ? 'Close Form' : 'Edit Form'}</Button>
            <Button color='danger' onClick={() => handleClick('delete')}>Delete</Button>
          </>
        : ''
    }
        {
        editNow
        && <AddEditProjectForm
        setProjects={setProjects}
        {...projectObj}
        />
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
