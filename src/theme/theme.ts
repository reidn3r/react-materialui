import { createTheme } from "@mui/material";

export const Theme = createTheme({

    /* Regra 60 - 30 - 10 */
    palette: {
        background: {
            default: "#131313",
            paper: "#191919"
        },
        primary: {
            main: "#131313",
            light: "#191919"
        },
        
        text: {
            primary: "#D45AFF",
            secondary: "#fff"
        }
    }
})