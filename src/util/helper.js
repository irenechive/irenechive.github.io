export function formatDate(data) {
  const originalDate = new Date(data);

  const year = originalDate.getFullYear();
  const month = (+originalDate.getMonth() + 1).toString().padStart(2, '0');
  const date = originalDate.getDate().toString().padStart(2, '0');

  return `${year}.${month}.${date}`;
}

export function formatLysnDate(data) {
  const originalDate = new Date(data);

  const year = originalDate.getFullYear();
  const month = (+originalDate.getMonth() + 1).toString().padStart(2, '0');
  const date = originalDate.getDate().toString().padStart(2, '0');

  return `${year}년 ${month}월 ${date}일`;
}

export function formatTime(data) {
  let label = '';
  const originalDate = new Date(data);

  let hour = originalDate.getHours();
  const min = originalDate.getMinutes();

  if (hour < 12) label = '오전';
  else label = '오후';

  if (hour > 12) hour -= 12;
  if (hour === 0) hour = 12;

  return `${label} ${hour.toString().padStart(2, '0')}:${min.toString().padStart(2, '0')}`;
}
