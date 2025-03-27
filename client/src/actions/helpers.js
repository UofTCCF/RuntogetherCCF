import { startCase } from "lodash";
import { COMMITTEE_POSITIONS, POSITION_REQUIREMENTS } from "../constants";

//Converts an array of strings into a comma-separated list with proper case formatting
const formatWithCommas = (items) => {
  return items.map((item, idx) =>
    idx !== items.length - 1 ? `${startCase(item)}, ` : startCase(item)
  );
};

//Determines whether a use has met the required criteria for a given position
const getRequirementsStatus = (user, position) => {
  const { visionName, nominations } = user;
  const hasVision =
    visionName.length > 0 || !POSITION_REQUIREMENTS[position].vision;
  const hasNominations =
    nominations.length === POSITION_REQUIREMENTS[position].nominations;
  return hasVision && hasNominations;
};

// Categorize a position into either committee or Igs&Ministries
const groupByPosition = (position) => {
  if (Object.values(COMMITTEE_POSITIONS).includes(position)) {
    return "COMMITTEE";
  } else {
    return "IGs & MINISTRIES";
  }
};

export { formatWithCommas, getRequirementsStatus, groupByPosition };
