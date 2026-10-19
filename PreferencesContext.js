import { createContext } from 'react';

// The single context object. Provider and consumers must import this same instance.
// Default is null so a missing provider can be detected.
export const PreferencesContext = createContext(null);
