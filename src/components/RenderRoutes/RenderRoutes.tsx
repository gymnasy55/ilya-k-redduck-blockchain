import React, { FC } from 'react';
import { useRoutes } from 'react-router-dom';

import { routesConfig } from '../../config';

export const RenderRoutes: FC = () => {
  const routes = useRoutes(routesConfig);

  return <>{routes}</>;
};
