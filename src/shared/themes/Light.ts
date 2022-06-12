import { createTheme } from "@mui/material";


export const LightTheme = createTheme({
    palette: {
        primary: {
            main: '#ffffff',
            dark: '#00a98e',
            contrastText: '#00796b'
        },
        background: {
            paper: '#f3f2f1',
            default: '#8f979c',
        },
    }
})