import React, { useState } from "react";
import { recipe_highlight } from "../JSON/data";
import { NavLink } from "react-router-dom";

const RecipeHighlight = () => {
  const [data, setData] = useState(recipe_highlight);
  return (
    <div>
      {" "}
      <div className="flex mt-2 mb-10 md:mt-[20vh] justify-center">
        <h2 className="text-3xl  font-serif font-bold border-l-lime-500-4">
          Recipe Highlights
        </h2>
      </div>
      <div className="grid md:grid-cols-3 items-stretch sm:grid-cols-1 p-10">
        {data &&
          data.map((item, index) => {
            return (
              <>
                <div
                  className="m-6 pb-3 rounded-lg shadow-md border"
                  key={index}
                >
                  <div className="flex justify-between">
                    <div className="bg-green-200 m-3 text-sm text-slate-800 pl-2 pr-2 rounded-xl">
                      {item.type}
                    </div>
                    <div className="bg-yellow-200 m-3 text-sm text-slate-800 pl-2 pr-2 rounded-xl">
                      {item.version}
                    </div>
                  </div>
                  <div className="flex flex-wrap  justify-center">
                    <img
                      className="shadow-lg m-3 h-[150px]"
                      src={item.img}
                      alt=""
                    />
                  </div>
                  <div className="text-gray-700 font-semibold flex justify-center text-xl font-serif">
                    {item.title}
                  </div>
                  <div className="pl-2 pr-2 pb-3 text-slate-700">
                    {item.description.slice(0, 125) + " ..."}
                  </div>
                  <div className="">
                    <NavLink
                      className="pl-3 pr-3 pt-1 pb-1 m-2 border-2 rounded-lg bg-blue-200 text-blue-700 hover:bg-blue-500 hover:text-white"
                      to={`/${item.id}`}
                    >
                      View
                    </NavLink>
                  </div>
                </div>
              </>
            );
          })}
      </div>
    </div>
  );
};

export default RecipeHighlight;
