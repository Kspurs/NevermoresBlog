import {createTheme} from '@mui/material/styles';
const theme = createTheme({
    palette: {
        primary: {
            main: '#000000',
        },
        secondary: {
            main: '#3f51b5',
        },
    },
    typography: {
        fontFamily: [
            "-apple-system, Roboto, sans-serif, serif"
        ].join(','),
        fontSize: 16,

    },
});
export default theme;