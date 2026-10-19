import { usePreferences } from '../context/usePreferences.js';
import { FONT_SIZES } from '../context/PreferencesProvider.jsx';

export default function PreferencesPanel() {
  const { fontSize, updateFontSize } = usePreferences();
  return (
    <section className="panel">
      <h2>Preferences</h2>
      <div className="row">
        {FONT_SIZES.map((size) => (
          <button
            key={size}
            className={size === fontSize ? 'active' : 'secondary'}
            aria-pressed={size === fontSize}
            onClick={() => updateFontSize(size)}
          >
            {size}px
          </button>
        ))}
      </div>
    </section>
  );
}
