import { graphql, useStaticQuery } from "gatsby"

export const useSiteMenuData = () => {
  const { wpMenu } = useStaticQuery(
    graphql`
      query MenuData {
        wpMenu(locations: {eq: PRIMARY}) {
          menuItems {
            nodes {
              id
              label
              parentId
              url
            }
          }
        }
      }
    `
  )
  return wpMenu
}
