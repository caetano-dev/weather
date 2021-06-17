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
  const search = (evt) => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
          setQuery("");
        });
    }
  };

  return (
    <div
     /* className={
        typeof weather.main != undefined
          ? weather.main.temp > 17
            ? "app warm"
            : "app"
          : "app notfound"
      }*/
    >
      <div className={styles.searchBox}>
        <input
          type="text"
          className={styles.searchBar}
          placeholder="Search..."
          onChange={(e) => setQuery(e.target.value)}
          value={query}
          onKeyPress={search}
        />
      </div>
      <Location
        main={weather.main}
        name={weather.name}
        weather={weather.weather}
        sys={weather.sys}
      />
    </div>
  );
}

export default SearchBar;
