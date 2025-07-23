'use client';

import { useEffect, useState } from 'react';

export default function ThemeSwitch() {
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    const html = document.documentElement;
    if (isLight) {
      html.setAttribute('data-theme', 'light');
      document.documentElement.classList.remove('dark');
    } else {
      html.removeAttribute('data-theme');
      document.documentElement.classList.add('dark');
    }
    
    void html.offsetHeight;
  }, [isLight]);

  return (
    <label className="flex cursor-pointer gap-2 items-center">
      {/* Icône lune */}
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none"
           stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
           viewBox="0 0 24 24">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
      </svg>

      {/* Toggle switch */}
      <input
        id="toggle-theme"
        type="checkbox"
        className="toggle"
        checked={isLight}
        onChange={() => setIsLight(!isLight)}
      />

      {/* Icône soleil */}
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none"
           stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
           viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="5" />
        <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
      </svg>
    </label>
  );
}