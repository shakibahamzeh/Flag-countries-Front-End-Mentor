import React,{useContext} from 'react';
import {Link} from "react-router-dom";
import "./styles/country.scss";
//context
import {ThemeContext} from "../context/ThemeContextProvider";

function Country({countryData}) {
  //context
    const Theme = useContext(ThemeContext);
    const darkMode = Theme.state.darkMode; 
 
  return (
    <div className={`countryWrapper ${darkMode ? "countryWrapper-dark" : "countryWrapper-light"}`}>
      <Link to={`/countries/${countryData.alpha2Code}`} >
        <img src={countryData.flag} alt="flag"/>
        <h3>{countryData.name}</h3>
        <p>Population: <span> {countryData.population}</span></p>
        <p>Region: <span> {countryData.region}</span></p>
        <p>Capital: <span> {countryData.capital}</span></p>
      </Link>
    </div>
    
  )
}

export default Country;