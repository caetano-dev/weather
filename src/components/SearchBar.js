import React, { useState } from "react";
import styles from "../styles/components/SearchBar.module.css";
import Location from "./Location.js";
import axios from "axios";
const api = {
  key: "049c4a1468ae4fd24182a8598e98cd94",
  base: "https://api.openweathermap.org/data/2.5/",
};

function SearchBar() {
  const [weatherData, setWeatherData] = useState({});
  const [query, setQuery] = useState("");

  const search = (evt) => {
    if (evt.key === "Enter" && query !== "") {
      axios
        .get(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then((res) => setWeatherData(res.data))
        .then(setQuery(""));
    }
  };
  return (
    <div className={styles.appBackgroud}>
      <div className={styles.searchBox}>
        <input
          type="text"
          className={styles.searchBar}
          placeholder="City, state, province..."
          onChange={(e) => setQuery(e.target.value)}
          value={query}
          onKeyPress={search}
        />
      </div>
      <Location
        mainInfo={weatherData.main}
        name={weatherData.name}
        weather={weatherData.weather}
        sys={weatherData.sys}
      />
    </div>
  );
}

export default SearchBar;
