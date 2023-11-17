import { MDXProvider } from "@mdx-js/react";
import { Avatar, Box, ThemeProvider, Typography } from "@mui/material";
import theme from "./theme";
import React from "react";
import Blogentry from "./blogentry";
interface wrapperProps{
    children:React.ReactNode;
}
const title1:React.FC=props=>{
    return (
    <ThemeProvider theme={theme}>
        <Typography {...props} fontWeight={700} fontSize={'30px'}></Typography> 

    </ThemeProvider>
    )
}

const title2:React.FC=props=>{
    return (
    <ThemeProvider theme={theme}>
        <Typography {...props} fontWeight={700} fontSize={'25px'}></Typography> 
    </ThemeProvider>
    )
}
    const paragraph:React.FC = props => {
    return (
        <ThemeProvider theme={theme}>
            <Box marginTop={'20px'} mb={'20px'}>
                <Typography {...props}></Typography>    
            </Box>
        </ThemeProvider>
    )
}
const components={
    p:paragraph,
    h1:title1,
    h2:title2
}
export const ComponentsWrapper:React.FC<wrapperProps>=({children})=>{
    return (<MDXProvider components={components}>{children}</MDXProvider>)
}