import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTemperatureHalf,
  faTemperatureHigh,
  faTemperatureLow,
  faDroplet,
  faWind,
  faCloudRain,
  faSun,
} from '@fortawesome/free-solid-svg-icons';

export const itemsIcons = {
  feelsLike: <FontAwesomeIcon icon={faTemperatureHalf} />,
  tempMax: <FontAwesomeIcon icon={faTemperatureHigh} />,
  tempMin: <FontAwesomeIcon icon={faTemperatureLow} />,
  humidity: <FontAwesomeIcon icon={faDroplet} />,
  rainProb: <FontAwesomeIcon icon={faCloudRain} />,
  windSpeed: <FontAwesomeIcon icon={faWind} />,
  uvIndex: <FontAwesomeIcon icon={faSun} />,
};
