import { SunIcon, SunsetIcon, Skeleton } from "../";
import { timestampToTime } from "../../utils";

interface Props {
  data: { sunrise: number; sunset: number };
  isLoading?: boolean;
}

const DayMap = ({ data, isLoading = false }: Props) => {
  const { sunrise, sunset } = data;

  return (
    <div className="mt-12 max-w-md mx-auto">
      <div className="grid grid-cols-2 gap-4 text-center text-xl">
        <div>
          <SunIcon
            width={62}
            height={62}
            className="mx-auto mb-4 text-yellow-500"
          />
          <h4 className="text-sm text-clay-200 mb-1">Sunrise</h4>
          {isLoading ? <Skeleton width={50} /> : timestampToTime(sunrise)}
        </div>
        <div>
          <SunsetIcon
            width={62}
            height={62}
            className="mx-auto mb-4 text-yellow-600"
          />
          <h4 className="text-sm text-clay-200 mb-1">Sunset</h4>
          {isLoading ? <Skeleton width={50} /> : timestampToTime(sunset)}
        </div>
      </div>
    </div>
  );
};

export default DayMap;
