import React,{createContext,useReducer}from 'react';

export const ThemeContext = createContext();
const initialState = { 
    darkMode: true,
 };

 const themeReducer = (state, action) => {
  switch (action.type) {
    case "LIGHT_MODE":
      return{darkMode: false};
    case "DARK_MODE":
      return{darkMode: true};
    default:
      return state;
  }
};
const ThemeContextProvider = ({children}) =>{
    const [state, dispatch] = useReducer(themeReducer, initialState);
  return (
    <ThemeContext.Provider value={{state,dispatch}}>
        {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContextProvider;