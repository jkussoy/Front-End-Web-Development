const DisplayArray = () => {
  const numbers = [1, 2, 3, 4, 5];
  return (
    <>
      <p>Javascript expression inside jsx</p>
      {numbers.map((item) => {
        return <p>{item}</p>;
      })}
    </>
  );
};

export default DisplayArray;
