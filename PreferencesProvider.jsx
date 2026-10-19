import { useCallback, useMemo, useState } from 'react';
import { PreferencesContext } from './PreferencesContext.js';

export const FONT_SIZES = [14, 16, 18];

export function PreferencesProvider({ children }) {
  const [theme, setTheme] = useState('light');
  const [fontSize, setFontSize] = useState(16);

  const toggleTheme = useCallback(() => setTheme((t) => (t === 'light' ? 'dark' : 'light')), []);
  const updateFontSize = useCallback((size) => {
    if (FONT_SIZES.includes(size)) setFontSize(size);
  }, []);

  const value = useMemo(
    () => ({ theme, fontSize, toggleTheme, updateFontSize }),
    [theme, fontSize, toggleTheme, updateFontSize]
  );

  return <PreferencesContext.Provider value={value}>{children}</PreferencesContext.Provider>;
}
