export const customerCreateMutation = gql`
    mutation CreateCustomer($email: String!, $password: String!, $firstName: String!) {
        customerCreate(input: {
            email: $email,
            password: $password,
            firstName: $firstName,
        }) {
            customer {
                createdAt
                email
                firstName
                id
            }
            userErrors {
                field
                message
            }
        }
    }
`