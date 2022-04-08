import React,{useContext} from 'react';
import "./styles/navbar.scss";
import DarkModeIcon from '@mui/icons-material/DarkMode';
//context
import { ThemeContext } from '../context/ThemeContextProvider';


const Navbar=()=> {
  //context
    const Theme = useContext(ThemeContext);
    const darkMode = Theme.state.darkMode;
    //darkMode handler
    const DarkModeHandler = () => {
    if (darkMode)
      Theme.dispatch({ type: "LIGHT_MODE" });
    else
      Theme.dispatch({ type: "DARK_MODE" });
  };
  return (
    <div className={`navbar ${darkMode ? "navbar-dark" : "navbar-light"}`}>
        <div>
          <h2>Where in the World?</h2>
        </div>
        <div>
            <button onClick={DarkModeHandler}><DarkModeIcon className='darkModeIcon'/>Dark Mode</button>
        </div>
    </div>
  )
}

export default Navbar