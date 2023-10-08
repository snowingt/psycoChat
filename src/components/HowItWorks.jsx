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
              sx={{
                bgcolor: "#f5f4f4",
                p: 8,
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Skeleton
                sx={{ bgcolor: "grey.900" }}
                variant="rectangular"
                width={210}
                height={118}
              />
            </Box>
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
