/** @jsx h */
/** @jsxFrag Fragment */
import { useEffect, useState } from "preact/hooks";

export const useIsMounted = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  return isMounted;
};
