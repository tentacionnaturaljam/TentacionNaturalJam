import {
  Box, Container, Typography, Chip, Stack,
} from '@mui/material';
import PlaceIcon from '@mui/icons-material/Place';

const locations = [
  {
    name: 'Campus Bogotá',
    address: 'Calle 57 #3-00, Bogotá, Colombia',
    label: 'Politécnico Grancolombiano',
    mapSrc: 'https://www.google.com/maps?q=Politécnico+Grancolombiano+Calle+57+3-00+Bogota&output=embed',
  },
  {
    name: 'City Campus',
    address: 'Calle 61 #7-69, Bogotá, Colombia',
    label: 'Politécnico Grancolombiano',
    mapSrc: 'https://www.google.com/maps?q=Politécnico+Grancolombiano+City+Campus+Calle+61+7-69+Bogota&output=embed',
  },
];

const Location = () => (
  <Box
    id="ubicacion"
    sx={{
      py: { xs: 8, md: 12 },
      bgcolor: '#FDF6F6',
    }}
  >
    <Container maxWidth="lg">
      {/* Header */}
      <Box sx={{ textAlign: 'center', mb: 8 }}>
        <Chip
          label="Encuéntranos"
          sx={{ bgcolor: '#FBEAEA', color: '#A20E0E', fontWeight: 600, mb: 2, fontSize: '0.82rem' }}
        />
        <Typography
          variant="h2"
          sx={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 700,
            color: '#A20E0E',
            fontSize: { xs: '2.4rem', md: '3.2rem' },
            lineHeight: 1.1,
          }}
        >
          ¿Dónde encontrarnos?
        </Typography>
        <Typography
          sx={{
            fontFamily: "'Great Vibes', cursive",
            fontSize: { xs: '1.8rem', md: '2.4rem' },
            color: '#FF751F',
            mt: 0.5,
            mb: 2,
          }}
        >
          Bogotá, Colombia
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: '#6B3A3A', maxWidth: 500, mx: 'auto', lineHeight: 1.8, fontSize: '1rem' }}
        >
          Puedes encontrarnos en los dos campus del Politécnico Grancolombiano.
          ¡Ven a probar nuestras mermeladas!
        </Typography>
      </Box>

      {/* Maps grid */}
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
          gap: 4,
        }}
      >
        {locations.map((loc) => (
          <Box
            key={loc.name}
            sx={{
              borderRadius: 4,
              overflow: 'hidden',
              boxShadow: '0 4px 24px rgba(162,14,14,0.09)',
              border: '1px solid #FBEAEA',
              bgcolor: 'white',
            }}
          >
            {/* Top band */}
            <Box sx={{ height: 6, bgcolor: '#A20E0E' }} />

            {/* Map iframe */}
            <Box
              component="iframe"
              src={loc.mapSrc}
              title={loc.name}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              sx={{
                width: '100%',
                height: 280,
                border: 'none',
                display: 'block',
              }}
            />

            {/* Info */}
            <Stack
              direction="row"
              spacing={1.5}
              alignItems="flex-start"
              sx={{ px: 3, py: 2.5 }}
            >
              <PlaceIcon sx={{ color: '#A20E0E', fontSize: '1.2rem', mt: 0.2, flexShrink: 0 }} />
              <Box>
                <Typography
                  sx={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontWeight: 700,
                    fontSize: '1.1rem',
                    color: '#A20E0E',
                    lineHeight: 1.2,
                  }}
                >
                  {loc.label} — {loc.name}
                </Typography>
                <Typography variant="body2" sx={{ color: '#6B3A3A', mt: 0.4, fontSize: '0.9rem' }}>
                  {loc.address}
                </Typography>
              </Box>
            </Stack>
          </Box>
        ))}
      </Box>
    </Container>
  </Box>
);

export default Location;
