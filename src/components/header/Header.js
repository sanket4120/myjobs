import { Button, Dropdown, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { logout } from '../../actions/authActions';
import { useAuth } from '../../context/authContext';
import './header.css';

const Header = () => {
  const { authState, setAuth } = useAuth();
  const handleLogout = () => {
    logout(setAuth);
  };

  return (
    <Navbar className='border-bottom p-0 navbar'>
      <Navbar.Brand>
        <NavLink to='/' className='text-white fw-semibold'>
          My<span className='text-primaryDark'>Jobs</span>
        </NavLink>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav' className='justify-content-end'>
        <Nav>
          {authState.isAuthenticated ? (
            <Dropdown>
              <Dropdown.Toggle className='bg-transparent border-0 text-white'>
                {authState.user.name}
              </Dropdown.Toggle>

              <Dropdown.Menu align='end' className='mt-2'>
                <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          ) : (
            <NavLink to='/login'>
              <Button className='bg-primary bg-opacity-25 text-white'>
                Login
              </Button>
            </NavLink>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export { Header };
