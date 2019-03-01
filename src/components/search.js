import React from "react";

const Search = () => (
  <div className="flex justify-center">
    <input
      className="border-4 border-teal-dark focus:outline-none h-24 px-10 py-6 rounded-lg shadow-lg text-4xl"
      maxLength={5}
      placeholder="Enter your zip code"
      type="search"
    />
    <button className="bg-teal-dark focus:outline-none font-bold h-24 hover:bg-teal-darker ml-3 px-10 rounded-lg shadow-lg text-white text-4xl uppercase">
      Search
    </button>
  </div>
);

export default Search;
