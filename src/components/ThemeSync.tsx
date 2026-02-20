import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

export function ThemeSync() {
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const themeParam = searchParams.get("theme");
    
    if (themeParam === "designer" || themeParam === "developer") {
      const root = window.document.documentElement;
      root.classList.remove("light", "dark", "theme-designer", "theme-developer");
      
      if (themeParam === "designer") {
        root.classList.add("light", "theme-designer");
        root.style.colorScheme = 'light';
      } else if (themeParam === "developer") {
        root.classList.add("dark", "theme-developer");
        root.style.colorScheme = 'dark';
      }
    } else {
      // Default to designer theme if no valid theme param is present
      setSearchParams({ theme: "designer" }, { replace: true });
    }
  }, [searchParams, setSearchParams]);

  return null;
}
