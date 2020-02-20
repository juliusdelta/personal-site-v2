import { useStaticQuery } from "gatsby"

const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          siteTitle
          siteTitleAlt
          siteHeadline
          siteUrl
          siteDescription
          siteLanguage
          siteImage
          author
          externalLinks {
            name
            url
          }
          tagsPath
          basePath
          blogPath
          showLineNumbers
        }
      }
    }
  `)

  return data.site.siteMetadata
}

export default useSiteMetadata;