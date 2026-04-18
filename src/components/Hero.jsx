import React from 'react';
import { Box, Container, Typography, Button, Stack, Chip } from '@mui/material';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import Logo from './Logo';
import Mascot from './Mascot';

const Hero = () => {
  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Box
      id="inicio"
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #f3f8ed 0%, #d8ecc0 40%, #f3f8ed 100%)',
        display: 'flex',
        alignItems: 'center',
        pt: 8,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative circles */}
      <Box
        sx={{
          position: 'absolute',
          top: -80,
          right: -80,
          width: 380,
          height: 380,
          borderRadius: '50%',
          bgcolor: '#5c7523',
          opacity: 0.07,
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: -60,
          left: -60,
          width: 280,
          height: 280,
          borderRadius: '50%',
          bgcolor: '#de6b02',
          opacity: 0.08,
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          top: '30%',
          right: '8%',
          width: 120,
          height: 120,
          borderRadius: '50%',
          bgcolor: '#5c7523',
          opacity: 0.05,
        }}
      />

      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 4,
          }}
        >
          {/* Left: text content */}
          <Box sx={{ flex: 1, textAlign: { xs: 'center', md: 'left' }, maxWidth: 560 }}>
            <Chip
              icon={<AutoAwesomeIcon sx={{ fontSize: '0.9rem !important' }} />}
              label="100% Artesanal · Natural · Colombiano"
              sx={{
                bgcolor: '#de6b02',
                color: 'white',
                fontWeight: 600,
                fontSize: '0.78rem',
                mb: 3,
                '& .MuiChip-icon': { color: 'white' },
              }}
            />

            <Box sx={{ mb: 2 }}>
              <Logo size="large" />
            </Box>

            <Typography
              variant="h5"
              sx={{
                fontFamily: "'Great Vibes', cursive",
                color: '#c13c2c',
                fontSize: { xs: '1.6rem', md: '2rem' },
                my: 2,
              }}
            >
              "Cae en la tentación una y otra vez"
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: '#3a4a1a',
                fontSize: '1.05rem',
                lineHeight: 1.8,
                mb: 4,
                maxWidth: 480,
                mx: { xs: 'auto', md: 0 },
              }}
            >
              Mermeladas artesanales elaboradas con el exótico borojó colombiano.
              Sabores únicos que combinan la tradición frutera del Pacífico con
              recetas caseras llenas de amor.
            </Typography>

            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={2}
              justifyContent={{ xs: 'center', md: 'flex-start' }}
              sx={{ width: '100%' }}
            >
              <Button
                variant="contained"
                size="large"
                startIcon={<ShoppingBagOutlinedIcon />}
                onClick={() => scrollTo('#productos')}
                sx={{
                  bgcolor: '#5c7523',
                  fontSize: '1rem',
                  py: 1.5,
                  px: 4,
                  width: { xs: '100%', sm: 'auto' },
                  '&:hover': { bgcolor: '#3e5018' },
                }}
              >
                Ver productos
              </Button>
              <Button
                variant="outlined"
                size="large"
                onClick={() => scrollTo('#nosotros')}
                sx={{
                  borderColor: '#5c7523',
                  color: '#c13c2c',
                  fontSize: '1rem',
                  py: 1.5,
                  px: 4,
                  width: { xs: '100%', sm: 'auto' },
                  '&:hover': {
                    bgcolor: '#5c752310',
                    borderColor: '#5c7523',
                  },
                }}
              >
                Nuestra historia
              </Button>
            </Stack>

            {/* Stats */}
            <Stack
              direction="row"
              spacing={4}
              sx={{ mt: 5, justifyContent: { xs: 'center', md: 'flex-start' } }}
            >
              {[
                { value: '100%', label: 'Natural' },
                { value: '4+', label: 'Sabores' },
                { value: '0%', label: 'Conservantes' },
              ].map((stat) => (
                <Box key={stat.label} sx={{ textAlign: 'center' }}>
                  <Typography
                    variant="h4"
                    sx={{
                      color: '#c13c2c',
                      fontFamily: "'Cormorant Garamond', serif",
                      fontWeight: 700,
                      lineHeight: 1,
                    }}
                  >
                    {stat.value}
                  </Typography>
                  <Typography variant="caption" sx={{ color: '#3a4a1a', fontWeight: 500 }}>
                    {stat.label}
                  </Typography>
                </Box>
              ))}
            </Stack>
          </Box>

          {/* Right: mascot */}
          <Box
            sx={{
              flex: '0 0 auto',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              position: 'relative',
            }}
          >
            <Box
              sx={{
                bgcolor: '#5c752310',
                borderRadius: '50%',
                width: { xs: 280, md: 360 },
                height: { xs: 280, md: 360 },
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  inset: -12,
                  borderRadius: '50%',
                  border: '2px dashed #5c752340',
                },
              }}
            >
              <Mascot size={300} />
            </Box>
            <Typography
              variant="caption"
              sx={{
                mt: 1.5,
                color: '#c13c2c',
                fontWeight: 600,
                fontSize: '0.85rem',
                textAlign: 'center',
              }}
            >
              ¡El Borojito, nuestra mascota!
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
