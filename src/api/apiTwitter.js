import supabase from '../service/supabase';

import { TWEET_PAGE_SIZE } from '../util/constants';

export async function getTweets({ page, filter, era, member, year }) {
  const filterValue = filter === 'rv' ? 'red velvet' : filter;

  const from = (page - 1) * TWEET_PAGE_SIZE;
  const to = from + TWEET_PAGE_SIZE - 1;

  let query = supabase
    .from('twitter')
    .select('*', { count: 'exact' })
    .eq('category', filterValue)
    .range(from, to)
    .order('id', { ascending: false });

  if (era === 'none') query = query.eq('era', null);
  if (era && era !== 'none') query = query.eq('era', era);
  if (member) query = query.eq(member.toLowerCase(), true);
  if (year) query = query.gte('created_at', `${year}-01-01`).lte('created_at', `${year}-12-31`);

  const { data, error, count } = await query;

  if (error) throw new Error(error.message);

  return { tweets: data, count };
}

export async function getTweet(id) {
  const { data, error } = await supabase.from('twitter').select('*').eq('id', id);
  if (error) throw new Error(error.message);
  return data?.at(0);
}
