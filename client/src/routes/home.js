import React from "react";

import { errorToast } from "../actions/toastify";
import WelcomeCard from "../component/welcomeCard/welcomeCard";
import LinkSection from "../component/linkSection/linkSection";
import ElectionSection from "../component/electionSection/electionSection";
import { getAllUsers } from "../actions/loadInfo";


class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          loadingData: true,
          candidates: [],
          user: {},
        };
      }

    componentDidMount() {
        getAllUsers(this);
        setTimeout(() => {
            errorToast("Server warming up, please wait a minute")
        }, 1000)
    }

  render() {
    return (
      <>
        <WelcomeCard parent={this} user={this.state.user} />
        <ElectionSection 
          candidates={this.state.candidates} 
          loading={this.state.loadingData} />
        <LinkSection />
      </>
    );
  }
}

export default Home;
