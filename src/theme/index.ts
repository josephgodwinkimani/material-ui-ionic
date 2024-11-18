import "@mui/lab/themeAugmentation";

import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// A custom theme for this app
const theme = createTheme({
    palette: {
        mode: "dark",
        primary: {
            main: '#556cd6',
        },
        background: {
            default: "#121212"
        },
        secondary: {
            main: '#19857b',
        },
        error: {
            main: red.A400,
        },
    },
});

export default theme;