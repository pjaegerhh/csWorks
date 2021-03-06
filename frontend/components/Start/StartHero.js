// import { useState, useEffect } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { Box, Button, Container, Skeleton, Typography } from '@material-ui/core'
import { useTheme } from '@material-ui/core/styles'
import CheckCircleIcon from '../../assets/icons/CheckCircle'

const StartHero = (props) => {
  const theme = useTheme();
//  const [isLoading, setIsLoading] = useState(true);
//  const [image, setImage] = useState('');
  const image = require (`/public/static/home/hero_${theme.palette.mode}.png`);

/*useEffect(() => {
    (async () => {
      const heroImg = require (`/public/static/home/hero_${theme.palette.type}.png`);
      const response = await fetch(heroImg);
      const blob = await response.blob();

      setImage(URL.createObjectURL(blob));
      setIsLoading(false);
    })();
  }, [theme.palette.mode]);
*/
return (
  <Box
    sx={{
      backgroundColor: 'background.paper',
      pt: 6
    }}
    {...props}
  >
    <Container
      maxWidth="md"
      sx={{
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        px: {
          md: '130px !important'
        }
      }}
    >
      <Typography
        color="primary"
        variant="overline"
      >
        Willkommen !
      </Typography>
      <Typography
        align="center"
        color="textPrimary"
        variant="h3"
      >
        csWorks Warenwirtschaft
      </Typography>
      <Typography
        align="center"
        color="textSecondary"
        variant="body1"
        sx={{ py: 3 }}
      >
        Eine professionelle Warenwirtschaft die 100% Cloud basiert ist
        Natürlich in der EU gehosted.
      </Typography>
      <Button
        color="primary"
        component={RouterLink}
        size="large"
        to="/coreapp"
        variant="contained"
      >
        csWorks
      </Button>
      <Box
        sx={{
          alignItems: {
            sm: 'center',
            xs: 'flex-start'
          },
          display: 'flex',
          flexDirection: {
            sm: 'row',
            xs: 'column'
          },
          py: 3,
          '& > div': {
            p: {
              sm: '0 10.5px',
              xs: '10.5px 0'
            }
          }
        }}
      >
        <Typography
          color="textSecondary"
          variant="caption"
        >
          Verfügbar für:
        </Typography>
        {['PC', 'MACs', 'iPad', 'Mobiles'].map((item) => (
          <Box
            key={item}
            sx={{
              alignItems: 'center',
              display: 'flex'
            }}
          >
            <CheckCircleIcon
              sx={{
                color: 'success.light',
                mr: '10.5px'
              }}
            />
            <Typography
              color="textPrimary"
              variant="subtitle2"
            >
              {item}
            </Typography>
          </Box>
        ))}
      </Box>
    </Container>
    <Container
      maxWidth="lg"
      sx={{
        width: '100%',
        px: {
          md: 15
        }
      }}
    >
      <Box
        sx={{
          position: 'relative',
          pt: '52.13%'
        }}
      >
            <img
              alt="Hero"
              src={image}
              style={{
                maxWidth: '100%',
                zIndex: 20,
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                top: 0
              }}
            />
        <img
          alt="Shapes 1"
          src={require('../../assets/home/shapes_1.svg')}
          style={{
            left: '3%',
            position: 'absolute',
            top: '-7.5%',
            width: '20%',
            maxWidth: '243.32px',
            zIndex: 0
          }}
        />
        <img
          alt="Shapes 2"
          src={require('../../assets/home/shapes_2.svg')}
          style={{
            bottom: 0,
            position: 'absolute',
            right: '-8%',
            width: '20%',
            maxWidth: '195.32px',
            zIndex: 30
          }}
        />
      </Box>
    </Container>
  </Box>
);
};

export default StartHero;
