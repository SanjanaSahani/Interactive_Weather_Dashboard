import { useContext, createContext, useState, useEffect, } from "react";
import axios from "axios";

const StateContext = createContext()


export const StateContextProvider = ({ children }) => {
    const [weather, setWeather] = useState({})
    const [values, setValues] = useState([])
    const [place, setPlace] = useState('Gorakhpur')
    const [thislocation, setLocation] = useState('')


    // fetching Api 

    const FetchWeather = async () => {
        const options = {
            method: 'GET',
            url: 'https://visual-crossing-weather.p.rapidapi.com/forecast',
            params: {
                aggregateHours: '24',
                location: place,
                contentType: 'json',
                unitGroup: 'metric',
                shortColumnNames: 0
            },
            headers: {
                // 'X-RapidAPI-Key': import.meta.env.VITE_API_KEY, 
                'X-RapidAPI-Key': '3f1a8a63a2mshbbf4332fcdb5939p146771jsnec77f59066da',
                'X-RapidAPI-Host': 'visual-crossing-weather.p.rapidapi.com'
            }
        }
        try {
            const response = await axios.request(options);
            console.log(response.data);
            const thisData = Object.values(response.data.locations)[0]
            setLocation(thisData.address)
            setValues(thisData.values)
            setWeather(thisData.values[0])

        } catch (e) {
            console.error(e);
            alert('This place was not exist')
        }
    }

    useEffect(() => {
        FetchWeather()
    }, [place])

    useEffect(() => {
        console.log(values);

    }, [values])

    return (
        <StateContext.Provider value={{
            weather, setPlace, values, thislocation, place
        }}>
            {children}
        </StateContext.Provider>
    )

}

export const useStateContext = () => useContext(StateContext)