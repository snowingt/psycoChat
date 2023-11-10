import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import Skeleton from "@mui/material/Skeleton";
import anaPsyco from "../assets/Absolute_Reality_v16_mujer_joven_psicologa_feliz_con_fondo_bl_1.jpg";
import { Link, animateScroll as scroll } from "react-scroll";
export const HowItWorks = () => {
  return (
    <>
      <Container name="about">
        <Grid
          container
          spacing={2}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "5rem",
          }}
        >
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              alt="The house from the offer."
              src={anaPsyco}
              sx={{
                width: "300px",
                height: "350px",
                borderRadius: "3%",
                imageRendering: "pixelated",
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography
              variant="h3"
              sx={{
                fontFamily: "poppins",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
                textAlign: "justify",
                fontSize: "2rem",
              }}
            >
              En Sanity Support, entendemos que tu salud mental es una
              prioridad.
            </Typography>
            <Typography
              variant="h5"
              sx={{
                fontFamily: "roboto",
                fontWeight: 400,

                color: "inherit",
                textDecoration: "none",
                textAlign: "justify",
                fontSize: "1.4rem",
              }}
            >
              Nuestra plataforma ofrece una forma única y accesible de buscar
              orientación profesional. Conoce a Ana, tu psicóloga virtual, lista
              para guiarte en tu viaje hacia el bienestar emocional.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
