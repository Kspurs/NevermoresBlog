import { blue, purple } from '@mui/material/colors';
import {createTheme} from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#000000',
        },
        secondary: {
            main: '#ffffff',
        },
        info:{
            main:blue[500],
        }
    },
    typography: {
        fontFamily: [
            "-apple-system, Roboto, sans-serif, serif"
        ].join(','),
        fontSize: 16,
        },
    
});
export default theme;