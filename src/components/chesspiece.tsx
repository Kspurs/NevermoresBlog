import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { grey ,blue} from "@mui/material/colors";
import { GatsbyImage, StaticImage, getImage } from "gatsby-plugin-image";
import React, { useState } from "react";

interface ChessPieceProps {
    
    piece:number;
}

const ChessPiece: React.FC<ChessPieceProps> = ({piece}) => {
    var nfilled=false;
    var kfilled=false;
    var rfilled=false;
    var qfilled=false;
    var bfilled=false;
    if(piece>=1){
        nfilled=true;
    }
    if(piece>=2){
        kfilled=true;
    }
    if(piece>=3){
        rfilled=true;
    }
    if(piece>=4){
        qfilled=true;
    }
    if(piece>=5){
        bfilled=true;
    }
    const knightcolor= nfilled? blue[500]: grey[500];
    const kingcolor=kfilled? blue[500]: grey[500];
    const rookcolor=rfilled? blue[500]: grey[500];
    const queencolor=qfilled? blue[500]: grey[500];
    const bishopcolor=bfilled? blue[500]: grey[500];
    return (
        <Box display={'flex'} position={'relative'} top={'120px'} justifyContent={'space-between'}>
            <Box width={'5%'} marginLeft={'30%'}>
                <StaticImage src="../images/knight.png" style={{height:'60px',width:'60px'}} alt=""></StaticImage>
                <Typography color={knightcolor} sx={{fontSize:'60px',}}>
                    C
                </Typography>
            </Box>
            <Box width={'5%'} >
                <StaticImage  src="../images/icons8-chess-96.png" style={{height:'60px',width:'60px'}} alt=""></StaticImage>
                <Typography color={kingcolor} sx={{fontSize:'60px'}}>
                    H
                </Typography>
            </Box>
            <Box width={'5%'} > 
                <StaticImage src="../images/rook.png" style={{height:'60px',width:'60px'}} alt=""></StaticImage>
                <Typography color={rookcolor} sx={{fontSize:'60px'}}>
                    E
                </Typography>
            </Box>
            <Box width={'5%'} >
                <StaticImage src="../images/queen.png" style={{height:'60px',width:'60px'}} alt=""></StaticImage>
                <Typography color={queencolor} sx={{fontSize:'60px'}}>
                    C
                </Typography>
            </Box>
            <Box width={'5%'}  marginRight={'30%'}>
                <StaticImage src="../images/bishop.png" style={{height:'60px',width:'60px'}} alt=""></StaticImage>
                <Typography color={bishopcolor} sx={{fontSize:'60px'}}>
                    K
                </Typography>
            </Box>
        </Box>
    );
};

export default ChessPiece;
