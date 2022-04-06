import React,{useContext} from 'react';
import { CountriesContext } from '../context/CountriesContextProvider';
import { ThemeContext } from '../context/ThemeContextProvider';
import {Link, useParams} from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import "./styles/countryDetail.scss";

function CountryDetails(props) {
    const params=useParams();
    const alpha2Code=params.alpha2Code.toLowerCase();
    // console.log(countryName)
    const {countries,loading} = useContext(CountriesContext);
    // console.log(countries);
console.log(loading)
    const Theme = useContext(ThemeContext);
    const darkMode = Theme.state.darkMode;
      
    
    if (loading) {
      return <p>Loading...</p>;
    }
   
    const country = countries.find(item=> item.alpha2Code.toLowerCase() === alpha2Code);
    console.log(country.borders)

  return (
    <div className={`detailContainer ${darkMode ? "detailContainer-dark" : "detailContainer-light"}`}>
      <Link to="/countries" className={`backBtn ${darkMode ? "backBtn-dark" : "backBtn-light"}`}><ArrowBackIcon className='arrowIcon'/>Back</Link>
       <div className='detailWrapper'>
         <div>
           <img src={country.flag} alt="flag"/>
         </div>
         <div className={`detailDescription ${darkMode ? "detailDescription-dark" : "detailDescription-light"}`}>
         <h2>{country.name}</h2>
         <div className='wrapper'>
         <div>
           <p>Native Name: <span>{country.nativeName}</span></p>
           <p>Population: <span>{country.population}</span></p>
           <p>Region: <span>{country.region}</span></p>
           <p>Sub Region: <span>{country.subregion}</span></p>
           <p>Capital: <span>{country.capital}</span></p>
         </div>
         <div>
           <p>Top Level Domain: <span>{country.topLevelDomain}</span></p>
           <p>Currencies: <span>{country.currencies[0].name}</span></p>
           <p>Language: <span>{country.languages[0].name}</span></p>
         </div>
         </div>
         <div className={`border ${darkMode ? "border-dark" : "border-light"}`}>
           {country.borders  && country?.borders.length > 0 && <p>Border Countries : {country?.borders.map( arr => <span>{arr}</span>)}</p>}
         </div>
         </div>
       </div>
    </div>
  )
}

export default CountryDetails;