import React from "react";
import {
  STATUS,
  COMMITTEE_POSITIONS,
  MINISTRY_POSITIONS,
} from "../../constants";
import GenericButton from "../genericButton/genericButton";
import {
  Box,
  Typography,
  ToggleButton,
  Autocomplete,
  TextField,
} from "@mui/material";
import { capitalize } from "lodash";
import { groupByPosition } from "../../actions/helpers";

const BUTTON_WIDTH = "140px";

const ElectionInfoModal = ({
  person,
  status,
  position,
  visionName,
  visionLink,
  reflectionQuestionsLink,
  setStatus,
  setPosition,
  setVisionName,
  setVisionLink,
  setReflectionQuestionsLink,
  handleSubmit,
  handleBack,
}) => {
  const { nominations } = person;
  const positionOptions = Object.values(COMMITTEE_POSITIONS).concat(
    Object.values(MINISTRY_POSITIONS)
  );

  return (
    <>
      <Box
        display="flex"
        justifyContent="center"
        margin="1rem"
        marginTop="0"
        flexWrap="wrap"
      >
        {Object.values(STATUS).map((val) => (
          <ToggleButton
            key={val}
            value={val}
            selected={status === val}
            color="action"
            onClick={() => setStatus(val)}
            sx={{
              borderRadius: "0",
              margin: "0.2rem",
              textTransform: "none",
              width: BUTTON_WIDTH,
            }}
          >
            <Typography variant="h3" fontWeight="600" key={val}>
              {capitalize(val)}
            </Typography>
          </ToggleButton>
        ))}
      </Box>
      <Typography variant="h3" color="textPrimary" marginBottom="0.5rem">
        <strong>Position(s)</strong>:
      </Typography>
      <Autocomplete
        multiple
        filterSelectedOptions
        limitTags={2}
        defaultValue={person.positions}
        groupBy={(option) => groupByPosition(option)}
        options={positionOptions}
        getOptionLabel={(option) => option}
        renderInput={(params) => <TextField {...params} color="secondary" />}
        value={position}
        onChange={(_, value) => {
          setPosition(value);
        }}
        size="small"
        sx={{ marginBottom: "0.8rem" }}
      />
      <Typography
        variant="h3"
        color="textPrimary"
        fontWeight="600"
        marginBottom="0.5rem"
      >
        Vision
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
        fullWidth
        label="Vision name"
        value={visionName}
        onChange={(event) => setVisionName(event.target.value)}
      />
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
        fullWidth
        label="Link to vision"
        value={visionLink}
        onChange={(event) => setVisionLink(event.target.value)}
      />
      <Typography
        variant="h3"
        color="textPrimary"
        fontWeight="600"
        marginBottom="0.5rem"
      >
        Reflection Questions
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
        fullWidth
        label="Link to reflection questions"
        value={reflectionQuestionsLink}
        onChange={(event) => setReflectionQuestionsLink(event.target.value)}
      />
      <Typography variant="h3" color="textPrimary" marginBottom="0.5rem">
        <strong>Nominations</strong>: {nominations.length}
      </Typography>
      <Box
        alignSelf="flex-end"
        position="absolute"
        bottom="0"
        marginBottom="1.5rem"
      >
        <GenericButton onClick={handleBack} color="info">
          <Typography variant="h4">Back</Typography>
        </GenericButton>
        <GenericButton color="action" onClick={handleSubmit}>
          <Typography variant="h4">Save</Typography>
        </GenericButton>
      </Box>
    </>
  );
};

export default ElectionInfoModal;
