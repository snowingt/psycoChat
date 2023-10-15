import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import Skeleton from "@mui/material/Skeleton";
import ActionAreaCard from "./atoms/ActionAreaCard";

export const HowItWorks = () => {
  return (
    <>
      <Container>
        <Grid
          container
          spacing={2}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              alt="The house from the offer."
              src={"https://source.unsplash.com/random?wallpapers"}
              sx={{ width: "350px", height: "350px", borderRadius: "3%" }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography
              variant="h3"
              sx={{
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Take care of your performance every day.
            </Typography>
            <Typography variant="h5">
              Build a well-presented brand that everyone will love. Take care to
              develop resources continually and integrity them with previous
              projects.
            </Typography>
          </Grid>
        </Grid>
        <Grid
          container
          spacing={2}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <Grid item xs={12} md={4}>
            <ActionAreaCard />
          </Grid>
          <Grid item xs={12} md={4}>
            <ActionAreaCard />
          </Grid>
          <Grid item xs={12} md={4}>
            <ActionAreaCard />
          </Grid>
          <Grid item xs={12} md={4}>
            <ActionAreaCard />
          </Grid>
          <Grid item xs={12} md={4}>
            <ActionAreaCard />
          </Grid>
          <Grid item xs={12} md={4}>
            <ActionAreaCard />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
