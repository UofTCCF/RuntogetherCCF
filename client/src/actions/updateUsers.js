import { errorToast } from "./toastify";
import ENV from "./../config";
import { STATUS } from "../constants";
import { getAllUsers } from "./loadInfo";

const API_HOST = ENV.api_host;

const updateVisionAndPositions = (
  user,
  visionName,
  visionLink,
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
      position,
      status,
      page
    );
  }
};

export const uploadNomination = (nominee, user, nominationText) => {
  const url = `${API_HOST}/users/nomination/${nominee.id}`;

  const request = new Request(url, {
    method: "post",
    body: JSON.stringify({
      nomination: nominationText,
      nominator: user.name,
      nominatorID: user.id,
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

export const uploadProfilePic = (user, profilePic) => {
  if (profilePic === undefined || profilePic === null) {
    errorToast("Please upload a picture or choose default picture");
  }
  console.log("profilePic: ", profilePic);
  
  const { blob, name } = profilePic;
  
  const url = `${API_HOST}/users/pictures/${user.id}`;

  const formData = new FormData();
  formData.append("image", blob, name);

  const request = new Request(url, {
    method: "post",
    body: formData,
    headers: {
      Accept: "application/json, text/plain, */*",
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
        // errorToast(res);
        return;
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

export const updatePicChoice = (user, picChoice) => {
  const url = `${API_HOST}/users/picChoice/${user.id}`;

  const request = new Request(url, {
    method: "post",
    body: JSON.stringify({
      picChoice: picChoice,
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
}
