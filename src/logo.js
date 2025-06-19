const Logo = ({ text, onClick }) => {
  return (
    <div onClick={onClick} style={{ cursor: "pointer" }}>
      <h1>{text}</h1>
      <p>Ini adalah Logo</p>
    </div>
  );
};

export default Logo;
