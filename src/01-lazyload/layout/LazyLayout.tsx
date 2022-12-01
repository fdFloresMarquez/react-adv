import { Navigate, NavLink, Route, Routes } from 'react-router-dom';

import { LazyPage1, LazyPage2, LazyPage3 } from '../pages';

const LazyLayout: React.FC = () => {
  return (
    <div>
      <h1>LazyLayout Page</h1>

      <ul>
        <li>
          <NavLink to="lazy1">Lazy 1</NavLink>
        </li>
        <li>
          <NavLink to="lazy2">Lazy 2</NavLink>
        </li>
        <li>
          <NavLink to="lazy3">Lazy 3</NavLink>
        </li>
      </ul>

      <Routes>
        <Route element={<LazyPage1 />} path="lazy1" />
        <Route element={<LazyPage2 />} path="lazy2" />
        <Route element={<LazyPage3 />} path="lazy3" />

        <Route element={<Navigate to="lazy1" />} path="*" />
      </Routes>
    </div>
  );
};

export default LazyLayout;
