import React, { useEffect, useState } from "react";
import axios from "axios";
import DateSelection from "./DateSelection";
import APODCard from "./APODCard";
import { Container } from "@mui/material";

const data = {
  copyright: "Jingyi Zhang",
  date: "2022-10-23",
  explanation:
    "What strange world is this? Earth. In the foreground of the featured image are the Pinnacles, unusual rock spires in Nambung National Park in Western Australia. Made of ancient sea shells (limestone), how these human-sized picturesque spires formed remains a topic of research.  The picturesque panorama was taken in 2017 September.   A ray of zodiacal light, sunlight reflected by dust grains orbiting between the planets in the Solar System, rises from the horizon near the image center. Arching across the top is the central band of our Milky Way Galaxy. The planets Jupiter and Saturn, as well as several famous stars are also visible in the background night sky.",
  hdurl:
    "https://apod.nasa.gov/apod/image/2210/ZodiacalPinnacles_Zhang_5026.jpg",
  media_type: "image",
  service_version: "v1",
  title: "Milky Way and Zodiacal Light over Australian Pinnacles",
  url: "https://apod.nasa.gov/apod/image/2210/ZodiacalPinnacles_Zhang_1080.jpg",
};

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
    <Container sx={{ width: "50%" }}>
      <DateSelection onDateSelected={dateSelected} />
      {/* Use Loading, data and error states conditionally */}
      {loading && <h3>Loading the image....</h3>}
      {apodData && <APODCard cardData={apodData} />}
      {error && <h3>{error}</h3>}
    </Container>
  );
};

export default APODExplorer;
