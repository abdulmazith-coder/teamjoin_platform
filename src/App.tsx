import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import Discover from "./pages/Discover";
import Profile from "./pages/Profile";
import TeamManagement from "./pages/TeamManagement";
import CreateTeamBox from "./pages/CreateTeamBox";
import IdeaDetail from "./pages/IdeaDetail";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Discover />} />
            <Route path="profile" element={<Profile />} />
            <Route path="team" element={<TeamManagement />} />
            <Route path="create" element={<CreateTeamBox />} />
            <Route path="idea-detail" element={<IdeaDetail />} />
          </Route>
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
