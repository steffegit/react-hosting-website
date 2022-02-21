import React from "react";
import "./App.css";

import { Navbar, CTA } from "./components";
import { Features, Footer, Header, Packages } from "./containers";

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Features />
      <Packages />
      <CTA />
      <Footer />
    </div>
  );
};

export default App;
