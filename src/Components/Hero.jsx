import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";

// Sample gadgets (replace with actual image paths from your /public folder)
const gadgets = [
  { src: "./heads.jpg" },
  { src: "./buds.jpg" },
  { src: "./heads.jpg" },
  { src: "./buds.jpg" },
  { src: "./heads.jpg" },
];

// Component for sliding gadgets from left or right
function SlidingGadget({ src, alt, delay, side }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const enterTimer = setTimeout(() => setVisible(true), delay);
    const exitTimer = setTimeout(() => setVisible(false), delay + 2500); // stays for 2.5 sec

    return () => {
      clearTimeout(enterTimer);
      clearTimeout(exitTimer);
    };
  }, [delay]);

  const isLeft = side === "left";

  return (
    <Box
      component="img"
      src={src}
      alt={alt}
      sx={{
        position: "absolute",
        top: `${Math.random() * 60 + 20}%`, // Random vertical position (20% to 80%)
        left: isLeft ? (visible ? "60px" : "-100px") : undefined,
        right: !isLeft ? (visible ? "60px" : "-100px") : undefined,
        width: "70px",
        height: "70px",
        transition: "all 1.2s ease-in-out",
        opacity: visible ? 1 : 0,
        transform: visible ? "rotate(0deg)" : (isLeft ? "rotate(-90deg)" : "rotate(90deg)"),
        zIndex: 5,
        filter: "drop-shadow(0 4px 8px rgba(7, 7, 7, 0.94))",
      }}
    />
  );
}

export default function Hero() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "90vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, rgb(243, 207, 63), rgb(245, 191, 229))",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Center Text Section */}
      <Box
        sx={{
          width: "90%",
          maxWidth: "900px",
          height: "70vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          textAlign: "center",
          background: "rgba(255, 255, 255, 0.4)",
          backdropFilter: "blur(15px)",
          borderRadius: "16px",
          boxShadow: "0 12px 30px rgba(0,0,0,0.15)",
          padding: "40px",
          zIndex: 10,
        }}
      >
        <Typography
          sx={{
            fontWeight: "900",
            fontSize: { xs: "36px", sm: "64px" },
            textTransform: "uppercase",
            color: "black",
            letterSpacing: "3px",
            animation: "fadeInUp 1.5s ease-out",
            "@keyframes fadeInUp": {
              "0%": { opacity: 0, transform: "translateY(50px)" },
              "100%": { opacity: 1, transform: "translateY(0)" },
            },
            textShadow: "1px 1px 3px rgba(255, 255, 255, 0.7)",
          }}
          gutterBottom
        >
          Welcome to DIGISTORE
        </Typography>

        <Typography
          sx={{
            fontWeight: "700",
            fontSize: "22px",
            color: "black",
            letterSpacing: "1px",
            textShadow: "0px 0px 2px rgba(255, 255, 255, 0.6)",
          }}
          gutterBottom
        >
          Explore Technology, Experience Quality
        </Typography>

        <Typography
          sx={{
            width: "80%",
            fontWeight: "500",
            color: "black",
            fontSize: "16px",
            lineHeight: "1.7",
            opacity: 0.9,
            marginTop: "12px",
            textShadow: "0px 0px 2px rgba(255, 255, 255, 0.7)",
          }}
        >
          Experience the fusion of innovation and design with our cutting-edge technology solutions. From AI to IoT, we redefine the future.
        </Typography>
      </Box>

      {/* Gadgets sliding from left and right sides */}
      {gadgets.map((gadget, index) => (
        <SlidingGadget
          key={index}
          src={gadget.src}
          alt={`Gadget ${index}`}
          delay={index * 3000}
          side={index % 2 === 0 ? "left" : "right"} // Alternate left/right
        />
      ))}
    </Box>
  );
}
