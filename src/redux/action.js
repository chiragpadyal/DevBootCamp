import { encode } from "base-64";

export const userPostFetch = (user) => {
  return (dispatch) => {
    return fetch("/login", {
      method: "post",
      headers: new Headers({
        Authorization: "Basic " + encode(user.username + ":" + user.password),
      }),
    })
      .then((r) => r.json())
      .then((token) => {
        if (token.token) {
          localStorage.setItem("token", token);
          dispatch(loginUser(token));
        } else {
          console.log("Please type in correct username/password");
        }
      });
  };
};

const loginUser = (userObj) => ({
  type: "LOGIN_USER",
  payload: userObj,
});
