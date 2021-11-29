import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Modal, ModalHeader, ModalBody, CardImg, CardImgOverlay, ModalFooter,
  // ButtonGroup
  // ModalFooter
} from 'reactstrap';

function CardModal({ ...projectObj }) {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <CardImgOverlay style={{ cursor: 'pointer' }} onClick={toggle}
    >
      <Modal
      isOpen={modal}
      toggle={toggle}
      centered
      >
        <CardImg src={projectObj.image} alt='Player Card'/>
        <ModalHeader toggle={toggle} >
          {projectObj.title}
        </ModalHeader>
        <ModalBody>
            {projectObj.description}
        </ModalBody>
        <ModalFooter style={{ display: 'flex', justifyContent: 'center' }}>
          <Link color="secondary"
            style={{ display: 'table-cell' }} href={projectObj.deployUrl} target = '_blank'
            rel = 'noopener noreferrer'
            >Deployed Site
          </Link>
          {' | '}
          <Link color="primary"
          style={{ display: 'table-cell' }} href={projectObj.gitHubUrl} target = '_blank'
          rel = 'noopener noreferrer'
          >GitHub Repo
          </Link>
        </ModalFooter>
      </Modal>
    </CardImgOverlay>
  );
}

export default CardModal;
