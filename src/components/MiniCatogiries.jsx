import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { InfosContext } from "../comtext/context";
import { CategoryContext } from "../comtext/categoryContext";

export default function MiniCatogiries() {
  const { Infos, cat4 } = useContext(InfosContext);
  const { categories } = useContext(CategoryContext);
  console.log(cat4);
  return (
    <div className="bg-zinc-200 flex flex-col items-center py-3 sm:py-[50px] ">
      <div
        className="w-[100%]  text-black flex flex-col items-center gap-[20px]
        sm:flex sm:flex-col sm:items-center sm:w-[100%] sm:max-w-[1024px] sm:py-2 sm:text-black sm:font-bold
        sm:gap-[50px]"
      >
        <div
          className="w-[100%] flex flex-col items-center text-[16px] font-semibold
            sm:w-[100%] sm:flex sm:flex-row sm:items-center sm:justify-between sm:text-[20px]"
        >
          <span className="">Achat par Catégorie</span>
          <Link to={"/shop"}>
            <span className="hidden sm:flex sm:items-center">
              Parcourir tous les Catégories
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                style={{ fill: "black" }}
              >
                <path d="M10.061 19.061 17.121 12l-7.06-7.061-2.122 2.122L12.879 12l-4.94 4.939z"></path>
              </svg>
            </span>
          </Link>
        </div>
        <div>
          <div
            className="flex flex-col  gap-[20px] text-white w-[100%]
                sm:w-auto sm:grid sm:grid-cols-2 sm:grid-rows-2 sm:gap-[100px] sm:text-white"
          >
            {cat4 !== null &&
              cat4.map((cat, index) => {
                return (
                  <div
                    key={index}
                    className="  text-[20px] bg-zinc-950 w-[300px] h-[100px] rounded-lg 
                    sm:text-[20px] sm:bg-zinc-950 sm:w-[300px] sm:h-[200px] sm:rounded-lg 
                    relative overflow-hidden group   "
                  >
                    <div className="absolute w-full h-full group-hover:bg-zinc-700 group-hover:bg-opacity-20 transition-all duration-200 z-[2] "></div>
                    <div className="absolute w-full h-full group-hover:bg-zinc-700 group-hover:bg-opacity-20 transition-all duration-200 z-[2] "></div>
                    {/* <img
                      src={`https://static.aizen-algerie.com/platform_images/${cat.cat_pic_url}`}
                      className=" absolute sm:absolute object-cover z-[1] group-hover:scale-105 transition-all duration-200 
                       "
                      alt={`${cat.category_name}`}
                    /> */}
                    <Link
                      className=" w-[100%] h-[100%] absolute
                    items-center justify-center text-center 
                    
                        sm:w-[100%] sm:h-[100%] sm:absolute
                    sm:items-center sm:justify-center  sm:rounded-lg z-[2] "
                    >
                      <p className="w-full h-full flex items-center justify-center bg-zinc-950 bg-opacity-20 hover:bg-zinc-700 transition-all duration-200 ">
                        {cat}
                      </p>
                    </Link>
                  </div>
                );
              })}
          </div>
        </div>
        <Link to={"/shop"} className="sm:hidden text-[16px] font-semibold flex">
          <span> Parcourir tous les Catégories </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            style={{ fill: "black" }}
          >
            <path d="M10.061 19.061 17.121 12l-7.06-7.061-2.122 2.122L12.879 12l-4.94 4.939z"></path>
          </svg>
        </Link>
      </div>
    </div>
  );
}
