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
      <img
        src={`http://openweathermap.org/img/wn/${icon}.png`}
        className="w-16"
        alt="weather icon"
      />
      {description}
    </div>
  );
};

export default Weather;
