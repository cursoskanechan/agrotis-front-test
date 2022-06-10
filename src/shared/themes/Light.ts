import { createTheme } from "@mui/material";


export const LightTheme = createTheme({
    palette: {
        primary: {
            main: '#00796b',
            dark: '#00a98e',
            contrastText: '#ffffff'
        },
        background: {
            paper: '#f3f2f1',
            default: '#8f979c',
        },
    }
})