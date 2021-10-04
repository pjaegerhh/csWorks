import LoadingScreen        from './components/LoadingScreen';
import MainLayout           from './components/MainLayout';
import CoreAppLayout        from './components/core_app/CoreAppLayout';

import { Suspense, lazy }   from 'react';

const Loadable = (Component) => (props) => (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
);

const Start = Loadable(lazy(() => import('./core_pages/Start')));
const NotFound = Loadable(lazy(() => import('./core_pages/NotFound')));
const Overview = Loadable(lazy(() => import('./core_pages/Overview')));

const routes = [
{
  path: 'ccoreapp',
  element: <CoreAppLayout />,
},
{
  path: '*',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: <Start />,
    },
    {
      path: 'coreapp',
      element: <CoreAppLayout />,
      children: [
        {
          path: '/',
          element: <Overview />
        },
        {
          path: 'account',
          element: <NotFound />
        },
        {
          path: 'analytics',
          element: <NotFound />
        },
        {
          path: 'calendar',
          element: <NotFound />
        },
        {
          path: 'chat',
          children: [
            {
              path: '/',
              element: <NotFound />
            },
            {
              path: 'new',
              element: <NotFound />
            },
            {
              path: ':threadKey',
              element: <NotFound />
            }
          ]
        },
        {
          path: 'customers',
          children: [
            {
              path: '/',
              element: <NotFound />
            },
            {
              path: ':customerId',
              element: <NotFound />
            },
            {
              path: ':customerId/edit',
              element: <NotFound />
            }
          ]
        },
        {
          path: 'invoices',
          children: [
            {
              path: '/',
              element: <NotFound />
            },
            {
              path: ':invoiceId',
              element: <NotFound />
            }
          ]
        },
        {
          path: 'kanban',
          element: <NotFound />
        },
        {
          path: 'mail',
          children: [
            {
              path: '/',
              element: <NotFound />
            },
            {
              path: 'label/:customLabel',
              element: <NotFound />
            },
            {
              path: 'label/:customLabel/:emailId',
              element: <NotFound />
            },
            {
              path: ':systemLabel',
              element: <NotFound />
            },
            {
              path: ':systemLabel/:emailId',
              element: <NotFound />
            }
          ]
        },
        {
          path: 'orders',
          children: [
            {
              path: '/',
              element: <NotFound />
            },
            {
              path: ':orderId',
              element: <NotFound />
            }
          ]
        },
        {
          path: 'finance',
          element: <NotFound />
        },
        {
          path: 'products',
          children: [
            {
              path: '/',
              element: <NotFound />
            },
            {
              path: 'new',
              element: <NotFound />
            }
          ]
        },
        {
          path: 'projects',
          children: [
            {
              path: 'browse',
              element: <NotFound />
            },
            {
              path: 'new',
              element: <NotFound />
            },
            {
              path: ':projectId',
              element: <NotFound />
            }
          ]
        },
        {
          path: 'social',
          children: [
            {
              path: 'feed',
              element: <NotFound />
            },
            {
              path: 'profile',
              element: <NotFound />
            }
          ]
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
  