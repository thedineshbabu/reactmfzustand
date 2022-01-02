import React from "react";
import { useCount } from "host/store";

const Header = () => {
  const [count, setCount] = useCount();
  return (
    <header className="flex items-center justify-between flex-wrap bg-green-500 p-6">
      <div className="flex-grow text-md">Nav Header</div>
      <p className="mr-2">{count}</p>
      <button
        className="bg-blue-500 text-sm hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => setCount(0)}
      >
        Clear
      </button>
    </header>
  );
};

export default Header;
