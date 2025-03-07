function ChevronLeftIcon({ color = 'currentColor', strokeWidth = 2 }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M15 5L9 12L15 19"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default ChevronLeftIcon;
