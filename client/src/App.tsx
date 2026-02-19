import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { FloatingActions } from "@/components/floating-actions";
import { useScrollProgress } from "@/hooks/use-scroll-progress";
import { useEffect } from "react";
import { initGA } from "./lib/analytics";
import { useAnalytics } from "./hooks/use-analytics";
import { GoogleTagManager } from "@/components/adsense";

// Pages
import Home from "@/pages/home";
import MorningAzkar from "@/pages/morning-azkar";
import EveningAzkar from "@/pages/evening-azkar";
import Quran from "@/pages/quran";
import DuaAfterSalah from "@/pages/dua-after-salah";
import RabbanaDuas from "@/pages/rabbana-duas";
import Ruqiya from "@/pages/ruqiya";
import AboutIslamPage from "@/pages/about-islam";
import NotFound from "@/pages/not-found";
import CommunityPage from "@/pages/community";
import DonatePage from "@/pages/donate";
import IslamicCalendarPage from "@/pages/islamic-calendar";
import PrayerTimesPage from "@/pages/prayer-times";
import ResourcesPage from "@/pages/resources";


function ReadingProgress() {
  const progress = useScrollProgress();

  return (
    <div
      className="progress-bar w-full"
      style={{ transform: `scaleX(${progress / 100})` }}
    />
  );
}

function RedirectTo({ to }: { to: string }) {
  const [, setLocation] = useLocation();
  useEffect(() => {
    setLocation(to);
  }, [to, setLocation]);
  return null;
}

function Router() {
  // Track page views when routes change
  useAnalytics();

  return (
    <div className="min-h-screen flex flex-col">
      <ReadingProgress />
      <Header />
      <main className="flex-1">
        <Switch>
          {/* Main Routes */}
          <Route path="/" component={Home} />
          <Route path="/morning-azkar" component={MorningAzkar} />
          <Route path="/evening-azkar" component={EveningAzkar} />
          <Route path="/quran" component={Quran} />
          <Route path="/dua-after-salah" component={DuaAfterSalah} />
          <Route path="/rabbana-duas" component={RabbanaDuas} />
          <Route path="/ruqiya" component={Ruqiya} />

          {/* Resource Routes */}
          <Route path="/about-islam" component={AboutIslamPage} />
          <Route path="/prayer-times" component={PrayerTimesPage} />
          <Route path="/islamic-calendar" component={IslamicCalendarPage} />
          <Route path="/community" component={CommunityPage} />
          <Route path="/donate" component={DonatePage} />
          <Route path="/resources" component={ResourcesPage} />


          {/* Legacy Redirects */}
          <Route path="/index.html"><RedirectTo to="/" /></Route>
          <Route path="/about.html"><RedirectTo to="/about-islam" /></Route>
          <Route path="/morning-azkar.html"><RedirectTo to="/morning-azkar" /></Route>
          <Route path="/evening-azkar.html"><RedirectTo to="/evening-azkar" /></Route>
          <Route path="/quran.html"><RedirectTo to="/quran" /></Route>
          <Route path="/dua-after-salah.html"><RedirectTo to="/dua-after-salah" /></Route>
          <Route path="/rabbana-duas.html"><RedirectTo to="/rabbana-duas" /></Route>
          <Route path="/ruqiya.html"><RedirectTo to="/ruqiya" /></Route>
          <Route path="/prayer-times.html"><RedirectTo to="/prayer-times" /></Route>
          <Route path="/islamic-calendar.html"><RedirectTo to="/islamic-calendar" /></Route>
          <Route path="/community.html"><RedirectTo to="/community" /></Route>
          <Route path="/donate.html"><RedirectTo to="/donate" /></Route>
          <Route path="/resources.html"><RedirectTo to="/resources" /></Route>

          {/* 404 Route */}
          <Route component={NotFound} />
        </Switch>
      </main>
      <FloatingActions />
      <Footer />
    </div>
  );
}

function App() {
  // Initialize Google Analytics when app loads
  useEffect(() => {
    // Verify required environment variable is present
    if (!import.meta.env.VITE_GA_MEASUREMENT_ID) {
      console.warn('Missing required Google Analytics key: VITE_GA_MEASUREMENT_ID');
    } else {
      initGA();
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <TooltipProvider>
          <GoogleTagManager />
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
