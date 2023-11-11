import { blue, purple } from '@mui/material/colors';
import {createTheme} from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#123123',
        },
        secondary: {
            main: blue[800],
        }
    },
    typography: {
        fontFamily: [
            "-apple-system, Roboto, sans-serif, serif"
        ].join(','),
        fontSize: 16,
        }
});
export default theme;