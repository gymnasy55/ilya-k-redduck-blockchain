import React from 'react';
import { Navigate, RouteObject } from 'react-router-dom';

import { ROUTES } from './constants';

import { HomePage } from '../../pages/HomePage';
import { RootPage } from '../../pages/RootPage';

export const routesConfig: RouteObject[] = [
  {
    path: ROUTES.APP,
    element: <RootPage />,
    children: [
      {
        path: ROUTES.HOME,
        caseSensitive: true,
        element: <HomePage />,
      },
      {
        path: '*',
        element: <Navigate to={ROUTES.HOME} replace />,
      },
    ],
  },
  {
    path: '*',
    element: <Navigate to={ROUTES.HOME} replace />,
  },
];
