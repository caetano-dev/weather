import React from "react";
import styles from "../styles/components/Location.module.css";
import DateBuilder from "./DateBuilder.js";
const Location = (props) => {
  const { mainInfo, name, weather, sys } = props;

  return (
    <>
      <main>
        {typeof mainInfo != "undefined" ? (
          <div>
            <div className={styles.locationBox}>
              <div className={styles.location}>
                {name}, {sys.country}
              </div>
              <div className={styles.date}>{DateBuilder(new Date())}</div>
            </div>
            <div className={styles.weatherBox}>
              <div className={styles.temp}>{Math.round(mainInfo.temp)}°c</div>
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
              <div className={styles.location}>Where are you?</div>
              <div className={styles.date}>Type your location and check the current temperature</div>
            </div>
          </div>
        )}
      </main>
    </>
  );
};

export default Location;
