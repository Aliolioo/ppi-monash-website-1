import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Footer } from "./Contact";
import { ScrollToTop } from "./ScrollToTop";
import { Analytics } from "./Analytics";
import { ConsentBanner } from "./ConsentBanner";

export default function Layout() {
  return (
    <>
      <ScrollToTop />
      <Analytics />
      <Navbar />
      <Outlet />
      <Footer />
      <ConsentBanner />
    </>
  );
}
