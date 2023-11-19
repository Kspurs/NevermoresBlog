import React from 'react';
import { AppBar, Toolbar, Typography, TextField, Box, Button, Paper, Dialog } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import theme from '../components/theme';
import { blue } from '@mui/material/colors';
import { StaticImage } from 'gatsby-plugin-image';
import { Link, navigate } from 'gatsby';
import SearchIcon from '@mui/icons-material/Search';

interface AppbarProps {
    location:string;
}
const Appbar:React.FC<AppbarProps>= ({location}) => {
    const pages=[{name:'Blog',link:'/blog/'},{name:'Project',link:'/project/'},{name:'Research',link:'/research/'},{name:'About',link:'/about/'}]
    const [open,setOpen]=React.useState(false);
    return (
    <ThemeProvider theme={theme}>
        <AppBar color='secondary' sx={{position:'sticky'}} elevation={1}>
            <Toolbar sx={{ }}>
                <Box display={'flex'}>
                <Box display={'flex'} width={'min-content'}>
                        <StaticImage src='../images/logo.png' alt='' style={{width:'40px',height:'40px'}}></StaticImage>

                        <Typography sx={{fontWeight:'700',position:'relative',top:'5px'}}>Nevermore</Typography>
                </Box>
                    <Box display={'flex'} marginLeft={'30px'} justifyContent={'space-around'} maxWidth={'400px'}>
                        {pages.map((page)=>(
                            <Box key={page.name} width={'min-content'} sx={{backgroundColor:location===page.link?'#b3e5fc':'#ffffff', textAlign:'center',borderRadius:'20px',marginRight:'10px'}}>
                                <Button  sx={{width:'100%',borderRadius:'20px',height:'100%'}} onClick={()=>{
                                    navigate(page.link);
                                }}>
                                    <Typography key={page.name} sx={{color:location===page.link? '#0288d1':'primary'}} fontWeight={'600'} fontSize={'15px'}>
                                        {page.name}
                                    </Typography>
                                </Button>
                            </Box>
                            ))}
                    </Box>
                <Box ml='800px'>
                    <SearchIcon color='info' sx={{position:'relative', top:'10px'}}></SearchIcon>
                    <Button color='info' variant='outlined' onClick={()=>setOpen(true)}>Search</Button>
                </Box>
                <Box sx={{height:'100vh',opacity:'1',backdropFilter:'blur(4px)'}} position={'fixed'} width={'100vw'} display={open?'block':'none'}>
                    <Dialog open={open} onClose={()=>setOpen(false)} PaperProps={{sx:{height:'70vh',width:'100vw'}}}>
                        <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} height={'100vh'}>
                            <TextField sx={{width:'500px'}}></TextField>
                        </Box>
                    </Dialog>

                </Box>
                </Box>
            </Toolbar>
        </AppBar>
    </ThemeProvider>
    );
};  

export default Appbar;
