import React from "react";
import Search from "./Search";
import CardInfo from "./CardInfo";

const Home = ({ logoText, onLogoClick }) => {
  return (
    <div>
      <h1>Home</h1>
      <Search />
      <CardInfo logoText={logoText} onLogoClick={onLogoClick} />
    </div>
  );
};

export default Home;
