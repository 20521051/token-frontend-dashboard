export const shortenAddress = (address: string) => `${address.slice(0, 5)}...${address.slice(address.length - 4)}`;
export const shortenBalance = (address: string) => `${address.slice(0, 5)}`;

export function formatNumber(number: string) {
  const dotIndex = number.indexOf('.');
  if (dotIndex === -1) {
    return number;
  }

  return (
    number.slice(0, dotIndex) +
    ',' +
    number.slice(dotIndex + 1, dotIndex + 3) +
    '...' +
    number.slice(number.length - 2)
  );
}
