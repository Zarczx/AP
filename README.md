# Exam 4 - Application Preferences (useContext, useState)

Run: `npm install` then `npm run dev`.

## Component tree
App > PreferencesProvider > Dashboard > Toolbar, PreferencesPanel, ArticlePreview

## Completed requirements
- One context (`src/context/PreferencesContext.js`) and one `PreferencesProvider`; every consumer imports the same context object.
- Shares `theme`, `fontSize`, `toggleTheme`, and `updateFontSize`.
- Toolbar toggles light/dark; Dashboard and ArticlePreview update together.
- PreferencesPanel switches font size among 14, 16, and 18 px; ArticlePreview changes with no prop drilling.
- `usePreferences` returns the context or throws `usePreferences must be used inside a <PreferencesProvider>.`

## Debugging cases
- **Only default value received:** a consumer rendered outside the provider gets the context default. The default here is `null`, so `usePreferences` throws a clear error instead of failing silently. Fix: wrap the tree in `PreferencesProvider`.
- **Two separate context objects:** if the provider and consumer each call `createContext`, they are different objects and the consumer never sees the provider's value. Fix: create once in `PreferencesContext.js` and import it everywhere.
- **Why context removes intermediate props:** `useContext` reads the nearest provider's value directly from any depth, so Dashboard does not need to receive and forward preference props to Toolbar, PreferencesPanel, or ArticlePreview.

## Known limitations
- Preferences reset on page reload (no persistence was required).
- Theme styling is applied to the Dashboard area, not the whole page background.

## Test steps
1. Click the theme button: Dashboard and ArticlePreview switch to dark together.
2. Click 14px, 16px, 18px: preview text size changes.
3. Temporarily render `<ArticlePreview />` outside the provider in `App.jsx`: the clear error appears.
