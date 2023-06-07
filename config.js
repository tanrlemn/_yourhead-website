const getEnvironmentVariable = async (environmentVariable) => {
  const unvalidatedEnvironmentVariable = process.env[environmentVariable];
  if (!unvalidatedEnvironmentVariable) {
    throw new Error(
      `Couldn't find environment variable: ${environmentVariable}`
    );
  } else {
    return unvalidatedEnvironmentVariable;
  }
};

export const config = async () => {
  return {
    xanoApiUrl: await getEnvironmentVariable('XANO_API_URL'),
    xanoOauthUrl: await getEnvironmentVariable('XANO_OAUTH_URL'),
    xanoOauthInitUrl: await getEnvironmentVariable('XANO_OAUTH_INIT_URL'),
    xanoOauthContinueUrl: await getEnvironmentVariable(
      'XANO_OAUTH_CONTINUE_URL'
    ),
  };
};
