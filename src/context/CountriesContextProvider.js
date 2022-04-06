import React,{createContext,useEffect,useState} from 'react';
import { getCountry } from '../services/api';

//context
export const CountriesContext=createContext();


const CountriesContextProvider=({children})=> {
 const [countries,setCountries]=useState([]);
 const [loading, setLoading] = useState(true)
 const [error, setError] = useState('')

  
 useEffect(()=>{
    const fetchApi = async()=>{
      setLoading(true);
      try {
        const data = await getCountry()
        setCountries(data)
      } catch (error) {
        setError(error.response?.data.message)
      } finally {
        setLoading(false)
      }
      // setCountries(await getCountry())
    }
    fetchApi();
 },[])

  return (
    <CountriesContext.Provider value={{countries,loading,error}}>
      {children}
    </CountriesContext.Provider>
    
  )
}

export default CountriesContextProvider;