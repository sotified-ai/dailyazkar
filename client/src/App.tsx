import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { FloatingActions } from "@/components/floating-actions";
import { useScrollProgress } from "@/hooks/use-scroll-progress";

// Pages
import Home from "@/pages/home";
import MorningAzkar from "@/pages/morning-azkar";
import EveningAzkar from "@/pages/evening-azkar";
import Quran from "@/pages/quran";
import DuaAfterSalah from "@/pages/dua-after-salah";
import RabbanaDuas from "@/pages/rabbana-duas";
import Ruqiya from "@/pages/ruqiya";
import NotFound from "@/pages/not-found";

function ReadingProgress() {
  const progress = useScrollProgress();
  
  return (
    <div 
      className="progress-bar w-full"
      style={{ transform: `scaleX(${progress / 100})` }}
    />
  );
}

function Router() {
  return (
    <div className="min-h-screen flex flex-col">
      <ReadingProgress />
      <Header />
      <main className="flex-1">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/morning-azkar" component={MorningAzkar} />
          <Route path="/evening-azkar" component={EveningAzkar} />
          <Route path="/quran" component={Quran} />
          <Route path="/dua-after-salah" component={DuaAfterSalah} />
          <Route path="/rabbana-duas" component={RabbanaDuas} />
          <Route path="/ruqiya" component={Ruqiya} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
