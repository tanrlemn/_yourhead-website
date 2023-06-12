export const memberships = async () => {
  const xanoApiUrl = process.env.XANO_API_URL;
  const url = `${xanoApiUrl}/membership`;

  try {
    const res = await fetch(url);
    const jsonData = await res.json();
    return jsonData;
  } catch (error) {
    throw new Error('Failed to fetch data', error);
  }
};
