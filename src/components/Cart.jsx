import { useState } from 'react';
import {
  Drawer, Box, Typography, IconButton, Button,
  Divider, Stack, Snackbar, Alert,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutlined';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useCart } from '../context/CartContext';


const Cart = ({ open, onClose }) => {
  const { cart, removeFromCart, updateQty, clearCart, totalItems, totalPrice } = useCart();
  const [snackbar, setSnackbar] = useState(false);

  const formatPrice = (n) =>
    '$' + n.toLocaleString('es-CO');

  const buildMessage = () => {
    const lines = cart.map(
      (item) =>
        `• ${item.name} x${item.qty} (${item.weight}) — ${formatPrice(
          parseInt(item.price.replace(/\D/g, ''), 10) * item.qty
        )}`
    );
    return (
      `🍓 *Pedido Tentación Natural Jam*\n\n` +
      lines.join('\n') +
      `\n\n*Total: ${formatPrice(totalPrice)}*\n\nQuiero confirmar mi pedido. ¡Gracias!`
    );
  };

  const handleOrder = () => {
    const message = buildMessage();
    const waUrl = `https://wa.me/573057361464?text=${encodeURIComponent(message)}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
    setSnackbar(true);
  };

  return (
    <>
      <Drawer
        anchor="right"
        open={open}
        onClose={onClose}
        slotProps={{
          paper: {
            sx: {
              width: { xs: '100vw', sm: 400 },
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: '#cfe3a2',
              backgroundImage: 'none',
            },
          },
        }}
      >
        {/* Header */}
        <Box
          sx={{
            px: 3,
            py: 2,
            bgcolor: '#5c7523',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <ShoppingCartOutlinedIcon sx={{ color: 'white', fontSize: '1.3rem' }} />
            <Typography
              sx={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 700,
                fontSize: '1.3rem',
                color: 'white',
                lineHeight: 1,
              }}
            >
              Mi carrito
            </Typography>
            {totalItems > 0 && (
              <Box
                sx={{
                  bgcolor: '#de6b02',
                  color: 'white',
                  borderRadius: '50%',
                  width: 22,
                  height: 22,
                  flexShrink: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  lineHeight: 1,
                }}
              >
                {totalItems}
              </Box>
            )}
          </Box>
          <IconButton onClick={onClose} sx={{ color: 'white' }}>
            <CloseIcon />
          </IconButton>
        </Box>

        {/* Items */}
        <Box sx={{ flex: 1, overflowY: 'auto', px: 2, py: 2 }}>
          {cart.length === 0 ? (
            <Box
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 2,
                color: '#7a8a50',
              }}
            >
              <ShoppingCartOutlinedIcon sx={{ fontSize: '3.5rem', opacity: 0.4 }} />
              <Typography sx={{ fontSize: '0.95rem' }}>Tu carrito está vacío</Typography>
            </Box>
          ) : (
            <Stack spacing={2}>
              {cart.map((item) => (
                <Box key={item.id}>
                  <Stack direction="row" spacing={2} alignItems="center">
                    <Box
                      component="img"
                      src={item.img}
                      alt={item.name}
                      sx={{
                        width: 64,
                        height: 64,
                        borderRadius: 2,
                        objectFit: 'cover',
                        flexShrink: 0,
                      }}
                    />
                    <Box sx={{ flex: 1, minWidth: 0 }}>
                      <Typography
                        sx={{
                          fontWeight: 700,
                          fontSize: '0.9rem',
                          color: '#c13c2c',
                          fontFamily: "'Cormorant Garamond', serif",
                          whiteSpace: 'nowrap',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                        }}
                      >
                        {item.name}
                      </Typography>
                      <Typography sx={{ fontSize: '0.78rem', color: '#888' }}>
                        {item.weight}
                      </Typography>
                      <Typography sx={{ fontSize: '0.85rem', fontWeight: 700, color: '#333', mt: 0.3 }}>
                        {formatPrice(
                          parseInt(item.price.replace(/\D/g, ''), 10) * item.qty
                        )}
                      </Typography>
                    </Box>

                    {/* Qty controls */}
                    <Stack
                      direction="row"
                      alignItems="center"
                      spacing={0.3}
                      sx={{ flexShrink: 0, alignSelf: 'center' }}
                    >
                      <IconButton
                        size="small"
                        onClick={() => updateQty(item.id, -1)}
                        sx={{ border: '1px solid #f3f8ed', p: 0.3, width: 24, height: 24 }}
                      >
                        <RemoveIcon sx={{ fontSize: '0.8rem', color: '#c13c2c' }} />
                      </IconButton>
                      <Typography sx={{ fontWeight: 700, width: 18, textAlign: 'center', fontSize: '0.85rem' }}>
                        {item.qty}
                      </Typography>
                      <IconButton
                        size="small"
                        onClick={() => updateQty(item.id, 1)}
                        sx={{ border: '1px solid #f3f8ed', p: 0.3, width: 24, height: 24 }}
                      >
                        <AddIcon sx={{ fontSize: '0.8rem', color: '#c13c2c' }} />
                      </IconButton>
                      <IconButton
                        size="small"
                        onClick={() => removeFromCart(item.id)}
                        sx={{ p: 0.3, width: 28, height: 28, ml: 0.5 }}
                      >
                        <DeleteOutlineIcon sx={{ fontSize: '1rem', color: '#7a8a50' }} />
                      </IconButton>
                    </Stack>
                  </Stack>
                  <Divider sx={{ mt: 2 }} />
                </Box>
              ))}
            </Stack>
          )}
        </Box>

        {/* Footer */}
        {cart.length > 0 && (
          <Box sx={{ px: 3, py: 3, borderTop: '1px solid #f3f8ed' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2, height: '2rem' }}>
              <Typography sx={{ fontWeight: 600, color: '#3a4a1a', fontSize: '1rem', lineHeight: '2rem', verticalAlign: 'middle' }}>Total</Typography>
              <Typography sx={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, fontSize: '1.3rem', color: '#c13c2c', lineHeight: '2rem', verticalAlign: 'middle' }}>
                {formatPrice(totalPrice)}
              </Typography>
            </Box>
            <Button
              fullWidth
              variant="contained"
              size="large"
              startIcon={<WhatsAppIcon />}
              onClick={handleOrder}
              sx={{
                bgcolor: '#25D366',
                fontSize: '1rem',
                py: 1.4,
                '&:hover': { bgcolor: '#1ebe5a' },
              }}
            >
              Enviar pedido por WhatsApp
            </Button>
            <Button
              fullWidth
              variant="text"
              size="small"
              onClick={clearCart}
              sx={{ mt: 1, color: '#7a8a50', fontSize: '0.78rem' }}
            >
              Vaciar carrito
            </Button>
          </Box>
        )}
      </Drawer>

      <Snackbar
        open={snackbar}
        autoHideDuration={4000}
        onClose={() => setSnackbar(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          severity="success"
          onClose={() => setSnackbar(false)}
          sx={{ bgcolor: '#25D366', color: 'white', '& .MuiAlert-icon': { color: 'white' } }}
        >
          Pedido copiado. Pégalo en el grupo de WhatsApp.
        </Alert>
      </Snackbar>
    </>
  );
};

export default Cart;
