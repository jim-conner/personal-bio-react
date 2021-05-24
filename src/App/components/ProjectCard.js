import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// import { useHistory } from 'react-router-dom';
import {
  // Button,
  CardImg,
  Card,
  CardTitle,
  CardText,
  CardBody,
} from 'reactstrap';

function ProjectCard({ ...projectObj }) {
  return (
    <div>
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
          <Link to={projectObj.gitHubUrl}></Link>
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
    </div>
  );
}

ProjectCard.propTypes = {
  projectObj: PropTypes.object
  // firebaseKey: PropTypes.string,
  // name: PropTypes.string,
  // position: PropTypes.string,
  // imageUrl: PropTypes.string,
};

export default ProjectCard;
