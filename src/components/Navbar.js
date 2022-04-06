import React,{useContext} from 'react';
import { ThemeContext } from '../context/ThemeContextProvider';
import "./styles/navbar.scss";
import DarkModeIcon from '@mui/icons-material/DarkMode';
const Navbar=()=> {
    const Theme = useContext(ThemeContext);
    const darkMode = Theme.state.darkMode;
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