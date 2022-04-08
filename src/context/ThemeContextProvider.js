import React,{createContext,useReducer}from 'react';
//create context
export const ThemeContext = createContext();
//initial state
const initialState = { 
    darkMode: true,
 };
//reducer
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
  //use reducer
    const [state, dispatch] = useReducer(themeReducer, initialState);
  return (
    <ThemeContext.Provider value={{state,dispatch}}>
        {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContextProvider;