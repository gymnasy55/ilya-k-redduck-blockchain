import { ReactNode } from 'react';

export type RenderIfElseProps = {
  if: boolean;
  then: ReactNode;
  else?: ReactNode;
};
