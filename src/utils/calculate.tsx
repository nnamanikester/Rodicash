export const withdrawalCharge = (amount: string): string => {
  const a = parseInt(amount, 10);
  if (a / 1000 >= 1000) {
    const val = a / 10000;
    return val.toString();
  } else if (a / 100 >= 1000) {
    const val = a / 1000;
    return val.toString();
  } else if (a / 10 >= 1000) {
    const val = a / 100;
    return val.toString();
  }
  return '100';
};
