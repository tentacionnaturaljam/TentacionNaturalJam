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
        background: 'linear-gradient(135deg, #FBEAEA 0%, #f5d5d5 40%, #FBEAEA 100%)',
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
          bgcolor: '#A20E0E',
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
          bgcolor: '#FF751F',
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
          bgcolor: '#A20E0E',
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
                bgcolor: '#FF751F',
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
                color: '#A20E0E',
                fontSize: { xs: '1.6rem', md: '2rem' },
                my: 2,
              }}
            >
              "Cae en la tentación una y otra vez"
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: '#6B3A3A',
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
                  bgcolor: '#A20E0E',
                  fontSize: '1rem',
                  py: 1.5,
                  px: 4,
                  width: { xs: '100%', sm: 'auto' },
                  '&:hover': { bgcolor: '#7A0A0A' },
                }}
              >
                Ver productos
              </Button>
              <Button
                variant="outlined"
                size="large"
                onClick={() => scrollTo('#nosotros')}
                sx={{
                  borderColor: '#A20E0E',
                  color: '#A20E0E',
                  fontSize: '1rem',
                  py: 1.5,
                  px: 4,
                  width: { xs: '100%', sm: 'auto' },
                  '&:hover': {
                    bgcolor: '#A20E0E10',
                    borderColor: '#A20E0E',
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
                      color: '#A20E0E',
                      fontFamily: "'Cormorant Garamond', serif",
                      fontWeight: 700,
                      lineHeight: 1,
                    }}
                  >
                    {stat.value}
                  </Typography>
                  <Typography variant="caption" sx={{ color: '#6B3A3A', fontWeight: 500 }}>
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
                bgcolor: '#A20E0E10',
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
                  border: '2px dashed #A20E0E40',
                },
              }}
            >
              <Mascot size={300} />
            </Box>
            <Typography
              variant="caption"
              sx={{
                mt: 1.5,
                color: '#A20E0E',
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
