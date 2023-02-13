import * as actions from "./ActionTypes";

export const onUpdateData = (value) => {
  return {
    type: actions.UPDATE,
    payload: value,
  };
};