import React from 'react'
import { graphql } from 'gatsby';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import ProjectItem from '../components/project-item';

const IndexPage = ({data}) => {
    const { allWordpressWpProject } = data;

    return (
        <Container style={{paddingTop: '72px', paddingBottom: '72px', maxWidth: '1280px'}} maxWidth="lg">
            <h1>Innovation i Helsingborg</h1>
            <Grid container spacing={3}>
                {allWordpressWpProject.edges.map(({ node }) => (
                    <Grid item xs={12} sm={6} md={4} key={node.id}>
                        <ProjectItem 
                            {...node}
                        />
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
}

export default IndexPage

export const query = graphql`
  {
    allWordpressWpProject {
      edges {
        node {
          id
          title
          slug
          date(formatString: "MMMM DD, YYYY", locale: "sv_SE")
          status {
            name
          }
          organisation {
            name
          }
          featured_media {
            localFile {
                childImageSharp {
                  fluid(
                    maxHeight: 500,
                    maxWidth: 500,
                    fit: COVER,
                    cropFocus: CENTER,
                    toFormat: JPG,
                    toFormatBase64: JPG,
                    trim: 1) {
                      ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
          }
        }
      }
    }
  }
`