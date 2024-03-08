import PropTypes from "prop-types";
const SearchInput = ({ SearchVal, SearchOnClick, onChange }) => {
  return (
    <>
      <div className="w-1/2 flex justify-center items-center  gap-4 p-4 bg-gray-400 rounded-lg mb-5 mt-3">
        <input
          id="SearchInput"
          className="w-full p-5  font-medium border rounded-md border-slate-300 placeholder:opacity-60"
          value={SearchVal}
          onChange={onChange}
        />
        <button
          className="bg-blue-600 text-white font-semibold px-5 py-5 rounded cursor-pointer "
          onClick={() => SearchOnClick(SearchVal)}
        >
          Search
        </button>
      </div>
    </>
  );
};

export default SearchInput;

SearchInput.propTypes = {
  SearchVal: PropTypes.string,
  SearchOnClick: PropTypes.func,
  onChange: PropTypes.func,
};
