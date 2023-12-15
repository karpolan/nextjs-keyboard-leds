export const IS_DEBUG = process.env?.NEXT_PUBLIC_DEBUG === 'true'; // Enables logging, etc.
export const IS_PRODUCTION = process.env.NEXT_PUBLIC_ENV === 'production'; // Enables analytics, etc.
export const PUBLIC_URL = getEnvVariable('NEXT_PUBLIC_URL', true) ?? 'this variable must be set in .env !';

export const IS_SERVER = typeof window === 'undefined';
export const IS_BROWSER = typeof window !== 'undefined' && typeof window?.document !== 'undefined';
/* eslint-disable no-restricted-globals */
export const IS_WEBWORKER =
  typeof self === 'object' && self.constructor && self.constructor.name === 'DedicatedWorkerGlobalScope';
/* eslint-enable no-restricted-globals */

export function getEnvVariable(
  name: string,
  isRequired = false,
  defaultValue: string | undefined = undefined
): string | undefined {
  let variable = process.env[name];
  if (typeof variable === 'undefined') {
    if (isRequired) {
      throw new Error(`Missing process.env.${name} variable`);
    }
    variable = defaultValue;
  }
  return variable;
}

export function getCurrentVersion(): string {
  return process.env?.npm_package_version ?? process.env.NEXT_PUBLIC_VERSION ?? 'unknown';
}

export function getCurrentEnvironment(): string {
  return process.env?.NODE_ENV ?? 'development';
}
