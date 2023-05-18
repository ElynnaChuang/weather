import './App.scss';
import { Route, Routes, HashRouter } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { routes } from './config/routes';

const App = () => {
  const appRef = useRef();
  useEffect(() => {
    appRef.current.style.setProperty('--vh', `${window.innerHeight}px`);
    window.addEventListener('resize', () =>
      appRef.current.style.setProperty('--vh', `${window.innerHeight}px`),
    );
  }, []);

  return (
    <div className='app' ref={appRef}>
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
