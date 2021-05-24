import React from 'react';
// import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// import { useHistory } from 'react-router-dom';
import {
  // Button,
  CardImg,
  Card,
  CardTitle,
  CardText,
  CardBody,
  CardLink,
} from 'reactstrap';

function ProjectCard({ ...projectObj }) {
  return (
      <Card body
        className='customizedCard'
        key={projectObj.firebaseKey}
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
          {/* </Button>
          <Button color='danger'onClick={() => handleClick('delete')}>Delete Author
          </Button> */}
          {/* <Button to={deployedUrl}>Deployed Site</Button> */}
          {/* {
          editNow && <PlayerForm
            setPlayers={setPlayers}
            firebaseKey={firebaseKey}
            uid={uid}
            user={user}
            name={name}
            imageUrl={imageUrl}
            position={position}
          />} */}
        </CardBody>
      </Card>
  );
}

ProjectCard.propTypes = {
  projectObj: PropTypes.object
};

export default ProjectCard;
