import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Instantly scroll to top on route change (no animation)
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
