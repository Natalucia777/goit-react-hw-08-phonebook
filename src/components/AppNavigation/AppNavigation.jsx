import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/authorization/auth-selectors';
import { Link, Nav} from './AppNavigation.styled';

function AppNavigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <Nav>
      <Link to="/">Home</Link>
      {isLoggedIn && <Link to="/contacts">Contacts</Link>}
    </Nav>
  );
}

export default AppNavigation;