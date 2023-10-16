import React, { useState } from "react";

import { Typography } from "@mui/material";

const CustomH1 = () => {
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
  );
};

export default CustomH1;
