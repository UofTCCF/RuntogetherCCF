export const HEADER_TEXT = (
  <>
    Join in on the elections process by praying, discerning, and running&nbsp;
    <em>together</em>.
  </>
);
export const TITLE = "Run Together";
export const NOT_REGISTERED_MESSAGE = `
You are not yet registered in the running for any positions. 
If you would like to do so, click the "update my profile" button
above to declare your intent. If you need to upload nominations for 
someone, please ask them to send you a “request nominations” link.
`;
export const NOT_LOGGED_IN_MESSAGE = "Please log in to Google.";
export const ELECTIONS_HEADER_TEXT = "2024 - 2025 Leadership Elections";
export const NO_VISION = "No Vision Available";
export const ELECTIONS_DEADLINE = "March 16th, 2024";
export const PROFILE_COMPLETE_MESSAGE = `Your profile is complete. No further actions are required at this time.`;
export const NOMINATION_REQUEST_INSTRUCTIONS = `To request nominations, copy the link below and send it to your nominators.`;
export const NOMINATION_LINK_ERROR = `No link found.`;

export const YEAR_OF_STUDY_OPTIONS = [
  "First",
  "Second",
  "Third",
  "Fourth",
  "Fifth+",
];
export const CCF_YEAR_OPTIONS = ["1", "2", "3", "4", "5+"];
export const YEAR_NUMBER_OPTIONS = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",
  "20",
  "21",
  "22",
  "23",
  "24",
];
export const STATUS = {
  WAITING: "WAITING",
  CONSIDERING: "CONSIDERING",
  DECIDED: "DECIDED",
};
export const COMMITTEE_POSITIONS = {
  CHAIR: "CHAIR",
  VICE_CHAIR: "VICE CHAIR",
  SECRETARY: "SECRETARY/TREASURER",
  MENS_DEVOTIONAL_LEADER: "MEN'S DEVOTIONAL LEADER",
  WOMENS_DEVOTIONAL_LEADER: "WOMEN'S DEVOTIONAL LEADER",
  WORSHIP_COORDINATOR: "WORSHIP COORDINATOR",
  SOCIAL_COORDINATOR: "SOCIAL COORDINATOR",
  OUTREACH_COORDINATOR: "OUTREACH COORDINATOR",
};
export const MINISTRY_POSITIONS = {
  INVESTMENT_GROUPS: "INVESTMENT GROUPS",
  MENS_MINISTRY: "MEN'S MINISTRY",
  WOMENS_MINISTRY: "WOMEN'S MINISTRY",
  FREEZER: "FREEZER",
  WORSHIP_TEAM_LEADER: "WORSHIP TEAM LEADER",
  WORSHIP_TEAM_MEMBER: "WORSHIP TEAM MEMBER",
  OUTREACH_MINISTRY: "OUTREACH MINISTRY",
  HOSPITALITY_MINISTRY: "HOSPITALITY MINISTRY",
  // VITAMIN_MINISTRY: "VITAMIN MINISTRY",
  // SPORTS_MINISTRY: "SPORTS MINISTRY",
  // WORSHIP_MINISTRY: "WORSHIP MINISTRY", 
};
export const CONSIDERING_POSITIONS = {
  ALL_ROLES: "ALL ROLES",
};
export const POSITION_REQUIREMENTS = {
  [COMMITTEE_POSITIONS.CHAIR]: {
    vision: true,
    nominations: 3,
  },
  [COMMITTEE_POSITIONS.VICE_CHAIR]: {
    vision: true,
    nominations: 3,
  },
  [COMMITTEE_POSITIONS.SECRETARY]: {
    vision: true,
    nominations: 3,
  },
  [COMMITTEE_POSITIONS.TREASURER]: {
    vision: true,
    nominations: 3,
  },
  [COMMITTEE_POSITIONS.MENS_DEVOTIONAL_LEADER]: {
    vision: true,
    nominations: 3,
  },
  [COMMITTEE_POSITIONS.WOMENS_DEVOTIONAL_LEADER]: {
    vision: true,
    nominations: 3,
  },
  [COMMITTEE_POSITIONS.WORSHIP_COORDINATOR]: {
    vision: true,
    nominations: 3,
  },
  [COMMITTEE_POSITIONS.SOCIAL_COORDINATOR]: {
    vision: true,
    nominations: 3,
  },
  [COMMITTEE_POSITIONS.OUTREACH_COORDINATOR]: {
    vision: true,
    nominations: 3,
  },
  [MINISTRY_POSITIONS.INVESTMENT_GROUPS]: {
    vision: false,
    nominations: 0,
  },
  [MINISTRY_POSITIONS.MENS_MINISTRY]: {
    vision: false,
    nominations: 0,
  },
  [MINISTRY_POSITIONS.WOMENS_MINISTRY]: {
    vision: false,
    nominations: 0,
  },
  [MINISTRY_POSITIONS.FREEZER]: {
    vision: false,
    nominations: 0,
  },
  [MINISTRY_POSITIONS.OUTREACH_MINISTRY]: {
    vision: false,
    nominations: 0,
  },
  [MINISTRY_POSITIONS.HOSPITALITY_MINISTRY]: {
    vision: false,
    nominations: 0,
  },
  [MINISTRY_POSITIONS.VITAMIN_MINISTRY]: {
    vision: false,
    nominations: 0,
  },
  [MINISTRY_POSITIONS.SPORTS_MINISTRY]: {
    vision: false,
    nominations: 0,
  },
  [MINISTRY_POSITIONS.WORSHIP_MINISTRY]: {
    vision: false,
    nominations: 0,
  },
  [MINISTRY_POSITIONS.WORSHIP_TEAM_LEADER]: {
    vision: false,
    nominations: 0,
  },
  [MINISTRY_POSITIONS.WORSHIP_TEAM_MEMBER]: {
    vision: false,
    nominations: 0,
  },
};

export const LINKS = [
  {
    label: "Constitution",
    link: "https://docs.google.com/document/d/1RYMSCOyMciT2TKG8CP0RZ9sSlWIhi8uZ4JVjH9LHI2E/edit?usp=sharing",
  },
  // {
  //   label: "Election's Handbook",
  //   link: "https://docs.google.com/document/d/1I_1JZS__cLdcWu67uJa8CCqmIzwn7O_jOTjlw7DE9GI/edit?usp=sharing",
  // },
  {
    label: "Past Visions",
    link: "https://drive.google.com/drive/folders/18R0YYYe0TBIreOym_vPb28vHyp1zBQdQ?usp=share_link",
  },
  // {
  //   label: "Leadership Workshop Slides",
  //   link: "https://docs.google.com/presentation/d/1KTKnY1yxlP-24ND77o5KfOcC6RS85KC-IbWsTA383XI/edit?usp=sharing",
  // },
  // {
  //   label: "Leadership Workshop Video",
  //   link: "https://drive.google.com/file/d/1But0_n4m-T1b4xSNYsRLqX9fHgAdV0yr/view?usp=share_link",
  // },
  {
    label: "UTCCF",
    link: "https://www.utccf.com",
  },
];

// Hard coded that the first is external, second in internal long 
// and third is internal short
export const NOMINATION_TYPES = [
    "External Nomination",
    "Internal Long Nomination",
    "Internal Short Nomination"
]

export const NOMINATION_TYPES_DESCRIPTION = "Please refer to elections handbook to know what these nomination types are."