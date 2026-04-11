import React, { useState } from 'react';
import {
  AppBar, Toolbar, Box, Button, IconButton, Badge,
  Drawer, List, ListItem, ListItemButton, ListItemText,
  useScrollTrigger,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Logo from './Logo';
import { useCart } from '../context/CartContext';

const navLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Productos', href: '#productos' },
  { label: 'Nuestros  Ingredientes', href: '#ingredientes' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Ubicación', href: '#ubicacion' },
  { label: 'Contacto', href: '#contacto' },
];

const Navbar = ({ onCartOpen }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { totalItems } = useCart();

  const scrolled = useScrollTrigger({ disableHysteresis: true, threshold: 50 });

  const handleNav = (href) => {
    setDrawerOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <AppBar
        position="fixed"
        elevation={scrolled ? 4 : 0}
        sx={{
          bgcolor: scrolled ? '#A20E0E' : 'transparent',
          backdropFilter: scrolled ? 'none' : 'blur(8px)',
          backgroundColor: scrolled ? '#A20E0E' : 'rgba(162,14,14,0.92)',
          transition: 'all 0.3s ease',
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between', px: { xs: 2, md: 4 } }}>
          <Box
            onClick={() => handleNav('#inicio')}
            sx={{ cursor: 'pointer' }}
          >
            <Logo size="small" light />
          </Box>

          {/* Desktop nav */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1, alignItems: 'center' }}>
            {navLinks.map((link) => (
              <Button
                key={link.label}
                onClick={() => handleNav(link.href)}
                sx={{
                  color: 'white',
                  fontWeight: 500,
                  fontSize: '0.95rem',
                  '&:hover': { bgcolor: 'rgba(255,255,255,0.15)' },
                }}
              >
                {link.label}
              </Button>
            ))}
            <Button
              variant="contained"
              onClick={() => handleNav('#productos')}
              sx={{ bgcolor: '#FF751F', ml: 1, '&:hover': { bgcolor: '#e06518' } }}
            >
              Pedir ahora
            </Button>
          </Box>

          {/* Mobile: carrito + menu */}
          <Box sx={{ display: { md: 'none' }, display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <IconButton onClick={onCartOpen} sx={{ color: 'white' }}>
              <Badge badgeContent={totalItems} color="warning">
                <ShoppingCartOutlinedIcon />
              </Badge>
            </IconButton>
            <IconButton
              sx={{ color: 'white' }}
              onClick={() => setDrawerOpen(true)}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Mobile drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{ sx: { width: 260, bgcolor: '#A20E0E' } }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 1 }}>
          <IconButton onClick={() => setDrawerOpen(false)} sx={{ color: 'white' }}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Box sx={{ p: 2 }}>
          <Logo size="small" light />
        </Box>
        <List>
          {navLinks.map((link) => (
            <ListItem key={link.label} disablePadding>
              <ListItemButton onClick={() => handleNav(link.href)}>
                <ListItemText
                  primary={link.label}
                  primaryTypographyProps={{ color: 'white', fontWeight: 500 }}
                />
              </ListItemButton>
            </ListItem>
          ))}
          <ListItem sx={{ mt: 2, px: 2 }}>
            <Button
              fullWidth
              variant="contained"
              onClick={() => handleNav('#productos')}
              sx={{ bgcolor: '#FF751F', '&:hover': { bgcolor: '#e06518' } }}
            >
              Pedir ahora
            </Button>
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default Navbar;
