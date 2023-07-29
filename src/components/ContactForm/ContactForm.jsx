//import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { selectContactsItems } from '../../redux/contactsSlice';
import { addContact } from 'redux/operations';
import FormError from 'components/ErrorMessage/ErrorMessage';
import { FormWrap } from './ContactForm.styled';
import { StLabel } from './ContactForm.styled';
import { Input } from './ContactForm.styled';
import { FormButton } from './ContactForm.styled';
//import shortid from 'shortid';

const initialValues = { name: '', number: '' };
const schema = Yup.object().shape({
  name: Yup.string().min(3).required(),
  number: Yup.number().min(4).required(),
});

const ContactForm = () => {
  // const [name, setName] = useState('');
  // const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(selectContactsItems);
  // const handleChange = e => {
  //     const { name, value } = e.target;
  //   switch (name) {
  //     case 'name':
  //       setName(value);
  //       break;
  //     case 'number':
  //       setNumber(value);
  //       break;
  //     default:
  //       return;
  //   }
  // };
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const isDuplicateName = contacts.find(
  //     contact => contact.name.toLowerCase() === name.toLowerCase()
  //   );
  //   if (isDuplicateName) {
  //     alert(`${name} is already in contacts`);
  //     return;
  //   }
  // const id = shortid.generate();
  const handleSubmit = (values, { resetForm }) => {
    const { name, number } = values;
    const isDuplicateName = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (isDuplicateName) {
      toast.info(`${name} is already in contacts`);
      return;
    }
    dispatch(addContact({ name, number }));
    // setName('');
    // setNumber('');
    resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <FormWrap>
        <StLabel htmlFor="name">
          Name
          <Input
            type="text"
            name="name"
            // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            // title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            // required
            // value={name}
            // onChange={handleChange}
          />
          <FormError name="name" />
        </StLabel>

        <StLabel htmlFor="user_tel">
          Number
          <Input
            type="tel"
            name="number"
            // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            // title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            // required
            // value={number}
            // onChange={handleChange}
          />
          <FormError name="number" />
        </StLabel>

        <FormButton type="submit">
          Add contact
        </FormButton>
      </FormWrap>
    </Formik>
  );
};

export default ContactForm;