import React from 'react';
import {
  Box, Container, Typography, Card, CardContent,
  Avatar, Chip, Stack,
} from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import IconButton from '@mui/material/IconButton';
import viviana from '../assets/viviana.jpeg';
import maria from '../assets/maria.jpeg';
import paula from '../assets/paula.jpeg';
import fernanda from '../assets/fernanda.jpeg';

const teamMembers = [
  {
    name: 'Nicolle Viviana Pineda Espinosa',
    role: 'Fundadora & Chef Principal',
    bio: 'Estructura y corazón del proyecto. Da orden a cada sueño con precisión y equilibrio, convirtiendo nuestras ideas en una realidad firme y con propósito.',
    img: viviana,
    color: '#A20E0E',
    badge: 'Fundadora',
  },
  {
    name: 'María del Mar Guerrero Silva',
    role: 'Director de Operaciones',
    bio: 'Guardiana de la cocina. Con amor y precisión, cuida cada proceso para que cada producto conserve su esencia artesanal y sepa a perfección.',
    img: maria,
    color: '#FF751F',
    badge: 'Operaciones',
  },
  {
    name: 'Paula Andrea Soriano Fernández',
    role: 'Artesana & Control de Calidad',
    bio: 'Mentee Creativa y Chief Taster. El alma alegre del equipo, transforma ideas en magia y cuida cada detalle hasta alcanzar la perfección en cada sabor.',
    img: paula,
    color: '#A20E0E',
    badge: 'Artesana',
  },
  {
    name: 'Maria Fernanda Mendoza Guzmán',
    role: 'Diseño & Marketing Digital',
    bio: 'Mente creativa de Tentación Natural. Convierte frutas exóticas en experiencias inolvidables y logra que cada sabor cuente una historia que conecta y enamora.',
    img: fernanda,
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
          color: '#6B3A3A',
          lineHeight: 1.7,
          fontSize: '0.87rem',
          mb: 2,
        }}
      >
        {member.bio}
      </Typography>

      
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

      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }, gap: 3 }}>
        {teamMembers.map((member) => (
          <TeamCard key={member.name} member={member} />
        ))}
      </Box>
    </Container>
  </Box>
);

export default Team;
