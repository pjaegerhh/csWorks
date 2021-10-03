import { useEffect } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Box, Button, Chip, Drawer, Link } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Logo from './Logo';

const Sidebar = (props) => {
  const { onMobileClose, openMobile } = props;
  const location = useLocation();
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'));

  useEffect(() => {
    if (openMobile && onMobileClose) {
      onMobileClose();
    }
  }, [location.pathname]);

  return (
    <Drawer
      anchor="left"
      onClose={onMobileClose}
      open={!lgUp && openMobile}
      variant="temporary"
      PaperProps={{
        sx: {
          backgroundColor: 'background.default',
          width: 256
        }
      }}
    >
      <Box
        sx={{
          alignItems: 'flex-start',
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          p: 2
        }}
      >
        <RouterLink to="/">
          <Logo />
        </RouterLink>
        <Box
          sx={{
            display: 'flex',
            pb: 2,
            pt: 3
          }}
        >
          <Link
            color="textSecondary"
            component={RouterLink}
            to="/browse"
            underline="none"
            variant="body1"
          >
            Browse Components
          </Link>
          <Chip
            color="primary"
            label="NEW"
            size="small"
            sx={{
              maxHeight: 20,
              ml: 1,
              mr: 2
            }}
          />
        </Box>
        <Link
          color="textSecondary"
          component={RouterLink}
          to="/docs"
          underline="none"
          variant="body1"
        >
          Documentation
        </Link>
        <Button
          color="primary"
          component="a"
          href="https://www.compusys.cc"
          size="small"
          sx={{ mt: 4 }}
          target="_blank"
          variant="contained"
        >
          Homepage
        </Button>
      </Box>
    </Drawer>
  );
};

Sidebar.propTypes = {
  onMobileClose: PropTypes.func,
  openMobile: PropTypes.bool
};

export default Sidebar;
