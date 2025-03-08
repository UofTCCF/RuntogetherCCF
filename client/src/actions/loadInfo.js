import { errorToast } from "./toastify";
import ENV from "./../config";
import { createUser } from "./updateUsers";

const API_HOST = ENV.api_host;

export const getAllUsers = (page) => {
  const url = `${API_HOST}/users/`;

  const request = new Request(url, {
    method: "get",
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
          candidates: res,
        });
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

export const getUser = (user, page) => {
  const url = `${API_HOST}/users/user/${user}`;

  const request = new Request(url, {
    method: "get",
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
          nominee: res,
        });
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

export const getProfilePic = (userID) => {
  const url = `${API_HOST}/users/pictures/file/${userID}`;

  return fetch(url)
    .then((res) => {
      if (res.ok) {
        return res.blob();
      } else {
        return res.text();  // This returns error messages in text form
      }
    })
    .then((blob) => {
      // Check if the response is actually a Blob
      if (blob instanceof Blob) {
        const imageUrl = URL.createObjectURL(blob);
        return imageUrl;
      } else {
        console.error(blob);
        throw new Error("Failed to fetch image as Blob");
      }
    })
    .catch((err) => {
      console.error("Error fetching image:", err);
      return null;
    });
}

export const login = (user, page) => {
  const googleID = user.sub;

  const url = `${API_HOST}/users/user/${googleID}`;

  const request = new Request(url, {
    method: "get",
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
        createUser(user, page);
        return;
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

export const adminLogin = (page) => {
  // Hard code to Neo Lou's id
  const url = `${API_HOST}/users/user/113766403572883493256`;

  const request = new Request(url, {
    method: "get",
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
        return;
      }
    })
    .catch((err) => {
      console.log(err);
    });
};
