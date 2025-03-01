import { Box, Typography, keyframes } from "@mui/material";
import React from "react";

// Animation for UPWARD scrolling (Right Side)
const scrollUp = keyframes`
  0% { transform: translateY(0); }
  100% { transform: translateY(-100%); }
`;

// Animation for DOWNWARD scrolling (Left Side)
const scrollDown = keyframes`
  0% { transform: translateY(-100%); }
  100% { transform: translateY(0); }
`;

// Slide-in animation for "About"
const slideInLeft = keyframes`
  from { opacity: 0; transform: translateX(-50px); }
  to { opacity: 1; transform: translateX(0); }
`;

// Bounce animation for "Us"
const singleBounce = keyframes`
  0% { transform: translateY(0); }
  30% { transform: translateY(-8px); }
  60% { transform: translateY(0); }
`;

// Fade-in content animation
const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

export default function AboutContent() {
  const movingImages = [
    "./watch.jpg",
    "./heads.jpg",
    "./buds.jpg",
    "./heads.jpg",
    "./watch.jpg",
    "./buds.jpg",
    "./heads.jpg",
    "./watch.jpg",
    "./buds.jpg",
    "./heads.jpg",
    "./watch.jpg",
    "./buds.jpg",
    "./heads.jpg",
    "./watch.jpg",
    "./buds.jpg",
    "./heads.jpg",
    "./buds.jpg"
  
   
  ];

  // Duplicate the array for smooth infinite scrolling
  const movingImageContent = [...movingImages, ...movingImages];

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #ffffff, #f0f0f0)",
        p: 4,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Left Side - Moving Downwards (Gadget Images) */}
      <Box
        sx={{
          position: "absolute",
          left: 10,
          top: 0,
          width: "100px",
          height: "100%",
          overflow: "hidden",
          zIndex: 0,
          pointerEvents: "none",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            animation: `${scrollDown} 15s linear infinite`,
          }}
        >
          {movingImageContent.map((src, index) => (
            <Box
              key={index}
              sx={{
                height: "100px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "5px",
              }}
            >
              <img
                src={src}
                alt={`Gadget ${index}`}
                style={{
                  width: "100px",
                  height: "100px",
                  objectFit: "contain",
                  borderRadius: "8px",
                }}
              />
            </Box>
          ))}
        </Box>
      </Box>

      {/* Right Side - Moving Upwards (Gadget Images) */}
      <Box
        sx={{
          position: "absolute",
          right: 10,
          top: 0,
          width: "100px",
          height: "100%",
          overflow: "hidden",
          zIndex: 0,
          pointerEvents: "none",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            animation: `${scrollUp} 15s linear infinite`,
          }}
        >
          {movingImageContent.map((src, index) => (
            <Box
              key={index}
              sx={{
                height: "100px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "5px",
              }}
            >
              <img
                src={src}
                alt={`Gadget ${index}`}
                style={{
                  width: "100px",
                  height: "100px",
                  objectFit: "contain",
                  borderRadius: "8px",
                }}
              />
            </Box>
          ))}
        </Box>
      </Box>

      {/* Main Content Area */}
      <Box
  sx={{
    width: "100%",
    maxWidth: "1200px",
    backgroundColor: "#fff",
    borderRadius: "20px",
    boxShadow: "0 0 15px rgba(255, 165, 0, 0.6), 0 0 30px rgba(255, 223, 0, 0.6)",
    overflow: "hidden",
    display: "flex",
    flexDirection: { xs: "column", sm: "row" },
    p: 2,
    position: "relative",
    zIndex: 1,
    animation: "breathing 5s infinite ease-in-out",  // Animation applied here
    "@keyframes breathing": {
      "0%": {
        boxShadow: "0 0 10px rgba(255, 165, 0, 0.3), 0 0 20px rgba(255, 223, 0, 0.3)"
      },
      "50%": {
        boxShadow: "0 0 30px rgba(255, 165, 0, 0.8), 0 0 60px rgba(255, 223, 0, 0.8)"  // More glow at the peak
      },
      "100%": {
        boxShadow: "0 0 10px rgba(255, 165, 0, 0.3), 0 0 20px rgba(255, 223, 0, 0.3)"  // Back to original
      }
    }
  }}
>

        {/* Left Static Placeholder Image or Section */}
        <Box
  sx={{
    flex: "0 0 30%",
    height: "400px",
    borderRadius: "15px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    perspective: "800px",  // Optional for future 3D rotation if needed
    overflow: "hidden",
    backgroundColor: "#ffffff",
  // Optional background
  }}
>
  <Box
    component="img"
    src="./head.jpg"  // Make sure the path is correct
    alt="Smartwatch"
    sx={{
      maxWidth: "90%",            // Makes sure it fits horizontally
      maxHeight: "90%",           // Makes sure it fits vertically
      objectFit: "contain",       // Ensures no distortion
      borderRadius: "15px",       // Optional - keeps rounded corners
      display: "block",           // Removes any default spacing
    }}
  />
</Box>







        {/* Right Side - Text Section */}
        <Box
  sx={{
    flex: "1",
    background: "linear-gradient(135deg, #e1bee7, #f8bbd0)",
    borderRadius: "15px",
    marginLeft: { sm: "10px" },
    p: 3,
    minHeight: "300px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    gap: 2,
    animation: "shiftGradient 6s ease-in-out infinite alternate",
    "@keyframes shiftGradient": {
      "0%": {
        background: "linear-gradient(135deg, #e1bee7, #f8bbd0)"
      },
      "100%": {
        background: "linear-gradient(135deg, #f8bbd0, #e1bee7)"
      }
    }
  }}
>


          <Typography
            variant="h4"
            component="div"
            sx={{
              fontWeight: "bold",
              color: "#222",
              display: "flex",
              alignItems: "center",
              gap: "6px",
            }}
          >
            <Box
              component="span"
              sx={{
                animation: `${slideInLeft} 0.8s ease-out forwards`,
                opacity: 0,
              }}
            >
              About
            </Box>
            <Box
              component="span"
              sx={{
                animation: `${slideInLeft} 0.8s ease-out 0.1s forwards, ${singleBounce} 0.6s ease-out 0.8s`,
                opacity: 0,
              }}
            >
              Us
            </Box>
          </Typography>

          <Box
            sx={{
              animation: `${fadeInUp} 0.8s ease-out 0.9s forwards`,
              opacity: 0,
            }}
          >
            <Typography
  variant="body1"
  sx={{ color: "#222", fontSize: "1.125rem", lineHeight: 1.7 }}
>
  Welcome to <strong>DIGISTORE</strong>, your ultimate destination for digital products and innovative solutions.
</Typography>


            <Typography
  variant="body2"
  sx={{ color: "#444", opacity: 0.9, fontSize: "1.125rem", mt: 1 }}
>
  At Digi Store, we believe technology has the power to transform lives. Whether you're looking for the latest gadgets, smart home solutions, or cutting-edge electronics, we’ve got you covered. Our goal is to bring you high-quality products at competitive prices, paired with exceptional customer service. From cutting-edge gadgets to essential accessories, we bring the best technology to your doorstep with quality and affordability.
</Typography>

          </Box>
        </Box>
      </Box>
    </Box>
  );
}
