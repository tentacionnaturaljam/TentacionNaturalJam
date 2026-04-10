import React from 'react';
import { Box, Typography } from '@mui/material';

const Logo = ({ size = 'medium', light = false }) => {
  const color = light ? '#FBEAEA' : '#A20E0E';
  const scales = {
    small: { tentacion: '1.4rem', natural: '1.2rem', year: '0.55rem' },
    medium: { tentacion: '2.2rem', natural: '1.9rem', year: '0.75rem' },
    large: { tentacion: '3.8rem', natural: '3.2rem', year: '1rem' },
  };
  const s = scales[size] || scales.medium;

  return (
    <Box sx={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', lineHeight: 1 }}>
      <Typography
        component="span"
        sx={{
          fontFamily: "'Nunito', sans-serif",
          fontSize: s.year,
          fontWeight: 700,
          color,
          letterSpacing: '0.2em',
          mb: '-2px',
        }}
      >
        2026
      </Typography>
      <Typography
        component="span"
        sx={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: s.tentacion,
          fontWeight: 700,
          color,
          letterSpacing: '0.06em',
          lineHeight: 1,
          textTransform: 'uppercase',
        }}
      >
        Tentación
      </Typography>
      <Typography
        component="span"
        sx={{
          fontFamily: "'Great Vibes', cursive",
          fontSize: s.natural,
          color,
          lineHeight: 1.1,
          mt: '-4px',
        }}
      >
        Natural
      </Typography>
    </Box>
  );
};

export default Logo;
