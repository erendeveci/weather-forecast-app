import axios from "axios";
import { useRef, useState } from "react";
import City from "./City";
import "./Search.css";
const Search = () => {
  const [data, setData] = useState();
  const [cityText, setCityText] = useState("");

  const cityRef = useRef();

  const onSearchHandler = async () => {
    const cityName = cityRef.current.value;
    const key = process.env.REACT_APP_WEATHER_API_KEY;
    const lang = navigator.language.split("-")[0];

    try {
      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${key}&lang=${lang}&units=metric`
      );
      setData(data);
    } catch (error) {
      console.log(error);
    }
    setCityText("");
  };

  let content;
  if (data) {
    content = <City weather={data} />;
  }

  return (
    <div>
      <p
        style={{
          color: "white",
          fontSize: "2.5rem",
          fontFamily: "Gentium Book Plus",
        }}
      >
        Weather <b>Forecast</b>
      </p>
      <div className="searchContainer">
        <input
          type="text"
          ref={cityRef}
          onChange={(event) => {
            setCityText(event.target.value);
          }}
          value={cityText}
        />
        <input
          type="button"
          className="button"
          onClick={onSearchHandler}
          value="Enter"
        />
      </div>
      {content}
    </div>
  );
};

export default Search;
