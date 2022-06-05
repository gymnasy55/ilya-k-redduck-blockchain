import { Dispatch, SetStateAction } from 'react';

import { IconType } from '../../contexts';

export type UseIconState = () => [IconType, Dispatch<SetStateAction<IconType>>];
