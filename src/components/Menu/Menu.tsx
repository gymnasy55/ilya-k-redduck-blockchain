import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  HStack,
  Icon,
  Link,
} from '@chakra-ui/react';
import React, { FC } from 'react';
import { GoMarkGithub } from 'react-icons/all';

import { MenuProps } from './types';

const redSx = {
  color: 'red.700',
  ':hover': {
    color: 'red.900',
  },
};

export const Menu: FC<MenuProps> = ({ isOpen, onClose }) => {
  return (
    <Drawer isOpen={isOpen} onClose={onClose} placement="left">
      <DrawerOverlay />
      <DrawerContent>
        <DrawerHeader borderBottomWidth="1px">
          <HStack alignItems="center">
            <span>Ilya Kubariev</span>
            <Link href="https://github.com/gymnasy55" isExternal>
              <Icon as={GoMarkGithub} sx={redSx} />
            </Link>
          </HStack>
        </DrawerHeader>
        <DrawerBody>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};
