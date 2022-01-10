import React, { useState } from 'react';
import {
// NavLink,
  Link
} from 'react-router-dom';
import PropTypes from 'prop-types';
import { HashLink } from 'react-router-hash-link';
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
  // Button,
  // NavbarText
} from 'reactstrap';
// import { signInUser, signOutUser } from '../../helpers/auth';

const NavBar = ({ admin }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const authenticated = () => (
    <NavItem>
      <Link className='nav-link' to='/admin'>
      Admin View
      </Link>
    </NavItem>
  );

  // const authButtons = () => (
  //   <NavItem>
  //     {
  //       admin !== null
  //       && <>
  //         {
  //           admin
  //             ? <Button color='danger' onClick={signOutUser}>Admin Out</Button>
  //             : <Button color='success' onClick={signInUser}>Admin In</Button>
  //         }
  //       </>
  //     }
  //     </NavItem>
  // );

  return (
    <div className='header'>
      <Navbar color='light' sticky='true' light expand='sm'>
        <HashLink className='nav-name' to='/#'>
          JIM CONNER
        </HashLink>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className='mr-auto' navbar>
            <NavItem>
              <HashLink className='nav-link' to='/#projects'>Projects</HashLink>
            </NavItem>
            <NavItem>
            <HashLink className='nav-link' to='/#bio'>About</HashLink>
            </NavItem>
            <NavItem>
            <HashLink className='nav-link' to='/#tech'>Tech</HashLink>
            </NavItem>
            {/* <NavItem>
            <HashLink className='nav-link' to='/#contact'>Contact</HashLink>
            </NavItem> */}
            {admin && authenticated()}
            {/* {authButtons()} */}
            </Nav>
            <a
              className='btn btn-floating'
              href='mailto:jamesdavidconner@gmail.com'
              >
              <i className="fas fa-envelope fa-2x"></i>
              </a>
              <a
              className='btn btn-floating'
              href='https://www.linkedin.com/in/jim-conner'
              style={{ display: 'table-cell' }}
              target = '_blank'
              rel = 'noopener noreferrer'
              >
                <i className="fab fa-linkedin fa-2x" ></i>
              </a>
              <a
              className='btn btn-floating'
              href='https://github.com/jim-conner'
              style={{ display: 'table-cell' }}
              target = '_blank'
              rel = 'noopener noreferrer'
              >
              <i className="fab fa-github-square fa-2x"></i>
              </a>
          </Collapse>
      </Navbar>
    </div>
  );
};

NavBar.propTypes = {
  admin: PropTypes.any,
  light: PropTypes.bool,
  // dark: PropTypes.bool,
  fixed: PropTypes.string,
  color: PropTypes.string
};

export default NavBar;
