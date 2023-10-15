import { Container, Grid, Typography } from "@mui/material";
import Skeleton from "@mui/material/Skeleton";
import Box from "@mui/material/Box";
import React from "react";
import CustomH1 from "./atoms/CustomH1";
import { useState } from "react";

export const Herosection = () => {
  // Definir el estado inicial del texto del h1.
  const [text, setText] = useState("EFECTO HACK");

  // Función que se ejecutará cuando el usuario pase el ratón por encima del h1.
  const handleMouseOver = () => {
    // Definir un conjunto de letras que se utilizarán para el efecto de cambio.
    const letters = "1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    // Inicializar una variable para llevar un seguimiento de la iteración.
    let iteration = 0;

    // Crear un intervalo que se ejecutará cada 30 milisegundos.
    const interval = setInterval(() => {
      // Crear un nuevo texto aplicando el efecto de cambio.
      const newText = text
        .split("") // Divide el texto en un array de caracteres.
        .map((letter, index) => {
          if (index < iteration) {
            return text[index]; // Conservar caracteres previos sin cambios.
          }
          return letters[Math.floor(Math.random() * 26)]; // Cambiar a letras aleatorias.
        })
        .join(""); // Unir el array de caracteres en un nuevo texto.

      // Actualizar el estado del texto con el nuevo valor.
      setText(newText);

      // Comprobar si se ha completado el efecto en todo el texto.
      if (iteration >= text.length) {
        clearInterval(interval); // Detener el intervalo.
      }

      // Incrementar la iteración en 1/3 para que sea más suave y progresivo.
      iteration += 1 / 3;
    }, 30);
  };
  return (
    <>
      <Container>
        <Grid
          container
          spacing={2}
          sx={{
            alignItems: "center",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontFamily: "poppins",
              fontSize: "clamp(2rem, 9vw, 9rem)",
              fontWeight: 600,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
              textAlign: "center",
              width: "fit-content",
              "&:hover": {
                color: "black",
                backgroundColor: "white",
                width: "fit-content",
              },
            }}
            onMouseOver={handleMouseOver}
          >
            {text}
          </Typography>

          <Typography variant="h5">What if your dev experience was</Typography>
        </Grid>
      </Container>
    </>
  );
};
