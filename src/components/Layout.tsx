
import { ReactNode } from "react";
import { useLocation } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-background to-accent">
      <NavBar />
      <main className="flex-grow" key={location.pathname}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
