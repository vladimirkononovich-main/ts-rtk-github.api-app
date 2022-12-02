import { useEffect, useState } from "react";

export function useDebounce(value: string, deley = 500): string {
  const [debounced, setDebounced] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => setDebounced(value), deley);
 
    return () => clearTimeout(handler);
  }, [value, deley]);

  return debounced;
}
