import * as actions from "./ActionTypes";
import _ from 'lodash'

//central storage (state)
const initState = {
  employeeData: [{
    name: "Andrei",
    designation: "Developer",
  },
  {
    name: "Ands",
    designation: "Designer",
  }]
};

const reducer = (state = initState, action) => {
  
  switch (action.type) {
    case actions.UPDATE: 
      const { index, key, value } = action.payload;
      const newState = state.employeeData;
      newState[index][key] = value;
      return { employeeData: [...newState]};
    default:
      return state;
  }
};

export default reducer;