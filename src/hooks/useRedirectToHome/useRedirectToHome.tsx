import { useEffect } from 'react';

import { UseRedirectToHome } from './types';

import { ROUTES } from '../../config';
import { useHistory } from '../useHistory';

export const useRedirectToHome: UseRedirectToHome = () => {
  const history = useHistory();

  useEffect(() => {
    if (history.location.pathname === '/') {
      history.push(ROUTES.HOME, history.location.state);
    }
  }, []);
};
