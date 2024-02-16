import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./header/header.jsx";
import { Footer } from "./footer/footer.jsx";

export const MainLayout = () => {
  return (
    <div className="wrapper">
      <div>
        <Header />
        <main>
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
};
