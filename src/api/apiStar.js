import supabase from '../service/supabase';

import { STAR_PAGE_SIZE } from '../util/constants';

export async function getFromStars({ page, filter }) {
  const filterValue = filter === 'rv' ? 'red velvet' : filter;

  const from = (page - 1) * STAR_PAGE_SIZE;
  const to = from + STAR_PAGE_SIZE - 1;

  const { data, error, count } = await supabase
    .from('from_star')
    .select('*', { count: 'exact' })
    .eq('category', filterValue)
    .range(from, to)
    .order('id', { ascending: false });

  if (error) throw new Error(error.message);

  return { from_stars: data, count };
}

export async function getFromStar(id) {
  const { data, error } = await supabase.from('from_star').select('*').eq('id', id);
  if (error) throw new Error(error.message);
  return data?.at(0);
}

export async function getDiaries(page) {
  const from = (page - 1) * STAR_PAGE_SIZE;
  const to = from + STAR_PAGE_SIZE - 1;

  const { data, error, count } = await supabase
    .from('staff_diary')
    .select('*', { count: 'exact' })
    .range(from, to)
    .order('id', { ascending: false });

  if (error) throw new Error(error.message);

  return { diaries: data, count };
}

export async function getDiary(id) {
  const { data, error } = await supabase.from('staff_diary').select('*').eq('id', id);
  if (error) throw new Error(error.message);
  return data?.at(0);
}
