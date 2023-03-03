import { Typography, Box } from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import WhiteContainer from "../whiteContainer/whiteContainer";
import FacebookLoginButton from "../facebookLoginButton/facebookLoginButton";
import React from "react";
import {
  mockUser,
  NOT_LOGGED_IN_MESSAGE,
  NOT_REGISTERED_MESSAGE,
  STATUS,
  ELECTIONS_DEADLINE,
  PROFILE_COMPLETE_MESSAGE,
} from "../../constants";
import { formatWithCommas, getRequirementsStatus } from "../../actions/helpers";
import OpenModalButton from "../openModalButton/openModalButton";
import { capitalize } from "lodash";

class WelcomeCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: mockUser,
    };
  }

  getCustomRunningMessage(status, position, isProfileComplete) {
    return (
      <>
        {isProfileComplete ? (
          PROFILE_COMPLETE_MESSAGE
        ) : (
          <>
            Your profile is incomplete. You must complete your profile by
            <strong> {ELECTIONS_DEADLINE}</strong> to be eligible for this
            year's elections.
          </>
        )}
        <br />
        Your current status is {capitalize(status)}, and you have declared
        intent for the following position(s): {formatWithCommas(position)}.
      </>
    );
  }

  getIcon(isWaiting, isProfileComplete) {
    if (isWaiting) {
      return <InfoOutlinedIcon fontSize="medium" color="info" />;
    } else if (isProfileComplete) {
      return (
        <CheckCircleOutlineOutlinedIcon fontSize="medium" color="success" />
      );
    } else {
      return <ErrorOutlineOutlinedIcon fontSize="medium" color="warning" />;
    }
  }

  render() {
    const { status, position, name } = this.state.user;
    const isWaiting = status === STATUS.WAITING;
    const isDecided = status === STATUS.DECIDED;
    const loggedIn = name !== undefined;
    const isProfileComplete =
      isDecided && getRequirementsStatus(this.state.user, position[0]);

    console.log(this.state.user);
    return (
      <WhiteContainer maxWidth="600px" margin="1.5rem auto" textAlign="center">
        <Typography variant="h3" color="textPrimary" paddingBottom="0.5rem">
          Welcome,{" "}
          {loggedIn ? (
            <strong>{this.state.user.name}.</strong>
          ) : (
            NOT_LOGGED_IN_MESSAGE
          )}
        </Typography>
        {loggedIn ? (
          <Typography color="textPrimary" marginBottom="0.5rem">
            I want to <OpenModalButton>update my profile</OpenModalButton> or{" "}
            <OpenModalButton disabled={isWaiting}>
              request nominations.
            </OpenModalButton>
          </Typography>
        ) : (
          <FacebookLoginButton parent={this} />
        )}
        <Box display="flex" alignItems="top">
          {this.getIcon(isWaiting, isProfileComplete)}
          <Typography
            paddingLeft="0.5rem"
            color="textSecondary"
            variant="h5"
            fontWeight="400"
            textAlign="left"
          >
            {isWaiting
              ? NOT_REGISTERED_MESSAGE
              : this.getCustomRunningMessage(
                  status,
                  position,
                  isProfileComplete
                )}
          </Typography>
        </Box>
      </WhiteContainer>
    );
  }
}

export default WelcomeCard;
