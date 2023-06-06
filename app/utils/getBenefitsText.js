export const getBenefitsText = async () => {
  const url = `${process.env.XANO_API_URL}/check_item`;

  try {
    const res = await fetch(url);
    const jsonData = await res.json();
    return jsonData;
  } catch (error) {
    throw new Error('Failed to fetch data', error);
  }
};
