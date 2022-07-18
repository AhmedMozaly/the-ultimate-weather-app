import { LocationIcon, Option, Skeleton } from "../";
import { getName } from "country-list";

interface Props {
  city: Option | undefined;
  isLoading?: boolean;
}

const LocationBox = ({ city, isLoading = false }: Props) => {
  const { name, country } = city || { name: "", country: "" };

  return (
    <div>
      {isLoading ? (
        <Skeleton height={40} width={150} />
      ) : (
        <div className="text-4xl">{name}</div>
      )}
      <div className="flex items-center text-xl text-clay-200 mt-1">
        <LocationIcon />

        <span className="ml-2 ">
          {isLoading ? <Skeleton width={150} /> : getName(country)}
        </span>
      </div>
    </div>
  );
};

export default LocationBox;
