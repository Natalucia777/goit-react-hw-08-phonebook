// import { NavLink } from 'react-router-dom';
import { Nav, Link } from 'components/AppNavigation/AppNavigation.styled';
export default function LoginNavigation() {
  return (
    <Nav>
      <Link to="/register">Register</Link>
      <Link to="/login">Log In</Link>
    </Nav>
  );
}
