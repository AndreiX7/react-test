import React, { Component } from 'react';
import { connect } from "react-redux";
import HooksApp from './HooksApp';
import { onUpdateData } from './redux/Actions';

class App extends Component {
  
  updateData = () => {
    this.props.onUpdateData({
      index: 1,
      key: "designation",
      value: "Software Engineer"
    });
  };

  render() {
    return (
      <div style={{ textAlign: 'center', fontSize: 32 }}>
        <div style={{ fontSize: 48 }}>View from Class-based component</div>
        {
          this.props.employeeData.map((employee) => {
            return (<>
              <p>Name: {employee.name}</p>
              <p>Designation: {employee.designation}</p>
            </>)
          })
        }
        <br />
        <button onClick={() => this.updateData()}>
          Update via Class-based (this will update the designation of the first employee to "Software Engineer")
        </button>
        <HooksApp />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    employeeData: state.employeeData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onUpdateData: (value) => dispatch(onUpdateData(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);