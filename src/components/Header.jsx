import { Link } from "react-router-dom";
import Cart from "./Cart";
import { useContext, useState } from "react";
import CategoryList from "./CategoryList";
import { InfosContext } from "../comtext/context";

export default function Header() {
  const [cartState, setCartState] = useState(false);
  const [categoryState, setCategoryState] = useState(false);

  const { Infos, setInfos } = useContext(InfosContext);

  const setCategoryState1 = () => {
    setCategoryState(!categoryState);
  };

  const handleClick = (action) => {
    document.getElementById("sideMenu").style.transition =
      "0.4s all ease-in-out";
    if (action === "open") {
      document.getElementById("sideMenu").style.left = "0px";
      setCartState(false);
    } else {
      document.getElementById("sideMenu").style.left = "-500px";
    }
  };

  document.addEventListener("scroll", () => {
    // console.log(window.scrollY);
    if (window.scrollY >= 38) {
      document.getElementById("lower").style.position = "fixed";
      document.getElementById("lower").style.top = "0px";
    } else {
      document.getElementById("lower").style.position = "absolute";
      document.getElementById("lower").style.top = "38px";
    }
  });
  // console.log(`https://static.aizen-algerie.com/user_logo/${Infos.info.logo}`);
  // console.log("/////////");
  // console.log("https://static.aizen-algerie.com/user_logo/62266711522657_479779822438653.png");
  return (
    <>
      <div className="bg-zinc-950 flex items-center justify-center">
        <div className="w-[100%] text-white flex justify-around   py-2 text-center sm:flex sm:items-center sm:justify-between sm:w-[100%] sm:max-w-[1024px] sm:py-2 sm:text-white sm:font-bold ">
          {Infos !== null && <div>{Infos.description.b_title_2}</div>}
          {Infos !== null && <div>{Infos.description.s_title_2}</div>}
        </div>
      </div>

      {/* WE START FROM HERE */}
      <div
        id="lower"
        className=" z-[5] absolute w-[100%] bg-zinc-950 sm:bg-zinc-950 sm:bg-opacity-10 sm:backdrop-blur-md font-medium text-white flex items-center justify-center"
      >
        <div
          className="relative w-[100%] flex  items-center justify-around py-3
        sm:w-[100%] sm:max-w-[1024px] sm:flex sm:items-center sm:justify-center sm:py-5"
        >
          {/* **************************LOGO********************** */}
          <div className=" order-2 flex-1  sm:order-1 sm:flex-[1] text-left ">
            <Link to={"/home"} className="object-cover sm:w-[90%]">
              {Infos !== null && (
                <img
                  className="object-cover sm:w-[90%]"
                  // src={`https://static.aizen-algerie.com/user_logo/${Infos.info.logo}`}
                  src={`https://static.aizen-algerie.com/user_logo/${Infos.info.logo}`}
                  alt=""
                />
              )}
            </Link>
          </div>
          {/* **************************LIST********************** */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            style={{ fill: "white" }}
            className="flex-1 sm:hidden"
            onClick={() => handleClick("open")}
          >
            <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path>
          </svg>

          <div
            id="sideMenu"
            className={`absolute       
                top-[0] 
                left-[-500px]
                h-[100vh] w-[100vw] 

                
                sm:static sm:order-2 sm:flex-[3] sm:h-auto sm:w-auto  text-center`}
          >
            <ul
              className="flex relative flex-col rounded-lg p-10
                    text-black bg-white h-[100%] w-[100%]  items-center justify-start gap-5

                    sm:flex sm:flex-row sm:h-auto sm:w-auto sm:p-0 sm:bg-transparent sm:text-white sm:items-center sm:justify-between sm:gap-5 sm:text-[15px] "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                style={{ fill: "black" }}
                className="absolute top-[5px] right-[5px] 
                        
                        sm:hidden
                        "
                onClick={() => handleClick("colse")}
              >
                <path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path>
              </svg>
              <li>
                <Link
                  to={"/home"}
                  className="sm:rounded-full sm:hover:bg-slate-950 sm:px-3 sm:py-1 
                        "
                >
                  Vitrine
                </Link>
              </li>
              <li>
                <Link
                  className="flex relative items-center justify-center  sm:rounded-full sm:hover:bg-slate-950 sm:px-3 sm:py-1
                        "
                  onClick={() => setCategoryState1()}
                >
                  Catégories
                  <svg
                    className="fill-slate-950 sm:fill-slate-50"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path>
                  </svg>
                </Link>
                <CategoryList categoryState={categoryState} />
              </li>
              <li>
                <Link
                  to={"/shop"}
                  className="sm:rounded-full sm:hover:bg-slate-950 sm:px-3 sm:py-1
                        "
                >
                  Shop
                </Link>
              </li>
              <li>
                <Link
                  to={"/commande"}
                  className="sm:rounded-full sm:hover:bg-slate-950 sm:px-3 sm:py-1
                        "
                >
                  Mes commandes
                </Link>
              </li>
              <li>
                <Link
                  to={"/contact"}
                  className="sm:rounded-full sm:hover:bg-slate-950 sm:px-3 sm:py-1
                        "
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* **************************Cart********************** */}
          <div className="flex-1 flex items-center justify-center order-3 sm:order-3 sm:flex-[1] sm:flex sm:items-center sm:justify-end sm:relative ">
            <svg
              onClick={() => setCartState(!cartState)}
              className="cursor-pointer"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              style={{ fill: "white" }}
            >
              <path
                className="text-white"
                d="M21 4H2v2h2.3l3.28 9a3 3 0 0 0 2.82 2H19v-2h-8.6a1 1 0 0 1-.94-.66L9 13h9.28a2 2 0 0 0 1.92-1.45L22 5.27A1 1 0 0 0 21.27 4 .84.84 0 0 0 21 4zm-2.75 7h-10L6.43 6h13.24z"
              ></path>
              <circle cx="10.5" cy="19.5" r="1.5"></circle>
              <circle cx="16.5" cy="19.5" r="1.5"></circle>
            </svg>
            <Cart cartState={cartState} />
          </div>
        </div>
      </div>
    </>
  );
}
