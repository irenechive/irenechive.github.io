import supabase from '../service/supabase';

import { NAVER_PAGE_SIZE } from '../util/constants';

export async function getNavers(page) {
  const from = (page - 1) * NAVER_PAGE_SIZE;
  const to = from + NAVER_PAGE_SIZE - 1;

  const { data, error, count } = await supabase
    .from('naver')
    .select('*', { count: 'exact' })
    .range(from, to)
    .order('id', { ascending: false });

  if (error) throw new Error(error);

  return { navers: data, count };
}

export async function getNaver(id) {
  const { data, error } = await supabase.from('rookies').select('*').eq('id', id);
  if (error) throw new Error(error);
  return data?.at(0);
}
