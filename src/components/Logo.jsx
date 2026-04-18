import { Box } from '@mui/material';
import logoImg from '../assets/Logo.png';

const sizes = {
  small:  { xs: 113, md: 81 },
  medium: { xs: 144, md: 162 },
  large:  { xs: 234, sm: 288, md: 342 },
};

const Logo = ({ size = 'medium' }) => (
  <Box
    sx={{
      width: sizes[size] || sizes.medium,
      height: sizes[size] || sizes.medium,
      borderRadius: '100%',
      overflow: 'hidden',
      flexShrink: 0,
      mx: { xs: 'auto', md: 0 },
    }}
  >
    <Box
      component="img"
      src={logoImg}
      alt="Tentación Natural"
      sx={{
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        display: 'block',
      }}
    />
  </Box>
);


export default Logo;
