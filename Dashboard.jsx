import { usePreferences } from '../context/usePreferences.js';
import Toolbar from './Toolbar.jsx';
import PreferencesPanel from './PreferencesPanel.jsx';
import ArticlePreview from './ArticlePreview.jsx';

export default function Dashboard() {
  const { theme } = usePreferences();
  return (
    <div className={`dashboard ${theme}`}>
      <Toolbar />
      <PreferencesPanel />
      <ArticlePreview />
    </div>
  );
}
