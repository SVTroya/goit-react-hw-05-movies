import { Container } from '../Container/Container';
import { Header } from '../Header/Header';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

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
