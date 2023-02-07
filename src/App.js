import React, { Component } from 'react';
import data from './data';

class App extends Component {

  // Mouse hover event
  handleMouseOver(employeeData) {
    alert(`
      Employee name: ${employeeData.name}
      Employee age: ${employeeData.age}
      Employee date of birth: ${employeeData.dob}
      Employee salary: ${employeeData.salary}
      Employee designation: ${employeeData.designation}
      Employee image: ${employeeData.image}
      Employee department: ${employeeData.department}
    `)
  }

  render() {
    return (
      <div>
        {data.employees.map((d, index) => {
          return (
            <div style={{ margin: 16 }} key={d.name}>
              <div style={{ display: 'flex' }}>
                <div>
                  <img style={{ height: 128, width: 128 }} src={d.image} alt={d.name} />
                </div>
                <div style={{ margin: 16 }}>
                  <div style={{ fontSize: 48, width: "fit-content" }} onMouseEnter={() => this.handleMouseOver(d)}>
                    {d.name}
                  </div>
                  <div style={{ fontSize: 32 }}>
                    Designation: {d.designation}
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    );
  }
}

export default App;

/* Task:
  Create employee data in a data.js file and include following fields (name, age, DOB, salary, designation, image, department).
  Display name, image, designation in UI. Whenever user hover over any name, display complete employee data in alert/modal.
*/