import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { InfosContextProvider } from "./comtext/context.jsx";
import { CategoryContextProvider } from "./comtext/categoryContext.jsx";
import { ProductContextProvider } from "./comtext/productContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <InfosContextProvider>
    <CategoryContextProvider>
      <ProductContextProvider>
        <App />
      </ProductContextProvider>
    </CategoryContextProvider>
  </InfosContextProvider>
);
