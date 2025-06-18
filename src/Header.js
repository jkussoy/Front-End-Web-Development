import Logo from "./logo.js";

const Header = () => {
  const header = "Basic React";
  return (
    <div>
      <h1>{header}</h1>
      <p>Materi tentang pengenalan React JS menggunakan CRA</p>
      <Logo />
    </div>
  );
};

export default Header;
