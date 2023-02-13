import React, { useEffect, useState } from 'react';
import { Box, Button, TextField } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import _ from 'lodash';

const fields = [
  { id: "name", name: "Name", type: "oneliner", validation: (/^[A-Za-z]+$/) },
  { id: "dob", name: "Date of Birth", type: "date", validation: '' },
  { id: "email", name: "Email", type: "oneliner", validation: (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/) },
  { id: "contact", name: "Contact Number", type: "oneliner", validation: (/^\d{10}$/) },
  { id: "intro", name: "Tell me about yourself", type: "multiline", validation: (/^.{1,255}$/) },
];

function App(props) {
  const [dob, setDob] = useState()
  const [data, setData] = useState()

  function runValidation() {
    let passedValidation = true;
    fields.map((field) => {
      const fIndex = _.findIndex(fields, { id: field.id });
      if (((field.validation && !field.validation.test(data && data[field.id])) || (data && data[field.id] === undefined)) && field.type !== "date") {
        passedValidation = false;
        fields[fIndex].error = true;
      } else {
        if (field.type !== "date") fields[fIndex].error = false;
        else {
          const dateNow = new Date(Date.now())
          const selectedDate = new Date(data[field.id]);
          if (selectedDate > dateNow) {
            passedValidation = false;
            fields[fIndex].error = true;
          }
        }
      }
      return true;
    });
    setData({ tick: data.tick + 1 })
    if (!passedValidation) alert("Validation failed")
    else setData(data)
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', maxWidth: '20%', margin: 12 }}>
      <Box
        component="form"
        sx={{ '& > :not(style)': { m: 1, width: '19ch' } }}
        noValidate
        autoComplete="off">
        {
          fields.map((field) => {
            if (field.type === "date") {
              return (
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DateTimePicker
                    label={field.name}
                    error={field.error}
                    type="date"
                    value={dob}
                    inputFormat="MM/DD/YYYY"
                    views={['year', 'month', 'day']}
                    onChange={(newValue) => setDob(newValue.$d)}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>
              )
            }
            return (
              <div style={{ marginBottom: 12 }}>
                <TextField
                  id={field.id}
                  label={field.name}
                  error={field.error}
                  variant="outlined"
                  onChange={(e) => {
                    setData({
                      ...data, [field.id]: e.target.value
                    })
                  }} />
              </div>
            )
          })
        }
      </Box>
      <Button variant="contained" onClick={() => runValidation()}>Submit</Button>
    </div>
  );
}


export default App;