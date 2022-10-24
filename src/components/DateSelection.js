import React, { useState } from "react";
import { Paper, Typography, Stack } from "@mui/material";

const DateSelection = ({ onDateSelected }) => {
  //State for storing the selected date
  const [date, setDate] = useState(Date.now().toLocaleString());

  //Event handler when the date gets picked up
  const datePicked = (e) => {
    //set the state and then invoke the callback function
    //to send the date selected
    setDate(e.target.value);

    //Invoke the callback
    onDateSelected(e.target.value);
  };

  return (
    <Paper elevation={3} sx={{ m: 2 }}>
      <Stack
        direction="row"
        spacing={2}
        sx={{ justifyContent: "center", alignItems: "center", p: 4 }}
      >
        <Typography variant="h6">Pick a Date: </Typography>
        {/* For simplicity, we're not using the MUI DatePicker */}
        <input
          type="date"
          value={date}
          onChange={datePicked}
          style={{
            borderRadius: "5px",
            padding: "10px",
            fontSize: "large",
          }}
        />
      </Stack>
    </Paper>
  );
};

export default DateSelection;
