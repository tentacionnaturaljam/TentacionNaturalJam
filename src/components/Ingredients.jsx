import {
  Box, Container, Typography, Chip, Card, CardContent,
} from '@mui/material';

import borojo from '../assets/borojo.jpeg';
import agraz from '../assets/agraz.jpeg';
import arandanos from '../assets/arandanos.jpeg';
import granadilla from '../assets/granadilla.jpeg';
import jengibre from '../assets/jengibre.jpeg';
import naranja from '../assets/naranja.jpeg';
import maracuya from '../assets/maracuya.jpeg';
import pina from '../assets/pina.jpeg';
import limon from '../assets/limon.jpeg';


const ingredients = [
  {
    name: 'Borojó',
    img: borojo,
    desc: 'Fruta tropical del Pacífico colombiano, rica en proteínas y antioxidantes. Base de todas nuestras mermeladas por su sabor intenso y terroso.',
    color: '#6B2D00',
  },
  {
    name: 'Agraz',
    img: agraz,
    desc: 'Baya silvestre andina, profunda en sabor y cargada de antioxidantes. Aporta un toque ácido-dulce y un color oscuro vibrante.',
    color: '#4A0E6B',
  },
  {
    name: 'Naranja',
    img: naranja,
    desc: 'Cítrico refrescante que equilibra la acidez del borojó. Aporta vitamina C y un aroma cítrico inconfundible a cada frasco.',
    color: '#E87722',
  },
  {
    name: 'Granadilla',
    img: granadilla,
    desc: 'Fruta tropical de sabor suave y dulce. Aporta semillas crujientes, un aroma floral y una textura única a la mermelada.',
    color: '#D4A017',
  },
  {
    name: 'Jengibre',
    img: jengibre,
    desc: 'Raíz con propiedades digestivas y antiinflamatorias. Agrega un toque cálido y picante que distingue nuestras versiones gourmet.',
    color: '#B8860B',
  },
  {
    name: 'Arándanos',
    img: arandanos,
    desc: 'Pequeños frutos azules cargados de antioxidantes. Refuerzan el color, la dulzura y el valor nutricional de la mermelada.',
    color: '#4169E1',
  },
  {
    name: 'Maracuyá',
    img: maracuya,
    desc: 'Fruta tropical de intensa acidez y aroma único. Se fusiona con el borojó para crear una de nuestras combinaciones más vibrantes.',
    color: '#de6b02',
  },
  {
    name: 'Piña',
    img: pina,
    desc: 'Dulce y tropical, la piña aporta frescura y una textura jugosa. Complementa el borojó con su característico sabor caribeño.',
    color: '#FFB300',
  },
  {
    name: 'Limón',
    img: limon,
    desc: 'Cítrico de alta acidez que actúa como conservante natural. Realza los sabores y aporta un toque fresco a cada preparación.',
    color: '#9ACD32',
  },
];

const Ingredients = () => (
  <Box
    id="ingredientes"
    sx={{
      py: { xs: 8, md: 12 },
      background: 'linear-gradient(180deg, #f6fbf0 0%, #edf6e5 100%)',
    }}
  >
    <Container maxWidth="lg">
      {/* Header */}
      <Box sx={{ textAlign: 'center', mb: 8 }}>
        <Chip
          label="Lo que usamos"
          sx={{ bgcolor: '#f3f8ed', color: '#c13c2c', fontWeight: 600, mb: 2, fontSize: '0.82rem' }}
        />
        <Typography
          variant="h2"
          sx={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 700,
            color: '#c13c2c',
            fontSize: { xs: '2.4rem', md: '3.2rem' },
            lineHeight: 1.1,
          }}
        >
          Nuestros Ingredientes
        </Typography>
        <Typography
          sx={{
            fontFamily: "'Great Vibes', cursive",
            fontSize: { xs: '1.8rem', md: '2.4rem' },
            color: '#de6b02',
            mt: 0.5,
            mb: 2,
          }}
        >
          Frescos & Naturales
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: '#3a4a1a', maxWidth: 540, mx: 'auto', lineHeight: 1.8, fontSize: '1rem' }}
        >
          Seleccionamos cada ingrediente por su calidad, origen colombiano y aporte sensorial.
          Sin artificiales, sin rellenos — solo lo mejor de la naturaleza.
        </Typography>
      </Box>

      {/* Grid */}
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: 'repeat(2, 1fr)',
            sm: 'repeat(3, 1fr)',
            md: 'repeat(3, 1fr)',
          },
          gap: 3,
        }}
      >
        {ingredients.map((ing) => (
          <Card
            key={ing.name}
            sx={{
              borderRadius: 4,
              boxShadow: '0 4px 20px rgba(92,117,35,0.07)',
              border: '1px solid #F5E0E0',
              overflow: 'hidden',
              transition: 'transform 0.25s ease, box-shadow 0.25s ease',
              '&:hover': {
                transform: 'translateY(-6px)',
                boxShadow: '0 16px 40px rgba(92,117,35,0.13)',
              },
              bgcolor: 'white',
            }}
          >
            {/* Top band */}
            <Box sx={{ height: 6, bgcolor: ing.color }} />

            <CardContent sx={{ textAlign: 'center', pt: 3, pb: 3, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              {/* Image */}
              <Box
                sx={{
                  width: 140,
                  height: 140,
                  mb: 2,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '50%',
                  bgcolor: `${ing.color}15`,
                  border: `2px solid ${ing.color}40`,
                  overflow: 'hidden',
                  flexShrink: 0,
                }}
              >
                <Box
                  component="img"
                  src={ing.img}
                  alt={ing.name}
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              </Box>

              <Typography
                sx={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 700,
                  fontSize: '1.2rem',
                  color: ing.color,
                  mb: 1,
                  lineHeight: 1,
                }}
              >
                {ing.name}
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  color: '#3a4a1a',
                  lineHeight: 1.7,
                  fontSize: '0.85rem',
                }}
              >
                {ing.desc}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Container>
  </Box>
);

export default Ingredients;
