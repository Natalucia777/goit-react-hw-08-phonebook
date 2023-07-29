import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/contacts-operations';
import { selectIsLoading } from '../redux/contacts/contactsSlice';
import { selectError } from '../redux/contacts/contactsSlice';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import  Loader  from 'components/Loader/Loader';

function ContactsView() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div>
      {isLoading && !error && <h3>Request in progress</h3>}
      <h2>Add new contact</h2>
      <ContactForm />
      {isLoading && <Loader />}
      <ContactList />
      <h3>Find the contact</h3>
      <Filter />
    </div>
  );
}

export default ContactsView;
