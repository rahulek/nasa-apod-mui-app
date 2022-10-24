import React from "react";
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
      <APODCard cardData={data} />
    </Container>
  );
};

export default APODExplorer;
