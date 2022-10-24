import React from "react";
import DateSelection from "./DateSelection";
import { Container } from "@mui/material";

const APODExplorer = () => {
  //Function to pass to the DateSelection component.
  //This gets invoked when that component detects that
  //the date has been selected and it passes the selected
  //date to this component
  const dateSelected = (selectedDate) => {
    console.log(`Selected date: ${selectedDate}`);
  };

  return (
    <Container sx={{ width: "50%" }}>
      <DateSelection onDateSelected={dateSelected} />
    </Container>
  );
};

export default APODExplorer;
