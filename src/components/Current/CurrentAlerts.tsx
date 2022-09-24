import { Box, Stack, Typography, useTheme } from '@mui/material';
import { CurrentCardProps } from '../types/current';

export const CurrentAlerts = ({ title, cardBgColor, cardTextColor, cardBorderColor, alertList }: CurrentCardProps) => {
  const theme = useTheme();
  const { warning } = theme.colors;

  return (
    <Box sx={{ flex: 1, background: cardBgColor, color: cardTextColor, p: '1rem', borderRadius: '1rem' }}>
      <Typography
        sx={{
          display: 'flex',
          justifyContent: 'center',
          pb: '1rem',
          borderBottom: `3px solid ${cardBorderColor}`,
          fontWeight: 'bolder',
          textTransform: 'uppercase',
          letterSpacing: '2px',
          mb: '2rem',
        }}
      >
        {title}
      </Typography>
      <Stack direction={'column'} spacing={3}>
        {alertList?.map((item) => (
          <Box
            sx={{
              flex: 1,
              background: cardBgColor,
              color: cardTextColor,
              p: '.5rem',
              borderRadius: '1rem',
              border: `3px solid ${cardBorderColor}`,
            }}
          >
            <Typography
              sx={{
                display: 'flex',
                justifyContent: 'center',
                pb: '.5rem',
                borderBottom: `3px solid ${cardBorderColor}`,
                fontWeight: 'bolder',
                fontSize: '13px',
                textTransform: 'uppercase',
                letterSpacing: '2px',
                color: warning,
                textAlign: 'center',
              }}
            >
              {item.event}
            </Typography>
            <Typography
              sx={{
                display: 'flex',
                justifyContent: 'center',
                fontWeight: 'bolder',
                fontSize: '13px',
                textTransform: 'uppercase',
                p: '.5rem',
                textAlign: 'center',
              }}
            >
              {item.headline}
            </Typography>
            <Typography
              sx={{
                display: 'flex',
                justifyContent: 'center',
                fontSize: '12px',
                p: '.5rem',
                textAlign: 'justify',
              }}
            >
              {item.desc}
            </Typography>
          </Box>
        ))}
      </Stack>
    </Box>
  );
};
