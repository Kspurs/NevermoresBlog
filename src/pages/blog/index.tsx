import { Box } from "@mui/material";
import { PageProps } from "gatsby";
import React from "react";
import Appbar from "../../components/appbar";
const Blogs:React.FC<PageProps> = ({path}) => {
    
    return(
        <Box>
            <Appbar location={path}></Appbar>
        </Box>
    )
}
export default Blogs;