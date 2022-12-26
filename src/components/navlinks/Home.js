import React from "react";
import Best from "../best/Best";
import Footer from "../footer/Footer";
import Hero from "../hero/Hero";
import Navbar from "../navbar/Navbar";

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Best />
      <Footer />
    </div>
  );
}

export default Home;
