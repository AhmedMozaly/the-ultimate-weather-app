import { LocationIcon } from "../";

const LocationBox = () => {
  return (
    <div>
      <div className="text-4xl">London</div>
      <div className="flex items-center text-xl text-clay-200 mt-1">
        <LocationIcon />
        <span className="ml-2 ">United Kingdom</span>
      </div>
    </div>
  );
};

export default LocationBox;
