import { createContext, useMemo, useState } from "react";
import { Box, ThemeProvider } from "@mui/material";
import { LightTheme } from "./../themes";
import { red } from "@mui/material/colors";

interface IThemeContextData{
  themeName : 'light';
  children?: React.ReactNode;
}

const ThemeContext = createContext({} as IThemeContextData);

export const AppThemeProvider: React.FC<IThemeContextData> = ({ children }) => {
    const [themeName] = useState<'light'>('light');

    return (
        <ThemeContext.Provider value={{ themeName }}>
            <ThemeProvider theme={LightTheme}>
              <Box width="100vw" height="100vh" bgcolor={red}>
                {children}
              </Box>
            </ThemeProvider>
        </ThemeContext.Provider>
    );
}