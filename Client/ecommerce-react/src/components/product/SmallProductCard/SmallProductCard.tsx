import { Box, Typography } from "@mui/material";
import productImage from "../../../assets/images/temp-product/product.png";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import AddShoppingCartRoundedIcon from "@mui/icons-material/AddShoppingCartRounded";
import "./SmallProductCard.css";

type SmallProductCardProps = {
  isFlashDeal?: boolean;
};

export function SmallProductCard({
  isFlashDeal = false,
}: SmallProductCardProps) {
  const rating = 4.3;
  const maxRating = 5;

  const getStarIcons = () => {
    const stars = [];
    for (let i = 1; i <= maxRating; i++) {
      if (rating >= i) {
        stars.push(
          <StarIcon key={i} sx={{ color: "#FFD700", fontSize: "1rem" }} />
        );
      } else if (rating >= i - 0.5) {
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
      <Box
        component="img"
        src={productImage}
        alt="Product"
        sx={{
          width: "100%",
          height: "120px",
          objectFit: "cover",
          border: "1px solid #E8E8E8",
        }}
        className="rounded-2"
      />
      <Box className="d-flex flex-column gap-1">
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
          Product Name
        </Box>
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
            {rating}
          </Typography>
        </Box>
        <Box
          sx={{
            fontSize: "0.875rem",
            fontWeight: isFlashDeal ? 600 : 500,
            color: isFlashDeal ? "#FF5733" : "#505050",
            display: "flex",
            alignItems: "center",
            gap: "4px",
          }}
        >
          {isFlashDeal ? (
            <>
              <span>Now $170</span>
              <Typography
                sx={{
                  textDecoration: "line-through",
                  color: "#505050",
                  fontSize: "0.875rem",
                  fontWeight: 500,
                }}
              >
                $200
              </Typography>
            </>
          ) : (
            "$200"
          )}
        </Box>
      </Box>
      <Box className="d-flex flex-row gap-2 justify-content-end">
        <Box className="icon-container" sx={{ cursor: "pointer" }}>
          <FavoriteBorderRoundedIcon fontSize="small" color="action" />
          <Typography className="icon-text">Add to Favorites</Typography>
        </Box>
        <Box className="icon-container" sx={{ cursor: "pointer" }}>
          <Typography className="icon-text">Add to Cart</Typography>
          <AddShoppingCartRoundedIcon fontSize="small" color="action" />
        </Box>
      </Box>
    </Box>
  );
}
