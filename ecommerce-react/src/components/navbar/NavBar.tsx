import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Box, Button, Container, Divider } from "@mui/material";
import logo from "../../assets/images/logo.png";
import { NavCenterActions } from "./NavCenterActions";
import BorderAllRoundedIcon from "@mui/icons-material/BorderAllRounded";

export function NavBar() {
  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "white", boxShadow: 1, width: "100%" }}
      className="shadow-sm"
    >
      <Container maxWidth="lg">
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row",
            alignItems: "center",
            justifyItems: "center",
          }}
          className="p-0"
        >
          <Box
            sx={{
              display: "flex",
              width: "20%",
              justifyContent: "start",
              flexDirection: "row",
              alignItems: "center",
            }}
            className="gap-1"
          >
            <img src={logo} alt="logo" width={40} height={40} />
          </Box>
          <NavCenterActions />
          <Box
            className="d-flex flex-row gap-3 justify-content-end"
            sx={{ width: "20%" }}
          >
            <Button
              size="medium"
              sx={{
                color: "#333333",
                fontWeight: "bolder",
                textTransform: "none",
                "&:hover": {
                  "& .MuiSvgIcon-root, & .MuiTypography-root": {
                    color: "#E81E1E",
                    transition: "color 0.3s ease",
                  },
                },
              }}
              startIcon={
                <ShoppingCartOutlinedIcon
                  fontSize="medium"
                  sx={{ color: "#333333" }}
                />
              }
            >
              <Typography
                color="#333333"
                fontSize={"0.875rem"}
                sx={{ fontWeight: "600" }}
              >
                Cart
              </Typography>
            </Button>
            <Button
              size="medium"
              sx={{
                color: "#333333",
                fontWeight: "bolder",
                textTransform: "none",
                "&:hover": {
                  "& .MuiSvgIcon-root, & .MuiTypography-root": {
                    color: "#E81E1E",
                    transition: "color 0.3s ease",
                  },
                },
              }}
              startIcon={
                <PermIdentityIcon fontSize="medium" sx={{ color: "#333333" }} />
              }
            >
              <Typography
                color="#333333"
                fontSize={"0.875rem"}
                sx={{ fontWeight: "600" }}
              >
                Account
              </Typography>
            </Button>
          </Box>
        </Toolbar>
        <div className="d-flex flex-row gap-3 justify-content-start align-items-center">
          <Button
            size="medium"
            sx={{
              color: "#333333",
              fontWeight: "bolder",
              textTransform: "none",
            }}
            startIcon={<BorderAllRoundedIcon fontSize="small" />}
          >
            Categories
          </Button>
          <Divider
            orientation="vertical"
            variant="middle"
            sx={{ borderColor: "#333333", width: "3px", height: "1.25rem" }}
          />
          <div className="d-flex flex-row gap-4 justify-content-between align-items-center w-100">
            <Typography
              color="#333333"
              fontSize={"0.8125rem"}
              sx={{ fontWeight: "600" }}
            >
              Today's Deal
            </Typography>
            <Typography
              color="#333333"
              fontSize={"0.8125rem"}
              sx={{ fontWeight: "600" }}
            >
              Best Sellers
            </Typography>
            <Typography
              color="#333333"
              fontSize={"0.8125rem"}
              sx={{ fontWeight: "600" }}
            >
              New Arrivals
            </Typography>
            <Typography
              color="#333333"
              fontSize={"0.8125rem"}
              sx={{ fontWeight: "600" }}
            >
              Seasonal Favorites
            </Typography>
            <Typography
              color="#333333"
              fontSize={"0.8125rem"}
              sx={{ fontWeight: "600" }}
            >
              Back to School
            </Typography>
            <Typography
              color="#333333"
              fontSize={"0.8125rem"}
              sx={{ fontWeight: "600" }}
            >
              Gift Ideas
            </Typography>
            <Typography
              color="#333333"
              fontSize={"0.8125rem"}
              sx={{ fontWeight: "600" }}
            >
              Clearances
            </Typography>
            <Typography
              color="#333333"
              fontSize={"0.8125rem"}
              sx={{ fontWeight: "600" }}
            >
              Exclusive Releases
            </Typography>
          </div>
        </div>
      </Container>
    </AppBar>
  );
}
