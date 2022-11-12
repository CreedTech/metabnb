import React from "react";
import Collections from "../Collections";
import Hero from "../Hero";
import LearnMore from "../LearnMore";
import Footer from "./Footer";
import Header from "./Header";

const Layout = () => {
  return (
    <>
      <Header />
      <Hero />
      <Collections />
      <LearnMore/>
      <Footer />
    </>
  );
};

export default Layout;
