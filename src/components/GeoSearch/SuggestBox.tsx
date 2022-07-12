const SuggestBox = () => {
  return (
    <div className="relative w-full mt-2">
      <div className="rounded-xl shadow-xl bg-white absolute w-full inline-block text-gray-700 overflow-hidden">
        <ul>
          <li className="py-4 px-6 hover:bg-clay-50 cursor-pointer">
            London, UK
          </li>
          <li className="py-4 px-6 hover:bg-clay-50 cursor-pointer">
            Paris, France
          </li>
          <li className="py-4 px-6 hover:bg-clay-50 cursor-pointer">
            New York, USA
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SuggestBox;
