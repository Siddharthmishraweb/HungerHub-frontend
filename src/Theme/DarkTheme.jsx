import { createTheme } from "@mui/material";

export const darkTheme = createTheme({
    palette: {
        mode: "dark",
        primary:{
            // main: "#e91e63",
            main: "#E2293F"
        },
        secondary: {
            main: "#5A20CB"
        },
        black: {
            main: "black"
        },
        background: {
            // main: "#0000000"
            main: "black",
            // default: "#0D0D0D"
            default: "black",
            paper: "black"
        },
        textColor: {
            main: "#111111"
        }
    }
});