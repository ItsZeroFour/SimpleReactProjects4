import axios from "axios";
import { useEffect, useState } from "react";
import { countries } from "./languages";
import "./App.css";

function App() {
  const [textareaValue, setTextareaValue] = useState("");
  const [optionValue1, setOptionValue1] = useState("");
  const [optionValue2, setOptionValue2] = useState("");
  const [data, setData] = useState([]);
  const [setValue, setSetValue] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get(
  //       `https://api.mymemory.translated.net/get?q=${textareaValue}&langpair=${optionValue1}|${optionValue2}`
  //     )
  //     .then((res) => setData(res))
  //     .catch((err) => console.log(err));
  // });

  const showData = () => {
    const apiUrl = `https://api.mymemory.translated.net/get?q=${textareaValue}&langpair=${optionValue1}|${optionValue2}`;
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => setData(data.responseData.translatedText));
  };

  return (
    <div className="App">
      <div className="app__content">
        <div className="app__textarea">
          <textarea
            placeholder="Enter text"
            onChange={(event) => setTextareaValue(event.target.value)}
          ></textarea>
          <textarea
            disabled
            readonly
            placeholder="Translation"
            value={data}
          ></textarea>
        </div>

        <div className="app__selection-form">
          <div className="app__select">
            <select onClick={(event) => setOptionValue1(event.target.value)}>
              {Object.keys(countries).map((lang) => (
                <option value={lang} key={lang}>
                  {countries[lang]}
                </option>
              ))}
            </select>
          </div>

          <div className="app__select">
            <select onClick={(event) => setOptionValue2(event.target.value)}>
              {Object.keys(countries).map((lang) => (
                <option value={lang} key={lang}>
                  {countries[lang]}
                </option>
              ))}
            </select>
          </div>
        </div>

        <button onClick={showData}>Translate Text</button>
      </div>
    </div>
  );
}

export default App;
