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

export const formatMoneyWithoutSymbol = (amount: string) => {
  const formatType = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'NGN',
    maximumSignificantDigits: 12,
  });

  const currency = formatType.format(parseInt(amount, 10));

  return currency.replace('NGN', '');
};

export const msToTime = (s: number, hasHours?: boolean) => {
  const ms = s % 1000;
  s = (s - ms) / 1000;
  const secs = s % 60;
  s = (s - secs) / 60;
  const mins = s % 60;
  s = (s - mins) / 60;
  const hrs = s % 60;

  if (hasHours) {
    return `${hrs.toLocaleString('en-US', {
      minimumIntegerDigits: 2,
      useGrouping: false,
    })}:${mins.toLocaleString('en-US', {
      minimumIntegerDigits: 2,
      useGrouping: false,
    })}:${secs.toLocaleString('en-US', {
      minimumIntegerDigits: 2,
      useGrouping: false,
    })}`;
  } else {
    return `${mins.toLocaleString('en-US', {
      minimumIntegerDigits: 2,
      useGrouping: false,
    })}:${secs.toLocaleString('en-US', {
      minimumIntegerDigits: 2,
      useGrouping: false,
    })}`;
  }
};
