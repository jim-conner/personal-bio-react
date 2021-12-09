import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import {
  Modal, ModalHeader, ModalBody, CardImg, CardImgOverlay, ModalFooter,
} from 'reactstrap';

function CardModal({ ...projectObj }) {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <CardImgOverlay
      style={{ cursor: 'pointer' }}
      onClick={toggle}
    >
      <Modal
      isOpen={modal}
      toggle={toggle}
      centered
      >
        <ModalHeader toggle={toggle} >
          {projectObj.title}
        </ModalHeader>
        <ModalBody>
        <CardImg src={projectObj.image} alt='Project Card'/>

            {projectObj.description}
        </ModalBody>
        <ModalFooter style={{ display: 'flex', justifyContent: 'center' }}>
          <a
            style={{ display: 'table-cell' }}
            href={projectObj.deployUrl}
            target = '_blank'
            rel = 'noopener noreferrer'
          >
              Deployed Site
          </a>
          {' | '}
          <a
            style={{ display: 'table-cell' }}
            href={projectObj.gitHubUrl}
            target = '_blank'
            rel = 'noopener noreferrer'
          >
            GitHub Repo
          </a>
        </ModalFooter>
      </Modal>
    </CardImgOverlay>
  );
}

export default CardModal;
