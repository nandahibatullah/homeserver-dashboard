import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Dashboard } from '../pages/Dashboard';
import { VitePage } from '../pages/VitePage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <VitePage />,
  },
  {
    path: 'dashboard',
    element: <Dashboard />,
  },
]);

export const Routes = () => {
  return <RouterProvider router={router} />;
};
