import React, { useState } from 'react';
import {
  // NavLink,
  Link
} from 'react-router-dom';
import PropTypes from 'prop-types';
// import { HashLink } from 'react-router-hash-link';
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
    {/* <UncontrolledDropdown nav inNavbar active>
    <DropdownToggle nav caret>
      Admin
    </DropdownToggle>
    <DropdownMenu right>
      <DropdownItem>
      <NavLink to='/projects-admin'>
      Projects 2nd try
      </NavLink>
      </DropdownItem>
      <DropdownItem as={Link} to='/projects-admin'>
        Manage Projects
      </DropdownItem>
      <DropdownItem divider />
      <DropdownItem>
        Tech
      </DropdownItem>
    </DropdownMenu>
  </UncontrolledDropdown> */}
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
      <Navbar color='info' light expand='lg'>
        <Link className='nav-link' to='/'>JIM CONNER</Link>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className='mr-auto' navbar>
            <NavItem>
              <Link className='nav-link' to='/projects'>
              PROJECTS
              </Link>
            </NavItem>
            <NavItem>
              <Link className='nav-link' to='/about'>
                ABOUT
              </Link>
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
            </NavItem>
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
  admin: PropTypes.any
};

export default NavBar;
