"use client"
import { createContext, useContext } from "react"

type Theme = {
  colors: {
    primary: string
    secondary: string
  }
  name: string
  func: (name: string) => string
}

const defaultTheme: Theme = {
  colors: {
    primary: "#007bff",
    secondary: "#6c757d"
  },
  name: "Ahni",
  func: (name: string) => { return `My name is ${name}` }
}

const ThemeContext = createContext<Theme>(defaultTheme)


export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    return (
     <ThemeContext.Provider value={defaultTheme}>
        {children}
     </ThemeContext.Provider>
    )
}

export const useTheme = () => useContext(ThemeContext)