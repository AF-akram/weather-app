import { createContext , useContext, useState} from "react";
const cityContext = createContext();
export  function CityProvider({ children }) {
    const [city, setCity] = useState("Rabat")
    return (
        <cityContext.Provider value={{city, setCity}}>
            {children}
        </cityContext.Provider>   
    )
}
export const useCity = () => {
        return useContext(cityContext)
    }