import supabase from '../service/supabase';

export async function getCourage() {
  const { data, error } = await supabase.from('courage').select('*');
  if (error) throw new Error(error.message);
  return data;
}
