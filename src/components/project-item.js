import React from 'react'
import { Link } from 'gatsby';
import Img from "gatsby-image";
import he from 'he';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
    paperBody: {
        padding: theme.spacing(2),
        textAlign: 'center',
    },
}));

const ProjectItem = props => {
    const classes = useStyles();
    const { title, slug, featured_media} = props;

    return (
        <Link to={`/projects/${slug}`}> 
            <Paper className={classes.paper}>
                {
                    featured_media && featured_media.localFile ? 
                        <Img fluid={featured_media.localFile.childImageSharp.fluid} />
                    
                    : null
                }
                <div className={classes.paperBody}>
                    <h3>{he.decode(title)}</h3>
                </div>
            </Paper>
        </Link>
    )
}


export default ProjectItem
