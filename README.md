# Rick and Morty Characters

A React application that fetches and displays characters from the [Rick and Morty API](https://rickandmortyapi.com/) with search, filtering, and pagination.

## Features

- Browse all Rick and Morty characters with name, image, and status
- Search characters by name with debounced input
- Filter by status (Alive, Dead)
- Paginated results with page number navigation
- Light/dark mode toggle with localStorage persistence
- Skeleton loading state
- Responsive grid layout

## Tech Stack

- **React 19** with TypeScript
- **Vite** for dev server and bundling
- **Tailwind CSS v4** for styling
- **TanStack React Query** for data fetching and caching
- **Axios** for HTTP requests
- **Prettier** with Tailwind CSS plugin for formatting
- **ESLint** for linting

## Project Structure

```
src/
  api/                  # API hooks (React Query)
  assets/               # SVGs, images
  components/           # Shared components (Header, Pagination)
  hooks/                # Shared hooks (useDebounce, useTheme)
  pages/
    Characters/
      components/       # Character, CharacterList, CharacterSkeleton
      hooks/            # useCharacters (page-level state)
      Characters.tsx    # Page component
  services/             # API service functions
  utils/                # Utility functions
  types.ts              # Shared TypeScript types
  App.tsx
  main.tsx
  index.css
```

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Environment Variables

Create a `.env` file in the project root:

```
VITE_API_BASE_URL=https://rickandmortyapi.com/api
```

## Scripts

| Command           | Description               |
| ----------------- | ------------------------- |
| `npm run dev`     | Start dev server          |
| `npm run build`   | Type-check and build      |
| `npm run format`  | Format code with Prettier |
| `npm run lint`    | Lint with ESLint          |
| `npm run preview` | Preview production build  |
