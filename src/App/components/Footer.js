import React from 'react';
import { Navbar } from 'reactstrap';

function Footer() {
  return (
    <div className='footer'>
      <Navbar
        expand='sm'
        color='dark'
      >
        <h5>Copyright © Jim Conner 2021</h5>
      </Navbar>
    </div>
  );
}

export default Footer;
