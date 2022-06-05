import { GridItem } from '@chakra-ui/react';
import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';

import { Header, Navigation, PageLayout } from '../../components';
import { usePageLayout, useRedirectToHome } from '../../hooks';

export const RootPage: FC = () => {
  const [templateAreas, gridTemplateRows, gridTemplateColumns] =
    usePageLayout();
  useRedirectToHome();

  return (
    <PageLayout
      templateAreas={templateAreas}
      gridTemplateRows={gridTemplateRows}
      gridTemplateColumns={gridTemplateColumns}
    >
      <GridItem area="header">
        <Header />
      </GridItem>
      <GridItem area="nav">
        <Navigation />
      </GridItem>
      <GridItem area="main">
        <Outlet />
      </GridItem>
    </PageLayout>
  );
};
