import { useEffect } from "react";

export const interval = (delay = 3000) => (
  callback: any
) =>
  useEffect(() => {
    const id = setInterval(callback, delay);
    return () => clearInterval(id);
  }, [callback]);

