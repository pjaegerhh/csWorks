import LoadingScreen from './components/LoadingScreen';
import MainLayout from './components/MainLayout';
import { Suspense, lazy } from 'react';

const Loadable = (Component) => (props) => (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
);

const Start = Loadable(lazy(() => import('./core_pages/Start')));
const NotFound = Loadable(lazy(() => import('./core_pages/NotFound')));

const routes = [
{
  path: '/',
  element: 
  (
    <MainLayout>
      <Start />
    </ MainLayout>
  ),
  children: [
    {
      path: 'browse',
      element: <NotFound />,
      children: [
        {
          path: '/browse/buttons',
          element: <NotFound />
        },
        {
          path: '/browse/inputs',
          element: <NotFound />
        },
        {
          path: '/browse/typography',
          element: <NotFound />
        }
      ]
    },

    {
      path: '401',
      element: <NotFound />
    },
    {
      path: '404',
      element: <NotFound />
    },
    {
      path: '500',
      element: <NotFound />
    },
    {
      path: '*',
      element: <NotFound />
    }
  ]
}
];

/*
const routes = [
    {
      path: '/',
      element: (
        <MainLayout />
      ),
      children: [
        {
          path :'start',
          element: (
            <MainLayout />,
            <Start />
          )
        },
        {
          path: 'browse',
          element: <MainLayout />,
          children: [
            {
              path :'start',
              element: <Start />
            }
          ]
        },
        {
          path: '401',
          element: <NotFound />
        },
        {
          path: '404',
          element: <NotFound />
        },
        {
          path: '500',
          element: <NotFound />
        },
        {
          path: '*',
          element: <NotFound />
        }
      ]
    }
  ];
  */
  export default routes;
  