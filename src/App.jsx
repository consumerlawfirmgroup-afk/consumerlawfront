import { BrowserRouter as Router } from "react-router-dom";
import MainLayout from "./componentes/layouts/MainLayout";
import AppRoutes from "./routes";
import ScrollToTop from "../src/utils/ScrollToTop";
import "./i18n";

function App() {

  const hasPendingPayment = true; 

  return (
    <Router>
      <ScrollToTop />
      {hasPendingPayment ? (
        <div className="bg-negro-100 min-h-screen flex items-center justify-center">
          <h1 className="text-3xl font-bold underline text-center my-4">
            SALDO PENDIENTE, CANCELAR LO MAS PRONTO POSIBLE PARA HABILITAR CONTENIDO
          </h1>
        </div>
      ) : (
        <MainLayout>
          <AppRoutes />
        </MainLayout>
      )}
    </Router>
  );
}

export default App;