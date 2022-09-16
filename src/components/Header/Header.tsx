import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import { Box, Stack, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useState } from 'react';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { SearchBar } from './Search';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: 'San Francisco – Oakland Bay Bridge, United States',
    imgPath:
      'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=1980&h=728&q=60',
  },
  {
    label: 'Bird',
    imgPath:
      'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=1980&h=728&q=60',
  },
  {
    label: 'Bali, Indonesia',
    imgPath:
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1980&h=728',
  },
  {
    label: 'Goč, Serbia',
    imgPath:
      'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=1980&h=728&q=60',
  },
];

export const Header = () => {
  const theme = useTheme();
  const { white } = theme.colors;
  const [activeStep, setActiveStep] = useState(0);
  const headerHeight = {
    maxHeight: 400,
    [theme.breakpoints.down('md')]: {
      maxHeight: 250,
    },
  };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };
  return (
    <Box sx={headerHeight}>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box>
                <Box
                  component="img"
                  sx={{
                    display: { xs: 'none', md: 'flex' },
                    backgroundSize: 'cover',
                    height: 400,
                    maxHeight: '400px',
                    maxWidth: '100%',
                    overflow: 'hidden',
                    width: '100%',
                  }}
                  src={step.imgPath}
                  alt={step.label}
                />

                <Box
                  component="img"
                  sx={{
                    display: { xs: 'flex', md: 'none' },
                    backgroundSize: 'cover',
                    height: 250,
                    maxHeight: '250px',
                    maxWidth: '100%',
                    overflow: 'hidden',
                    width: '100%',
                  }}
                  src={step.imgPath}
                  alt={step.label}
                />
              </Box>
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <Box
        sx={{
          display: { xs: 'none', md: 'flex' },
          justifyContent: 'space-around',
          position: 'relative',
          top: '-18.5rem',
          width: '100%',
          color: white,
        }}
      >
        <Box sx={{ background: 'rgba(0,0,0,0.5)', borderRadius: '.5rem', p: '1rem' }}>
          <Typography
            sx={{
              fontSize: '24px',
            }}
          >
            Sisak
          </Typography>
          <Typography
            sx={{
              fontSize: '16px',
            }}
          >
            Croatia
          </Typography>
          <Stack direction="row" spacing={4} sx={{ mt: '0.5rem', mb: '0.5rem' }}>
            <ThunderstormIcon sx={{ fontSize: '35px' }} />
            <Typography sx={{ fontSize: '24px', fontWeight: '900' }}>26° C</Typography>
          </Stack>
          <Typography
            sx={{
              fontSize: '16px',
            }}
          >
            Feels like: 26° C
          </Typography>
        </Box>
        <Box
          sx={{
            background: 'rgba(0,0,0,0.5)',
            borderRadius: '.5rem',
            p: '0.5rem 1rem 1rem 1rem',
            maxHeight: '3rem',
            mt: '3rem',
            minWidth: '15rem',
          }}
        >
          <SearchBar />
        </Box>
      </Box>

      <Box
        sx={{
          display: { xs: 'flex', md: 'none' },
          justifyContent: 'center',
          position: 'relative',
          top: '-13rem',
          width: '100%',
          color: white,
        }}
      >
        <Box
          sx={{
            background: 'rgba(0,0,0,0.5)',
            borderRadius: '.5rem',
            p: '0.5rem 1rem 1rem 1rem',
            maxHeight: '3rem',
            mt: '3rem',
            minWidth: '15rem',
          }}
        >
          <SearchBar />
        </Box>
      </Box>
    </Box>
  );
};
