import React from 'react';
import { Route } from 'react-router-dom';
import NotFound from '../pages/NotFound';

function AdminLayout({ component: Component, ...props }) {
  const users = JSON.parse(localStorage.getItem('user'));
  return users.isAdmin ? (
    <Route
      {...props}
      render={(routerProps) => (
        <>
          <Component {...routerProps} />
        </>
      )}
    />
  ) : (
    <Route component={NotFound} />
  );
}
export default AdminLayout;
