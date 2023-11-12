import React from 'react';
import { AppBar, Toolbar, Typography, TextField, Box, Button } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import theme from '../components/theme';
import { blue } from '@mui/material/colors';
import { StaticImage } from 'gatsby-plugin-image';
import { Link, navigate } from 'gatsby';

interface AppbarProps {
    location:string;
}
const Appbar:React.FC<AppbarProps>= ({location}) => {
    const pages=[{name:'Blog',link:'/blog/'},{name:'Project',link:'/project/'},{name:'Research',link:'/research/'},{name:'About',link:'/about/'}]
    
    return (
    <ThemeProvider theme={theme}>
        <AppBar color='secondary' sx={{}}>
            <Toolbar sx={{ }}>
                <Box display={'flex'}>
                <Box display={'flex'} width={'min-content'}>
                        <StaticImage src='../images/logo.png' alt='' style={{width:'40px',height:'40px'}}></StaticImage>

                        <Typography sx={{fontWeight:'700',position:'relative',top:'5px'}}>Nevermore</Typography>
                </Box>
                    <Box display={'flex'} marginLeft={'30px'} justifyContent={'space-evenly'} maxWidth={'600px'}>
                        {pages.map((page)=>(
                            <Box sx={{backgroundColor:location===page.link?'#b3e5fc':'#ffffff', textAlign:'center',borderRadius:'20px'}}>
                                <Button  sx={{width:'100%',borderRadius:'20px'}} onClick={()=>{
                                    navigate(page.link);
                                }}>
                                    <Typography key={page.name} color={location===page.link?"success":"primary"} fontWeight={'500'}>
                                        {page.name}
                                    </Typography>
                                </Button>
                            </Box>
                            ))}
                    </Box>
                </Box>
            </Toolbar>
        </AppBar>
    </ThemeProvider>
    );
};  

export default Appbar;
