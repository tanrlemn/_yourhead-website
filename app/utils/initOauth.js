const redirect_uri = `http://localhost:3000/dashboard`;

export const initOauth = async () => {
  const xanoUrl = process.env.XANO_URL;
  const xanoOauthInitEndpoint = process.env.XANO_OAUTH_INIT_ENDPOINT;

  let fetchURL = new URL(xanoOauthInitEndpoint, xanoUrl);
  fetchURL.searchParams.set('redirect_uri', redirect_uri);
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
