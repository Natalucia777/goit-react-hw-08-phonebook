import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import AppHeader from 'components/AppHeader/AppHeader';
import { Container } from './AppLayout.styled';
import { Loader } from 'components/Loader/Loader';

const AppLayout = () => {
  return (
    <>
      <AppHeader />
      <Container>
        <Suspense fallback={<Loader>Loading</Loader>}>
          <Outlet />
        </Suspense>
        </Container>
    </>
  );
};

export default AppLayout;
