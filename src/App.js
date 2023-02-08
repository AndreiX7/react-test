import React, { Component } from 'react';
import NavBar from './components/NavBar';
import Form from './components/Form';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import moment from 'moment';

class App extends Component {
  state = {
    data: []
  }

  updateData = (data) => {
    this.setState({ data: [...this.state.data, {
      name: data.name,
      dob: data.dob,
      email: data.email,
      contact: data.contact,
      intro: data.intro,
    }] })
  }

  render() {
    return (
      <div>
        <NavBar />
        <Form setData={this.updateData}/>
        {
          this.state.data.map((d) => {
            return (
              <div style={{ display: 'flex', margin: 16 }}>
                <Card sx={{ maxWidth: 275 }}>
                  <CardContent>
                    <div>Name: {d.name}</div>
                    <div>Date of Birth: {moment(d.dob).format("MM/DD/YYYY")}</div>
                    <div>Email: {d.email}</div>
                    <div>Contact: {d.contact}</div>
                    <div>Intro: {d.intro}</div>
                  </CardContent>
                </Card>
              </div>
            )
          })
        }
        
      </div>
    );
  }
}

export default App;

/* Week 1 Task 3 
Create a webpage using ReactJs

Create a Navbar (add home, about us, contact menu) (material UI)

Create a form that will take following input from the user:

Name, Date of birth, Email Id, Contact Number, Tell me about yourself

Display user input in a card just below the form(when a form is submitted).

Add Styling

Add following validation:

All fields are mandatory

Name: should contain alphabets only

Contact: length should be 10, should only include digits

Email: Add Email validation

DOB: can’t be greater than today’s date

Apart from above mentioned validation, you can include other validations as well.

Follow below steps

§ Create a form

§ Create a state.

§ Add event handler

§ Add validation

§ pass data to parent

§ Display the data
*/