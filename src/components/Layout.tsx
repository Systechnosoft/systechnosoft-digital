import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { ConsentProvider } from "./consent/ConsentProvider";
import { CookieBanner } from "./consent/CookieBanner";
import { CookiePanel } from "./consent/CookiePanel";

export default function Layout() {
  return (
    <ConsentProvider>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main id="main-content" className="flex-1">
          <Outlet />
        </main>
        <Footer />
        <CookieBanner />
        <CookiePanel />
      </div>
    </ConsentProvider>
  );
}