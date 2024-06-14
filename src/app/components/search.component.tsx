import React, { useRef, useState } from "react";

interface SearchBarProps {}

export const SearchBar = ({ ...props }: SearchBarProps) => {
  const [searchText, setSearchText] = useState<any>("");
  const searchBarRef = useRef<HTMLInputElement | undefined>();
  const onChange = (e: any) => {
    setSearchText(e.target.value);
  };
  return (
    <>
      <input
        ref={searchBarRef as any}
        id="searchBar"
        className="min-w-full px-2 outline-none bg-white text-black"
        type="text"
        value={searchText}
        onChange={(e: any) => onChange(e)}
        placeholder="search"
      />
    </>
  );
};

export default SearchBar;
