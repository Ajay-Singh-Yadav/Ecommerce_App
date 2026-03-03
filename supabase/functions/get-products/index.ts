// Setup type definitions for built-in Supabase Runtime APIs
import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from 'jsr:@supabase/supabase-js@2';

Deno.serve(async (req) => {
  try {
    // Create Supabase client with auth context
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_ANON_KEY') ?? '',
      { 
        global: { 
          headers: { Authorization: req.headers.get('Authorization')! } 
        } 
      }
    );

    // Fetch products from database
    const { data, error } = await supabase
      .from('products')
      .select('*');

    if (error) {
      throw error;
    }

    return new Response(
      JSON.stringify({ data, success: true }), 
      {
        headers: { 'Content-Type': 'application/json' },
        status: 200,
      }
    );
  } catch (err) {
    console.error('Error:', err);
    return new Response(
      JSON.stringify({ 
        message: err?.message ?? 'Unknown error',
        success: false 
      }), 
      {
        headers: { 'Content-Type': 'application/json' },
        status: 500 
      }
    );
  }
});
