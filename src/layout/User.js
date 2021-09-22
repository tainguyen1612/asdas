import React from 'react';
import { Route, Redirect } from 'react-router-dom';
// import { toast } from 'react-toastify';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { Container } from 'react-bootstrap';

function UserLayout({ component: Component, ...props }) {
  //   const users = localStorage.getItem('user');
  return (
    <Route
      {...props}
      render={(routerProps) => (
        <>
          <Header />
          <Container maxWidth="lg">
            <Component {...routerProps} />
          </Container>
          <Footer />
        </>
      )}
    />
  );
}
export default UserLayout;
