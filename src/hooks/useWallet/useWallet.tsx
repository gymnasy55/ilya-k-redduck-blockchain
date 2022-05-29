import { useWeb3React } from '@web3-react/core';
import { InjectedConnector } from '@web3-react/injected-connector';
import { providers } from 'ethers';
import { useContext, useEffect, useMemo } from 'react';

import { UseWallet } from './types';

import { SUPPORTED_CHAINS } from '../../config';
import { ProviderContext } from '../../contexts';

export const useWallet: UseWallet = () => {
  const connector = useMemo(
    () =>
      new InjectedConnector({
        supportedChainIds: SUPPORTED_CHAINS.concat(),
      }),
    [],
  );

  const { provider, setProvider } = useContext(ProviderContext);
  const { account, activate, active, deactivate, chainId } = useWeb3React();

  useEffect(() => {
    if (active && account && !provider) {
      connector
        .getProvider()
        .then((provider) => setProvider(new providers.Web3Provider(provider)));
    }
  }, [active, account, connector, provider]);

  const activateWallet = () =>
    activate(connector, undefined, true).catch((e) => console.error(e));

  const deactivateWallet = () => {
    deactivate();
    setProvider(null);
  };

  return {
    account,
    activateWallet,
    active,
    chainId,
    deactivateWallet,
    provider,
  };
};
