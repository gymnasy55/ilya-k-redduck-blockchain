import { providers } from 'ethers';
import { Dispatch, SetStateAction } from 'react';

export type ProviderContextType = {
  provider: providers.Web3Provider | null;
  setProvider: Dispatch<SetStateAction<providers.Web3Provider | null>>;
};
