import { LocationIcon, Option } from "../";
import { getName } from "country-list";

interface Props {
  city: Option | undefined;
  isLoading?: boolean;
}

const LocationBox = ({ city, isLoading = false }: Props) => {
  const { name, country } = city || { name: "", country: "" };

  return (
    <div>
      {/* TODO: empty state for when there is no city */}
      <div className="text-4xl">{name}</div>
      <div className="flex items-center text-xl text-clay-200 mt-1">
        <LocationIcon />
        <span className="ml-2 ">{isLoading ? <></> : getName(country)}</span>
      </div>
    </div>
  );
};

export default LocationBox;
