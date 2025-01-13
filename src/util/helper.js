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
