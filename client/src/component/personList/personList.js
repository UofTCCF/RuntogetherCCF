import { Box, Typography } from "@mui/material";
import React from "react";

import "./personList.css";
import PersonCard from "../personCard/personCard";
import { STATUS } from "../../constants";
import { capitalize } from "lodash";
import Skeleton from "@mui/material/Skeleton";

const PersonList = ({ title, positions, candidates, fixedHeight, loading }) => {
  const getColumnContents = () => {
    if (title === capitalize(STATUS.CONSIDERING)) {
      return Object.values(positions).map((pos) => (
        <React.Fragment key={pos}>
          {candidates
            .filter((p) => p.status === STATUS.CONSIDERING)
            .map((person) => (
              <PersonCard key={person.name} person={person} />
            ))}
        </React.Fragment>
      ));
    }
    return Object.values(positions).map((pos) => (
      <React.Fragment key={pos}>
        <Typography
          key={pos}
          variant="subtitle2"
          color="textPrimary"
          margin="0.5em 0 0.5em 0"
        >
          {pos}
        </Typography>
        {candidates
          .filter(
            (p) => p.positions.includes(pos) && p.status === STATUS.DECIDED
          )
          .map((person) => (
            <PersonCard key={person.name} person={person} />
          ))}
      </React.Fragment>
    ));
  };

  const customSkeleton = () => {
    let rows = []
    for (let i = 0; i < 5; i++) {
        rows.push(
        <Box padding={1} key={i}>
            <Skeleton variant="rectangle" height={75}/>
        </Box>
    )
    }
    return rows
  }

  return (
    <Box className="personList">
        <Typography variant="h4" color="textPrimary" textAlign="center">
          {title}
        </Typography>
        <Box key={title} marginBottom="0.8em" className={fixedHeight ? "personListContentScroll" : ""}>
          {loading ? customSkeleton() : getColumnContents()}
        </Box>
    </Box>
  );
};

export default PersonList;
