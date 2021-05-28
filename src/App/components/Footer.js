import React from 'react';
import { Navbar } from 'reactstrap';

function Footer() {
  return (
    <>
      <Navbar
        style={{ textCenter: true }}
        light expand='sm'
        color='info'
        fixed='bottom'
        // className='footer'
      >
        <h5>Copyright © Jim Conner 2021</h5>
      </Navbar>
    </>
  );
}

export default Footer;
