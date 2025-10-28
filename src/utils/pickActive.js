// Ujednolicenie ścieżki: bez query/hash i z 1 trailing slashem
export const normalizePath = (raw = '/') => {
  const url = new URL(raw, 'https://dummy.local');
  const clean = url.pathname.replace(/\/+$/, '/') || '/';
  return clean;
};

// Dopasowanie ścieżek do kluczy pozycji menu
export const pickActive = (pathname) => {
  const p = normalizePath(pathname);

  // >>> dopasuj do swoich podstron <<<
  if (p === '/') return 'home';
  if (p.startsWith('/strony-wordpress/')) return 'wordpress';
  if (p.startsWith('/sklepy-internetowe/')) return 'sklep';
  if (p.startsWith('/aplikacje-webowe/')) return 'aplikacje';
  if (p.startsWith('/formularz-szybkiej-wyceny/')) return 'formularz-wyceny';
  if (p.startsWith('/strony-lms/')) return 'lms';
  if (p.startsWith('/portfolio/')) return 'portfolio';
  if (p.startsWith('/blog/')) return 'blog';
  if (p.startsWith('/kontakt/')) return 'kontakt';
  if (p.startsWith('/projektowanie-logo/')) return 'logo';
  if (p.startsWith('/strony-niestandardowe/')) return 'html';

  return null; // brak dopasowania
};
