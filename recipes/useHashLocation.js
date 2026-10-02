import { useState, useEffect } from 'react';

export function useHashLocation() {
  // Extract path from hash (e.g., "#/about" becomes "/about"). Default to "/"
  const getPath = () => window.location.hash.slice(1) || '/';
  const [location, setLocation] = useState(getPath);

  useEffect(() => {
    const handleHashChange = () => setLocation(getPath());
    
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return location;
}
