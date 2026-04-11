import React from 'react';
import {
  Box, Container, Typography, Grid, Card, CardContent, Chip,
} from '@mui/material';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
import Storefront from '@mui/icons-material/Storefront';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import StarIcon from '@mui/icons-material/Star';

const values = [
  {
    icon: <LocalFloristIcon sx={{ fontSize: '2rem', color: '#A20E0E' }} />,
    title: 'Ingredientes naturales',
    desc: 'Utilizamos borojó fresco y frutas tropicales colombianas seleccionadas, sin conservantes ni aditivos químicos, conservando la esencia natural de cada ingrediente.',
  },
  {
    icon: <EmojiObjectsIcon sx={{ fontSize: '2rem', color: '#A20E0E' }} />,
    title: 'Innovación artesanal',
    desc: 'Fusionamos técnicas tradicionales con combinaciones innovadoras de frutas colombianas, creando propuestas con alto valor sensorial que desafían lo convencional.',
  },
  {
    icon: <StarIcon sx={{ fontSize: '2rem', color: '#A20E0E' }} />,
    title: 'Calidad & sabor',
    desc: 'Cada frasco pasa por un riguroso control de calidad. Textura suave, aroma envolvente y sabor intenso que resalta la riqueza de los ingredientes colombianos.',
  },
  {
    icon: <Storefront sx={{ fontSize: '2rem', color: '#A20E0E' }} />,
    title: 'Proveedores',
    desc: 'Contamos con la ayuda de algunos de los mejores distribuidores de frutas del país especialistas en la calidad del producto necesario para llevarlo a tu mesa y 100% de origen colombiano',
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
      <Grid container spacing={6} alignItems="flex-start">
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
            Nació de un desafío
          </Typography>
          <Typography
            sx={{
              fontFamily: "'Great Vibes', cursive",
              fontSize: '1.8rem',
              color: '#FF751F',
              mb: 3,
            }}
          >
            a lo convencional
          </Typography>

          <Typography variant="body1" sx={{ color: '#4A2020', lineHeight: 1.9, mb: 2, fontSize: '1rem' }}>
            Comenzó con una frase que lo cambió todo. En una clase de gastronomía, mientras
            aprendíamos las reglas "correctas", alguien nos dijo que a veces ir contra el mundo
            y lo convencional es la mejor opción para crear grandes cosas.
          </Typography>
          <Typography variant="body1" sx={{ color: '#4A2020', lineHeight: 1.9, mb: 2, fontSize: '1rem' }}>
            Ese fue el <em>click</em> que necesitábamos. Una de nosotras se atrevió con una
            combinación extraña que, al principio, todas dudamos. Pero en el momento en que la
            probamos, el silencio en la cocina lo dijo todo: era perfecta. Ese experimento nos
            demostró que las mejores creaciones nacen cuando confías en tu instinto.
          </Typography>
          <Typography variant="body1" sx={{ color: '#4A2020', lineHeight: 1.9, mb: 3, fontSize: '1rem' }}>
            Solo somos cuatro niñas que crecieron… y hoy estamos haciendo realidad una marca para
            la que, sin saberlo, nos estuvimos preparando toda la vida. Entre risas, experimentos
            y muchas cuentas, descubrimos que nuestro destino era crear esta tentación juntas.
          </Typography>

          {/* Misión */}
          <Box sx={{ mb: 2.5 }}>
            <Typography
              sx={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 700,
                fontSize: '1.15rem',
                color: '#A20E0E',
                mb: 0.8,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
              }}
            >
              Misión
            </Typography>
            <Typography variant="body1" sx={{ color: '#4A2020', lineHeight: 1.9, fontSize: '0.97rem' }}>
              Elaborar mermeladas artesanales de alta calidad, fusionando técnicas tradicionales con
              la riqueza de las frutas tropicales de Colombia. Nos enfocamos en utilizar ingredientes
              frescos y naturales, apoyando a productores locales y promoviendo el aprovechamiento de
              la diversidad frutal del país.
            </Typography>
          </Box>

          {/* Visión */}
          <Box>
            <Typography
              sx={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 700,
                fontSize: '1.15rem',
                color: '#A20E0E',
                mb: 0.8,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
              }}
            >
              Visión
            </Typography>
            <Typography variant="body1" sx={{ color: '#4A2020', lineHeight: 1.9, fontSize: '0.97rem' }}>
              Posicionarnos como una marca destacada en la elaboración de mermeladas artesanales de
              alta calidad, reconocida por la innovación en combinaciones de frutas colombianas y por
              la valorización de ingredientes autóctonos, ofreciendo una propuesta diferenciada que
              resalte la riqueza frutal de Colombia.
            </Typography>
          </Box>
        </Grid>

        {/* Right: values grid */}
        <Grid item xs={12} md={6}>
          <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 2 }}>
            {values.map((val) => (
              <Card
                key={val.title}
                sx={{
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
                {/* Top band */}
                <Box sx={{ height: 8, background: 'linear-gradient(90deg, #A20E0E, #A20E0E99)' }} />

                <CardContent sx={{ textAlign: 'center', pt: 3, pb: 3 }}>
                  {/* Icon circle */}
                  <Box
                    sx={{
                      width: 64,
                      height: 64,
                      borderRadius: '50%',
                      bgcolor: '#FBEAEA',
                      border: '3px solid #A20E0E',
                      boxShadow: '0 0 0 4px #A20E0E20',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mx: 'auto',
                      mb: 2,
                    }}
                  >
                    {val.icon}
                  </Box>

                  <Typography
                    variant="h6"
                    sx={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontWeight: 700,
                      color: '#2C1A1A',
                      fontSize: '1.1rem',
                      mb: 1,
                    }}
                  >
                    {val.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#6B3A3A', lineHeight: 1.7, fontSize: '0.87rem' }}>
                    {val.desc}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Grid>
      </Grid>
    </Container>
  </Box>
);

export default About;
