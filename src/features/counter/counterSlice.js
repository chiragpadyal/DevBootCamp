import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    currentUser: {},
  },
  reducers: {
    login: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.currentUser = action.payload;
    },
  },
});

export const { login } = counterSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched

// export const incrementAsync = (amount) => (dispatch) => {
//   setTimeout(() => {
//     dispatch(incrementByAmount(amount));
//   }, 1000);
// };

import { encode } from "base-64";

export const userLoginFetch = (user) => (dispatch) => {
  return fetch("/login", {
    method: "post",
    headers: new Headers({
      Authorization: "Basic " + encode(user.username + ":" + user.password),
    }),
  })
    .then((r) => {
      if (r.ok) {
        return r.json();
      }
      throw new Error("Something went wrong");
    })
    .then((token) => {
      if (token.token) {
        console.log(token.data);
        localStorage.setItem("token", token);
        dispatch(login({ name: token.data }));
      } else {
        console.log("Please type in correct username/password");
      }
    })
    .catch((error) => {
      console.log(error);
    });
};

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectCount = (state) => state.counter.currentUser;

export default counterSlice.reducer;
