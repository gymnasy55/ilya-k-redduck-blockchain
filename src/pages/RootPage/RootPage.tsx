import { Button, useDisclosure } from '@chakra-ui/react';
import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';

import { Menu } from '../../components/Menu/Menu';

export const RootPage: FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button colorScheme="telegram" onClick={onOpen}>
        Open
      </Button>
      <Menu isOpen={isOpen} onClose={onClose} />
      <Outlet />
    </>
  );
};
