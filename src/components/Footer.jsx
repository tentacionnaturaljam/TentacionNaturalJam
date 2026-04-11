import React from 'react';
import {
  Box, Container, Typography, Stack, IconButton, Divider, Link,
} from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
const TikTokIcon = ({ fontSize }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    style={{ width: fontSize === 'small' ? 20 : 24, height: fontSize === 'small' ? 20 : 24 }}
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.88a8.28 8.28 0 0 0 4.83 1.54V7a4.85 4.85 0 0 1-1.06-.31z" />
  </svg>
);
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
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '3fr 2fr 3fr 4fr' }, gap: { xs: 4, md: 5 }, mb: 6 }}>
          {/* Brand column */}
          <Box>
            <Logo size="medium" light />
            <Typography
              variant="body2"
              sx={{ color: 'rgba(255,255,255,0.65)', mt: 2.5, lineHeight: 1.8, maxWidth: 300, fontSize: '0.9rem' }}
            >
              Mermeladas artesanales de borojó, elaboradas con amor en el Pacífico colombiano.
              100% naturales, sin conservantes.
            </Typography>

            <Stack direction="row" spacing={1} sx={{ mt: 3 }}>
              {[
                { Icon: InstagramIcon, label: 'Instagram', href: 'https://www.instagram.com/tentacionnatural.jam?igsh=MTNlb2dnNXlvNjVvaA== ' },
                { Icon: FacebookIcon, label: 'Facebook', href: 'https://www.facebook.com/share/1MUHgHHo3u/?mibextid=wwXIfr' },
                { Icon: TikTokIcon, label: 'TikTok', href: 'https://www.tiktok.com/@tentacin.natural?_r=1&_t=ZS-95Nljkf38te ' },
                { Icon: WhatsAppIcon, label: 'WhatsApp', href: 'https://wa.me/573057361464' },
              ].map(({ Icon, label, href }) => (
                <IconButton
                  key={label}
                  size="small"
                  aria-label={label}
                  component={href ? 'a' : 'button'}
                  href={href || undefined}
                  target={href ? '_blank' : undefined}
                  rel={href ? 'noopener noreferrer' : undefined}
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
          </Box>

          {/* Links */}
          <Box>
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
          </Box>

          {/* Products */}
          <Box>
            <Typography
              variant="subtitle1"
              sx={{ fontWeight: 700, mb: 2.5, color: '#FF751F', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}
            >
              Productos
            </Typography>
            <Stack spacing={1.5}>
              {[
                'Borojó, Agraz & Naranja',
                'Borojó, Maracuyá & Arandanos',
                'Borojó, Granadilla & Jengibre',
                'Borojó, Piña & Jengibre',
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
          </Box>

          {/* Contact */}
          <Box>
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
                  Politécnico Grancolombiano - Campus Bogotá: Calle 57 #3-00 <br />
                  Envíos a todo el país
                </Typography>
              </Stack>
              <Stack direction="row" spacing={1.5} alignItems="flex-start">
                <PlaceIcon sx={{ color: '#FF751F', fontSize: '1.1rem', mt: 0.3, flexShrink: 0 }} />
                <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.9rem' }}>
                  Politécnico Grancolombiano – City Campus: Calle 61 # 7-69<br />
                  Envíos a todo el país
                </Typography>
              </Stack>
              <Stack direction="row" spacing={1.5} alignItems="center">
                <PhoneIcon sx={{ color: '#FF751F', fontSize: '1.1rem', flexShrink: 0 }} />
                <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.9rem' }}>
                  +57 305 736 1464
                </Typography>
              </Stack>
              <Stack direction="row" spacing={1.5} alignItems="center">
                <EmailIcon sx={{ color: '#FF751F', fontSize: '1.1rem', flexShrink: 0 }} />
                <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.9rem' }}>
                  tentacionnaturaljam@gmail.com
                </Typography>
              </Stack>
            </Stack>

            <Box sx={{ mt: 3, p: 2, bgcolor: 'rgba(162,14,14,0.3)', borderRadius: 2, border: '1px solid rgba(162,14,14,0.4)' }}>
              <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.85rem', mb: 0.5, fontWeight: 600 }}>
                Redes sociales
              </Typography>
              <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.82rem' }}>
                TikTok: <strong style={{ color: '#FF751F' }}>@tentacin.natural</strong>
              </Typography>
              <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.82rem' }}>
                Instagram: <strong style={{ color: '#FF751F' }}>@tentacionnatural.jam</strong>
              </Typography>
              <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.82rem' }}>
                Facebook: <strong style={{ color: '#FF751F' }}>Tentación Natural</strong>
              </Typography>
            </Box>
          </Box>
        </Box>

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
