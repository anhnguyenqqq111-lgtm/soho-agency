export const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export function sitePath(path){
  if (!path) return path;
  if (path.startsWith('http') || path.startsWith('mailto:') || path.startsWith('#')) return path;
  if (path === '/') return `${basePath}/`;
  if (path.startsWith('/')) return `${basePath}${path}`;
  return path;
}
