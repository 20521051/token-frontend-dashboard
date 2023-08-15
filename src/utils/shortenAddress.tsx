export const shortenAddress = (address: string) => `${address.slice(0, 5)}...${address.slice(address.length - 4)}`;
export const shortenBalance = (address: string) => `${address.slice(0, 5)}`;

export function formatNumber(number: string) {
  const dotIndex = number.indexOf('.');
  if (dotIndex === -1) {
    return number;
  }
  const part = number.slice(dotIndex + 1, number.length - 1);
  if (part.split('').every((char) => char === '0')) {
    return number.slice(0, dotIndex);
  }
  return (
    number.slice(0, dotIndex) +
    ',' +
    number.slice(dotIndex + 1, dotIndex + 3) +
    '...' +
    number.slice(number.length - 3, number.length - 1)
  );
}
