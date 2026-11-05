import Typography from '@mui/material/Typography';
import moment from 'moment';
import { useCity } from './CityContext';
import axios from "axios"
import { useEffect, useState } from 'react';
export default function MyCard() {
    const { city } = useCity()
    const [place, setPlace] = useState({
        lat: 34.01325,
        lon:-6.83255
    })
    const [info, setInfo] = useState({
        temp: 13,
        min: 13,
        max: 13,
        desc: "couds",
        icon:"04n"
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        // https://nominatim.openstreetmap.org/search?q=${city}&format=json
            axios
        .get(`https://nominatim.openstreetmap.org/search?q=${city}&format=json&featureType:settlement`, {
            headers: {
            "User-Agent": "weatherApp",
            },
        })
        .then((response) => {
            console.log(response.data);
            let lat = response.data[0].lat
            let lon = response.data[0].lon
            setPlace({lat,lon})
        })
        .catch((error) => {
            console.error(error);
        })
            .finally(() => {
            
            console.log("Request completed");
            console.log(place)
        });
    }, [city]); // eslint-disable-next-line react-hooks/exhaustive-deps
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        // `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=e5ad1c9275ce8ab7969f04289581296a`
        // key : e5ad1c9275ce8ab7969f04289581296a
        axios
            .get(`https://api.openweathermap.org/data/2.5/weather?lat=${place.lat}&lon=${place.lon}&appid=e5ad1c9275ce8ab7969f04289581296a`)
  .then((response) => {
      console.log(response.data);
      const temp = Math.round(response.data.main.temp - 273.15)
      const min = Math.round(response.data.main.temp_min - 273.15)
      const max = Math.round(response.data.main.temp_max - 273.15)
      const desc = response.data.weather[0].description
      const icon = response.data.weather[0].icon
      setInfo({temp,min,max,desc,icon})
  })
  .catch((error) => {
    console.error(error);
  })
  .finally(() => {
    console.log("Request completed");
  });
    },[city])

    return (
        <div>
            {/* date & city & time */} 
            <div style={
                {
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems:"center"
                }
            }>
                <Typography variant="h4" gutterBottom style={{
                    margin: "10px",
                    color:"beige"
                }}>
                        {city}
                </Typography>
                <Typography style={{
                    margin: "10px",
                    color:"beige"
                }} variant="h6" gutterBottom>
                       {moment().format('MMMM Do YYYY, h:mm')}
                </Typography>
            </div>
            {/* end of city */}
            <hr />
            {/* info */}
            <div>
                {/* container */}
                <div>
            {/* degree & description */}
                    <div style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        margin:"10px 0"
            }}>
                        <Typography style={{
                    margin:"5px"
                }} variant="h5" gutterBottom>
                        {info.temp}°C
                </Typography>
                        <Typography style={{
                    margin:"5px"
                }} variant="h4" gutterBottom>
                        {info.desc}
                </Typography>
            </div>
                    {/* end of degree */}
                    {/* min & max */}
                    <div style={{
                        display: "flex",
                        justifyContent: "space-around",
                        alignItems:"center"
                    }}>
                        <Typography variant="h6" gutterBottom>
                                min: {info.min}°C
                        </Typography>
                        <Typography style={{
                             color:"white"
                         }} variant="h6" gutterBottom>
                                |
                        </Typography>
                        <Typography variant="h6" gutterBottom>
                                max: {info.max}°C
                        </Typography>
                    </div>
                    {/* icon */}
                    <div style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems:"center"
                    }}>
                        {/* <h1>icon</h1> */}
                        <img  src={`https://openweathermap.org/img/wn/${info.icon}%402x.png`} alt='weather condition'/>
                    </div>
            </div>
            </div>
            {/* end info */}
            </div>
    )
}