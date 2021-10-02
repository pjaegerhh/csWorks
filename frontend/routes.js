import LoadingScreen from './components/LoadingScreen';
import MainLayout from './components/MainLayout';
import { Suspense, lazy } from 'react';

const Loadable = (Component) => (props) => (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
);

const Start = Loadable(lazy(() => import('./core_pages/Start')));
const routes = [
    {
      path: '/',
      element: <Start />,
    }
  ];
  
  export default routes;
  