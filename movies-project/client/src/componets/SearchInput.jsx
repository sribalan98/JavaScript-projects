const SearchInput = () => {
  return (
    <>
      <div className="w-1/2 flex  gap-4 p-4 bg-gray-400 rounded-lg">
        <lable>MovieName : </lable>
        <input className="w-full p-5  font-medium border rounded-md border-slate-300 placeholder:opacity-60" />
        <button className="bg-blue-600 text-white font-semibold px-5 py-1 rounded cursor-pointer">
          Search
        </button>
      </div>
    </>
  );
};

export default SearchInput;
