
import { graphql, useStaticQuery } from "gatsby"

const useMinimalBlogConfig = () => {
  const data = useStaticQuery(graphql`
    query {
      allSite {
        nodes {
          siteMetadata {
            basePath
            blogPath
            pagesPath
            postsPath
            tagsPath
            externalLinks {
              name
              url
            }
            navigation {
              slug
              title
            }
            showLineNumbers
          }
        }
      }
    }
  `)

  return data.allSite.nodes[0].siteMetadata;
}

export default useMinimalBlogConfig