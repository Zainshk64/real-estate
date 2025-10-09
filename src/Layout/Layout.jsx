import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BackToTopButton from "../components/BackToTopButton";

const Layout = ({ children }) => {
  return (
    <div className="h-screen text-ink flex flex-col">
      <Navbar />
      <BackToTopButton/>
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
