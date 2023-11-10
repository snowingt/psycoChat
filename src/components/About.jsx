import {
  Avatar,
  Box,
  Container,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";

export const About = () => {
  return (
    <Container
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
        }}
      >
        Tu Guía hacia la Serenidad en Dos Pasos
      </Typography>
      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Box
            display="flex"
            sx={{
              alignItems: "center",
              mb: 1, // Añade espaciado en la parte inferior (margin-bottom)
            }}
          >
            <Avatar
              sx={{
                m: 1,
                bgcolor: "#ede7f6",
                "&:hover": {
                  bgcolor: "#4CAF50",
                  textShadow: "0 0 5px rgba(76, 175, 80, 0.5)",
                  transition: "1.5s",
                },
              }}
            >
              1
            </Avatar>
            <Divider
              sx={{
                width: "70%",
                height: "1px",
                "&:hover": {
                  color: "#4CAF50",
                  textShadow: "0 0 5px rgba(76, 175, 80, 0.5)",
                },
                ml: 1, // Añade espaciado en el margen izquierdo
              }}
            />
          </Box>
          <Typography
            sx={{
              fontFamily: "poppins",
              fontSize: "clamp(2rem, 2vw, 1.5rem)",
              fontWeight: 500,

              color: "inherit",
              textDecoration: "none",
              textAlign: "start",
              width: "fit-content",
              m: 2, // Añade espaciado en todos los márgenes
            }}
          >
            Conecta
          </Typography>
          <Typography
            sx={{
              fontFamily: "roboto",
              fontSize: "clamp(1.5rem, 1.5vw, 1rem)",
              fontWeight: 300,
              color: "inherit",
              textDecoration: "none",
              textAlign: "justify",
              width: "fit-content",
              m: 2, // Añade espaciado en todos los márgenes
            }}
          >
            Inicia con tu cuenta de Google
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Box
            display="flex"
            sx={{
              alignItems: "center",
              mb: 1, // Añade espaciado en la parte inferior (margin-bottom)
            }}
          >
            <Avatar
              sx={{
                m: 1,
                "&:hover": {
                  bgcolor: "#4CAF50",
                  textShadow: "0 0 5px rgba(76, 175, 80, 0.5)",
                  transition: "1.5s",
                },
              }}
            >
              2
            </Avatar>
            <Divider
              sx={{
                width: "70%",
                height: "1px",
                "&:hover": {
                  color: "#4CAF50",
                  textShadow: "0 0 5px rgba(76, 175, 80, 0.5)",
                },

                ml: 1, // Añade espaciado en el margen izquierdo
              }}
            />
          </Box>
          <Typography
            sx={{
              fontFamily: "poppins",
              fontSize: "clamp(2rem, 2vw, 1.5rem)",
              fontWeight: 500,
              color: "inherit",
              textDecoration: "none",
              textAlign: "center",
              width: "fit-content",
              m: 2, // Añade espaciado en todos los márgenes
            }}
          >
            Chat
          </Typography>
          <Typography
            sx={{
              fontFamily: "roboto",
              fontSize: "clamp(1.5rem, 1.5vw, 1rem)",
              fontWeight: 300,
              color: "inherit",
              textDecoration: "none",
              textAlign: "justify",
              width: "fit-content",
              m: 2, // Añade espaciado en todos los márgenes
            }}
          >
            Chatea con Ana y Encuentra la Serenidad
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};
