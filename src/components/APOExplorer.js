import React, { useEffect, useState } from "react";
import axios from "axios";
import DateSelection from "./DateSelection";
import APODCard from "./APODCard";
import APODAppBar from "./APODAppBar";
import { Container } from "@mui/material";

const APODExplorer = () => {
  const [loading, setLoading] = useState(true);
  const [apodData, setApodData] = useState(null);
  const [error, setError] = useState("");
  const [selectedDate, setSelectedDate] = useState("");

  const apodURL = "https://api.nasa.gov/planetary/apod";
  const key = "bt8G2TwjWeSpudRpzt0ma8kgqGkiaVxlYuen574L";

  //Run the side-effect to fetch the APOD image from the NASA
  //Server. The side-effect depends on the "selecteDate" because
  //every time the date changes, a new image must be fetched
  useEffect(() => {
    //Use axios to make a HTTP Get Call to the NASA API
    //Pass in the api_key and date parameters required by the API
    axios
      .get(apodURL, {
        params: {
          api_key: key,
          date: selectedDate,
        },
      })
      .then((response) => {
        //HTTP GET was successful.
        //Set Loading to false, apodData to the data received and error to ''
        setLoading(false);
        setApodData(response.data);
        setError("");
      })
      .catch((error) => {
        //HTTP GET failed
        //Set Loading to false, apodData = {} and error to the error returned by the
        //NASA server
        setLoading(false);
        setApodData(null);
        setError(`An error occurred: ${error.message}`);
      });
  }, [selectedDate]);

  //Function to pass to the DateSelection component.
  //This gets invoked when that component detects that
  //the date has been selected and it passes the selected
  //date to this component
  const dateSelected = (selectedDate) => {
    console.log(`Selected date: ${selectedDate}`);
    //set the date state
    setSelectedDate(selectedDate);
  };

  return (
    <React.Fragment>
      <APODAppBar />
      <Container sx={{ width: "50%" }}>
        <DateSelection onDateSelected={dateSelected} />
        {/* Use Loading, data and error states conditionally */}
        {loading && <h3>Loading the image....</h3>}
        {apodData && <APODCard cardData={apodData} />}
        {error && <h3>{error}</h3>}
      </Container>
    </React.Fragment>
  );
};

export default APODExplorer;
