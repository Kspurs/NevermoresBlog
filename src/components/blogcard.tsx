import { Avatar, Box, Chip, Paper, ThemeProvider, Typography, styled } from "@mui/material";
import React from "react";
import theme from "./theme";
interface BlogcardProps{
    title:string;
    date:string;
    description:string;
    link:string;
    tag:string[];
    author:string;
}
const Blogcard:React.FC<BlogcardProps>=({title,date,description,tag,author})=>{ 
    return (
        <Paper elevation={1} sx={{padding:'30px' ,width:'400px',borderRadius:'10px'}}>
            <ThemeProvider theme={{theme}}>
            
                <Box display='flex' >
                    {tag.map((item)=>(
                        <Chip key={item} label={item} color="info" sx={{marginRight:'5px'}}></Chip>
                    ))}
                </Box>
                <Typography variant='h5' sx={{fontWeight:'bold',marginTop:'10px',marginBottom:'10px'}}>{title}</Typography>
                <Typography variant='subtitle1' sx={{color:'gray',marginBottom:'10px'}}>this is some description</Typography>
                <Box>
                    <Avatar src={require('../images/logo.png')}>;

                    </Avatar>
                    <Typography sx={{marginTop:"10px"}} >
                        {author}
                    </Typography>
                    <Typography sx={{marginTop:'5px'}} variant="subtitle1" fontSize={'10px'} color={'gray'}>
                        {date}
                    </Typography>
                </Box>
            </ThemeProvider>
        </Paper>
    )
}
const Hovercard=styled(Blogcard)<BlogcardProps>(({theme})=>({
    '&:hover':{
        elevation:3
    }
}));
export default Hovercard;