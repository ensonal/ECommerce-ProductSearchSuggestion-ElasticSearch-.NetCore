import { useState } from "react";
import { Box, IconButton, Typography } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { SmallProductCard } from "../../../components/product/SmallProductCard";

type ProductCarouselProps = {
  isFlashDeal: boolean;
};

export function ProductCarousel({ isFlashDeal }: ProductCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleProducts = 5;

  const nextSlide = () => {
    if (currentIndex < 10 - visibleProducts) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <Box position="relative">
      <Box className="d-flex flex-row justify-content-between align-items-center mb-3">
        <Typography
          gutterBottom
          fontSize={24}
          fontWeight={600}
          color={"#505050"}
          margin={0}
          children={isFlashDeal ? "Flash Deals" : "Best Sellers"}
        />
        <Typography
          gutterBottom
          fontSize={16}
          fontWeight={600}
          color={"#F91F35"}
          margin={0}
        >
          See all
        </Typography>
      </Box>
      <Box display="flex" alignItems="center" position="relative">
        {currentIndex > 0 && (
          <IconButton
            onClick={prevSlide}
            sx={{
              position: "absolute",
              left: 0,
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 1,
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
              backgroundColor: "rgba(255, 255, 255, 0.5)",
              "&:hover": { backgroundColor: "rgba(220, 220, 220, 0.9)" },
            }}
          >
            <ArrowBackIosIcon />
          </IconButton>
        )}
        <Box sx={{ display: "flex", overflow: "hidden", width: "100%" }}>
          <Box
            sx={{
              display: "flex",
              transition: "transform 0.3s ease-in-out",
              transform: `translateX(-${
                currentIndex * (100 / visibleProducts)
              }%)`,
            }}
          >
            <Box className="d-flex flex-row gap-4">
              {Array.from({ length: 10 }, (_, index) => (
                <Box key={index}>
                  <SmallProductCard isFlashDeal={isFlashDeal} />
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
        <IconButton
          onClick={nextSlide}
          disabled={currentIndex >= 10 - visibleProducts}
          sx={{
            position: "absolute",
            right: 0,
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 1,
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
            backgroundColor: "rgba(255, 255, 255, 0.5)",
            "&:hover": { backgroundColor: "rgba(220, 220, 220, 0.9)" },
          }}
        >
          <ArrowForwardIosIcon />
        </IconButton>
      </Box>
    </Box>
  );
}
