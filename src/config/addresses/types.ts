import { ChainId } from '../networks';

export type AddressesPerChain = {
  erc20TradableVotes: string;
};

export type Addresses = {
  [k in ChainId]: AddressesPerChain;
};
