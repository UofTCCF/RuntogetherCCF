import React from "react";

import WelcomeCard from "../component/welcomeCard/welcomeCard";
import LinkSection from "../component/linkSection/linkSection";
import ElectionSection from "../component/electionSection/electionSection";
import { getAllUsers } from "../actions/loadInfo";

// Define Home component
class Home extends React.Component {
  // Constructor to initialize the state of the component
    constructor(props) {
        super(props);
        this.state = {
          candidates: [],
          user: {},
        };
      }
    componentDidMount() {
        getAllUsers(this);
    }
  // render the component's JSX (UI)
  render() {
    return (
      <>
        <WelcomeCard parent={this} user={this.state.user} />
        <ElectionSection candidates={this.state.candidates} />
        <LinkSection />
      </>
    );
  }
}

export default Home;
