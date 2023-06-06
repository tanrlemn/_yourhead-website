export const memberships = async () => {
  const url = `${process.env.XANO_API_URL}/membership`;

  try {
    const res = await fetch(url);
    const jsonData = await res.json();
    return jsonData;
  } catch (error) {
    throw new Error('Failed to fetch data', error);
  }
};
