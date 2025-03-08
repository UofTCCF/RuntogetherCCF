import React from "react";
import { Typography } from "@mui/material";
import UploadNomination from "../component/uploadNomination/uploadNomination";
import SubmittedNomination from "../component/submittedNomination/submittedNomination";
import { getUser } from "../actions/loadInfo";
import { errorToast } from "../actions/toastify";
import { uploadNomination } from "../actions/updateUsers";
import GoogleLoginButton from "../component/googleLogin/googleLogin";
import ModuleWrapper from "../component/moduleWrapper/moduleWrapper";
import { NOMINATION_TYPES } from "../constants";
import LinkSection from "../component/linkSection/linkSection";

class Nominations extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      submitted: false,
      nominee: {
        name: "John Doe",
        positions: ["Chair"],
      },
      user: {},
    };
  }
  
  componentDidMount() {
    const param = window.location.href.split("?")[1];
    const userID = param.split("=")[1];
    getUser(userID, this);
  }

  render() {
    const handleSubmit = (nominationText, nominationType, 
        checked, secondingText) => {
      if (this.state.user.name === undefined) {
        errorToast("Please log in to submit a nomination");
      } 
      else if (this.state.user.id === this.state.nominee.id) {
        errorToast("You cannot nominate yourself");
      } 
      else if (nominationType === 0) {
        errorToast("Please select a nomination type")
      }
      else if (nominationType === 3 && checked === false) {
        errorToast("You must check the box to submit")
      }
      else {
        if (checked) {
            nominationText = secondingText;
        }
        uploadNomination(this.state.nominee, this.state.user, 
            nominationText, NOMINATION_TYPES[nominationType-1]);
        this.setState({ submitted: true });
      }
    };

    let previousNomination = undefined;
    // Gets existing nominations
    if (this.state.user.name !== undefined) {
      this.state.nominee.nominations.forEach((nomination) => {
        if (nomination.nominatorID === this.state.user.id) {
          previousNomination = nomination.nomination;
        }
      });
    }

    return (
        <>
        <ModuleWrapper backgroundColor="primary.main">
        <Typography
          variant="h2"
          color="textPrimary"
          paddingBottom="0.5em"
          fontWeight="600"
        >
          Upload Nominations for {this.state.nominee.name}
        </Typography>
        {this.state.user.name === undefined ? (
          <GoogleLoginButton parent={this} />
        ) : (
          <></>
        )}
        {this.state.submitted ? (
          <SubmittedNomination nominee={this.state.nominee} />
        ) : (
          <UploadNomination
            handleSubmit={handleSubmit}
            nominee={this.state.nominee}
            previousNomination={previousNomination}
          />
        )}
        </ModuleWrapper>
        <LinkSection />
        </>
    );
  }
}

export default Nominations;
