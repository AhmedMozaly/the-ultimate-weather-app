import { Helmet } from "react-helmet";

import { GeoSearch, WeatherBox, Option } from "../components";
import { useDefaultCity } from "../hooks";

function App() {
  const [city, updateCity] = useDefaultCity();

  const handleSelect = (city: Option) => {
    updateCity(city);
  };

  return (
    <>
      <Helmet>
        <title>The Ultimate Weather App</title>
        <link rel="icon" type="image/x-icon" href="/favicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow:wght@300;500&display=swap"
          rel="stylesheet"
        />
        <meta name="description" content="The ultimate weather app" />
      </Helmet>
      <div className="bg-clay-900 min-h-screen">
        <div className="max-w-[800px] mx-auto md:p-4">
          <div
            className="min-h-[800px] w-full bg-cover bg-no-repeat bg-center md:rounded-xl md:shadow-xl flex flex-col justify-between overflow-hidden"
            style={{ backgroundImage: "url(/weather-placeholder.jpg)" }}
          >
            <GeoSearch onSelect={handleSelect} defaultCity={city} />
            <WeatherBox city={city} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
