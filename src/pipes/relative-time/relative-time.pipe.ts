export interface RelativeTimePipeUnit {
  singular: Intl.RelativeTimeFormatUnit;
  unit: number;
  threshold: number;
}

export interface RelativeTimePipeOptions {
  locale?: string;
  numeric?: 'auto' | 'always';
  units?: RelativeTimePipeUnit[];
  fallback?: string;
}

const SECOND = 1000;
const MINUTE = 60 * SECOND;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;
const WEEK = 7 * DAY;
const YEAR = 365.25 * DAY;
const MONTH = YEAR / 12 * DAY;

export const defaultOptions: Required<RelativeTimePipeOptions> = {
  locale: 'en',
  numeric: 'auto',
  units: [
    { singular: 'second', unit: SECOND, threshold: 30 * SECOND },
    { singular: 'minute', unit: MINUTE, threshold: HOUR - 1 },
    { singular: 'hour', unit: HOUR, threshold: DAY - 1 },
    { singular: 'day', unit: DAY, threshold: WEEK - 1 },
    { singular: 'week', unit: WEEK, threshold: MONTH - 1 },
    { singular: 'month', unit: MONTH, threshold: YEAR - 1 },
    { singular: 'year', unit: YEAR, threshold: Number.POSITIVE_INFINITY },
  ],
  fallback: 'Just now',
};

export const RelativeTimePipe = (
  time: number,
  options: RelativeTimePipeOptions = {},
): string => {
  const now = Date.now();
  const diff = Math.round(time - now);
  const {
    locale = defaultOptions.locale,
    numeric = defaultOptions.numeric,
    units = defaultOptions.units,
    fallback = defaultOptions.fallback,
  } = options;

  const rtf = new Intl.RelativeTimeFormat(locale, { numeric });
  const matchingUnit = units.find((unit) => unit.threshold > Math.abs(diff));

  return matchingUnit
    ? rtf.format(Math.round(diff / matchingUnit.unit), matchingUnit.singular)
    : fallback;
};
