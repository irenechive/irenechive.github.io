function NoteIcon({ color = 'currentColor', strokeWidth = 2 }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="10" stroke={color} strokeWidth={strokeWidth} />
      <path d="M12 7V13" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      <circle cx="12" cy="16" r="1" fill={color} />
    </svg>
  );
}

export default NoteIcon;
