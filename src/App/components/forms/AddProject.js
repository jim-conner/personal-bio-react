import React from 'react';
// import {
//   Button,
//   CardImg,
//   Card,
//   CardTitle,
//   CardText,
//   CardBody,
// } from 'reactstrap';

function AddProject() {
  return (
    <div>
      {/* <Card body
        className='customizedCard'
        key={firebaseKey}
        color='transparent'
        >
        <CardImg top width="100%" height="200px"src={imageUrl} alt="Player Card"
        />
        <CardBody>
          <CardTitle tag="h4">{name}</CardTitle>
          <CardText tag="h5">{position}</CardText>
          <Button color='info' onClick={() => handleClick('edit')}>
            {editNow ? 'Close Form' : 'Edit Form'}
          </Button>
          <Button color='danger'onClick={() => handleClick('delete')}>Delete Author
          </Button>
          {
          editNow && <PlayerForm
            setPlayers={setPlayers}
            firebaseKey={firebaseKey}
            uid={uid}
            user={user}
            name={name}
            imageUrl={imageUrl}
            position={position}
          />}
        </CardBody>
      </Card> */}
    </div>
  );
}

export default AddProject;
