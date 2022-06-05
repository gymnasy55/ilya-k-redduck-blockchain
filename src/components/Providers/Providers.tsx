import { ChakraProvider, theme } from '@chakra-ui/react';
import { Web3ReactProvider } from '@web3-react/core';
import { providers } from 'ethers';
import React, { FC } from 'react';

import { ProviderContext, IconContext } from '../../contexts';
import { useProviderState } from '../../hooks';
import { useIconState } from '../../hooks/useIconState/useIconState';
import { WithChildren } from '../../types';

export const Providers: FC<WithChildren> = ({ children }) => {
  const [provider, setProvider] = useProviderState();
  const [iconType, setIconType] = useIconState();

  const getLibrary = (
    provider: providers.ExternalProvider | providers.JsonRpcFetchFunc,
  ): providers.Web3Provider => new providers.Web3Provider(provider);

  return (
    <ChakraProvider theme={theme}>
      <Web3ReactProvider getLibrary={getLibrary}>
        <ProviderContext.Provider value={{ provider, setProvider }}>
          <IconContext.Provider value={{ iconType, setIconType }}>
            {children}
          </IconContext.Provider>
        </ProviderContext.Provider>
      </Web3ReactProvider>
    </ChakraProvider>
  );
};
