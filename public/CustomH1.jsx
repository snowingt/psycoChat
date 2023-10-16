import React, { useState } from "react";
import styled from "styled-components";

const StyledH1 = styled.h1`
  font-family: "Space Mono", monospace;
  font-size: clamp(3rem, 10vw, 10rem);
  color: white;
  padding: 0rem clamp(1rem, 2vw, 3rem);
  border-radius: clamp(0.4rem, 0.75vw, 1rem);
  transition: background-color 400ms, color 400ms;
  cursor: pointer;
`;

const CustomH1 = () => {
  const [text, setText] = useState("HYPERPLEXED");

  const handleMouseOver = () => {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    let iteration = 0;
    const interval = setInterval(() => {
      const newText = text
        .split("")
        .map((letter, index) => {
          if (index < iteration) {
            return text[index];
          }
          return letters[Math.floor(Math.random() * 26)];
        })
        .join("");

      setText(newText);

      if (iteration >= text.length) {
        clearInterval(interval);
      }

      iteration += 1 / 3;
    }, 30);
  };

  return (
    <div>
      <StyledH1 onMouseOver={handleMouseOver}>{text}</StyledH1>
    </div>
  );
};

export default CustomH1;
