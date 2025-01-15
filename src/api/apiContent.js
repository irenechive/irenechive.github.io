import supabase from '../service/supabase';

import { CONTENT_PAGE_SIZE } from '../util/constants';

export async function getContents(page) {
  const from = (page - 1) * CONTENT_PAGE_SIZE;
  const to = from + CONTENT_PAGE_SIZE - 1;

  const { data, error, count } = await supabase
    .from('contents')
    .select('*', { count: 'exact' })
    .range(from, to)
    .order('id', { ascending: false });

  if (error) throw new Error(error.message);

  return { contents: data, count };
}

export async function getContent(id) {
  const { data, error } = await supabase.from('contents').select('*').eq('id', id);
  if (error) throw new Error(error.message);
  return data?.at(0);
}