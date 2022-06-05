import React, { FC } from 'react';

import { Providers, RenderRoutes } from './components';

export const App: FC = () => (
  <Providers>
    <RenderRoutes />
  </Providers>
);
