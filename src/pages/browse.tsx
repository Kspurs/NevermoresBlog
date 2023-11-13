import Box from "@mui/material/Box";
import exp from "constants";
import { PageProps } from "gatsby";
import React from "react";
import Appbar from "../components/appbar";
import { Grid, Typography } from "@mui/material";
import { graphql } from "gatsby";
import Hovercard from "../components/blogcard";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../components/theme";
import { StaticImage } from "gatsby-plugin-image";
interface queryData {
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
const Browse: React.FC<PageProps<queryData>> = ({ path, data }) => {
    return (
        console.log(path),
        <Box>
            <Appbar location={path}></Appbar>
            <ThemeProvider theme={theme}>
                <Box display={'grid'}>
                    <StaticImage src="../images/v904-nunny-012.jpg" alt="" style={{ gridArea: '1/1', height: '600px' }} ></StaticImage>
                    <Box sx={{ gridArea: '1/1', padding: '100px' }}>
                        <Typography color={'primary'} textAlign={'center'} fontSize={'50px'} fontWeight={'600'} position={'relative'} top={'10px'}>
                            Computer Science and <span style={{ color: '#2196f3' }}>Everything</span>
                        </Typography>
                        <Box display={'flex'} position={'relative'} top={'40px'}>

                            {
                                data.allMdx.nodes.map((item) => (
                                    <Hovercard title={item.frontmatter.title} date={item.frontmatter.date} description={item.frontmatter.slug} link="" tag={['Python', 'CPP']} author="Nevermore"></Hovercard>))}
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
        }
        id
        excerpt
      }
    }
  }`
export default Browse;