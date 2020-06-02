const he = require("he")
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.createPages = async ({graphql, actions}) => {
    const { createPage } = actions;
    
    const result = await graphql(`
        {
            allWordpressWpProject {
            edges {
                node {
                id
                title
                content
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
                        fluid(maxHeight: 480, maxWidth: 1280, fit: COVER, cropFocus: CENTER, toFormat: JPG, toFormatBase64: JPG, trim: 1) {
                                aspectRatio
                                src
                                srcSet
                                sizes
                            }
                        }
                    }
                }
                }
            }
            }
        }
    `);

    if (result.errors || !result.data || !result.data.allWordpressWpProject) {
        console.error(result.errors);
    }

    const { allWordpressWpProject } = result.data

    allWordpressWpProject.edges.forEach(({node}) => {
        node.title = he.decode(node.title);
        createPage({
            path: `/projects/${node.slug}`,
            component: require.resolve('./src/templates/single-project.js'),
            context: { node }
        })
    });

}