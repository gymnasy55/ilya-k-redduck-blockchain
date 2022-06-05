import { utils } from 'ethers';

export const shortenAddress = (address: string): string =>
  utils.isAddress(address)
    ? address.slice(0, 6) + '...' + address.slice(-4)
    : '';
