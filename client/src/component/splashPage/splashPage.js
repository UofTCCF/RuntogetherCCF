import React from "react";
import { Box, Typography, useMediaQuery } from "@mui/material";
import { HEADER_TEXT, TITLE } from "../../constants";
import "./splashPage.css";

const SplashPage = () => {
    const isSmallScreen = useMediaQuery("(max-width: 600px)");

    return (
        <>
            {!isSmallScreen && (
            <img 
                src={require("../../assets/group-winter-retreat.png")} 
                alt="background" 
                style={{
                    position: "fixed", 
                    top: "0", 
                    left: "0", 
                    width: "100%", 
                    height: "80vh", 
                    zIndex: "-1",
                    objectFit: "cover",
                    objectPosition: "center",
                    minHeight: "500px",
                    }} 
            />
                )}
            <Box
                sx={{
                    position: "fixed", 
                    top: "0", 
                    left: "0", 
                    width: "100%", 
                    height: isSmallScreen ? "50vh": "80vh", 
                    zIndex: "-1",
                    backgroundColor: isSmallScreen? "secondary.main": "splash.main",
                    minHeight: "500px",
                }}
            />
            <Box className="splashPage">
              <Box className="logoTitle">
                {isSmallScreen && (
                <img
                  src={require("../../assets/logodark.png")} 
                  alt="logo" 
                  className="logo"
                />
                )}
                <Typography 
                    variant={isSmallScreen ? "h2" : "h1"}
                    color= {isSmallScreen ? "textPrimary" : "textSecondary"}
                    className="title"
                    sx={isSmallScreen ? {
                        alignSelf: "flex-start", 
                        marginTop: "auto", 
                        marginBottom: "auto",
                        fontSize: "2.5rem" } : {
                        
                        fontSize: "6rem"
                        }}
                >
                    {TITLE}
                </Typography>
              </Box>

                {!isSmallScreen && (                
                <Typography variant={isSmallScreen ? "h3" : "h2"} color="textSecondary">
                    {HEADER_TEXT}
                </Typography>
                )}
            </Box>
        </>
    )
}

export default SplashPage;