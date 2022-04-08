import React,{useContext} from 'react';
import {Link, useParams} from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import "./styles/countryDetail.scss";
//context
import { CountriesContext } from '../context/CountriesContextProvider';
import { ThemeContext } from '../context/ThemeContextProvider';
import Borders from './Borders';


function CountryDetails(props) {
    const params=useParams();
    const alpha2Code=params.alpha2Code.toLowerCase();
    // console.log(countryName)
    const {countries,loading} = useContext(CountriesContext);
    // console.log(countries);
    //console.log(loading);
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
         <div className={`container ${darkMode ? "container-dark" : "container-light"}`}>
           <img src={country.flag} alt="flag"/>
         </div>
         <div className={`container ${darkMode ? "container-dark" : "container-light"}`}>
          <h2>{country.name}</h2>
           <p>Native Name:{country.nativeName}</p>
           <p>Population: {country.population}</p>
           <p>Region: {country.region}</p>
           <p>Sub Region:{country.subregion}</p>
           <p>Capital: {country.capital}</p>
           <div className={`borderContainer ${darkMode ? "borderContainer-dark" : "borderContainer-light"}`}>
           {country.borders  && country?.borders.length > 0 && <div>Border Countries : {country?.borders.map( arr => <Borders key={arr} borders={arr}/>)}</div>}
         </div>
         </div>
         <div className={`container ${darkMode ? "container-dark" : "container-light"}`}>
           <p>Top Level Domain: {country.topLevelDomain}</p>
           <p>Currencies:{country.currencies[0].name}</p>
           <p>Language: {country.languages[0].name}</p>
         </div>
         
         
         </div>
      </div>
   
  )
}

export default CountryDetails;