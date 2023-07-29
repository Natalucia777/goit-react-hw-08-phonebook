import { useSelector } from 'react-redux';
import {selectIsLoggedIn} from '../../redux/authorization/auth-selectors';
import AppNavigation from 'components/AppNavigation/AppNavigation';
import LoginNavigation from 'components/AppNavigation/LoginNavigation';
import UserMenu from 'components/UserMenu/UserMenu';
import { Header } from './AppHeader.styled';

export default function AppBar() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <Header>
      <AppNavigation />
      {isLoggedIn ? <UserMenu /> : <LoginNavigation />}
    </Header>
  );
}
