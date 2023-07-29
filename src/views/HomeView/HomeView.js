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

// export default function HelloDiv() {
//   return (
//     <HelloWrap>
//       <HelloTitle>Personal contacts book</HelloTitle>
//       <Text>
//         {' '}
//         Please, <a href="/goit-react-hw-08-phonebook/register">
//           {' '}
//           Register
//         </a> or <a href="/goit-react-hw-08-phonebook/login">Log In</a> to have
//         access to the Contacts Book
//       </Text>
//       <Icon />
//     </HelloWrap>
//   );
// }
