import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { InfosContext } from "../comtext/context";
import { CategoryContext } from "../comtext/categoryContext";

export default function CategoryList({ categoryState }) {
  // const categories = [
  //     'Catégorie 1',
  //     'Catégorie 2',
  //     'Catégorie 3',
  //     'Catégorie 4',
  //     'Catégorie 5',
  //     'Catégorie 6',
  //     'Catégorie 7',
  //     'Catégorie 8',
  //     'Catégorie 9',
  //     'Catégorie 10',
  // ]
  const { Infos } = useContext(InfosContext);
  const { categories } = useContext(CategoryContext);
  return (
    <>
      {categoryState === true && (
        <div
          className="static border text-black bg-white top-[10%] left-[12%] p-3 w-[300px] 
    rounded-lg flex flex-col items-start gap-5 text-[14px]
    shadow-lg
    sm:absolute sm:text-black sm:bg-white sm:top-[155%] sm:left-[12%] sm:p-5 sm:w-[300px] 
    sm:rounded-lg sm:flex sm:flex-col sm:items-start sm:gap-5 sm:text-[14px] "
        >
          <div className="grid grid-cols-2 w-[100%] gap-[50px]  ">
            {categories !== null &&
              categories.map((cat, index) => {
                return (
                  <div
                    key={index}
                    className="bg-zinc-950 text-white w-[100%] h-[50px]
                        flex items-center justify-center rounded-md hover:bg-zinc-700 "
                  >
                    <Link className="w-[100%] h-[100%] flex items-center justify-center rounded-md ">
                      {cat.category_name}
                    </Link>
                  </div>
                );
              })}
          </div>
        </div>
      )}
    </>
  );
}
