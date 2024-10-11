/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { SearchSvg } from "./Svg/index";

const SearchTask = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const handelSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <form>
      <div className="flex">
        <div className="relative overflow-hidden rounded text-gray-50 md:min-w-[380px] lg:min-w-[440px]">
          <input
            type="search"
            id="search-dropdown"
            className="z-20 block w-full bg-gray-800 px-4 py-2 pr-10 focus:outline-none"
            placeholder="Search Task"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            required
          />
          <button
            type="submit"
            onClick={handelSubmit}
            className="absolute right-2 top-0 h-full rounded-e-lg text-white md:right-4"
          >
            <SearchSvg />
            <span className="sr-only">Search</span>
          </button>
        </div>
      </div>
    </form>
  );
};

export default SearchTask;
