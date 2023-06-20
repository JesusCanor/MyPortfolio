const lightTheme = {
    body: '#FFF',
    text: '#363537',
    toggleBorder: '#FFF',
    background: '#363537',
}
const darkTheme = {
    body: '#363537',
    text: '#FAFAFA',
    toggleBorder: '#6B8096',
    background: '#999',
}

export { lightTheme, darkTheme }


import { Theme, createTheme } from "@mui/material";

const theme: Theme = createTheme({
    palette: {
        primary: {
            main: "#00abff",
        },
    },
    // typography: {
    //     h1:_{
    //         fontSize: "6em",
    //     },
    // },
});

export { theme }