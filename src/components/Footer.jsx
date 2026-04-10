import React from 'react';
import {
  Box, Container, Typography, Grid, Stack, IconButton, Divider, Link,
} from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TikTokIcon from '@mui/icons-material/MusicNote';
import PlaceIcon from '@mui/icons-material/Place';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import Logo from './Logo';

const Footer = () => {
  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Box
      id="contacto"
      sx={{
        bgcolor: '#1A0808',
        color: 'white',
        pt: { xs: 6, md: 10 },
        pb: 4,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={5} sx={{ mb: 6 }}>
          {/* Brand column */}
          <Grid item xs={12} md={4}>
            <Logo size="medium" light />
            <Typography
              variant="body2"
              sx={{ color: 'rgba(255,255,255,0.65)', mt: 2.5, lineHeight: 1.8, maxWidth: 300, fontSize: '0.9rem' }}
            >
              Mermeladas artesanales de borojó, elaboradas con amor en el Pacífico colombiano.
              100% naturales, sin conservantes, con recetas heredadas de generación en generación.
            </Typography>

            <Stack direction="row" spacing={1} sx={{ mt: 3 }}>
              {[
                { Icon: InstagramIcon, label: 'Instagram' },
                { Icon: FacebookIcon, label: 'Facebook' },
                { Icon: TikTokIcon, label: 'TikTok' },
                { Icon: WhatsAppIcon, label: 'WhatsApp' },
              ].map(({ Icon, label }) => (
                <IconButton
                  key={label}
                  size="small"
                  aria-label={label}
                  sx={{
                    bgcolor: '#A20E0E',
                    color: 'white',
                    '&:hover': { bgcolor: '#FF751F' },
                    transition: 'background 0.2s',
                  }}
                >
                  <Icon fontSize="small" />
                </IconButton>
              ))}
            </Stack>

            <Typography
              sx={{
                fontFamily: "'Great Vibes', cursive",
                fontSize: '1.4rem',
                color: '#FF751F',
                mt: 3,
              }}
            >
              "Cae en la tentación una y otra vez"
            </Typography>
          </Grid>

          {/* Links */}
          <Grid item xs={6} md={2}>
            <Typography
              variant="subtitle1"
              sx={{ fontWeight: 700, mb: 2.5, color: '#FF751F', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}
            >
              Navegación
            </Typography>
            <Stack spacing={1.5}>
              {[
                { label: 'Inicio', href: '#inicio' },
                { label: 'Productos', href: '#productos' },
                { label: 'Nosotros', href: '#nosotros' },
                { label: 'Contacto', href: '#contacto' },
              ].map((item) => (
                <Link
                  key={item.label}
                  component="button"
                  onClick={() => scrollTo(item.href)}
                  sx={{
                    color: 'rgba(255,255,255,0.65)',
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                    textAlign: 'left',
                    transition: 'color 0.2s',
                    '&:hover': { color: '#FF751F' },
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </Stack>
          </Grid>

          {/* Products */}
          <Grid item xs={6} md={2}>
            <Typography
              variant="subtitle1"
              sx={{ fontWeight: 700, mb: 2.5, color: '#FF751F', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}
            >
              Productos
            </Typography>
            <Stack spacing={1.5}>
              {[
                'Borojó Puro',
                'Borojó & Maracuyá',
                'Borojó & Naranja',
                'Borojó & Agraz',
                'Borojó & Granadilla',
                'Borojó & Jengibre',
              ].map((item) => (
                <Typography
                  key={item}
                  variant="body2"
                  sx={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.9rem' }}
                >
                  {item}
                </Typography>
              ))}
            </Stack>
          </Grid>

          {/* Contact */}
          <Grid item xs={12} md={4}>
            <Typography
              variant="subtitle1"
              sx={{ fontWeight: 700, mb: 2.5, color: '#FF751F', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}
            >
              Contacto
            </Typography>
            <Stack spacing={2}>
              <Stack direction="row" spacing={1.5} alignItems="flex-start">
                <PlaceIcon sx={{ color: '#FF751F', fontSize: '1.1rem', mt: 0.3, flexShrink: 0 }} />
                <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.9rem' }}>
                  Quibdó, Chocó · Colombia<br />
                  Envíos a todo el país
                </Typography>
              </Stack>
              <Stack direction="row" spacing={1.5} alignItems="center">
                <PhoneIcon sx={{ color: '#FF751F', fontSize: '1.1rem', flexShrink: 0 }} />
                <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.9rem' }}>
                  +57 300 123 4567
                </Typography>
              </Stack>
              <Stack direction="row" spacing={1.5} alignItems="center">
                <EmailIcon sx={{ color: '#FF751F', fontSize: '1.1rem', flexShrink: 0 }} />
                <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.9rem' }}>
                  hola@tentacionnatural.co
                </Typography>
              </Stack>
            </Stack>

            <Box sx={{ mt: 3, p: 2, bgcolor: 'rgba(162,14,14,0.3)', borderRadius: 2, border: '1px solid rgba(162,14,14,0.4)' }}>
              <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.85rem', mb: 0.5, fontWeight: 600 }}>
                Redes sociales
              </Typography>
              <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.82rem' }}>
                TikTok: <strong style={{ color: '#FF751F' }}>@Tentación.natural</strong>
              </Typography>
              <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.82rem' }}>
                Instagram: <strong style={{ color: '#FF751F' }}>@tentacionnaturaljam</strong>
              </Typography>
              <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.82rem' }}>
                Facebook: <strong style={{ color: '#FF751F' }}>Tentación Natural</strong>
              </Typography>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ borderColor: 'rgba(255,255,255,0.1)' }} />

        <Box
          sx={{
            pt: 3,
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 1,
          }}
        >
          <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.82rem' }}>
            © 2026 Tentación Natural. Todos los derechos reservados.
          </Typography>
          <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.82rem' }}>
            Hecho con amor en Colombia 🇨🇴
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
