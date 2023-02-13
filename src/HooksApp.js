import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { onUpdateData } from './redux/Actions';

const HooksApp = () => {
  const employeeData = useSelector((state) => state.employeeData);
  const dispatch = useDispatch();

  const updateData = () => {
    dispatch(onUpdateData({
      index: 1,
      key: "designation",
      value: "Developer"
    }));
  };
  return (
    <div>
      <div style={{ fontSize: 48 }}>View from Function-based component</div>
      {employeeData.map((employee) => {
        return (<>
          <p>Name: {employee.name}</p>
          <p>Designation: {employee.designation}</p>
        </>)
      })}
      <button onClick={updateData}>
        Update via Function-based (this will update the designation of the first employee to "Developer")
      </button>
    </div>
  );
};

export default HooksApp;