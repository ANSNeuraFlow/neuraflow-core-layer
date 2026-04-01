export const arrayToString = (array: unknown[]) => {
  return array.map((v) => String(v)).join('');
};
