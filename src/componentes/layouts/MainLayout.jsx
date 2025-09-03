import TopBar from "../Common/TopBar/TopBar";
import NavBarMain from "../Common/Navbar/NavBarMain";
import Footer from "../Common/Footer/Footer";
import { WhatsAppButton } from "../Common/WhatsappButton/whatsApp-button";

export default function MainLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <TopBar />
      <NavBarMain />
      <main className="flex-grow">{children}</main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}