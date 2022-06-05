import { useToast } from '@chakra-ui/react';
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
  const toast = useToast();

  useEffect(() => {
    if (active && account && !provider) {
      connector
        .getProvider()
        .then((provider) => setProvider(new providers.Web3Provider(provider)));
    }
  }, [active, account, connector, provider]);

  const activateWallet = async () => {
    try {
      await activate(connector, undefined, true);
      toast({
        title: 'Wallet connected.',
        description: "We've connected your wallet successfully.",
        status: 'success',
        position: 'bottom-right',
        isClosable: true,
      });
    } catch (e) {
      toast({
        title: 'Failed to connect wallet.',
        description: 'Something went wrong while connecting the wallet.',
        status: 'error',
        position: 'bottom-right',
        isClosable: true,
      });
    }
  };

  const deactivateWallet = () => {
    deactivate();
    setProvider(null);
  };

  return {
    account: account || '',
    activateWallet,
    active,
    chainId,
    deactivateWallet,
    provider,
  };
};
