import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { routes } from './config/routes';

const App = () => {
  return (
    <div className='app'>
      <BrowserRouter basename='/weather'>
        <Routes>
          {routes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
