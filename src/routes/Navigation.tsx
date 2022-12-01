import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';

import { routes } from './routes';

import ReactLogo from '/react.svg';

const Navigation = () => {
  return (
    <Suspense fallback={<span>Loading...</span>}>
      <BrowserRouter>
        <div className="main-layout">
          <nav>
            <img alt="React Logo" src={ReactLogo} />
            <ul>
              {routes.map((route) => {
                const { name, to } = route;

                return (
                  <li key={name}>
                    <NavLink className={({ isActive }) => (isActive ? 'nav-active' : '')} to={to}>
                      {name}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </nav>

          <Routes>
            {routes.map((route) => {
              const { component: Component, path } = route;

              return <Route key={path} element={<Component />} path={path} />;
            })}

            <Route element={<Navigate replace to={routes[0].to} />} path="/*" />
          </Routes>
        </div>
      </BrowserRouter>
    </Suspense>
  );
};

export default Navigation;
