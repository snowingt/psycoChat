import React from "react";
import { Box, Typography, Link } from "@mui/material";
function Footer() {
  return (
    <Box mt={4} py={2}>
      <Typography variant="body1" align="center">
        Hecho con amor{" "}
        <span role="img" aria-label="Corazón">
          ❤️
        </span>{" "}
        by SnowingTorres
      </Typography>
      <Typography variant="body2" align="center">
        <Link
          href="https://snowingtorres.site"
          color="inherit"
          underline="always"
          target="_blank"
        >
          snowingtorres.site
        </Link>
      </Typography>
    </Box>
  );
}

export default Footer;
