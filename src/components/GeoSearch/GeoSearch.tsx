import { ChangeEvent, useCallback, useEffect, useState } from "react";
import { useQuery } from "react-query";
import debounce from "lodash.debounce";

import { MapIcon, SpinnerIcon } from "../";
import SuggestBox, { Option } from "./SuggestBox";
import { fetchGeoData } from "../../api";

interface Props {
  onSelect: (city: Option) => void;
  defaultCity?: Option;
}

const GeoSearch = ({ onSelect, defaultCity }: Props) => {
  const [city, setCity] = useState("");
  const [suggestionIsOpen, setSuggestionIsOpen] = useState(false);

  const { isLoading, data, refetch, isFetching } = useQuery(
    "cities",
    () =>
      fetchGeoData({
        params: {
          q: city,
          limit: 5,
        },
      }),
    {
      enabled: false,
      // TODO: handle errors here
    }
  );

  const triggerRefetch = useCallback(
    debounce(() => {
      refetch();
    }, 500),
    [refetch]
  );

  const onSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSuggestionIsOpen(true);
    const { value } = e.target;
    setCity(value);
    triggerRefetch();
  };

  const handleSelect = (city: Option) => {
    setSuggestionIsOpen(false);
    onSelect(city);
  };

  useEffect(() => {
    if (defaultCity) {
      setCity(
        `${defaultCity?.name}${
          defaultCity?.state ? `, ${defaultCity?.state}` : ""
        }, ${defaultCity?.country}`
      );
    }
  }, [defaultCity]);

  return (
    <div className="relative block p-4 z-20">
      <input
        type="text"
        className="w-full px-4 py-3 pl-14 focus:outline-dotted outline-bandicoot-500 rounded-full shadow text-gray-800 box-border"
        placeholder="Search the location..."
        onChange={onSearch}
        value={city}
      />
      <MapIcon
        width={32}
        height={32}
        className="absolute left-[30px] top-[24px] text-clay-500 font-semibold"
      />
      {(isLoading || isFetching) && (
        <SpinnerIcon
          width={32}
          height={32}
          className="absolute right-[25px] top-[25px] text-clay-500 font-semibold"
        />
      )}
      <SuggestBox
        options={data?.data}
        onSelect={handleSelect}
        isOpen={suggestionIsOpen}
      />
    </div>
  );
};

export default GeoSearch;
