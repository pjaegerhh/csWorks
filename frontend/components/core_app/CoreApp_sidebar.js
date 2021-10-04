import { useEffect }                        from 'react';
import { Link as RouterLink, useLocation }  from 'react-router-dom';
import PropTypes                            from 'prop-types';
import { Avatar, Box, Button, 
         Divider, Drawer, Link, 
         Typography }                       from '@material-ui/core';
import useMediaQuery                        from '@material-ui/core/useMediaQuery';
import ReceiptIcon                          from '@material-ui/icons/Receipt';
import useAuth                              from '../../hooks/useAuth';

import BriefcaseIcon                        from '../../assets/icons/Briefcase';
import CalendarIcon                         from '../../assets/icons/Calendar';
import ChartPieIcon                         from '../../assets/icons/ChartPie';
import ChartSquareBarIcon                   from '../../assets/icons/ChartSquareBar';
import ChatAltIcon                          from '../../assets/icons/ChatAlt';
import ClipboardListIcon                    from '../../assets/icons/ClipboardList';
import FolderOpenIcon                       from '../../assets/icons/FolderOpen';
import MailIcon                             from '../../assets/icons/Mail';
import ShareIcon                            from '../../assets/icons/Share';
import ShoppingBagIcon                      from '../../assets/icons/ShoppingBag';
import ShoppingCartIcon                     from '../../assets/icons/ShoppingCart';
import UserIcon                             from '../../assets/icons/User';
import UsersIcon                            from '../../assets/icons/Users';
import Logo                                 from '../Logo';

import NavSection                           from '../NavSection';
import Scrollbar                            from '../Scrollbar';

const sections = [
  {
    title: 'Allgemein',
    items: [
      {
        title: 'Analytics',
        path: '#',
        icon: <ChartPieIcon fontSize="small" />
      },
      {
        title: 'Überblick',
        path: '#',
        icon: <ChartSquareBarIcon fontSize="small" />
      },
      {
        title: 'Finance',
        path: '#',
        icon: <ShoppingBagIcon fontSize="small" />
      },
      {
        title: 'Account',
        path: '#',
        icon: <UserIcon fontSize="small" />
      }
    ]
  },
  {
    title: 'Management',
    items: [
      {
        title: 'Customers',
        path: '#',
        icon: <UsersIcon fontSize="small" />,
        children: [
          {
            title: 'List',
            path: '#'
          },
          {
            title: 'Details',
            path: '#'
          },
          {
            title: 'Edit',
            path: '#'
          }
        ]
      },
      {
        title: 'Products',
        path: '#',
        icon: <ShoppingCartIcon fontSize="small" />,
        children: [
          {
            title: 'List',
            path: '#'
          },
          {
            title: 'Create',
            path: '#'
          }
        ]
      },
      {
        title: 'Orders',
        icon: <FolderOpenIcon fontSize="small" />,
        path: '#',
        children: [
          {
            title: 'List',
            path: '#'
          },
          {
            title: 'Details',
            path: '#'
          }
        ]
      },
      {
        title: 'Invoices',
        path: '#',
        icon: <ReceiptIcon fontSize="small" />,
        children: [
          {
            title: 'List',
            path: '#'
          },
          {
            title: 'Details',
            path: '#'
          }
        ]
      }
    ]
  },
  {
    title: 'Platforms',
    items: [
      {
        title: 'Projects',
        path: '#',
        icon: <BriefcaseIcon fontSize="small" />,
        children: [
          {
            title: 'Browse',
            path: '#'
          },
          {
            title: 'Details',
            path: '#'
          },
          {
            title: 'Create',
            path: '#'
          }
        ]
      },
      {
        title: 'Social',
        path: '#',
        icon: <ShareIcon fontSize="small" />,
        children: [
          {
            title: 'Profile',
            path: '#'
          },
          {
            title: 'Feed',
            path: '#'
          }
        ]
      }
    ]
  },
  {
    title: 'Apps',
    items: [
      {
        title: 'Kanban',
        path: '#',
        icon: <ClipboardListIcon fontSize="small" />
      },
      {
        title: 'Mail',
        path: '#',
        icon: <MailIcon fontSize="small" />
      },
      {
        title: 'Chat',
        path: '#',
        icon: <ChatAltIcon fontSize="small" />
      },
      {
        title: 'Calendar',
        path: '#',
        icon: <CalendarIcon fontSize="small" />
      }
    ]
  }
];

const CoreApp_sidebar = (props) => {
  const { onMobileClose, openMobile } = props;
  const location = useLocation();
  const { user } = useAuth();
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'));

  useEffect(() => {
    if (openMobile && onMobileClose) {
      onMobileClose();
    }
  }, [location.pathname]);

  const content = (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
      }}
    >
      <Scrollbar options={{ suppressScrollX: true }}>
        <Box
          sx={{
            display: {
              lg: 'none',
              xs: 'flex'
            },
            justifyContent: 'center',
            p: 2
          }}
        >
          <RouterLink to="/">
            <Logo
              sx={{
                height: 40,
                width: 40
              }}
            />
          </RouterLink>
        </Box>
        <Box sx={{ p: 2 }}>
          <Box
            sx={{
              alignItems: 'center',
              backgroundColor: 'background.default',
              borderRadius: 1,
              display: 'flex',
              overflow: 'hidden',
              p: 2
            }}
          >
            <RouterLink to="#">
              <Avatar
                src={user.avatar}
                sx={{
                  cursor: 'pointer',
                  height: 48,
                  width: 48
                }}
              />
            </RouterLink>
            <Box sx={{ ml: 2 }}>
              <Typography
                color="textPrimary"
                variant="subtitle2"
              >
                {user.name}
              </Typography>
              <Typography
                color="textSecondary"
                variant="body2"
              >
                Your plan:
                {' '}
                <Link
                  color="primary"
                  component={RouterLink}
                  to="#"
                >
                  {user.plan}
                </Link>
              </Typography>
            </Box>
          </Box>
        </Box>
        <Divider />
        <Box sx={{ p: 2 }}>
          {sections.map((section) => (
            <NavSection
              key={section.title}
              pathname={location.pathname}
              sx={{
                '& + &': {
                  mt: 3
                }
              }}
              {...section}
            />
          ))}
        </Box>
        <Divider />
        <Box sx={{ p: 2 }}>
          <Typography
            color="textPrimary"
            variant="subtitle2"
          >
            Need Hilfe?
          </Typography>
          <Typography
            color="textSecondary"
            variant="body2"
          >
            Check our docs
          </Typography>
          <Button
            color="primary"
            component={RouterLink}
            fullWidth
            sx={{ mt: 2 }}
            to="#"
            variant="contained"
          >
            Documentation
          </Button>
        </Box>
      </Scrollbar>
    </Box>
  );

  if (lgUp) {
    return (
      <Drawer
        anchor="left"
        open
        PaperProps={{
          sx: {
            backgroundColor: 'background.paper',
            height: 'calc(100% - 64px) !important',
            top: '64px !Important',
            width: 280
          }
        }}
        variant="permanent"
      >
        {content}
      </Drawer>
    );
  }

  return (
    <Drawer
      anchor="left"
      onClose={onMobileClose}
      open={openMobile}
      PaperProps={{
        sx: {
          backgroundColor: 'background.paper',
          width: 280
        }
      }}
      variant="temporary"
    >
      {content}
    </Drawer>
  );
};

CoreApp_sidebar.propTypes = {
  onMobileClose: PropTypes.func,
  openMobile: PropTypes.bool
};

export default CoreApp_sidebar;
