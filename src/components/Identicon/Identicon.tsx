import { Avatar, Box } from '@chakra-ui/react';
import Jazzicon from '@metamask/jazzicon';
import React, { FC } from 'react';

import { IdenticonProps } from './types';

export const Identicon: FC<IdenticonProps> = ({ account, height }) => {
  return account ? (
    <Box
      height={`${height}px`}
      dangerouslySetInnerHTML={{
        __html: Jazzicon(height, parseInt(account.slice(2, 10), 16)).outerHTML,
      }}
    />
  ) : (
    <Avatar src="" height={`${height}px`} width={`${height}px`} />
  );
};

Identicon.defaultProps = {
  account: '',
  height: 16,
};
