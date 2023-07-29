import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/auth-operations';
import {  Formik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ErrorMessage from 'components/ErrorMessage/ErrorMessage';
import { FormRegister,LabelRegister, InputRegister, ButtonRegister,
} from 'views/RegisterView/RegisterView.styled.js';

const initialValues = { name: '', email: '', password: '' };
const schema = Yup.object().shape({
  name: Yup.string().min(4).required(),
  email: Yup.string().min(4).required(),
  password: Yup.string().min(5).max(16).required(),
});

function RegisterView() {
  const dispatch = useDispatch();
  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    const { name, email, password } = values;
    dispatch(
      register({
        name,
        email,
        password,
      })
    )
      .unwrap()
      .then(() => toast.success('Registration succesfully'))
      .catch(() => toast.error('Something went wrong. Try again'));
    resetForm();
  };
  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <FormRegister>
          <LabelRegister htmlFor="name">
            Username
            <InputRegister type="text" name="name" />
            <ErrorMessage name="name" />
          </LabelRegister>

          <LabelRegister htmlFor="email">
            Email
            <InputRegister type="email" name="email" />
            <ErrorMessage name="email" />
          </LabelRegister>

          <LabelRegister htmlFor="password">
            Password
            <InputRegister type="password" name="password" />
            <ErrorMessage name="password" />
          </LabelRegister>
          <ButtonRegister type="submit">Register</ButtonRegister>
        </FormRegister>
      </Formik>
    </>
  );
}

export default RegisterView;