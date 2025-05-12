import supabase from '../service/supabase';

export async function getNote(category) {
  const { data, error } = await supabase.from('note').select('*').eq('category', category);
  if (error) throw new Error(error.message);
  return data?.at(0);
}
