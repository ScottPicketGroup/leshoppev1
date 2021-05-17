/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require("path")
exports.createPages = async ({ graphql, actions, reporter }) => {
    const { createPage } = actions
    // Query for markdown nodes to use in creating pages.
    const result = await graphql(
      `
      query AllProducts {
        allShopifyProduct(filter: {availableForSale: {eq: true}}) {
          edges {
            node {
              id
              description
              handle
              tags
              title
              images {
                localFile {
                  childImageSharp {
                    fluid {
                      base64
                      tracedSVG
                      srcWebp
                      srcSetWebp
                      originalImg
                      originalName
                    }
                  }
                }
              }
            }
          }
        }
      }
      `
    )

      // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

    // Create pages for each markdown file.
    const ProductTemplate = path.resolve(`src/components/pages/reusable/product-template/ProductTemplate.js`)
    result.data.allShopifyProduct.edges.forEach(({ node }) => {
      const path = `/shop/products/${node.handle}`
      createPage({
        path,
        component: ProductTemplate,
        // In your blog post template's graphql query, you can use pagePath
        // as a GraphQL variable to query for data from the markdown file.
        context: {
            pagePath: path,
            handle: node.handle,
            product: node
        },
      })
    })
  }