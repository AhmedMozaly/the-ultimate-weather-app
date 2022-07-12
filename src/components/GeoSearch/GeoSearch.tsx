import { MapIcon } from "../";
import SuggestBox from "./SuggestBox";

const GeoSearch = () => {
  // TODO: get city from the query with useRouter

  return (
    <div className="relative block p-4 z-20">
      <input
        type="text"
        className="w-full px-4 py-3 pl-14 focus:outline-dotted outline-bandicoot-500 rounded-full shadow text-gray-800 box-border"
        placeholder="Search the location..."
      />
      <MapIcon
        width={32}
        height={32}
        className="absolute left-[30px] top-[23px] text-clay-500 font-semibold"
      />
      {/* TODO: options and onSelect props */}
      <SuggestBox />
    </div>
  );
};

export default GeoSearch;
