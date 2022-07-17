import { LocationIcon, Option } from "../";
import { getName } from "country-list";

interface Props {
  city: Option | undefined;
}

const LocationBox = ({ city }: Props) => {
  const { name, country } = city || { name: "", country: "" };

  return (
    <div>
      {/* TODO: empty state for when there is no city */}
      {/* TODO: loader and isLoading state when fetching the city  */}
      <div className="text-4xl">{name}</div>
      <div className="flex items-center text-xl text-clay-200 mt-1">
        <LocationIcon />
        <span className="ml-2 ">{getName(country)}</span>
      </div>
    </div>
  );
};

export default LocationBox;
