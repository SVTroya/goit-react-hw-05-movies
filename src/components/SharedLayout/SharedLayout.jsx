import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Container from '../Container/Container';

export function SharedLayout() {
  return (
    <>
      <Header />
      <Container>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </Container>;
    </>
  );
}
