import { Box, Button, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { formatWithCommas } from "../../actions/helpers";
import { PIC_OPTS, STATUS } from "../../constants";
import CandidateFlyout from "../candidateFlyout/candidateFlyout";
import { getProfilePic } from "../../actions/loadInfo";
import "./personCard.css";

const IMAGE_DIMENSIONS = "50px";
const DEFAULT_PROFILE_PIC = "profile.jpeg";

const PersonCard = ({ person }) => {
  const [flyoutOpen, setFlyoutOpen] = useState(false);
  const [validPicture, setValidPicture] = useState(true);
  const [customImgUrl, setCustomImgUrl] = useState(null);

  const handleImageError = () => {
    setValidPicture(false);
  }

  const {
    id,
    name,
    visionName,
    visionLink,
    nominations,
    picture,
    profilePic,
    picChoice,
    positions,
    status,
  } = person;
  const hasVision = visionName.length > 0 && visionLink.length > 0;
  const hasNominators = nominations.length > 0;

  useEffect(() => {
    if (picChoice === PIC_OPTS.CUSTOM_PICTURE) {
      getProfilePic(id).then((url) => setCustomImgUrl(url));; // Handle errors gracefully
    }
  }, [id, picChoice, profilePic]);

  return (
    <Box
      marginBottom="0.5rem"
      display="flex"
      alignItems="center"
    >
      <Button
        className="personCardButton"
        onClick={() => setFlyoutOpen(true)}
        disabled={status === STATUS.CONSIDERING}
        sx={{
          textTransform: "none",
          textAlign: "inherit",
          padding: "0.5em",
          fontSize: "inherit",
          margin: "0",
          justifyContent: "left",
          width: "100%",
        }}
      >
        <Box
          borderRadius="50%"
          overflow="hidden"
          height={IMAGE_DIMENSIONS}
          minWidth={IMAGE_DIMENSIONS}
          maxWidth={IMAGE_DIMENSIONS}
          margin="0.1em"
          display="flex"
          justifyContent="center"
          alignItems="center"
          bgcolor="lightgray"
        >
          { validPicture ? <img
            src={picChoice === PIC_OPTS.CUSTOM_PICTURE ? customImgUrl : picture}
            alt="profile pic"
            height="100%"
            onError={handleImageError}
          /> : <img
            src={DEFAULT_PROFILE_PIC}
            alt="profile pic"
            height="100%"
          />}
        </Box>
        <Box marginLeft="0.65em">
          <Typography variant="h5" color="textPrimary" marginBottom="0.5em">
            {name}
          </Typography>
          {status === STATUS.CONSIDERING ? (
            <Typography variant="body2" color="textPrimary">
              Position(s): {formatWithCommas(positions)}
            </Typography>
            ) : (
            <>
              {" "}
              <Typography
                variant="body2"
                color="textPrimary"
                marginBottom="0.4em"
              >
                Vision: {hasVision && visionName}
              </Typography>
              <Typography variant="body2" color="textPrimary">
                Nominations:{" "}
                {hasNominators &&
                  formatWithCommas(nominations.map((n) => n.nominator))}
              </Typography>
            </>
          )}
        </Box>
      </Button>
      <CandidateFlyout
        person={person}
        flyoutOpen={flyoutOpen}
        setFlyoutOpen={setFlyoutOpen}
      />
    </Box>
  );
};

export default PersonCard;
