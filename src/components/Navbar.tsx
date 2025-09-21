import React from "react";
import { AppBar, Toolbar, Typography, SvgIcon } from "@mui/material";
import { Box, Breadcrumbs, Link, IconButton, useTheme } from "@mui/material";
import { TextField, InputAdornment, Badge } from "@mui/material";

import { Link as RouterLink } from "react-router-dom";

import ToggleIconLeft from "../assets/icons/ToggleMenuLeft.svg";
import ToggleIconRight from "../assets/icons/ToggleMenuright.svg";
import Star from "../assets/icons/Star.svg";
import refresh from "../assets/icons/refresh.svg";
import notification from "../assets/icons/notification.svg";
import search from "../assets/icons/Searchicon.svg";
import ThemeIconLight from "../assets/icons/themeicon.svg";

import NotificationDark from "../assets/icons/Dark-Navabr/notificationIcon.svg";
import RefreshIconDark from "../assets/icons/Dark-Navabr/RefreshIcon.svg";
import RightSidebarDark from "../assets/icons/Dark-Navabr/RightSidebar.svg";
import ToggleLeftDark from "../assets/icons/Dark-Navabr/ToggleIconLeftdark.svg";
import StarIconDark from "../assets/icons/Dark-Navabr/SatrDarkicon.svg";
import ToggleThemeDark from "../assets/icons/Dark-Navabr/togglethemeDark.svg";

import { useThemeContext } from "../components/context/ThemeContext";

const Navbar = () => {
  const { toggleTheme } = useThemeContext();
  const theme = useTheme();

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: theme.palette.background.paper,
        boxShadow: "none",
        borderBottom: "1px solid #e0e0e0",
        height: "68px",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          maxWidth: "948px",
          width: "100%",
          px: 3.5,
          py: 2.5,
        }}
      >
        <Box display="flex" alignItems="center" gap={2}>
          <IconButton color="inherit">
            <img
              src={
                theme.palette.mode === "dark" ? ToggleLeftDark : ToggleIconLeft
              }
              alt="toggle left"
            />
          </IconButton>
          <IconButton color="inherit">
            <img
              src={theme.palette.mode === "dark" ? StarIconDark : Star}
              alt="star"
            />
          </IconButton>
          <Breadcrumbs aria-label="breadcrumb">
            <Link
              underline="hover"
              color="inherit"
              component={RouterLink}
              to="/"
            >
              Dashboard
            </Link>
            <Link
              underline="hover"
              color="inherit"
              component={RouterLink}
              to="/orders"
            >
              Orders
            </Link>
          </Breadcrumbs>
        </Box>

        <Box display="flex" alignItems="center" gap={2}>
          <TextField
            variant="outlined"
            size="small"
            placeholder="Search..."
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Typography variant="caption" color="text.secondary">
                    <img src={search} alt="search" />
                  </Typography>
                </InputAdornment>
              ),
            }}
          />

          <IconButton onClick={toggleTheme} color="inherit">
            <img
              src={
                theme.palette.mode === "dark" ? ToggleThemeDark : ThemeIconLight
              }
              alt="theme toggle"
            />
          </IconButton>

          <IconButton color="inherit">
            <img
              src={theme.palette.mode === "dark" ? RefreshIconDark : refresh}
              alt="refresh"
            />
          </IconButton>

          <IconButton color="inherit">
            <Badge badgeContent={4} color="error">
              <img
                src={
                  theme.palette.mode === "dark"
                    ? NotificationDark
                    : notification
                }
                alt="notification"
              />
            </Badge>
          </IconButton>

          <IconButton color="inherit">
            <img
              src={
                theme.palette.mode === "dark"
                  ? RightSidebarDark
                  : ToggleIconRight
              }
              alt="toggle right"
            />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
