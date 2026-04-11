import { useState } from 'react';
import {
  Box, Container, Typography, Chip, TextField, Button, Stack, Snackbar, Alert,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const DEST = 'tentacionnaturaljam@gmail.com';

const initialForm = { name: '', phone: '', email: '', subject: '', message: '' };

const Contact = () => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [snackbar, setSnackbar] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Campo requerido';
    if (!form.phone.trim()) e.phone = 'Campo requerido';
    if (!form.email.trim()) e.email = 'Campo requerido';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Correo inválido';
    if (!form.subject.trim()) e.subject = 'Campo requerido';
    if (!form.message.trim()) e.message = 'Campo requerido';
    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const e2 = validate();
    if (Object.keys(e2).length) { setErrors(e2); return; }

    const body =
      `Nombre: ${form.name}%0D%0A` +
      `Teléfono: ${form.phone}%0D%0A` +
      `Correo: ${form.email}%0D%0A%0D%0A` +
      `${form.message}`;

    window.location.href =
      `mailto:${DEST}?subject=${encodeURIComponent(form.subject)}&body=${body}`;

    setSnackbar(true);
    setForm(initialForm);
  };

  const field = (name, label, type = 'text', multiline = false, rows = 1) => (
    <TextField
      fullWidth
      name={name}
      label={label}
      type={type}
      value={form[name]}
      onChange={handleChange}
      error={!!errors[name]}
      helperText={errors[name] || ' '}
      multiline={multiline}
      rows={multiline ? rows : undefined}
      variant="outlined"
      sx={{
        '& .MuiOutlinedInput-root': {
          '& fieldset': { borderColor: '#E8C5C5' },
          '&:hover fieldset': { borderColor: '#A20E0E' },
          '&.Mui-focused fieldset': { borderColor: '#A20E0E' },
        },
        '& .MuiInputLabel-root.Mui-focused': { color: '#A20E0E' },
      }}
    />
  );

  return (
    <Box
      id="contacto-form"
      sx={{ py: { xs: 8, md: 12 }, bgcolor: '#FDF6F6' }}
    >
      <Container maxWidth="sm">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Chip
            label="Escríbenos"
            sx={{ bgcolor: '#FBEAEA', color: '#A20E0E', fontWeight: 600, mb: 2, fontSize: '0.82rem' }}
          />
          <Typography
            variant="h2"
            sx={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 700,
              color: '#A20E0E',
              fontSize: { xs: '2.2rem', md: '3rem' },
              lineHeight: 1.1,
            }}
          >
            Contáctanos
          </Typography>
          <Typography
            sx={{
              fontFamily: "'Great Vibes', cursive",
              fontSize: { xs: '1.6rem', md: '2.2rem' },
              color: '#FF751F',
              mt: 0.5,
              mb: 2,
            }}
          >
            Estamos para servirte
          </Typography>
          <Typography sx={{ color: '#6B3A3A', lineHeight: 1.8, fontSize: '0.97rem' }}>
            ¿Tienes preguntas, pedidos especiales o quieres ser distribuidor?
            Cuéntanos, te respondemos a la brevedad.
          </Typography>
        </Box>

        {/* Horarios */}
        <Box
          sx={{
            bgcolor: 'white',
            border: '1px solid #FBEAEA',
            borderRadius: 4,
            p: { xs: 3, md: 4 },
            mb: 4,
            boxShadow: '0 4px 24px rgba(162,14,14,0.06)',
          }}
        >
          <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mb: 2.5 }}>
            <AccessTimeIcon sx={{ color: '#A20E0E', fontSize: '1.4rem' }} />
            <Typography
              sx={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 700,
                fontSize: '1.3rem',
                color: '#A20E0E',
                lineHeight: 1,
              }}
            >
              Horarios de atención
            </Typography>
          </Stack>

          <Stack spacing={1.2}>
            {[
              { dia: 'Lunes — Viernes',    hora: '8:00 am – 6:00 pm',  activo: true  },
              { dia: 'Sábados',            hora: '8:00 am – 12:00 pm', activo: true  },
              { dia: 'Domingos y festivos', hora: 'Sin atención',       activo: false },
            ].map(({ dia, hora, activo }) => (
              <Box
                key={dia}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  px: 2,
                  py: 1,
                  borderRadius: 2,
                  bgcolor: activo ? '#FDF6F6' : 'transparent',
                }}
              >
                <Typography sx={{ fontSize: '0.92rem', fontWeight: 600, color: '#3D1A1A', whiteSpace: 'nowrap' }}>
                  {dia}
                </Typography>
                <Box
                  sx={{
                    flex: 1,
                    mx: 2,
                    borderBottom: '2px dotted #E8C5C5',
                  }}
                />
                <Typography
                  sx={{
                    fontSize: '0.9rem',
                    fontWeight: 700,
                    color: activo ? '#A20E0E' : '#B07070',
                    fontStyle: activo ? 'normal' : 'italic',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {hora}
                </Typography>
              </Box>
            ))}
          </Stack>
        </Box>

        <Box
          component="form"
          onSubmit={handleSubmit}
          noValidate
          sx={{
            bgcolor: 'white',
            borderRadius: 4,
            p: { xs: 3, md: 5 },
            boxShadow: '0 4px 24px rgba(162,14,14,0.08)',
            border: '1px solid #FBEAEA',
          }}
        >
          <Stack spacing={0.5}>
            {field('name', 'Nombre y apellido')}
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
              <Box sx={{ flex: 1 }}>{field('phone', 'Teléfono', 'tel')}</Box>
              <Box sx={{ flex: 1 }}>{field('email', 'Correo electrónico', 'email')}</Box>
            </Stack>
            {field('subject', 'Asunto')}
            {field('message', 'Descripción', 'text', true, 5)}
          </Stack>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            size="large"
            endIcon={<SendIcon />}
            sx={{
              mt: 1,
              bgcolor: '#A20E0E',
              fontSize: '1rem',
              py: 1.5,
              borderRadius: 2,
              '&:hover': { bgcolor: '#7A0A0A' },
            }}
          >
            Enviar mensaje
          </Button>
        </Box>
      </Container>

      <Snackbar
        open={snackbar}
        autoHideDuration={4000}
        onClose={() => setSnackbar(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          severity="success"
          onClose={() => setSnackbar(false)}
          sx={{ bgcolor: '#A20E0E', color: 'white', '& .MuiAlert-icon': { color: 'white' } }}
        >
          ¡Mensaje preparado! Revisa tu cliente de correo para enviarlo.
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Contact;
