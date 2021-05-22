import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  Button,
} from 'reactstrap';
import { signInUser, signOutUser } from '../../helpers/auth';

const NavBar = ({ admin }) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  const authenticated = () => (
    <>
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
    </>
  );

  const authButtons = () => (
    <>
      <NavItem>
        {
          admin !== null
          && <div>
            {
              admin
                ? <Button color='danger' onClick={signOutUser}>SIGN OUT</Button>
                : <Button color='info' onClick={signInUser}>SIGN IN</Button>
            }
          </div>
        }
        </NavItem>
    </>
  );

  return (
    <div>
      <Navbar color="dark" dark expand="md">
        <Link className="navbar-brand" to="/">HOME</Link>
        <NavbarToggler onClick={toggleNavbar} className="mr-2"/>
        <Collapse isOpen={!collapsed} navbar>
          <Nav className="mr-auto" navbar>
            { admin && authenticated() }
            { authButtons() }
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

NavBar.propTypes = {
  admin: PropTypes.any
};

export default NavBar;
