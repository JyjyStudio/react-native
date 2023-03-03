import React, { useState, createContext } from "react"
import { useColorScheme } from "react-native"

const ThemeContext = createContext({ isDark: false, setIsDark: null })
function ThemeContextProvider({ children }) {
	const isDarkMode = useColorScheme() === "dark"
	const [isDark, setIsDark] = useState(isDarkMode)
	return <ThemeContext.Provider value={{ isDark, setIsDark }}>{children}</ThemeContext.Provider>
}

export { ThemeContext, ThemeContextProvider }
