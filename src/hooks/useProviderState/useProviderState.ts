import type { providers } from 'ethers';
import { useState } from 'react';

import type { UseProviderState } from './types';

export const useProviderState: UseProviderState = () =>
  useState<providers.Web3Provider | null>(null);
