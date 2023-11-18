import * as React from 'react'
import { Link, PageProps, graphql } from 'gatsby'
import Appbar from '../../components/appbar'
import { Avatar, Box, Paper, ThemeProvider, Typography } from '@mui/material'
import { ComponentsWrapper } from '../../components/mdxcomponent'
import { ThemeContext } from '@emotion/react'
import theme from '../../components/theme'
interface queryData {
    mdx: {
        frontmatter: {
            title: string;
            date: string;
        }
        tableOfContents:{
            items:{
                url:string;
                title:string;
                items:{
                    url:string;
                    title:string;
                }[]
            }[]
        };
    }
}

const BlogPostTemplate:React.FC<PageProps<queryData>> = ({path, data,children}) => {
    

    return (
    
        <Box>
            <Appbar location={path}>

            </Appbar>
            <ThemeProvider theme={theme}>
            <Box sx={{display:'flex',paddingLeft:"300px",pr:'300px',maxWidth:'1000px'}}>
                <Paper sx={{flexGrow:2,padding:'50px'}} variant='outlined'>
                  <Typography variant='h3' mb={'20px'}>
                    {data.mdx.frontmatter.title}
                  </Typography>

                <Box mb={'20px'}>
                    <Avatar src='/IMG_20220602_233112.JPG'>;
                    </Avatar>
                    
                        <Typography sx={{marginTop:"10px"}} fontSize={'12px'}>
                            {'Nevermore'}
                        </Typography>
                    <Box display={'flex'} justifyContent={'space-between'}>
                        <Typography sx={{marginTop:'5px'}} variant="subtitle1" fontSize={'10px'} color={'gray'}>
                            {data.mdx.frontmatter.date}
                        </Typography>
                    </Box>
                </Box>
                  <ComponentsWrapper>
                    {children}
                  </ComponentsWrapper>
                </Paper>
                <Box flexGrow={1} minWidth={'200px'} ml={'100px'} mt={'30px'} position={'fixed'} right={'100px'}>
                    <Typography sx={{mb:'20px', color:'gray'}} fontSize={'20px'} fontWeight={500} >
                      TABLE OF CONTENTS
                    </Typography>
                    {

                      data.mdx.tableOfContents.items.map((item)=>(
                        <Box key={item.title}>
                          <Box marginBottom={'10px'}>
                            <Link to={item.url} className='internalLink'>{item.title}</Link>
                          </Box>
                          {
                            item.items.map((item)=>(
                              <Box key={item.title} sx={{mb:'10px',ml:'40px'}}>
                                <Link to={item.url} className='internalLink'>{item.title}</Link>
                              </Box>
                            ))
                          }
                        </Box>
                      ))
                    }
                </Box>  
            </Box>
            </ThemeProvider>
        </Box>
    )

}
export default BlogPostTemplate;
export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
      tableOfContents
    }
  }
`