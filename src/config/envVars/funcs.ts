export const validateEnvVariable = <T>(
  envVar: string | undefined,
  name: string,
  validator?: (envVar: string) => boolean,
  transformer?: (envVar: string) => T,
): string | T => {
  if (!envVar) {
    throw new Error(`${name} is not defined.`);
  }

  if (validator && !validator(envVar)) {
    throw new Error(`${name} is not valid.`);
  }

  return transformer ? transformer(envVar) : envVar;
};
