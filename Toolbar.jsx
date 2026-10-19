import { usePreferences } from '../context/usePreferences.js';

export default function Toolbar() {
  const { theme, toggleTheme } = usePreferences();
  return (
    <div className="row toolbar">
      <strong>Toolbar</strong>
      <button onClick={toggleTheme}>Switch to {theme === 'light' ? 'dark' : 'light'} theme</button>
    </div>
  );
}
