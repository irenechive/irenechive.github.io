function MenuIcon({ color = 'currentColor', strokeWidth = 2 }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 7L4 7" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      <path d="M20 12L4 12" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      <path d="M20 17L4 17" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
    </svg>
  );
}

export default MenuIcon;
