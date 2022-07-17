import { useTemperature } from "../../hooks";

interface Props {
  children: number;
}

const Temperature = ({ children }: Props) => {
  const [temp, changeUnit] = useTemperature(children);

  return (
    <button
      onClick={changeUnit}
      className="text-9xl rounded-xl py-8 my-2 text-center ease-in duration-100 active:bg-clay-800"
    >
      {temp}
    </button>
  );
};

export default Temperature;
