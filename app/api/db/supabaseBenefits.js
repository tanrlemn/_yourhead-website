import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL;
const supabasePublicKey = process.env.NEXT_PUBLIC_SUPABASE_API_KEY;

export const supabaseBenefits = async () => {
  const supabaseClient = createClient(supabaseUrl, supabasePublicKey);

  const { data, error } = await supabaseClient
    .from('membership_benefits')
    .select('*');

  if (error) {
    console.log(error);
    return error;
  }

  console.log(data);
  return data;
};
