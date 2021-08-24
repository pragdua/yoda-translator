import React, { useState } from "react";

import "./styles.css";

export default function App() {
  const [inputText, setInputText] = useState("");
  const [output, setOutput] = useState("");

  const changeHandler = (event) => {
    setInputText(event.target.value);
  };

  const clickHandler = () => {
    fetch(
      `https://api.funtranslations.com/translate/yoda.json?text=${inputText}`
    )
      .then((res) => res.json())
      .then((data) => setOutput(data.contents.translated));
  };

  return (
    <div className="container">
      <h1>Yoda Translator</h1>
      <h3>Use Carefully, only 5 API calls allowed per hour.</h3>

      <input className="input-text" onChange={changeHandler} />

      <button onClick={clickHandler}> Translate </button>

      <p className="output-text">{output}</p>
    </div>
  );
}
