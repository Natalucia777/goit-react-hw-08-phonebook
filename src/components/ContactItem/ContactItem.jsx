import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/operations';
import { fetchContacts } from '../../redux/operations';
import { FormButton } from 'components/ContactForm/ContactForm.styled';
import { ListItem } from './ContactItem.styled';
import PropTypes from 'prop-types';

const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();
  return (
    <>
      <ListItem key={contact.id}>
        {contact.name}: {contact.number}
        <FormButton onClick={
          async () => {
            await dispatch(deleteContact(contact.id));
          dispatch(fetchContacts());
          }
        }>
          Delete
        </FormButton>
      </ListItem>
    </>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired,
};

export default ContactItem;