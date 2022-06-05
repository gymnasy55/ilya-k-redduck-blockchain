import type { ReactNode } from 'react';

import type { Obj } from '../commons';

export type WithChildren<T extends Obj = Obj> = {
  children: ReactNode;
} & T;
