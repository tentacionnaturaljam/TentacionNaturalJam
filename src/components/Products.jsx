import React, { useState } from 'react';
import {
  Box, Container, Typography, Grid, Card, CardContent,
  CardMedia, CardActions, Button, Chip, Stack, Rating, Snackbar, Alert,
} from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import IconButton from '@mui/material/IconButton';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';

const products = [
  {
    id: 1,
    name: 'Borojó Puro',
    subtitle: 'El sabor original del Pacífico',
    description:
      'Nuestra mermelada estrella: borojó 100% puro, sin mezclas. Sabor intenso, terroso y ligeramente ácido que conquista desde el primer bocado.',
    price: '$12.500',
    weight: '250 g',
    rating: 4.9,
    reviews: 128,
    tag: 'Más vendido',
    tagColor: '#A20E0E',
    img: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=500&q=80',
    accent: '#8B4513',
  },
  {
    id: 2,
    name: 'Borojó & Maracuyá',
    subtitle: 'Exótico y refrescante',
    description:
      'La intensidad del borojó se une al toque tropical del maracuyá para crear una mermelada vibrante, ácida y perfecta para el desayuno.',
    price: '$13.500',
    weight: '250 g',
    rating: 4.8,
    reviews: 94,
    tag: 'Nuevo',
    tagColor: '#FF751F',
    img: 'https://images.unsplash.com/photo-1597562185489-0bb25d5f6de5?w=500&q=80',
    accent: '#FF751F',
  },
  {
    id: 3,
    name: 'Borojó & Naranja',
    subtitle: 'Dulce con un toque cítrico',
    description:
      'La dulzura natural del borojó combinada con el frescor de la naranja de Caldas. Una mermelada equilibrada que enamora a toda la familia.',
    price: '$13.000',
    weight: '250 g',
    rating: 4.7,
    reviews: 87,
    tag: 'Favorita',
    tagColor: '#C93030',
    img: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=500&q=80',
    accent: '#E87722',
  },
  {
    id: 4,
    name: 'Borojó & Agraz',
    subtitle: 'Antioxidante y deliciosa',
    description:
      'La fusión del borojó con el agraz silvestre da como resultado una mermelada oscura, rica en antioxidantes, con un sabor profundo y sofisticado.',
    price: '$14.000',
    weight: '250 g',
    rating: 4.8,
    reviews: 62,
    tag: 'Edición especial',
    tagColor: '#6B2D8B',
    img: 'https://images.unsplash.com/photo-1506617564039-2f3b650b7010?w=500&q=80',
    accent: '#6B2D8B',
  },
  {
    id: 5,
    name: 'Borojó & Granadilla',
    subtitle: 'Dulce y tropical',
    description:
      'La suave dulzura de la granadilla balancea el carácter intenso del borojó. Una mermelada elegante y aromática para los paladares más exigentes.',
    price: '$13.500',
    weight: '250 g',
    rating: 4.6,
    reviews: 55,
    tag: null,
    tagColor: null,
    img: 'https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=500&q=80',
    accent: '#D4A017',
  },
  {
    id: 6,
    name: 'Borojó & Jengibre',
    subtitle: 'Con un toque picante',
    description:
      'Para los amantes de los sabores osados: borojó artesanal con un sutil toque de jengibre fresco. Reconfortante, digestiva y adictiva.',
    price: '$14.500',
    weight: '250 g',
    rating: 4.5,
    reviews: 41,
    tag: 'Gourmet',
    tagColor: '#2D7D4E',
    img: 'https://images.unsplash.com/photo-1571506165871-ee72a35bc9d4?w=500&q=80',
    accent: '#2D7D4E',
  },
];

const ProductCard = ({ product, onAddToCart }) => {
  const [liked, setLiked] = useState(false);

  return (
    <Card
      sx={{
        height: '100%',
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
      {/* Tag */}
      {product.tag && (
        <Chip
          label={product.tag}
          size="small"
          sx={{
            position: 'absolute',
            top: 14,
            left: 14,
            zIndex: 1,
            bgcolor: product.tagColor,
            color: 'white',
            fontWeight: 700,
            fontSize: '0.72rem',
          }}
        />
      )}

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
        height="200"
        image={product.img}
        alt={product.name}
        sx={{ objectFit: 'cover' }}
      />

      <CardContent sx={{ flexGrow: 1, pb: 1 }}>
        <Typography
          variant="h6"
          sx={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 700,
            color: '#A20E0E',
            fontSize: '1.2rem',
            mb: 0.3,
          }}
        >
          {product.name}
        </Typography>
        <Typography variant="caption" sx={{ color: product.accent, fontWeight: 600 }}>
          {product.subtitle}
        </Typography>
        <Typography variant="body2" sx={{ color: '#6B3A3A', mt: 1, lineHeight: 1.6, fontSize: '0.88rem' }}>
          {product.description}
        </Typography>

        <Stack direction="row" alignItems="center" spacing={1} sx={{ mt: 1.5 }}>
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

        <Stack direction="row" alignItems="center" spacing={1} sx={{ mt: 1.5 }}>
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
          onClick={() => onAddToCart(product.name)}
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
  const [snackbar, setSnackbar] = useState({ open: false, product: '' });

  const handleAddToCart = (name) => {
    setSnackbar({ open: true, product: name });
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

        <Grid container spacing={3}>
          {products.map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <ProductCard product={product} onAddToCart={handleAddToCart} />
            </Grid>
          ))}
        </Grid>

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
