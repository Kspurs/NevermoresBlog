import React from 'react';
import { AppBar, Toolbar, Typography, TextField } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import theme from '../components/theme';

const Appbar = () => {
    return (
    <ThemeProvider theme={theme}>
        <AppBar sx={{   }}>
            <Toolbar sx={{ }}>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 ,fontSize:'14px'}}>
                    Nevermore's Blog
                </Typography>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Blogs
                </Typography>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Projects
                </Typography>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Research
                </Typography>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    About
                </Typography>
                <TextField label="Search" variant="standard" sx={{ flexGrow: 1 }} />
            </Toolbar>
        </AppBar>
    </ThemeProvider>
    );
};  

export default Appbar;
