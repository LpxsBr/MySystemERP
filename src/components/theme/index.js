import { createContext, useContext, useEffect, useState } from "react";

export const ThemeContext = createContext("")

export default function Theme({ children }) {

    const [theme, setTheme] = useState()

    console.log(theme);
    
    return (
        <div >
            <ThemeContext.Provider value={{ theme, setTheme }}>
                {children}
            </ThemeContext.Provider>
        </div>
    )
}