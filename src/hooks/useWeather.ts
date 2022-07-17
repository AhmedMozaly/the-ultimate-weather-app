import { useQuery } from "react-query";
import { Option } from "../components";
import { fetchWeather } from "../api";

const useWeather = (city: Option | undefined) => {
  const { name, lat, lon } = city || {};

  const { data, ...otherQueryInfo } = useQuery(
    ["weather", { name }],
    () =>
      fetchWeather({
        params: {
          lat,
          lon,
          units: "metric",
        },
      }),
    {
      enabled: !!name,
      // TODO: on Error display a message to the user
    }
  );

  return [data?.data || {}, otherQueryInfo];
};

export default useWeather;
