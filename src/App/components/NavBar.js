import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// import { signInUser, signOutUser } from '../../helpers/auth';

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
  NavbarText
} from 'reactstrap';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="lg">
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
            </Nav>
            <NavbarText>test test
            </NavbarText>
          </Collapse>
      </Navbar>
    </div>
  );
};

// const NavBar = ({ admin }) => {
//   const [collapsed, setCollapsed] = useState(true);

//   const toggleNavbar = () => setCollapsed(!collapsed);

//   const authenticated = () => (
//     <>
//     </>
//   );

//   const authButtons = () => (
//     <>
//       <NavItem>
//         {
//           admin !== null
//           && <div>
//             {
//               admin
//                 ? <Button color='danger' onClick={signOutUser}>SIGN OUT</Button>
//                 : <Button color='info' onClick={signInUser}>SIGN IN</Button>
//             }
//           </div>
//         }
//         </NavItem>
//     </>
//   );

//   return (
//     <div>
//       <Navbar color="dark" dark expand="md">
//         <Link className="navbar-brand" to="/">HOME</Link>
//         <NavbarToggler onClick={toggleNavbar} className="mr-2"/>
//         <Collapse isOpen={!collapsed} navbar>
//           <Nav className="mr-auto" navbar>
//             { admin && authenticated() }
//             { authButtons() }
//           </Nav>
//         </Collapse>
//       </Navbar>
//     </div>
//   );
// };

NavBar.propTypes = {
  admin: PropTypes.any
};

export default NavBar;
