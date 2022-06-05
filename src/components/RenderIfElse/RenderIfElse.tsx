import React, { FC } from 'react';

import { RenderIfElseProps } from './types';

export const RenderIfElse: FC<RenderIfElseProps> = (props) => (
  <>{props.if ? props.then : props.else}</>
);
