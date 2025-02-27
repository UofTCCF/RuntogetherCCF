import React from "react";
import { Box, Typography, useMediaQuery } from "@mui/material";
import { HEADER_TEXT, TITLE } from "../../constants";
import "./splashPage.css";

const SplashPage = () => {
    const isSmallScreen = useMediaQuery("(max-width: 350px)");
    return (
        <>
            <img 
                src={require("../../assets/WR2025.png")} 
                alt="background" 
                style={{
                    position: "fixed", 
                    top: "0", 
                    left: "0", 
                    width: "100%", 
                    height: "100%", 
                    zIndex: "-1",
                    objectFit: "cover",
                    objectPosition: "center",
                    minHeight: "500px",
                    }} 
            />
            <Box
                sx={{
                    position: "fixed", 
                    top: "0", 
                    left: "0", 
                    width: "100%", 
                    height: "80vh", 
                    zIndex: "-1",
                    backgroundColor: "splash.main",
                    minHeight: "500px",
                }}
            />
            <Box className="splashPage">
                
                <Typography 
                    variant={isSmallScreen ? "h2" : "h1"}
                    color="textSecondary"
                    className="title"
                >
                    {TITLE}
                </Typography>                
                <Typography variant={isSmallScreen ? "h3" : "h2"} color="textSecondary">
                    {HEADER_TEXT}
                </Typography>
            </Box>
        </>
    )
}

export default SplashPage;