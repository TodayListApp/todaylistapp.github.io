import { AnimatePresence, motion } from "framer-motion";
import { Monitor, Moon, Sun } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import {
  Link,
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
} from "react-router-dom";
import {
  ArchiveIcon,
  CheckIcon,
  DownloadIcon,
  SunIcon,
} from "./components/Icons";
import { ManifestoPage } from "./components/ManifestoPage";
import { MockupCarousel } from "./components/MockupCarousel";
import { PrivacyPolicy } from "./components/PrivacyPolicy";
import { TermsAndConditions } from "./components/TermsAndConditions";

type Theme = "light" | "dark" | "system";

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace("#", ""));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
  return null;
};

function AppContent() {
  const [theme, setTheme] = useState<Theme>("system");
  const [isThemeOpen, setIsThemeOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = document.documentElement;

    const applyTheme = (t: Theme) => {
      if (t === "system") {
        const systemDark = window.matchMedia(
          "(prefers-color-scheme: dark)",
        ).matches;
        root.classList.toggle("dark", systemDark);
      } else {
        root.classList.toggle("dark", t === "dark");
      }
    };

    applyTheme(theme);

    if (theme === "system") {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      const handleChange = () => applyTheme("system");
      mediaQuery.addEventListener("change", handleChange);
      return () => mediaQuery.removeEventListener("change", handleChange);
    }
  }, [theme]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsThemeOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const themeIcons = {
    light: <Sun className="w-4 h-4" />,
    dark: <Moon className="w-4 h-4" />,
    system: <Monitor className="w-4 h-4" />,
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 overflow-x-hidden selection:bg-orange-100 selection:text-orange-900 transition-colors duration-300">
      <ScrollToTop />

      {/* Navigation */}
      <nav className="fixed w-full bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md border-b border-zinc-100 dark:border-zinc-800 z-50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-2 font-bold text-xl tracking-tight cursor-pointer"
          >
            <div className="w-8 h-8 bg-linear-to-br from-orange-500 to-amber-500 rounded-lg flex items-center justify-center text-white">
              <SunIcon className="w-5 h-5" />
            </div>
            Today
          </Link>
          <div className="hidden md:flex gap-8 text-sm font-medium text-zinc-500 dark:text-zinc-400">
            <Link
              to="/#how-it-works"
              className="hover:text-zinc-900 dark:hover:text-white transition-colors"
            >
              How it works
            </Link>
            <Link
              to="/manifesto"
              className="hover:text-zinc-900 dark:hover:text-white transition-colors"
            >
              Manifesto
            </Link>
          </div>
          <div className="flex items-center gap-4">
            {/* Theme Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsThemeOpen(!isThemeOpen)}
                className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors text-zinc-500 dark:text-zinc-400 text-sm font-medium border border-zinc-200 dark:border-zinc-800"
              >
                {themeIcons[theme]}
              </button>

              <AnimatePresence>
                {isThemeOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    className="absolute right-0 mt-2 w-32 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-xl overflow-hidden z-50"
                  >
                    {(["light", "dark", "system"] as Theme[]).map((t) => (
                      <button
                        key={t}
                        onClick={() => {
                          setTheme(t);
                          setIsThemeOpen(false);
                        }}
                        className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm transition-colors ${
                          theme === t
                            ? "bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white font-semibold"
                            : "text-zinc-500 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-800/50"
                        }`}
                      >
                        {themeIcons[t]}
                        <span className="capitalize">{t}</span>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <a
              href="#download"
              className="px-5 py-2 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 text-sm font-medium rounded-full hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors"
            >
              Get App
            </a>
          </div>
        </div>
      </nav>

      <Routes>
        <Route
          path="/"
          element={
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {/* Hero Section */}
              <section className="pt-32 pb-20 px-6">
                <div className="max-w-4xl mx-auto text-center">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-medium mb-6">
                    <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                    Now available for iOS 18
                  </div>
                  <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-zinc-900 dark:text-white mb-6 leading-tight">
                    Every day is a <br className="hidden md:block" />
                    <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-600 to-amber-500 dark:from-orange-400 dark:to-amber-200 drop-shadow-sm dark:drop-shadow-[0_0_20px_rgba(251,146,60,0.2)]">
                      fresh start.
                    </span>
                  </h1>
                  <p className="text-xl text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                    The minimal to-do app that clears your list every morning.
                    Focus on today, archive the rest for later. Built natively
                    for Apple devices.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20">
                    <button className="flex items-center gap-3 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 px-8 py-4 rounded-2xl hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-all hover:scale-105 active:scale-95 shadow-xl shadow-zinc-200 dark:shadow-none">
                      <DownloadIcon className="w-6 h-6" />
                      <div className="text-left">
                        <div className="text-xs text-zinc-400 dark:text-zinc-500 font-medium">
                          Download on the
                        </div>
                        <div className="text-lg font-bold leading-none">
                          App Store
                        </div>
                      </div>
                    </button>
                    <button className="flex items-center gap-3 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white border border-zinc-200 dark:border-zinc-800 px-8 py-4 rounded-2xl hover:border-zinc-300 dark:hover:border-zinc-700 transition-all hover:scale-105 active:scale-95">
                      <div className="text-left">
                        <div className="text-xs text-zinc-400 font-medium">
                          Download for
                        </div>
                        <div className="text-lg font-bold leading-none">
                          Mac OS
                        </div>
                      </div>
                    </button>
                  </div>
                </div>

                {/* Mockup Component */}
                <div id="how-it-works" className="scroll-mt-24">
                  <MockupCarousel />
                </div>
              </section>

              {/* Feature Grid */}
              <section className="py-24 bg-zinc-50 dark:bg-zinc-900/50 border-t border-zinc-200 dark:border-zinc-800">
                <div className="max-w-6xl mx-auto px-6">
                  <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold tracking-tight mb-4 text-zinc-900 dark:text-white">
                      Why Today is different
                    </h2>
                    <p className="text-zinc-500 dark:text-zinc-400 text-lg">
                      Most to-do apps become graveyards of guilt. Today is
                      designed to forgive you and keep you moving forward.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-white dark:bg-zinc-900 p-8 rounded-3xl border border-zinc-100 dark:border-zinc-800 shadow-sm hover:shadow-md transition-shadow">
                      <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center text-blue-600 dark:text-blue-400 mb-6">
                        <SunIcon className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-bold mb-3 text-zinc-900 dark:text-white">
                        The Morning Reset
                      </h3>
                      <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed">
                        When you wake up, your list is empty. No red badges, no
                        overdue alerts. Just a clean slate to decide what
                        matters <em>today</em>.
                      </p>
                    </div>

                    <div className="bg-white dark:bg-zinc-900 p-8 rounded-3xl border border-zinc-100 dark:border-zinc-800 shadow-sm hover:shadow-md transition-shadow">
                      <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-2xl flex items-center justify-center text-orange-600 dark:text-orange-400 mb-6">
                        <ArchiveIcon className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-bold mb-3 text-zinc-900 dark:text-white">
                        The Drawer
                      </h3>
                      <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed">
                        Unfinished tasks aren't deleted—they are safe in the
                        Drawer. Drag them out when you have time, or leave them
                        there until you do.
                      </p>
                    </div>

                    <div className="bg-white dark:bg-zinc-900 p-8 rounded-3xl border border-zinc-100 dark:border-zinc-800 shadow-sm hover:shadow-md transition-shadow">
                      <div className="w-12 h-12 bg-zinc-100 dark:bg-zinc-800 rounded-2xl flex items-center justify-center text-zinc-900 dark:text-zinc-100 mb-6">
                        <CheckIcon className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-bold mb-3 text-zinc-900 dark:text-white">
                        SwiftUI Native
                      </h3>
                      <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed">
                        Built with 100% native SwiftUI. It feels like part of
                        your phone. Haptic feedback, smooth animations, and
                        widget support included.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Manifesto / Design Philosophy Section */}
              <section
                id="manifesto"
                className="py-24 px-6 bg-zinc-900 dark:bg-zinc-950 text-white"
              >
                <div className="max-w-4xl mx-auto">
                  <div className="text-center mb-16">
                    <p className="text-orange-500 font-mono text-sm uppercase tracking-widest mb-4">
                      Our Philosophy
                    </p>
                    <h2 className="text-4xl md:text-5xl font-serif italic leading-tight">
                      "Productivity isn't about doing more things. It's about
                      doing the right things."
                    </h2>
                  </div>

                  <div className="grid md:grid-cols-2 gap-12 text-zinc-400 text-lg leading-relaxed">
                    <div>
                      <h3 className="text-white text-xl font-bold mb-4">
                        The Guilt Graveyard
                      </h3>
                      <p className="mb-6">
                        Traditional to-do apps are designed to accumulate. You
                        add a task, you miss the deadline, and it turns red.
                        Over time, your "Today" view becomes a scrolling list of
                        past failures. We call this the "Guilt Graveyard."
                      </p>
                      <p>
                        When you open your phone and see 43 overdue tasks, you
                        don't feel motivated. You feel overwhelmed. So you close
                        the app and do nothing.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-white text-xl font-bold mb-4">
                        The Fresh Start
                      </h3>
                      <p className="mb-6">
                        We believe that every sunrise is a pardon. Yesterday's
                        failures shouldn't haunt today's potential.
                      </p>
                      <p>
                        That's why <strong>Today</strong> wipes your slate clean
                        every single morning. Tasks you didn't finish aren't
                        deleted—they are gently moved to "The Drawer," a safe
                        backlog that doesn't clutter your daily focus. You can
                        retrieve them when you're ready, but they won't stare at
                        you until you are.
                      </p>
                    </div>
                  </div>

                  <div className="mt-16 p-8 bg-zinc-800/50 dark:bg-zinc-900 rounded-2xl border border-zinc-700 dark:border-zinc-800 text-center">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      Ready to forgive yourself?
                    </h3>
                    <p className="text-zinc-400 mb-6">
                      Join thousands of people who have swapped anxiety for
                      clarity.
                    </p>
                    <Link
                      to="/manifesto"
                      className="inline-block bg-linear-to-br from-orange-500 to-amber-500 text-white px-8 py-3 rounded-full font-bold hover:scale-105 transition-all shadow-lg shadow-orange-900/20"
                    >
                      Read the full Manifesto &rarr;
                    </Link>
                  </div>
                </div>
              </section>
            </motion.div>
          }
        />
        <Route path="/manifesto" element={<ManifestoPage />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsAndConditions />} />
      </Routes>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
            <Link
              to="/"
              className="flex items-center gap-2 font-bold text-lg cursor-pointer"
            >
              <div className="w-6 h-6 bg-linear-to-br from-orange-500 to-amber-500 rounded-md flex items-center justify-center text-white">
                <SunIcon className="w-3 h-3" />
              </div>
              Today
            </Link>
            <div className="flex flex-wrap justify-center gap-8 text-sm font-medium text-zinc-500 dark:text-zinc-400">
              <Link
                to="/manifesto"
                className="hover:text-zinc-900 dark:hover:text-white transition-colors"
              >
                Manifesto
              </Link>
              <Link
                to="/privacy"
                className="hover:text-zinc-900 dark:hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="hover:text-zinc-900 dark:hover:text-white transition-colors"
              >
                Terms & Conditions
              </Link>
            </div>
            <div className="flex gap-6 text-zinc-400">
              <a href="#" className="hover:text-zinc-900 dark:hover:text-white">
                <span className="sr-only">Twitter</span>
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a href="#" className="hover:text-zinc-900 dark:hover:text-white">
                <span className="sr-only">Instagram</span>
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
            </div>
          </div>
          <div className="text-center text-sm text-zinc-400 dark:text-zinc-500 pt-8 border-t border-zinc-100 dark:border-zinc-900">
            &copy; {new Date().getFullYear()} Today App Inc. All rights
            reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
