const Title = ({ boolean, text, number }) => {
  if (boolean) {
    return (
      <>
        <h1>{text}</h1>
        <h2>{number}</h2>
        <p>Materi tentang pengenalan React JS mengunakan CRA</p>
      </>
    );
  } else {
    return <h1>Kondisi Salah</h1>;
  }
};

export default Title;
