import 'intl';
import 'intl/locale-data/jsonp/en';

export const formatMoney = (amount: string) => {
  const formatType = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'NGN',
    maximumSignificantDigits: 12,
  });

  const currency = formatType.format(parseInt(amount, 10));

  return currency.replace('NGN', '\u20A6');
};

export const msToTime = (s: number) => {
  const ms = s % 1000;
  s = (s - ms) / 1000;
  const secs = s % 60;
  s = (s - secs) / 60;
  const mins = s % 60;

  return (
    mins.toLocaleString('en-US', {
      minimumIntegerDigits: 2,
      useGrouping: false,
    }) +
    ':' +
    secs.toLocaleString('en-US', {
      minimumIntegerDigits: 2,
      useGrouping: false,
    })
  );
};
