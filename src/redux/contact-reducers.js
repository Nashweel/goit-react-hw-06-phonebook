import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import actions from "./contact-actions";

const itemReducer = createReducer([], {
  [actions.addContact]: (state, { payload }) => [...state, { ...payload }],
  [actions.deleteContact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filterReducer = createReducer("", {
  [actions.filter]: (_, { payload }) => payload,
});

export default combineReducers({
  items: itemReducer,
  filter: filterReducer,
});
