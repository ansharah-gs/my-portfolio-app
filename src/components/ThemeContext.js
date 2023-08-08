import React, { useState } from "react";
import { createContext } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("light-mode");

    const toggleTheme = () => {
        setTheme (theme === "light-mode"? "dark-mode" : "light-mode");
    };
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
export { ThemeContext, ThemeProvider };