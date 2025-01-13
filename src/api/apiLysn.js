import supabase from '../service/supabase';

import { LYSN_PAGE_SIZE } from '../util/constants';

export async function getLysns(page) {
  const from = (page - 1) * LYSN_PAGE_SIZE;
  const to = from + LYSN_PAGE_SIZE - 1;

  const { data, error, count } = await supabase
    .from('lysn')
    .select('*', { count: 'exact' })
    .range(from, to)
    .order('id', { ascending: false });

  if (error) throw new Error(error.message);

  return { lysns: data, count };
}

export async function getLysn(id) {
  const { data, error } = await supabase.from('lysn').select('*').eq('id', id);
  if (error) throw new Error(error.message);
  return data?.at(0);
}
