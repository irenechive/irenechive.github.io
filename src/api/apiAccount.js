import supabase from '../service/supabase';

export async function getAccount() {
  const { data, error } = await supabase.from('account').select('*');
  if (error) throw new Error(error);
  return data;
}
