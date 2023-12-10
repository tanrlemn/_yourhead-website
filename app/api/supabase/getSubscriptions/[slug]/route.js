import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function GET(request, { params }) {
  const slug = params.slug;

  const cookieStore = cookies();

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    {
      cookies: {
        get(name) {
          return cookieStore.get(name)?.value;
        },
        set(name, value, options) {
          cookieStore.set({ name, value, ...options });
        },
        remove(name, options) {
          cookieStore.set({ name, value: '', ...options });
        },
      },
    }
  );

  try {
    const { data: subscription_tiers, error } = await supabase
      .from('subscription_tiers')
      .select('*')
      .eq('slug', slug);

    const tier = subscription_tiers[0];

    return NextResponse.json({ tier, error });
  } catch (error) {
    console.error(error);
    return NextResponse.error(error);
  }
}
