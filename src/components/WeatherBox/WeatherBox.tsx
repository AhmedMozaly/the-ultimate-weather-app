import { DropletIcon, WindIcon, Option, BeachIcon } from "../";
import DayMap from "./DayMap";
import Weather from "./Weather";
import LocationBox from "./LocationBox";
import WeatherInfo from "./WeatherInfo";
import { useWeather } from "../../hooks";

import styles from "./WeatherBox.module.css";
import Temperature from "./Temperature";

interface Props {
  city: Option | undefined;
}

const WeatherBox = ({ city }: Props) => {
  const [{ weather = [], wind = {}, main = {}, sys = {} }, { isLoading }] =
    useWeather(city);

  return (
    <div className={styles.clipped}>
      {city || isLoading ? (
        <>
          <LocationBox city={city} isLoading={isLoading} />
          <div className="grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 mt-6">
            <Temperature isLoading={isLoading}>{main.temp}</Temperature>
            <div className="text-xl">
              <Weather weather={weather[0]} isLoading={isLoading} />
              <WeatherInfo
                Icon={WindIcon}
                text={`${wind.speed} m/s`}
                isLoading={isLoading}
              />
              <WeatherInfo
                Icon={DropletIcon}
                text={`${main.humidity}%`}
                className="mt-5"
                isLoading={isLoading}
              />
            </div>
          </div>
          <DayMap data={sys} isLoading={isLoading} />
        </>
      ) : (
        <div className="text-xl my-auto mx-auto text-center mt-52 text-clay-300">
          <BeachIcon width={62} height={62} className="mx-auto mb-4" />
          No city is selected. Please search for the location where you'd like
          to see the weather from.
        </div>
      )}
    </div>
  );
};

export default WeatherBox;
