import { BrowserRouter } from 'react-router-dom';
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';

import ReactLogo from '/react.svg';

const Navigation = () => {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
          <img alt="React Logo" src={ReactLogo} />
          <ul>
            <li>
              <NavLink className={({ isActive }) => (isActive ? 'nav-active' : '')} to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className={({ isActive }) => (isActive ? 'nav-active' : '')} to="/about">
                About
              </NavLink>
            </li>
            <li>
              <NavLink className={({ isActive }) => (isActive ? 'nav-active' : '')} to="/users">
                Users
              </NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route element={<h1>About Page</h1>} path="/about" />
          <Route element={<h1>Users Page</h1>} path="/users" />
          <Route element={<h1>Home Page</h1>} path="/" />

          <Route element={<Navigate replace to="/" />} path="/*" />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default Navigation;
