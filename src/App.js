import "./App.css";
import { BarStyled } from "./styles";
import { useState } from "react";
import {ThemeProvider} from "styled-components";
import {theme,GlobalStyle} from "./styles"

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
    if (currentDecoration === "unset") {
      setCurrentDecoration("underline");
    } else setCurrentDecoration("unset");
  };

  const [currentColor, setCurrentColor] = useState("black");

  const ToggleCurrentColorYellow = () => {
    setCurrentColor("yellow")
  };
  const ToggleCurrentColorBlue = () => {
    setCurrentColor("blue");
  };
  const ToggleCurrentColorRed = () => {
   setCurrentColor("red");
  };

  const ToggleCurrentColorBlack = () => {
   setCurrentColor("black");
  };

  const ToggleCurrentColorPurple = () => {
 setCurrentColor("purple");
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
    <div id="container">
      <div className="row">
        <div>
      <p>
      <button onClick={ToggleCurrentFont}>Bold</button>
      <button onClick={ToggleCurrentStyle}>Italic</button>
      <button onClick={ToggleCurrentDecoration}>under line</button>
      </p>
      </div>
      <div>
      <BarStyled
        lineDec={currentDecoration}
        fontStyle={currentStyle}
        font={currentFont}
        color={currentColor}
        type="text"
      ></BarStyled>
      </div>
      <p className="row">
    <div className="colorBoxyellow" onClick={ToggleCurrentColorYellow}></div>
    <div className="colorBoxblue" onClick={ToggleCurrentColorBlue}></div>
    <div className="colorBoxred" onClick={ToggleCurrentColorRed}></div>
    <div className="colorBoxblack" onClick={ToggleCurrentColorBlack}></div>
    <div className="colorBoxpurple" onClick={ToggleCurrentColorPurple}></div>
    </p>
    </div>
    </div>
    </ThemeProvider>
  );
}

export default App;
