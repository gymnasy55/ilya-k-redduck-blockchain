import React, { FC } from 'react';
import { BrowserRouter, useRoutes } from 'react-router-dom';

import { routesConfig } from '../../config';

const Routes: FC = () => {
  const routes = useRoutes(routesConfig);

  return <>{routes}</>;
};

export const RenderRoutes: FC = () => (
  <BrowserRouter>
    <Routes />
  </BrowserRouter>
);
