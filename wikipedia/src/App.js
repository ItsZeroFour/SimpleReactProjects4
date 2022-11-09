import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Content from "./container/Content/Content";
import Header from "./container/Header/Header";
import logo from "./images/wikipedia-logo.png";

function App() {
  const [type, setType] = useState("");
  const [getData, setGetData] = useState({});
  const [isSearch, setIsSearch] = useState(false);

  const search = (event) => {
    event.preventDefault();
    setIsSearch(false);

    setTimeout(() => {
      setIsSearch(true);
    });

    axios
      .get(`https://en.wikipedia.org/api/rest_v1/page/summary/${type}`)
      .then((data) => {
        setGetData(data);
      });
  };

  return (
    <div className="App">
      <div className="container">
        <div className="header">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <form className="form">
            <input
              className="search-input"
              type="text"
              onChange={(event) => setType(event.target.value)}
              placeholder="Type text..."
            />
            <button className="search-btn" onClick={search}>
              Search
            </button>
          </form>
        </div>

        {isSearch === true ? (
          <Content items={getData} />
        ) : (
          <div>
            <h1>Welcome</h1>
            <p>
              Wikipedia is a multilingual free online encyclopedia written and
              maintained by a community of volunteers through open collaboration
              and a wiki-based editing system. Its editors are known as
              Wikipedians. Wikipedia is the largest and most-read reference work
              in history. It is consistently one of the 10 most popular websites
              ranked by the Similarweb and formerly Alexa; as of 2022, Wikipedia
              was ranked the 7th most popular site. It is hosted by the
              Wikimedia Foundation, an American non-profit organization funded
              mainly through donations.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
