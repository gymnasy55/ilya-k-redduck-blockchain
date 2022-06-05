import { useBreakpointValue } from '@chakra-ui/react';

import { UsePageLayout } from './types';

export const usePageLayout: UsePageLayout = () => {
  const templateAreas = useBreakpointValue<string>({
    base: `"header"
           "main"
           "nav"`,
    md: `"header header header header"
         "nav main main main"`,
  });
  const gridTemplateRows = useBreakpointValue<string>({
    base: '55px * *',
    md: '55px *',
  });
  const gridTemplateColumns = useBreakpointValue<string>({
    base: '*',
    md: 'repeat(4, 1fr)',
  });

  return [
    templateAreas || '',
    gridTemplateRows || '',
    gridTemplateColumns || '',
  ];
};
