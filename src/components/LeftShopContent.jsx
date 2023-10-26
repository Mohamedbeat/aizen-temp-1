import React, { useContext, useEffect, useState } from "react";
import { InfosContext } from "../comtext/context";
import { CategoryContext } from "../comtext/categoryContext.jsx";
import { ProductContext } from "../comtext/productContext";

export default function LeftShopContent() {
  const { Infos } = useContext(InfosContext);
  const { categories } = useContext(CategoryContext);
  const { products, dispatch } = useContext(ProductContext);

  // const [filters, setFilters] = useState({
  //   subCat: "",
  //   min: 0,
  //   max: 100000000,
  // });
  const [subCat, setSubCat] = useState("");
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(1000000000000);
  //   console.log(Infos.data.cat.category_picture);

  // const handleCat = (subCat) => {
  //   // console.log(subCat);
  //   dispatch({
  //     type: ACTION.SELECT_SUB_CAT,
  //     payload: {
  //       param: subCat,
  //       state: products,
  //     },
  //   });
  // };
  useEffect(() => {
    console.log(min);
    console.log(max);
    console.log(subCat);
    dispatch({ type: "search", subCat: subCat, min: min, max: max });
  }, [min, max, subCat]);
  const handleCat = (subCat) => {
    // console.log(subCat);
    dispatch({ type: "search", subCat: subCat });
  };
  return (
    <div
      className="flex-[1] 
    sm:flex sm:flex-col sm:items-center sm:justify-start sm:h-[100%] "
    >
      {/* categories */}
      <div
        className=" border-b-2 w-[100%] py-2
        sm:flex sm:flex-col sm: items-center sm:gap-8"
      >
        {/* categorie */}
        {categories !== null &&
          categories.map((category, index) => {
            return (
              <div
                key={category.category_name}
                className=" flex flex-col gap-2 mt-2
             sm:w-[100%] sm:flex sm:flex-col sm:items-start  sm:gap-4"
              >
                <div className="flex items-center justify-center font-semibold">
                  <h1>{category.category_name}</h1>
                </div>
                <div
                  className="
                sm:flex sm:w-[100%] sm:flex-col sm:items-start gap-2"
                >
                  {category.sub_category.map((sub, indexx) => {
                    return (
                      <div key={sub.sub_category_name} className="flex gap-2 ">
                        <input
                          type="radio"
                          name="category"
                          id={sub.sub_category_name}
                          value={sub.sub_category_name}
                          // onClick={() => handleCat(sub.sub_category_name)}
                          onClick={() => setSubCat(sub.sub_category_name)}
                        />
                        <label htmlFor={sub.sub_category_name}>
                          {sub.sub_category_name}
                        </label>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        {/* categorie */}
        {/* <div
          className=" flex flex-col gap-2 mt-2
             sm:w-[100%] sm:flex sm:flex-col sm:items-start  sm:gap-4"
        >
          <div className="flex items-center justify-center font-semibold">
            <h1>Catégorie 1</h1>
          </div>
          <div
            className="
                sm:flex sm:w-[100%] sm:flex-col sm:items-start gap-2"
          >
            <div className="flex gap-2 ">
              <input type="radio" name="" id="" />
              <label htmlFor="">Sub catégorie</label>
            </div>
            <div className="flex gap-2 ">
              <input type="radio" name="" id="" />
              <label htmlFor="">Sub catégorie</label>
            </div>
            <div className="flex gap-2 ">
              <input type="radio" name="" id="" />
              <label htmlFor="">Sub catégorie</label>
            </div>
          </div>
        </div> */}
        {/* categorie */}
        {/* <div
          className=" flex flex-col gap-2 mt-2
             sm:w-[100%] sm:flex sm:flex-col sm:items-start  sm:gap-4"
        >
          <div className="flex items-center justify-center font-semibold">
            <h1>Catégorie 1</h1>
          </div>
          <div
            className="
                sm:flex sm:w-[100%] sm:flex-col sm:items-start gap-2"
          >
            <div className="flex gap-2 ">
              <input type="radio" name="" id="" />
              <label htmlFor="">Sub catégorie</label>
            </div>
            <div className="flex gap-2 ">
              <input type="radio" name="" id="" />
              <label htmlFor="">Sub catégorie</label>
            </div>
            <div className="flex gap-2 ">
              <input type="radio" name="" id="" />
              <label htmlFor="">Sub catégorie</label>
            </div>
          </div>
        </div> */}
      </div>
      {/* budget */}
      <div
        className=" mt-[20px] w-[100%] border-b-2 sm:border-none
        sm:flex sm:flex-col sm:items-start sm:gap-2"
      >
        <div>
          <h1>Budget:</h1>
        </div>
        <div className="w-[100%] ">
          <div>
            <label htmlFor="">Min:</label>
          </div>
          <div className="sm:w-[100%]">
            <input
              className="w-[100%] px-2 py-1 bg-zinc-400 rounded-sm"
              type="number"
              name=""
              id=""
              min={1}
              // onChange={() => handleCat(event.target.value)}
              onChange={() => setMin(event.target.value)}
            />
          </div>
        </div>

        <div className="sm:w-[100%]">
          <div>
            <label htmlFor="">Max:</label>
          </div>
          <div className="sm:w-[100%]">
            <input
              className="w-[100%] px-2 py-1 bg-zinc-400 rounded-sm"
              type="number"
              name=""
              id=""
              min={1}
              // onChange={() => handleCat(event.target.value)}
              onChange={() => setMax(event.target.value)}
            />
          </div>
        </div>
        <div
          className=" h-[40px]
            sm:w-[100%] sm:h-[40px] rounded-sm mt-[10px] "
        >
          <button className="w-[100%] h-[100%] bg-zinc-950 rounded-sm text-white hover:bg-zinc-700 ">
            Search
          </button>
        </div>
      </div>
    </div>
  );
}
