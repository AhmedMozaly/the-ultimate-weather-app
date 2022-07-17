import { useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import { Option } from "../components";
import { fetchReverseGeoData } from "../api";

const useDefaultCity = () => {
  const navigate = useNavigate();
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const lat = params.get("lat");
  const lon = params.get("lon");
  const CITY_QUERY = "cities-reverse";

  const { data, refetch } = useQuery(
    CITY_QUERY,
    () =>
      fetchReverseGeoData({
        params: {
          lat,
          lon,
          limit: 5,
        },
      }),
    {
      enabled: !!lat && !!lon,
      // TODO: on Error display a message to the user
    }
  );

  const updateCity = useCallback(
    async (city: Option) => {
      const { lat, lon } = city;
      await navigate(
        {
          pathname: "/",
          search: `?lat=${lat}&lon=${lon}`,
        },
        { replace: true }
      );
      refetch();
    },
    [navigate, refetch]
  );

  return [data?.data[0], updateCity];
};

export default useDefaultCity;
