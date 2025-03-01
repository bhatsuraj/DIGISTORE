import React from "react";
import { Box, Typography, Button, Grid, IconButton } from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import pic from "../Assets/Images/single-image1.png"; // Make sure this image exists

const Banner = () => {
  return (
    <Box
      sx={{
        bgcolor: "#f3f4f6",
        overflow: "hidden",
        mt: 5,
        px: 4,
        py: 8,
        backgroundImage: `url(${pic})`,
        backgroundPosition: "right center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
      }}
    >
      <Grid container alignItems="center" spacing={4}>
        {/* Left Content */}
        <Grid item xs={12} md={6}>
          <Box sx={{ textAlign: { xs: "center", md: "left" }, px: { md: 4 } }}>
            <Typography
              variant="h4"
              sx={{
                fontWeight: "bold",
                color: "#1f2937",
                mb: 1,
                letterSpacing: "1px",
              }}
            >
              Welcome to Our Store
            </Typography>

            <Typography
              variant="h2"
              sx={{
                textTransform: "uppercase",
                fontWeight: "bold",
                color: "#111827",
                pb: 3,
                lineHeight: 1.2,
              }}
            >
              Discover Innovation
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: "#4b5563",
                fontSize: "18px",
                maxWidth: "500px",
                mb: 4,
                lineHeight: 1.7,
              }}
            >
              Explore the latest technology trends and products that make your life smarter and more efficient.
            </Typography>
{/* 
            <Button
              variant="contained"
              color="primary"
              sx={{
                textTransform: "uppercase",
                fontWeight: "bold",
                letterSpacing: "1px",
                px: 4,
                py: 1,
              }}
            >
              Shop Now
            </Button> */}

            {/* Social Media Section */}
            <Box
              sx={{
                mt: 4,
                display: "flex",
                alignItems: "center",
                gap: 2,
                flexWrap: "wrap",
                justifyContent: { xs: "center", md: "flex-start" },
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: "bold", color: "#1f2937" }}>
                Find us on:
              </Typography>

              <IconButton
                component="a"
                href="https://www.facebook.com/"
                target="_blank"
                sx={{ color: "#1877F2" }}
              >
                <FacebookIcon fontSize="large" />
              </IconButton>

              <IconButton
                component="a"
                href="https://www.instagram.com/"
                target="_blank"
                sx={{ color: "#E4405F" }}
              >
                <InstagramIcon fontSize="large" />
              </IconButton>

              <IconButton
                component="a"
                href="https://twitter.com/"
                target="_blank"
                sx={{ color: "#1DA1F2" }}
              >
                <TwitterIcon fontSize="large" />
              </IconButton>

              <IconButton
                component="a"
                href="https://www.linkedin.com/"
                target="_blank"
                sx={{ color: "#0A66C2" }}
              >
                <LinkedInIcon fontSize="large" />
              </IconButton>
            </Box>
          </Box>
        </Grid>

        {/* Right Content (Image will come from background) */}
        <Grid item xs={12} md={6}></Grid>
      </Grid>
    </Box>
  );
};

export default Banner;
