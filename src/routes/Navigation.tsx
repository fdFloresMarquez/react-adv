import FormikAbstraction from '@/03-forms/pages/FormikAbstraction';
import FormikBasicPage from '@/03-forms/pages/FormikBasicPage';
import FormikComponents from '@/03-forms/pages/FormikComponents';
import FormikYupPage from '@/03-forms/pages/FormikYupPage';
import RegisterPage from '@/03-forms/pages/RegisterPage';

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
              <NavLink
                className={({ isActive }) => (isActive ? 'nav-active' : '')}
                to="/register-page"
              >
                Register Page
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? 'nav-active' : '')}
                to="/formik-basic"
              >
                Formik Basic
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? 'nav-active' : '')}
                to="/formik-yup"
              >
                Formik Yup
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? 'nav-active' : '')}
                to="/formik-components"
              >
                Formik Components
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? 'nav-active' : '')}
                to="/formik-abstraction"
              >
                Formik Abstraction
              </NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route element={<FormikBasicPage />} path="/formik-basic" />
          <Route element={<FormikYupPage />} path="/formik-yup" />
          <Route element={<FormikComponents />} path="/formik-components" />
          <Route element={<FormikAbstraction />} path="/formik-abstraction" />
          <Route element={<RegisterPage />} path="/" />

          <Route element={<Navigate replace to="/" />} path="/*" />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default Navigation;
