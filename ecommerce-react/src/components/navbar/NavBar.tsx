import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Box, Container } from "@mui/material";
import logo from "../../assets/images/logo.png";
import { NavCenterActions } from "./NavCenterActions";

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
            }}
          >
            <img src={logo} alt="logo" width={80} height={80} />
          </Box>
          <NavCenterActions />
          <Box
            className="d-flex flex-row gap-3 justify-content-end"
            sx={{ width: "20%" }}
          >
            <Box
              className="d-flex flex-row gap-1 rounded-3 py-1 px-2"
              sx={{
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <ShoppingCartOutlinedIcon
                fontSize="medium"
                sx={{ color: "#333333" }}
              />
              <Typography
                variant="subtitle1"
                color="#333333"
                fontSize={"0.875rem"}
                sx={{ fontWeight: "600" }}
              >
                Cart
              </Typography>
            </Box>
            <Box
              className="d-flex flex-row gap-1 rounded-3 py-1 px-2"
              sx={{
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <PermIdentityIcon fontSize="medium" sx={{ color: "#333333" }} />
              <Typography
                variant="subtitle1"
                color="#333333"
                fontSize={"0.875rem"}
                sx={{ fontWeight: "600" }}
              >
                Account
              </Typography>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
