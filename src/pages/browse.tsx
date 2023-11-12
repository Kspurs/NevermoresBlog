import Box from "@mui/material/Box";
import exp from "constants";
import { PageProps } from "gatsby";
import React from "react";
import Appbar from "../components/appbar";

const Browse:React.FC<PageProps>=({path})=>{
    return(
        console.log(path),
        <Box>
            <Appbar location={path}>

            </Appbar>
        </Box>
    )
}
export default Browse;