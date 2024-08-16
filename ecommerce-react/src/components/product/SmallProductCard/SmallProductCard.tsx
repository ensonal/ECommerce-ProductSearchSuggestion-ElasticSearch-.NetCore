import { Box, Skeleton, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import AddShoppingCartRoundedIcon from "@mui/icons-material/AddShoppingCartRounded";
import "./SmallProductCard.css";
import { Product } from "../../../modules/products/models/api-model/product";
import { useState } from "react";

type SmallProductCardProps = {
  product: Product;
  loading: boolean;
};

export function SmallProductCard({ product, loading }: SmallProductCardProps) {
  const [isImageRendered, setIsImageRendered] = useState(false);
  const maxRating = 5;

  const getStarIcons = () => {
    const stars = [];
    for (let i = 1; i <= maxRating; i++) {
      if (product?.rating! >= i) {
        stars.push(
          <StarIcon key={i} sx={{ color: "#FFD700", fontSize: "1rem" }} />
        );
      } else if (product?.rating! >= i - 0.5) {
        stars.push(
          <StarHalfIcon key={i} sx={{ color: "#FFD700", fontSize: "1rem" }} />
        );
      } else {
        stars.push(
          <StarBorderIcon key={i} sx={{ color: "#FFD700", fontSize: "1rem" }} />
        );
      }
    }
    return stars;
  };

  const handleImageRendered = () => {
    setIsImageRendered(true);
  };

  return (
    <Box
      border={1}
      borderColor={"#E8E8E8"}
      padding={2}
      width={200}
      height={260}
      sx={{ backgroundColor: "white" }}
      className="d-flex flex-column gap-2 rounded-3"
    >
      {(loading || !isImageRendered) && (
        <Skeleton variant="rounded" width={"100%"} height={120} />
      )}
      {!loading && (
        <Box
          component="img"
          src={product.imageUrl}
          alt="Product"
          sx={{
            width: "100%",
            height: "120px",
            objectFit: "cover",
            border: "1px solid #E8E8E8",
            display: isImageRendered ? "block" : "none",
          }}
          onLoad={handleImageRendered}
          className="rounded-2"
        />
      )}
      <Box className="d-flex flex-column gap-1">
        {loading ? (
          <Skeleton variant="text" sx={{ fontSize: "0.875rem" }} />
        ) : (
          <Box
            sx={{
              fontSize: "0.875rem",
              fontWeight: 500,
              color: "#303030",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            {product.name}
          </Box>
        )}
        {loading ? (
          <Skeleton
            variant="text"
            sx={{ fontSize: "0.875rem" }}
            width={"75%"}
          />
        ) : (
          <Box className="d-flex align-items-center gap-1">
            {getStarIcons()}
            <Typography
              sx={{
                fontSize: "0.875rem",
                fontWeight: 500,
                color: "#303030",
                marginLeft: "4px",
              }}
            >
              {product?.rating}
            </Typography>
          </Box>
        )}
        {loading ? (
          <Skeleton
            variant="text"
            sx={{ fontSize: "0.875rem" }}
            width={"15%"}
          />
        ) : (
          <Box
            sx={{
              fontSize: "0.875rem",
              fontWeight: 600,
              color: "#303030",
            }}
          >
            ${product.price}
          </Box>
        )}
      </Box>
      <Box className="d-flex flex-row gap-2 justify-content-end">
        <Box className="icon-container" sx={{ cursor: "pointer" }}>
          {loading ? (
            <Skeleton variant="circular" width={16} height={16} />
          ) : (
            <FavoriteBorderRoundedIcon fontSize="small" color="action" />
          )}
          <Typography className="icon-text">Add to Favorites</Typography>
        </Box>
        <Box className="icon-container" sx={{ cursor: "pointer" }}>
          {loading ? (
            <Skeleton variant="circular" width={16} height={16} />
          ) : (
            <AddShoppingCartRoundedIcon fontSize="small" color="action" />
          )}
          <Typography className="icon-text">Add to Cart</Typography>
        </Box>
      </Box>
    </Box>
  );
}
