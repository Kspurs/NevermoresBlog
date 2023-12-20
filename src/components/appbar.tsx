import React, { useCallback, useEffect, useState } from 'react';
import { Link,AppBar, Toolbar, Typography, TextField, Box, Button, Paper, Dialog, Divider, SvgIcon } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import theme from '../components/theme';
import { blue } from '@mui/material/colors';
import { StaticImage } from 'gatsby-plugin-image';
import { navigate } from 'gatsby';
import SearchIcon from '@mui/icons-material/Search';
import then from 'lodash'
interface AppbarProps {
    location:string;
}
interface SearchResult{
    hits:FieldsResult[]
}
interface FieldsResult{
    fields:{
        title:{
            "en-US":string;
        }
        
    }
}

const Appbar:React.FC<AppbarProps>= ({location}) => {
    const pages=[{name:'Blog',link:'/blog/'},{name:'Project',link:'/project/'},{name:'Research',link:'/research/'},{name:'About',link:'/about/'}]
    const [open,setOpen]=React.useState(false);
    const [searchWord,setSearchWord] =useState('');
    const [searchResult,setSearchResult]=useState<FieldsResult[]>([]);
    useEffect(()=>{
        if(searchWord.length>0){
            fetch(`https://RU62YHDQAJ-dsn.algolia.net/1/indexes/nevermoreblog?query=${searchWord}` , {
                method: 'GET',headers: {
                    'X-Algolia-Application-Id': 'RU62YHDQAJ',
                    'X-Algolia-API-Key': 'aa6f567eeffe9f7c16f8fefb68be8383',
                    'Content-Type': 'application/json'
                }}
                ).then((response)=>response.json()).then((data:SearchResult)=>setSearchResult(data.hits));
            }
        },[searchWord])
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
                <Box sx={{height:'100vh',opacity:'1',backdropFilter:'blur(4px)'}} position={'fixed'} width={'100vw'}display={open?'block':'none'}>
                    <Dialog open={open} onClose={()=>setOpen(false)} PaperProps={{sx:{height:'70vh',width:'100vw',padding:'10px'}}}>
                        <Box display={'flex'} flexDirection={'column'}  >
                            <TextField sx={{width:'100%'}} placeholder='search' onChange={(event)=>{
                                setSearchWord(event.target.value);
                            }}></TextField> 
                            <Box sx={{width:'500px',height:'55vh',overflowY:'scroll',marginTop:'10px',mb:'10px'}}>
                                {searchResult.map((result)=>(
                                    <Box key={result.fields.title['en-US']} sx={{height:'50px',backgroundColor:'#2196f3',borderRadius:4,pl:'10px',pt:'20px'}}>
                                       <Typography color={'#ffffff'} sx={{}}><Link style={{color:'#ffffff',textDecoration:'none',fontSize:'20px'}} href={'/blog/'+result.fields.title['en-US'].replace(/\s+/g, '-').toLowerCase()}>{result.fields.title['en-US'].replace(/\s+/g, '-').toLowerCase()}</Link></Typography>
                                    </Box>
                                ))}
                            </Box>
                            <Divider flexItem ></Divider>  
                            <Box display={'flex'} alignItems={'center'} >
                            <Typography sx={{mt:'10px',mb:'10px', color:'gray',textAlign:'end',ml:'350px'}}>Search By 
                            </Typography>
                            <img src='https://www.vectorlogo.zone/logos/algolia/algolia-ar21.svg' style={{width:'150px',height:'60px',display:'inline'}}></img>
                           </Box>
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


