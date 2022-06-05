import { HamburgerIcon } from '@chakra-ui/icons';
import {
  Badge,
  Button,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
} from '@chakra-ui/react';
import React, { FC, useContext, useMemo } from 'react';

import { IconContext, IconType } from '../../contexts';
import { useWallet } from '../../hooks';
import { shortenAddress } from '../../utils';
import { Blockicon } from '../Blockicon';
import { Identicon } from '../Identicon';
import { Menu } from '../Menu';
import { RenderIfElse } from '../RenderIfElse';

export const Header: FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { account, activateWallet } = useWallet();
  const { iconType } = useContext(IconContext);
  const shortenAccount = useMemo(() => shortenAddress(account), [account]);

  return (
    <>
      <Flex
        w="100%"
        borderWidth="1px"
        borderRadius="lg"
        shadow="md"
        p={1}
        justifyContent="space-between"
      >
        <IconButton
          aria-label="Open menu"
          colorScheme="red"
          variant="ghost"
          onClick={onOpen}
          icon={<HamburgerIcon />}
        />
        <HStack alignItems="center" spacing={1}>
          <RenderIfElse
            if={!!account}
            then={<Badge colorScheme="red">{shortenAccount}</Badge>}
            else={
              <Button colorScheme="red" onClick={activateWallet}>
                Connect
              </Button>
            }
          />
          <RenderIfElse
            if={iconType === IconType.BLOCKICON}
            then={<Blockicon account={account} height={32}></Blockicon>}
            else={<Identicon account={account} height={32}></Identicon>}
          />
        </HStack>
      </Flex>
      <Menu isOpen={isOpen} onClose={onClose} />
    </>
  );
};
