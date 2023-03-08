import React from "react";
import { Typography } from "@mui/material";
import WhiteContainer from "../component/whiteContainer/whiteContainer";
import UploadNomination from "../component/uploadNomination/uploadNomination";
import SubmittedNomination from "../component/submittedNomination/submittedNomination";
import FacebookLoginButton from "../component/facebookLoginButton/facebookLoginButton";
import { getUser } from "../actions/loadInfo";
import { errorToast } from "../actions/toastify";
import { uploadNomination } from "../actions/updateUsers";

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
    const handleSubmit = (nominationText) => {
      if (this.state.user.name === undefined) {
        errorToast("Please log in to submit a nomination");
      } else if (this.state.user.id === this.state.nominee.id) {
        errorToast("You cannot nominate yourself");
      } else {
        uploadNomination(this.state.nominee, this.state.user, nominationText);
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
      <WhiteContainer maxWidth="800px" margin="1.5rem auto" textAlign="center">
        <Typography
          variant="h3"
          color="textPrimary"
          paddingBottom="0.5em"
          fontWeight="600"
        >
          Upload Nominations for {this.state.nominee.name}
        </Typography>
        {this.state.submitted ? (
          <SubmittedNomination nominee={this.state.nominee} />
        ) : (
          <UploadNomination
            handleSubmit={handleSubmit}
            nominee={this.state.nominee}
            previousNomination={previousNomination}
          />
        )}
        {this.state.user.name === undefined ? (
          <FacebookLoginButton parent={this} />
        ) : (
          <></>
        )}
      </WhiteContainer>
    );
  }
}

export default Nominations;
