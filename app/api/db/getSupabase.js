import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL;
const supabasePublicKey = process.env.NEXT_PUBLIC_SUPABASE_API_KEY;

export const supabase = async (table) => {
  const supabaseClient = createClient(supabaseUrl, supabasePublicKey);

  const { data, error } = await supabaseClient.from(table).select('*');

  if (error) {
    console.log(error);
    return error;
  }

  console.log(data);
  return data;
};
