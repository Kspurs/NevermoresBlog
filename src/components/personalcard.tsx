import { Avatar, Box, Chip, Divider, IconButton, Paper, ThemeProvider, Typography } from "@mui/material"
import React from "react"
import react from 'react'
import theme from "./theme"
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
const PersonalCard :React.FC= () => {
    return (
        <ThemeProvider theme={{theme}}>
            <Paper sx={{position:'sticky',height:'300px',padding:'30px',width:'400px'}} elevation={1} variant="outlined">
                <Avatar sx={{width:'100px',height:'100px', marginBottom:'20px', marginLeft:'150px'}} src='/IMG_20220602_233112.JPG'></Avatar>
                <Typography textAlign={'center'} fontWeight={600} fontSize={'16px'} color={'gray'}> Software Engineering undergraduate at Soochow University</Typography>
                <Typography fontWeight={600} marginBottom={'10px'} marginTop={'10px'} marginLeft={'10px'} fontSize={'16px'}>What I am interested in</Typography>
                <Box display="flex" justifyContent={'space-around'} marginBottom={"20px"}>
                    <Chip color="info" label="Football"></Chip>
                    <Chip color="info" label="Dota2"></Chip>
                    <Chip color="info" label="HBO and Netflix"></Chip>
                    <Chip color="info" label="Coding"></Chip>
                </Box>
                <Divider></Divider>
                <Box display={'flex'} marginTop={'10px'} justifyContent={'space-around'} paddingLeft={'50px'} paddingRight={'50px'}>
                    <IconButton>
                        <GitHubIcon></GitHubIcon>
                    </IconButton>
                    <IconButton>
                        <TwitterIcon></TwitterIcon>
                    </IconButton>
                    <IconButton>
                        <YouTubeIcon></YouTubeIcon>
                    </IconButton>
                </Box>
            </Paper>
        </ThemeProvider>
    )
}
export default PersonalCard;