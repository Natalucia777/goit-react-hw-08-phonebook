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

const initialValues = { name: '', number: '' };
const schema = Yup.object().shape({
  name: Yup.string().min(3).required(),
  number: Yup.number().min(4).required(),
});
const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContactsItems);
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
          <Input type="text" name="name" />
          <FormError name="name" />
        </StLabel>

        <StLabel htmlFor="user_tel">
          Number
          <Input type="tel" name="number" />
          <FormError name="number" />
        </StLabel>

        <FormButton type="submit">Add contact</FormButton>
      </FormWrap>
    </Formik>
  );
};

export default ContactForm;