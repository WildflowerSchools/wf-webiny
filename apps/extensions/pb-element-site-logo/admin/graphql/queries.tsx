import gql from "graphql-tag";

const QUERY_LIST_MENUS = gql`
query ListPageBuilderMenus {
    pageBuilder {
        listMenus {
            data {
                id
                slug
                title
                description
            }
        }
    }
}
`

export { QUERY_LIST_MENUS }
