const redirect_uri = `http://localhost:3000/dashboard`;

//when code is available attempt to login/signup. make sure to include
export const continueOauth = async (code) => {
  const xanoUrl = process.env.XANO_URL;
  const xanoOauthContinueEndpoint = process.env.XANO_OAUTH_CONTINUE_ENDPOINT;

  let fetchURL = new URL(xanoOauthContinueEndpoint, xanoUrl);
  fetchURL.searchParams.set('redirect_uri', redirect_uri);
  fetchURL.searchParams.set('code', code);
  fetchURL = fetchURL.toString();

  console.log(fetchURL);

  try {
    const res = await fetch(fetchURL);
    const jsonData = await res.json();
    return jsonData;
  } catch (error) {
    throw new Error('Failed to fetch data', error);
  }
};
