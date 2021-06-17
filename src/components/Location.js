import React from "react";
import styles from "../styles/components/Location.module.css";
import DateBuilder from "./DateBuilder.js";
const Location = (props) => {
  const { main, name, weather, sys } = props;

  return (
    <>
      <main>
        {typeof main != "undefined" ? (
          <div>
            <div className={styles.locationBox}>
              <div className={styles.location}>
                {name}, {sys.country}
              </div>
              <div className={styles.date}>{DateBuilder(new Date())}</div>
            </div>
            <div className={styles.weatherBox}>
              <div className={styles.temp}>{Math.round(main.temp)}°c</div>
              <div className={styles.weather}>{weather[0].main}</div>
              <img
                className={styles.weather_icon}
                src={
                  "http://openweathermap.org/img/wn/" +
                  weather[0].icon +
                  "@2x.png"
                }
                alt="weather icon"
              />
            </div>
          </div>
        ) : (
          <div>
            <div className={styles.locationBox}>
              <div className={styles.location}>Location not found</div>
              <div className={styles.date}>Try again</div>
            </div>
          </div>
        )}
      </main>
    </>
  );
};

export default Location;
