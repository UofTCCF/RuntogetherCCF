import React, { useState } from "react";
import { Box, Divider, Modal, Typography, useMediaQuery } from "@mui/material";
import { CCF_THEME } from "../../actions/theme";
import { checkUserProfile, updateGeneralInfo } from "../../actions/updateUsers";
import ElectionInfoModal from "../electionInfoModal/electionInfoModal";
import PersonalInfoModal from "../personalInfoModal/personalInfoModal.js";

const UpdateProfileModal = ({ person, open, onClose, parent }) => {
  const [status, setStatus] = useState(person.status);
  const [position, setPosition] = useState(person.positions);
  const [visionName, setVisionName] = useState(person.visionName);
  const [visionLink, setVisionLink] = useState(person.visionLink);
  const [reflectionQuestionsLink, setReflectionQuestionsLink] = useState(person.reflectionQuestionsLink)
  const [yearOfStudy, setYearOfStudy] = useState(person.year);
  const [programName, setProgramName] = useState(person.program);
  const [churchName, setChurchName] = useState(person.church);
  const [churchYear, setChurchYear] = useState(person.yearInChurch);
  const [followingChristYear, setFollowingChristYear] = useState(
    person.yearsFollowingChrist
  );
  const [ccfYear, setCcfYear] = useState(person.yearsInCCF);
  const [page, setPage] = useState(0);
  const { name } = person;
  const largeScreen = useMediaQuery(CCF_THEME.breakpoints.up("sm"));
  const responsiveWidth = largeScreen ? "500px" : "80%";
  const responsiveHeight = largeScreen ? "500px" : "90%";

  const handleSubmit = () => {
    checkUserProfile(person, position, status, visionName, visionLink, reflectionQuestionsLink, parent);
    onClose();
  };

  const handleNextClick = () => {
    updateGeneralInfo(
      person,
      programName,
      yearOfStudy,
      churchName,
      churchYear,
      followingChristYear,
      ccfYear,
      parent
    );
    setPage(page + 1);
  };

  const handleBackClick = () => {
    setPage(page - 1);
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <Box
        bgcolor="secondary.light"
        position="absolute"
        width={responsiveWidth}
        height={responsiveHeight}
        padding="1.5rem"
        borderRadius="15px"
      >
        <Typography variant="h2" color="textPrimary" marginBottom="0.2rem">
          Your Profile
        </Typography>
        <Typography variant="h3" color="textPrimary">
          <strong>Name</strong>: {name}
        </Typography>
        <Divider sx={{ margin: "1rem 0" }} />
        <Box display="flex" flexDirection="column">
          {page === 0 ? (
            <PersonalInfoModal
              onClose={onClose}
              handleNext={handleNextClick}
              person={person}
              yearOfStudy={yearOfStudy}
              programName={programName}
              churchName={churchName}
              churchYear={churchYear}
              followingChristYear={followingChristYear}
              ccfYear={ccfYear}
              setYearOfStudy={setYearOfStudy}
              setProgramName={setProgramName}
              setChurchName={setChurchName}
              setChurchYear={setChurchYear}
              setFollowingChristYear={setFollowingChristYear}
              setCcfYear={setCcfYear}
            />
          ) : (
            <ElectionInfoModal
              person={person}
              status={status}
              position={position}
              visionLink={visionLink}
              reflectionQuestionsLink={reflectionQuestionsLink}
              visionName={visionName}
              setStatus={setStatus}
              setPosition={setPosition}
              setVisionLink={setVisionLink}
              setReflectionQuestionsLink={setReflectionQuestionsLink}
              setVisionName={setVisionName}
              handleBack={handleBackClick}
              handleSubmit={handleSubmit}
            />
          )}
        </Box>
      </Box>
    </Modal>
  );
};

export default UpdateProfileModal;
