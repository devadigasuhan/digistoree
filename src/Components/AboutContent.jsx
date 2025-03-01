import { Box, Grid2, Typography } from "@mui/material";
import React from "react";
import about from '../Assets/Images/about-1.jpg'

export default function AboutContent() {
  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Grid2
        container
        // spacing={2}
        sx={{ backgroundColor: "#acab753b", borderRadius: "20px" }}
      >
        <Grid2 size={{ xs: 12, sm: 6 }}>
          <img
            src={about}
            alt="picture"
            style={{ width: "100%", borderRadius: "20px" }}
          />
        </Grid2>
        <Grid2
          size={{ xs: 12, sm: 6 }}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              p: 3,
              textAlign: "justify",
            }}
          >
            <Typography
              gutterBottom
              sx={{ fontWeight: "900", fontSize: "40px" }}
            >
              About <span style={{ color: "#5a0c4a" }}>Us</span>
            </Typography>
            <Typography
              variant="subtitle2"
              gutterBottom
              sx={{ fontWeight: "900" }}
            >
              subtitle of website
            </Typography>
            <Typography
              variant="body2"
              gutterBottom
              sx={{ textAlign: "justify" }}
            >
              Found everything I was looking for, and even some things I wasn't. That’s the magic of a shopping cart 
            </Typography>
            <Typography
              variant="body1"
              gutterBottom
              sx={{ textAlign: "justify" }}
            >
              Filling my cart with essentials: love, laughter, and a whole lot of goodies I probably don’t need but definitely want 
            </Typography>
          </Box>
        </Grid2>
      </Grid2>
    </Box>
  );
}