import React, { useState } from "react";
import { categories } from "../data/mockData";

const CategoryTabs = () => {
  const [activeCategory, setActiveCategory] = useState("For you");

  return (
    <div className="sticky top-[57px] bg-white z-40 border-b border-gray-200">
      <div className="max-w-[1336px] mx-auto px-4">
        <div className="flex overflow-x-auto scrollbar-hide">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`whitespace-nowrap px-4 py-3 text-sm font-medium transition-colors duration-200 ${
                activeCategory === category
                  ? "border-b-2 border-black text-black"
                  : "text-gray-500 hover:text-black"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryTabs;
