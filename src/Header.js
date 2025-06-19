import React from "react";
import Logo from "./Logo";
import Generations from "./Generations";

const Header = ({ logoText, onLogoClick }) => {
  return (
    <div>
      <h1>Header</h1>
      <Logo text={logoText} onClick={onLogoClick} />
      <Generations />
    </div>
  );
};

export default Header;
