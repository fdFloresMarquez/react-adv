import { lazy } from 'react';

import NoLazy from '@/01-lazyload/pages/NoLazy';

interface Route {
  to: string;
  path: string;
  component: React.FC;
  name: string;
}

const LazyLayout = lazy(
  () => import(/* webpackChunkName: "LazyLayout" */ '../01-lazyload/layout/LazyLayout'),
);

export const routes: Route[] = [
  {
    to: '/lazyload/',
    path: '/lazyload/*',
    component: LazyLayout,
    name: 'LazyLayout',
  },
  {
    to: '/no-lazy',
    path: 'no-lazy',
    component: NoLazy,
    name: 'No-lazy',
  },
];
