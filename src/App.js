import './App.css';
import CountriesContextProvider from "./context/CountriesContextProvider";
import {Routes,Route} from "react-router-dom";
import Countries from "./components/Countries"
import CountryDetails from './components/CountryDetails';
import ThemeContextProvider from './context/ThemeContextProvider';
import Navbar from './components/Navbar';


function App() {
  return (
    <div className="App">
     <CountriesContextProvider>
       <ThemeContextProvider>
         <Navbar/>
         <Routes>
           <Route path='/countries/:alpha2Code' element={<CountryDetails/>}/>
           <Route path='/countries' element={<Countries/>}/>
           <Route path='/' element={<Countries/>}/>
         </Routes>
         </ThemeContextProvider>
     </CountriesContextProvider>
    </div>
  );
}

export default App;
