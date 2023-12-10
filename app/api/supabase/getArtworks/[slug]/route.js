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
    const { data: artworks, error } = await supabase
      .from('artworks')
      .select('*')
      .eq('slug', slug);

    const artwork = artworks[0];

    return NextResponse.json({ artwork, error });
  } catch (error) {
    console.error(error);
    return NextResponse.error(error);
  }
}
