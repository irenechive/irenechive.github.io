import supabase from '../service/supabase';

import { FEED_PAGE_SIZE } from '../util/constants';

export async function getInstagrams({ page, filter, member, year }) {
  const filterValue = filter === 'rv' ? 'red velvet' : filter;

  const from = (page - 1) * FEED_PAGE_SIZE;
  const to = from + FEED_PAGE_SIZE - 1;

  let query = supabase
    .from('instagram')
    .select('*', { count: 'exact' })
    .eq('category', filterValue)
    .range(from, to)
    .order('id', { ascending: false });

  if (member) query = query.eq(member.toLowerCase(), true);
  if (year) query = query.gte('created_at', `${year}-01-01`).lte('created_at', `${year}-12-31`);

  const { data, error, count } = await query;

  if (error) throw new Error(error.message);

  return { feed: data, count };
}

export async function getInstagram(id) {
  const { data, error } = await supabase.from('instagram').select('*').eq('id', id);
  if (error) throw new Error(error.message);
  return data?.at(0);
}

export async function getStories(page) {
  const from = (page - 1) * FEED_PAGE_SIZE;
  const to = from + FEED_PAGE_SIZE - 1;

  const { data, error, count } = await supabase
    .from('story')
    .select('*', { count: 'exact' })
    .range(from, to)
    .order('id', { ascending: false });

  if (error) throw new Error(error.message);

  return { stories: data, count };
}

export async function getStory(id) {
  const { data, error } = await supabase.from('story').select('*').eq('id', id);
  if (error) throw new Error(error.message);
  return data?.at(0);
}
