export const getShopInformation = gql`
    query shopInformation {
        localization {
            availableCountries {
                isoCode
                currency {
                    isoCode
                    symbol
                }
            }
        }
    }
`
