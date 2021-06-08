import "./App.css";
import { BarStyled } from "./styles";
import { useState } from "react";

function App() {
  const [currentFont, setCurrentFont] = useState("normal");

  const ToggleCurrentFont = () => {
    if (currentFont === "normal") setCurrentFont("bold");
    else setCurrentFont("normal");
  };

  const [currentStyle, setCurrentStyle] = useState("unset");

  const ToggleCurrentStyle = () => {
    if (currentStyle === "unset") setCurrentStyle("italic");
    else setCurrentStyle("unset");
  };

  const [currentDecoration, setCurrentDecoration] = useState("unset");

  const ToggleCurrentDecoration = () => {
    if (setCurrentDecoration === "unset") {
      setCurrentDecoration("underline");
    } else setCurrentDecoration("unset");
  };

  const [currentColor, setCurrentColor] = useState("blue");

  const ToggleCurrentColor = () => {
    if (currentColor === "blue") setCurrentColor("black");
    else setCurrentColor("blue");
  };

  return (
    <div>
      <BarStyled
        lineDec={currentDecoration}
        fontStyle={currentStyle}
        font={currentFont}
        C={currentColor}
        type="text"
      ></BarStyled>
      <button onClick={ToggleCurrentFont}>Bold</button>
      <button onClick={ToggleCurrentStyle}>Italic</button>
      <button onClick={ToggleCurrentColor}>color</button>
      {/* <button onClick={ToggleCurrentDecoration}>under line</button> */}
    </div>
  );
}

export default App;
