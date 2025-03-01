import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { Link } from "react-router-dom";
const pages = [
  { title: "Home", path: "/" },
  { title: "About", path: "/about" },
  { title: "Shop", path: "/shop" },
];

function NavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="static"
      elevation={1}
      sx={{ backgroundColor: "white", p: 2 }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
        <Box sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}>
    <svg width="200" height="64" viewBox="0 0 250 80" xmlns="http://www.w3.org/2000/svg">
        <text x="10" y="50" font-family="Poppins, Arial, sans-serif" font-size="36" font-weight="bold" fill="#1E88E5">
            Digi
        </text>
        <text x="108" y="50" font-family="Poppins, Arial, sans-serif" font-size="36" font-weight="bold" fill="#FF6F00">
            Store
        </text>
        <rect x="200" y="25" width="35" height="35" fill="none" stroke="#1E88E5" stroke-width="2" rx="5"/>
        <line x1="210" y1="25" x2="210" y2="15" stroke="#1E88E5" stroke-width="2"/>
        <line x1="225" y1="25" x2="225" y2="15" stroke="#1E88E5" stroke-width="2"/>
        <path d="M210 15 Q217 5 225 15" fill="none" stroke="#1E88E5" stroke-width="2"/>
        <circle cx="25" cy="60" r="3" fill="#1E88E5"/>
        <circle cx="130" cy="60" r="3" fill="#FF6F00"/>
        <line x1="30" y1="60" x2="125" y2="60" stroke="#ddd" stroke-width="1"/>
    </svg>
</Box>

          <Box sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}>
            <img
              style={{ width: "200px", color: "black" }}
              src={""}
              alt="logo"
            />
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              justifyContent: "flex-end",
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{ color: "black" }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {pages.map((page, index) => (
                <MenuItem
                  component={Link}
                  to={page.path}
                  key={index}
                  onClick={handleCloseNavMenu}
                >
                  <Typography sx={{ textAlign: "center" }}>
                    {page.title}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "flex-end",
              gap: 3,
            }}
          >
            {pages.map((page, index) => (
              <Button
                component={Link}
                to={page.path}
                key={index}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: "#353543",
                  display: "block",
                  fontWeight: "600",
                  fontSize: "16px",
                }}
              >
                {page.title}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;
