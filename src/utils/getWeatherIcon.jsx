import { weatherIcons } from '@/assets/weather_icons';

export const getWeatherIcon = (weather = 'cloudy', hour = 12) => {
  let icon;
  if (hour >= 6 && hour < 18) {
    icon = weatherIcons.light[weather];
  } else {
    icon = weatherIcons.night[weather];
  }

  return icon;
};
