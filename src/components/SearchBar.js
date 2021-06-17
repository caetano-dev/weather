import React, { useState } from "react";
import styles from "../styles/components/SearchBar.module.css";
import Location from "./Location.js";

const api = {
  key: "049c4a1468ae4fd24182a8598e98cd94",
  base: "https://api.openweathermap.org/data/2.5/",
};

function SearchBar() {
  const [weather, setWeather] = useState({});
  const [query, setQuery] = useState("");
  const [temperature, setTemperature] = useState(0);

  const search = (evt) => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
          setQuery("");
          setTemperature(result.main.temp);
        
        });
    }
  };
  return (
    <div className={
      typeof main != undefined
        ? temperature > 17
          ? styles.warm
          : styles.cold
        : styles.notfound
    }>
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
        mainInfo={weather.main}
        name={weather.name}
        weather={weather.weather}
        sys={weather.sys}
      />
    </div>
  );
}

export default SearchBar;
