import supabase from '../service/supabase';

import { FANCAM_PAGE_SIZE } from '../util/constants';

export async function getFancams(page) {
  const from = (page - 1) * FANCAM_PAGE_SIZE;
  const to = from + FANCAM_PAGE_SIZE - 1;

  const { data, error, count } = await supabase
    .from('fancam')
    .select('*', { count: 'exact' })
    .range(from, to)
    .order('id', { ascending: false });

  if (error) throw new Error(error.message);

  return { fancams: data, count };
}

export async function getFancam(id) {
  const { data, error } = await supabase.from('fancam').select('*').eq('id', id);
  if (error) throw new Error(error.message);
  return data?.at(0);
}
