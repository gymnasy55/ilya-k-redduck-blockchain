import { useState } from 'react';

import { UseIconState } from './types';

import { IconType } from '../../contexts';

export const useIconState: UseIconState = () =>
  useState<IconType>(IconType.BLOCKICON);
