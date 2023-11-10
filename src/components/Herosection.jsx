import { Button, Container, Grid, Typography } from "@mui/material";
import Skeleton from "@mui/material/Skeleton";
import Box from "@mui/material/Box";
import React from "react";
import CustomH1 from "./atoms/CustomH1";
import { useNavigate } from "react-router-dom";

export const Herosection = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/chat");
  };
  return (
    <>
      <Container name="home">
        <Grid
          container
          spacing={2}
          sx={{
            alignItems: "center",
            height: "100vh",

            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            gap: "20px",
            padding: "15px",
          }}
        >
          <CustomH1 />

          <Typography
            variant="h5"
            sx={{
              fontFamily: "roboto",
              fontSize: "clamp(1.5rem, 2vw, 1.5rem)",
              fontWeight: 500,

              color: "inherit",
              textDecoration: "none",
              textAlign: "center",
              width: "fit-content",
            }}
          >
            Tu Compañera de Chat para el Bienestar Mental
          </Typography>
          <Button onClick={handleClick} container variant="contained">
            Ir al Chat
          </Button>
        </Grid>
      </Container>
    </>
  );
};
