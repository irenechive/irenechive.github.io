import supabase from '../service/supabase';

export async function getRookies() {
  const { data, error } = await supabase.from('rookies').select('*').order('id', { ascending: false });
  if (error) throw new Error(error);
  return data;
}

export async function getRookie(id) {
  const { data, error } = await supabase.from('rookies').select('*').eq('id', id);
  if (error) throw new Error(error);
  return data?.at(0);
}
