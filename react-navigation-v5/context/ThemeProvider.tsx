import React, { useState, useEffect, createContext } from "react"
import { useColorScheme } from "react-native"
import { lightColors, darkColors } from "../constants/colors"

const ThemeContext = createContext({
	isDark: false,
	colors: lightColors,
	setTheme: null,
})

function ThemeProvider({ children }) {
	const colorScheme = useColorScheme()
	const [isDark, setIsDark] = useState(colorScheme === "dark")

	useEffect(() => {
		setIsDark(colorScheme === "dark")
	}, [colorScheme])

	const defaultTheme = {
		isDark: isDark,
		colors: isDark ? darkColors : lightColors,
		setTheme: (theme: string) => setIsDark(theme === "dark"),
	}
	return <ThemeContext.Provider value={defaultTheme}>{children}</ThemeContext.Provider>
}

export { ThemeContext, ThemeProvider }
