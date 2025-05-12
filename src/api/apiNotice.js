import supabase from '../service/supabase';

export async function getNotice() {
  const { data, error } = await supabase.from('notice').select('*');
  if (error) throw new Error(error);
  return data?.at(0);
}
