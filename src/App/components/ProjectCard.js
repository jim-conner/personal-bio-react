import React from 'react';
import { Link } from 'react-router-dom';
// import { useHistory } from 'react-router-dom';
import {
  // Button,
  CardImg,
  Card,
  CardTitle,
  CardText,
  CardBody,
} from 'reactstrap';

function ProjectCard() {
  return (
    <div>
      <Card body
        className='customizedCard'
        key={firebaseKey}
        color='transparent'
        >
        <CardImg top width="100%" height="200px"src={image} alt="Player Card"
        />
        <CardBody>
          <CardTitle tag="h3">{title}</CardTitle>
          <CardText tag="h5">{description}</CardText>
          <Link to={gitHubUrl}></Link>
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

export default ProjectCard;
