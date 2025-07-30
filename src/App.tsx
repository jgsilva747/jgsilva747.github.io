import { useEffect } from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

// --- Page Imports ---
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// --- Google Analytics Import ---
import ReactGA from 'react-ga4';

// 1. INITIALIZE GOOGLE ANALYTICS
// It's best to do this once, outside of any component.
const GA_MEASUREMENT_ID = "G-NY7PMVZY7D"; // Your actual ID
ReactGA.initialize(GA_MEASUREMENT_ID);


// 2. CREATE A COMPONENT TO TRACK ROUTE CHANGES
const RouteChangeTracker = () => {
  const location = useLocation();

  useEffect(() => {
    // This effect runs every time the location changes
    ReactGA.send({ hitType: "pageview", page: location.pathname + location.search });
    console.log(`Pageview sent for: ${location.pathname + location.search}`); // For debugging
  }, [location]); // Dependency array ensures it runs on location change

  return null; // This component does not render anything
};


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        {/* 3. PLACE THE TRACKER COMPONENT INSIDE THE ROUTER */}
        <RouteChangeTracker />

        <Routes>
          <Route path="/" element={<Index />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
