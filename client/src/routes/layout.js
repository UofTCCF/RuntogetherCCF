import React from "react";
import { ThemeProvider } from "@mui/material";
import { Box } from "@mui/system";

import { CCF_THEME } from "../actions/theme";
import { Outlet } from "react-router-dom";
import { GoogleOAuthProvider } from '@react-oauth/google';
import SplashPage from "../component/splashPage/splashPage";
import ENV from "../config";

// The layout of the page
const Layout = () => {
  return (
    <GoogleOAuthProvider clientId={ENV.google_client_id}>
        <ThemeProvider theme={CCF_THEME}>
            <Box >
                <SplashPage />
                <Outlet />
            </Box>
        </ThemeProvider>
    </GoogleOAuthProvider>
  );
};

export default Layout;
