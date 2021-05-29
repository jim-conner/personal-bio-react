import React, { useState } from 'react';
import {
  Button, Modal, ModalHeader, ModalBody, CardImg,
  // ButtonGroup
  // ModalFooter
} from 'reactstrap';

function CardModal({ ...projectObj }) {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="primary" onClick={toggle}>View</Button>
      <Modal
      isOpen={modal}
      toggle={toggle}
      // className={cardModalStyle}
      style={{
        textAlign: 'center'
      }}
      >
        <ModalHeader toggle={toggle}
          style={{ textAlign: 'center' }}
        >{projectObj.title}
          </ModalHeader>
        <ModalBody>
        <CardImg src={projectObj.image} alt='Player Card'
        />
        {projectObj.description}
        </ModalBody>
        {/* <ModalFooter> */}
          {/* <ButtonGroup> */}
            <Button color="secondary" onClick={toggle}
             style={{ display: 'table-cell' }} href={projectObj.deployUrl} target = '_blank'
             rel = 'noopener noreferrer'
             >Deployed Site
            </Button>
            <Button color="primary" onClick={toggle}
            style={{ display: 'table-cell' }} href={projectObj.gitHubUrl} target = '_blank'
            rel = 'noopener noreferrer'
            >GitHub Repo
              </Button>{' '}
          {/* </ButtonGroup> */}
        {/* </ModalFooter> */}
      </Modal>
    </div>
  );
}

export default CardModal;
