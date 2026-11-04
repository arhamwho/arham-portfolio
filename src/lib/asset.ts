/** Resolve a file in /public against Vite's base path (needed on GitHub Pages). */
export function asset(path: string) {
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`;
}
