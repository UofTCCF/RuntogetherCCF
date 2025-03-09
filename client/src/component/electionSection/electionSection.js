import React from 'react';
import { Box, Typography } from "@mui/material";
import PersonList from "../personList/personList";
import { CONSIDERING_POSITIONS, COMMITTEE_POSITIONS, MINISTRY_POSITIONS, ELECTIONS_HEADER_TEXT } from "../../constants";
import { capitalize } from "lodash";
import { STATUS } from "../../constants";
import ModuleWrapper from '../moduleWrapper/moduleWrapper';
import {useMediaQuery} from "@mui/material";

const ElectionSection = ({ candidates, loading }) => {
    const isThinScreen = useMediaQuery("(max-width: 450px)");
    return (
        <ModuleWrapper backgroundColor="secondary.main">
            <Typography variant="h2" color="textPrimary" textAlign="left">
                {ELECTIONS_HEADER_TEXT}
            </Typography>
            <Box
                display="flex"
                justifyContent="center"
                flexWrap="wrap"
                marginTop="1rem"
            >
                <PersonList
                title={capitalize(STATUS.CONSIDERING)}
                positions={CONSIDERING_POSITIONS}
                candidates={candidates}
                loading={loading}
                fixedHeight={!isThinScreen}
                />
                <PersonList
                title="Committee"
                positions={COMMITTEE_POSITIONS}
                candidates={candidates}
                loading={loading}
                fixedHeight={!isThinScreen}
                />
                <PersonList
                title="IGs & Ministries"
                positions={MINISTRY_POSITIONS}
                candidates={candidates}
                loading={loading}
                fixedHeight={!isThinScreen}
                />
            </Box>
        </ModuleWrapper>
    )
    
}

export default ElectionSection;