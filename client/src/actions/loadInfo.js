import { errorToast } from "./toastify";
import ENV from "./../config";
import { createUser } from "./updateUsers";

const API_HOST = ENV.api_host;

export const getAllUsers = (page) => {
  const url = `${API_HOST}/users/`;

  const request = new Request(url, {
    method: "get",
    mode: "cors",
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
