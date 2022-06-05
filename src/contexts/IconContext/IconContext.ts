import { createContext } from 'react';

import { IconContextType, IconType } from './types';

export const IconContext = createContext<IconContextType>({
  iconType: IconType.BLOCKICON,
  setIconType: () => IconType.BLOCKICON,
});
