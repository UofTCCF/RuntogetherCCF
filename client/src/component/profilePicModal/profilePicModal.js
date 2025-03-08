import React from "react";
import { Box, Typography, ToggleButton } from "@mui/material";
import GenericButton from "../genericButton/genericButton";
import { PIC_OPTS } from "../../constants";

const ProfilePicModal = ({
  handleBack,
  handleNext,
  profilePic,
  setProfilePic,
  picChoice,
  setPicChoice,
}) => {
  return (
    <>
      {/* Profile Picture */}
      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent="space-between"
        marginBottom="1rem"
      >
        <Box width="100%">
          <Typography
            variant="h3"
            color="textPrimary"
            fontWeight="600"
            marginBottom="0.5rem"
          >
            Profile Picture
          </Typography>
            {Object.values(PIC_OPTS).map((val) => (
            <ToggleButton
              key={val}
              value={val}
              selected={ picChoice === val }
              color="action"
              onClick={() => setPicChoice(val)}
              sx={{
                borderRadius: "0",
                margin: "0.2rem",
                textTransform: "none",
                width: "45%",
                marginBottom: "1rem",
              }}
            >
              <Typography variant="h3" fontWeight="600" key={val}>
                {val}
              </Typography>
            </ToggleButton>
          ))}

          {picChoice === PIC_OPTS.CUSTOM_PICTURE && (
            <GenericButton color="action" onClick={() => {
              const input = document.createElement("input");
              input.type = "file";
              input.accept = "image/*";
              input.onchange = (event) => {
                const file = event.target.files[0];
                if (file) {
                  const reader = new FileReader();
                  reader.readAsArrayBuffer(file);
                  reader.onload = (e) => {
                    const blob = new Blob([e.target.result], { type: file.type });
                    setProfilePic({ blob, name: file.name }); // Now contains the image as a BLOB and the file name
                  };
                }
              };
              input.click();
            }}>
              <Typography variant="h4">Upload picture</Typography>
          </GenericButton>
          )}

          {profilePic?.name && picChoice === PIC_OPTS.CUSTOM_PICTURE && (
            <>
              <GenericButton color="error" onClick={() => setProfilePic(null)}>
                <Typography variant="h4">Clear selection</Typography>
              </GenericButton>

              <Typography variant="body1" color="textPrimary" margin="0.5rem">
                Selected file: {profilePic.name}
              </Typography>
            </>
          )}
        </Box>
      </Box>
      
      <Box
        alignSelf="flex-end"
        position="absolute"
        bottom="0"
        marginBottom="1.5rem"
      >
        <GenericButton onClick={handleBack} color="info">
          <Typography variant="h4">Back</Typography>
        </GenericButton>
        <GenericButton color="action" onClick={handleNext}>
          <Typography variant="h4">Next</Typography>
        </GenericButton>
      </Box>
    </>
  );
};

export default ProfilePicModal;
