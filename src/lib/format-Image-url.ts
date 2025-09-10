// In lib/utils.ts

/**
 * Prepends the API base URL to a given path.
 * Handles cases where the path might be null or already a full URL.
 * @param path The partial path from the API (e.g., /files/image.jpg)
 * @returns The full image URL
 */
export const formatImageUrl = (path: string | null | undefined): string => {
  if (!path) {
    return '/images/placeholder.png'; 
  }

  if (path.startsWith('http')) {
    return path;
  }

  const baseUrl = process.env.NEXT_PUBLIC_API_URL;
  
  return `${baseUrl}${path.startsWith('/') ? '' : '/'}${path}`;
};