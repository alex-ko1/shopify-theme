export default async function getToken(email:string,password:string) {
  const clientId = 'shp_eb21912a-d433-4196-92ab-45a7547196c6';
  const body = new URLSearchParams();

  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const code = urlParams.get('code')

  // const clientId = process.env.CLIENT_ID;
  // const clientSecret = process.env.CLIENT_SECRET;
  // const credentials = await crypto.subtle.digest(
  //   { name: "SHA-256" },
  //   new TextEncoder().encode(`${clientId}:${clientSecret}`)
  // );

  body.append('grant_type', 'authorization_code');
  body.append('client_id', clientId as string);
  body.append(
    'redirect_uri',
    `https://149b-160-238-126-111.ngrok-free.app`,
  );
  body.append('code', code as string);

  // Public Client
  const codeVerifier = localStorage.getItem('code-verifier');
  body.append('code_verifier', codeVerifier as string);

  const headers = {
    'content-type': 'application/x-www-form-urlencoded',
    // Confidential Client
    // 'Authorization': `Basic ${credentials}`
  }

  const response = await fetch('https://shopify.com/67428221145/auth/oauth/token', {
    method: 'POST',
    mode: 'no-cors',
    headers: headers,
    body,
  });

  interface AccessTokenResponse {
    access_token: string;
    expires_in: number;
    id_token: string;
    refresh_token: string;
  }

  console.log('code-verifier',localStorage.getItem('code-verifier'));

  const {access_token, expires_in, id_token, refresh_token} = await response.json<AccessTokenResponse>();
  console.log(code)
  console.log(access_token, expires_in, id_token, refresh_token)
}
