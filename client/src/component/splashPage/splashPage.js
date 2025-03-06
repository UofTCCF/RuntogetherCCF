import React from "react";
import { Box, Typography, useMediaQuery } from "@mui/material";
import { HEADER_TEXT, TITLE } from "../../constants";
import "./splashPage.css";
import ModuleWrapper from "../moduleWrapper/moduleWrapper";

const SplashPage = () => {
    const isSmallScreen = useMediaQuery("(max-width: 600px)");

    return (
        <>
            {!isSmallScreen ? (
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
              <Box>
                <Typography 
                    variant={"h1"}
                    color= {"textSecondary"}
                    className="title"
                    sx={{ fontSize: "6rem" }}
                >
                    {TITLE}
                </Typography>
              </Box>               
                <Typography variant={ "h2"} color="textSecondary">
                    {HEADER_TEXT}
                </Typography>
            </Box>
            </>
            ):(
            <ModuleWrapper sx={{backgroundColor: "secondary.main"}}>
            <Box>
              <Box className="logoTitle">
                <img
                  src={require("../../assets/logodark.png")} 
                  alt="logo" 
                  className="logo"
                />
                <Typography 
                    variant={"h2"}
                    color= {"textPrimary"}
                    className="title"
                    sx={{
                        alignSelf: "flex-start", 
                        marginTop: "auto", 
                        marginBottom: "auto",
                        fontSize: "2.5rem" }}
                >
                    {TITLE}
                </Typography>
              </Box>
            </Box>
            </ModuleWrapper>
            )}
        </>
    )
}

export default SplashPage;