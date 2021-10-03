import { useState }           from 'react';
import PropTypes              from 'prop-types';
import { Outlet }             from 'react-router-dom';
import { experimentalStyled } from '@material-ui/core/styles';
import Footer                 from './nav_Footer';
import Topbar                 from './nav_Topbar';
import Sidebar                from './nav_Sidebar';

const MainLayoutRoot = experimentalStyled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  height: '100%',
  paddingTop: 64
}));

const MainLayout = ({ children }) => {
const [isSidebarMobileOpen, setIsSidebarMobileOpen] = useState(false);

  return (
    <MainLayoutRoot>
      <Topbar onSidebarMobileOpen={() => setIsSidebarMobileOpen(true)} />
      <Sidebar
        onMobileClose={() => setIsSidebarMobileOpen(false)}
        openMobile={isSidebarMobileOpen}
      />
      {children || <Outlet />}
      <Footer />
    </MainLayoutRoot>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node
};

export default MainLayout;