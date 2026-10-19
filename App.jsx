import { PreferencesProvider } from './context/PreferencesProvider.jsx';
import Dashboard from './components/Dashboard.jsx';

export default function App() {
  return (
    <PreferencesProvider>
      <main>
        <h1>Application Preferences</h1>
        <Dashboard />
      </main>
    </PreferencesProvider>
  );
}
