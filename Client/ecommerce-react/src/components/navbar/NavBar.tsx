import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Box } from "@mui/material";
import logo from "../../assets/images/logo.png";
import { NavCenterActions } from "./NavCenterActions";

export function NavBar() {
  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "white", boxShadow: 1, width: "100%" }}
      className="shadow-sm px-5"
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img src={logo} alt="logo" width={80} height={80} />
          <Typography variant="h5" color="#303030" sx={{ fontWeight: "600" }}>
            ShopSphere
          </Typography>
        </Box>
        <NavCenterActions />
        <Box className="d-flex flex-row gap-2">
          <Box
            className="d-flex flex-row gap-1 rounded-3 p-1 px-2"
            sx={{
              borderColor: "#303030",
              borderWidth: 1,
              borderStyle: "solid",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ShoppingCartOutlinedIcon
              fontSize="medium"
              sx={{ color: "#303030" }}
            />
            <Typography
              variant="subtitle1"
              color="#303030"
              sx={{ fontWeight: "600" }}
            >
              Cart
            </Typography>
          </Box>
          <Box
            className="d-flex flex-row gap-1 rounded-3 p-1 px-2"
            sx={{
              borderColor: "#303030",
              borderWidth: 1,
              borderStyle: "solid",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <PermIdentityIcon fontSize="medium" sx={{ color: "#303030" }} />
            <Typography
              variant="subtitle1"
              color="#303030"
              sx={{ fontWeight: "600" }}
            >
              Account
            </Typography>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
