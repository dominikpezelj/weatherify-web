import { Box, Typography, useTheme } from '@mui/material';
import { useSelector } from 'react-redux';

export const CurrentAlertNotification = () => {
  const theme = useTheme();
  const { warning } = theme.colors;
  const numAlerts = useSelector((state: any) => state.weather.weatherAlertsCount);
  return (
    <Box>
      {numAlerts > 0 && (
        <Box
          sx={{
            display: 'flex',
            flex: 1,
            height: '2rem',
            background: warning,
            textAlign: 'center',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <a href="#alerts" style={{ textDecoration: 'none' }}>
            <Typography
              sx={{
                color: 'white',
                textTransform: 'uppercase',
                fontSize: '13px',
                fontWeight: '300',
                letterSpacing: '2px',
              }}
            >
              See {numAlerts} weather alerts at your location!
            </Typography>
          </a>
        </Box>
      )}
    </Box>
  );
};
