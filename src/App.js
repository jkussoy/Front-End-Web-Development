import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";

const App = () => {
  const [logoText, setLogoText] = useState("Ini Logo");

  const handleLogoClick = () => {
    setLogoText("Logo diklik!");
  };

  return (
    <div>
      <Header logoText={logoText} onLogoClick={handleLogoClick} />
      <Home logoText={logoText} onLogoClick={handleLogoClick} />
      <Footer />
    </div>
  );
};

export default App;
