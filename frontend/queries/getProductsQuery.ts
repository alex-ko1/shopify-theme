export const getProductsQuery = gql`
    query Products ($first: Int!, $query: String) {
        products(first: $first, query: $query) {
            edges {
                node {
                    availableForSale
                    createdAt
                    description
                    descriptionHtml
                    handle
                    id
                    isGiftCard
                    onlineStoreUrl
                    productType
                    publishedAt
                    requiresSellingPlan
                    tags
                    title
                    trackingParameters
                    updatedAt
                    vendor
                    featuredImage {
                        altText
                        height
                        id
                        originalSrc
                        src
                        transformedSrc
                        url
                        width
                    }
                    images(first: 250) {
                        nodes {
                            altText
                            height
                            id
                            originalSrc
                            src
                            transformedSrc
                            url
                            width
                        }
                    }
                    options {
                        id
                        name
                        values
                    }
                    priceRange {
                        maxVariantPrice {
                            amount
                            currencyCode
                        }
                    }
                    seo {
                        description
                        title
                    }
                    media(first: 250) {
                        nodes {
                            alt
                            id
                            mediaContentType
                        }
                    }
                    variants(first: 250) {
                        nodes {
                            id
                            title
                            availableForSale
                            barcode
                            sku
                            compareAtPrice {
                                amount
                                currencyCode
                            }
                        }
                    }
                }
            }
        }
    }
`;

export interface GetProductsQueryResult {
  products: {
    edges: {
      node: {
        availableForSale: boolean
        createdAt: string
        description: string
        descriptionHtml: string
        handle: string
        id: string
        isGiftCard: boolean
        onlineStoreUrl: string
        productType: string
        publishedAt: string
        requiresSellingPlan: boolean
        tags: string
        title: string
        trackingParameters: string
        updatedAt: string
        vendor: string
        featuredImage: {
          altText: string
          height: number
          id: string
          originalSrc: string
          src: string
          transformedSrc: string
          url: string
          width: number
        }
        images: {
          nodes: {
            altText: string
            height: number
            id: string
            originalSrc: string
            src: string
            transformedSrc: string
            url: string
            width: number
          }[]
        }
        options: {
          id: string
          name: string
          values: string[]
        }[]
        priceRange: {
          maxVariantPrice: {
            amount: string
            currencyCode: string
          }
        }
        seo: {
          description: string
          title: string
        }
        media: {
          nodes: {
            alt: string
            id: string
            mediaContentType: string
          }[]
        }
        variants: {
          nodes: {
            id: string
            title: string
            availableForSale: boolean
            barcode: string
            sku: string
            compareAtPrice: {
              amount: string
              currencyCode: string
            }
          }[]
        }
      }
    }[]
  }
}
