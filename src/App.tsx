import React from "react";
import Hero from "./components/Hero";
//import EmailSubscribe from "./components/EmailSubscribe";
import DropTeaser from "./components/DropTeaser";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      {/* <EmailSubscribe />*/}
      <DropTeaser />
      <About />
      <Footer />
    </div>
  );
}

export default App;
