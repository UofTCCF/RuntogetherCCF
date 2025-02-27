import React from "react";

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
    }
  render() {
    console.log(this.state.loadingData)
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
