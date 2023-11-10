import React, { useState } from "react";
import SpaIcon from "@mui/icons-material/Spa";
import { Typography } from "@mui/material";
import styled from "styled-components";

const CustomH1 = () => {
  const [text, setText] = useState({
    principal: "Encuentra la Tranquilidad con",
    secondary: "Sanity Support",
  });

  // Convierte el texto en un array de letras
  const principalLetters = text.principal.split("");
  const secondaryLetters = text.secondary.split("");

  //styled-component
  const Span = styled.span`
    &:hover {
      color: #4caf50;
      text-shadow: 0 0 5px rgba(76, 175, 80, 0.5); /* Agrega un efecto de sombra */
    }
  `;
  return (
    <Typography
      variant="h2"
      sx={{
        fontFamily: "poppins",
        fontSize: "clamp(3rem, 5.5vw, 5rem)",
        fontWeight: 500,
        letterSpacing: ".3rem",
        color: "inherit",
        textDecoration: "none",
        textAlign: "center",
        width: "fit-content",
      }}
    >
      {principalLetters.map((letter, index) => (
        <Span key={index}>{letter}</Span>
      ))}
      <SpaIcon
        sx={{
          fontSize: "3.5rem",
          "&:hover": {
            transition: "0.5s",
            color: "#4CAF50",
            transform: "rotate(10deg)",
          },
        }}
      />
      {secondaryLetters.map((letter, index) => (
        <Span key={index}>{letter}</Span>
      ))}
    </Typography>
  );
};

export default CustomH1;
