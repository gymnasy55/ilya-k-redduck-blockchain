import {
  Badge,
  Box,
  Flex,
  HStack,
  StackDivider,
  Switch,
  VStack,
} from '@chakra-ui/react';
import React, { ChangeEvent, FC, useCallback, useContext } from 'react';

import { IconContext, IconType } from '../../contexts';

export const Navigation: FC = () => {
  const { iconType, setIconType } = useContext(IconContext);
  const onIconChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setIconType(e.target.checked ? IconType.BLOCKICON : IconType.IDENTICON);
    },
    [setIconType],
  );

  return (
    <VStack
      divider={<StackDivider borderColor="gray.200" />}
      align="stretch"
      borderWidth="1px"
      borderRadius="lg"
      shadow="md"
      p={4}
      spacing={4}
    >
      <Flex alignItems="center" justifyContent="space-between">
        <Badge fontSize="md" colorScheme="red">
          Icon
        </Badge>
        <HStack spacing={2} alignItems="center" justifyContent="center">
          <Badge>Jazz</Badge>
          <Switch
            size="md"
            defaultChecked={iconType === IconType.BLOCKICON}
            onChange={onIconChange}
          />
          <Badge>Blockies</Badge>
        </HStack>
      </Flex>
      <Box>123</Box>
      <Box>123</Box>
    </VStack>
  );
};
