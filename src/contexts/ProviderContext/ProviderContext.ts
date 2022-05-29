import { createContext } from 'react';

import { ProviderContextType } from './types';

export const ProviderContext = createContext<ProviderContextType>({
  provider: null,
  setProvider: () => null,
});
