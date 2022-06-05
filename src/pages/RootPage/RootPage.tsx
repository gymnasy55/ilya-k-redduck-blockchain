import { HamburgerIcon } from '@chakra-ui/icons';
import { Box, IconButton, useDisclosure } from '@chakra-ui/react';
import React, { FC, useEffect } from 'react';
import { Outlet } from 'react-router-dom';

import { Menu } from '../../components';
import { ROUTES } from '../../config';
import { useHistory } from '../../hooks';

export const RootPage: FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const history = useHistory();

  useEffect(() => {
    if (history.location.pathname === '/') {
      history.push(ROUTES.HOME, history.location.state);
    }
  }, []);

  return (
    <>
      <IconButton
        aria-label="Open menu"
        colorScheme="telegram"
        variant="ghost"
        onClick={onOpen}
        icon={<HamburgerIcon />}
      >
        Open
      </IconButton>
      <Menu isOpen={isOpen} onClose={onClose} />
      <Box m={2}>
        <Outlet />
      </Box>
    </>
  );
};
