import { HomeStile, Icon } from './HomeView.styled';

export default function HomeView() {
  return (
    <HomeStile>
      <h1>Contacts book</h1>
      <p>
        {' '}
        Please, <a href="/goit-react-hw-08-phonebook/register">
          {' '}
          Register
        </a> or <a href="/goit-react-hw-08-phonebook/login">Log In</a> to have
        access to the Contacts Book
      </p>
      <Icon />
    </HomeStile>
  );
}

