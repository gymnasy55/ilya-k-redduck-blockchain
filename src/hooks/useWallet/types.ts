import { providers } from 'ethers';

export type UseWallet = () => {
  chainId: number | undefined;
  provider: providers.Web3Provider | null;
  active: boolean;
  activateWallet: () => Promise<void>;
  deactivateWallet: () => void;
  account: string;
};
