import { useLocation, useNavigate } from 'react-router-dom';

import type { UseHistory } from './types';

import type { Obj } from '../../types';

export const useHistory = <State extends Obj = Obj>(): ReturnType<
  UseHistory<State>
> => {
  const navigate = useNavigate();
  const location = useLocation();

  return {
    push: (route, state?) => navigate(route, { state }),
    replace: (route, state?) => navigate(route, { state, replace: true }),
    location: {
      ...location,
      state: location.state as State,
    },
  };
};
