import { ThemeProvider, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { CCF_THEME } from "../actions/theme";
import SplashPage from "../component/splashPage/splashPage";
import ModuleWrapper from "../component/moduleWrapper/moduleWrapper";
import GenericButton from "../component/genericButton/genericButton";

// Error Page
const NoRoute = () => {
  return (
    <ThemeProvider theme={CCF_THEME}>
        <SplashPage />
        <ModuleWrapper backgroundColor="primary.main">
            <Typography
            variant="h3"
            color="textPrimary"
            paddingBottom="0.5rem"
            fontWeight="600"
            >
            404 Not Found.
            </Typography>
            <Typography color="textPrimary">
            The page you are looking for does not exist.
            </Typography>
            <Link to="/" style={{ textDecoration: "none" }}>
            <GenericButton color="action">Return to Home</GenericButton>
            </Link>
        </ModuleWrapper>
    </ThemeProvider>
  );
};

export default NoRoute;
