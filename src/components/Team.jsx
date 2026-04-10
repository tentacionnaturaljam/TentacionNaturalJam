import React from 'react';
import {
  Box, Container, Typography, Grid, Card, CardContent,
  Avatar, Chip, Stack,
} from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import IconButton from '@mui/material/IconButton';

const teamMembers = [
  {
    name: 'Valentina Córdoba',
    role: 'Fundadora & Chef Principal',
    bio: 'Apasionada por la gastronomía colombiana, Valentina lleva más de 8 años estudiando las propiedades del borojó y experimentando en su cocina del Chocó.',
    img: 'https://i.pravatar.cc/300?img=47',
    color: '#A20E0E',
    badge: 'Fundadora',
  },
  {
    name: 'Andrés Mosquera',
    role: 'Director de Operaciones',
    bio: 'Con su expertise en cadena de suministro agrícola, Andrés garantiza que solo el mejor borojó fresco llegue a nuestra cocina, directamente de los productores.',
    img: 'https://i.pravatar.cc/300?img=12',
    color: '#FF751F',
    badge: 'Operaciones',
  },
  {
    name: 'Luz Marina Torres',
    role: 'Artesana & Control de Calidad',
    bio: 'Heredera de recetas ancestrales del Pacífico, Luz Marina aporta el alma tradicional a cada frasco. Sus manos son las que dan vida a nuestras mermeladas.',
    img: 'https://i.pravatar.cc/300?img=45',
    color: '#A20E0E',
    badge: 'Artesana',
  },
  {
    name: 'Felipe Rentería',
    role: 'Diseño & Marketing Digital',
    bio: 'Felipe es quien lleva la esencia de Tentación Natural al mundo digital, creando contenido que conecta nuestra historia con personas que aman lo auténtico.',
    img: 'https://i.pravatar.cc/300?img=33',
    color: '#FF751F',
    badge: 'Marketing',
  },
];

const TeamCard = ({ member }) => (
  <Card
    sx={{
      height: '100%',
      borderRadius: 4,
      boxShadow: '0 4px 20px rgba(162,14,14,0.08)',
      border: '1px solid #f5d5d5',
      overflow: 'hidden',
      transition: 'transform 0.25s ease, box-shadow 0.25s ease',
      '&:hover': {
        transform: 'translateY(-6px)',
        boxShadow: '0 16px 40px rgba(162,14,14,0.14)',
      },
    }}
  >
    {/* Top colored band */}
    <Box
      sx={{
        height: 8,
        background: `linear-gradient(90deg, ${member.color}, ${member.color}99)`,
      }}
    />

    <CardContent sx={{ textAlign: 'center', pt: 3, pb: 3 }}>
      <Avatar
        src={member.img}
        alt={member.name}
        sx={{
          width: 100,
          height: 100,
          mx: 'auto',
          mb: 2,
          border: `3px solid ${member.color}`,
          boxShadow: `0 0 0 4px ${member.color}20`,
        }}
      />

      <Chip
        label={member.badge}
        size="small"
        sx={{
          bgcolor: member.color,
          color: 'white',
          fontWeight: 700,
          fontSize: '0.7rem',
          mb: 1.5,
        }}
      />

      <Typography
        variant="h6"
        sx={{
          fontFamily: "'Cormorant Garamond', serif",
          fontWeight: 700,
          color: '#2C1A1A',
          fontSize: '1.2rem',
          mb: 0.3,
        }}
      >
        {member.name}
      </Typography>

      <Typography
        variant="body2"
        sx={{
          color: member.color,
          fontWeight: 600,
          fontSize: '0.82rem',
          mb: 1.5,
        }}
      >
        {member.role}
      </Typography>

      <Typography
        variant="body2"
        sx={{
          color: '#6B3A3A',
          lineHeight: 1.7,
          fontSize: '0.87rem',
          mb: 2,
        }}
      >
        {member.bio}
      </Typography>

      <Stack direction="row" justifyContent="center" spacing={0.5}>
        <IconButton
          size="small"
          sx={{
            color: member.color,
            '&:hover': { bgcolor: `${member.color}15` },
          }}
        >
          <InstagramIcon fontSize="small" />
        </IconButton>
        <IconButton
          size="small"
          sx={{
            color: member.color,
            '&:hover': { bgcolor: `${member.color}15` },
          }}
        >
          <LinkedInIcon fontSize="small" />
        </IconButton>
      </Stack>
    </CardContent>
  </Card>
);

const Team = () => (
  <Box
    id="nosotros"
    sx={{
      py: { xs: 8, md: 12 },
      bgcolor: 'white',
    }}
  >
    <Container maxWidth="lg">
      <Box sx={{ textAlign: 'center', mb: 8 }}>
        <Chip
          label="Conoce al equipo"
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
          Las personas detrás de
        </Typography>
        <Typography
          sx={{
            fontFamily: "'Great Vibes', cursive",
            fontSize: { xs: '2rem', md: '2.8rem' },
            color: '#FF751F',
            mt: 0.5,
            mb: 2,
          }}
        >
          Tentación Natural
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: '#6B3A3A',
            maxWidth: 520,
            mx: 'auto',
            lineHeight: 1.8,
            fontSize: '1rem',
          }}
        >
          Un equipo apasionado por la gastronomía colombiana, comprometido con la
          calidad artesanal y el apoyo a los productores locales del Pacífico.
        </Typography>
      </Box>

      <Grid container spacing={3} justifyContent="center">
        {teamMembers.map((member) => (
          <Grid item xs={12} sm={6} md={3} key={member.name}>
            <TeamCard member={member} />
          </Grid>
        ))}
      </Grid>
    </Container>
  </Box>
);

export default Team;
