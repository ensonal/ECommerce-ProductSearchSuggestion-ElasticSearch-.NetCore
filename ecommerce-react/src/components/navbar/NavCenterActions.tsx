import { useState } from "react";
import Input from "@mui/joy/Input";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { Box, Typography } from "@mui/material";

export function NavCenterActions() {
  const [searchActive, setSearchActive] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchClick = () => {
    setSearchActive(true);
  };

  const handleCloseSearch = () => {
    setSearchActive(false);
  };

  return (
    <Box
      sx={{
        display: "flex",
        gap: 3,
        alignItems: "center",
        justifyContent: "center",
        width: "30%",
      }}
    >
      {!searchActive && (
        <>
          <Typography
            variant="subtitle1"
            color="#303030"
            sx={{
              fontWeight: "600",
            }}
          >
            Categories
          </Typography>
          <Typography
            variant="subtitle1"
            color="#303030"
            sx={{
              fontWeight: "600",
            }}
          >
            Deals
          </Typography>
          <Typography
            variant="subtitle1"
            color="#303030"
            sx={{
              fontWeight: "600",
            }}
          >
            What's New
          </Typography>
          <Typography
            variant="subtitle1"
            color="#303030"
            sx={{
              fontWeight: "600",
            }}
          >
            Delivery
          </Typography>
          <SearchRoundedIcon
            color="action"
            fontSize="small"
            onClick={handleSearchClick}
          />
        </>
      )}
      {searchActive && (
        <div className="d-flex flex-row gap-1 justify-content-center align-items-center w-100">
          <Input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            sx={{
              flex: 1,
              width: searchActive ? "100%" : "0",
              "--Input-focusedThickness": "0px",
            }}
            placeholder="Search everything at ShopSphere"
            className="rounded-4"
            color="neutral"
            variant="outlined"
            endDecorator={
              <div className="d-flex flex-row gap-1">
                <CloseOutlinedIcon
                  color="action"
                  fontSize="small"
                  onClick={() => setSearchQuery("")}
                  sx={{
                    cursor: "pointer",
                  }}
                />
                <SearchRoundedIcon
                  fontSize="small"
                  sx={{
                    cursor: "pointer",
                  }}
                />
              </div>
            }
          />
          <ArrowRightIcon
            color="action"
            fontSize="small"
            onClick={handleCloseSearch}
            sx={{
              cursor: "pointer",
            }}
          />
        </div>
      )}
    </Box>
  );
}
