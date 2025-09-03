import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import AboutPage from "../pages/AboutPage/AboutPage";
import TestimonialsPage from "../pages/TestimonialsPage/TestimonialsPage";
import ServicePage from "../pages/ServicesPages/ServicePage";
import TeamPage from "../pages/TeamPage/TeamPage";
import TeamMemberProfile from "../pages/TeamPage/DetailTeamMemberpage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/testimonials" element={<TestimonialsPage />} />
      <Route path="/services/:slug" element={<ServicePage />} />
      <Route path="/team" element={<TeamPage />} />
              <Route path="/team/:slug" element={<TeamMemberProfile />} />
    </Routes>
  );
}
