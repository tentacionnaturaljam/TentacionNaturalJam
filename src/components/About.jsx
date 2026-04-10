import React from 'react';
import {
  Box, Container, Typography, Grid, Paper, Chip,
} from '@mui/material';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import FavoriteIcon from '@mui/icons-material/Favorite';
import StarIcon from '@mui/icons-material/Star';

const values = [
  {
    icon: <LocalFloristIcon sx={{ fontSize: '2rem', color: '#A20E0E' }} />,
    title: 'Natural & Artesanal',
    desc: 'Elaboramos cada frasco a mano con ingredientes 100% naturales, sin aditivos químicos. Respetamos los procesos tradicionales de conservación.',
  },
  {
    icon: <PeopleAltIcon sx={{ fontSize: '2rem', color: '#A20E0E' }} />,
    title: 'Apoyo local',
    desc: 'Trabajamos directamente con agricultores del Pacífico colombiano para garantizar borojó fresco y apoyar a las comunidades productoras.',
  },
  {
    icon: <FavoriteIcon sx={{ fontSize: '2rem', color: '#A20E0E' }} />,
    title: 'Hecho con amor',
    desc: 'Cada mermelada es una receta familiar perfeccionada durante años. El sabor que ponemos en cada frasco se nota desde la primera cucharada.',
  },
  {
    icon: <StarIcon sx={{ fontSize: '2rem', color: '#A20E0E' }} />,
    title: 'Calidad premium',
    desc: 'Seleccionamos solo los mejores frutos en su punto óptimo de madurez. Control de calidad riguroso en cada lote de producción.',
  },
];

const About = () => (
  <Box
    id="about"
    sx={{
      py: { xs: 8, md: 12 },
      background: 'linear-gradient(180deg, #FBEAEA 0%, #f5e0e0 100%)',
    }}
  >
    <Container maxWidth="lg">
      <Grid container spacing={6} alignItems="center">
        {/* Left: text */}
        <Grid item xs={12} md={6}>
          <Chip
            label="Nuestra historia"
            sx={{ bgcolor: '#A20E0E', color: 'white', fontWeight: 600, mb: 2, fontSize: '0.82rem' }}
          />
          <Typography
            variant="h2"
            sx={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 700,
              color: '#A20E0E',
              fontSize: { xs: '2.2rem', md: '3rem' },
              lineHeight: 1.15,
              mb: 1,
            }}
          >
            Del Pacífico a tu mesa
          </Typography>
          <Typography
            sx={{
              fontFamily: "'Great Vibes', cursive",
              fontSize: '1.8rem',
              color: '#FF751F',
              mb: 3,
            }}
          >
            con sabor colombiano
          </Typography>

          <Typography variant="body1" sx={{ color: '#4A2020', lineHeight: 1.9, mb: 2, fontSize: '1rem' }}>
            <strong>Tentación Natural</strong> nació en 2026 de un sueño sencillo: llevar el sabor
            auténtico del borojó —esa fruta ancestral del Chocó— a cada hogar colombiano en forma
            de mermelada artesanal.
          </Typography>
          <Typography variant="body1" sx={{ color: '#4A2020', lineHeight: 1.9, mb: 2, fontSize: '1rem' }}>
            Empezamos en una cocina familiar con recetas heredadas de abuela, usando frutos
            cosechados directamente por agricultores locales. Hoy, cada frasco de Tentación Natural
            es el resultado de una pasión genuina por los sabores del Pacífico colombiano.
          </Typography>
          <Typography variant="body1" sx={{ color: '#4A2020', lineHeight: 1.9, fontSize: '1rem' }}>
            Nuestra misión es preservar la riqueza gastronómica del borojó, apoyar a las
            comunidades campesinas y ofrecerte una experiencia sensorial que te haga volver
            una y otra vez. <em>Cae en la tentación.</em>
          </Typography>
        </Grid>

        {/* Right: values grid */}
        <Grid item xs={12} md={6}>
          <Grid container spacing={2}>
            {values.map((val) => (
              <Grid item xs={12} sm={6} key={val.title}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 3,
                    borderRadius: 3,
                    border: '1px solid #f0c8c8',
                    bgcolor: 'white',
                    height: '100%',
                    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: '0 8px 24px rgba(162,14,14,0.1)',
                    },
                  }}
                >
                  <Box sx={{ mb: 1.5 }}>{val.icon}</Box>
                  <Typography
                    variant="h6"
                    sx={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontWeight: 700,
                      color: '#A20E0E',
                      mb: 1,
                      fontSize: '1.1rem',
                    }}
                  >
                    {val.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#6B3A3A', lineHeight: 1.7, fontSize: '0.88rem' }}>
                    {val.desc}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  </Box>
);

export default About;
