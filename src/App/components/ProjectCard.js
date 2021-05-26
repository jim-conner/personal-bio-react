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
    switch (type) {
      case 'delete':
        // console.warn(projectObj.firebaseKey);
        // console.warn(deleteProject(projectObj.firebaseKey));
        deleteProject(projectObj.firebaseKey)
          .then((projectsArray) => setProjects(projectsArray));

        break;
      case 'edit':
        // setEditNow((prevState) => !prevState);
        break;
      default:
        console.warn('nothing selected');
    }
  };

  // const adminOnlyButtons = () => (
  //   <>
  //     {
  //       admin !== null
  //       && <>
  //         {
  //           admin === true
  //             ? <>
  //               <Button color='danger'onClick={() => handleClick('delete')}>Delete</Button>
  //               <Button color='success'onClick={() => handleClick('edit')}>Edit</Button>
  //             </>
  //             : ''
  //         }
  //       </>
  //     }
  //     </>
  // );

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
          {/* <Button color='info' onClick={() => handleClick('edit')}> */}
            {/* {editNow ? 'Close Form' : 'Edit Form'} */}
          {/* </Button> */}
          {/* <Button to={deployedUrl}>Deployed Site</Button> */}
          {/* {
            editNow && <PlayerForm change this fr0om player
            setPlayers={setPlayers}
            firebaseKey={firebaseKey}
            uid={uid}
            user={user}
            name={name}
            imageUrl={imageUrl}
            position={position}
          />} */}
        </CardBody>
        {
            admin
              ? <>
                <Button color='success' onClick={() => handleClick('edit')}>Edit</Button>
                <Button color='danger' onClick={() => handleClick('delete')}>Delete</Button>
              </>
              : ''
          }
         {/* {adminOnlyButtons()} */}
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
