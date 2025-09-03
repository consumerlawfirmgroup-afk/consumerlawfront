import { BrowserRouter as Router } from "react-router-dom";
import MainLayout from "./componentes/layouts/MainLayout";
import AppRoutes from "./routes";
import ScrollToTop from "../src/utils/ScrollToTop";
import "./i18n";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <MainLayout>
        <AppRoutes />
      </MainLayout>
    </Router>
  );
}

export default App;