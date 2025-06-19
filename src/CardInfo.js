import Evolution from "./Evolution";
import TypeEffect from "./TypeEffect";
import Logo from "./Logo";

const CardInfo = ({ logoText, onLogoClick }) => {
  return (
    <div>
      <h1>Card-Info</h1>
      <Evolution />
      <TypeEffect />
      <Logo text={logoText} onClick={onLogoClick} />
    </div>
  );
};

export default CardInfo;
