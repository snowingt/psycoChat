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
import SpaIcon from "@mui/icons-material/Spa";
import { Link, animateScroll as scroll } from "react-scroll";
import { useNavigate, useLocation } from "react-router-dom";

const pages = ["Home", "About", "Chat"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const location = useLocation();
  const navigate = useNavigate();
  const handleNavigate = (to) => {
    navigate(to);
  };
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
      position="fixed"
      color="transparent"
      sx={{
        backgroundColor: "transparent",
        bgcolor: "white",
        boxShadow: "blur(100px)",
        backdropFilter: "blur(100px)",
        WebkitBackdropFilter: "blur(6px)",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <SpaIcon
            sx={{
              display: { xs: "none", md: "flex" },
              mr: 1,
              "&:hover": {
                rotate: 360,
                transition: "0.5s",
              },
            }}
            color="primary"
          />
          <Typography
            variant="h6"
            noWrap
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
              cursor: "pointer",
            }}
            onClick={() => handleNavigate(`/`)}
          >
            Sanity Support
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
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
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "1rem",
                }}
              >
                <span
                  sx={{
                    mr: 2,
                    display: { xs: "none", md: "flex" },
                    fontFamily: "roboto",
                    fontWeight: 300,
                    letterSpacing: ".3rem",
                    color: "inherit",
                    textDecoration: "none",
                    "&:hover": {
                      color: "primary.main",
                    },
                  }}
                  onClick={() => handleNavigate(`/`)}
                >
                  Home
                </span>
                <span
                  sx={{
                    mr: 2,
                    display: { xs: "none", md: "flex" },
                    fontFamily: "roboto",
                    fontWeight: 300,
                    letterSpacing: ".3rem",
                    color: "inherit",
                    textDecoration: "none",
                    "&:hover": {
                      color: "primary.main",
                    },
                  }}
                  onClick={() => handleNavigate(`/chat`)}
                >
                  Chat
                </span>
              </MenuItem>
            </Menu>
          </Box>
          <SpaIcon
            sx={{
              display: { xs: "flex", md: "none" },
              mr: 1,
              "&:hover": {
                rotate: 360,
                transition: "0.5s",
              },
            }}
          />
          <Typography
            variant="h5"
            noWrap
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",

              "&:hover": {
                cursor: "pointer",
              },
            }}
            onClick={() => handleNavigate(`/`)}
          >
            Sanity Support
          </Typography>
          {location.pathname !== "/chat" && location.pathname !== "/login" && (
            <Box
              sx={{
                flexGrow: 1,
                display: {
                  xs: "none",
                  md: "flex",
                  gap: "1rem",
                  marginLeft: "2rem",
                },
              }}
            >
              <Link
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                style={{ textDecoration: "none" }}
              >
                <Typography
                  variant="h6"
                  noWrap
                  sx={{
                    mr: 2,
                    display: { xs: "none", md: "flex" },
                    fontFamily: "roboto",
                    fontWeight: 300,
                    letterSpacing: ".3rem",
                    color: "inherit",
                    textDecoration: "none",
                    "&:hover": {
                      color: "primary.main",
                    },
                  }}
                  onClick={() => handleNavigate(`/`)}
                  s
                >
                  Home
                </Typography>
              </Link>
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                style={{ textDecoration: "none" }}
              >
                <Typography
                  variant="h6"
                  noWrap
                  sx={{
                    mr: 2,
                    display: { xs: "none", md: "flex" },
                    fontFamily: "roboto",
                    fontWeight: 300,
                    letterSpacing: ".3rem",
                    color: "inherit",
                    textDecoration: "none",
                    "&:hover": {
                      color: "primary.main",
                      cursor: "pointer",
                    },
                  }}
                >
                  About
                </Typography>
              </Link>
              <Link
                activeClass="active"
                to="testimonials"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                style={{ textDecoration: "none" }}
              >
                <Typography
                  variant="h6"
                  noWrap
                  sx={{
                    mr: 2,
                    display: { xs: "none", md: "flex" },
                    fontFamily: "roboto",
                    fontWeight: 300,
                    letterSpacing: ".3rem",
                    color: "inherit",
                    textDecoration: "none",
                    "&:hover": {
                      color: "primary.main",
                      cursor: "pointer",
                    },
                  }}
                >
                  Testimonios
                </Typography>
              </Link>
              <Link
                activeClass="active"
                to="testimonials"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                style={{ textDecoration: "none" }}
              >
                <Typography
                  variant="h6"
                  noWrap
                  component="a"
                  href="#app-bar-with-responsive-menu"
                  sx={{
                    mr: 2,
                    display: { xs: "none", md: "flex" },
                    fontFamily: "roboto",
                    fontWeight: 300,
                    letterSpacing: ".3rem",
                    color: "inherit",
                    textDecoration: "none",
                    "&:hover": {
                      color: "primary.main",
                      cursor: "pointer",
                    },
                  }}
                  onClick={() => handleNavigate(`/chat`)}
                >
                  Chat
                </Typography>
              </Link>
            </Box>
          )}
          {/* 
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box> */}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
