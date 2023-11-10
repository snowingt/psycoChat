import React from "react";
import { Box, Paper, Typography, Grid, Avatar } from "@mui/material";
import { Link, animateScroll as scroll } from "react-scroll";

function TestimonialsSection() {
  const testimonialsData = [
    {
      name: "",
      content:
        "Estoy impresionada con la ayuda que he recibido de Ana en Sanity Support. Me ha brindado una perspectiva fresca y útil sobre mis problemas emocionales.",
      avatar: "URL de la imagen de María",
    },
    {
      name: "",
      content:
        "Recomendaría Ana a cualquiera que necesite apoyo emocional. Sus respuestas son muy comprensivas y valiosas.",
      avatar: "URL de la imagen de Luis",
    },
    {
      name: "",
      content:
        "¡Ana ha sido mi apoyo emocional confiable! Su comprensión y orientación han marcado la diferencia en mi vida.",
      avatar: "URL de la imagen de Ana",
    },
  ];

  return (
    <Box
      name="testimonials"
      p={2}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: "3rem",
        my: 2, // Añade espaciado en la parte superior e inferior (margin-top, margin-bottom)
      }}
    >
      <Typography
        sx={{
          fontFamily: "poppins",
          fontSize: "clamp(2rem, 2vw, 2rem)",
          fontWeight: 500,
          letterSpacing: ".3rem",
          color: "inherit",
          textDecoration: "none",
          textAlign: "center",
          width: "fit-content",
          marginBottom: "1rem",
        }}
      >
        Testimonios
      </Typography>
      <Grid container spacing={3}>
        {testimonialsData.map((testimonial, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Paper
              elevation={3}
              sx={{
                height: "100%",
                "&:hover": {
                  boxShadow: "0 0 5px rgba(76, 175, 80, 0.5)",
                  transition: "0.5s",
                },
              }}
            >
              <Box p={2}>
                <Avatar src={testimonial.avatar} alt={testimonial.name} />
                <Typography variant="body1" style={{ paddingTop: 16 }}>
                  {testimonial.content}
                </Typography>
                <Typography variant="h6" align="right" color="textSecondary">
                  {testimonial.name}
                </Typography>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default TestimonialsSection;
