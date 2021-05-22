import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Button
} from 'reactstrap';
import { signInUser, signOutUser } from '../../helpers/auth';

const NavBar = ({ admin }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const authenticated = () => (
    <>
    <UncontrolledDropdown nav inNavbar>
    <DropdownToggle nav caret>
      Admin
    </DropdownToggle>
    <DropdownMenu right>
      <DropdownItem>
        Bio
      </DropdownItem>
      <DropdownItem>
        Projects
      </DropdownItem>
      <DropdownItem divider />
      <DropdownItem>
        Tech
      </DropdownItem>
    </DropdownMenu>
  </UncontrolledDropdown>
  </>
  );

  const authButtons = () => (
    <>
    <NavItem>
      {
        admin !== true
        && <div>
          {
            admin
              ? <Button color='danger' onClick={signOutUser}>Admin In</Button>
              : <Button color='success' onClick={signInUser}>Admin out</Button>
          }
        </div>
      }
      </NavItem>
      </>
  );

  return (
    <div>
      <Navbar color="info" light expand="lg">
        <NavbarBrand href="/">JIM CONNER</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
            <NavItem>
              <Link className="nav-link" to="/projects">
              PROJECTS
              </Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to="/about">
                ABOUT
              </Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to="/tech">
                TECH
              </Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to="/contact">
                CONTACT
              </Link>
            </NavItem>
            {admin && authenticated()}
            {authButtons()}
            </Nav>
            <NavbarText>
              Welcome!
            </NavbarText>
          </Collapse>
      </Navbar>
    </div>
  );
};

NavBar.propTypes = {
  admin: PropTypes.any
};

export default NavBar;
