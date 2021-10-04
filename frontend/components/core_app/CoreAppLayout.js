import { useState }             from 'react';
import { Outlet }               from 'react-router-dom';
import { experimentalStyled }   from '@material-ui/core/styles';
import CoreAppNavbar            from './CoreApp_navbar';
import CoreAppSidebar           from './CoreApp_sidebar';

const CoreAppLayoutRoot = experimentalStyled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  display: 'flex',
  height: '100%',
  overflow: 'hidden',
  width: '100%'
}));

const CoreAppLayoutWrapper = experimentalStyled('div')(({ theme }) => ({
  display: 'flex',
  flex: '1 1 auto',
  overflow: 'hidden',
  paddingTop: '64px',
  [theme.breakpoints.up('lg')]: {
    paddingLeft: '280px'
  }
}));

const CoreAppLayoutContainer = experimentalStyled('div')({
  display: 'flex',
  flex: '1 1 auto',
  overflow: 'hidden'
});

const CoreAppLayoutContent = experimentalStyled('div')({
  flex: '1 1 auto',
  height: '100%',
  overflow: 'auto',
  position: 'relative',
  WebkitOverflowScrolling: 'touch'
});

const CoreAppLayout = () => {
  const [isSidebarMobileOpen, setIsSidebarMobileOpen] = useState(false);

  return (
    <CoreAppLayoutRoot>
      <CoreAppNavbar onSidebarMobileOpen={() => setIsSidebarMobileOpen(true)} />
      <CoreAppSidebar
        onMobileClose={() => setIsSidebarMobileOpen(false)}
        openMobile={isSidebarMobileOpen}
      />
      <CoreAppLayoutWrapper>
        <CoreAppLayoutContainer>
          <CoreAppLayoutContent>
            <Outlet />
          </CoreAppLayoutContent>
        </CoreAppLayoutContainer>
      </CoreAppLayoutWrapper>
    </CoreAppLayoutRoot>
  );
};

export default CoreAppLayout;
