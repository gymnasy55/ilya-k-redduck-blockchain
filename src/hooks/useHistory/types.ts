import type { Pathname, Search, Hash, To } from 'react-router-dom';

import type { Obj } from '../../types';

export type Location<State extends Obj = Obj> = {
  pathname: Pathname;
  search: Search;
  hash: Hash;
  key: string;
  state: State;
};

export type UseHistory<State extends Obj = Obj> = () => {
  push: <T extends Obj = Obj>(route: To, state?: T) => void;
  replace: <T extends Obj = Obj>(route: To, state?: T) => void;
  location: Location<State>;
};
