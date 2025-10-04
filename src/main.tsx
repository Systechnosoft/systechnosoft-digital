import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Disable scroll restoration globally for instant hero landing
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

// Enable smooth scrolling after page load for in-page navigation
window.addEventListener('load', () => {
  document.documentElement.classList.add('enable-smooth');
});

createRoot(document.getElementById("root")!).render(<App />);
