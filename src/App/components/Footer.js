import React from 'react';
import { Navbar } from 'reactstrap';

function Footer() {
  return (
    <div className='footer'>
      <Navbar
        light expand='sm'
        color='info'
      >
        <h5>Copyright © Jim Conner 2021</h5>
      </Navbar>
    </div>
  );
}

export default Footer;
