import { Dispatch, SetStateAction } from 'react';

export enum IconType {
  IDENTICON = 'identicon',
  BLOCKICON = 'blockicon',
}

export type IconContextType = {
  iconType: IconType;
  setIconType: Dispatch<SetStateAction<IconType>>;
};
