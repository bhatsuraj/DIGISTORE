import React from "react";
import { Box, Typography, Grid, Paper, Divider } from "@mui/material";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Paper
      elevation={0}
      sx={{
        background: "#111827",
        color: "#e5e7eb",
        py: 6,
        px: 4,
        textAlign: { xs: "center", md: "left" },
      }}
    >
      <Grid container spacing={4} justifyContent="center" alignItems="flex-start">
        {/* Left Section - Logo and Tagline */}
        <Grid item xs={12} md={6}>
        <Box sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}>
    <svg width="200" height="64" viewBox="0 0 250 80" xmlns="http://www.w3.org/2000/svg">
        <text x="10" y="50" font-family="Poppins, Arial, sans-serif" font-size="36" font-weight="bold" fill="#1E88E5">
            Digi
        </text>
        <text x="108" y="50" font-family="Poppins, Arial, sans-serif" font-size="36" font-weight="bold" fill="#FF6F00">
            Store
        </text>
        <rect x="200" y="25" width="35" height="35" fill="none" stroke="#1E88E5" stroke-width="2" rx="5"/>
        <line x1="210" y1="25" x2="210" y2="15" stroke="#1E88E5" stroke-width="2"/>
        <line x1="225" y1="25" x2="225" y2="15" stroke="#1E88E5" stroke-width="2"/>
        <path d="M210 15 Q217 5 225 15" fill="none" stroke="#1E88E5" stroke-width="2"/>
        <circle cx="25" cy="60" r="3" fill="#1E88E5"/>
        <circle cx="130" cy="60" r="3" fill="#FF6F00"/>
        <line x1="30" y1="60" x2="125" y2="60" stroke="#ddd" stroke-width="1"/>
    </svg>
</Box>

          <Typography variant="body1" sx={{ mt: 2, color: "#9ca3af" }}>
            Innovative solutions for your tech needs.
          </Typography>
        </Grid>

        {/* Right Section - Quick Links */}
        <Grid item xs={12} md={6} sx={{ textAlign: { xs: "center", md: "right" } }}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              color: "#f9fafb",
              mb: 1,
              textTransform: "uppercase",
              letterSpacing: "1px",
            }}
          >
            Quick Links
          </Typography>
          <Box
            sx={{
              mt: 1,
              display: "flex",
              flexDirection: "column",
              gap: 1.5,
              alignItems: { xs: "center", md: "flex-end" },
            }}
          >
            {["Home", "About", "Shop"].map((link, index) => (
              <Link
                key={index}
                to={`/${link.toLowerCase()}`}
                style={{
                  textDecoration: "none",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#f3f4f6",
                  transition: "color 0.3s ease",
                }}
                onMouseOver={(e) => (e.target.style.color = "#fbbf24")}
                onMouseOut={(e) => (e.target.style.color = "#f3f4f6")}
              >
                {link}
              </Link>
            ))}
          </Box>
        </Grid>
      </Grid>

      {/* Horizontal Divider */}
      <Divider sx={{ my: 4, backgroundColor: "#374151" }} />

      {/* Footer Bottom Text */}
      <Typography
        variant="body2"
        sx={{
          textAlign: "center",
          color: "#9ca3af",
          fontSize: "14px",
        }}
      >
        &copy; {new Date().getFullYear()} Your Company Name. All Rights Reserved.
      </Typography>
    </Paper>
  );
};

export default Footer;
