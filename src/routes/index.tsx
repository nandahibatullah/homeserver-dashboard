import React, { ReactNode } from 'react';
import {
  RouterProvider,
  createBrowserRouter,
  Navigate,
  createRoutesFromElements,
  Outlet,
  Route,
} from 'react-router-dom';
import { AuthProvider, useAuth } from '../providers/AuthProvider';
import { Dashboard } from '../pages/Dashboard';
import { Login } from '../pages/Login';
import { VitePage } from '../pages/VitePage';

const AuthenticatedRoute = (props: { children: ReactNode }): JSX.Element => {
  const { loggedIn } = useAuth();
  console.log(loggedIn);

  if (!loggedIn) {
    return <Navigate to="/login" replace />;
  }

  return <>{props.children}</>;
};

const AuthProviderLayout = () => (
  <AuthProvider>
    <Outlet />
  </AuthProvider>
);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<AuthProviderLayout />}>
      <Route
        path="/"
        element={
          <AuthenticatedRoute>
            <VitePage />
          </AuthenticatedRoute>
        }
      />
      <Route
        path="/dashboard"
        element={
          <AuthenticatedRoute>
            <Dashboard />
          </AuthenticatedRoute>
        }
      />
      <Route path="/login" element={<Login />} />
    </Route>
  )
);

export const Routes = () => {
  return <RouterProvider router={router} />;
};
