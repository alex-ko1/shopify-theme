import {generateState} from "@/composables/generateState";
import {generateNonce} from "@/composables/generateNounce";
import {generateCodeChallenge, generateCodeVerifier} from "@/composables/codeChallengeAndVerifier";

export default async function auth() {
  const clientId = 'shp_eb21912a-d433-4196-92ab-45a7547196c6';

  const authorizationRequestUrl = new URL(
    'https://shopify.com/67428221145/auth/oauth/authorize'
  );

  authorizationRequestUrl.searchParams.append(
    'scope',
    'openid email https://api.customers.com/auth/customer.graphql'
  );
  authorizationRequestUrl.searchParams.append(
    'client_id',
    clientId as string
  );
  authorizationRequestUrl.searchParams.append(
    'response_type',
    'code'
  );
  authorizationRequestUrl.searchParams.append(
    'redirect_uri',
      `https://149b-160-238-126-111.ngrok-free.app`
  );
  authorizationRequestUrl.searchParams.append(
    'state',
    await generateState()
  );
  authorizationRequestUrl.searchParams.append(
    'nonce',
    await generateNonce(5)
  );
  // authorizationRequestUrl.searchParams.append(
  //   'prompt', 'none'
  // );

  // Public client
  const verifier = await generateCodeVerifier();
  const challenge = await generateCodeChallenge(verifier);
  window.localStorage.setItem('code-verifier', verifier);

  authorizationRequestUrl.searchParams.append(
    'code_challenge',
    challenge
  );
  authorizationRequestUrl.searchParams.append(
    'code_challenge_method',
    'S256'
  );
  window.localStorage.setItem('verifier',verifier)
  window.localStorage.setItem('challenge',challenge)

  window.location.href = authorizationRequestUrl.toString()
}
