import ThermostatIcon from '@mui/icons-material/Thermostat';
import { useCity } from './CityContext';
import { useState } from 'react';
export default function MyInput() {
    const {setCity } = useCity()
    const [Input, setInput] = useState("")
    function handleChangeInput(text) {
        setInput(text.target.value)
    }
    function handleChangeCity() {
        setCity(Input)
        setInput("")
    }
    return (
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}} >
          <input value={Input} type='text' placeholder='Please type a city' style={{
            background: "white",
            borderRadius: "10px",
            border: "1px black solid",
            color: "white",
            width: "304px",
            padding:"10px"
            }}
                onChange={handleChangeInput}
            />
          <button style={{
            background: "#6f77c0",
            border: "none",
            borderRadius: "20px",
            marginLeft:"5px"
            }}
            onClick={handleChangeCity}
            >
            <ThermostatIcon />
          </button>
      </div>
    )
}