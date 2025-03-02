import { errorToast } from "./toastify";
import ENV from "./../config";
import { STATUS } from "../constants";
import { getAllUsers } from "./loadInfo";

const API_HOST = ENV.api_host;

const updateVisionAndPositions = (
  user,
  visionName,
  visionLink,
  reflectionQuestionsLink,
  positions,
  status,
  page
) => {
  const url = `${API_HOST}/users/update/${user.id}`;

  const request = new Request(url, {
    method: "post",
    body: JSON.stringify({
      visionName: visionName,
      visionLink: visionLink,
      reflectionQuestionsLink: reflectionQuestionsLink,
      positions: positions,
      status: status,
    }),
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
  });

  fetch(request)
    .then((res) => {
      if (res.status === 200) {
        return res.json();
      } else {
        return res.text();
      }
    })
    .then((res) => {
      if (typeof res === "object") {
        page.setState({
          user: res,
        });
        getAllUsers(page);
      } else {
        // errorToast(res);
        return;
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

export const createUser = (googleUser, page) => {
  const url = `${API_HOST}/users/register`;

  const request = new Request(url, {
    method: "post",
    body: JSON.stringify({
      id: googleUser.sub,
      name: googleUser.name,
      position: [],
      picture: googleUser.picture,
      nominationLink: `${ENV.client_host}/nominations?id=${googleUser.sub}`,
    }),
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
  });

  fetch(request)
    .then((res) => {
      if (res.status === 200) {
        return res.json();
      } else {
        return res.text();
      }
    })
    .then((res) => {
      if (typeof res === "object") {
        page.setState({
          user: res,
        });
      } else {
        return;
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

export const checkUserProfile = (
  user,
  position,
  status,
  visionName,
  visionLink,
  reflectionQuestionsLink,
  page
) => {
  let ready = true;
  // Checks status
  switch (status) {
    case STATUS.DECIDED:
      if (position === undefined || position.length !== 1) {
        ready = false;
        errorToast("Please select only one position");
      }
      if (
        (visionName.length === 0 && visionLink.length !== 0) ||
        (visionName.length !== 0 && visionLink.length === 0)
      ) {
        ready = false;
        errorToast("Please enter both a vision name and link");
      }
      break;
    case STATUS.CONSIDERING:
      if (position === undefined || position.length === 0) {
        ready = false;
        errorToast("Please select a position");
      }
      break;
    default:
      break;
  }
  if (ready) {
    updateVisionAndPositions(
      user,
      visionName,
      visionLink,
      reflectionQuestionsLink,
      position,
      status,
      page
    );
  }
};

export const uploadNomination = (nominee, user, nominationText, nominationType) => {
  const url = `${API_HOST}/users/nomination/${nominee.id}`;
  const request = new Request(url, {
    method: "post",
    body: JSON.stringify({
      nomination: nominationText,
      nominator: user.name,
      nominatorID: user.id,
      nominationType: nominationType,
    }),
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
  });

  fetch(request)
    .then((res) => {
      if (res.status === 200) {
        return res.json();
      } else {
        return res.text();
      }
    })
    .then((res) => {
      if (typeof res === "object") {
        return;
      } else {
        errorToast(res);
        return;
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

export const deleteNomination = (nominee, user, nominationType) => {
    //TODO
}

export const updateGeneralInfo = (
  user,
  program,
  year,
  church,
  yearsInChurch,
  yearsFollowingChrist,
  yearsInCCF,
  page
) => {
  const url = `${API_HOST}/users/generalInfo/${user.id}`;

  console.log(yearsInChurch);

  const request = new Request(url, {
    method: "post",
    body: JSON.stringify({
      program: program,
      year: year,
      church: church,
      yearsInChurch: yearsInChurch,
      yearsFollowingChrist: yearsFollowingChrist,
      yearsInCCF: yearsInCCF,
    }),
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
  });

  fetch(request)
    .then((res) => {
      if (res.status === 200) {
        return res.json();
      } else {
        return res.text();
      }
    })
    .then((res) => {
      if (typeof res === "object") {
        page.setState({
          user: res,
        });
        return;
      } else {
        // errorToast(res);
        return;
      }
    })
    .catch((err) => {
      console.log(err);
    });
};
