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
import SurahDetail from "@/pages/surah-detail";
import DuaAfterSalah from "@/pages/dua-after-salah";
import RabbanaDuas from "@/pages/rabbana-duas";
import Ruqiya from "@/pages/ruqiya";
import Manzil from "@/pages/manzil";
import AboutIslamPage from "@/pages/about-islam";
import NotFound from "@/pages/not-found";
import DailyBlogs from "@/pages/daily-blogs";
import BlogPost from "@/pages/blog-post";
import OnlineQuranTutor from "@/pages/online-quran-tutor";
import CommunityPage from "@/pages/community";
import DonatePage from "@/pages/donate";
import IslamicCalendarPage from "@/pages/islamic-calendar";
import PrayerTimesPage from "@/pages/prayer-times";
import ResourcesPage from "@/pages/resources";
import PrivacyPolicyPage from "@/pages/privacy-policy";
import TermsPage from "@/pages/terms";
import ContactPage from "@/pages/contact";
import RamadanAzkarPage from "@/pages/ramadan-azkar";
import Gallery from "@/pages/gallery";
import BenefitsOfMorningAzkar from "@/pages/benefits-of-morning-azkar";
import BenefitsOfEveningAzkar from "@/pages/benefits-of-evening-azkar";
import AuthenticHadithOnAzkar from "@/pages/authentic-hadith-on-azkar";
import WhenToReciteMorningAzkar from "@/pages/when-to-recite-morning-azkar";
import DuaAfterFajrPrayer from "@/pages/dua-after-fajr-prayer";
import DuaAfterMaghribPrayer from "@/pages/dua-after-maghrib-prayer";
import AzkarForAnxietyInIslam from "@/pages/azkar-for-anxiety-in-islam";
import DailyIslamicRemembranceGuide from "@/pages/daily-islamic-remembrance-guide";
import DifferenceBetweenDhikrAndDua from "@/pages/difference-between-dhikr-and-dua";
import QuranicDuasExplained from "@/pages/quranic-duas-explained";
import ProtectionDuasInIslam from "@/pages/protection-duas-in-islam";
import AzkarForProtectionFromEvilEye from "@/pages/azkar-for-protection-from-evil-eye";
import AzkarBeforeSleep from "@/pages/azkar-before-sleep";
import AzkarAfterEveryPrayer from "@/pages/azkar-after-every-prayer";
import ShortAzkarForBusyMuslims from "@/pages/short-azkar-for-busy-muslims";

// Hubs
import AzkarHub from "@/pages/hubs/azkar-hub";
import DuaHub from "@/pages/hubs/dua-hub";

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

          {/* Hub Indexes */}
          <Route path="/azkar" component={AzkarHub} />
          <Route path="/dua" component={DuaHub} />

          {/* Azkar Hub Routes */}
          <Route path="/azkar/morning" component={MorningAzkar} />
          <Route path="/azkar/evening" component={EveningAzkar} />
          <Route path="/azkar/ramadan" component={RamadanAzkarPage} />

          {/* Quran Hub Routes */}
          <Route path="/quran" component={Quran} />
          <Route path="/quran/surahs" component={Quran} />
          <Route path="/quran/surahs/:number" component={SurahDetail} />
          <Route path="/quran/ruqiya" component={Ruqiya} />
          <Route path="/quran/manzil" component={Manzil} />

          {/* Dua Hub Routes */}
          <Route path="/dua/after-salah" component={DuaAfterSalah} />
          <Route path="/dua/rabbana" component={RabbanaDuas} />

          {/* Tutor Hub Route */}
          <Route path="/tutor" component={OnlineQuranTutor} />

          {/* Blogs Routes */}
          <Route path="/blog" component={DailyBlogs} />
          <Route path="/blog/:slug" component={BlogPost} />

          {/* Original Route Paths (Redirects) */}
          <Route path="/morning-azkar"><RedirectTo to="/azkar/morning" /></Route>
          <Route path="/evening-azkar"><RedirectTo to="/azkar/evening" /></Route>
          <Route path="/ramadan-azkar"><RedirectTo to="/azkar/ramadan" /></Route>
          <Route path="/quran/:number"><RedirectTo to="/quran/surahs/:number" /></Route>
          <Route path="/dua-after-salah"><RedirectTo to="/dua/after-salah" /></Route>
          <Route path="/rabbana-duas"><RedirectTo to="/dua/rabbana" /></Route>
          <Route path="/ruqiya"><RedirectTo to="/quran/ruqiya" /></Route>
          <Route path="/manzil"><RedirectTo to="/quran/manzil" /></Route>
          <Route path="/daily-blogs"><RedirectTo to="/blog" /></Route>
          <Route path="/daily-blogs/:slug"><RedirectTo to="/blog/:slug" /></Route>
          <Route path="/online-quran-tutor"><RedirectTo to="/tutor" /></Route>

          {/* Resource Routes */}
          <Route path="/about-islam" component={AboutIslamPage} />
          <Route path="/prayer-times" component={PrayerTimesPage} />
          <Route path="/islamic-calendar" component={IslamicCalendarPage} />
          <Route path="/community" component={CommunityPage} />
          <Route path="/donate" component={DonatePage} />
          <Route path="/resources" component={ResourcesPage} />

          {/* Legal & Contact Routes */}
          <Route path="/privacy-policy" component={PrivacyPolicyPage} />
          <Route path="/terms" component={TermsPage} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/benefits-of-morning-azkar" component={BenefitsOfMorningAzkar} />
          <Route path="/benefits-of-evening-azkar" component={BenefitsOfEveningAzkar} />
          <Route path="/authentic-hadith-on-azkar" component={AuthenticHadithOnAzkar} />
          <Route path="/when-to-recite-morning-azkar" component={WhenToReciteMorningAzkar} />
          <Route path="/dua-after-fajr-prayer" component={DuaAfterFajrPrayer} />
          <Route path="/dua-after-maghrib-prayer" component={DuaAfterMaghribPrayer} />
          <Route path="/azkar-for-anxiety-in-islam" component={AzkarForAnxietyInIslam} />
          <Route path="/daily-islamic-remembrance-guide" component={DailyIslamicRemembranceGuide} />
          <Route path="/difference-between-dhikr-and-dua" component={DifferenceBetweenDhikrAndDua} />
          <Route path="/quranic-duas-explained" component={QuranicDuasExplained} />
          <Route path="/protection-duas-in-islam" component={ProtectionDuasInIslam} />
          <Route path="/azkar-for-protection-from-evil-eye" component={AzkarForProtectionFromEvilEye} />
          <Route path="/azkar-before-sleep" component={AzkarBeforeSleep} />
          <Route path="/azkar-after-every-prayer" component={AzkarAfterEveryPrayer} />
          <Route path="/short-azkar-for-busy-muslims" component={ShortAzkarForBusyMuslims} />

          {/* Legacy Redirects */}
          <Route path="/index.html"><RedirectTo to="/" /></Route>
          <Route path="/about.html"><RedirectTo to="/about-islam" /></Route>
          <Route path="/morning-azkar.html"><RedirectTo to="/morning-azkar" /></Route>
          <Route path="/evening-azkar.html"><RedirectTo to="/evening-azkar" /></Route>
          <Route path="/quran.html"><RedirectTo to="/quran" /></Route>
          <Route path="/dua-after-salah.html"><RedirectTo to="/dua-after-salah" /></Route>
          <Route path="/rabbana-duas.html"><RedirectTo to="/rabbana-duas" /></Route>
          <Route path="/ruqiya.html"><RedirectTo to="/ruqiya" /></Route>
          <Route path="/manzil.html"><RedirectTo to="/manzil" /></Route>
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
