import React,{useContext} from 'react';
import {ThemeContext} from "../context/ThemeContextProvider";
import "./styles/borders.scss";

function Borders({borders}) {

    const Theme = useContext(ThemeContext);
    const darkMode = Theme.state.darkMode;
  return (

      <span className={`border ${darkMode ? "border-dark" : "border-light"}`}>{borders}</span>
    
  )
}

export default Borders;