import { DropletIcon, WindIcon, Option } from "../";
import DayMap from "./DayMap";
import Weather from "./Weather";
import LocationBox from "./LocationBox";
import WeatherInfo from "./WeatherInfo";
import { useWeather } from "../../hooks";

import styles from "./WeatherBox.module.css";

interface Props {
  city: Option | undefined;
}

const WeatherBox = ({ city }: Props) => {
  // @ts-ignore
  const { weather = [], wind = {}, main = {}, sys = {} } = useWeather(city);
  console.log(sys);
  return (
    <div className={styles.clipped}>
      <LocationBox city={city} />
      <div className="grid grid-cols-2 mt-6">
        <div className="text-9xl text-center">{`${Math.floor(
          main.temp
        )}°C`}</div>
        <div className="text-xl">
          {/* TODO: pass weather array as props */}
          <Weather weather={weather[0]} />
          <WeatherInfo Icon={WindIcon} text={`${wind.speed} m/s`} />
          <WeatherInfo
            Icon={DropletIcon}
            text={`${main.humidity}%`}
            className="mt-5"
          />
        </div>
      </div>
      <DayMap data={sys} />
    </div>
  );
};

export default WeatherBox;
