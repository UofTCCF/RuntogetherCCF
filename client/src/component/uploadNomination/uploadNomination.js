import { Box, Typography } from "@mui/material";
import React from "react";
import GenericButton from "../genericButton/genericButton";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import SimpleListMenu from "../selectNominationType/selectNominationType";
import Checkbox from "@mui/material/Checkbox";
import { NOMINATION_TYPES, NOMINATION_TYPES_DESCRIPTION } from "../../constants";

class UploadNomination extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        nominationText: this.props.previousNomination,
        nominationMatches: false,
        sanitizedNomination: this.trimText(this.props.previousNomination),
        };
    }

    trimText = (text) => {
        if (text === undefined) {
        return "";
        }
        const regex = /(<p><br><\/p>)*$/;
        return text.replace(regex, '');
    };  

    handleNominationTextChange = (event) => {
        this.setState({
        nominationText: event,
        nominationMatches: true,
        sanitizedNomination: this.trimText(event),
        });
    };

    render() {
        if (
        this.state.nominationText !== this.props.previousNomination &&
        !this.state.nominationMatches
        ) {
        this.setState({
            nominationText: this.props.previousNomination,
            nominationMatches: true,
        });
        }
        const secondingText = `I second the nomination for 
            ${this.props.nominee.name} for the position of 
            ${this.props.nominee.positions[0]}`
        return (
        <>
            <Typography color="textPrimary" paddingBottom="1em">
            {this.props.nominee.name} is running for{" "}
            {this.props.nominee.positions[0]} and has requested your nomination.
            Type or paste your nomination in the box below and click "Submit" to
            upload your nomination.
            </Typography>
            <SimpleListMenu
            options={["Please select a nomination type", ...NOMINATION_TYPES]}
            prompt="What nomination are you submitting?"
            setSelectedIndex={this.props.setSelectedIndex}
            selectedIndex={this.props.selectedIndex}
            />
            <Typography color="textPrimary" paddingBottom="1em">
                {NOMINATION_TYPES_DESCRIPTION}
            </Typography>
            {this.props.selectedIndex === 3 ? 
            <Box display="flex" alignItems="center">
                <Checkbox 
                    style={{ color: 'black' }} 
                    checked={this.props.checked}
                    onChange={() => {this.props.setChecked(!this.props.checked)}}
                />
                <Typography color="textPrimary">
                    {secondingText}
                    <span style={{ color: 'red' }}>*</span>
                </Typography>
            </Box>
            :
            <ReactQuill 
                theme="snow" 
                value={this.state.nominationText} 
                onChange={this.handleNominationTextChange} 
                placeholder={"Enter Nomination Here"}
                style={{ 
                marginBottom: "1em",
                backgroundColor: "#e4e4e4",
                border: "1px solid #000",
                width: "100%",
                maxHeight: "400px",
                overflowY: "auto",
            }}
            />}
            <Box width="150px" marginLeft="auto" marginRight="0" marginTop="0.8em">
                <GenericButton 
                color="action"
                onClick={() => {
                this.props.handleSubmit(this.state.sanitizedNomination, 
                    this.props.selectedIndex, 
                    this.props.checked,
                    secondingText);
                }}>
                    Submit
                </GenericButton>
            </Box>
        </>
        );
    }
}

function withIndex(Component) {
    return function WrappedComponent(props) {
      const [selectedIndex, setSelectedIndex] = React.useState(0);
      const [checked, setChecked] = React.useState(false);
      return <Component {...props} 
            selectedIndex={selectedIndex} 
            setSelectedIndex={setSelectedIndex} 
            checked={checked}
            setChecked={setChecked}
        />;
    }
  }


export default withIndex(UploadNomination);
