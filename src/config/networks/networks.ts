import { Networks } from './types';

import { ENV_VARS } from '../envVars';

export const NETWORKS: Networks = {
  [5]: {
    rpcUrl: `https://eth-goerli.alchemyapi.io/v2/${ENV_VARS.ALCHEMY_KEY}`,
  } as const,
} as const;
