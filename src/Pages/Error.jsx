import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Error() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        backgroundColor: "#f8f9fa",
      }}
    >
      <Box
        sx={{
          padding: "2rem",
          backgroundColor: "#fff",
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
          borderRadius: "12px",
          maxWidth: "500px",
          width: "100%",
        }}
      >
        {/* Image Section */}
        <Box
          component="img"
          src="./error.jpg" // Replace with your image URL
          alt="hello git new branch"
          sx={{
            width: "100%",
            maxHeight: "200px",
            objectFit: "contain",
            mb: 2,
          }}
        />

        <Typography
          variant="h3"
          sx={{ fontWeight: "bold", color: "#ff4c4c", mb: 2 }}
        >
          Oops!
        </Typography>
        <Typography variant="h5" sx={{ color: "#333", mb: 2 }}>
          Something went wrong.
        </Typography>
        <Typography variant="body1" sx={{ color: "#666", mb: 3 }}>
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </Typography>
        <Button
          variant="contained"
          onClick={() => navigate("/")}
          sx={{ backgroundColor: "#007bff", color: "#fff", px: 4 }}
        >
          Go to Homepage
        </Button>
      </Box>
    </Box>
  );
}
