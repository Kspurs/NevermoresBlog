import { Avatar, Box, Button, Chip, Paper, SxProps, ThemeProvider, Typography, styled } from "@mui/material";
import React from "react";
import theme from "./theme";
import { StaticImage } from "gatsby-plugin-image";
import PersonalCard from "./personalcard";
interface BlogEntryProps{
    title:string;
    date:string;
    description:string;
    tag:string[];
    author:string;
}
const Blogentry:React.FC<BlogEntryProps>=({title,date,description,tag,author})=>{ 
    return (
        <Paper elevation={0} sx={{width:'700px',borderRadius:'10px',border:'none'}}>
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
                        <Button variant="text" color="info" sx={{position:'relative', bottom:'10px'}}><Typography fontWeight={700} fontSize={'12px'}>Read more</Typography></Button>
                    </Box>
                </Box>
            </ThemeProvider>
        </Paper>    
    )
}

export default Blogentry;