import React, { useState } from 'react';
import borojoAgrazNaranja from '../assets/borojoAgrazNaranja.jpeg';
import borojoGrabadilla from '../assets/borojoGranadillaJengibre.jpeg';
import borojoMaracuya from '../assets/borojoMaracuyaArandanos.jpeg';
import borojoPina from '../assets/borojopina.jpeg';
import {
  Box, Container, Typography, Card, CardContent,
  CardMedia, CardActions, Button, Chip, Stack, Rating, Snackbar, Alert,
} from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import IconButton from '@mui/material/IconButton';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import { useCart } from '../context/CartContext';

const products = [
  {
    id: 1,
    name: 'Borojó, Agraz & Naranja',
    subtitle: 'Ácido, silvestre, con frescura cítrica al final',
    description:
      'Es una combinación exótica y atrevida que funciona por contraste: El borojó pone la base densa y terrosa, el agraz la acidez morada y silvestre, y la naranja aligera todo con frescura cítrica. El resultado es una mermelada oscura, compleja y con capas de sabor nada predecible, muy colombiana.',
    price: '$12.500',
    weight: '250 g',
    rating: 4.9,
    reviews: 128,
    tag: 'Más vendido',
    tagColor: '#A20E0E',
    img: borojoAgrazNaranja,
    accent: '#FF751F',
  },
  {
    id: 2,
    name: 'Borojó, Granadilla & Trocitos de Jengibre',
    subtitle: 'Dulce y floral al inicio, con un remate cálido y picante del jengibre',
    description:
      'Una combinación tropical y vibrante. El borojó da la base densa y profunda, la granadilla aporta dulzura floral y semillas crujientes, y el jengibre irrumpe con un toque picante y cálido que lo cambia todo. Es una mermelada que empieza suave y termina con carácter.',
    price: '$13.500',
    weight: '250 g',
    rating: 4.8,
    reviews: 94,
    tag: 'Nuevo',
    tagColor: '#FF751F',
    img: borojoGrabadilla,
    accent: '#FF751F',
  },
  {
    id: 3,
    name: 'Borojó, Maracuyá & Arándanos',
    subtitle: 'Acido, intenso y frutal, con un fondo oscuro y profundo.',
    description:
      'Una combinación ácida y potente. El maracuyá lidera con su acidez tropical intensa, los arándanos suman profundidad y un tono morado vibrante, y el borojó ancla todo con su cuerpo denso y terroso. Una mermelada atrevida, de sabor vivo y color oscuro impactante.',
    price: '$13.000',
    weight: '250 g',
    rating: 4.7,
    reviews: 87,
    tag: 'Favorita',
    tagColor: '#C93030',
    img: borojoMaracuya,
    accent: '#FF751F',
  },
  {
    id: 4,
    name: 'Borojó, Piña & Jengibre',
    subtitle: 'Dulce y tropical, con acidez fresca de la piña y un toque especiado al final.',
    description:
      'Una combinación tropical con punch. La piña aporta dulzura jugosa y acidez fresca, el borojó le da peso y profundidad, y el jengibre remata con un calor especiado que despierta el paladar. Vibrante, refrescante y con carácter.',
    price: '$14.000',
    weight: '250 g',
    rating: 4.8,
    reviews: 62,
    tag: 'Edición especial',
    tagColor: '#6B2D8B',
    img: borojoPina,
    accent: '#FF751F',
  },
];

const ProductCard = ({ product, onAddToCart }) => {
  const [liked, setLiked] = useState(false);

  return (
    <Card
      sx={{
        flex: 1,
        minWidth: 0,
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '0 4px 20px rgba(162,14,14,0.08)',
        border: '1px solid #FBEAEA',
        transition: 'transform 0.25s ease, box-shadow 0.25s ease',
        '&:hover': {
          transform: 'translateY(-6px)',
          boxShadow: '0 12px 36px rgba(162,14,14,0.15)',
        },
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      
      {/* Favourite button */}
      <IconButton
        onClick={() => setLiked((p) => !p)}
        sx={{
          position: 'absolute',
          top: 8,
          right: 8,
          zIndex: 1,
          bgcolor: 'white',
          boxShadow: 1,
          '&:hover': { bgcolor: '#FBEAEA' },
        }}
        size="small"
      >
        {liked ? (
          <FavoriteIcon sx={{ color: '#A20E0E', fontSize: '1.1rem' }} />
        ) : (
          <FavoriteBorderIcon sx={{ color: '#A20E0E', fontSize: '1.1rem' }} />
        )}
      </IconButton>

      <CardMedia
        component="img"
        image={product.img}
        alt={product.name}
        sx={{ width: '100%', aspectRatio: '4 / 3', objectFit: 'cover', display: 'block', flexShrink: 0 }}
      />

      <CardContent sx={{ display: 'flex', flexDirection: 'column', pb: 1, flexGrow: 1 }}>
        {/* Nombre — fijo a 1 línea */}
        <Typography
          variant="h6"
          sx={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 700,
            color: '#A20E0E',
            fontSize: '1.2rem',
            lineHeight: 1.3,
            height: '1.56rem',
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
            mb: 0.3,
          }}
        >
          {product.name}
        </Typography>

        {/* Subtítulo — fijo a 1 línea */}
        <Typography
          variant="caption"
          sx={{
            color: product.accent,
            fontWeight: 600,
            display: 'block',
            height: '1.2rem',
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
          }}
        >
          {product.subtitle}
        </Typography>

        {/* Descripción — fijo a 4 líneas */}
        <Typography variant="body2" sx={{
          color: '#6B3A3A', mt: 1, lineHeight: 1.6, fontSize: '0.88rem',
          display: '-webkit-box',
          WebkitLineClamp: 4,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
          height: '5.6rem',
        }}>
          {product.description}
        </Typography>

        {/* Rating */}
        <Stack direction="row" alignItems="center" spacing={1} sx={{ mt: 1.5, height: '1.5rem' }}>
          <Rating
            value={product.rating}
            precision={0.1}
            readOnly
            size="small"
            sx={{ '& .MuiRating-iconFilled': { color: '#FF751F' } }}
          />
          <Typography variant="caption" sx={{ color: '#888' }}>
            {product.rating} ({product.reviews})
          </Typography>
        </Stack>

        {/* Peso */}
        <Stack direction="row" alignItems="center" spacing={1} sx={{ mt: 1.5, height: '1.5rem' }}>
          <LocalOfferIcon sx={{ fontSize: '0.9rem', color: '#6B3A3A' }} />
          <Typography variant="caption" sx={{ color: '#6B3A3A' }}>
            {product.weight} · Hecho a mano
          </Typography>
        </Stack>
      </CardContent>

      <CardActions sx={{ px: 2, pb: 2, pt: 0, justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography
          variant="h6"
          sx={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 700,
            color: '#A20E0E',
            fontSize: '1.3rem',
          }}
        >
          {product.price}
        </Typography>
        <Button
          variant="contained"
          size="small"
          startIcon={<ShoppingCartOutlinedIcon />}
          onClick={() => onAddToCart(product)}
          sx={{
            bgcolor: '#A20E0E',
            fontSize: '0.8rem',
            py: 0.8,
            px: 2,
            '&:hover': { bgcolor: '#7A0A0A' },
          }}
        >
          Agregar
        </Button>
      </CardActions>
    </Card>
  );
};

const Products = () => {
  const { addToCart } = useCart();
  const [snackbar, setSnackbar] = useState({ open: false, product: '' });

  const handleAddToCart = (product) => {
    addToCart(product);
    setSnackbar({ open: true, product: product.name });
  };

  return (
    <Box
      id="productos"
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: 'white',
      }}
    >
      <Container maxWidth="lg">
        {/* Header */}
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Chip
            label="Nuestros productos"
            sx={{
              bgcolor: '#FBEAEA',
              color: '#A20E0E',
              fontWeight: 600,
              mb: 2,
              fontSize: '0.82rem',
            }}
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
            Mermeladas de Borojó
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
            Artesanales & Naturales
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: '#6B3A3A',
              maxWidth: 540,
              mx: 'auto',
              lineHeight: 1.8,
              fontSize: '1rem',
            }}
          >
            Cada frasco está elaborado con borojó fresco del Pacífico colombiano,
            sin conservantes, sin colorantes artificiales. Solo fruta, amor y tradición.
          </Typography>
        </Box>

        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 3 }}>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} onAddToCart={handleAddToCart} />
          ))}
        </Box>

        {/* WhatsApp CTA */}
        <Box
          sx={{
            mt: 8,
            p: { xs: 3, md: 5 },
            borderRadius: 4,
            background: 'linear-gradient(135deg, #A20E0E, #C93030)',
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 3,
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          <Box>
            <Typography
              variant="h4"
              sx={{
                fontFamily: "'Cormorant Garamond', serif",
                color: 'white',
                fontWeight: 700,
                mb: 0.5,
              }}
            >
              ¿Quieres hacer un pedido personalizado?
            </Typography>
            <Typography sx={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.98rem' }}>
              Contáctanos por WhatsApp y te asesoramos con gusto. Envíos a domicilio disponibles.
            </Typography>
          </Box>
          <Button
            variant="contained"
            size="large"
            href="https://wa.me/573001234567"
            target="_blank"
            sx={{
              bgcolor: '#FF751F',
              flexShrink: 0,
              fontSize: '1rem',
              px: 4,
              py: 1.5,
              whiteSpace: 'nowrap',
              '&:hover': { bgcolor: '#e06518' },
            }}
          >
            Pedir por WhatsApp
          </Button>
        </Box>
      </Container>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={2500}
        onClose={() => setSnackbar({ open: false, product: '' })}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          severity="success"
          onClose={() => setSnackbar({ open: false, product: '' })}
          sx={{ bgcolor: '#A20E0E', color: 'white', '& .MuiAlert-icon': { color: 'white' } }}
        >
          ¡<strong>{snackbar.product}</strong> agregado al carrito!
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Products;
