import type { ReactElement, ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";
import React from "react";

export default function Layout({ children } : { children: ReactNode }) {
  return (
    <div>
      <Header />
      <div className="page-container" >
        {children}
      </div>
      <Footer />
    </div>
  )
}