export const getCart = gql`
    query GetCart($checkoutId: ID!) {
        checkout(id: $checkoutId) {
            id
            lineItems(first: 10) {
                edges {
                    node {
                        id
                        title
                        variant {
                            id
                            title
                            priceV2 {
                                amount
                                currencyCode
                            }
                        }
                        quantity
                    }
                }
            }
            totalPriceV2 {
                amount
                currencyCode
            }
        }
    }
`;
