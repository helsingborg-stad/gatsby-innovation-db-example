import React from 'react';
import Img from "gatsby-image";
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const SingleProject = ({ pageContext }) => {
    const {title, content, featured_media} = pageContext.node;

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('md'));
    
    return (
        <article>
            {
                featured_media && featured_media.localFile ? 
                    <Img style={{width: '100%', maxWidth: '100%'}} fluid={featured_media.localFile.childImageSharp.fluid} />
                : null
            }
            <Container maxWidth="lg" style={{paddingTop: '72px', paddingBottom: '72px'}}>
                <Grid 
                    container 
                    spacing={7} 
                    justify={'center'} 
                    direction={matches ? 'row-reverse' : 'row'} 
                    alignItems={'stretch'}>
                    <Grid item xs={12} sm={11} md={7}>
                        <Grid container alignItems={'center'}>
                            <Grid item xs={12}>
                                <h1>{title}</h1>
                                <div dangerouslySetInnerHTML={{__html: content}} />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </article>
    );
};

export default SingleProject;