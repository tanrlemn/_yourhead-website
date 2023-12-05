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
    const { data: products, error } = await supabase
      .from('products')
      .select('*')
      .eq('slug', slug);

    const product = products[0];

    return NextResponse.json({ product, error });
  } catch (error) {
    console.error(error);
    return NextResponse.error(error);
  }
}
