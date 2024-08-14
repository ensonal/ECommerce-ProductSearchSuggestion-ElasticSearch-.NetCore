import { useState, useEffect } from "react";
import { Box, Button } from "@mui/material";

import bannerOne from "../../../assets/images/banner/bannerOne.png";
import bannerTwo from "../../../assets/images/banner/bannerTwo.png";
import bannerThree from "../../../assets/images/banner/bannerThree.png";

const bannerImages = [bannerOne, bannerTwo, bannerThree];

export function BannerCarousel() {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const handleSelectImage = (index: number) => {
    setActiveImageIndex(index);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveImageIndex((prevIndex) =>
        prevIndex === bannerImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      position="relative"
    >
      <Box
        component="img"
        src={bannerImages[activeImageIndex]}
        alt={`Image ${activeImageIndex + 1}`}
        sx={{
          width: "100%",
          maxWidth: "1280px",
          height: "auto",
          maxHeight: "375px",
          objectFit: "cover",
        }}
      />

      <Box
        position="absolute"
        bottom={16}
        display="flex"
        gap={2}
        flexDirection={"row"}
      >
        {bannerImages.map((image, index) => (
          <Button
            key={index}
            size="small"
            onClick={() => handleSelectImage(index)}
            sx={{
              backgroundColor:
                index === activeImageIndex
                  ? "rgba(0, 0, 0, 0.5)"
                  : "rgba(235, 235, 235, 0.7)",
              color: "white",
              boxShadow: "0 1px 5px rgba(0, 0, 0, 0.4)",
              backdropFilter: "blur(5px)",
              "&:hover": {
                backgroundColor: "rgba(0, 0, 0, 0.7)",
              },
            }}
          />
        ))}
      </Box>
    </Box>
  );
}
