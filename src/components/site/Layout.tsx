import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);

  return null;
};

export const Layout = () => (
  <div className="relative min-h-screen overflow-x-hidden">
    <ScrollToTop />
    <Header />
    <main className="pt-16 md:pt-20">
      <Outlet />
    </main>
    <Footer />
  </div>
);
