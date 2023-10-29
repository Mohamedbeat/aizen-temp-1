import React, { useContext } from "react";
import serwal from "./serwal.jpg";
import { Link, useNavigate } from "react-router-dom";
import { ProductContext } from "../comtext/productContext";

export default function RightShopContent() {
  const { products } = useContext(ProductContext);
  console.log(products);

  const navigate = useNavigate();
  const handleProductClick = (prod) => {
    navigate(`/product/${prod.product_id}`, { state: { product: prod } });
  };
  return (
    <div className="flex-[3] ">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-0 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Our Products
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8 relative ">
          {/* Items */}

          {products !== null && products.length !== 0 ? (
            products.map((prod, index) => {
              return (
                <div
                  key={index}
                  className="group relative shadow-lg p-3 rounded-md"
                >
                  <div
                    //   to={`/product/${prod.product_id}`}
                    className="cursor-pointer "
                    onClick={() => handleProductClick(prod)}
                  >
                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                      <img
                        src={`https://static.aizen-algerie.com/product_pic/${prod.product_pic}`}
                        alt="Front of men&#039;s Basic Tee in black."
                        className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                      />
                    </div>
                    <div className="mt-4 flex justify-between">
                      <div>
                        <h3 className="text-sm text-gray-700">
                          <span className="absolute inset-0"></span>
                          {prod?.product_name}
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">
                          {prod?.color}
                        </p>
                      </div>
                      <p className="text-sm font-medium text-gray-900">
                        {prod?.product_price} DZD
                      </p>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <p className="flex items-center justify-center text-[20px] sm:text-[25px] inset-0 w-full sm:mt-[100px] absolute ">
              No products found
            </p>
          )}
          {}
        </div>
      </div>
    </div>
  );
}
// const products = [
//     {
//         name:"serwal",
//         price:100,
//         color:"black",
//         id:1,
//     },
//     {
//         name:"serwal",
//         price:100,
//         color:"red",
//         id:2,
//     },
//     {
//         name:"serwal",
//         price:100,
//         color:"green",
//         id:3,
//     },
//     {
//         name:"serwal",
//         price:100,
//         color:"yellow",
//         id:4,
//     },
// ]
