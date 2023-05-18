import './App.scss';
import { Route, Routes, HashRouter } from 'react-router-dom';
import { routes } from './config/routes';

const App = () => {
  return (
    <div className='app'>
      <HashRouter basename='/'>
        <Routes>
          {routes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Routes>
      </HashRouter>
    </div>
  );
};

export default App;
