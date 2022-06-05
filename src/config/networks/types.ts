import { SUPPORTED_CHAINS } from './constants';

export type ChainId = typeof SUPPORTED_CHAINS[number];

export type NetworkPerChain = {
  readonly rpcUrl: string;
  readonly blockExplorerUrl: string;
};

export type Networks = {
  readonly [k in ChainId]: NetworkPerChain;
};
