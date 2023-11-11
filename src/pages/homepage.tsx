import React, { useEffect, useState } from 'react';
import AppBar from '../components/appbar';
import { StaticImage } from 'gatsby-plugin-image';
import { Box, Button, ThemeProvider, Typography } from '@mui/material';
import theme from '../components/theme';
import { blue } from '@mui/material/colors';
import ChessPiece from '../components/chesspiece';
import { eventNames } from 'process';
import { navigate } from 'gatsby';
const HomePage: React.FC = () => {
    var sentence='Type CHECK To Continue';
    const [idx,setIdx]=useState(0);
    const letters=['c','h','e','c','k'];
    useEffect(()=>{
        const handleKeyDown=(event:KeyboardEvent)=>{
            console.log(event.key);
            if(event.key===letters[idx])
            {
                setIdx(idx+1);
            }
        }
        document.addEventListener('keydown', handleKeyDown);
    return ()=>document.removeEventListener('keydown',handleKeyDown);
},[idx])
    console.log(idx);
    if(idx==5)
    {   
        sentence='Enjoy!🎉🎉🎉'
        console.log('first');
        setInterval(()=>navigate('/'
        ),2000);
    }
    return (
        <div style={{ display: 'grid' }}>
            <StaticImage style={{ gridArea: "1/1", width: '100vw' }} src='../images/pexels-sebastian-voortman-411207.jpg' alt=''></StaticImage>
            <ThemeProvider theme={theme}>
                <Box sx={{ gridArea: "1/1", textAlign: 'center' }}> 
                        <Typography component={'div'} color='primary' sx={{ textAlign: 'center', position: "relative", top: '50px', fontSize: "80px", fontWeight: 'bold' }}>
                            Welcome To Nevermore's Blog!
                        </Typography>
                        <Box position={'relative'} top={'80px'} sx={{ backgroundColor:'#1565c0'}}>    
                            <Typography color={'white'} sx={{textAlign: 'center',fontSize: "40px", fontWeight: 'bold' }}>
                                {sentence}
                            </Typography>
                        </Box> 
                         <ChessPiece  piece={idx}></ChessPiece>
                        
                </Box>
               
            </ThemeProvider>

        </div>
    );
};

export default HomePage;
