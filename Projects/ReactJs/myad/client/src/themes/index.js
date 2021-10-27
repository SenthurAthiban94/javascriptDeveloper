import React,{useState, createContext} from 'react';

export const ThemeContext = createContext();
export default ({children})=>{
    const [theme, setTheme] = useState("advertiser");
    const defaultContext = {
        theme,
        setTheme,
    };
    return <ThemeContext.Provider value={defaultContext}>
        {children}
    </ThemeContext.Provider>
}