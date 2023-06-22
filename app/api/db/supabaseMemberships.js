import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL;
const supabasePublicKey = process.env.NEXT_PUBLIC_SUPABASE_API_KEY;

export const supabaseMemberships = async () => {
  const supabaseClient = createClient(supabaseUrl, supabasePublicKey);

  const { data, error } = await supabaseClient
    .from('memberships')
    .select('*')
    .eq('active', true)
    .order('id', { ascending: true });

  if (error) {
    console.log(error);
    return error;
  }

  console.log(data);
  return data;
};
