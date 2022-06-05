import type { providers } from 'ethers';
import type { Dispatch, SetStateAction } from 'react';

export type UseProviderState = () => [
  providers.Web3Provider | null,
  Dispatch<SetStateAction<providers.Web3Provider | null>>,
];
