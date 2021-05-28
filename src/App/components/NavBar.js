import React, { useState } from 'react';
import {
  // NavLink,
  Link
} from 'react-router-dom';
import PropTypes from 'prop-types';
import { NavHashLink } from 'react-router-hash-link';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  // UncontrolledDropdown,
  // DropdownToggle,
  // DropdownMenu,
  // DropdownItem,
  Button
} from 'reactstrap';
import { signInUser, signOutUser } from '../../helpers/auth';

const NavBar = ({ admin }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const authenticated = () => (
    <>
    <NavItem>
      <Link className='nav-link'
      to='/admin'>
      Manage Projects
      </Link>
    </NavItem>
  </>
  );

  const authButtons = () => (
    <NavItem>
      {
        admin !== null
        && <>
          {
            admin
              ? <Button color='danger' onClick={signOutUser}>Admin Out</Button>
              : <Button color='success' onClick={signInUser}>Admin In</Button>
          }
        </>
      }
      </NavItem>
  );

  return (
    <div>
      <Navbar color='info' fixed='top' light expand='sm'>
        <NavHashLink to='/'>JIM CONNER</NavHashLink>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className='mr-auto' navbar>
            <NavHashLink className='nav-link' to='/projects'>Projects</NavHashLink>
            <NavHashLink className='nav-link' to='/projects'>About</NavHashLink>
            <NavHashLink className='nav-link' to='/projects'>Tech</NavHashLink>
            <NavHashLink className='nav-link' to='/projects'>Contact</NavHashLink>
            {/* <NavItem>
              <Link className='nav-link' to='/about'>
                ABOUT
              </Link>
            <NavItem>
              <NavHashLink className='nav-link' to='/projects'>
              PROJECTS
              </NavHashLink>
            </NavItem>
            </NavItem>
            <NavItem>
              <Link className='nav-link' to='/tech'>
                TECH
              </Link>
            </NavItem>
            <NavItem>
              <Link className='nav-link' to='/contact'>
                CONTACT
              </Link>
            </NavItem> */}
            {admin && authenticated()}
            {authButtons()}
            </Nav>
            {/* <NavbarText>
              Welcome!
            </NavbarText> */}
          </Collapse>
      </Navbar>
    </div>
  );
};

NavBar.propTypes = {
  admin: PropTypes.any,
  fixed: PropTypes.string
};

export default NavBar;
