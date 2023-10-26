import React, { useContext, useEffect, useRef, useState } from "react";
import Footer from "../components/Footer";
import { Link, useLocation } from "react-router-dom";
import Header from "../components/Header";
import serwal from "./serwal.jpg";
import { ProductContext } from "../comtext/productContext";
import { InfosContext } from "../comtext/context";
import { info } from "autoprefixer";
import axios from "axios";

export default function SinglePageProduct() {
  const { products, setProducts } = useContext(ProductContext);
  const { Infos } = useContext(InfosContext);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [thisProduct, setThisProduct] = useState(null);
  const [productsColors, setProductsColors] = useState(null);
  const [productsSizes, setProductsSizes] = useState(null);
  const [productsImages, setProductsImages] = useState(null);
  const location = useLocation();
  const Pref = useRef();
  const productInfos = location.state.product;

  const handleSize = (e, size) => {
    document.getElementById("XS").classList.remove("bg-zinc-500");
    document.getElementById("XS").classList.add("bg-zinc-800");

    document.getElementById("S").classList.remove("bg-zinc-500");
    document.getElementById("S").classList.add("bg-zinc-800");

    document.getElementById("M").classList.remove("bg-zinc-500");
    document.getElementById("M").classList.add("bg-zinc-800");

    document.getElementById("L").classList.remove("bg-zinc-500");
    document.getElementById("L").classList.add("bg-zinc-800");

    document.getElementById("XL").classList.remove("bg-zinc-500");
    document.getElementById("XL").classList.add("bg-zinc-800");

    document.getElementById("XXL").classList.remove("bg-zinc-500");
    document.getElementById("XXL").classList.add("bg-zinc-800");

    document.getElementById("XXXL").classList.remove("bg-zinc-500");
    document.getElementById("XXXL").classList.add("bg-zinc-800");

    e.target.classList.remove("bg-zinc-800");
    e.target.classList.add("bg-zinc-500");
    setSelectedSize(size);
  };

  useEffect(() => {
    const getProductData = async (Infos) => {
      try {
        const formData = new FormData();
        formData.append("id_admin", Infos?.data.id_admin);
        formData.append("api_key", Infos?.data.api_key);
        formData.append("product_id", location.pathname.split("/")[2]);
        const prod = await axios.post(
          `${Infos?.api.link}/api/agence/admin/product_information/by_id`,
          formData
        );
        // const prodPics = await axios.post(
        //   `${Infos?.api.link}/api/agence/admin/product_pictures/by_id`,
        //   formData
        // );
        await setThisProduct(prod.data);
        await console.log(prod.data);
      } catch (error) {
        console.log(error);
      }
    };
    if (Infos !== null) {
      console.log(Infos);
      getProductData(Infos);
    }
  }, [Infos]);

  useEffect(() => {
    console.log(thisProduct);
    if (thisProduct !== null) {
      Pref.current.innerHTML = thisProduct?.product_desc;

      setProductsColors(JSON.parse(thisProduct?.variant[0].attribute_value));
      setProductsSizes(JSON.parse(thisProduct?.variant[2].attribute_value));

      // for (let i = 0; i < thisProduct.linked.length; i++) {
      //   setProductsImages(productsImages.push(thisProduct.linked[i]));
      //   console.log(thisProduct.linked[i]);
      // }
      setProductsImages(thisProduct.linked);
    }
  }, [thisProduct]);

  console.log(productsImages);
  const colorsData = ["red", "yellow", "green", "black", "orange", "white"];

  return (
    <div className="">
      <Header />
      <div className="w-[100%] my-[50px] sm:my-[76px] py-3 flex flex-col items-center mb-[200px] sm:mb-[100px]  ">
        <div
          className="w-[100%] flex flex-col items-center p-3
            sm:flex sm:flex-col sm:items-center sm:w-[100%] sm:max-w-[1024px] sm:py-2 sm:text-black sm:font-semibold
            sm:gap-[50px] "
        >
          {/* where we are */}
          <div
            className="w-[90%] sm:border-b-2 flex items-center justify-start gap-4 
                sm:w-[100%] sm:flex sm:items-center sm:justify-start sm:gap-8 sm:pb-3 "
          >
            <span>
              <Link to={"/home"}>Acceuil</Link>
            </span>
            <span>/</span>
            <span>
              <Link>{productInfos.sub_category_name}</Link>
            </span>
            <span>/</span>
            <span>{productInfos.product_name}</span>
          </div>
          {/* Product images */}
          {productsImages !== null && (
            <>
              {productsImages.length === 1 && (
                <div className=" sm:w-auto h-[500px] sm:flex sm:flex-col sm:items-center sm:justify-center mb-[70px] sm:mb-0  ">
                  <div
                    className=" h-[100%] flex items-start justify-center 
                          sm:grid sm:grid-cols-1 sm:grid-rows-1 gap-[10px]  "
                  >
                    <div className="h-[100%] sm:row-span-2 flex items-center justify-center rounded-lg overflow-hidden">
                      <img
                        src={`https://static.aizen-algerie.com/product_pic/${productsImages[0].product_picture}`}
                        className="w-[100%] h-[100%] object-cover "
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              )}
              {productsImages.length === 4 && (
                <div className=" sm:w-auto h-[500px] sm:flex sm:flex-col sm:items-center sm:justify-center mb-[70px] sm:mb-0  ">
                  <div
                    className=" h-[100%] flex items-start justify-center 
                          sm:grid sm:grid-cols-3 sm:grid-rows-2 gap-[10px]  "
                  >
                    {productsImages.map((image, index) => {
                      return (
                        <div
                          key={index}
                          className={`h-[100%] ${index === 2 && "sm:row-span-2"}
                          ${
                            index === 0 && "sm:row-span-2"
                          } flex items-center justify-center rounded-lg overflow-hidden`}
                        >
                          <img
                            key={image}
                            src={`https://static.aizen-algerie.com/product_pic/${image.product_picture}`}
                            className={`w-[100%]  h-[100%] object-cover `}
                            alt=""
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
              {productsImages.length > 4 && (
                <div className=" sm:w-auto h-[500px] sm:flex sm:flex-col sm:items-center sm:justify-center mb-[70px] sm:mb-0  ">
                  <div
                    className=" h-[100%] flex items-start justify-center 
                          sm:grid sm:grid-cols-3 sm:grid-rows-2 gap-[10px]  "
                  >
                    <div
                      className={`h-[100%] sm:row-span-2
                           flex items-center justify-center rounded-lg overflow-hidden`}
                    >
                      <img
                        src={`https://static.aizen-algerie.com/product_pic/${productsImages[0].product_picture}`}
                        className={`w-[100%]  h-[100%] object-cover `}
                        alt=""
                      />
                    </div>
                    <div
                      className={`h-[100%] 
                           flex items-center justify-center rounded-lg overflow-hidden`}
                    >
                      <img
                        src={`https://static.aizen-algerie.com/product_pic/${productsImages[1].product_picture}`}
                        className={`w-[100%]  h-[100%] object-cover `}
                        alt=""
                      />
                    </div>
                    <div
                      className={`h-[100%] sm:row-span-2
                           flex items-center justify-center rounded-lg overflow-hidden`}
                    >
                      <img
                        src={`https://static.aizen-algerie.com/product_pic/${productsImages[2].product_picture}`}
                        className={`w-[100%]  h-[100%] object-cover `}
                        alt=""
                      />
                    </div>
                    <div
                      className={`h-[100%] 
                           flex items-center justify-center rounded-lg overflow-hidden`}
                    >
                      <img
                        src={`https://static.aizen-algerie.com/product_pic/${productsImages[3].product_picture}`}
                        className={`w-[100%]  h-[100%] object-cover `}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              )}
              {productsImages.length === 0 && (
                <div className="text-[25px] font-bold ">
                  <h1>No images to show</h1>
                </div>
              )}
            </>
          )}

          <div className="w-[100%] flex flex-col gap-6 items-center justify-center h-[60vh] mt-[20px] sm:mt-0">
            {/* product infos */}
            <div
              className="
                    sm:w-[100%] sm:flex sm:items-start sm:justify-between "
            >
              <div
                className="flex flex-col items-start justify-start gap-4 flex-[2]
                        sm:flex sm:flex-col sm:items-start sm:justify-start sm:gap-4 sm:flex-[2]"
              >
                <div
                  className="text-[20px] font-bold
                            sm:text-[20px] sm:font-bold "
                >
                  <h1>{productInfos.product_name}</h1>
                </div>
                <div
                  className="text-[16px] font-semibold flex flex-col items-start justify-start 
                            sm:text-[16px] sm:font-semibold sm:flex sm:flex-col sm:items-start sm:justify-start "
                >
                  <h2>Description </h2>
                  <p ref={Pref}></p>
                </div>
                {/* <div
                  className="text-[16px] font-semibold flex flex-col items-start justify-start 
                            sm:text-[16px] sm:font-semibold sm:flex sm:flex-col sm:items-start sm:justify-start "
                >
                  <h2>Description title 1</h2>
                  <p>Description 1</p>
                </div>
                <div
                  className="text-[16px] font-semibold flex flex-col items-start justify-start 
                            sm:text-[16px] sm:font-semibold sm:flex sm:flex-col sm:items-start sm:justify-start "
                >
                  <h2>Description title 1</h2>
                  <p>Description 1</p>
                </div>
                <div
                  className="text-[16px] font-semibold flex flex-col items-start justify-start 
                            sm:text-[16px] sm:font-semibold sm:flex sm:flex-col sm:items-start sm:justify-start "
                >
                  <h2>Description title 1</h2>
                  <p>Description 1</p>
                </div> */}
              </div>

              <div
                className="flex flex-col items-start justify-start gap-4
                        sm:flex sm:flex-col sm:items-start sm:justify-start sm:gap-4 sm:border-l-2 border-none sm:flex-[1] sm:w-[100%]
                        sm:h-[100%] sm:pl-5 "
              >
                {/* price */}
                <div
                  className="text-[20px] font-bold 
                            sm:text-[20px] sm:font-bold "
                >
                  <h1>Price : {productInfos.product_price} DZD</h1>
                </div>

                {/* Size */}
                {productsSizes !== null && (
                  <div className="flex items-start flex-col gap-3 mt-[10px] sm:mt-0">
                    <div
                      className={`${productsSizes.length === 0 && "hidden"}
                    ${
                      productsSizes.length === 1 &&
                      productsSizes[0] === "" &&
                      "hidden"
                    }
                    `}
                    >
                      <h1>Taille</h1>
                    </div>
                    <div
                      className=" justify-center
                                flex gap-2 flex-wrap "
                    >
                      {productsSizes.map((size) => {
                        return (
                          <div
                            key={size}
                            className={`
                                    border-1 cursor-pointer bg-zinc-800 text-white h-[70px] w-[70px] rounded-md
                                    ${
                                      size === "" ? "hidden" : "flex"
                                    } items-center justify-center transition-all duration-200 `}
                            onClick={() => handleSize(event, "XS")}
                            id={size}
                          >
                            {size}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Color */}
                {productsColors !== null && (
                  <div
                    className={`w-[100%] ${
                      productsColors.length === 1 && productsColors[0] === ""
                        ? "hidden"
                        : "flex"
                    }  flex-col gap-3 items-center sm:items-start`}
                  >
                    <div className="w-[100%] flex justify-start ">
                      <h1>Color</h1>
                    </div>
                    <div className="flex gap-4 flex-wrap items-center sm:items-start">
                      {productsColors.map((color, index) => {
                        return (
                          <div
                            key={color}
                            className={`h-[50px] w-[50px] rounded-full flex text-[13px]
                                        items-center justify-center cursor-pointer transition-all duration-200 `}
                            style={{
                              backgroundColor: `${color}`,
                              color: `${
                                color === "black" || color === "red"
                                  ? "white"
                                  : "black"
                              }`,
                              opacity: `${
                                selectedColor === index ? "1" : "0.5"
                              }`,
                              border: "1px solid black",
                            }}
                            onClick={() => setSelectedColor(index)}
                          ></div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* perchase button */}
                <div className="w-[100%] flex items-center justify-center">
                  <button
                    className="w-[80%] sm:w-[100%] bg-zinc-900 text-white py-2 sm:py-3 rounded-md
                                hover:bg-zinc-700 "
                  >
                    Acheter
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
