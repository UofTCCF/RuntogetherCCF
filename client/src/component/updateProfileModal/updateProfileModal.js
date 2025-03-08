import React, { useState } from "react";
import { Box, Divider, Modal, Typography, useMediaQuery } from "@mui/material";
import { CCF_THEME } from "../../actions/theme";
import { checkUserProfile, updateGeneralInfo, updatePicChoice, uploadProfilePic } from "../../actions/updateUsers";
import ElectionInfoModal from "../electionInfoModal/electionInfoModal";
import PersonalInfoModal from "../personalInfoModal/personalInfoModal.js";
import ProfilePicModal from "../profilePicModal/profilePicModal.js";
import { PIC_OPTS } from "../../constants.js";

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
  const [profilePic, setProfilePic] = useState(null);
  const [picChoice, setPicChoice] = useState(person.picChoice);
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
    if (page === 0) {
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
      }
    else if (page === 1) {
        if (picChoice === PIC_OPTS.CUSTOM_PICTURE) {
          uploadProfilePic(person, profilePic);
          // profilePic is: { blob, fileName}
        }
        updatePicChoice(person, picChoice);
        console.log("picChoice: ", picChoice);
      }
    setPage(page + 1);
  };

  const handleBackClick = () => {
    setPage(page - 1);
  };

  const renderModalContent = () => {
    switch (page) {
      case 0:
        return (
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
            profilePic={profilePic}
            setYearOfStudy={setYearOfStudy}
            setProgramName={setProgramName}
            setChurchName={setChurchName}
            setChurchYear={setChurchYear}
            setFollowingChristYear={setFollowingChristYear}
            setCcfYear={setCcfYear}
            setProfilePic={setProfilePic}
          />
        );
      case 1:
        return (
          <ProfilePicModal
            handleNext={handleNextClick}
            handleBack={handleBackClick}
            profilePic={profilePic}
            setProfilePic={setProfilePic}
            picChoice={picChoice}
            setPicChoice={setPicChoice}
          />
        );
      case 2:
        return (
          <ElectionInfoModal
            person={person}
            status={status}
            position={position}
            visionLink={visionLink}
            visionName={visionName}
            setStatus={setStatus}
            setPosition={setPosition}
            setVisionLink={setVisionLink}
            setVisionName={setVisionName}
            handleBack={handleBackClick}
            handleSubmit={handleSubmit}
          />
        );
      default:
        return null;
    }
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
          {
            renderModalContent()
          }
        </Box>
      </Box>
    </Modal>
  );
};

export default UpdateProfileModal;
