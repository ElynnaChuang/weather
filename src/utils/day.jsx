import dayjs from 'dayjs';
import tz from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';

dayjs.extend(tz);
dayjs.extend(utc);

export const getTime = timezone => {
  if (typeof timezone !== 'string') return 'Cannot get time';
  const time = dayjs().tz(timezone).format('MM/DD HH:mm');

  return time;
};
