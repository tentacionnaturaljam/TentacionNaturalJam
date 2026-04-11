import { useState } from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from './theme';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import Ingredients from './components/Ingredients';
import About from './components/About';
import Team from './components/Team';
import Location from './components/Location';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Cart from './components/Cart';

function App() {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <CartProvider>
        <Navbar onCartOpen={() => setCartOpen(true)} />
        <Hero />
        <Products />
        <Ingredients />
        <About />
        <Team />
        <Location />
        <Contact />
        <Footer />
        <Cart open={cartOpen} onClose={() => setCartOpen(false)} />
      </CartProvider>
    </ThemeProvider>
  );
}

export default App;
