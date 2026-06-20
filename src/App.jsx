// ============================================================================
// App.jsx -- Router root
// ============================================================================
// Uses createBrowserRouter with basename derived from Vite's BASE_URL so the
// same build works in both local dev (/ppi-monash-website-1/) and GitHub Pages.
//
// NOTE (GitHub Pages): static hosts return 404 for deep routes like /about on
// direct load. Two options to fix this for production:
//   A) Add a public/404.html that redirects to index.html (recommended)
//   B) Switch to HashRouter (#/about style URLs) -- zero server config needed
// For now, all client-side navigation works perfectly; this only affects
// copy-pasted/bookmarked deep URLs in production.
//
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LanguageProvider } from "./i18n/LanguageContext";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import StudentGuide from "./pages/StudentGuide";
import StudentGuideDetail from "./pages/StudentGuideDetail";
import TeamPage from "./pages/TeamPage";
import EventsPage from "./pages/EventsPage";
import EventDetail from "./pages/EventDetail";
import ArticlesPage from "./pages/ArticlesPage";
import ArticleDetail from "./pages/ArticleDetail";
import FaqPage from "./pages/FaqPage";
import ContactPage from "./pages/ContactPage";
import LeadershipHistory from "./pages/LeadershipHistory";
import Collaboration from "./pages/Collaboration";
import PPINetwork from "./pages/PPINetwork";
import Privacy from "./pages/Privacy";
import Organization from "./pages/Organization";
import "./styles/global.css";

const basename = import.meta.env.BASE_URL.replace(/\/$/, "");

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "about", element: <AboutPage /> },
        { path: "about/history", element: <LeadershipHistory /> },
        { path: "guide", element: <StudentGuide /> },
        { path: "guide/:id", element: <StudentGuideDetail /> },
        { path: "team", element: <TeamPage /> },
        { path: "events", element: <EventsPage /> },
        { path: "events/:id", element: <EventDetail /> },
        { path: "articles", element: <ArticlesPage /> },
        { path: "articles/:id", element: <ArticleDetail /> },
        { path: "collaboration", element: <Collaboration /> },
        { path: "network", element: <PPINetwork /> },
        { path: "faq", element: <FaqPage /> },
        { path: "contact", element: <ContactPage /> },
        { path: "privacy", element: <Privacy /> },
        { path: "organization", element: <Organization /> },
      ],
    },
  ],
  { basename }
);

export default function App() {
  return (
    <LanguageProvider>
      <RouterProvider router={router} />
    </LanguageProvider>
  );
}
