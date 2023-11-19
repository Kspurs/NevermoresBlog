import * as React from 'react'
import { Link, PageProps, graphql, navigate } from 'gatsby'
import Appbar from '../../components/appbar'
import { Avatar, Box, Button, Paper, ThemeProvider, Typography } from '@mui/material'
import { ComponentsWrapper } from '../../components/mdxcomponent'

import theme from '../../components/theme'
import { MDXProvider } from '@mdx-js/react'
interface QueryData {
    contentfulBlogPost: {
        title: string;
        location: {
            lat: number;
            lon: number;
        }
        description: string;
        createDate: string;
        blogBody: {
            childMarkdownRemark: {
                html: string;
                tableOfContents: string;
                headings:{
                    value:string;
                    depth:number;
                }[]
            }
        }

}
}
interface TableOfContents{
    items:{
        value:string;
        items:{
            value:string;
    }[]
}[]
}
const BlogPostTemplateContentful:React.FC<PageProps<QueryData>> = ({path, data,children}) => {
    let tableOfContents:TableOfContents={items:[]};
    data.contentfulBlogPost.blogBody.childMarkdownRemark.headings.forEach((item)=>{
        if(item.depth==1)
        {
            tableOfContents.items.push({value:item.value,items:[]});
        }
        else if(item.depth==2)
        {
            tableOfContents.items[tableOfContents.items.length-1].items.push({value:item.value});
        }
    }
    )

    return (
    
        <Box>
            <Appbar location={path}>

            </Appbar>
            <ThemeProvider theme={theme}>
            <Box sx={{display:'flex',paddingLeft:"300px",pr:'300px',maxWidth:'1000px'}}>
                <Paper sx={{flexGrow:2,padding:'50px'}} variant='outlined'>
                  <Typography variant='h3' mb={'20px'}>
                    {data.contentfulBlogPost.title}
                  </Typography>

                <Box mb={'20px'}>
                    <Avatar src='/IMG_20220602_233112.JPG'>;
                    </Avatar>
                    
                        <Typography sx={{marginTop:"10px"}} fontSize={'12px'}>
                            {'Nevermore'}
                        </Typography>
                    <Box display={'flex'} justifyContent={'space-between'}>
                        <Typography sx={{marginTop:'5px'}} variant="subtitle1" fontSize={'10px'} color={'gray'}>
                            {data.contentfulBlogPost.createDate}
                        </Typography>
                    </Box>
                </Box>
                    <div className='blogBody' dangerouslySetInnerHTML={{__html:data.contentfulBlogPost.blogBody.childMarkdownRemark.html}}>

                    </div>
                </Paper>
                <Box flexGrow={1} minWidth={'200px'} ml={'100px'} mt={'30px'} position={'fixed'} right={'100px'}>
                    <Typography sx={{mb:'20px', color:'gray'}} fontSize={'20px'} fontWeight={500} >
                      TABLE OF CONTENTS
                    </Typography>
                    <Box sx={{borderLeft:'1px solid gray',paddingLeft:'10px'}}>
                        {tableOfContents.items.map((item)=>(
                            <Box key={item.value}>
                                <Button sx={{mb:'10px'}} onClick={()=>navigate('#'+item.value.replace(/\s+/g, '-').toLowerCase())} >
                                    {item.value}
                                </Button>
                                <Box sx={{borderLeft:'1px solid gray',paddingLeft:'10px'}}>
                                    {item.items.map((item)=>(
                                       <Button key={item.value} sx={{mb:'10px'}} onClick={()=>navigate('#'+item.value.replace(/\s+/g, '-').toLowerCase())} >
                                       {item.value}
                                   </Button>
                                    ))}
                                </Box>
                            </Box>
                        ))}
                    </Box>
                </Box>  
            </Box>
            </ThemeProvider>
        </Box>
    )

}
export default BlogPostTemplateContentful;
export const query = graphql`
  query ($id: String) {
    contentfulBlogPost(id: {eq: $id}) {
        title
        description
        createDate
        blogBody {
          childMarkdownRemark {
            html
            tableOfContents
            headings{
                value
                depth
            }
          }
        }
      }
    }
`