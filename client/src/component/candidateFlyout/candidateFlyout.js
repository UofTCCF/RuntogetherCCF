import React from "react";
import Drawer from "@mui/material/Drawer/Drawer";
import {
  Box,
  Divider,
  IconButton,
  Typography,
  useMediaQuery,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { CCF_THEME } from "../../actions/theme";
import { capitalize } from "lodash";
import { GeneralLink } from "../linkSection/linkSection";
import "./candidateFlyout.css";
import { NOMINATION_TYPES } from "../../constants";

const CandidateFlyout = ({ person, flyoutOpen, setFlyoutOpen }) => {
  const {
    name,
    positions,
    visionName,
    visionLink,
    reflectionQuestionsLink,
    nominations,
    program,
    year,
    church,
    yearInChurch,
    yearsFollowingChrist,
    yearsInCCF,
  } = person;
  const largeScreen = useMediaQuery(CCF_THEME.breakpoints.up("md"));
  const responsiveWidth = largeScreen ? "800px" : "100%";
  const hasNominators = nominations !== undefined;
  const externalNominators = hasNominators ? nominations.filter(
    (nom) => nom.nominationType === NOMINATION_TYPES[0]) : undefined
  const internalNominators = hasNominators ? nominations.filter(
    (nom) => nom.nominationType === NOMINATION_TYPES[1]) : undefined
  const internalShortNominators = hasNominators ? nominations.filter(
    (nom) => nom.nominationType === NOMINATION_TYPES[2]) : undefined
  console.log(externalNominators)
  const schoolInfo =
    year && program ? (
      <>
        <strong>{year}</strong> Year, studying <strong>{program}</strong>
        <br />
      </>
    ) : null;
  const christianInfo =
    church && yearInChurch && yearsFollowingChrist ? (
      <>
        Christian for <strong>{yearsFollowingChrist}</strong> years & attending
        <strong> {church}</strong> for <strong>{yearInChurch}</strong> years
        <br />
      </>
    ) : null;
  const ccfInfo = yearsInCCF ? (
    <>
      CCF Member for <strong>{yearsInCCF}</strong> years
      <br />
    </>
  ) : null;

  return (
    <Drawer
      open={flyoutOpen}
      onClose={() => setFlyoutOpen(false)}
      anchor="right"
      PaperProps={{
        sx: {
            width: responsiveWidth,
            backgroundColor: "secondary.light",
        },
      }}
    >
      <Box padding="0.5em" margin="1em">
        <Box display="flex">
          <Box
            justifyContent="space-between"
            display="flex"
            width="95%"
            flexWrap="wrap"
          >
            <Typography variant="h2" width="fit" marginBottom="0.5rem">
              {name}
            </Typography>
          </Box>
          <IconButton
            color="textPrimary"
            onClick={() => setFlyoutOpen(false)}
            sx={{ padding: "0.2rem", marginLeft: "0.5rem", maxHeight: "30px" }}
          >
            <CloseIcon />
          </IconButton>
        </Box>
        <Typography variant="h3" paddingBottom="1em">
          {schoolInfo}
          {christianInfo}
          {ccfInfo}
          Running for <strong>{capitalize(positions[0])}</strong>
        </Typography>
        {visionName && 
            <>
            <Typography variant="h3">
                <strong>Vision:</strong>
            </Typography>
            <GeneralLink label={visionName} link={visionLink} size="h3" />
            </>
        }
        {reflectionQuestionsLink && 
            <GeneralLink label="Reflection Questions" link={reflectionQuestionsLink} size="h3" />
        }
        <Divider sx={{ bgcolor: "secondary.light", margin: "1em 0" }} />
        <Typography variant="h2" fontWeight="600" 
            marginBottom="0.5em" marginTop="0.5em">
          {NOMINATION_TYPES[0]}
        </Typography>
        {externalNominators !== undefined && externalNominators.length !== 0 ?
          externalNominators.map((nom) => (
            <Box
              key={nom.nominator}
              padding="0.8rem 0rem"
              margin="0 0 1rem 0"
            >
                <Typography variant="h3" paddingBottom="0.3rem"><strong>{nom.nominator}</strong></Typography>
                <Box className="nominationBody">
                <Typography 
                    component="div" 
                    dangerouslySetInnerHTML={{__html: nom.nomination}}>
                </Typography>
                </Box>
            </Box>
          )) : 
          <Typography variant="h3">
            Not completed or opted out
          </Typography>
        }
        <Typography variant="h2" fontWeight="600" 
            marginBottom="0.5em" marginTop="0.5em">
          {NOMINATION_TYPES[1]}s
        </Typography>
        {internalNominators !== undefined && internalNominators.length !== 0 ?
            internalNominators.map((nom) => (
            <Box
              key={nom.nominator}
              padding="0.8rem 0rem"
              margin="0 0 1rem 0"
            >
                <Typography variant="h3" paddingBottom="0.3rem"><strong>{nom.nominator}</strong></Typography>
                <Box className="nominationBody">
                <Typography 
                    component="div" 
                    dangerouslySetInnerHTML={{__html: nom.nomination}}>
                </Typography>
                </Box>
            </Box>
          )) :
          <Typography variant="h3">
            Not completed
          </Typography>
          }
          <Typography variant="h2" fontWeight="600" 
            marginBottom="0.5em" marginTop="0.5em">
          {NOMINATION_TYPES[2]}
        </Typography>
        {internalShortNominators !== undefined && internalShortNominators.length !== 0 ?
            internalShortNominators.map((nom) => (
            <Box
              key={nom.nominator}
              padding="0.8rem 0rem"
              margin="0 0 1rem 0"
            >
                <Typography variant="h3" paddingBottom="0.3rem"><strong>{nom.nominator}</strong></Typography>
                <Box className="nominationBody">
                <Typography 
                    component="div" 
                    dangerouslySetInnerHTML={{__html: nom.nomination}}>
                </Typography>
                </Box>
            </Box>
          )) :
          <Typography variant="h3">
            Not completed
          </Typography>
          }
      </Box>
    </Drawer>
  );
};

export default CandidateFlyout;
