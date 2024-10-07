import { useNavigate, useParams } from "react-router-dom";
import { recipe_highlight } from "../JSON/data";
import { useState } from "react";

const RecipeHighlightId = () => {
  const [data, setData] = useState(recipe_highlight);

  const id = useParams();
  const nav = useNavigate();

  const mainData = data.filter((item) => item.id == id.id);
  console.log(mainData);
  return (
    <div>
      <button
        onClick={() => {
          nav("/");
        }}
        className="border-2  border-green-500 m-2"
      >
        Back
      </button>
      <h2>
        {mainData &&
          mainData.map((item, index) => {
            return (
              <>
                <div className="text-center m-4 text-3xl md:text-3xl font-serif font-bold">
                  {item.title}
                </div>
                <div className="grid md:grid-cols-2 grid-cols-1  ">
                  <div className="flex justify-center">
                    <div className="grig grid-cols-1 items-center">
                      <div className="flex justify-center">
                        <div>
                          <img
                            className="m-2 shadow-sm rounded-md"
                            src={item.img}
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="flex flex-wrap ">
                        <div>
                          {" "}
                          <img
                            className="m-1 w-[150px] shadow-sm"
                            src={item.img1}
                            alt=""
                          />
                        </div>
                        <div>
                          <img
                            className="m-1 w-[150px]  shadow-sm"
                            src={item.img2}
                            alt=""
                          />
                        </div>
                        <div>
                          {" "}
                          <img
                            className="m-1 w-[150px] shadow-sm"
                            src={item.img3}
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className=" flex ">
                      <div className="pl-2 pr-2 border-2 border-green-600 m-2 rounded-xl md:text-md text-sm text-center  font-serif bg-green-100 text-slate-700">
                        {item.type}
                      </div>
                      <div className="pl-2 pr-2 border-2 border-yellow-600 m-2 rounded-xl md:text-md text-sm text-center  font-serif bg-yellow-100 text-slate-700">
                        {item.version}
                      </div>
                      <div className="pl-2 pr-2 border-2 border-purple-600 m-2 rounded-xl md:text-md text-sm text-center  font-serif bg-purple-100 text-slate-700">
                        Total Time : {item.time}
                      </div>
                      <div className="pl-2 pr-2 border-2 border-pink-600 m-2 rounded-xl md:text-md text-sm text-center  font-serif bg-pink-100 text-slate-700">
                        Prep Time : {item.prep}
                      </div>
                      <div className="pl-2 pr-2 border-2 border-orange-600 m-2 rounded-xl md:text-md text-sm text-center  font-serif bg-orange-100 text-slate-700">
                        Calories : {item.calo}
                      </div>
                    </div>
                    <div className=" text-md text-slate-800  mt-4  p-2">
                      {" "}
                      <div className=" text-2xl md:text-3xl font-serif font-bold">
                        Description :
                      </div>
                      {item.description}
                    </div>
                    <div className=" text-md text-slate-800 mt-4 p-2">
                      <div className="text-2xl md:text-3xl font-serif font-bold">
                        How to make{" "}
                        <span className="text-green-500">{item.title}</span>
                      </div>
                      <div className="mt-3">
                        <div>
                          <div className="text-xl font-serif font-bold">
                            Step 1
                          </div>
                          <div>{item.step1}</div>
                        </div>
                        <div>
                          <div className="text-xl font-serif font-bold">
                            Step 2
                          </div>
                          <div>{item.step2}</div>
                        </div>
                        <div>
                          <div className="text-xl font-serif font-bold">
                            Step 3
                          </div>
                          <div>{item.step3}</div>
                        </div>
                        <div>
                          <div className="text-xl font-serif font-bold">
                            Step 4
                          </div>
                          <div>{item.step4}</div>
                        </div>
                        <div>
                          <div className="text-xl font-serif font-bold">
                            Step 5
                          </div>
                          <div>{item.step5}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
      </h2>
    </div>
  );
};

export default RecipeHighlightId;
