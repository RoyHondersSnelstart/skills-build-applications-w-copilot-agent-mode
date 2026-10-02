# Octofit Tracker Frontend

The React presentation tier reads data from the Express API on port 8000.

Define `VITE_CODESPACE_NAME` in `.env.local` when running in Codespaces:

```env
VITE_CODESPACE_NAME=your-codespace-name
```

When `VITE_CODESPACE_NAME` is set, API requests use `https://$VITE_CODESPACE_NAME-8000.app.github.dev/api/[component]/`. When it is unset, the app safely falls back to `http://localhost:8000/api/[component]/`.
