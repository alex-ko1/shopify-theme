export const loginMutation = gql`
  mutation Login($email: String!, $password: String!) {
    customerAccessTokenCreate(input: {
      email: $email,
      password: $password
    }) {
      customerAccessToken {
        accessToken
        expiresAt
      }
      userErrors {
        field
        message
      }
    }
  }
`;