import { useTemperature } from "../../hooks";
import { Skeleton } from "../";

interface Props {
  children: number;
  isLoading?: boolean;
}

const Temperature = ({ children, isLoading = false }: Props) => {
  const [temp, changeUnit] = useTemperature(children);

  return (
    <button
      onClick={changeUnit}
      className="text-9xl rounded-xl py-8 my-2 text-center ease-in duration-100 active:bg-clay-800"
    >
      {isLoading ? <Skeleton /> : temp}
    </button>
  );
};

export default Temperature;
