import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import { selectIsLoading, selectError } from 'redux/contactsSlice';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import Loader from 'components/Loader/Loader';
import { ContactsTitle } from 'views/ContactsView/ContactsView.styled';

function ContactsView() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div>
      {isLoading && !error && <ContactsTitle>Request in progress</ContactsTitle>}
      <ContactsTitle>Add new contact</ContactsTitle>
      <ContactForm />
      {isLoading && <Loader />}
      <ContactList />
      <ContactsTitle>Find the contact</ContactsTitle>
      <Filter />
    </div>
  );
}

export default ContactsView;
