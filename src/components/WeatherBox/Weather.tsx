import { Skeleton } from "../";

type WeatherType = {
  icon: string;
  description: string;
};

interface Props {
  weather: WeatherType | undefined;
  isLoading?: boolean;
}

const Weather = ({ weather, isLoading = false }: Props) => {
  const { icon, description } = weather || {};

  return (
    <div className="flex items-center capitalize">
      {isLoading ? (
        <div className="flex mb-5">
          <Skeleton width={32} height={32} className="ml-4" />
          <Skeleton width={100} height={32} className="ml-4" />
        </div>
      ) : (
        <>
          <img
            src={`http://openweathermap.org/img/wn/${icon}.png`}
            className="w-16"
            alt="weather icon"
          />
          {description}
        </>
      )}
    </div>
  );
};

export default Weather;
