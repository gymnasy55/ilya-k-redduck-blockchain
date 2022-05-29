import { validateEnvVariable } from './funcs';
import { EnvVars } from './types';

export const ENV_VARS: EnvVars = {
  ALCHEMY_KEY: validateEnvVariable(
    process.env.REACT_APP_ALCHEMY_KEY,
    'ALCHEMY_KEY',
  ),
} as const;
