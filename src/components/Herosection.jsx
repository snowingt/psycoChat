import { Container, Grid, Typography } from "@mui/material";
import Skeleton from "@mui/material/Skeleton";
import Box from "@mui/material/Box";
import React from "react";
import CustomH1 from "./atoms/CustomH1";

export const Herosection = () => {
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
          <CustomH1 />

          <Typography variant="h5">What if your dev experience was</Typography>
        </Grid>
      </Container>
    </>
  );
};
