import Box from "@mui/material/Box";
import { PageProps } from "gatsby";
import React from "react";
import Appbar from "../components/appbar";
import { Divider, Grid, Typography } from "@mui/material";
import { graphql } from "gatsby";
import Hovercard from "../components/blogcard";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../components/theme";
import { StaticImage } from "gatsby-plugin-image";
import PersonalCard from "../components/personalcard";
import Blogentry from "../components/blogentry";
interface QueryData {
    allMdx: {
        nodes: {
            frontmatter: {
                title: string;
                date: string;
                slug: string;
            }
        }[]
    }
}
const Browse: React.FC<PageProps<QueryData>> = ({ path, data }) => {
    return (
        console.log(data),
        <Box>
            <Appbar location={path}></Appbar>
            <ThemeProvider theme={theme}>
                <Box display={'grid'}>
                    <StaticImage src="../images/v904-nunny-012.jpg" alt="" style={{ gridArea: '1/1', height: '600px' }} ></StaticImage>
                    <Box sx={{ gridArea: '1/1', padding: '100px' }}>
                        <Typography color={'primary'} textAlign={'center'} fontSize={'50px'} fontWeight={'600'} position={'relative'} top={'10px'}>
                            Computer Science and <span style={{ color: '#2196f3' }}>Everything</span>
                        </Typography>
                        <Box display={'flex'} position={'relative'} top={'40px'} justifyContent={"space-around"} paddingLeft={'150px'} paddingRight={'150px'}>

                            {
                                data.allMdx.nodes.slice(0,2).map((item) => (
                                    <Hovercard key={item.frontmatter.title} title={item.frontmatter.title} date={item.frontmatter.date} description={item.frontmatter.slug} tag={['Python', 'CPP']} author="Nevermore"></Hovercard>))}
                        
                                    </Box>
                    </Box>
                </Box>
                <Box paddingTop={'20px'} minHeight={'1000px'} paddingLeft={"80px"} display={'flex'} paddingRight={'80px'} justifyContent={'space-around'}>
                    <Box>
                        <Typography fontWeight={700} marginBottom={'20px'}>Latest Posts</Typography>
                    
                            {
                                data.allMdx.nodes.slice(0,2).map((item) => (
                                <Box key={item.frontmatter.title} marginTop={'10px'}>
                                    
                                        <Blogentry title={item.frontmatter.title} date={item.frontmatter.date} description={item.frontmatter.slug} tag={['Python', 'CPP']} author="Nevermore"></Blogentry>
                                        <Divider></Divider>
                                </Box>
                                    )
                                    
                                    )
                                    
                                }
                        </Box>
                    <PersonalCard></PersonalCard>
                </Box>
                <Box display={'grid'}>
                    <StaticImage src='../images/bottomimage.jpg' alt="" style={{height:'500px' ,gridArea:'1/1'}}></StaticImage>
                    <Box gridArea={'1/1'} padding={'50px'} position={'relative'} justifyContent={'center'}>
                        <Typography fontWeight={700} fontSize={'40px'} textAlign={'center'}>
                            Don't Worry, Be <span style={{color:'#ba68c8'}}>Happy!</span>
                        </Typography>
                        <Box display={'flex'} justifyContent={'space-around'} paddingLeft={'600px'} pr={'600px'} >
                        <Typography fontWeight={600} fontSize={'20px'} textAlign={'center'} mt={'20px'}> This Blog Site is Built by <span style={{color:'#9c27b0'}}>Gatsby</span></Typography>
                        <StaticImage src="../images/icon.png" alt="" style={{position:'relative',right:'35px',top:'20px',width:'30px', height:'30px'}}></StaticImage>
                                </Box>
                    </Box>
                </Box>
            </ThemeProvider>
        </Box>
    )
}
export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC }}) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          slug
        }
        id
        excerpt
      }
    }
  }`
export default Browse;