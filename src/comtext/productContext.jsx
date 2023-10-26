import { info } from "autoprefixer";
import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { InfosContext } from "./context.jsx";
import axios from "axios";

export const ProductContext = createContext();

export const ProductContextProvider = ({ children }) => {
  const { Infos } = useContext(InfosContext);
  const [products, setProducts] = useState(null);

  const INIT_STATE = {
    id_admin: Infos?.data.id_admin,
    api_key: Infos?.data.api_key,
    minimum_price: 0,
    maximum_price: 99999999990,
  };
  const ProductReducer = function (state, action) {
    switch (action.type) {
      case "search":
        // console.log(action);
        // return console.log(state);
        return getProducts(Infos, action);
      // return getProducts(Infos, action);

      default:
        state;
    }
  };

  const getProducts = async (Infos, action) => {
    console.log(action);
    var formData = new FormData();
    formData.append("id_admin", Infos?.data.id_admin);
    formData.append("api_key", Infos?.data.api_key);
    formData.append("action", "fetch_data");
    formData.append("minimum_price", action.min || 0);
    formData.append("maximum_price", action.max || 1000000);
    formData.append("ram", "");
    formData.append("brand", action.subCat || "");

    try {
      const productsData = await axios.post(
        `${Infos?.api.link}/api/agence/admin/view_all_product_page/new`,
        formData
      );
      console.log(productsData);

      await setProducts(productsData.data);
    } catch (error) {
      console.log(error);
    }
  };
  const [newProducts, dispatch] = useReducer(ProductReducer, products);

  return (
    <ProductContext.Provider value={{ products, setProducts, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
};
