import "./styles.css";
import { useState, useEffect } from "react";
import Telechargement from "./Telechargement";
import { AiOutlineCheckCircle } from "react-icons/ai";

export default function App() {
  const [width, setWidth] = useState(10);
  useEffect(() => {
    if (width < 100) {
      setTimeout(() => {
        setWidth(width + 1);
      }, 1000);
    }
  }, [width]);
  return (
    <div className="App">
      <div className="container">
        <h1>
          {width === 100 ? (
            <AiOutlineCheckCircle className="check" />
          ) : width > 2 ? (
            `Telecharger ${width}%`
          ) : !width < 2 ? (
            "started"
          ) : (
            ""
          )}
        </h1>
        <Telechargement width={width} />
      </div>
    </div>
  );
}
