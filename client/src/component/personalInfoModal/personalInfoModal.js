import React from "react";
import { Box, Typography, TextField } from "@mui/material";
import GenericButton from "../genericButton/genericButton";

const PersonalInfoModal = ({
  onClose,
  handleNext,
  yearOfStudy,
  programName,
  churchName,
  churchYear,
  ccfYear,
  followingChristYear,
  setYearOfStudy,
  setProgramName,
  setChurchName,
  setChurchYear,
  setCcfYear,
  setFollowingChristYear,
}) => {
  return (
    <>
      <Box display="flex" flexWrap="wrap" justifyContent="space-between">
        <Box width="350px">
          <Typography
            variant="h3"
            color="textPrimary"
            fontWeight="600"
            marginBottom="0.5rem"
          >
            Program Name
          </Typography>
          <TextField
            variant="outlined"
            color="secondary"
            sx={{
              marginBottom: "0.8rem",
              "& .MuiInputBase-input": {
                overflow: "hidden",
                textOverflow: "ellipsis",
              },
            }}
            size="small"
            label="Program Name"
            fullWidth
            value={programName}
            onChange={(event) => setProgramName(event.target.value)}
          />
        </Box>
        <Box>
          <Typography
            variant="h3"
            color="textPrimary"
            fontWeight="600"
            marginBottom="0.5rem"
            width="140px"
          >
            Year
          </Typography>
          <TextField
            variant="outlined"
            color="secondary"
            sx={{ width: "140px", marginBottom: "1rem" }}
            size="small"
            label="Year"
            type="number"
            inputProps={{min: 0, max: 50, inputMode: 'numeric', pattern: '[0-9]'}}
            value={yearOfStudy}
            onChange={(event) => {
                var val = event.target.value;
                if (val > 50) {
                    val = 50;
                } else if (val < 0) {
                    val = 0;
                }
                setYearOfStudy(val);
            }}
        />
        </Box>
      </Box>
      <Box display="flex" flexWrap="wrap" justifyContent="space-between">
        <Box width="350px">
          <Typography
            variant="h3"
            color="textPrimary"
            fontWeight="600"
            marginBottom="0.5rem"
          >
            Church Name
          </Typography>
          <TextField
            variant="outlined"
            color="secondary"
            sx={{
              marginBottom: "1rem",
              "& .MuiInputBase-input": {
                overflow: "hidden",
                textOverflow: "ellipsis",
              },
            }}
            size="small"
            label="Church Name"
            fullWidth
            value={churchName}
            onChange={(event) => setChurchName(event.target.value)}
          />
        </Box>
        <Box>
          <Typography
            variant="h3"
            color="textPrimary"
            fontWeight="600"
            marginBottom="0.5rem"
            width="140px"
          >
            Years
          </Typography>
          <TextField
            variant="outlined"
            color="secondary"
            sx={{ width: "140px", marginBottom: "1rem" }}
            size="small"
            label="Years"
            type="number"
            inputProps={{min: 0, max: 100, inputMode: 'numeric', pattern: '[0-9]'}}
            value={churchYear}
            onChange={(event) => {
                var val = event.target.value;
                if (val > 100) {
                    val = 100;
                } else if (val < 0) {
                    val = 0;
                }
                setChurchYear(val);
            }}
        />
        </Box>
      </Box>
      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent="space-between"
        marginBottom="1rem"
      >
        <Typography
          variant="h3"
          color="textPrimary"
          fontWeight="600"
          marginBottom="0.5rem"
        >
          Years following Christ
        </Typography>
        <TextField
            variant="outlined"
            color="secondary"
            sx={{ width: "240px"  }}
            size="small"
            label="Years"
            type="number"
            inputProps={{min: 0, max: 100, inputMode: 'numeric', pattern: '[0-9]'}}
            value={followingChristYear}
            onChange={(event) => {
                var val = event.target.value;
                if (val > 100) {
                    val = 100;
                } else if (val < 0) {
                    val = 0;
                }
                setFollowingChristYear(val);
            }}
        />
      </Box>
      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent="space-between"
        marginBottom="1rem"
      >
        <Typography
          variant="h3"
          color="textPrimary"
          fontWeight="600"
          marginBottom="0.5rem"
        >
          Years attending CCF
        </Typography>
        <TextField
            variant="outlined"
            color="secondary"
            sx={{ width: "240px"  }}
            size="small"
            label="Years"
            type="number"
            inputProps={{min: 0, max: 100, inputMode: 'numeric', pattern: '[0-9]'}}
            value={ccfYear}
            onChange={(event) => {
                var val = event.target.value;
                if (val > 100) {
                    val = 100;
                } else if (val < 0) {
                    val = 0;
                }
                setCcfYear(val);
            }}
        />
      </Box>
      
      <Box
        alignSelf="flex-end"
        position="absolute"
        bottom="0"
        marginBottom="1.5rem"
      >
        <GenericButton onClick={onClose} color="info">
          <Typography variant="h4">Cancel</Typography>
        </GenericButton>
        <GenericButton color="action" onClick={handleNext}>
          <Typography variant="h4">Next</Typography>
        </GenericButton>
      </Box>
    </>
  );
};

export default PersonalInfoModal;
