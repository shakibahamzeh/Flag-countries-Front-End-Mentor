import React,{useContext,useState} from 'react';
import "./styles/countries.scss";
import SearchIcon from '@mui/icons-material/Search';
import Country from './Country';


//context
import {CountriesContext} from "../context/CountriesContextProvider";
import { ThemeContext } from '../context/ThemeContextProvider';

const Countries=()=> {
  //context 
    const {countries} = useContext(CountriesContext);
    const Theme = useContext(ThemeContext);
    const darkMode = Theme.state.darkMode;
  // state
    const [search, setSearch] = useState("");
  //handler
    const changeHandler=(e)=>{
       setSearch(e.target.value); 
    }

  const searchCountry = countries.filter((country) =>
    country.name.toLowerCase().startsWith(search.toLowerCase()) || country.region.startsWith(search)
  );

  

  return (
    <div className={`container ${darkMode ? "container-dark" : "container-light"}`}>
 
     {/*form*/}
     <div className={`formContainer ${darkMode ? "formContainer-dark" : "formContainer-light"}`}>
      <form>
        <div className={`formControl ${darkMode ? "formControl-dark" : "formControl-light"}`}>
          <input type="text" onChange={changeHandler} placeholder="Search for a country" name="country"/>
          <SearchIcon className='searchIcon'/>
        </div>
        <div className={`formControl ${darkMode ? "formControl-dark" : "formControl-light"}`}>
           <select onChange={changeHandler}>
          <option value="">Filter By Region</option>
          <option value="Asia">Asia</option>
          <option value="Americas">Americas</option>
          <option value="Africa">Africa</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
        </div>
      </form>
    </div>
   
    <div className={`countryContainer ${darkMode ? "countryContainer-dark" : "countryContainer-light"}`}>
        {
            searchCountry.map(country => <Country key={country.name} countryData={country}/>)
        }
    </div>
    </div>
  )
}

export default Countries;