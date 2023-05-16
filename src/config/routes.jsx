import CitiesPage from '../pages/CitiesPage';
import CityInfoPage from '../pages/CityInfoPage';

export const routes = [
  { path: '/', element: <CitiesPage /> },
  { path: '/:lat/:lon', element: <CityInfoPage /> },
  { path: '*', element: <CitiesPage /> },
];
