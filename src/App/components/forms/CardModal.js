import React, { useState } from 'react';
import {
  Button, Modal, ModalHeader, ModalBody, CardImg, CardImgOverlay, ModalFooter,
  // ButtonGroup
  // ModalFooter
} from 'reactstrap';

function CardModal({ ...projectObj }) {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <CardImgOverlay style={{ cursor: 'pointer' }} onClick={toggle}
    // className='cardModalStyle'
    >
      {/* <Button color="primary" >View</Button> */}
      <Modal
      isOpen={modal}
      toggle={toggle}
      centered
      // style={{
      //   textAlign: 'center'
      // }}
      >
        <ModalHeader toggle={toggle}
        >{projectObj.title}
          </ModalHeader>
        <ModalBody>
        <CardImg src={projectObj.image} alt='Player Card'
        />
        {projectObj.description}
        </ModalBody>
        <ModalFooter>
          {/* <ButtonGroup> */}
            <Button color="secondary"
             style={{ display: 'table-cell' }} href={projectObj.deployUrl} target = '_blank'
             rel = 'noopener noreferrer'
             >Deployed Site
            </Button>
            <Button color="primary"
            style={{ display: 'table-cell' }} href={projectObj.gitHubUrl} target = '_blank'
            rel = 'noopener noreferrer'
            >GitHub Repo
              </Button>{' '}
          {/* </ButtonGroup> */}
        </ModalFooter>
      </Modal>
    </CardImgOverlay>
  );
}

export default CardModal;
