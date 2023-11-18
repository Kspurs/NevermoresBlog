import { Avatar, Box, Button, Chip, Paper, SxProps, ThemeProvider, Typography, styled } from "@mui/material";
import React from "react";
import theme from "./theme";
import { StaticImage } from "gatsby-plugin-image";
import PersonalCard from "./personalcard";
import { navigate } from "gatsby";
interface BlogcardProps{
    title:string;
    date:string;
    description:string;
    tag:string[];
    author:string;
}
const Blogcard:React.FC<BlogcardProps>=({title,date,description,tag,author})=>{ 
    return (
        <Paper elevation={1} sx={{padding:'20px' ,width:'500px',borderRadius:'10px','&:hover':{boxShadow:8}}}>
            <ThemeProvider theme={{theme}}>
            
                <Box display='flex' >
                    {tag.map((item)=>(
                        <Chip key={item} label={item} color="info" sx={{marginRight:'5px'}}></Chip>
                    ))}
                </Box>
                <Typography variant='h6' sx={{fontWeight:'bold',marginTop:'10px',marginBottom:'2px'}}>{title}</Typography>
                <Typography variant='subtitle1' sx={{color:'gray',marginBottom:'20px'}}>{description}</Typography>
                <Box>
                    <Avatar src='/IMG_20220602_233112.JPG'>;
                    </Avatar>
                    
                        <Typography sx={{marginTop:"10px"}} fontSize={'12px'}>
                            {author}
                        </Typography>
                    <Box display={'flex'} justifyContent={'space-between'}>
                        <Typography sx={{marginTop:'5px'}} variant="subtitle1" fontSize={'10px'} color={'gray'}>
                            {date}
                        </Typography>
                        <Button variant="text" color="info" onClick={()=>{
                            navigate('/blog/'+description);
                        }} sx={{position:'relative', bottom:'10px'}}><Typography fontWeight={700} fontSize={'12px'}>Read more</Typography></Button>
                    </Box>
                </Box>
            </ThemeProvider>
        </Paper>    
    )
}
const Hovercard=styled(Blogcard)<BlogcardProps>(({theme})=>({
    
}));
export default Hovercard;