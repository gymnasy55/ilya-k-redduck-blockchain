import { Grid } from '@chakra-ui/react';
import React, { FC } from 'react';

import { PageLayoutProps } from './types';

import { WithChildren } from '../../types';

export const PageLayout: FC<WithChildren<PageLayoutProps>> = ({
  children,
  templateAreas,
  gridTemplateRows,
  gridTemplateColumns,
}) => {
  return (
    <Grid
      templateAreas={templateAreas}
      gridTemplateRows={gridTemplateRows}
      gridTemplateColumns={gridTemplateColumns}
      h="100%"
      gap={2}
      m={2}
    >
      {children}
    </Grid>
  );
};
