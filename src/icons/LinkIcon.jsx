function LinkIcon({ color = 'currentColor', strokeWidth = 2 }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M14.1625 18.4876L13.4417 19.2084C11.053 21.5971 7.18019 21.5971 4.79151 19.2084C2.40283 16.8198 2.40283 12.9469 4.79151 10.5583L5.51236 9.8374"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      ></path>
      <path d="M9.8374 14.1625L14.1625 9.8374" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round"></path>
      <path
        d="M9.8374 5.51236L10.5583 4.79151C12.9469 2.40283 16.8198 2.40283 19.2084 4.79151C21.5971 7.18019 21.5971 11.053 19.2084 13.4417L18.4876 14.1625"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      ></path>
    </svg>
  );
}

export default LinkIcon;
