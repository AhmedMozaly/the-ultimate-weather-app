import { motion, AnimatePresence } from "framer-motion";

export type Option = {
  country: string;
  lat: number;
  lon: number;
  name: string;
  state?: string;
};
interface Props {
  options: Option[] | undefined;
  onSelect: (city: Option) => void;
  isOpen: boolean;
}

const SuggestBox = ({ options = [], onSelect, isOpen }: Props) => {
  return (
    <AnimatePresence>
      {isOpen && options.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="relative w-full mt-2"
        >
          <div className="rounded-xl shadow-xl bg-white absolute w-full inline-block text-gray-700 overflow-hidden">
            <ul>
              {options.map(({ name, country, lat, lon }) => (
                <li
                  key={name}
                  className="py-4 px-6 hover:bg-clay-50 cursor-pointer"
                  onClick={() => onSelect({ name, country, lat, lon })}
                >
                  {`${name}, ${country}`}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SuggestBox;
