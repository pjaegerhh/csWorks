import {
    Box, Container, Divider, Grid, 
    Link, List, ListItem, 
    ListItemAvatar, ListItemText,
    Typography }                  from '@material-ui/core';

  import { alpha }                from '@material-ui/core/styles';
  import MinusIcon                from '../assets/icons/Minus';
  import Logo                     from './Logo';

  import { Link as RouterLink }   from 'react-router-dom';

/*
  <Button
  color="primary"
  component={RouterLink}
  size="large"
  to="/coreapp"
  variant="contained"
>
  Browse Components
</Button>
*/
  const sections = [
    {
      title: 'Produkte',
      links: [
        {
          title: 'Übersicht',
          href: '#'
        },
        {
          title: 'Warenwirtschaft',
          href: '/coreapp'
        },
        {
          title: 'Buchhaltung',
          href: '/docs'
        },
        {
          title: 'Lohn & Gehalt',
          href: '/docs'
        }
      ]
    },
    {
      title: 'Rechtliches',
      links: [
        {
          title: 'AGBs',
          href: '#'
        },
        {
          title: 'Lizenzbedingungen',
          href: '#'
        },
        {
          title: 'Kontakt',
          href: '#'
        }
      ]
    },
    {
      title: 'Kontakt',
      links: [
        {
            title: 'Web',
            href: 'https://www.compusys.cc'
        },
        {
            title: 'eMail',
            href: 'mailto://info@compusys.cc'
        },
        {
          title: 'LinkedIn',
          href: '#'
        }
      ]
    }
  ];
  
  const Footer = (props) => (
    <Box
      sx={{
        backgroundColor: 'background.default',
        pb: 6,
        pt: {
          md: 15,
          xs: 6
        }
      }}
      {...props}
    >
      <Container maxWidth="lg">
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            md={3}
            sm={4}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              order: {
                md: 1,
                xs: 4
              }
            }}
            xs={12}
          >
            <Logo />  
            <Typography
              color="textSecondary"
              sx={{ mt: 1 }}
              variant="caption"
            >
              © 2021 CompuSys
            </Typography>
          </Grid>
          {sections.map((section, index) => (
            <Grid
              item
              key={section.title}
              md={3}
              sm={4}
              sx={{
                order: {
                  md: index + 2,
                  xs: index + 1
                }
              }}
              xs={12}
            >
              <Typography
                color="textSecondary"
                variant="overline"
              >
                {section.title}
              </Typography>
              <List disablePadding>
                {section.links.map((link) => (
                  <ListItem
                    disableGutters
                    key={link.title}
                    sx={{
                      pb: 0,
                      pt: 1
                    }}
                  >
                    <ListItemAvatar
                      sx={{
                        alignItems: 'center',
                        display: 'flex',
                        minWidth: 0,
                        mr: 0.5
                      }}
                    >
                      <MinusIcon color="primary" />
                    </ListItemAvatar>

                    {link.href.charAt(0)=='/' ? 
                        <ListItemText 
                          primary={(  
                              <Link      
                                component={RouterLink}
                                to={link.href}
                                color="textPrimary"
                                variant="subtitle2"
                              >
                                {link.title}
                              </Link>
                            )}
                        /> 
                        : 
                        <ListItemText 
                          primary={(  
                              <Link      
                                href={link.href}
                                color="textPrimary"
                                variant="subtitle2"
                              >
                                {link.title}
                              </Link>
                            )}
                          /> 
                    }
                  </ListItem>
                ))}
              </List>
            </Grid>
          ))}
        </Grid>
        <Divider
          sx={{
            borderColor: (theme) => alpha(theme.palette.primary.contrastText, 0.12),
            my: 6
          }}
        />
        <Typography 
                color="textSecondary"
                variant="caption" >
          (c) 2021 CompuSys GmbH | All Rights Reserved.
        </Typography>
      </Container>
    </Box>
  );
  
  export default Footer;
  