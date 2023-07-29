import { lazy, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
import { selectIsRefreshing }from "../redux/authorization/auth-selectors"
import { fetchCurrentUser } from 'redux/authorization/auth-operations';
import AppLayout from 'components/AppLayout/AppLayout';
import Loader from 'components/Loader/Loader';
import NotFound from 'views/NotFound';
import { TitleContacts } from './App.styled';
// import { fetchContacts } from 'redux/operations';
// import { selectError, selectIsLoading } from 'redux/contactsSlice';
// import ContactForm from './ContactForm/ContactForm';
// import ContactList from './ContactList/ContactList';
// import Filter from './Filter/Filter';

const HomeView = lazy(() => import('../views/HomeView/HomeView'));
const ContactsView = lazy(() => import('../views/ContactsView/ContactsView'));
const LoginView = lazy(() => import('../views/LoginView/LoginView'));
const RegisterView = lazy(() => import('../views/RegisterView/RegisterView'));


function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  // const error = useSelector(selectError);
  // const isLoading = useSelector(selectIsLoading);
  useEffect(() => {
    dispatch(fetchCurrentUser())
  }, [dispatch]);
  
  return (
    <>
      {isRefreshing ? <Loader>Refresh user</Loader> :  (<Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<HomeView />} />
          <Route path="/register" element={ <RestrictedRoute redirectTo="/contacts" component={<RegisterView />} />} />
          <Route path="/login" element={<RestrictedRoute redirectTo="/contacts" component={<LoginView />} />} />
          <Route path="/contacts" element={<PrivateRoute redirectTo="/login" component={<ContactsView />} />} />
          <Route path="*" element={<Navigate to="/404" />} />
        </Route>
        <Route path="/404" element={<NotFound />} />
      </Routes>)}
      <ToastContainer autoClose={2500} />
    </>
  );
}

export default App;