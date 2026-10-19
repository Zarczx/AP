import { usePreferences } from '../context/usePreferences.js';

export default function ArticlePreview() {
  const { theme, fontSize } = usePreferences();
  return (
    <article className="panel" style={{ fontSize }}>
      <h2>Article preview</h2>
      <p>Current theme: {theme}. Font size: {fontSize}px.</p>
      <p>
        Context shares these preferences with every consumer, so Dashboard, Toolbar,
        PreferencesPanel, and ArticlePreview never pass them to each other as props.
      </p>
    </article>
  );
}
