export const getNavMenu = gql`
    query getNavMenu($handle: String!) {
        menu(handle: $handle) {
            items {
                title
                url
                id
                items {
                    title
                    url
                    id
                }
            }
        }
    }
`;
