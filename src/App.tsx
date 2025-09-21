import React from "react";
import { CssBaseline, Box, useMediaQuery, useTheme } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  useLocation,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Content from "./components/Content";
import OrdersListContent from "./components/OrderPage/OrdersListContent";
import SidebarLeft from "./components/SidebarLeft";
import SidebarRight from "./components/SidebarRight";

import {
  useThemeContext,
  CustomThemeProvider,
} from "./components/context/ThemeContext";

const Layout = () => {
  const { mode } = useThemeContext();

  const theme = createTheme({
    palette: { mode },
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536,
      },
    },
  });

  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const location = useLocation();
  const isOrdersPage = location.pathname === "/orders";
  const muiTheme = useTheme();

  const primaryLight =
    muiTheme.palette.mode === "dark" ? muiTheme.palette.grey[900] : "#F7F9FB";
  const borderColor =
    muiTheme.palette.mode === "dark" ? muiTheme.palette.grey[800] : "#E0E0E0";
  const mainContentBg = muiTheme.palette.background.default;

  return (
    <>
      <CssBaseline />
      <Box sx={{ display: "flex", flexDirection: "column", height: "100vh" }}>
        <Box
          sx={{
            display: "flex",
            height: "68px",
            borderBottom: `1px solid ${borderColor}`,
            padding: "20px 28px",
            boxSizing: "border-box",
            bgcolor: mainContentBg,
          }}
        >
          <Box sx={{ width: isDesktop ? "212px" : 0 }}></Box>
          <Box sx={{ flexGrow: 1, display: "flex", alignItems: "center" }}>
            <Navbar />
          </Box>
        </Box>

        <Box sx={{ display: "flex", flexGrow: 1, bgcolor: mainContentBg }}>
          {isDesktop && (
            <Box
              sx={{
                width: "212px",
                height: "100%",
                borderRight: `1px solid ${borderColor}`,
                padding: "20px 16px",
                boxSizing: "border-box",
                bgcolor: primaryLight,
              }}
            >
              <SidebarLeft />
            </Box>
          )}

          <Box sx={{ flexGrow: 1, p: 3, bgcolor: mainContentBg }}>
            <Outlet />
          </Box>

          {isDesktop && !isOrdersPage && (
            <Box
              sx={{
                width: "280px",
                height: "100%",
                borderLeft: `1px solid ${borderColor}`,
                padding: "20px",
                boxSizing: "border-box",
                bgcolor: primaryLight,
              }}
            >
              <SidebarRight />
            </Box>
          )}
        </Box>
      </Box>
    </>
  );
};

function App() {
  return (
    <BrowserRouter>
      <CustomThemeProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Content />} />
            <Route path="orders" element={<OrdersListContent />} />
          </Route>
        </Routes>
      </CustomThemeProvider>
    </BrowserRouter>
  );
}

export default App;
