import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Shop from "./pages/Shop";
import Mescommandes from "./pages/Mescommandes";
import Contact from "./pages/Contact";
import { InfosContext } from "./comtext/context";
import SinglePageProduct from "./pages/SinglePageProduct";
import { CategoryContext } from "./comtext/categoryContext";
import { ProductContext } from "./comtext/productContext";

function App() {
  const { Infos, setInfos, setCat4 } = useContext(InfosContext);
  const { categories, setCategories } = useContext(CategoryContext);
  const { products, setProducts } = useContext(ProductContext);
  const getData = async () => {
    var form_data = new FormData();
    form_data.append("sdsd", "sdsd");
    try {
      const res = await axios.post(
        "http://client.aizen.local/?get_store_info",
        form_data
      );
      await setInfos(res.data);
      // await setCat4([
      //   res.data.data.cat.category_picture[1],
      //   res.data.data.cat.category_picture[2],
      //   res.data.data.cat.category_picture[3],
      //   res.data.data.cat.category_picture[4],
      // ]);
      const res2 = await axios.get(
        `${res.data.api.link}/api/admin/filtre/${res.data.data.id_admin}/category_name/product/mobile`
      );
      await setCategories(res2.data);
      await setCat4([
        res2.data[0].category_name,
        res2.data[1].category_name,
        res2.data[2].category_name,
        res2.data[3].category_name,
      ]);
    } catch (err) {
      console.log(err);
    }
  };

  console.log(Infos);
  console.log(categories);

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/commande" element={<Mescommandes />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product/:id" element={<SinglePageProduct />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
