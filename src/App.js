import DisplayArray from "./DisplayArray";
import Title from "./Title";
import { useState } from "react";

const App = () => {
  // let welcome = "Welcome"; //Variable Biasa
  let [welcome, setWelcome] = useState("Welcome"); //Variabel State

  const handleClickEvent = () => {
    // welcome = "Selamat Datang"; //Ubah variabel biasa
    setWelcome("Selamat Datang"); //Ubah variabel state
    // console.log(welcome);
  };
  const handleClickEvent2 = () => {
    console.log("Button Pressed");
  };

  return (
    //JSX
    <>
      <h1>{welcome}</h1>
      <Title text="Basic React JS" number={100} boolean={true} />
      <DisplayArray handleClickEvent={handleClickEvent} />
      <DisplayArray handleClickEvent={handleClickEvent2} />
    </>
  );
};

export default App;
