import React, { useContext, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import LeftShopContent from "../components/LeftShopContent";
import RightShopContent from "../components/RightShopContent";
import Example from "../components/card_footer_with_page_buttons";
import { ProductContext } from "../comtext/productContext";
import { InfosContext } from "../comtext/context";
import axios from "axios";

export default function Shop() {
  const { products, setProducts } = useContext(ProductContext);
  const { Infos } = useContext(InfosContext);
  var formData = new FormData();
  formData.append("id_admin", "7");
  formData.append("api_key", "98a5b5996de55773350a30ddffe0a091839ddf40");
  formData.append("action", "fetch_data");
  formData.append("minimum_price", 0);
  formData.append("maximum_price", 10000000000);
  formData.append("ram", "");
  formData.append("brand", "");

  const getProducts = async (Infos) => {
    var formData = new FormData();
    formData.append("id_admin", Infos.data.id_admin);
    formData.append("api_key", Infos.data.api_key);
    formData.append("action", "fetch_data");
    formData.append("minimum_price", 0);
    formData.append("maximum_price", 10000000000);
    formData.append("ram", "");
    formData.append("brand", "");

    try {
      const productsData = await axios.post(
        `${Infos.api.link}/api/agence/admin/view_all_product_page/new`,
        formData
      );

      await setProducts(productsData.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (Infos !== null) {
      getProducts(Infos);
    }
  }, [Infos]);
  return (
    <div className="">
      <Header />
      <div className="w-[100%] mt-[50px] sm:mt-[76px] py-3 flex flex-col items-center  ">
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
            <span onClick={getProducts}>Shop</span>
          </div>
          {/*  */}
          <div
            className="
                sm:flex sm:flex-row sm:items-start sm:justify-between gap-4 w-[80%] sm:w-full "
          >
            <LeftShopContent />
            <RightShopContent />
          </div>
          <Example />
        </div>
      </div>
      <Footer />
    </div>
  );
}
