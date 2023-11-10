import React, { useState } from "react";
import {
  TextField,
  Button,
  Box,
  Typography,
  Container,
  Paper,
} from "@mui/material";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const subscribeToNewsletter = () => {
    // Agrega la lógica de suscripción aquí, como enviar el correo electrónico a tu backend.
    // Por ejemplo: fetch('/api/subscribe', { method: 'POST', body: JSON.stringify({ email }) });
    console.log(`Suscrito con éxito: ${email}`);
    setEmail("");
  };

  return (
    <Box py={4}>
      <Container maxWidth="sm">
        <Paper elevation={3} style={{ padding: "24px" }}>
          <Typography variant="h5" gutterBottom align="center">
            Suscríbete a nuestro Boletín de Noticias
          </Typography>
          <TextField
            label="Correo Electrónico"
            variant="outlined"
            fullWidth
            value={email}
            onChange={handleEmailChange}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={subscribeToNewsletter}
            style={{
              marginTop: "16px",
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            Suscribirse
          </Button>
        </Paper>
      </Container>
    </Box>
  );
};

export default Newsletter;
