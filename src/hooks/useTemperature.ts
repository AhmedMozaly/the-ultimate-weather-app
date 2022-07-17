import { useCallback } from "react";
import { useLocalStorage } from "./";

const useTemperature = (
  temperatureInCelsius: number
): [print: string, changeUnits: () => void] => {
  const [tempUnits, setTempUnit] = useLocalStorage(
    "weather-app-temp-units",
    "C"
  );

  const temperatureInFarenheit = (temperatureInCelsius * 9) / 5 + 32;

  const handleChangeUnits = useCallback(() => {
    setTempUnit(tempUnits === "C" ? "F" : "C");
  }, [setTempUnit, tempUnits]);

  return [
    `${Math.floor(
      tempUnits === "C" ? temperatureInCelsius : temperatureInFarenheit
    )}°${tempUnits}`,
    handleChangeUnits,
  ];
};

export default useTemperature;
