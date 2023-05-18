import { ReactComponent as LightClearIcon } from './light_clear.svg';
import { ReactComponent as LightCloudyIcon } from './light_cloudy.svg';
import { ReactComponent as LightRainIcon } from './light_rain.svg';
import { ReactComponent as NightClearIcon } from './night_clear.svg';
import { ReactComponent as NightCloudyIcon } from './night_cloudy.svg';
import { ReactComponent as NightRainIcon } from './night_rain.svg';

export const weatherIcons = {
  light: {
    clear: <LightClearIcon />,
    cloudy: <LightCloudyIcon />,
    rain: <LightRainIcon />,
  },
  night: {
    clear: <NightClearIcon />,
    cloudy: <NightCloudyIcon />,
    rain: <NightRainIcon />,
  },
};
