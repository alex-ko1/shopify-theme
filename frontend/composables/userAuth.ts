import {customerCreateMutation} from '@/queries/customerCreateMutation'
import {loginMutation} from '@/queries/loginMutation'

interface Customer {
  id: string;
  email: string;
  firstName: string;
}

interface userErrors {
  field: string[]
  message: string
}

interface CreateCustomerResponse {
  customerCreate: {
    customer: Customer;
    userErrors: userErrors;
  };
}

interface LoginResponse {
  customerAccessTokenCreate: {
    customerAccessToken: {
      accessToken: string;
      expiresAt: string;
    };
    userErrors: userErrors;
  };
}

const registerUser = async (email: string, password: string, firstName: string) => {
  try {
    const {mutate} = useMutation<CreateCustomerResponse>(customerCreateMutation)
    const {data} = await mutate({
      password,
      email,
      firstName,
    });
    return (data)
  } catch (error) {
    console.error('Error during user registration:', error);
    return null;
  }
}

const loginUser = async (email: string, password: string) => {
  try {
    const {mutate} = useMutation<LoginResponse>(loginMutation)
    const {data} = await mutate({
      password,
      email,
    });
    return data
  } catch (error) {
    console.error('Error during login:', error);
    return null;
  }
}

export default function useAuth() {
  return {
    registerUser,
    loginUser
  }
};
