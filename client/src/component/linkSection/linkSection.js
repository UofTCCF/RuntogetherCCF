import React from "react";
import { Box, Link, Typography } from "@mui/material";
import LinkIcon from '@mui/icons-material/Link';
import { LINKS } from "../../constants";
import ModuleWrapper from "../moduleWrapper/moduleWrapper";

export const GeneralLink = ({ label, link, size }) => {
  return (
    <Link 
        href={link} 
        color="textPrimary" 
        underline="hover"
        target="_blank"
    >
        <Box display="flex" alignItems="center" gap="0.2rem">
            <LinkIcon />
            <Typography variant={size}>
                {label}
            </Typography>
        </Box>
    </Link>
  );
};

const LinkSection = () => {
  return (
    <ModuleWrapper backgroundColor="primary.main">
        <Typography variant="h2" color="textPrimary" textAlign="center">
            Resources
        </Typography>
        <Box 
            display="flex" 
            justifyContent="center" 
            flexWrap="wrap"
            gap="1rem"
        >
      {LINKS.map((entry) => (
        <GeneralLink label={entry.label} link={entry.link} key={entry.label} size="h6" />
      ))}
        </Box>
    </ModuleWrapper>
  );
};

export default LinkSection;
