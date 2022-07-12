import { DropletIcon, WindIcon } from "../";
import DayMap from "./DayMap";
import Weather from "./Weather";
import LocationBox from "./LocationBox";
import WeatherInfo from "./WeatherInfo";

import styles from "./WeatherBox.module.css";

const WeatherBox = () => {
  return (
    <div className={styles.clipped}>
      <LocationBox />
      <div className="grid grid-cols-2 mt-6">
        <div className="text-9xl text-center">14°</div>
        <div className="text-xl">
          {/* TODO: pass weather array as props */}
          <Weather />
          <WeatherInfo Icon={WindIcon} text="30 m/s" />
          <WeatherInfo Icon={DropletIcon} text="49%" className="mt-5" />
        </div>
      </div>
      <DayMap />
    </div>
  );
};

export default WeatherBox;
