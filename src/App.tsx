import { ChakraProvider, theme } from '@chakra-ui/react';
import { Web3ReactProvider } from '@web3-react/core';
import { providers } from 'ethers';
import React, { FC, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { RenderRoutes } from './components/RenderRoutes/RenderRoutes';
import { ProviderContext } from './contexts';

export const App: FC = () => {
  const [provider, setProvider] = useState<providers.Web3Provider | null>(null);

  const getLibrary = (
    provider: providers.ExternalProvider | providers.JsonRpcFetchFunc,
  ): providers.Web3Provider => new providers.Web3Provider(provider);

  return (
    <ChakraProvider theme={theme}>
      <Web3ReactProvider getLibrary={getLibrary}>
        <ProviderContext.Provider value={{ provider, setProvider }}>
          <BrowserRouter>
            <RenderRoutes />
          </BrowserRouter>
        </ProviderContext.Provider>
      </Web3ReactProvider>
    </ChakraProvider>
  );
};
