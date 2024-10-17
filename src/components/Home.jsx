import { useUser } from "@clerk/clerk-react";
import { ChevronRight } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import RecipeHighlight from "./homeComponent/RecipeHighlight";

import { useState } from "react";

const Home = () => {
  const { user } = useUser();
  const [date, setDate] = useState("");
  const handleDateChange = () => {
    console.log(date);
  };
  return (
    <div>
      <div className="  w-[100%] bg-gradient-to-b from-yellow-200 h-[100vh]">
        <div className="grid     md:grid-cols-2 md:pt-16">
          <div className="flex justify-left items-center">
            <div className="ml-7 pt-10 md:ml-10 mr-10 items-center ">
              <h2 className="text-3xl pb-2 font-bold bg-gradient-to-r from-yellow-500 to-red-600 bg-clip-text text-transparent scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                Give your health a good guide
              </h2>

              <div className="leading-7 font-thin   [&:not(:first-child)]:mt-6">
                At{" "}
                <span className="bg-gradient-to-l text-white text-bold pb-1 pt-1 rounded pl-1 pr-1 from-yellow-400 to-red-500">
                  {" "}
                  Recipe Book
                </span>{" "}
                , we create furniture that enhances your living space. Our
                collection combines quality, design, and comfort, ensuring every
                piece feels right at home. Discover how our furniture can
                transform your everyday moments into extraordinary experiences
              </div>
              <div className="mt-5">
                {user ? (
                  <>
                    <button className="border  border-red-300 shadow-md shadow-yellow-200">
                      <NavLink to="/write_recipe_book">
                        <div className="flex">
                          <div>Get Started </div>
                          <div className="pt-[2px]">
                            <ChevronRight className="ml-1 border-none h-4 w-4" />
                          </div>
                        </div>
                      </NavLink>
                    </button>
                  </>
                ) : (
                  <>
                    <button className="border  border-red-300 shadow-md shadow-yellow-200">
                      <a href="">
                        <div className="flex">
                          <div>Get Started </div>
                          <div className="pt-[2px]">
                            <ChevronRight className="ml-1 border-none h-4 w-4" />
                          </div>
                        </div>
                      </a>
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
          <div>
            <img
              className="w-[600px] rounded-lg shadow-lg lg:p-5 md:p-4 sm:p-5 p-5"
              src="4.png"
              alt=""
            />
          </div>
        </div>
        <div className="flex mt-[24vh] justify-center">
          <RecipeHighlight />
        </div>
      </div>
    </div>
  );
};

export default Home;
